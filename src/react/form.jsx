import '../css/form.css'
import { Input, InputGroup } from './input'
import range from '../data/range'

function NameForm() {
  const nameInput = range(1, 4).map((item) => (
    <div className='group'>
      <h2>Group {item}</h2>

      <div className='bg-sapphire mb-1'>
        <Input
          inputName={`group-${item}`}
          label={'Group Name:'}
          key={`group-${item}`}
          mb={0}
        />
      </div>

      <InputGroup count={4} />
    </div>
  ))

  return (
    <div className='mb-1'>
      <GlobalForm />

      <form action='' className='name-form'>
        {nameInput}
      </form>
    </div>
  )
}

function GlobalForm() {
  return (
    <div className='global-form'>
      <Input
        inputName={'group-count'}
        label={'Number of Groups:'}
        key={'group-count'}
      />

      <Input
        inputName={'member-count'}
        label={'Members Per Group:'}
        key={'member-count'}
      />

      <button className='navbar__btn' type='submit'>
        Create Input Fields
      </button>
    </div>
  )
}

export default NameForm
