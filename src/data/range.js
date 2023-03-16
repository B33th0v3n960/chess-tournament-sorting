function range(start, stop, step = 1) {
  if (arguments.length === 1) {
    stop = start
    start = 0
  }
  const result = []
  for (let i = start; Math.sign(stop - i) === Math.sign(step); i += step) {
    result.push(i)
  }
  return result
}

export default range
