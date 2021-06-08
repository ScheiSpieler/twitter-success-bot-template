var Twitter = require('twit')
var Discord = require("discord.js")
var Request = require("request-promise-native")

var settings = require("./settings.json")

var client = new Twitter(settings.Twitter)

var bot = new Discord.Client()
const { config } = require("dotenv")

config({
    path: __dirname + "/.env"
});

bot.on("message", message => {
    if (message.channel.id === settings.Discord.channel_id) {
        message.attachments.forEach(Image => {
            var url = Image.url
            if (message.channel.id === settings.Discord.channel_id)

            var promise = Request({
                uri: Image.proxyURL,
                encoding: null
            }).then(imageData => {

                client.post('media/upload', {
                    media: imageData.toString("base64")
                }, function(error, data, response) {
                    if (!error) {
                        var mediaIdStr = data.media_id_string
                        var meta_params = {
                            media_id: mediaIdStr,
                            alt_text: {
                                text: "Discord Image"
                            }
                        }
                client.post("media/metadata/create", meta_params, function(err, data, response) {
                    if (!err) {
                        var params = {
                            status: ` Success by` + ' ' + message.author.username + '#' + message.author.discriminator,
                            media_ids: [mediaIdStr],
                        }
                        client.post("statuses/update", params, function(err, data, response) {
                            if (!err) {
                                msg = new Discord.MessageEmbed()
                                    .setTitle( message.author.username + ' ' + 'Your Tweet has been sent')
                                    .setDescription('Click [here](https://twitter.com/' + data.user.screen_name + '/status/' + data.id_str + ') to view your tweet! ')
                                    .setTimestamp()
                                    .setFooter(bot.user.username)

                                    // Set Colour to users request (database)
                                    .setColor('#000000')
                                message.channel.send(msg);
                                console.log(data)
                            } else {
                                throw err
                            }
                        });
                    } else {
                        throw err
                    }
                });
            } else {
                throw error
            }
        });
    });
});
}

});

bot.on("ready", () => {
    bot.user.setPresence({
        status: "online",
        game: {
            name: "#Success for success posts",
            type: "WATCHING",
        }
    });

    console.log(`${bot.user.username} is online!`);
});

bot.login(process.env.TOKEN);