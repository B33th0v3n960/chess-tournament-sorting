import Card from './profile-card'

function CardGroup({ list, groupName = 'Group Name' }) {
  const createCards = list.map((item) => (
    <Card key={item.name} profile={item} />
  ))
  return (
    <div className='group'>
      <h2>{groupName}</h2>
      {createCards}
    </div>
  )
}

export default CardGroup
