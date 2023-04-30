const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5005;

const categories = require('./Data/categories.json');
const news = require('./Data/news.json')

app.use(cors())

app.get('/', (req, res) => {
  res.send('Dragon is running')
})
// 1...
app.get('/categories', (req, res) => {
  // console.log(categories)
  res.send(categories)
})

// 2......
app.get('/news', (req, res) => {
  // console.log(news);
  res.send(news);
})
// 3..........
app.get('/news/:id', (req, res) => {
  const id = req.params.id;
  // console.log(id);
  const selectedNews = news.find(n => n._id === id)
  res.send(selectedNews);
})
// 4............
app.get('/categories/:id', (req, res) => {
  const id = parseInt(req.params.id);
  // console.log(id);

  if (id === 0) {
    res.send(news)
  }
  else {
    const categoryNews = news.filter(n => parseInt(n.category_id) === id)
    res.send(categoryNews);
  }

  /* const categoryNews=news.filter(n=>n.category_id === id)
  res.send(categoryNews); */


})






app.listen(port, () => {
  console.log(`Dragoon API running on port: ${port}`)
})