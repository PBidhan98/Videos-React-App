import axios from 'axios';

const KEY = 'AIzaSyC_b-l4-FERnHR7aPqsrJiCcdigZM3YdWM';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
