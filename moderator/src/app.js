import { commandRouter } from './router/router.js'
import dotenv from 'dotenv'
dotenv.config()
import dc from 'discord.js'
const client = new dc.Client()

const prefix = '!'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', (msg) => {
  if (!msg.content.startsWith(prefix)) return
  let comment = msg.content.slice(1, msg.content.length)
  msg.reply(commandRouter(comment))
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
