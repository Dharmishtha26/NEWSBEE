
import React, {useEffect,useState} from 'react';
import axios from 'axios';



const General =  () => {
  const [Data,setData] = useState("");
  const fetchData = async () =>{
   await axios 
   .get(
    'https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=20087c1ccb914b5f989b807aa70c9732'
   ).then((res)=> setData(res.data.articles));
  
   };
   useEffect( () =>{
    fetchData();
   },[]);
  
   return (
    <div className=' fetchdata container my-4' >
      <h3>
        <u>GENERAL</u>
      </h3>
      <div className=' container my-3 d-flex justify-content-center align-tems-center flex-column '>
       {Data ?Data.map((items,index) =>(
        <>
          <div className='container' 
          style={{width:"1000px", boxShadow:"2px 2px 10px silver",borderRadius:"5px"}}>
          <h5 className='my-2'>{items.title}</h5>
          
          <img src={items.urlToImage} className=' img-fluid 
          container my-3 d-flex justify-content-center align-tems-center flex-column'
          style={{width:"100%", height:"300px" ,objectFit:"cover"}} 
           alt='/' 
          
           />
            <p className='my-1'>{items.content}</p>
            <a href={items.url} target='blank' >Read More</a>
          </div>
        </>
       )):"Loading.."}
      </div>
    </div>
   )
   
  
  
}

export default General