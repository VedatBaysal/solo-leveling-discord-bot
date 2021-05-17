import ip from 'ip'
import { commandRouter } from './router/router.js'
import { parseCommands, parseParameters } from './utils/parser.js'
import dotenv from 'dotenv'
dotenv.config()
import dc from 'discord.js'
const client = new dc.Client()

const prefix = '!'

client.on('ready', () => {
  console.log(`Logged with ${ip.address()} this ip!`)
})

client.on('message', (msg) => {
  if (!msg.content.startsWith(prefix)) return
  let comment = msg.content.slice(1, msg.content.length)
  let params = parseParameters(comment)
  if (params.length === 0) {
    msg.reply(commandRouter(client, parseCommands(comment)))
  } else {
    msg.reply(commandRouter(client, parseCommands(comment), params))
  }
})

client.on('presenceUpdate', (oldPresence, newPresence) => {
  let member = newPresence.member
  if (member.id === process.env.SPECIAL_MEMBER) {
    if (oldPresence.status !== newPresence.status) {
      if (newPresence.status === 'online') {
        const user = client.users.cache.get(process.env.ADMIN)
        user.send(`${process.env.SPECIAL_MEMBER_NAME} Online`)
      }
    }
  }
})

client.login(process.env.TOKEN)
