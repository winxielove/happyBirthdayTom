const cron = require("cron")
const dotenv = require("dotenv").config(".env")
const TOKEN = process.env.TOKEN
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.login(TOKEN);
bot.once('ready', () => {
    console.log("ready")
})
bot.once('ready', () => {
    bot.user.setPresence({
      status: 'online',
      activity: {
          name: "Tom and Matt's Wedding",
          type: "WATCHING",
      }
  })});
bot.on('message', message => {
    console.log(message.author.username, "sent:", message.content);
    if (message.author.bot) return;
    if(message.content === 'e') {
            message.channel.send('e');
        }
    if (message.content.includes('!!block')) {
        message.channel.send("okay, that user can no longer use commands for the rest of this bot session 🗿")
    }
    if(message.content.includes('!!ban')) {
        message.channel.send('Ok, user banned 🗿 (Case #69420)')
    }
    if(message.content.includes('!givemod')) {
        message.channel.send('Okay, they are now a moderator of this server 🗿')
    }
    if(message.content === 'uwu') {
        message.channel.send('0w0')
    }
    if(message.content === 'owo') {
        message.channel.send('UwU')
    }
    if(message.content === 'h') {
        message.channel.send('h')
    }
    if(message.content === 'beef') {
        message.channel.send('ebef')
    }
    if(message.content === "!logg") {
        message.channel.bulkDelete(1);
        const logU = bot.emojis.cache.find(emoji => emoji.name === "logU");
        message.channel.send(`${logU}`);
     }
    if(message.content ==='!w') {
  var countDownDate = new Date("April 1, 2022 13:00:00").getTime();
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
    message.channel.send("The Divorce is in  " + days + " Days, " + hours + " Hours, "+ minutes + " Minutes, and " + seconds + " Seconds.")
    }
});
let scheduledMessage = new cron.CronJob('0 0 * * 1', () => {
    var countDownDate = new Date("April 1, 2022").getTime();
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    bot.channels.cache.get('825505907638140969').send("The Divorce is in " + days + " Days, " + hours + " Hours, "+ minutes + " Minutes, and " + seconds + " Seconds.");
})
let happyBirthday = new cron.CronJob('0 * * * *', () => {
    bot.channels.cache.get('825457540509728848').send("Happy Birthday <@263862604915539969>")
})

scheduledMessage.start()
happyBirthday.start()