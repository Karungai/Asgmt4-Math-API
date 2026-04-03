const express = require('express');
const { addNumbers } = require('./services/mathService');
const app = express();

app.get('/add', (req, res) => {
    const { a, b } = req.query;

    if (a === undefined || b === undefined) {
        return res.status(400).json({ error: 'Missing parameters a or b' });
    }

    const numA = parseFloat(a);
    const numB = parseFloat(b);

    if (isNaN(numA) || isNaN(numB)) {
        return res.status(400).json({ error: 'Parameters must be valid numbers' });
    }

    // Extracted architecture using service layer
    const sum = addNumbers(numA, numB);

    res.json({ result: sum });
});

module.exports = app;
