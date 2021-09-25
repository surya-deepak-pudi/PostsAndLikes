const express = require("express")
const cors = require("cors")

const postRoutes = require("./Routes/posts")

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.listen(port, () => {
  console.log("listening....")
})

app.use("/", postRoutes)
