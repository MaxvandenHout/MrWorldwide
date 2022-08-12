const { exec } = require("child_process");
const fs = require("fs");

const data = fs.readFileSync('./config.json', 'utf8');
let config = JSON.parse(data);
let country = getCountry(config);
let lastChange = new Date();
while (true) {
    console.log("Changing vpn to " + country)
    exec(`cd C:/Program Files/NordVPN && nordvpn -c -g \"${country}\"`);
    lastChange = new Date();
    country = getCountry(config, country);
    while (lastChange > new Date(new Date().getTime() - config.secondsInteval * 1000)) {}
}

function getCountry(config, current = '') {
    let newCountry = config.countries[Math.floor(Math.random() * config.countries.length)];
    if (newCountry === current) {
        newCountry = getCountry(config, current);
    }

    return newCountry;
}