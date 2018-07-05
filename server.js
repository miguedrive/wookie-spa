import express from 'express';
const app = express()
app.get('/', (req, res) => {
    res.send('Wookie Spa System')
})
app.listen(5656, () => {
    console.log('http://localhost:5656')
})
