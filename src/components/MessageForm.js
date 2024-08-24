import React, { useState } from 'react'

const MessageForm = () => {
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
    
        const messageData = {name, message}
        
        const response = await fetch('https://message-api-eta.vercel.app/api/message/', {
          method: 'POST',
          body: JSON.stringify(messageData),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        const json = await response.json()
    
        if (!response.ok) {
          setError(json.error)
        }
        if (response.ok) {
          setError(null)
          setName('')
          setMessage('')
          console.log('new message added:', json)
        }
    
      }
  return (
    <div className='w-60'>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}> 

      <label>Name:</label>
      <input className='bg-transparent border rounded text-white caret-white outline-none' type="text" onChange={(e) => setName(e.target.value)} value={name} required/>

      <label>Message:</label>
      <textarea className='bg-transparent border rounded text-white caret-white outline-none ml-5' type="text" onChange={(e) => setMessage(e.target.value)} value={message} required/>

      <button className='bg-red-700 p-2 rounded'>Send Message</button>
      {error && <div className="error">{error}</div>}
    </form>
</div>
  )
}

export default MessageForm
