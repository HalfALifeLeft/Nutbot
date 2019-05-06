module.exports = (client) => {
    // eslint-disable-next-line no-console
    console.log(`Ready to serve in ${client.channels.size} channels on ${client.guilds.size} servers, for a total of ${client.users.size} users.`);

    //client.users.find(u => u.id === `444384280152637441`).send(`Bot started up/restarted!`);

    setInterval(function () {

        //console.log(`setInt ran!`);

        //Run at 3 PM EST, 19 UTC.
        //if (now.getUTCHours() === 19) {
        //console.log(`It's 12!`);

        //checks all guilds
        client.guilds.forEach((guild) => {
            //checks all members in the said guild

            if (!client.roles.has(guild.id)) {
                // console.log(`Guild doesn't have any configurations`);
                return;
            } else if (client.roles.get(guild.id, `announceChannel`) === ``) {
                //console.log(`Guild doesn't have a birthday channel REEE!`);
                return;
            }
            //Run a check to make sure guild has birthday channel, if not return

            guild.members.forEach((member) => {
                var date = new Date(Date.now());
                const key = member.id;

                //check if the member even has a birthday logged
                if (!client.birthday.has(member.id)) {
                    //console.log(`No Birthday :c`);
                    return;
                    //No need to waste CPU time!
                }

                var timestamp = client.birthday.get(key, `timestamp`);

                //console.log(timestamp);
                //console.log(date.getTime());


                //1 Yr in MS = 31536000000

                if (timestamp < date.getTime()) {
                    //console.log(`Timestamp is less than now`);

                    //console.log(`WOOOOOOO BIRTHDAY!`);
                    //check if the birthday month matches today's month
                    if (date.getMonth() == client.birthday.get(key, `birthdayMonth`)) {
                        //check if the birthday day matches today's day
                        if (date.getDate() == client.birthday.get(key, `birthdayDay`)) {
                            //This is our announce channel! Yeah!
                            let announceChannel = guild.channels.find(ch => ch.id === client.roles.get(guild.id, `announceChannel`));

                            //This is sending the announcement! Happy birthday!
                            announceChannel.send(`It's <@!${key}>'s birthday! Wish them a happy birthday!`);
                            client.birthday.set(key, `${date.getFullYear()}`, `currentYear`);
                        }
                    } else {
                        //console.log(`Already shouted out the birthday lmao`);
                    }
                    client.birthday.set(key, timestamp + 31536000000, `timestamp`);
                } else {
                    //console.log(`Now is greater than set timestamp`);
                }
            });
        });
        //}
    }, 60000); //run every 24 hours (86400000 ms)
};