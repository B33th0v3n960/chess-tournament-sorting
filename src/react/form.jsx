import { useState, useEffect } from 'react'
import '../css/form.css'
import { Input, InputGroup } from './input'
import range from '../data/range'

function NameForm() {
  const [groupCount, setGroupCount] = useState(0)
  const [memberCount, setMemberCount] = useState(0)

  async function getGroupCount() {
    const group = document.querySelector('#group-count').value
    const member = document.querySelector('#member-count').value
    if (group && member) {
      setMemberCount(Number(member))
      setGroupCount(Number(group))
    }
  }
  useEffect(
    () => console.log(groupCount, memberCount),
    [groupCount, memberCount]
  )

  function GlobalForm() {
    return (
      <div className='global-form'>
        <Input
          inputName={'group-count'}
          label={'Number of Groups:'}
          assignKey={'group-count'}
          assignId={'group-count'}
        />

        <Input
          inputName={'member-count'}
          label={'Members Per Group:'}
          assignKey={'member-count'}
          assignId={'member-count'}
        />

        <button onClick={getGroupCount} className='navbar__btn' type='submit'>
          Create Input Fields
        </button>
      </div>
    )
  }

  const nameInput = range(1, groupCount + 1).map((item) => (
    <div key={`group-name-${item}`} className='group'>
      <h2>Group {item}</h2>

      <div className='bg-sapphire mb-1'>
        <Input
          inputName={`group-${item}`}
          label={'Group Name:'}
          assignKey={`group-${item}`}
          mb={0}
        />
      </div>

      <InputGroup count={memberCount + 1} />
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

export default NameForm
