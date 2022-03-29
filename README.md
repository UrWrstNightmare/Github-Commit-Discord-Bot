# Github-Commit-Discord-Bot
Github commit checker bot for discord (For 1 Commit per day challenge)

Built by following https://discordjs.guide/creating-your-bot

###How to build
1. Copy  config.template.js to config.js and populate the missing parameters.
2. Run ```pm2 start Github-Commit-Bot-pm2.json``` (You may need to run ```npm i -g pm2``` if pm2 is not already installed)
3. To view status, ```pm2 ls```
4. To view logs, ```pm2 logs Github-Commit-Bot```