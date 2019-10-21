var express = require('express');

var app = express();

var PORT = 3000;

const shuffleArray = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
}

const dumbArray = ['red', 'green', 'blue'];

app.get('/colors', (req, res) => {
    res.status(200).send(shuffleArray([...dumbArray]));
});

app.listen(PORT, function() {
    console.log('Server is running on PORT:', PORT);
});