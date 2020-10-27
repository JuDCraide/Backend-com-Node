const express = require('express');

const app = express();

app.get('/projects', (req, res) => {
    return res.json({ message: 'Hello word' });
})

app.listen(3333, () => {
    console.log('🐱‍🐉🚀 Back-end started');
});

