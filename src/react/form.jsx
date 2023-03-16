import '../css/form.css'
import Input from './input'
import range from '../data/range'

function NameForm() {
  const nameInput = range(1, 4).map((item) => (
    <div className='group'>
      <h2>Group {item}</h2>
      <div className='bg-sapphire mb-1'>
        <label
          key={`player-${item}`}
          htmlFor={`player-${item}`}
          className='input__label'
        >
          Group Name:
        </label>
        <input type='text' name={`player-${item}`} className='name__input' />
      </div>
      <Input count={4} />
    </div>
  ))
  return (
    <div className='mb-1'>
      <div className='global-form'>
        <div className='mb-1'>
          <label htmlFor='group-count' className='input__label'>
            Number Of Groups:
          </label>
          <input type='text' name='group-count' className='name__input ' />
        </div>

        <div className='mb-1'>
          <label htmlFor='member-count' className='input__label'>
            Members Per Group:
          </label>
          <input type='text' name='member-count' className='name__input ' />
        </div>

        <button className='navbar__btn' type='submit'>
          Create Input Fields
        </button>
      </div>

      <form action='' className='name-form'>
        {nameInput}
      </form>
    </div>
  )
}

export default NameForm
