import ip from 'ip'
const serverIp = (client, memberId) => {
  if (memberId !== process.env.ADMIN) return
  const user = client.users.cache.get(process.env.ADMIN)
  user.send(`bot connected with ${ip.address()} this ip!`)

  console.log(`bot connected with ${ip.address()} this ip!`)
  return null
}
export { serverIp }
