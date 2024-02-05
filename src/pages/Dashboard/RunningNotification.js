import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import {
  CRow,
  CCol,
  CModal,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CButton,
  CContainer,
} from '@coreui/react'
import styles from '../../dist/styles/DashboardStyles/DashboardStyles.module.css';
import setStyle from '../../dist/styles/css/form-style.css';
const RunningNotifications = () => {
  const [apiData, setApiData] = useState([''])
  const [visible, setVisible] = useState(false)
  const [specificIdData, setSpecificIdData] = useState({})

  // const notificationAPiCall = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:8080/api/v1/get_All_Notification');
  //     // Handle the response data here
      
  //     setApiData(response.data);
  //   } catch (error) {
  //     // Handle error if the API call fails
      
  //   }
  // };

  // useEffect(() => {
  //   notificationAPiCall(); // Call the API function
  // }, []);

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
    <label className={styles.empheader}>To Do List</label>
    <div className={styles.scrollContainer}>
      <CModal 
        visible={visible} 
        onClose={() => (setVisible(false))}
       >
        <CModalHeader>
        <CModalTitle>
          {specificIdData && specificIdData.name ? specificIdData.name.toUpperCase() : ''}
        </CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p style={{fontSize: '25px'}}>{specificIdData.description}</p>
        </CModalBody>
        <CModalFooter>
          <CButton color="info" onClick={() => (setVisible(false))}>
            OK
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
    </>
  );
};

export default RunningNotifications;