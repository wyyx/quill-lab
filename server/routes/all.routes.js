const axios = require('axios')

module.exports = app => {
  app.get('/api/source-code', (req, res) => {
    var url = req.query.url
    console.log('TCL: url', url)

    axios
      .get(url)
      .then(response => {
        console.log('TCL: response.data', response.data)

        res.send(response.data)
      })
      .catch(e => {
        console.log(e)
      })
  })
}
