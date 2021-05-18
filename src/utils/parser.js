export const parseParameters = (request) => {
  let [, ...params] = request.split(' ')
  return params
}
export const parseCommands = (request) => {
  let command = request.split(' ')[0]
  return command
}

// <@!999999999999999999> to 999999999999999999
export const parseMemberIdFromTag = (tag) => {
  return tag.replace(/[<@!>]/g, (m) => '')
}
