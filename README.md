# MrWorldwide
> *Windows + NordVPN only(for now)*

Sometimes when calling api's you will get ip call limits. MrWorldwide circumvents that by changing around a vpn.

## Prerequisites
- Have node installed(https://nodejs.org/)
- Have a NordVPN subscription(https://nordvpn.com/)
- Have NordVPN windows client installed(https://nordvpn.com/download/windows/)

## Settings
Change *intervalSeconds*(seconds between reconnects) and *countries*(list of countries to choose from) in `config.json`

## Start
- run `npm i` in the directory
- then run `npm run start`
