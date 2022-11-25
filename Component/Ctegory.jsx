import React from 'react'
import styles from '../styles/Category.module.css'
import Image from 'next/image'
import image1 from '../public/images/image1.jpg'
import image2 from '../public/images/image2.jpg'
import image3 from '../public/images/image3.jpeg'
import image4 from '../public/images/image4.jpg'
import image5 from '../public/images/image5.jpg'
import image6 from '../public/images/image6.jpg'
import image7 from '../public/images/image7.jpg'
import image8 from '../public/images/image8.jpg'
import Button from 'react-bootstrap/Button';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';


export const Ctegory = () => {
  return (
    <div >
          <div className={styles.title}>
                    Category Product
          </div>
          <div className={styles.container}>
          <div className={styles.card1}>
          <Image src={image1} height='200px' width='280px'  alt='imagesproduct'/>
          <h4 className={styles.head}>Elk Burgers</h4>
          <p className={styles.star}>
             Rating:<StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/><span style={{marginLeft:'50px',color:'tomato'}}>
             <FavoriteIcon/>
              </span></p>
          
          </div>

          <div className={styles.card1}>
          <Image src={image2} height='200px' width='280px'  alt='imagesproduct'/>
          <h4 className={styles.head}>Portobello Mushroom Burgers</h4>

          <p className={styles.star}>
             Rating:<StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/><span style={{marginLeft:'50px',color:'tomato'}}>
             <FavoriteIcon/>
              </span></p>
          

          </div>

          <div className={styles.card1}>
          <Image src={image3} height='200px' width='280px'  alt='imagesproduct'/>
          <h4 className={styles.head}>Turkey Burgers</h4>
          <p className={styles.star}>
          Rating:<StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/><span style={{marginLeft:'50px',color:'tomato'}}>
             <FavoriteIcon/>
              </span></p>
          </div>
          
          <div className={styles.card1}>
          <Image src={image4} height='200px' width='280px'  alt='imagesproduct'/>
          <h4 className={styles.head}>Veggie Burgers</h4>
          <p className={styles.star}>
          Rating:<StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/><span style={{marginLeft:'50px',color:'tomato'}}>
             <FavoriteIcon/>
              </span></p>
          </div>

          <div className={styles.card1}>
          <Image src={image5} height='200px' width='280px'  alt='imagesproduct'/>
          <h4 className={styles.head}>Spicy Burgers</h4>
          <p className={styles.star}>
          Rating:<StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/><span style={{marginLeft:'50px',color:'tomato'}}>
             <FavoriteIcon/>
              </span></p>
          </div>
      
          <div className={styles.card1}>
          <Image src={image6} height='200px' width='280px'  alt='imagesproduct'/>
          <h4 className={styles.head}>    New York-Style Pizza</h4>
          <p className={styles.star}>
          Rating:<StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/><span style={{marginLeft:'50px',color:'tomato'}}>
             <FavoriteIcon/>
              </span></p>
          </div>

          <div className={styles.card1}>
          <Image src={image7} height='200px' width='280px'  alt='imagesproduct'/>
          <h4 className={styles.head}>Sicilian Pizza.</h4>
          <p className={styles.star}>
          Rating:<StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/><span style={{marginLeft:'50px',color:'tomato'}}>
             <FavoriteIcon/>
              </span></p>
          </div>

          <div className={styles.card1}>
          <Image src={image8} height='200px' width='280px'  alt='imagesproduct'/>
          <h4 className={styles.head}>Greek Pizza.</h4>
          <p className={styles.star}>
          Rating:<StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/><span style={{marginLeft:'50px',color:'tomato'}}>
             <FavoriteIcon/>
              </span></p>
          </div>
          </div>


   </div>
  )
}
