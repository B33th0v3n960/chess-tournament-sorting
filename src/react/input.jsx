import '../css/form.css'

function Input({ count }) {
  const output = range(1, count).map((item) => (
    <div key={`player-name-${item}`} className='mb-1'>
      <label
        key={`player-${item}`}
        htmlFor={`player-${item}`}
        className='input__label'
      >
        Name:
      </label>
      <input type='text' name={`player-${item}`} className='name__input' />
    </div>
  ))
  return (
    <div>
      {output}
      <button type='submit'>Submit</button>
    </div>
  )
}

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

export default Input
