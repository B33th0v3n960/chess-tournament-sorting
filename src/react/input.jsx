import '../css/form.css'
import range from '../data/range'

export function InputGroup({ count }) {
  const output = range(1, count).map((item) => (
    <div key={`player-name-${item}`} className='mb-1'>
      <Input
        inputName={`player-${item}`}
        label={'Name:'}
        key={`player-${item}`}
      />
    </div>
  ))
  return <div>{output}</div>
}

export function Input({ inputName, label, key, mb = 1 }) {
  return (
    <div className={`mb-${mb}`}>
      <label key={key} htmlFor={inputName} className='input__label'>
        {label}
      </label>
      <input type='text' name={inputName} className='name__input ' />
    </div>
  )
}
