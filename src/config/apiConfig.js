import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import axios from 'axios'
import { setAuthToken } from './setAuthToken'
import Constants from '../constants/Constants'
import { createSlice } from '@reduxjs/toolkit';

const loginslice = createSlice({
  name:"login",
  initialState:{user:{emailId:"",passWord:"",success:false}},
  reducers:{
    loginUser:(state,action)=>{
          state.user = action.payload
          state.user.success=true
    }
  }
})
export const apiConfig = (emailId, passWord) =>async(dispatch) => {
  //reqres registered sample user
  const loginPayload = {
    emailId: emailId,
    password: passWord,
  }
  axios.post('http://localhost:8080/adminservices/adminorch/v1/authenticate', loginPayload, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      if(response.status === 200){
         //get token from response
        const token = response.data.jwtToken
        // set JWT token to local
        localStorage.setItem('AccessToken', token)
        localStorage.setItem('response', JSON.stringify(response))
        // localStorage.setItem('AccessTokenPermissions', JSON.stringify(response.data.responsibilityDTO))
        // //set token to axios common header
        setAuthToken(token)
       // //dispatch action to update state with token
       // dispatch(setAccessToken(token))
        // window.location.href = '/#/dashboard'
      }
      else{
        window.alert('Username or Password is incorrect')
        window.location.href = ''
      }
    })
    .catch(error => {
      window.alert('Username or Password is incorrect',error)
    });

}

// export const MakeApiCall = ({ url }) => {
//   let link = `http://localhost:8080/api/v1/${url}`
//   let AccessToken = localStorage.getItem('AccessToken')
//   useEffect(async () => {
//     await axios
//       .get(`http://localhost:8080/api/v1/${url}`, {
//         headers: {
//           Authorization: AccessToken,
//         },
//       })
//       .then((response) => {
//         //get token from response
//         const token = response
//       })
//       .catch((err) => {
       
//       })
//   }, [])
// }

// export const searchEmployeeApiCall = (values, callback) => {
//   const AuthToken = localStorage.getItem('AccessToken')
//   let data = JSON.stringify(values)
//   let FullURL = Constants.URL + Constants.resource_search
//   axios
//     .post(FullURL, data, {
//       headers: {
//         Authorization: AuthToken,
//         'Content-Type': 'application/json',
//       },
//     })
//     .then((response) => {
//       callback(response.data)
//     })
//     .catch((error) => {
//     })
// }
export const AdminDashboardApiCall= async(callback) => {
  let FullURL = Constants.EORMURL + 'admin?days=0&ownerId=a0213a05-6414-4a01-a576-d5b48ca1b36c'
  axios.get(FullURL,  {
   
      headers: {
        //Authorization: AuthToken,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
      },
    })
    .then((response) => {
       callback(response.data)
    })
    .catch((error) => {
    })
}
export const searchEmployeeApiCall= async(callback, search_URL) => {
  try{
   var companyid='a3169f5b-e625-44ab-971a-ad8f382c90f8'
   let data = {companyId:companyid}
   var bodyFormData = new FormData();
   bodyFormData.append('companyId', '9ab13e35-1078-434e-a38c-016a440006d4');
   let fullurl = Constants.EORMURL + 'employee/list?pageNo=0&limit=1000';
   let res = await fetch(fullurl, {
     method: 'POST',
     headers: {
       'Accept': 'application/json',
        'Content-Type': 'application/json',
        'companyId': 'a3169f5b-e625-44ab-971a-ad8f382c90f8'
     },
     body: JSON.stringify({}),
   })
   const responseData = await res.json();
   const contentArray = responseData.content;
   callback(contentArray)
 }
 
 catch (error) {
   console.error('Error processing API response:', error);
 }
 }

export const searchFormsApiCall = (values, callback, search_URL) => {
  const AuthToken = localStorage.getItem('AccessToken')
  let data = JSON.stringify(values)
  let FullURL = Constants.URL + `${search_URL}`
  axios
    .post(FullURL, data, {
      headers: {
        Authorization: AuthToken,
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      callback(response.data)
    })
    .catch((error) => {
    })
}
//axios.get('http://localhost:8085/services/data/v1/listCompanies', {timeout:5000} )
  //https://jsonplaceholder.typicode.com/users
// export const searchCompanyApiCall = (callback, search_URL) => {
  
//   axios.get("http://10.0.2.2:8085/services/data/v1/listCompanies")
//   .then(response => {
//     // Handle the successful response
//   })
//   .catch(error => {
//     if (error.response) {
//       // The request was made, but the server responded with an error status code
//     } else if (error.request) {
//       // The request was made, but no response was received
//     } else {
//       // Something else happened while setting up the request
//     }
//   });
// }
export const searchRoleApiCall=(callback,search_URL)=>{
  
  let FullURL = Constants.URL + `${search_URL}`
  axios.get(FullURL,  {
   
      headers: {
        //Authorization: AuthToken,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
      },
    })
    .then((response) => {
       callback(response.data)
    })
    .catch((error) => {
    })
}
export const searchCompanyGroupApiCall = (callback, search_URL) => {
  const FullURL = Constants.EORMURL + search_URL;
  const AuthToken = localStorage.getItem('AccessToken');

    axios.get(FullURL, {
      headers: {
        // Authorization: `Bearer ${AuthToken}`,
        // 'accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
      },
    })
    .then((response) => {
      callback(response.data);
    })
    .catch((error) => {
      // Handle error
    });

};
export const searchCompanyApiCall = (callback, search_URL) => {
  const AuthToken = localStorage.getItem('AccessToken');
  let FullURL = Constants.EORMURL + `${search_URL}`

  axios.get(FullURL,  {
   
      headers: {
        // Authorization: `Bearer ${AuthToken}`,
        // 'accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
      },
    })
    .then((response) => {
       callback(response.data)
    })
    .catch((error) => {
    })
 
}
export const searchDesignationApiCall = (callback, search_URL) => {
  const AuthToken = localStorage.getItem('AccessToken');
   let FullURL = Constants.EORMURL + `${search_URL}`
  
   axios.get(FullURL,  {
       headers: {
         Authorization: `Bearer ${AuthToken}`,
         'accept': 'application/json',
         'Content-Type': 'application/json',
         'Access-Control-Allow-Origin': '*',
         'Access-Control-Allow-Headers': '*',
       },
     })
     .then((response) => {
        callback(response.data)
     })
     .catch((error) => {
     })
    
 }
export const searchRolMenuApiCall = (callback, search_URL) => {
  const AuthToken = localStorage.getItem('AccessToken')
   let FullURL = Constants.URL + `${search_URL}`
 
   axios.get(FullURL,  {
    
       headers: {
        // Authorization: `Bearer ${AuthToken}`,
        // 'accept': 'application/json',
         'Content-Type': 'application/json',
         'Access-Control-Allow-Origin': '*',
         'Access-Control-Allow-Headers': '*',
       },
     })
     .then((response) => {
        callback(response.data)

     })
     .catch((error) => {
     })
    
 }
 export const searchApplicationApiCall = (callback, search_URL) => {
  let FullURL = Constants.URL+ `${search_URL}`
  const AuthToken = localStorage.getItem('AccessToken')
 
   axios.get(FullURL,  {
       headers: {
        // Authorization: `Bearer ${AuthToken}`,
        // 'accept': 'application/json',
         'Content-Type': 'application/json',
         'Access-Control-Allow-Origin': '*',
         'Access-Control-Allow-Headers': '*',
       },
     })
     .then((response) => {
        callback(response.data)
     })
     .catch((error) => {
       console.log("Error check",error)
     })
  
 }
 export const searchRoleLinkApiCall = (callback, search_URL) => {

  const AuthToken = localStorage.getItem('AccessToken');
   //let data = JSON.stringify()
 
   let FullURL = Constants.URL + `${search_URL}`
  
   axios.get(FullURL,  {
       headers: {
        // Authorization: `Bearer ${AuthToken}`,
        // 'accept': 'application/json',
         'Content-Type': 'application/json',
         'Access-Control-Allow-Origin': '*',
         'Access-Control-Allow-Headers': '*',
       },
     })
     .then((response) => {
        callback(response.data)
     })
     .catch((error) => {
     })
   
 }
 export const searchRoleLinkCheckedApiCall =(callback, search_URL) => {
   const AuthToken = localStorage.getItem('AccessToken')
   //let data = JSON.stringify()
 
   let FullURL = Constants.URL + `${search_URL}`
   
   axios.get(FullURL,  {
    
       headers: {
        // Authorization: `Bearer ${AuthToken}`,
        // 'accept': 'application/json',
         'Content-Type': 'application/json',
         'Access-Control-Allow-Origin': '*',
         'Access-Control-Allow-Headers': '*',
       },
     })
     .then((response) => {
        callback(response.data)
     })
     .catch((error) => {
     })
   
 }
 
 export const searchRoleLevelOneApiCall = (callback, search_URL) => {
  const AuthToken = localStorage.getItem('AccessToken')
   //let data = JSON.stringify()
 
   let FullURL = Constants.URL + `${search_URL}`
   
   axios.get(FullURL,  {
    
       headers: {
        //  Authorization: `Bearer ${AuthToken}`,
        // 'accept': 'application/json',
         'Content-Type': 'application/json',
         'Access-Control-Allow-Origin': '*',
         'Access-Control-Allow-Headers': '*',
       },
     })
     .then((response) => {
        callback(response.data)
     })
     .catch((error) => {
     })
    
 }
 export const searchDepartmentApiCall = (callback, search_URL) => {
  const AuthToken = localStorage.getItem('AccessToken')
   //let data = JSON.stringify()
 
   let FullURL = Constants.EORMURL + `${search_URL}`
   
   axios.get(FullURL,  {
    
       headers: {
        //  Authorization: `Bearer ${AuthToken}`,
        // 'accept': 'application/json',
         'Content-Type': 'application/json',
         'Access-Control-Allow-Origin': '*',
         'Access-Control-Allow-Headers': '*',
       },
     })
     .then((response) => {
        callback(response.data)
     })
     .catch((error) => {
     })
    
 }

 export const searchCompanyApplicationApiCall = (callback, search_URL) => {
  const AuthToken = localStorage.getItem('AccessToken')
   //let data = JSON.stringify()
 
   let FullURL = Constants.URL + `${search_URL}`
   
   axios.get(FullURL,  {
    
       headers: {
        //  Authorization: `Bearer ${AuthToken}`,
        // 'accept': 'application/json',
         'Content-Type': 'application/json',
         'Access-Control-Allow-Origin': '*',
         'Access-Control-Allow-Headers': '*',
       },
     })
     .then((response) => {
        callback(response.data)
     })
     .catch((error) => {
     })
    
 }
 
 
 export const searchRoleLevelTwoApiCall = (callback, search_URL) => {
   const AuthToken = localStorage.getItem('AccessToken')
   //let data = JSON.stringify()
 
   let FullURL = Constants.URL + `${search_URL}`
  
   axios.get(FullURL,  {
    
       headers: {
        //   Authorization: `Bearer ${AuthToken}`,
        // 'accept': 'application/json',
         'Content-Type': 'application/json',
         'Access-Control-Allow-Origin': '*',
         'Access-Control-Allow-Headers': '*',
       },
     })
     .then((response) => {
        callback(response.data)
     })
     .catch((error) => {
     })
   
 }
//  export const searchApplicationApiCall = (callback, search_URL) => {
//   let FullURL = Constants.URL+ `${search_URL}`
//    console.log(FullURL)
 
//    axios.get(FullURL,  {
    
//        headers: {
//           // Authorization: AuthToken,
//          'Content-Type': 'application/json',
//          'Access-Control-Allow-Origin': '*',
//          'Access-Control-Allow-Headers': '*',
//        },
//      })
//      .then((response) => {
//       console.log("response",response)
//         callback(response.data)
//      })
//      .catch((error) => {
//        console.log("Error check",error)
//      })
//  }
export const searchMenuApiCall = (callback, search_URL) => {
  const AuthToken = localStorage.getItem('AccessToken')
   //let data = JSON.stringify()
 
   let FullURL = Constants.URL + `${search_URL}`
   
   axios.get(FullURL,  {
    
       headers: {
        // Authorization: `Bearer ${AuthToken}`,
        // 'accept': 'application/json',
         'Content-Type': 'application/json',
         'Access-Control-Allow-Origin': '*',
         'Access-Control-Allow-Headers': '*',
       },
     })
     .then((response) => {
        callback(response.data)
     })
     .catch((error) => {
     })
    
 }

export const getSheetApiCall = (values, callback, search_URL, resource_No = null) => {
  const AuthToken = localStorage.getItem('AccessToken');
  let FullURL = Constants.URL + `${search_URL}`+'?startDate='+values.fromDate+'&endDate='+values.toDate;
  if (resource_No) {
    FullURL += '&resourceNo='+`${resource_No}`;
  }
  axios
    .get(FullURL, {
      headers: {
        Authorization: AuthToken,
      },
    })
    .then((response) => {
    })
    .catch((error) => {
    })
}


export const getTimeSheetTaskApiCall = (values, callback, search_URL) => {
  const AuthToken = localStorage.getItem('AccessToken')
  let FullURL = Constants.URL + `${search_URL}`
  axios
    .post(FullURL, {
      headers: {
        Authorization: AuthToken,
      },
      body: values,
    })
    .then((response) => {
      callback(response.data)
    })
    .catch((error) => {
    })
}

export const getHolidayApiCall = (callback, search_URL) => {
  const AuthToken = localStorage.getItem('AccessToken')
  let FullURL = Constants.URL + `${search_URL}`
  axios
    .get(FullURL, {
      headers: {
        Authorization: AuthToken,
      },
    })
    .then((response) => {
      callback(response.data)
    })
    .catch((error) => {
    })
}

export const requirementFormApiCall = (values, callback) => {
  const AuthToken = localStorage.getItem('AccessToken')
  let data = JSON.stringify(values)
  let FullURL = Constants.URL + Constants.requirement_table_api
  axios
    .post(FullURL, data, {
      headers: {
        Authorization: AuthToken,
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      callback(response.data)
    })
    .catch((error) => {
    
    })
}

// export function accessFunctionNew(responsibleName, accessName) {
//   let AccessPermissions = localStorage.getItem('AccessTokenPermissions');
//   if (AccessPermissions) {
//     let AccessPermission = localStorage.getItem('AccessTokenPermissions');
//     let arrayValues = JSON.parse(AccessPermission);
//     var access = '';
//     var filteredArray = arrayValues.filter(function (requiredName) {
//       return requiredName.responsibilityName == responsibleName
//     });
//     access = filteredArray[0]?.[accessName];
//     return access; 
//     // return access = true; //Finaly remove this
//   } else {
//     window.href= '/#/login'
//   }
// }

export function accessFunctionNew(responsibleName, accessName) {
  const AccessPermissions = localStorage.getItem('AccessTokenPermissions');
  if (AccessPermissions) {
    const arrayValues = JSON.parse(AccessPermissions);
    const filteredArray = arrayValues ? arrayValues.filter(permission => permission.responsibilityName === responsibleName) : [];
    const access = filteredArray.length ? filteredArray[0]?.actionDTOS?.[accessName] : false;
    return access; 
  } else {
    // window.location.href = '/#/login';
    return false;
  }
}

export function accessFunctionUser(responsibleName) {
  const AccessPermissions = localStorage.getItem('AccessTokenPermissions');
  if (AccessPermissions) {
    const arrayValues = JSON.parse(AccessPermissions);
    const filteredArray = arrayValues ? arrayValues.filter(permission => permission.responsibilityName === responsibleName) : [];
    const user = filteredArray.length ? filteredArray[0]?.roleName : 'something went wrong';
    return user; 
  } else {
    // window.location.href = '/#/login';
    return null;
  }
}


export const {loginUser} = loginslice.actions;
export const loginState = (state) => state.loginData;
export default loginslice.reducer;