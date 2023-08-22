import React from 'react'
import {Container,Card,Row,Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';

const Sports = () => {
    const [mydata,setData] = useState([]);
    const  apiget = () => {  
     fetch('https://inshortsapi.vercel.app/news?category=sports')
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
    <h1  className='sports'   style={{textAlign:"center" }}> Sports News</h1>
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
                  {value.content}
                 </Card.Text>
                 
                 <footer className='blockquote-footer my-4'>
                    published on : {value.date} , {value.time} 
                 </footer>
                 <Link to={value.sourceUrl}>Read More</Link>
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
);};export default Sports