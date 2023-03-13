import '../css/card.css'

function Card({ profile }) {
  return (
    <div className='card flex row'>
      <span className='flex'>
        <p className='m-0'>{profile.name}</p>
        <p className='m-0'>Points: {profile.getPoint()}</p>
      </span>
      <Score
        win={profile.getWin()}
        loss={profile.getLoss()}
        draw={profile.getDraw()}
      />
    </div>
  )
}

function Score({ win, loss, draw }) {
  return (
    <div>
      <div className='space-between'>
        <p>Win:</p>
        <p>{win}</p>
      </div>

      <div className='space-between'>
        <p>Draw:</p>
        <p>{draw}</p>
      </div>

      <div className='space-between'>
        <p>Loss:</p>
        <p>{loss}</p>
      </div>
    </div>
  )
}

export default Card
