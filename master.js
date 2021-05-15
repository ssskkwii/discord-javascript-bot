const Discord = require('discord.js');
const client = new Discord.Client();
const ayarçek = require('./ayar.json');
const { Client, MessageEmbed } = require('discord.js')
new Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });

var prefix = ayarçek.prefix;
var özelprefix = ayarçek.özelprefix;
var prefixc = ayarçek.botdcsunucu;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content.toLocaleLowerCase() === 'merhaba') {
    msg.reply('Hoşgeldin!');
  }
});

client.on('message', msg => {
    if (msg.content.toLocaleLowerCase() === 'sa') {
      msg.reply('Hoşgeldin!');
    }
  });

  client.on('message', msg => {
    if (msg.content.toLocaleLowerCase() === 'selam') {
      msg.reply('Hoşgeldin!');
    }
  });
  
  client.on('message', msg => {
    if (msg.content.toLocaleLowerCase() === prefix + 'davet') {
      msg.author.send('https://discord.com/api/oauth2/authorize?client_id=838798450127798332&permissions=8&scope=bot');
    }
  });
  
  client.on('message', msg => {
    if (msg.content.toLocaleLowerCase() === prefix + 'davet') {
      msg.channel.send('https://discord.com/api/oauth2/authorize?client_id=838798450127798332&permissions=8&scope=bot');
    }
  });

  client.on('message', msg => {
    if (msg.content === '`') {
      msg.reply('***`Help yaza bilirsiniz***');
    }
  });
  
  client.on('message', msg => {
    if (msg.content.toLocaleLowerCase() === prefix + 'help') {
      msg.reply('***şu anlık komut yok***');
    }
  });

  client.on('message', msg => {
    if (msg.content.toLocaleLowerCase() === özelprefix + "say commands") {
      msg.reply("`https://github.com/ssskkwii/bot`,__***Baka Bilirsiniz***__")
    }
  });

  client.on('message', msg => {
    if (msg.content.toLocaleLowerCase() === özelprefix + "github") {
      msg.reply("__***https://github.com/ssskkwii***__ ***github hesabım***")
    }
  });

  client.on('message', message => {

    if (!message.guild) return;
  

    if (message.content.startsWith('`kick')) {

      const user = message.mentions.users.first();

      if (user) {

        const member = message.guild.member(user);

        if (member) {

          member
            .kick('Optional reason that will display in the audit logs')
            .then(() => {

              message.reply(`Successfully kicked ${user.tag}`);
            })
            .catch(err => {

              message.reply('I was unable to kick the member');

              console.error(err);
            });
        } else {

          message.reply("That user isn't in this guild!");
        }

      } else {
        message.reply("You didn't mention the user to kick!");
      }
    }
  });
  
  client.on('message', message => {

    if (!message.guild) return;

    if (message.content.startsWith('`ban')) {

      const user = message.mentions.users.first();

      if (user) {

        const member = message.guild.member(user);

        if (member) {

          member
            .ban({
              reason: 'They were bad!',
            })
            .then(() => {

              message.reply(`Successfully banned ${user.tag}`);
            })
            .catch(err => {
        
              message.reply('I was unable to ban the member');
         
              console.error(err);
            });
        } else {

          message.reply("That user isn't in this guild!");
        }
      } else {

        message.reply("You didn't mention the user to ban!");
      }
    }
  });

  client.on('message', message => {
  
    if (message.content === prefix + 'avatar') {
     
      message.reply(message.author.displayAvatarURL());
    }
  });

  client.on('message', msg => {
    if (msg.content.toLocaleLowerCase() === prefixc + 'davet') {
      msg.channel.send('*https://discord.gg/Whb7Rsnr*');
    }
  });

  client.on('message', msg => {
    if (msg.content.toLocaleLowerCase() === prefix +'nsfw') {
      channel.nsfw()
      msg.reply('Nfsw!');
    }
  });

  client.login('ODM4Nzk4NDUwMTI3Nzk4MzMy.YJAV7g.fopQ2USUwWspCcM1BNPHSXbBnGM'); 
