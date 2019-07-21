/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission(`ADMINISTRATOR`)) {
        return message.reply(`Permissions error: \`ERR_ADMIN_NEEDED\``);
    }

    //Lets declare our key!
    const key = `${message.guild.id}`;

    //Lets make sure everything exists!
    client.roles.ensure(key, {
        role1: null,
        role2: null,
        role3: null,
        role4: null,
        role5: null,
        role6: null,
        role7: null,
        role8: null,
        role9: null,
        role10: null,
        points1: null,
        points2: null,
        points3: null,
        points4: null,
        points5: null,
        points6: null,
        points7: null,
        points8: null,
        points9: null,
        points10: null,
        message1: null,
        message2: null,
        message3: null,
        message4: null,
        message5: null,
        message6: null,
        message7: null,
        message8: null,
        message9: null,
        message10: null,
        announceChannel: null,
        generalChannel: null
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

        if (client.roles.get(key, `announceChannel`) != null) {
            embed.addField(`announceChannel`, `<#${client.roles.get(key, `announceChannel`)}>`);
        }

        if (client.roles.get(key, `generalChannel`) != null) {
            embed.addField(`generalChannel`, `<#${client.roles.get(key, `generalChannel`)}>`);
        }

        for (var i = 1; i <= 10; i++) {
            if (client.roles.get(key, `role${i}`) != null) {
                embed.addField(`role${i}`, `<@&${client.roles.get(key, `role${i}`)}> - ${client.roles.get(key, `points${i}`)} Points`);
            }
            if (client.roles.get(key, `message${i}`) != null) {
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
            .setColor(process.env.HEXCODE)
            .addField(`Help`, `Possible items to configure are:\n\t1 through 10 - First through Tenth XP Roles\n\tAnnounce - The channel the bot uses to announce birthdays!\n\tGeneral - The channel the bot sends level up messages through!\n\tM1 through M10 - Level up messages (optional)`)
            .addField(`Command Examples`, `**Roles**\n\t!config [1 - 10] [Role ID] [XP Required]\n\t**Announce OR General**\n\t!config announce/general [#channel]\n\t**Channel Messages**\n\t!config [M1 - M10] [message]\n\t**Remove Configurations**\n\t!config [item to configure] remove to remove that item,\n\t!config removeall to remove ALL configs for the server.`);
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
            return message.channel.send(`Configurations Error: \`ERR_INVALID_ID\``);
        } else if (isNaN(parseInt(points)) === true) { //Check if points are a number
            return message.channel.send(`Configurations Error: \`ERR_INVALID_POINTS\``);
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