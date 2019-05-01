module.exports = (client, message) => {

    //Create the key for the Enmap
    const key = `${message.author.id}`;

    //Ensure out Enmap exists
    client.currency.ensure(key, {
        user: message.author.id,
        guild: message.guild.id,
        points: 0,
        level: 1,
        lastSeen: new Date()
    });

    // Calculate the user's current level
    const curLevel = Math.floor(0.02 * Math.sqrt(client.currency.get(key, `points`)));

    //check if user's current level is greater than level in Enmap
    if (client.currency.get(key, `level`) < curLevel) {
        //tell user in chat that they leveled up
        message.reply(`You've leveled up to level **${curLevel}**!`)
        .catch(e => {
            //catch error if any
            // eslint-disable-next-line no-console
            console.error(e);
        });
        //set new level
        client.currency.set(key, curLevel, `level`);
    }

    // Ignore all bots and DM messages
    if (message.author.bot || !message.guild) return;

    // Ignore messages not starting with the prefix
    if (message.content.toLowerCase().indexOf(process.env.PREFIX) !== 0) return;

    // Our standard argument/command name definition.
    const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    // Grab the command data from the client.commands Enmap
    const cmd = client.commands.get(command);

    // If that command doesn't exist, silently exit and do nothing
    if (!cmd) return;

    // Run the command
    cmd.run(client, message, args);
};