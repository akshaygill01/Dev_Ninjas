import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
        <main>
            <h1>Contact Us</h1>
            <form >
                <div>
                    <label >Name</label>
                    <input type="text"  required placeholder='John Doe'/>
                </div>
                <div>
                    <label >Email</label>
                    <input type="email"  required placeholder='akh123@gmail.com'/>
                </div>
                <div>
                    <label >Message</label>
                    <input type="Text"  required placeholder='ask a query....'/>
                </div>
                <button type="submit">Submit</button>
            
            </form>

        </main>
    </div>
  )
}

export default Contact
