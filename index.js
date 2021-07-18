const Discord = require('discord.js')
const client = new Discord.Client()

const config = require('./config.json')
const command = require('./command')

client.on('ready', () => {
    console.log('The Client is Ready!')

    command(client, 'ping', (message) => {
        message.channel.send(`Pong!`)
    })

    command(client, ['purge', 'p'], message => {
        if (message.member.hasPermission('ADMINISTRATOR')) {
            message.channel.messages.fetch().then((results) => {
                message.channel.bulkDelete(results)
            })
        }
    })
})

client.login(process.env.DiscordJS_Token)