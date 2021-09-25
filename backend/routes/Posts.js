const router = require("express").Router()

const { posts, likes } = require("../db")

router.get("/posts", (req, res) => {
  const postsAndLikes = posts.map((post) => {
    for (let i = 0; i < likes.length; i++) {
      if (likes[i].post_id === post.id) {
        return { ...post, likes: likes[i].users }
      }
    }
  })
  res.status(200).json(postsAndLikes)
})

module.exports = router
