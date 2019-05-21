const axios = require('axios')

module.exports = app => {
  app.get('/api/source-code', (req, res) => {
    var url = req.params.articleUrl
    console.log('TCL: url', url)

    axios
      .get(url)
      .then(response => {
        console.log('TCL: response', response)

        res.json(response)
      })
      .catch(e => {
        console.log(e)
      })
  })
}
