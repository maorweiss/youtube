import axios from 'axios';

const KEY = 'AIzaSyBy4QO8crc-hLSg5Cx9jp5RRB6c3Dc2H_Q';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});