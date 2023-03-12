import '../css/card.css'
import '../css/group.css'
import Card from './profile-card'


function CardGroup() {
  return (
    <div className='card__group'>
      <Card
        profile={{ name: 'Zhou Sun', point: 3, win: 1, loss: 2, draw: 3 }}
      />
      <Card
        profile={{ name: 'Zhou Sun', point: 3, win: 1, loss: 2, draw: 3 }}
      />
      <Card
        profile={{ name: 'Zhou Sun', point: 3, win: 1, loss: 2, draw: 3 }}
      />
    </div>
  )
}

export default CardGroup
