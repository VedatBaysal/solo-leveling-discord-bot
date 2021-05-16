import { rockPaperScissors } from '../commands/rock-paper-scissors.js'
import { kick, ban } from '../commands/member.js'
import {
  sendPrivateMessage,
  deleteMessageInChannel,
} from '../commands/message.js'
import { level } from '../commands/cyberWord.js'
import { createCharacterSheet, dndDice } from '../commands/dnd.js'
import { help, helpDnd, helpCyber } from '../commands/helper.js'

export const commandRouter = (command, param = null) => {
  switch (command) {
    case 'rock':
    case 'paper':
    case 'scissors':
      return rockPaperScissors(command)
    case 'kick':
      return kick(param)
    case 'kick':
      return ban(param)
    case 'sendPrivateMessage':
      return sendPrivateMessage(param)
    case 'deleteMessageInChannel':
      return deleteMessageInChannel(param)
    case 'level':
      return level(param)
    case 'createCharacterSheet':
      return createCharacterSheet(param)
    case 'dndDice':
      return dndDice(param)
    case 'help':
      return help()
    case 'helpDnd':
      return helpDnd()
    case 'helpCyber':
      return helpCyber()
  }
}
