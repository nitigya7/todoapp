import React from 'react'

const MyList = ({name, rm}) => {
  return (
    <div className='my-list'>
      <h4>{name}</h4>
      <button onClick={rm}>remove</button>
    </div>
    
  )
}

export default MyList
