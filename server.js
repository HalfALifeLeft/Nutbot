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
//const commands = JSON.parse(fs.readFileSync(`Storage/commands.json`, `utf8`));

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

//SETINTERVAL
client.setInterval(function(){
    console.log(`Interval works!`);
    client.guilds.forEach((guild) => {
        console.log(`guild ran`);
        guild.members.forEach((member) => {
        console.log(`member ran`);

            var date = new Date(Date.now())
            const key = member.id;

            if (!birthday.has(member.id)) {
                return console.log(`returning, no need to waste CPU time`);
            }

            console.log(`Running to check if birthday!`);
            if (date.getMonth() == birthday.get(key, `birthdayMonth`)) {
                if (date.getDate() == birthday.get(key, `birthdayDay`)) {

                    //CODE FOR SENDING BIRTHDAY ANNOUNCEMENT

                }
            }
        });

        
        /*birthday.forEach(() => {
            console.log(birthday.get(`${guild.id}`, `userID`))
            let i = 0;
            i++;
            console.log(i);
            console.log(key);
            console.log(value);
        });*/ 
    });

}, 10000)//run every 24 hours (86400000 ms)

//LOOPED EVERY 10 SECONDS, USE THIS IN READY EVENT INSTEAD OF COMMAND, so it runs every time the bot starts up!


/*

client.birthday.set(key, `${date}`, `birthdayTS`);
client.birthday.set(key, `${parseInt(separated[0])}`, `birthdayMonth`);
client.birthday.set(key, `${separated[1]}`, `birthdayDay`);
client.birthday.set(key, `${now.getFullYear()}`, `currentYear`);
client.birthday.set(key, `${message.author.id}`, `userID`);

*/


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