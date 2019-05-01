module.exports.run = async (client, message) => {

    //Ping (# ms)
    let ping = client.ping + ` ms`;

    //send message with ping in it
    message.channel.send(ping);

};
module.exports.help = {
    name: `ping`
};