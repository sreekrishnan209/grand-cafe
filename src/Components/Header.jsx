import React from 'react'

function Header() {
  return (
    <div>
        <div className='bg-white-100 border-b-2 border-black-900'>
            <ul className='flex justify-between'>
                <div>
                    <li><img width={'150px'} src="https://salim-fayis.github.io/olapool-landingpage/assets/img_logo-nI4p2SXX.png" alt="" /></li>
                </div>
                <div className='flex'>
                    <li className='text-lg mr-20 mt-4'>
                        Message
                    </li>
                    <li className='mr-5 mt-5 border-black'>
                        <input type="text" className='font-bold  border-2 border-black pl-2 p-1' placeholder='mayan'  />
                    </li>
                </div>
            </ul>
        </div>
    </div>
  )
}

export default Header