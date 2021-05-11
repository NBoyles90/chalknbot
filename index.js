// Author: Nikki Collins
// Date: 05/11

//making a change
const chalk = require('chalk');

console.log(chalk.greenBright('Hello world!'));

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

const PREFIX = "?"

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
  else{
    let args = msg.content.substring(PREFIX.length).split(" ");
    console.log(args)

    switch(args[0])
    {
        case 'website':
            msg.channel.send("https://www.youtube.com/user/kir10s");
            break;
        case 'avatar':
            msg.reply(msg.author.displayAvatarURL());
            break;
        case 'clear':
            if(!args[1]){
                return msg.reply("Error Please define a second parameter")
            }
            else{
                //clear
                msg.channel.bulkDelete(args[1]);
                break
            }
    }
  }
});




client.login('ODM5OTEzMTIyNTM3MTQ0MzUw.YJQkDQ._JJxruay1tCu_gEm678RMCFpU_c');