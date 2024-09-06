import React, { useEffect, useState } from "react";
import "./Recomended.css";
import { API_KEY, value_convert } from "../../data";
import { Link } from "react-router-dom";

const Recomended = ({ categoryId }) => {
  const [apiData, setApiData] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    const relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;

    try {
      const res = await fetch(relatedVideo_url);
      const data = await res.json();

      if (res.ok) {
        setApiData(data.items);
      } else {
        setError(`Veri çekilirken hata oluştu: ${data.error.message}`);
      }
    } catch (error) {
      setError(`Bir hata oluştu: ${error.message}`);
    }
  };

  useEffect(() => {
    fetchData();
  }, [categoryId]);

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  return (
    <div className="recommended">
      {apiData.length > 0 ? (
        apiData.map((item) => (
          <Link
            to={`/video/${item.snippet.categoryId}/${item.id}`}
            key={item.id} // Benzersiz key kullanımı
            className="side-video-list"
          >
            <img
              src={item.snippet.thumbnails.medium.url}
              alt={item.snippet.title}
            />
            <div className="vid-info">
              <h4>{item.snippet.title}</h4>
              <p>{item.snippet.channelTitle}</p>
              <p>{value_convert(item.statistics.viewCount)} Views</p>
            </div>
          </Link>
        ))
      ) : (
        <p>Yükleniyor...</p> // Veri yüklenirken gösterilecek mesaj
      )}
    </div>
  );
};

export default Recomended;
