module.exports = (req, res) => {
    const { name = 'Mundo' } = req.query
    res.status(200).send(`Hola ${name}!`)
  }
