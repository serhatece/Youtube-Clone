export const API_KEY = 'AIzaSyBeDZ73gjs-CX7_Usa2vLGEZlhMaSUCiwk';

export const value_convert = (value) => {
    if(value>=1000000){
        return Math.floor(value/1000000)+"M";
    }else if(value>=1000){
        return Math.floor(value/1000)+"K";
    }else{
        return value;
    }
}