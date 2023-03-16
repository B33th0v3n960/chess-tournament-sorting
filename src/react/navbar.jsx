import '../css/navbar.css'
import { useState } from 'react'

function Navbar() {
  const [sort, setSort] = useState(0)

  function toggleSort() {
    if (sort === 1) setSort(0)
    else setSort(1)
  }

  return (
    <div className='navbar'>
      <nav>Chess Tournament Sorting</nav>

      {sort ? <SortBtn /> : <GenerateBtn />}

      <button className='navbar__btn' type='submit'>
        Clear All
      </button>
    </div>
  )

  function SortBtn() {
    return (
      <button onClick={toggleSort} className='navbar__btn' type='submit'>
        Sort
      </button>
    )
  }

  function GenerateBtn() {
    return (
      <button onClick={toggleSort} className='navbar__btn' type='submit'>
        Generate
      </button>
    )
  }
}

export default Navbar
