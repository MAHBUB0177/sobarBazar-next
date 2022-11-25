import React from 'react'
import Layout from '../Component/Layout'

const contact = () => {
  return (
    <div className=''>
          mahabub
          <p style={{marginTop:'100px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, amet!</p>
    </div>
  )
}

contact.getLayout = function getLayout(page) {
          return (
            
           <Layout>
          {page}
           </Layout>
          )
        }

export default contact