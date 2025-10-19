import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../Components/Card'
const Support = () => {
  return (
    <div>
      <h1 className='text-[18px] p-4 '>Got complaint or questions? Reach out to us on</h1>
      <Card>
        <div className='mt-4 p-4'>
          <ul>
            <li><strong>Email: </strong>support@billbuzz.ng</li>
            <li><strong>Call: </strong> 09162293122</li>
            <li><strong>Whatsaap: </strong> <Link to='https://wa.me/2349136435116'>09136435116</Link></li>
          </ul>
        </div>
      </Card>
    </div>
  )
}

export default Support
