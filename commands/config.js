/* eslint-disable no-console */
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
        announceChannel: ``,
        generalChannel: ``
    });

    //Now that we made sure it exists, lets do a little something something with configurations!

    //Declare some variables
    const roleNum = args[0];
    let roleID = args[1];
    const points = args[2];
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
        }
        return message.channel.send(embed);
    }

    if (roleNum.toLowerCase() == `help`) {
        const {
            Client,
            RichEmbed
        } = require(`discord.js`);
        const embed = new RichEmbed()
            .setTitle(`Configurations Help`)
            .addField(`Help`, `Possible items to configure are:\n\t1 - First XP reward role\n\t2 - Second XP Role\n\t3 - Third XP Role\n\t4 - Fourth XP Role\n\t5 - Fifth XP Role\n\t6 - Sixth XP Role\n\t7 - Seventh XP Role\n\t8 - Eighth XP Role\n\t9 - Ninth XP Role\n\t10 - Tenth XP Role\n\tAnnounce - The channel the bot uses to announce birthdays!\n\tGeneral - The channel the bot sends level up messages through!`)
            .addField(`Command Examples`, `**Roles**\n\t!config [1 - 10] [Role ID] [XP Required]\n\t**Announce OR General**\n\t!config announce/general [#channel]`);
        return message.channel.send(embed);
    }

    //Check if we want to configure the announceChannel
    if (roleNum.toLowerCase() == `announce`) {
        //get JUST the ID
        roleID = roleID.replace(`<#`, ``).replace(`>`, ``);

        //set the announceChannel
        client.roles.set(key, `${roleID}`, `announceChannel`);

        //Tell the user it was set
        return message.channel.send(`Announce Channel was set to <#${roleID}>`);
    }

    //Check if we want to configure the generalChannel
    if (roleNum.toLowerCase() == `general`) {
        //get JUST the ID
        roleID = roleID.replace(`<#`, ``).replace(`>`, ``);

        //set the generalChannel
        client.roles.set(key, `${roleID}`, `generalChannel`);

        //Tell the user it was set
        return message.channel.send(`General Channel was set to <#${roleID}>`);
    }

    //If we are missing a number to configure lets say as much!
    if (!roleNum || roleNum > 10 || roleNum < 1) {
        return message.channel.send(`\`ERR_INVALID_NUM\``);
    }

    //Lets test to make sure that they didn't ping the role! That would be bad!
    if (regexTest.test(roleID)) {
        roleID = roleID.replace(`<@&`, ``).replace(`>`, ``);
    }

    //If we are missing a role ID or if its invalid lets say as much!
    if (!roleID || !message.guild.roles.has(roleID)) {
        return message.channel.send(`\`ERR_INVALID_ID\``);
    }

    //Check if points are a number
    if (isNaN(parseInt(points)) === true) {
        return message.channel.send(`\`ERR_INVALID_POINTS\``);
    }

    console.log(roleID);
    console.log(points);

    //Well, now that we are this far, we can safely assume that we have everything! Hurray!
    client.roles.set(key, `${points}`, `points${roleNum}`);
    client.roles.set(key, `${roleID}`, `role${roleNum}`);
    message.channel.send(`Role ${roleNum} was set to <@&${roleID}> and takes ${points} points to get!`);
};
module.exports.help = {
    name: `config`
};