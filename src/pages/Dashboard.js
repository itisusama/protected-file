import React, { useEffect, useState } from 'react'
import MessageForm from '../components/MessageForm'
import SavePageButton from '../components/SavaPageButton'

const Dashboard = () => {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    fetch("https://message-api-eta.vercel.app/api/message/").then(res => res.json())
    .then((data) => {
      setMessages(data)
    }).catch(err => console.error(err))
  })
  return (
    <div className='p-5'>
      <div className='bg-white p-4 rounded mt-4'>
        <p>
          This is a Personal Messaging App Which is only used by Tahir or Mehwish to send Usama some messages. <br />
          (The Messages already shown are fake)
          Both API and Frontend is Live on Vercel
        </p>
      </div>

      <section className='flex flex-col-reverse text-white mt-20 md:flex md:flex-row md:gap-4'>
        <div className='w-full md:w-[50%]'>
          {
            messages.map((message, ) =>(
              <div className='text-red-700' key={message._id}>
                <p>{message.name}: <span className='text-white'>{message.message}</span></p>
              </div>
            ))
          }
        </div>
        <div className='w-full md:w-[50%]'>
          <MessageForm/>
          <SavePageButton/>
        </div>

      </section>
    </div>
  )
}

export default Dashboard
