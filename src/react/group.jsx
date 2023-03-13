import '../css/card.css'
import '../css/group.css'
import Card from './profile-card'
import Profile from '../data/data.js'

const player1 = new Profile("Me")

function CardGroup() {
  return (
    <div className='card__group'>
      <h2>Group Name</h2>

      <Card
        profile={player1}
      />
    </div>
  )
}

export default CardGroup
