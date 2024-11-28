import Parser from 'rss-parser'
export const FEEDS = [
  {
    slug: "yt",
    title: "The MarzLars Youtube Channel",
    url: "https://www.youtube.com/@MarsLaaars",
  }
];

export async function getFeed(feedUrl) {
  let parser = new Parser()
  const feed = parser.parseURL(feedUrl)

  return feed
}