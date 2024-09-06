import React, { useEffect, useState } from "react";
import "./PlayVideo.css";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import { API_KEY, value_convert } from "../../data";
import moment from "moment";
import { useParams } from "react-router-dom";

const PlayVideo = () => {
  const { videoId } = useParams();
  const [apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState([]);
  const [error, setError] = useState(null);

  const fetchVideoData = async () => {
    const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    try {
      const res = await fetch(videoDetails_url);
      const data = await res.json();
      if (res.ok) {
        setApiData(data.items[0]);
      } else {
        setError("Video verileri yüklenirken bir hata oluştu.");
      }
    } catch (error) {
      setError("Bir hata oluştu: " + error.message);
    }
  };

  const fetchOtherData = async () => {
    if (apiData) {
      try {
        const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
        const channelRes = await fetch(channelData_url);
        const channelData = await channelRes.json();
        if (channelRes.ok) {
          setChannelData(channelData.items[0]);
        }

        const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;
        const commentRes = await fetch(comment_url);
        const commentData = await commentRes.json();
        if (commentRes.ok) {
          setCommentData(commentData.items);
        }
      } catch (error) {
        setError("Ek veriler yüklenirken bir hata oluştu. ", error);
      }
    }
  };

  useEffect(() => {
    fetchVideoData();
  }, [videoId]);

  useEffect(() => {
    if (apiData) {
      fetchOtherData();
    }
  }, [apiData]);

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  return (
    <div className="play-video">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      <h3>{apiData?.snippet?.title || "Başlık Burada"}</h3>
      <div className="play-video-info">
        <p>
          {apiData ? value_convert(apiData.statistics.viewCount) : "16K"} Views
          &bull; {apiData ? moment(apiData.snippet.publishedAt).fromNow() : ""}
        </p>
        <div>
          <span>
            <img src={like} alt="Like" />
            {apiData ? value_convert(apiData.statistics.likeCount) : 155}
          </span>
          <span>
            <img src={dislike} alt="Dislike" />
            {apiData ? value_convert(apiData.statistics.dislikeCount) : 155}
          </span>
          <span>
            <img src={share} alt="Share" />
            Share
          </span>
          <span>
            <img src={save} alt="Save" />
            Save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img
          src={channelData?.snippet?.thumbnails?.default?.url || ""}
          alt="Channel Thumbnail"
        />
        <div>
          <p>{apiData?.snippet?.channelTitle || "Kanal İsmi"}</p>
          <span>
            {channelData
              ? value_convert(channelData.statistics.subscriberCount)
              : "1M"}{" "}
            Abone
          </span>
        </div>
        <button>Abone Ol</button>
      </div>
      <div className="vid-description">
        <p>
          {apiData?.snippet?.description.slice(0, 250) || "Açıklama Burada"}
        </p>
        <hr />
        <h4>
          {apiData ? value_convert(apiData.statistics.commentCount) : 102}{" "}
          Yorumlar
        </h4>
        {commentData.map((item) => (
          <div key={item.id} className="comment">
            <img
              src={item.snippet.topLevelComment.snippet.authorProfileImageUrl}
              alt="Profile"
            />
            <div>
              <h3>
                {item.snippet.topLevelComment.snippet.authorDisplayName}{" "}
                <span>
                  {moment(
                    item.snippet.topLevelComment.snippet.publishedAt
                  ).fromNow()}
                </span>
              </h3>
              <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
              <div className="comment-action">
                <img src={like} alt="Like" />
                <span>
                  {value_convert(
                    item.snippet.topLevelComment.snippet.likeCount
                  )}
                </span>
                <img src={dislike} alt="Dislike" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayVideo;
