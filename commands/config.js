/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
module.exports.run = async (client, message, args) => {

    //Lets declare our key!
    const key = `${message.guild.id}`;

    //Lets make sure everything exists!
    client.roles.ensure(key, {
        role1: ``,
        role2: ``,
        role3: ``,
        role4: ``,
        role5: ``,
        role6: ``,
        role7: ``,
        role8: ``,
        role9: ``,
        role10: ``,
        points1: ``,
        points2: ``,
        points3: ``,
        points4: ``,
        points5: ``,
        points6: ``,
        points7: ``,
        points8: ``,
        points9: ``,
        points10: ``,
        message1: ``,
        message2: ``,
        message3: ``,
        message4: ``,
        message5: ``,
        message6: ``,
        message7: ``,
        message8: ``,
        message9: ``,
        message10: ``,
        announceChannel: ``,
        generalChannel: ``
    });

    //Now that we made sure it exists, lets do a little something something with configurations!

    //Declare some variables
    let roleNum = args[0];
    let roleID = args[1];
    let points = args[2];
    const regexTest = /<@&?\d+>/g;

    //if both are missing it will send a little configuration summary
    if (!roleNum && !roleID && !points) {
        const {
            Client,
            RichEmbed
        } = require(`discord.js`);
        const embed = new RichEmbed()
            .setTitle(`Configurations for the server!`)
            .setColor(process.env.HEXCODE)
            .setDescription(`If nothing is here, run \`!config help\`!`);

        if (client.roles.get(key, `announceChannel`) !== ``) {
            embed.addField(`announceChannel`, `<#${client.roles.get(key, `announceChannel`)}>`);
        }

        if (client.roles.get(key, `generalChannel`) !== ``) {
            embed.addField(`generalChannel`, `<#${client.roles.get(key, `generalChannel`)}>`);
        }

        for (var i = 1; i <= 10; i++) {
            if (client.roles.get(key, `role${i}`) !== ``) {
                embed.addField(`role${i}`, `<@&${client.roles.get(key, `role${i}`)}> - ${client.roles.get(key, `points${i}`)} Points`);
            }
            if (client.roles.get(key, `message${i}`) !== ``) {
                embed.addField(`message${i}`, `"${client.roles.get(key, `message${i}`)}"`);
            }
        }
        return message.channel.send(embed);
    }

    if (roleNum.toLowerCase() == `removeall`) {
        await client.roles.delete(key);
        message.channel.send(`All configurations for this server were removed!`);
    }

    if (roleNum.toLowerCase() == `help`) {
        const {
            Client,
            RichEmbed
        } = require(`discord.js`);
        const embed = new RichEmbed()
            .setTitle(`Configurations Help`)
            .addField(`Help`, `Possible items to configure are:\n\t1 through 10 - First through Tenth XP Roles\n\tAnnounce - The channel the bot uses to announce birthdays!\n\tGeneral - The channel the bot sends level up messages through!\n\tM1 through M10 - Level up messages (optional)`)
            .addField(`Command Examples`, `**Roles**\n\t!config [1 - 10] [Role ID] [XP Required]\n\t**Announce OR General**\n\t!config announce/general [#channel]\n\t**Channel Messages**\n\t!config [M1 - M10] [message]`);
        return message.channel.send(embed);
    }

    //Check if we want to configure the announceChannel
    if (roleNum.toLowerCase() == `announce`) {
        //get JUST the ID
        roleID = roleID.replace(`<#`, ``).replace(`>`, ``);

        //remove the config
        if (roleID.toLowerCase() == `remove`) {
            roleID = ``;

            //set the announceChannel
            client.roles.set(key, `${roleID}`, `announceChannel`);

            //Tell the user it was set
            return message.channel.send(`Announce Channel was removed.`);
        }

        //set the announceChannel
        client.roles.set(key, `${roleID}`, `announceChannel`);

        //Tell the user it was set
        return message.channel.send(`Announce Channel was set to <#${roleID}>`);
    }

    //Check if we want to configure the generalChannel
    if (roleNum.toLowerCase() == `general`) {
        //get JUST the ID
        roleID = roleID.replace(`<#`, ``).replace(`>`, ``);

        //remove the config
        if (roleID.toLowerCase() == `remove`) {
            roleID = ``;

            //set the generalChannel
            client.roles.set(key, `${roleID}`, `generalChannel`);

            //Tell the user it was set
            return message.channel.send(`General Channel was removed.`);

        }

        //set the generalChannel
        client.roles.set(key, `${roleID}`, `generalChannel`);

        //Tell the user it was set
        return message.channel.send(`General Channel was set to <#${roleID}>`);
    }

    if ((1 < parseInt(roleNum) < 10) && isNaN(parseInt(roleNum)) === false) {
        //If we are missing a number to configure lets say as much!
        /*if (!roleNum || roleNum > 10 || roleNum < 1) {
            return message.channel.send(`\`ERR_INVALID_NUM\``);
        }*/

        //Lets test to make sure that they didn't ping the role! That would be bad!
        if (regexTest.test(roleID)) {
            roleID = roleID.replace(`<@&`, ``).replace(`>`, ``);
        }

        if (roleID.toLowerCase() == `remove`) {
            roleID = ``;
            points = ``;

            //Remove everythang!
            client.roles.set(key, `${points}`, `points${roleNum}`);
            client.roles.set(key, `${roleID}`, `role${roleNum}`);
            return message.channel.send(`Role ${roleNum} was removed.`);

        } else if (!roleID || !message.guild.roles.has(roleID)) { //If we are missing a role ID or if its invalid lets say as much!
            return message.channel.send(`\`ERR_INVALID_ID\``);
        } else if (isNaN(parseInt(points)) === true) { //Check if points are a number
            return message.channel.send(`\`ERR_INVALID_POINTS\``);
        }

        //Well, now that we are this far, we can safely assume that we have everything! Hurray!
        client.roles.set(key, `${points}`, `points${roleNum}`);
        client.roles.set(key, `${roleID}`, `role${roleNum}`);
        return message.channel.send(`Role ${roleNum} was set to <@&${roleID}> and takes ${points} points to get!`);
    }

    //Check if we want to configure the lvl up messages
    if (roleNum.toLowerCase() === `m1` || roleNum.toLowerCase() === `m2` || roleNum.toLowerCase() === `m3` || roleNum.toLowerCase() === `m4` || roleNum.toLowerCase() === `m5` || roleNum.toLowerCase() === `m6` || roleNum.toLowerCase() === `m7` || roleNum.toLowerCase() === `m8` || roleNum.toLowerCase() === `m9` || roleNum.toLowerCase() === `m10`) {
        //get JUST the ID
        roleID = args.slice(1).join(` `);

        switch (true) {
            case (roleNum.toLowerCase() == `m1`):
                roleNum = `message1`;
                break;
            case roleNum.toLowerCase() == `m2`:
                roleNum = `message2`;
                break;
            case roleNum.toLowerCase() == `m3`:
                roleNum = `message3`;
                break;
            case roleNum.toLowerCase() == `m4`:
                roleNum = `message4`;
                break;
            case roleNum.toLowerCase() == `m5`:
                roleNum = `message5`;
                break;
            case roleNum.toLowerCase() == `m6`:
                roleNum = `message6`;
                break;
            case roleNum.toLowerCase() == `m7`:
                roleNum = `message7`;
                break;
            case roleNum.toLowerCase() == `m8`:
                roleNum = `message8`;
                break;
            case roleNum.toLowerCase() == `m9`:
                roleNum = `message9`;
                break;
            case roleNum.toLowerCase() == `m10`:
                roleNum = `message10`;
                break;
        }

        if (roleID.toLowerCase() == `remove`) {
            roleID = ``;

            //set the message!
            client.roles.set(key, `${roleID}`, `${roleNum}`);

            //Tell the user it was set
            return message.channel.send(`${roleNum} was removed.`);

        }

        //set the message!
        client.roles.set(key, `${roleID}`, `${roleNum}`);

        //Tell the user it was set
        return message.channel.send(`${roleNum} was set to "${roleID}"`);
    }
};
module.exports.help = {
    name: `config`
};