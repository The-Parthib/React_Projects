import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return < div className='bg-blue-600 text-white text-2xl p-4'>User : {userid}</div>;
}

export default User