import React from 'react'
import {Container, Image} from "react-bootstrap"
import nbaLogo from "../assets/nba-logo.png"

const Header = () => {
  return (
    <Container>
        <Image width="200px" src={nbaLogo}/>
        <h1 className='fw-bold font-monospace my-2 display-4'>NBA Legends</h1>

    </Container>
  )
}

export default Header