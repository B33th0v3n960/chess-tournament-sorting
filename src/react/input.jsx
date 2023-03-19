import range from '../data/range'

export function InputGroup({ count, assignId }) {
  const output = range(1, count).map((item) => (
    <Input
      inputName={`player-${item}`}
      label={'Name:'}
      key={`player-${item}`}
    />
  ))
  return <div id={assignId}>{output}</div>
}

export function Input({ inputName, label, assignKey, assignId, mb = 1 }) {
  return (
    <div className={`mb-${mb}`}>
      <label key={assignKey} htmlFor={inputName} className='input__label'>
        {label}
      </label>
      <input
        id={assignId}
        type='text'
        name={inputName}
        className='name__input '
      />
    </div>
  )
}
