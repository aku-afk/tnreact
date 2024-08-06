const express = require('express')
const app = express()
const port = 2045

app.get('/api', (req, res) => {
    res.json({
        "users": [
            "u1",
            "u2",
            "u3"
        ]
    })
})
app.get('/apix', (req, res) => {
    res.json({
        "pape": [
            "COK"
        ]
    })
})

// ingfo
app.listen(port, () => console.log(`SERPER RUN : ${port}`))