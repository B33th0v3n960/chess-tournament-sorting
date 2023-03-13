import '../css/card.css'
import '../css/group.css'
import Card from './profile-card'

function CardGroup({ list }) {
  console.log('debug:', list)
  const createCards = list.map((item) => <Card profile={item} />)
  return (
    <div className='card__group'>
      <h2>Group Name</h2>
      {createCards}
    </div>
  )
}

// console.log('test', createCards(list))

export default CardGroup
