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

    const pointsForAddingARoleAndICantComeUpWithABetterName = client.currency.get(keyUser, `points`);

    //client.roles.get(key, `points${i}`)

    const keyPoints = message.guild.id;
    const userTwo = message.guild.members.find(u => u.id === user.id);


    switch (true) {
        case (pointsForAddingARoleAndICantComeUpWithABetterName < client.roles.get(keyPoints, `points1`)):

            //Under 50 Points
            console.log(`I am under 50!`);
            if (!userTwo.roles.has(r => r.id === client.roles.get(keyPoints, `role1`))) {
                let role = message.guild.roles.find(r => r.id === client.roles.get(keyPoints, `role1`));
                userTwo.addRole(role, `User leveled up!`);

                if (message.guild.channels.find(ch => ch.id === client.roles.get(keyPoints, `generalChannel`))) {
                    console.log(`I am inside the channel if!`);
                    let mychannel = message.guild.channels.find(ch => ch.id === client.roles.get(keyPoints, `generalChannel`));
                    mychannel.send(`Under 50`)
                        .catch(e => {
                            console.error(e);
                        });
                }

            }

            break;
        case (pointsForAddingARoleAndICantComeUpWithABetterName < client.roles.get(keyPoints, `points2`)):

            //50 - 99 Points
            console.log(`I am between 50 and 99!`);
            if (!userTwo.roles.has(r => r.id === client.roles.get(keyPoints, `role2`))) {
                let role = message.guild.roles.find(r => r.id === client.roles.get(keyPoints, `role2`));
                userTwo.addRole(role, `User leveled up!`);

                if (message.guild.channels.find(ch => ch.id === client.roles.get(keyPoints, `generalChannel`))) {
                    console.log(`I am inside the channel if!`);
                    let mychannel = message.guild.channels.find(ch => ch.id === client.roles.get(keyPoints, `generalChannel`));
                    mychannel.send(`50-99`)
                        .catch(e => {
                            console.error(e);
                        });
                }

            }

            break;
        case (pointsForAddingARoleAndICantComeUpWithABetterName < client.roles.get(keyPoints, `points3`)):

            //50 - 99 Points
            console.log(`I am between 100 and 149!`);
            if (!userTwo.roles.has(r => r.id === client.roles.get(keyPoints, `role3`))) {
                let role = message.guild.roles.find(r => r.id === client.roles.get(keyPoints, `role3`));
                userTwo.addRole(role, `User leveled up!`);

                if (message.guild.channels.find(ch => ch.id === client.roles.get(keyPoints, `generalChannel`))) {
                    console.log(`I am inside the channel if!`);
                    let mychannel = message.guild.channels.find(ch => ch.id === client.roles.get(keyPoints, `generalChannel`));
                    mychannel.send(`100-149`)
                        .catch(e => {
                            console.error(e);
                        });
                }

            }

            break;
        case (pointsForAddingARoleAndICantComeUpWithABetterName < client.roles.get(keyPoints, `points4`)):

            //150 - 199 Points
            console.log(`I am between 150 and 199!`);
            if (!userTwo.roles.has(r => r.id === client.roles.get(keyPoints, `role4`))) {
                let role = message.guild.roles.find(r => r.id === client.roles.get(keyPoints, `role4`));
                userTwo.addRole(role, `User leveled up!`);

                if (message.guild.channels.find(ch => ch.id === client.roles.get(keyPoints, `generalChannel`))) {
                    console.log(`I am inside the channel if!`);
                    let mychannel = message.guild.channels.find(ch => ch.id === client.roles.get(keyPoints, `generalChannel`));
                    mychannel.send(`150-199`)
                        .catch(e => {
                            console.error(e);
                        });
                }

            }

            break;
        case (pointsForAddingARoleAndICantComeUpWithABetterName < client.roles.get(keyPoints, `points5`)):

            //200 - 299 Points
            console.log(`I am between 200 and 299!`);
            if (!userTwo.roles.has(r => r.id === client.roles.get(keyPoints, `role5`))) {
                let role = message.guild.roles.find(r => r.id === client.roles.get(keyPoints, `role5`));
                userTwo.addRole(role, `User leveled up!`);

                if (message.guild.channels.find(ch => ch.id === client.roles.get(keyPoints, `generalChannel`))) {
                    console.log(`I am inside the channel if!`);
                    let mychannel = message.guild.channels.find(ch => ch.id === client.roles.get(keyPoints, `generalChannel`));
                    mychannel.send(`200-299`)
                        .catch(e => {
                            console.error(e);
                        });
                }

            }

            break;
        case (pointsForAddingARoleAndICantComeUpWithABetterName < client.roles.get(keyPoints, `points6`)):

            //300 - ???1 points
            console.log(`300-???1`);
            if (!userTwo.roles.has(r => r.id === client.roles.get(keyPoints, `role6`))) {
                let role = message.guild.roles.find(r => r.id === client.roles.get(keyPoints, `role6`));
                userTwo.addRole(role, `User leveled up!`);

                if (message.guild.channels.find(ch => ch.id === client.roles.get(keyPoints, `generalChannel`))) {
                    console.log(`I am inside the channel if!`);
                    let mychannel = message.guild.channels.find(ch => ch.id === client.roles.get(keyPoints, `generalChannel`));
                    mychannel.send(`300-???1`)
                        .catch(e => {
                            console.error(e);
                        });
                }

            }
            
            break;
        case (pointsForAddingARoleAndICantComeUpWithABetterName < client.roles.get(keyPoints, `points7`)):

        //???1 - ???2
            console.log(`???1 - ???2`);
            if (!userTwo.roles.has(r => r.id === client.roles.get(keyPoints, `role7`))) {
                let role = message.guild.roles.find(r => r.id === client.roles.get(keyPoints, `role7`));
                userTwo.addRole(role, `User leveled up!`);

                if (message.guild.channels.find(ch => ch.id === client.roles.get(keyPoints, `generalChannel`))) {
                    console.log(`I am inside the channel if!`);
                    let mychannel = message.guild.channels.find(ch => ch.id === client.roles.get(keyPoints, `generalChannel`));
                    mychannel.send(`???1 - ???2`)
                        .catch(e => {
                            console.error(e);
                        });
                }

            }
            
            break;
        case (pointsForAddingARoleAndICantComeUpWithABetterName < client.roles.get(keyPoints, `points8`)):

            //???2 - ???3
            console.log(`???2 - ???3`);
            if (!userTwo.roles.has(r => r.id === client.roles.get(keyPoints, `role8`))) {
                let role = message.guild.roles.find(r => r.id === client.roles.get(keyPoints, `role8`));
                userTwo.addRole(role, `User leveled up!`);

                if (message.guild.channels.find(ch => ch.id === client.roles.get(keyPoints, `generalChannel`))) {
                    console.log(`I am inside the channel if!`);
                    let mychannel = message.guild.channels.find(ch => ch.id === client.roles.get(keyPoints, `generalChannel`));
                    mychannel.send(`???2 - ???3`)
                        .catch(e => {
                            console.error(e);
                        });
                }

            }
            
            break;
        case (pointsForAddingARoleAndICantComeUpWithABetterName < client.roles.get(keyPoints, `points9`)):

            //???3 - ???4
            console.log(`???3 - ???4`);
            if (!userTwo.roles.has(r => r.id === client.roles.get(keyPoints, `role9`))) {
                let role = message.guild.roles.find(r => r.id === client.roles.get(keyPoints, `role9`));
                userTwo.addRole(role, `User leveled up!`);

                if (message.guild.channels.find(ch => ch.id === client.roles.get(keyPoints, `generalChannel`))) {
                    console.log(`I am inside the channel if!`);
                    let mychannel = message.guild.channels.find(ch => ch.id === client.roles.get(keyPoints, `generalChannel`));
                    mychannel.send(`???3 - ???4`)
                        .catch(e => {
                            console.error(e);
                        });
                }

            }
            
            break;
        case (pointsForAddingARoleAndICantComeUpWithABetterName < client.roles.get(keyPoints, `points10`)):

            //???4+
            console.log(`I am above 300 points!`);
            if (!userTwo.roles.has(r => r.id === client.roles.get(keyPoints, `role10`))) {
                let role = message.guild.roles.find(r => r.id === client.roles.get(keyPoints, `role10`));
                userTwo.addRole(role, `User leveled up!`);

                if (message.guild.channels.find(ch => ch.id === client.roles.get(keyPoints, `generalChannel`))) {
                    console.log(`I am inside the channel if!`);
                    let mychannel = message.guild.channels.find(ch => ch.id === client.roles.get(keyPoints, `generalChannel`));
                    mychannel.send(`???4+`)
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