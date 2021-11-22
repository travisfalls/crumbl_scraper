const fetch = require("node-fetch");
const cheerio = require("cheerio");
const fs = require("fs");

//function to get the raw data
const getRawData = (URL) => {
    return fetch(URL)
        .then((response) => response.text())
        .then((data) => {
            return data;
        });
};

// URL for data
const URL = "https://crumblcookies.com/";

// start of the program
const getCrumblCookieList = async () => {
    const crumblCookieRawData = await getRawData(URL);
    
    // parsing the data
    const parsedCrumblCookieData = cheerio.load(crumblCookieRawData);

    
};

// invoking the main function
getCrumblCookieList();