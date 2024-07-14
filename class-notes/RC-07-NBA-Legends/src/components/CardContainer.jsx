import React, { useState } from 'react'

import {data} from "../helper/data"
import { Col, Container, Row, Form } from 'react-bootstrap';
import Player from './Player';

const CardContainer = () => {
    // console.log(data);
    const [arama, setArama]=useState("")
    // let filtrelenmisData=""

    // filtrelenmisData= data.filter((a)=>a.name.includes(arama))

  return (
    <>
        <Form.Control type="search" placeholder="Search Player..." className='w-50 m-auto' onChange={(e)=>setArama(e.target.value)} />

        <Container className='kart-container rounded-4 my-4 p-3'>
            <Row className='g-3 justify-content-center'>
                {data.filter((abc)=>abc.name.toLowerCase().includes(arama.toLowerCase())).map((player)=>(
                    <Col key={player.name} md={6} lg={4} xl={3}>
                        <Player {...player}/>
                    </Col>
                ))}
            </Row>
        </Container>
    </>
  )
}

export default CardContainer