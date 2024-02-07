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
  
           <CCol sm={12}>
              <label className={styles.dashboardsubheader}>Policy and Other Links</label>
              <CCard style={{borderTop:"solid 5px #00BFFF"}} className={styles.policystyle}>
                <CCardBody>
                  <CRow>
                    <CCol sm={3} style={{borderRight:"solid 1px grey"}}>
                      <CCardLink href="#">Attendance And Leave</CCardLink>
                    </CCol>
                    <CCol sm={3} style={{borderRight:"solid 1px grey"}}>
                
                      <CCardLink href="#">Security</CCardLink>
                    </CCol>
                    <CCol sm={3} style={{borderRight:"solid 1px grey"}}> 
                      <CCardLink href="#">Relieving</CCardLink>
                    </CCol>
                    <CCol sm={3}>
                      <CCardLink href="#">OnBoarding</CCardLink>
                    </CCol>
                  </CRow>
                </CCardBody>
              </CCard>
           </CCol>
    </>
  );
};

export default PolicyLinks;