import Carousel from 'react-bootstrap/Carousel';
import images1 from '../public/images/burger1.jpg'
import images2 from '../public/images/burger2.jpg'
import images3 from '../public/images/Burger-king-4.webp'
import Image from 'next/image';
function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={images1}
          height='400px'
          width='1370px'
          style={{borderRadius:'5px'}}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={images2}
          style={{borderRadius:'5px'}}
          height='400px'
          width='1370px'
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={images3}
          style={{borderRadius:'5px'}}
          height='400px'
          width='1370px'
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;