module.exports.run = async (client, message) => {

    let user = `I'm irrelevant!`;

    if (message.mentions.members.size === 0) {
        user = message.author.id;
    } else {
        user = message.mentions.members.first().id;
    }
    //declare our key
    const key = `${user}`;

    //Ensure our enmap exists
    client.currency.ensure(key, {
        user: message.author.id,
        guild: message.guild.id,
        points: 0,
        level: 1,
        lastSeen: new Date()
    });

    //lets grab our points!
    const points = client.currency.get(key, `points`);

    //Now lets send a message with the info
    message.channel.send(`<@!${user}> has ${points} points!`);
};
module.exports.help = {
    name: `balance`
};