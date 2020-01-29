const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
     if(message.content.toLowerCase().startsWith("!give")) {
 
        //Check who executed the command
        message.reply(message.auther.id);

        //Check if enough arguments were given
        //Split by space, so array for command should be ["!give", "@someone", "5"]
        //Although I'm not sure if mentions are included in the content
        let args = message.content.split(" ");
        if(args.length !== 3) {
            message.reply("Command syntax:\n!give <@user> <points>");
            return;
        }

        //Check what (and if a) user was mentioned
        if(message.mentions.users.size< 1) {
            message.reply("You must provide a user");
            return;
        }
        
        //Get the mentioned user
        let userMentioned = message.mentions.users.first();
        
        //Try and parse points
        let points = parseInt(args[2]);
        if(isNaN(points)) {
            message.reply("You did not provide a valid number");
            return;
        }
        
        //userData can just be a key-value map (unless you're storing more things than points)
        userData[userMentioned.id] += points;

        //In case you are storing more than points, you'll first have to check if the object has been initialized
        if(!userData[userMentioned.id]) userData[userMentioned.id] = {...}
        userData[userMentioned.id].points += points;
        
        //+ Save the data
     }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
