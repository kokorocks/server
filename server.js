const express = require('express');
const vhost = require('vhost');

const app = express();

// Create the main site handler
const mainSite = express();
mainSite.get('/', (req, res) => {
    res.send('Welcome to the main site!');
});

// Create the API handler
const apiSite = express();
apiSite.get('/', (req, res) => {
    res.send('Welcome to the API!');
});

// Create a catch-all handler for unknown subdomains
const unknownSubdomain = express();
unknownSubdomain.get('/', (req, res) => {
    res.send('This subdomain does not exist.');
});

// Use vhost to handle subdomains
app.use(vhost('www.example.com', mainSite)); // Main site at www.example.com
app.use(vhost('api.example.com', apiSite));  // API at api.example.com
app.use(vhost('*', unknownSubdomain));      // Catch-all for unknown subdomains

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});

