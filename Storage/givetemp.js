/* eslint-disable no-console */
/* eslint-disable no-empty */
module.exports.run = async (client, message, args) => {

    let keyUser = `I'm irrelevant!`;

    if (message.mentions.members.size === 0) {
        keyUser = message.author.id;
    } else {
        keyUser = message.mentions.members.first().id;
    }

    //declare our key
    const key = `${keyUser}`;

    //Ensure our enmap exists
    client.currency.ensure(key, {
        user: key,
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
    if (!points || isNaN(points) === true) {
        return message.reply(`\`ERR_INVALID_POINTS\``);
    }

    //Woah! We can add points now???? YES! FINALLY!
    client.currency.math(key, `+`, points, `points`);

    //Lets send a message telling people we added points
    message.channel.send(`Successfully added ${points} points to ${user.tag}`);


    //because points aren't gained on message sends, lets just check for role progression here!

    //declare a special key!
    const keyRoles = `${message.guild.id}`;

    //ensure it exists
    client.roles.ensure(keyRoles, {
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

    //Now that we know it exists we can work with it! So far we only need 6 roles so we set the first 6 points thingies

    const pointsForRole = client.currency.get(keyUser, `points`);

    //client.roles.get(key, `points${i}`)

    const keyPoints = message.guild.id;
    const userTwo = message.guild.members.find(u => u.id === user.id);

    var levelUpMsg = `you have leveled up!`;

    console.log(pointsForRole);

    switch (true) {
        case ((client.roles.get(keyPoints, `points1`) <= pointsForRole) && isNaN(client.roles.get(keyPoints, `points1`)) == false):

            console.log(`50`);

            if (client.roles.get(keyPoints, `message1`) != ``) {
                levelUpMsg = client.roles.get(keyPoints, `message1`);
            }

            //Under 50 Points
            if (!userTwo.roles.some(r => r.id === client.roles.get(keyPoints, `role1`))) {
                let role = message.guild.roles.find(r => r.id === client.roles.get(keyPoints, `role1`));
                
                if (role) {
                    console.log(`role existed!`);
                    userTwo.addRole(role, `User leveled up!`);
                }

                if (message.guild.channels.find(ch => ch.id === client.roles.get(keyPoints, `generalChannel`))) {
                    let mychannel = message.guild.channels.find(ch => ch.id === client.roles.get(keyPoints, `generalChannel`));
                    mychannel.send(`<@!${userTwo.id}>, ${levelUpMsg}`)
                        .catch(e => {
                            console.error(e);
                        });
                }
            }

            break;
        case ((client.roles.get(keyPoints, `points2`) <= pointsForRole) && isNaN(client.roles.get(keyPoints, `points2`)) == false):

            console.log(`100`);

            if (client.roles.get(keyPoints, `message2`) != ``) {
                levelUpMsg = client.roles.get(keyPoints, `message2`);
            }

            //50 - 99 Points
            if (!userTwo.roles.some(r => r.id === client.roles.get(keyPoints, `role2`))) {
                let role = message.guild.roles.find(r => r.id === client.roles.get(keyPoints, `role2`));

                if (role) {
                    console.log(`role existed!`);
                    userTwo.addRole(role, `User leveled up!`);
                }

                if (message.guild.channels.find(ch => ch.id === client.roles.get(keyPoints, `generalChannel`))) {
                    let mychannel = message.guild.channels.find(ch => ch.id === client.roles.get(keyPoints, `generalChannel`));
                    mychannel.send(`<@!${userTwo.id}>, ${levelUpMsg}`)
                        .catch(e => {
                            console.error(e);
                        });
                }
            }

            break;
        case ((client.roles.get(keyPoints, `points3`) <= pointsForRole) && isNaN(client.roles.get(keyPoints, `points3`)) == false):

            console.log(`150`);

            if (client.roles.get(keyPoints, `message3`) != ``) {
                levelUpMsg = client.roles.get(keyPoints, `message3`);
            }

            //100 - 149 Points
            if (!userTwo.roles.some(r => r.id === client.roles.get(keyPoints, `role3`))) {
                let role = message.guild.roles.find(r => r.id === client.roles.get(keyPoints, `role3`));

                if (role) {
                    console.log(`role existed!`);
                    userTwo.addRole(role, `User leveled up!`);
                }

                if (message.guild.channels.find(ch => ch.id === client.roles.get(keyPoints, `generalChannel`))) {
                    let mychannel = message.guild.channels.find(ch => ch.id === client.roles.get(keyPoints, `generalChannel`));
                    mychannel.send(`<@!${userTwo.id}>, ${levelUpMsg}`)
                        .catch(e => {
                            console.error(e);
                        });
                }

            }

            break;
        case ((client.roles.get(keyPoints, `points4`) <= pointsForRole) && isNaN(client.roles.get(keyPoints, `points4`)) == false):

            console.log(`200`);

            if (client.roles.get(keyPoints, `message4`) != ``) {
                levelUpMsg = client.roles.get(keyPoints, `message4`);
            }

            //150 - 199 Points
            if (!userTwo.roles.some(r => r.id === client.roles.get(keyPoints, `role4`))) {
                let role = message.guild.roles.find(r => r.id === client.roles.get(keyPoints, `role4`));

                if (role) {
                    console.log(`role existed!`);
                    userTwo.addRole(role, `User leveled up!`);
                }

                if (message.guild.channels.find(ch => ch.id === client.roles.get(keyPoints, `generalChannel`))) {
                    let mychannel = message.guild.channels.find(ch => ch.id === client.roles.get(keyPoints, `generalChannel`));
                    mychannel.send(`<@!${userTwo.id}>, ${levelUpMsg}`)
                        .catch(e => {
                            console.error(e);
                        });
                }

            }

            break;
        case ((client.roles.get(keyPoints, `points5`) <= pointsForRole) && isNaN(client.roles.get(keyPoints, `points5`)) == false):

            console.log(`250`);
            
            if (client.roles.get(keyPoints, `message5`) != ``) {
                levelUpMsg = client.roles.get(keyPoints, `message5`);
            }

            //200 - 299 Points
            if (!userTwo.roles.some(r => r.id === client.roles.get(keyPoints, `role5`))) {
                let role = message.guild.roles.find(r => r.id === client.roles.get(keyPoints, `role5`));

                if (role) {
                    console.log(`role existed!`);
                    userTwo.addRole(role, `User leveled up!`);
                }

                if (message.guild.channels.find(ch => ch.id === client.roles.get(keyPoints, `generalChannel`))) {
                    let mychannel = message.guild.channels.find(ch => ch.id === client.roles.get(keyPoints, `generalChannel`));
                    mychannel.send(`<@!${userTwo.id}>, ${levelUpMsg}`)
                        .catch(e => {
                            console.error(e);
                        });
                }

            }

            break;
        case ((client.roles.get(keyPoints, `points6`) <= pointsForRole) && isNaN(client.roles.get(keyPoints, `points6`)) == false):

            console.log(`300`);

            if (client.roles.get(keyPoints, `message6`) != ``) {
                levelUpMsg = client.roles.get(keyPoints, `message6`);
            }

            //300 - ???1 points
            if (!userTwo.roles.some(r => r.id === client.roles.get(keyPoints, `role6`))) {
                let role = message.guild.roles.find(r => r.id === client.roles.get(keyPoints, `role6`));

                if (role) {
                    console.log(`role existed!`);
                    userTwo.addRole(role, `User leveled up!`);
                }

                if (message.guild.channels.find(ch => ch.id === client.roles.get(keyPoints, `generalChannel`))) {
                    let mychannel = message.guild.channels.find(ch => ch.id === client.roles.get(keyPoints, `generalChannel`));
                    mychannel.send(`<@!${userTwo.id}>, ${levelUpMsg}`)
                        .catch(e => {
                            console.error(e);
                        });
                }

            }

            break;
        case ((client.roles.get(keyPoints, `points7`) <= pointsForRole) && isNaN(client.roles.get(keyPoints, `points7`)) == false):

            if (client.roles.get(keyPoints, `message7`) != ``) {
                levelUpMsg = client.roles.get(keyPoints, `message7`);
            }

            //???1 - ???2
            if (!userTwo.roles.some(r => r.id === client.roles.get(keyPoints, `role7`))) {
                let role = message.guild.roles.find(r => r.id === client.roles.get(keyPoints, `role7`));

                if (role) {
                    console.log(`role existed!`);
                    userTwo.addRole(role, `User leveled up!`);
                }

                if (message.guild.channels.find(ch => ch.id === client.roles.get(keyPoints, `generalChannel`))) {
                    let mychannel = message.guild.channels.find(ch => ch.id === client.roles.get(keyPoints, `generalChannel`));
                    mychannel.send(`<@!${userTwo.id}>, ${levelUpMsg}`)
                        .catch(e => {
                            console.error(e);
                        });
                }

            }

            break;
        case ((client.roles.get(keyPoints, `points8`) <= pointsForRole) && isNaN(client.roles.get(keyPoints, `points8`)) == false):
            if (client.roles.get(keyPoints, `message8`) != ``) {
                levelUpMsg = client.roles.get(keyPoints, `message8`);
            }

            //???2 - ???3
            if (!userTwo.roles.some(r => r.id === client.roles.get(keyPoints, `role8`))) {
                let role = message.guild.roles.find(r => r.id === client.roles.get(keyPoints, `role8`));

                if (role) {
                    console.log(`role existed!`);
                    userTwo.addRole(role, `User leveled up!`);
                }

                if (message.guild.channels.find(ch => ch.id === client.roles.get(keyPoints, `generalChannel`))) {
                    let mychannel = message.guild.channels.find(ch => ch.id === client.roles.get(keyPoints, `generalChannel`));
                    mychannel.send(`<@!${userTwo.id}>, ${levelUpMsg}`)
                        .catch(e => {
                            console.error(e);
                        });
                }

            }

            break;
        case ((client.roles.get(keyPoints, `points9`) <= pointsForRole) && isNaN(client.roles.get(keyPoints, `points9`)) == false):

            if (client.roles.get(keyPoints, `message9`) != ``) {
                levelUpMsg = client.roles.get(keyPoints, `message9`);
            }

            //???3 - ???4
            if (!userTwo.roles.some(r => r.id === client.roles.get(keyPoints, `role9`))) {
                let role = message.guild.roles.find(r => r.id === client.roles.get(keyPoints, `role9`));

                if (role) {
                    console.log(`role existed!`);
                    userTwo.addRole(role, `User leveled up!`);
                }

                if (message.guild.channels.find(ch => ch.id === client.roles.get(keyPoints, `generalChannel`))) {
                    let mychannel = message.guild.channels.find(ch => ch.id === client.roles.get(keyPoints, `generalChannel`));
                    mychannel.send(`<@!${userTwo.id}>, ${levelUpMsg}`)
                        .catch(e => {
                            console.error(e);
                        });
                }

            }

            break;
        case ((client.roles.get(keyPoints, `points10`) <= pointsForRole) && isNaN(client.roles.get(keyPoints, `points10`)) == false):

            if (client.roles.get(keyPoints, `message10`) != ``) {
                levelUpMsg = client.roles.get(keyPoints, `message10`);
            }

            //???4+
            if (!userTwo.roles.some(r => r.id === client.roles.get(keyPoints, `role10`))) {
                let role = message.guild.roles.find(r => r.id === client.roles.get(keyPoints, `role10`));

                if (role) {
                    console.log(`role existed!`);
                    userTwo.addRole(role, `User leveled up!`);
                }

                if (message.guild.channels.find(ch => ch.id === client.roles.get(keyPoints, `generalChannel`))) {
                    let mychannel = message.guild.channels.find(ch => ch.id === client.roles.get(keyPoints, `generalChannel`));
                    mychannel.send(`<@!${userTwo.id}>, ${levelUpMsg}`)
                        .catch(e => {
                            console.error(e);
                        });
                }

            }

            break;
    }
};
module.exports.help = {
    name: `give`
};