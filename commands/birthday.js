module.exports.run = async (client, message, args) => {

    const key = `${message.author.id}`;

    client.birthday.ensure(key, {
        birthdayTS: ``,
        birthdayMonth: ``,
        birthdayDay: ``,
        currentYear: ``,
        userID: ``
    });

    var birthday = args[0];
    let months = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`]; //Just an array of the months
    let dateFormat1 = /\b(\d{2}\/\d{2}\/\d{4})\b/g //regex to test for mm/dd/yyyy format
    let separated = [];

    if (dateFormat1.test(args[0]) === false) {
        return message.reply(`Please give me your birthday in the mm/dd/yyyy format!`);
    }

    separated.push(parseInt(args[0].slice(0,2)) - 1);
    separated.push(parseInt(args[0].slice(3,5)));
    separated.push(parseInt(args[0].slice(6,10)));

    //Creates array of birthday - 0 = mm -  1 = dd - 2 = yyyy
    var date = Date.UTC(separated[2], separated[0], separated[1]);
    var now = new Date(Date.now());

    message.channel.send(`Set ${months[parseInt(separated[0])]} ${separated[1]}, ${separated[2]} as your birthday.`);

    client.birthday.set(key, `${date}`, `birthdayTS`);
    client.birthday.set(key, `${parseInt(separated[0])}`, `birthdayMonth`);
    client.birthday.set(key, `${separated[1]}`, `birthdayDay`);
    client.birthday.set(key, `${now.getFullYear()}`, `currentYear`);
    client.birthday.set(key, `${message.author.id}`, `userID`);

    console.log(client.birthday.get(key));
};
module.exports.help = {
    name: `birthday`
};