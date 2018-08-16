const Discord = require("discord.js");
const client = new Discord.Client();
const {body} = snekfetch.get(api_url);

client.on("ready", () => {
  console.log("I am ready!");
});

//client.on("message", (message) => {
  //  if (message.content){
    //message.channel.send(message);
    //}
//});

client.login(process.env.BOT_TOKEN);
