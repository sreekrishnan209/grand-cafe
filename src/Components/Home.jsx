import React from 'react'

function Home() {
  return (
    <div className='bg-slate-100 '>
        {/* <h1 className="text-3xl font-bold underline text-center">
      Hello world! hgas
    </h1> */}
    <div className='flex'>
        <div className='w-100 border-r-2 border-black-900 bg-white'>
            <div className='flex border-2 m-9 rounded-lg '>
                <div className='m-3'>
                    <img className='w-20' src="https://www.freeiconspng.com/uploads/user-icons--download-14403-free--premium-icons-on-iconfinder-15.png" alt="" />
                </div>
                <div className='m-2'>
                    <h6 className='font-bold'>Miya Hashim</h6>
                    <h6 className='from-green-600' >Verification <span>Level 3</span></h6>
                    <p>Ernakulam India</p>
                </div>
            </div>
            <div className=' border-2 m-9 rounded-lg '>
            <h1 className='font-bold text-xl m-3'>Available for use</h1>
            <div className='flex'>
                <div className='m-3'>
                    <h1 className='text-4xl'>0.00</h1>
                    <h1 className='text-l'>Being Cleared</h1>
                    <h1 className='text-4xl'>0.00</h1>
                   
                </div>
                <div className='m-3 mt-12'>
                    <button className='border-2 border-dark-900 p-1 w-32 m-2'>
                        Withdraw
                        </button>
                        <br />
                        <button  className='border-2 border-dark-900 w-32 px-3 pt-1 pb-1 m-2'>
                            History
                        </button>
                </div>
            </div>
            </div>

            <div>
                <ul className='m-10'>
                    <li className='m-5 cursor-pointer text-2xl'>
                        <i class="fa-solid fa-border-all"></i>
                        Overview </li>
                    <li  className='m-5 cursor-pointer text-2xl bg-blue-700 rounded-lg p-3 text-white'>Store</li>
                    <li className='m-5 cursor-pointer text-2xl'>User Account</li>
                    <li className='m-5 cursor-pointer text-2xl'>Order</li>
                    <li className='m-5 cursor-pointer text-2xl'>Contact & Support</li>
                    <li className='m-5 cursor-pointer text-2xl'>Term & Condition</li>
                </ul>
            </div>
            
        </div>
        <div className='bg-slate-100 flex justify-between'>
            <div className='mt-40 ml-20'>
                <ul className='cursor-pointer'>
                    <li className='mb-3 bg-blue-300 p-4 rounded-lg w-44'>Products</li>
                    <li className='m-3'>Order</li>
                    <li className='m-3'>Store Settings</li>
                </ul>
            </div>
            <div>
                <div className='flex ml-60 mt-10'>
                    <input  className='ml-5  border-2 border-black rounde-lg p-1' type="text" placeholder='All' />
                    <input  className='ml-20 border-2 border-black rounde p-1' type="text"  placeholder='All' />
                    <input  className='ml-20 border-2 border-black rounde p-1' type="text" placeholder='All' />
                </div>
                <div className='border-2 border-black-900 bg-white mt-20 h-2/3 ml-20 rounded-lg'>
                    <div className='flex p-5'>
                        <input placeholder='Search products ' className='border-2 border-black-500 ml-80 p-1' type="text" />
                        {/* <i className='bg-blue c-white'>Sort</i> */}
                        <p className='bg-blue-600 text-white cursor-pointer rounded-lg px-4 py-1 ml-3'>Sort</p>
                        
                    </div>
                    <div className='flex m-10'>
                            <div className='w-40 border-2 border-black-900 rounded-lg  m-5 cursor-pointer'>
                                    <p className='text-center mt-20 text-sky-800'>➕ <br />
                                    Add Product</p>
                            </div>
                            <div className='m-5 rounded-lg shadow-md p-2'>
                                <img className='w-40'   src="https://th.bing.com/th/id/OIP._UV027OFd5VfUTbNs00I_QHaHa?rs=1&pid=ImgDetMain" alt="" />
                                  

                                    <p>Sony pxw-z90</p>
                                    <p>from <span className='text-sky-800'>₹ 1,00,000</span></p>
                            </div>
                            <div className='m-5 rounded-lg shadow-md p-2'>
                            <img className='w-40' src="https://th.bing.com/th/id/OIP._UV027OFd5VfUTbNs00I_QHaHa?rs=1&pid=ImgDetMain" alt="" />
                            <p>Sony pxw-z90</p>
                            <p>from <span className='text-sky-800'>₹ 1,00,000</span></p>
                            </div>
                            <div className='m-5 rounded-lg shadow-md p-2'>
                            <img className='w-40' src="https://th.bing.com/th/id/OIP._UV027OFd5VfUTbNs00I_QHaHa?rs=1&pid=ImgDetMain" alt="" />
                            <p>Sony pxw-z90</p>
                            <p>from <span className='text-sky-800'>₹ 1,00,000</span></p>
                            </div>
                        </div>

                </div>
            </div>

        </div>
        
    </div>
    </div>
  )
}

export default Home