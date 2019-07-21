module.exports = (client) => {
    // eslint-disable-next-line no-console
    console.log(`Ready to serve in ${client.channels.size} channels on ${client.guilds.size} servers, for a total of ${client.users.size} users.`);
    
    setInterval(function () {

        //checks all guilds
        client.guilds.forEach((guild) => {
            //checks all members in the said guild

            if (!client.roles.has(guild.id)) {
                console.log(`Guild doesn't have any configurations`);
                return;
            } else if (client.roles.get(guild.id, `announceChannel`) === null) {
                console.log(`Guild doesn't have a birthday channel REEE!`);
                return;
            }
            //Run a check to make sure guild has birthday channel, if not return

            guild.members.forEach((member) => {
                var date = new Date(Date.now());
                const key = member.id;

                //check if the member even has a birthday logged
                if (!client.birthday.has(member.id)) {
                    console.log(`No Birthday :c`);
                    return;
                    //No need to waste CPU time!
                }

                var timestamp = client.birthday.get(key, `timestamp`);

                //1 Yr in MS = 31536000000

                function leapYear(year)
                {
                  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
                }


                //Check if the set timestamp is less than the current timestamp
                if (timestamp < date.getTime()) {

                    //check if the birthday month matches today's month
                    if (date.getMonth() == client.birthday.get(key, `birthdayMonth`)) {
                        //check if the birthday day matches today's day
                        if (date.getDate() == client.birthday.get(key, `birthdayDay`)) {
                            //This is our announce channel! Yeah!
                            let announceChannel = guild.channels.find(ch => ch.id === client.roles.get(guild.id, `announceChannel`));
  
                            //This is sending the announcement! Happy birthday!
                            announceChannel.send(`It's <@!${key}>'s birthday! Wish them a happy birthday!`);
                            client.birthday.set(key, `${date.getFullYear()}`, `currentYear`);
                            console.log(client.birthday);
                        }
                    } else {
                        console.log(`Already shouted out the birthday lmao`);
                    }

                    var oneYear = 31536000000;

                    if (leapYear(date.getFullYear() + 1) == true) {
                        oneYear = 31622400000;
                    }

                    client.birthday.set(key, timestamp + oneYear, `timestamp`);
                } else {
                    console.log(`Now is greater than set timestamp`);
                    console.log(client.birthday);
                    var oneyear = 31536000000;

                    if (leapYear(date.getFullYear() + 1) == true) {
                        oneyear = 31622400000;
                    }

                    client.birthday.set(key, timestamp + oneyear, `timestamp`);
                }
            });
        });
    }, 60000);
};

/*

#LOGIN TOKEN
TOKEN=
#PREFIX
PREFIX=!
#HEXCODE
HEXCODE=0x800080
#OWNER USER ID
OWNERID=164819920251650050

*/