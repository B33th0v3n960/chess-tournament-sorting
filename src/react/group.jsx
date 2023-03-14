import '../css/card.css'
import '../css/group.css'
import Card from './profile-card'

function CardGroup({ list }) {
  const createCards = list.map((item) => (
    <Card key={item.name} profile={item} />
  ))
  return (
    <div className='card__group'>
      <h2>Group Name</h2>
      {createCards}
    </div>
  )
}

export default CardGroup
