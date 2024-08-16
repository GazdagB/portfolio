// eslint-disable-next-line no-unused-vars
import React from 'react'

const Contact = () => {
  return (
        <div className='bg-[#DBDBDB] px-6 py-10'>
            <h2 className='u-h2 mb-5'>Get in touch</h2>
            <p className='u-body mb-6'>Feel free to contact me any time. I will get back to you as I can!</p>
            <form className='flex flex-col items-center' action="">
                <input className='w-full mb-[11px] py-3 px-5 rounded-md' type="text" name="name" id="nameInput" placeholder='Name' required />
                <input className='w-full mb-[11px] py-3 px-5 rounded-md' type="email" name="email" id="emailInput" placeholder='Email' required />
                <textarea className='w-full px-5 py-3 rounded-md mb-[50px]' name="message" rows={4} cols={30} id="messageInput" placeholder='Message...' required></textarea>
                <button className='bg-[#EF479B] inline px-8 py-2 rounded-full text-white font-bold'>SEND</button>
            </form>
        </div>
  )
}

export default Contact