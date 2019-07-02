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
        role1: null,
        role2: null,
        role3: null,
        role4: null,
        role5: null,
        role6: null,
        role7: null,
        role8: null,
        role9: null,
        role10: null
    });

    //Now that we know it exists we can work with it! So far we only need 6 roles so we set the first 6 points thingies

    const pointsForRole = client.currency.get(keyUser, `points`);

    //client.roles.get(key, `points${i}`)

    const keyPoints = message.guild.id;
    //const userTwo = message.guild.members.find(u => u.id === user.id);

    //var levelUpMsg = `you have leveled up!`;

    console.log(pointsForRole);

    switch (false) {
        case ((client.roles.get(keyPoints, `points1`) >= pointsForRole) && isNaN(client.roles.get(keyPoints, `points1`)) == false):

            console.log(client.roles.get(keyPoints, `points1`));
            console.log(`Tier 1`);

            break;
        case ((client.roles.get(keyPoints, `points2`) >= pointsForRole) && isNaN(client.roles.get(keyPoints, `points2`)) == false):

            console.log(client.roles.get(keyPoints, `points2`));
            console.log(`Tier 2`);

            break;
        case ((client.roles.get(keyPoints, `points3`) >= pointsForRole) && isNaN(client.roles.get(keyPoints, `points3`)) == false):

            console.log(client.roles.get(keyPoints, `points3`));
            console.log(`Tier 3`);

            break;
        case ((client.roles.get(keyPoints, `points4`) >= pointsForRole) && isNaN(client.roles.get(keyPoints, `points4`)) == false):

            console.log(client.roles.get(keyPoints, `points4`));
            console.log(`Tier 4`);

            break;
        case ((client.roles.get(keyPoints, `points5`) >= pointsForRole) && isNaN(client.roles.get(keyPoints, `points5`)) == false):

            console.log(client.roles.get(keyPoints, `points5`));
            console.log(`Tier 5`);

            break;
        case ((client.roles.get(keyPoints, `points6`) >= pointsForRole) && isNaN(client.roles.get(keyPoints, `points6`)) == false):

            console.log(client.roles.get(keyPoints, `points6`));
            console.log(`Tier 6`);

            break;
        case ((client.roles.get(keyPoints, `points7`) >= pointsForRole) && (isNaN(client.roles.get(keyPoints, `points7`)) == false) && (client.roles.get(keyPoints, `points7`) != null)):

            console.log(isNaN(client.roles.get(keyPoints, `points7`)));
            console.log(`Tier 7`);

            break;
        case ((client.roles.get(keyPoints, `points8`) >= pointsForRole) && isNaN(client.roles.get(keyPoints, `points8`)) == false):

            console.log(client.roles.get(keyPoints, `points8`));
            console.log(`Tier 8`);

            break;
        case ((client.roles.get(keyPoints, `points9`) >= pointsForRole) && isNaN(client.roles.get(keyPoints, `points9`)) == false):

            console.log(client.roles.get(keyPoints, `points9`));
            console.log(`Tier 9`);

            break;
        case ((client.roles.get(keyPoints, `points10`) >= pointsForRole) && isNaN(client.roles.get(keyPoints, `points10`)) == false):

            console.log(client.roles.get(keyPoints, `points10`));
            console.log(`Tier 10`);

            break;
    }
};
module.exports.help = {
    name: `give`
};