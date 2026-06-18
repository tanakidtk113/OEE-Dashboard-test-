const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())

app.get("/api/data", (req, res) => {
  res.json({
    message: "Nigga",
    oee: 85
  })
})

const PORT = 5000

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
