import axios from "axios";
const BASE_URL = `https://youtube138.p.rapidapi.com`; 

const options = {
  params: { hl: 'en', gl: 'US'},
  headers: {
    'X-RapidAPI-Key': '1f98bdadbcmshcf3c98731679e65p1c941cjsn7d777f98990d',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};

export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};