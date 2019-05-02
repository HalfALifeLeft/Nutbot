/* eslint-disable no-empty */
/* eslint-disable no-console */
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

    const pointsForAddingARoleAndICantComeUpWithABetterName = client.currency.get(key, `points`);

    switch (true) {
        case (50 <= pointsForAddingARoleAndICantComeUpWithABetterName < 100):
            console.log(`50 - 99`);
            if (message.member.roles.has(r => r.id === ``)) {
                
            }
            break;
        case (pointsForAddingARoleAndICantComeUpWithABetterName < 150):
            console.log(`100 - 149`);
            if (message.member.roles.has(r => r.id === ``)) {
                
            }
            break;
        case (pointsForAddingARoleAndICantComeUpWithABetterName < 200):
            console.log(`150 - 199`);
            if (message.member.roles.has(r => r.id === ``)) {
                
            }
            break;
        case (pointsForAddingARoleAndICantComeUpWithABetterName < 300):
            console.log(`200-299`);
            if (message.member.roles.has(r => r.id === ``)) {
                
            }
            break;
        case (pointsForAddingARoleAndICantComeUpWithABetterName > 300):
            console.log(`300 and above`);
            if (message.member.roles.has(r => r.id === ``)) {
                
            }
            break;
    }



};
module.exports.help = {
    name: `give`
};