import axios from 'axios'


const KEY = "AIzaSyDbV6m6JdjMWNkDX9D2_PuWKh6naXm6NHY"

const youtube = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
})

export {KEY, youtube}