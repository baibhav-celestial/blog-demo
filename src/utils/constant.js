const API_KEY = process.env.REACT_APP_BLOG_API_KEY
export const WALL_STREET_API = 'https://newsapi.org/v2/everything?domains=wsj.com&apiKey='+API_KEY

export const TESLA_NEWS_API = 'https://newsapi.org/v2/everything?q=tesla&from=2024-07-19&sortBy=publishedAt&apiKey='+API_KEY