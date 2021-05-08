var express = require('express');
var router = express.Router();
const axios = require('axios');
const { signedCookie } = require('cookie-parser');

/* GET users listing. */
router.get('/', async(req, res) => {
  try {
    const newsAPI = await axios.get(`https://newsapi.org/v2/everything?q=${req.query.keyword}&apiKey=9231ede9f71f47af9db9da58a170aca6`)
    res.send(newsAPI.data)
  } catch (error) {
    if(error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log('Error', error.message);
    }
  }
});

module.exports = router;
