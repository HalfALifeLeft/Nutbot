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

    //Lets make sure everything exists!
    client.roles.ensure(keyRoles, {
        role1: null,
        role2: null,
        role3: null,
        role4: null,
        role5: null,
        role6: null,
        role7: null,
        role8: null,
        role9: null,
        role10: null,
        points1: null,
        points2: null,
        points3: null,
        points4: null,
        points5: null,
        points6: null,
        points7: null,
        points8: null,
        points9: null,
        points10: null,
        message1: null,
        message2: null,
        message3: null,
        message4: null,
        message5: null,
        message6: null,
        message7: null,
        message8: null,
        message9: null,
        message10: null,
        announceChannel: null,
        generalChannel: null
    });

    //Now that we know it exists we can work with it! So far we only need 6 roles so we set the first 6 points thingies

    const pointsForRole = client.currency.get(keyUser, `points`);

    //client.roles.get(key, `points${i}`)

    const keyPoints = message.guild.id;
    const userTwo = message.guild.members.find(u => u.id === user.id);

    //var levelUpMsg = `you have leveled up!`;

    //console.log(userTwo.roles.find(r => r.id === client.roles.get(keyPoints, `role1`)) != null);
    //console.log(client.roles.get(keyPoints, `role1`));
    //console.log(userTwo);
    
    if (isNaN(parseInt(client.roles.get(keyPoints, `points1`) == false)) && userTwo.roles.find(r => r.id === client.roles.get(keyPoints, `role1`)) == null) {
        if ((parseInt(client.roles.get(keyPoints, `points1`)) <= parseInt(pointsForRole))) {
            console.log(`${client.roles.get(keyPoints, `points1`)} - ${pointsForRole}`);
            if (client.roles.get(keyPoints, `points1`) != null) {
                let role = message.guild.roles.find(r => r.id === client.roles.get(keyPoints, `role1`));

                console.log(`Tier 1`);
                userTwo.addRole(role, `User leveled up!`);
            }

        }
    }

    if (isNaN(parseInt(client.roles.get(keyPoints, `points2`) == false)) && userTwo.roles.find(r => r.id === client.roles.get(keyPoints, `role2`)) == null) {
        if ((parseInt(client.roles.get(keyPoints, `points2`)) <= parseInt(pointsForRole))) {
            console.log(`${client.roles.get(keyPoints, `points2`)} - ${pointsForRole}`);
            if (client.roles.get(keyPoints, `points1`) != null) {
                let role = message.guild.roles.find(r => r.id === client.roles.get(keyPoints, `role2`));

                console.log(`Tier 2`);
                userTwo.addRole(role, `User leveled up!`);
            }

        }
    }

    if (isNaN(parseInt(client.roles.get(keyPoints, `points3`) == false)) && userTwo.roles.find(r => r.id === client.roles.get(keyPoints, `role3`)) == null) {
        if ((parseInt(client.roles.get(keyPoints, `points3`)) <= parseInt(pointsForRole))) {
            console.log(`${client.roles.get(keyPoints, `points3`)} - ${pointsForRole}`);
            if (client.roles.get(keyPoints, `points3`) != null) {
                let role = message.guild.roles.find(r => r.id === client.roles.get(keyPoints, `role3`));

                console.log(`Tier 3`);
                userTwo.addRole(role, `User leveled up!`);
            }

        }
    }

    if (isNaN(parseInt(client.roles.get(keyPoints, `points4`) == false)) && userTwo.roles.find(r => r.id === client.roles.get(keyPoints, `role4`)) == null) {
        if ((parseInt(client.roles.get(keyPoints, `points4`)) <= parseInt(pointsForRole))) {
            console.log(`${client.roles.get(keyPoints, `points4`)} - ${pointsForRole}`);
            if (client.roles.get(keyPoints, `points4`) != null) {
                let role = message.guild.roles.find(r => r.id === client.roles.get(keyPoints, `role4`));

                console.log(`Tier 4`);
                userTwo.addRole(role, `User leveled up!`);
            }

        }
    }

    if (isNaN(parseInt(client.roles.get(keyPoints, `points5`) == false)) && userTwo.roles.find(r => r.id === client.roles.get(keyPoints, `role5`)) == null) {
        if ((parseInt(client.roles.get(keyPoints, `points5`)) <= parseInt(pointsForRole))) {
            console.log(`${client.roles.get(keyPoints, `points5`)} - ${pointsForRole}`);
            if (client.roles.get(keyPoints, `points5`) != null) {
                let role = message.guild.roles.find(r => r.id === client.roles.get(keyPoints, `role5`));

                console.log(`Tier 5`);
                userTwo.addRole(role, `User leveled up!`);
            }

        }
    }

    if (isNaN(parseInt(client.roles.get(keyPoints, `points6`) == false)) && userTwo.roles.find(r => r.id === client.roles.get(keyPoints, `role6`)) == null) {
        if ((parseInt(client.roles.get(keyPoints, `points6`)) <= parseInt(pointsForRole))) {
            console.log(`${client.roles.get(keyPoints, `points6`)} - ${pointsForRole}`);
            if (client.roles.get(keyPoints, `points6`) != null) {
                let role = message.guild.roles.find(r => r.id === client.roles.get(keyPoints, `role6`));

                console.log(`Tier 6`);
                userTwo.addRole(role, `User leveled up!`);
            }

        }
    }

    if (isNaN(parseInt(client.roles.get(keyPoints, `points7`) == false)) && userTwo.roles.find(r => r.id === client.roles.get(keyPoints, `role7`)) == null) {
        if ((parseInt(client.roles.get(keyPoints, `points7`)) <= parseInt(pointsForRole))) {
            console.log(`${client.roles.get(keyPoints, `points7`)} - ${pointsForRole}`);
            if (client.roles.get(keyPoints, `points7`) != null) {
                let role = message.guild.roles.find(r => r.id === client.roles.get(keyPoints, `role7`));

                console.log(`Tier 7`);
                userTwo.addRole(role, `User leveled up!`);
            }

        }
    }

    if (isNaN(parseInt(client.roles.get(keyPoints, `points8`) == false)) && userTwo.roles.find(r => r.id === client.roles.get(keyPoints, `role8`)) == null) {
        if ((parseInt(client.roles.get(keyPoints, `points8`)) <= parseInt(pointsForRole))) {
            console.log(`${client.roles.get(keyPoints, `points8`)} - ${pointsForRole}`);
            if (client.roles.get(keyPoints, `points8`) != null) {
                let role = message.guild.roles.find(r => r.id === client.roles.get(keyPoints, `role8`));

                console.log(`Tier 8`);
                userTwo.addRole(role, `User leveled up!`);
            }

        }
    }

    if (isNaN(parseInt(client.roles.get(keyPoints, `points9`) == false)) && userTwo.roles.find(r => r.id === client.roles.get(keyPoints, `role9`)) == null) {
        if ((parseInt(client.roles.get(keyPoints, `points9`)) <= parseInt(pointsForRole))) {
            console.log(`${client.roles.get(keyPoints, `points9`)} - ${pointsForRole}`);
            if (client.roles.get(keyPoints, `points9`) != null) {
                let role = message.guild.roles.find(r => r.id === client.roles.get(keyPoints, `role9`));

                console.log(`Tier 9`);
                userTwo.addRole(role, `User leveled up!`);
            }

        }
    }

    if (isNaN(parseInt(client.roles.get(keyPoints, `points10`) == false)) && userTwo.roles.find(r => r.id === client.roles.get(keyPoints, `role10`)) == null) {
        if (parseInt(client.roles.get(keyPoints, `points10`)) <= parseInt(pointsForRole)) {
            console.log(`${client.roles.get(keyPoints, `points10`)} - ${pointsForRole}`);
            if (client.roles.get(keyPoints, `points10`) != null) {
                let role = message.guild.roles.find(r => r.id === client.roles.get(keyPoints, `role10`));

                console.log(`Tier 10`);
                userTwo.addRole(role, `User leveled up!`);
            }

        }
    }
};
module.exports.help = {
    name: `give`
};