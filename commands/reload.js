/* eslint-disable no-console */
module.exports.run = async (client, message, args) => {

        //Check if the bot owner is the author
        if (message.member.id !== process.env.OWNERID) {
            return message.channel.send(`You lack the required permissions to use this command.`)
            .catch(e => {
                return console.log(e);
            });
        }

        //make sure a command is provided
        if(!args || args.size < 1) return message.reply(`Must provide a command name to reload.`);
        const commandName = args[0];

        // Check if the command exists and is valid
        if(!client.commands.has(commandName)) {
          return message.reply(`That command does not exist`);
        }

        // the path is relative to the *current folder*, so just ./filename.js
        delete require.cache[require.resolve(`./${commandName}.js`)];

        // We also need to delete and reload the command from the client.commands Enmap
        client.commands.delete(commandName);

        const props = require(`./${commandName}.js`);
        client.commands.set(commandName, props);

        //Tell the user the command was reloaded
        message.reply(`The command ${commandName} has been reloaded`);
};
module.exports.help = {
    name: `reload`
};