# Giselle-bot Website

## Todo
- [ ] Créer un effet de transition au click des bouttons
- [ ] Faires apparaitres à gauche une preview des fichiers github et à droite des screenshot du fonctionnement

## Development - Build

### Requirement
* `git` installed
* `node` installed
  * `npm` / `yarn` installed
  * `nodemon` optional

### Build locally
Clone the repository using
```bash
git clone https://github.com/MattixNow/giselle-bot
```

Install the dependencies
```markdown
yarn install // or npm install
```


Configure your own Discord API Token ([create your app here](https://discordapp.com/developers/applications/)), and copy it to your clipboard
```bash
your_Token
```

Start the node.js application
```bash
TOKEN=your_Token npm start
```
```markdown
TOKEN=your_Token nodemon // Auto-reload
```

## Credits

* `discord.js` [frameworks](https://github.com/discordjs/discord.js) by Discord.js team
* `eslachance` created a useful [gist](https://gist.github.com/eslachance/3349734a98d30011bb202f47342601d3)
* `Amazon Web Service - ec2` used to host the bot
* `nodemon` auto-reload app
* `embed-visualizer` Discord embed generator