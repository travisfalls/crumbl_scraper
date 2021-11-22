const PORT = 8000;
const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");

const app = express();

const URL = "https://crumblcookies.com/";

axios(URL)
    .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);
        const flavors = $('li[id*=individual-cookie-flavor]', html);
        const cookies = [];

        flavors.each(function() {
            const title = $(this).find('h3').text();
            const description = $(this).find('p').text();
            
            cookies.push({title, description});
        })
        console.log(cookies);
    }).catch(err => console.log(err));

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));