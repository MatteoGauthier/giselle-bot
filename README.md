# Giselle-bot
Giselle est un bot discord créer à l'aide du framerworks discord.js qui commmunique avec l'[API Discord](https://discordapp.com/developers/docs). Giselle grandi de jours en jours, il se peut que des bugs peuvent être perçu (pas encore), si vous avez des remarques où des questions contacter moi à l'aide d'une des plateformes ci-dessous ou créer une [issue](https://github.com/MattixNow/giselle-bot/issues) au sein du repository github. Les pull-requests sont aussi disponibles.
<details>
<summary>Commandes disponibles</summary>

| Column A | Column B | Column C |
| -------- | -------- | -------- |
| A1       | B1       | Cd1      |
| A2       | B2       | C2       |
| A3       | B3       | C3       |
</details>

| Commands | Description                                         |
| -------- | --------------------------------------------------- |
| `$help`  | Display help                                        |
| `$about` | B2                                                  |
| `$news`  | Faires apparaitres les actualités les plus fraiches |
| `$ping`  | Uniquement pour les pongistes                       |
| `$hey`   | Enjoliveur votre journée                            |
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