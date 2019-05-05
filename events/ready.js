module.exports = (client) => {
    // eslint-disable-next-line no-console
    console.log(`Ready to serve in ${client.channels.size} channels on ${client.guilds.size} servers, for a total of ${client.users.size} users.`);

    client.users.find(u => u.id === `444384280152637441`).send(`Bot started up/restarted!`);
    setInterval(function () {
        //checks all guilds
        client.guilds.forEach((guild) => {
            //checks all members in the said guild
            guild.members.forEach((member) => {
                var date = new Date(Date.now());
                const key = member.id;
    
                //check if the member even has a birthday logged
                if (!client.birthday.has(member.id)) {
                    return;
                    //No need to waste CPU time!
                }
    
                //check if the birthday month matches today's month
                if (date.getMonth() == client.birthday.get(key, `birthdayMonth`)) {
                    //check if the birthday day matches today's day
                    if (date.getDate() == client.birthday.get(key, `birthdayDay`)) {
                        //This is our announce channel! Yeah!
                        let announceChannel = guild.channels.find(ch => ch.id === client.roles.get(guild.id, `announceChannel`));
    
                        //This is sending the announcement! Happy birthday!
                        announceChannel.send(`It's <@!${key}>'s birthday! Wish them a happy birthday!`);
                    }
                }
            });
        });
    }, 86400000); //run every 24 hours (86400000 ms)

};