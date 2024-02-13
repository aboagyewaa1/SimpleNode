const express = require ('express')
const app = express()

app.get('/', (req,res) => res.send('Hii! builing a container for a simple node app'))
app.listen (3000, () => console.log('listening'))