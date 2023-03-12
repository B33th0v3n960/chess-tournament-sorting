import '../css/card.css'

function Card({ profile }) {
  return (
    <div className='card flex row'>
      <span className='flex'>
        <p className='m-0'>{profile.name}</p>
        <p className='m-0'>Points: {profile.point}</p>
      </span>
      <Score win={profile.win} loss={profile.loss} draw={profile.draw} />
    </div>
  )
}

function Score({ win, loss, draw }) {
  return (
    <div>
      <p>win:{win}</p>
      <p>draw:{draw}</p>
      <p>loss:{loss}</p>
    </div>
  )
}

export default Card
