module.exports.run = async (client, message) => {

    //declare our key
    const key = `${message.author.id}`;

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
    message.channel.send(`<@!${key}> has ${points} points!`);
};
module.exports.help = {
    name: `balance`
};