const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if(message.content.toLowerCase().startsWith("!give")) {
 
        //Check who executed the command
        if(message.author.id !== "MY_ID") {
            message.reply("You are not allowed to execute this command");
            return;
        }
     }
});

// THIS  MUST  BE  THIS  WAY
client.login('NjcyMDc3NTg5MTYyMDk4Njkx.XjGYgg.JDnATL69Didc8e_amq70OUuqiak');