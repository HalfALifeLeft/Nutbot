module.exports.run = async (client, message, args) => {

    const key = `${message.author.id}`;

    client.birthday.ensure(key, {
        birthdayTS: ``,
        birthdayMonth: ``,
        birthdayDay: ``,
        timestamp: Date.now(),
        userID: ``
    });

    let months = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`]; //Just an array of the months
    let dateFormat1 = /\b(\d{2}\/\d{2}\/\d{4})\b/g; //regex to test for mm/dd/yyyy format
    let separated = [];
  
    if (args[0]) {

        if (dateFormat1.test(args[0]) === false) {
            return message.reply(`Please give me your birthday in the mm/dd/yyyy format!`);
        }

        separated.push(parseInt(args[0].slice(0, 2)) - 1);
        separated.push(parseInt(args[0].slice(3, 5)));
        separated.push(parseInt(args[0].slice(6, 10)));

        //Creates array of birthday - 0 = mm -  1 = dd - 2 = yyyy
        var date = Date.UTC(separated[2], separated[0], separated[1], 19);

        message.channel.send(`Your birthday was set to ${months[parseInt(separated[0])]} ${separated[1]}, ${separated[2]}!`);

        client.birthday.set(key, `${date}`, `birthdayTS`);
        client.birthday.set(key, `${parseInt(separated[0])}`, `birthdayMonth`);
        client.birthday.set(key, `${separated[1]}`, `birthdayDay`);
        client.birthday.set(key, date, `timestamp`);
        client.birthday.set(key, `${message.author.id}`, `userID`);

    } else {

        if (client.birthday.get(key, `birthdayMonth`) != `` && client.birthday.get(key, `birthdayDay`) != ``) {
            message.channel.send(`Your birthday is set to ${months[parseInt(client.birthday.get(key, `birthdayMonth`))]} ${parseInt(client.birthday.get(key, `birthdayDay`))}.`);
        } else {
            message.channel.send(`You have yet to set a birthday!`);
        }

    }
};
module.exports.help = {
    name: `birthday`
};