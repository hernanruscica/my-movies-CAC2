import { useState } from "react";
import { useEffect } from "react";


export const AppMovies = () => {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
         let API_URL = 'https://apiabmusers.cyclic.cloud/';
         let API_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImNlc2FyaW5pbyIsImlhdCI6MTY5NTkyMzg2MCwiZXhwIjoxNjk2MDEwMjYwfQ.HtxZ7NnCM6C-Cn96xsEsN2wRCIiULhriPHJztErlHwY';
         let endpoint = 'users/';        

         try{
             const response = await fetch('https://jsonplaceholder.typicode.com/users');
             //const response = await fetch(API_URL + endpoint);
             const data = await response.json();
             console.log(data);
             setUsers(data);             
         }catch(error){
             console.log(error);
         }        
    }

    useEffect(() => {getUsers()}, []);

    return (       
        <div>
            <h1>AppMovies</h1>
            <h2>Users:</h2>
            <ul>
            {                
                users.map(user => <li key = {user.id}>{user.name}</li>)
            }
            </ul>
        </div>
  )
}
