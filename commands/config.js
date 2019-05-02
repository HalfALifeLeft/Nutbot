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
        role10: ``
    });

    //Now that we made sure it exists, lets do a little something something with configurations!
    
    //Declare some variables
    const roleNum = args[0];
    let roleID = args[1];
    const regexTest = /<@&?\d+>/g;

    //if both are missing it will send a little configuration summary
    if (!roleNum && !roleID) {
        const { Client, RichEmbed } = require(`discord.js`);
        const embed = new RichEmbed()
        .setTitle(`Configurations for the server!`);

        for (var i = 1; i <= 10; i++) {
            if (client.roles.get(key, `role${i}`) !== ``) {
                embed.addField(`role${i}`, `<@&${client.roles.get(key, `role${i}`)}>`);
            }
        }
        return message.channel.send(embed);
    }

    //If we are missing a number to configure lets say as much!
    if (!roleNum || roleNum > 10 || roleNum < 1) {
        return message.channel.send(`\`ERR_INVALID_NUM\``);
    }

    //If we are missing a role ID or if its invalid lets say as much!
    if (!roleID || !message.guild.roles.has(roleID)) {
        return message.channel.send(`\`ERR_INVALID_ID\``);
    }

    //Lets test to make sure that they didn't ping the role! That would be bad!
    if (regexTest.test(roleID)) {
        roleID = roleID.replace(`<@&`, ``).replace(`>`, ``);
    }

    //Well, now that we are this far, we can safely assume that we have everything! Hurray!
    client.roles.set(key, `${roleID}`, `role${roleNum}`);
    message.channel.send(`Role ${roleNum} was set to <@&${roleID}>`);
};
module.exports.help = {
    name: `config`
};