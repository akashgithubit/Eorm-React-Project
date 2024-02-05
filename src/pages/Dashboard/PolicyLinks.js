import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import {
  CRow,
  CCard,
  CCardBody,
  CCardSubtitle,
  CCardTitle,
  CCardLink,
  CCardText,
  CCol
} from '@coreui/react'
import styles from '../../dist/styles/DashboardStyles/DashboardStyles.module.css';
import setStyle from '../../dist/styles/css/form-style.css';
import TopMiniCard from "../../dist/common/TopMiniCard";
const PolicyLinks = () => {

  const notificationAPiCall = async () => {
    try {
      // const response = await axios.get('http://localhost:8080/api/v1/get_All_Notification');
      // Handle the response data here
      
      // setApiData(response.data);
    } catch (error) {
      // Handle error if the API call fails
      
    }
  };

  useEffect(() => {
    notificationAPiCall(); // Call the API function
  }, []);

  const messagesEndRef = useRef(null);
  
  // const handleClick = (noteId, noteName, noteDescription) => {
  //   try {
  //     const response = axios.get(`http://localhost:8080/api/v1/notification_By_Id/${noteId}`);
      
  //   } catch (error) {
      
  //   }
  //   setSpecificIdData({
  //     id: noteId,
  //     name: noteName,
  //     description: noteDescription,
  //   })
  //   setVisible(true)
  // };
  
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };
  
  return (
    <>
  
    <CRow>
        <CCol sm={8}>
          <label className={styles.empheader}>Policy Links</label>
           <CCard className={styles.policystyle}>
           <CCardBody>
            <CRow>
              <CCol sm={3}>
                
                <CCardTitle className={`${styles.empSubHeader} ${styles.cardTitle}`}>Attendance And Leave Policies</CCardTitle>
            
                <CCardLink href="#">Card link</CCardLink>
               
              </CCol>
              <CCol sm={3}>
                <CCardTitle className={`${styles.empSubHeader} ${styles.cardTitle}`}>Security Policies</CCardTitle>
          
                <CCardLink href="#">Card link</CCardLink>
         
              </CCol>
              <CCol sm={3}>
                <CCardTitle className={`${styles.empSubHeader} ${styles.cardTitle}`}>Releaving Policies</CCardTitle>
            
                <CCardLink href="#">Card link</CCardLink>
         
              </CCol>
              <CCol sm={3}>
                <CCardTitle className={`${styles.empSubHeader} ${styles.cardTitle}`}>Onboarding Policies</CCardTitle>
               
                <CCardLink href="#">Card link</CCardLink>
         
              </CCol>
            </CRow>
           
          </CCardBody>
            
          </CCard>`
         </CCol>
       
         <CCol sm={4}>
            <label className={styles.empheader}>Employee Profile</label>
            <CCard className={styles.policystyle}>
          `   <CCardBody>
                <CRow>
                  <CCol sm={6}>
                    <CCardTitle className={`${styles.empSubHeader} ${styles.cardTitle}`}>TimeSheet</CCardTitle>
                    <CCardLink href="#">Card link</CCardLink>
                    
                  </CCol>
                  <CCol>
                    <CCardTitle  className={`${styles.empSubHeader} ${styles.cardTitle}`}>Payslip</CCardTitle>
                    <CCardLink href="#">Card link</CCardLink>
                  </CCol>
                 
                </CRow>
              </CCardBody>
            </CCard>
          </CCol>
    </CRow>
    </>
  );
};

export default PolicyLinks;