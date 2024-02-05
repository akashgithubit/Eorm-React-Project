import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import {
  CRow,
  CCol
} from '@coreui/react'

import styles from '../../dist/styles/DashboardStyles/DashboardStyles.module.css';
import setStyle from '../../dist/styles/css/form-style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.css";
const RunningNotifications = () => {
  const Bell = <FontAwesomeIcon icon={faBell} />;


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
  const notifications = {
    "runningNotification": ["Annual Day Event held on Feb 12 2024"],
    "notification": [
      {
        id: 1,
        notification: "It's a Time to Update Your TimeSheet"
      },
      {
        id: 2,
        notification: "Pending Tickets has be close on 20th Feb"
      },
      {
        id: 3,
        notification: "From Tomorrow Scrum will be at 10:00 AM"
      },
      {
        id: 3,
        notification: "Java Team Shift Changes to 2:00PM-8:00PM"
      }
    ]
  };
  
  return (
    <>
     <label className={styles.dashboardsubheader}>Notification</label>

     <div className={styles.marqueeContainer}>
          {notifications.runningNotification.map((item, index) => (
            <div key={index}>
              <div className={styles.marqueeContent}>
              <sup style={{color:"orange",fontSize:"18px",fontWeight:600}}>{Bell}</sup>{item}
              </div>
           </div>
          ))}
      </div>
      <div style={{ padding: "12px" }}>
        {notifications.notification.map((item, index) => (
          <div  className={styles.notificationItem}>
              <li className={styles.notificationcss}>{item.notification}</li>
          </div>
        ))}
      </div>
    </>
  );
};

export default RunningNotifications;