const express = require('express');
const app = express();
require('dotenv').config()
const API_KEY = process.env.API_KEY;
const path = require('path');
const pathToDist = path.join(__dirname, '../giphy-search/dist')
const serveStatic = express.static(pathToDist)
/** FEEDBACK: Great job!  */
const serveGifs = async (req, res, next) => {
    const response = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=25&offset=0&rating=g&bundle=messaging_non_clips`)
    const data = await response.json()
    res.send(data);
}
app.use(serveStatic)
app.get("/api/gifs", serveGifs);

const PORT = 8080
app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
})
