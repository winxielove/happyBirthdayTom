const cron = require("cron")
const dotenv = require("dotenv").config(".env")
const TOKEN = process.env.TOKEN
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
var blockedUsers = [];

bot.once('ready', () => {
    console.log("ready")
})
bot.login(TOKEN);
console.log("logged in")

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
    if (blockedUsers.includes(message.author.id)) {
        return;
    }
    if (message.content.includes('!!block')) {
        message.channel.send("okay, that user can no longer use commands for the rest of this bot session 🗿")
    }
    if(message.content.includes('!!ban')) {
        message.channel.send('Ok, user banned 🗿 (Case #69420)')
    }
    if(message.content === '!h') {
        message.channel.bulkDelete(1)
        message.channel.send('h')
    }
    if(message.content === "!logg") {
        message.channel.bulkDelete(1);
        const logU = bot.emojis.cache.find(emoji => emoji.name === "logU");
        message.channel.send(`${logU}`);
     }
    if(message.content ==='!wedding') {
        var countDownDate = new Date("April 1, 2021 13:00:00").getTime();
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        message.channel.bulkDelete(1)
        message.channel.send("The Wedding is in exactly " + days + " Days, " + hours + " Hours, " + minutes + " Minutes, and " + seconds + " Seconds.")
    }
    if(message.content ==='!w') {
  var countDownDate = new Date("April 1, 2021 13:00:00").getTime();
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        message.channel.bulkDelete(1)
        message.channel.send("The Wedding is in exactly " + days + " Days, " + hours + " Hours, " + minutes + " Minutes, and " + seconds + " Seconds.")
    }
    if(message.content === '!bdaywish') {
        message.channel.bulkDelete(1)
        bot.channels.cache.get('825457540509728848').send("Happy Birthday <@263862604915539969>")
    }
});
let happyBirthday = new cron.CronJob('0 5 * * *', () => {
    bot.channels.cache.get('825457540509728848').send("Happy Birthday <@263862604915539969>")
})
let scheduledMessage = new cron.CronJob('* * * * *', () => {
    var countDownDate = new Date("April 1, 2021 13:00:00").getTime();
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    bot.channels.cache.get('825505907638140969').send("The Wedding is in exactly " + days + " Days, " + hours + " Hours, " + minutes + " Minutes.");
});

scheduledMessage.start()
happyBirthday.start()