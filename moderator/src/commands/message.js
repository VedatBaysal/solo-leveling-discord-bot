import { parseMemberIdFromTag } from '../utils/parser.js'

const sendPrivateMessage = (client, params) => {
  let member = params[0]
  let [, ...message] = params
  message = message.join(' ')

  const user = client.users.cache.get(parseMemberIdFromTag(member))
  user.send(message)

  return `${member} kişisine ${message} mesaj gönderiliyor... `
}
const deleteMessageInChannel = (x) => {
  return null
}
export { sendPrivateMessage, deleteMessageInChannel }
