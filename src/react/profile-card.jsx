import '../css/card.css'

function Card({ profile }) {
  return (
    <div className='card'>
      <span className='flex'>
        <p className='m-0'>{profile.name}</p>
        <p className='m-0'>Points: {profile.point}</p>
      </span>
    </div>
  )
}

export default Card
