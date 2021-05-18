const momentOfIndecision = (options) => {
  return `You should choose ${options[
    Math.floor(Math.random() * options.length)
  ].toUpperCase()} in the options`
}
export { momentOfIndecision }
