import '../css/form.css'
import range from '../data/range'

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
  return <div>{output}</div>
}

export default Input
