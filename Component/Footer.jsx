import Image from 'next/image'
import React from 'react'
import styles from '../styles/Footer.module.css'
import image8 from '../public/images/image8.jpg'

const Footer = () => {
  return (
    <div className={styles.container}>

      <div className={styles.item}>
      <Image src={image8} layout='fill'  alt='imagesproduct'/>
      </div>

      <div className={styles.item}>

        <div className={styles.card}>
          <h2 className={styles.motto}>
          OH YES,WE DID.THE LAMA PIZZA, WELL BAKED SLICE OF PIZZA
          </h2>
        </div>

        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTURENTS</h1>
          <p className={styles.text}> 1654 R ROAD #304
            <br/>NEWYORK, 8054
            <br/>(603) 017768
          </p>

          <p className={styles.text}> 1654 R ROAD #304
            <br/>NEWYORK, 8054
            <br/>(603) 017768
          </p>

          <p className={styles.text}> 1654 R ROAD #304
            <br/>NEWYORK, 8054
            <br/>(603) 017768
          </p>

          <p className={styles.text}> 1654 R ROAD #304
            <br/>NEWYORK, 8054
            <br/>(603) 017768
          </p>

        </div>

        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>SUNDAY - MONDAY
            <br/>12.00 - 24.00
          </p>
        </div>

      </div>
    </div>
  )
}

export default Footer