const express = require('express');
const path = require('path');

const app = express();
const router = express.Router();

const _PUBLIC_PATH = path.join(__dirname, 'public');
const _PORT = 8080;

router.get('/', (req, res) => {
    const view = path.join(_PUBLIC_PATH, 'index.html');
    res.sendFile(view);
});

app.use(express.static(_PUBLIC_PATH));
app.use('/', router);

app.listen(_PORT, () => {
    console.log(`App listening on port ${_PORT}`)
})
