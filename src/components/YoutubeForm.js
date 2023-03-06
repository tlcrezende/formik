import React from 'react'

function YoutubeForm() {
  return (
    <div>
        <form>
            <label htmlFor='name' >Name</label>
            <input type='text' id='name' name='name' />

            <label htmlFor='email' >Email</label>
            <input type='email' id='email' name='email' />

            <label htmlFor='channel' >Channel</label>
            <input type='text' id='channel' name='channel' />

        </form>
    </div>
  )
}

export default YoutubeForm