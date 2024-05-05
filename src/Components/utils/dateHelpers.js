import React from 'react'

export const dateToString = (ISODate) => {
    
    const date = new Date(ISODate);

    
    const day = date.getDate();
    const month = date.getMonth() + 1; 
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    
    const formatedDate = `${day}/${month}/${year} ${hours}:${minutes}`;

    //console.log(formatedDate); 

  return formatedDate;    
  
}

