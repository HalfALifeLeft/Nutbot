module.exports.run = async (client, message, args) => {

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

    //Now that we know the enmap exists, we can totally add poin- wait, who do we add them to?
    const user = message.mentions.users.first() || client.users.get(args[0]);
    if (!user) {
        return message.reply(`\`ERR_NO_USER_TEST\``);
    }

    //Okay, we know who our user is, right? RIGHT???? Yes we do! So what do we do now? OH RIGHT! how many points to add?
    const points = parseInt(args[1], 10);

    //lets check if the points even exist and are a number
    if (!points && isNaN(points) === true) {
        return message.reply(`\`ERR_INVALID_POINTS\``);
    }

    //Woah! We can add points now???? YES! FINALLY!
    client.currency.math(key, `+`, points, `points`);

    //Lets send a message telling people we added points
    message.channel.send(`Successfully added ${points} points to ${user.tag}`);
};
module.exports.help = {
    name: `give`
};