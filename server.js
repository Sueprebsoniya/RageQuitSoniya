
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(
    path.join(__dirname, 'RageQuitSoniya', 'creative_archive_portfolio')
));

app.listen(PORT, () => {
    console.log('Portfolio running at http://localhost:3000');
});
