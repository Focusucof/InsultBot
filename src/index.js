const Discord = require('discord.js');
const client = new Discord.Client();

const dotenv = require('dotenv');
dotenv.config();

const insults = require('./insultList.js');

client.on('ready', () => {

    console.log(`Logged in as ${client.user.tag}!`);

});

client.on('message', msg => {

    if(msg.content === 'insultme') {

        insults.getInsult();
        x = insults.getInsult();
        msg.reply(x);

    }

})

client.login(`${process.env.TOKEN}`);