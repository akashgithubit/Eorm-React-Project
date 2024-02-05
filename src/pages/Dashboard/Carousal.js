import { CCard, CCol, CContainer, CRow,CCardBody } from '@coreui/react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/esm/CarouselItem';
import carousal1 from '../../assets/images/carousal1.avif'
import carousal2 from '../../assets/images/carousal2.avif'
import carousal3 from '../../assets/images/carousal3.avif'
import CalenderViewTwo from './CalenderViewTwo'
import CalendarView from './CalendarView'
function DarkVariantExample() {
  return (
    
     
        <CRow>
         <CCol sm={8}>
            <Carousel data-bs-theme="dark">
            <Carousel.Item>
                <img
                className="w-100 mx-auto"
                src={carousal1}
                alt="First slide"
                style={{ height: '320px' }} // Adjust the height here
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={carousal2}
                alt="Second slide"
                style={{ height: '320px' }} // Adjust the height here
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={carousal3}
                alt="Third slide"
                style={{ height: '320px' }} // Adjust the height here
                />
            </Carousel.Item>
            </Carousel>
         
      
          </CCol>
          <CCol sm={4}>
              <CalendarView/>
          </CCol>
         </CRow>
       
   
  );
}

export default DarkVariantExample;
