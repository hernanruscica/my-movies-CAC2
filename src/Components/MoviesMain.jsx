import React, { useEffect } from 'react';
import { useState } from 'react';


export const MoviesMain =  () =>  {

  const [users, setUsers] = useState([]);

  const GetUsers = async () => {    
   
     let API_URL = "https://jsonplaceholder.typicode.com";
     let API_ENDPOINT = "/users";
    // let API_URL = "https://apiabmusers.cyclic.cloud/";
    // let API_ENDPOINT = "api/users"
    let CURRENT_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImNlc2FyaW5pbyIsImlhdCI6MTY5NTkyMzg2MCwiZXhwIjoxNjk2MDEwMjYwfQ.HtxZ7NnCM6C-Cn96xsEsN2wRCIiULhriPHJztErlHwY";
    


    try{
      const response = await fetch(API_URL + API_ENDPOINT, {
        headers:{
            Authorization:
            `Bearer ${CURRENT_TOKEN}`,
            "Content-Type":"application/json;charset=utf-8"          
        }
        });
      const data = await response.json();
      console.log(data);
      setUsers(data);
      //return data;
    }catch(error){
      console.log(error);
    }    
  }


  useEffect(() =>{ GetUsers()},[]);

  return (
    <>
      <h1>MoviesMain</h1>
      <ul>
        { 
           users.map(user => <li key={user.id}> {user.name} </li>)           
        }
        
      </ul>
    </>
    
  )
}

export default MoviesMain;