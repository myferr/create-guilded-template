// importing TouchGuild
const {
  Client,
  GatewayLayerIntent,
  ApplicationCommandType,
} = require("touchguild");

const chalk = require("chalk");
const config = require("./config/config.json");
const client = new Client({
  token: config.TOKEN,
  intents: [GatewayLayerIntent.ALL],
});

client.on("ready", () => {
  console.log(
    `${chalk.bold.green(
      "√ Connection to Guilded established as " +
        client.user.username +
        " - " +
        client.user.id
    )}`
  );
});

client.connect(); // Connect to Guilded
