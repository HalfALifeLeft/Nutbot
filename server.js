/* eslint-disable no-console */
require(`dotenv`).config();
//process.env.[THING TO CALL]

//Calling Packages
const Discord = require(`discord.js`);
const Enmap = require(`enmap`);
// eslint-disable-next-line no-unused-vars
const express = require(`./express.js`);
const fs = require(`fs`);
//var func = require(`./functions.js`);

const client = new Discord.Client({
    disableEveryone: true,
});

//tunneling stuffs through client! Yeah!
client.fs = fs;
client.enmap = Enmap;

//Create a birthday enmap :cake:
const birthday = new Enmap({
    name: `birthday`,
    autoFetch: true,
    fetchAll: false
});

client.birthday = birthday;

birthday.defer.then(() => {
    console.log(birthday.size + ` birthday keys loaded`);
});

//runs every 24 hours
client.setInterval(function(){
    //checks all guilds
    client.guilds.forEach((guild) => {
        //checks all members in the said guild
        guild.members.forEach((member) => {
            var date = new Date(Date.now());
            const key = member.id;

            //check if the member even has a birthday logged
            if (!birthday.has(member.id)) {
                return;
                //No need to waste CPU time!
            }

            //check if the birthday month matches today's month
            if (date.getMonth() == birthday.get(key, `birthdayMonth`)) {
                //check if the birthday day matches today's day
                if (date.getDate() == birthday.get(key, `birthdayDay`)) {
                    //This is our announce channel! Yeah!
                    let announceChannel = guild.channels.find(ch => ch.id === roles.get(guild.id, `announceChannel`));

                    //This is sending the announcement! Happy birthday!
                    announceChannel.send(`It's <@!${key}>'s birthday! Wish them a happy birthday!`);
                }
            }
        });
    });
}, 86400000);//run every 24 hours (86400000 ms)

//Create an Enmap for our currencies!!1!
const currency = new Enmap({
    name: `currency`,
    autoFetch: true,
    fetchAll: false
});

//Tunnel it through client
client.currency = currency;

//When loading log all keys
currency.defer.then(() => {
    console.log(currency.size + ` currency keys loaded`);
});

const roles = new Enmap({
    name: `roles`,
    autoFetch: true,
    fetchAll: false
});

client.roles = roles;

roles.defer.then(() => {
    console.log(roles.size + ` role keys loaded`);
});

fs.readdir(`./events/`, (err, files) => {
    if (err) return console.error(err);
    files.forEach((file, i) => {
        i++;
        const event = require(`./events/${file}`);
        let eventName = file.split(`.`)[0];
        console.log(`${i} - Attempting to load event ${eventName}`);
        client.on(eventName, event.bind(null, client));
    });
});

client.commands = new Discord.Collection();
fs.readdir(`./commands/`, (err, files) => {
    if (err) console.error(err);

    let jsfiles = files.filter(f => f.split(`.`).pop() === `js`);
    if (jsfiles.length <= 0) {
        console.log(`No loadable commands!`);
        return;
    }
    jsfiles.forEach((f, i) => {
        i++;
        let props = require(`./commands/${f}`);
        let commandName = f.split(`.`)[0];
        console.log(`${i} - Attempting to load command ${commandName}`);
        client.commands.set(props.help.name, props);
    });
});

client.on(`message`, message => {
    
    //If in a DM, stop running the code. 
    if (message.channel.type == `dm`) return;

    //Object-response array
    const responseObject = {
        'object': `response`
    };

    //Checks if object is said in chat
    if (responseObject[message.content.toLowerCase()]) {
        //If object is said, response is sent to the channel
        message.channel.send(responseObject[message.content.toLowerCase()]);
    }
});

//Discord Login 
client.login(process.env.TOKEN);