const posts = [
  { id: 1, name: "Flowers are nice" },
  { id: 2, name: "So are blobs of cheese" },
  { id: 3, name: "What about chocolate?" },
  { id: 4, name: "Sure they are nice too!" },
]
const likes = [
  { id: 10, post_id: 1, users: ["arun", "ram", "sita"] },
  { id: 11, post_id: 2, users: ["ram", "sita"] },
  { id: 12, post_id: 3, users: ["arun", "sita"] },
  { id: 13, post_id: 4, users: ["ram", "sita"] },
]

module.exports = { posts, likes }
