function Card({ profile }) {
  return (
    <div className='card d-flex flex-row flex-justfiy-between'>
      <span className='d-flex flex-column'>
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
      <div className='d-flex flex-row flex-justfiy-between'>
        <p>Win:</p>
        <p>{win}</p>
      </div>

      <div className='d-flex flex-row flex-justfiy-between'>
        <p>Draw:</p>
        <p>{draw}</p>
      </div>

      <div className='d-flex flex-row flex-justfiy-between'>
        <p>Loss:</p>
        <p>{loss}</p>
      </div>
    </div>
  )
}

export default Card
