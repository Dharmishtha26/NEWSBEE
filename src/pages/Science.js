import React from 'react'
import {Container,Card,Row,Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
const Science = () => {
    const [mydata,setData] = useState([]);
    const  apiget = () => {  
     fetch('https://inshortsapi.vercel.app/news?category=science')
     .then((response)=>response.json())
     .then((json) => {
       console.log(json);
       setData(json.data)
     }
     );
    };
    
    useEffect ( () => {
      apiget();
      const interval = setInterval(()=>{
       apiget();
      },500000);
      return ()=> clearInterval(interval);
    },[]);
 return (
  <Container fluid>
    <h1  className='sports'   style={{textAlign:"center" }}> Science News</h1>
    <Row xs={1} md={3} className='g-4'>
      {
        mydata.map(
          (value)=>{
            return (
              <>
                 <Col className='container-fluid mt-4'>
              <Card >
                 <Card.Img style={{width:"69vh", height:"60vh"}} variant='top' src={value.imageUrl} />
                 <Card.Body>
                 <Card.Title>{value.title}</Card.Title>
                 <Card.Text>
                  {value.description}
                 </Card.Text>
                 <footer className='blockquote-footer'>
                    published on : {value.date} , {value.time}
                 </footer>
                <a href="{{value.sourceUrl}}"target="blank">Read More</a>

                 </Card.Body>
              </Card>
                 </Col>
              </>
            )
          }
        )
      }
    </Row>
  </Container>
);
};export default Science