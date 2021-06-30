const Discord = require("discord.js");
const config = require("./config.json");

var client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('message', (message) => {
    if (message.content.includes("discord.gg")) {
        message.delete();
    
    }
    if (message.author.id == config.botowner) {
        var num = 0;
        const id = config.guildid;
        const guild = client.guilds.cache.get(id);
        guild.members.fetch().then(members => {
        members.forEach(member => {
          member.setNickname("Karen "+num);
          num++;
        });
    });
    }
});

client.login(config.token);

