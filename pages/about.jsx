import Layout from "../Component/Layout";
import styles from '../styles/About.module.css'
import Image from 'next/image';
import images1 from '../public/images/burger1.jpg'
import images2 from '../public/images/burger2.jpg'
import images3 from '../public/images/Burger-king-4.webp'
 
 const about = () => {
  return (
    <>
 
    <div className={styles.carditem}>
    
    <div className={styles.card1}>
          
          <Image src={images1} height='200px' width='280px'  alt='imagesproduct'/>
          
    </div>

    <div className={styles.card1}>
    <Image src={images2} height='200px' width='250px'  alt='imagesproduct'/>
    </div>

    <div className={styles.card1}>
    <Image src={images3} height='200px' width='250px'  alt='imagesproduct'/>
    </div>
    <div className={styles.card1}>
    <Image src={images3} height='200px' width='250px'  alt='imagesproduct'/>
    </div>
    <div className={styles.card1}>
    <Image src={images3} height='200px' width='250px'  alt='imagesproduct'/>
    </div>
    <div className={styles.card1}>
    <Image src={images3} height='200px' width='250px'  alt='imagesproduct'/>
    </div>
    </div>
    </>
   
  )
}

about.getLayout = function getLayout(page) {
          return (
            
          <Layout>
          {page}
          </Layout>
          )
        }
        
export default about;