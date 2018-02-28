const API_KEY = 'AIzaSyBSqVGVtYsetHrjrhrzCwxtNtMi7yeP0WY';
const youtubeApiBaseUrl = 'https://www.googleapis.com/youtube/v3';

export default class Api {
  static search(query) {
    let url = `${youtubeApiBaseUrl}/search?part=snippet&type=video&maxResults=50&q=${query}&key=${API_KEY}`;
    console.log(url);
    return fetch(url)
      .then(response => response.json())
      .then(json => json)
      .catch(error => console.warn(error));
  }
}
