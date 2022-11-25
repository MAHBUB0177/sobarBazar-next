import Head from 'next/head'
import Image from 'next/image'
import Layout from '../Component/Layout'
import styles from '../styles/Home.module.css'
import contact from './contact'
import about from './about'
import UncontrolledExample from '../Component/Slider'
import { Ctegory } from '../Component/Ctegory'

export default function Home() {
  return (
    <div className={styles.slide}>
      <UncontrolledExample/>
      <Ctegory/>
    </div>
  )
}


Home.getLayout = function getLayout(page) {
  return (
    
   <Layout>
    {page}
   </Layout>
  )
}
