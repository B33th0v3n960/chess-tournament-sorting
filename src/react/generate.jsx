import { useState, useEffect } from 'react'
import Profile from '../data/data'
import CardGroup from './group'

function BodyContent() {
  const [team, setTeam] = useState([])

  function generate() {
    const teamList = document.querySelector('#group-1').children
    const final = []
    for (let i of teamList) {
      final.push(new Profile(i.lastChild.value))
    }
    setTeam([...final])
  }

  const nameInput = document.querySelector('#group-name')
  const name = nameInput ? nameInput.value : null

  useEffect(() => {
    console.log(team)
  }, [team])

  function SortBtn() {
    return (
      <button onClick={generate} className='navbar__btn' type='submit'>
        Sort
      </button>
    )
  }

  function GenerateBtn() {
    return (
      <button onClick={generate} className='navbar__btn' type='submit'>
        Generate
      </button>
    )
  }

  return (
    <div>
      <GenerateBtn />
      <CardGroup list={team} groupName={name} />
    </div>
  )
}

export default BodyContent
