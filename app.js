
const express = require('express')
const app = express()
const port = process.env.port || 3003;

app.listen(port, () => {
   console.log("Server is up and listening on 3003...")
})

app.get("/", (req, res) => {
        res.send("API Version App HIIcssadsadIIIIIIIIIIII  ")
      });
