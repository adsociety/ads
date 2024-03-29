import React from "react";
import "./components.css";
import { Navbar, Link, Image} from "@nextui-org/react";
import { FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import Logo from '../assets/images/ADSLOGO.jpeg'

function Header() {
    const items = [
      {name: 'Home', href:'/'},
      {name: 'Initiatives', href:'/initiatives'},
      {name: 'Team', href:'/team'},
      {name: 'Inductions', href: '/inductions'}
    ]

    var active = window.location.pathname

    return(
      <Navbar variant="sticky" shouldHideOnScroll={true}>
        <Navbar.Toggle color="inherit" showIn="sm" />
        <Navbar.Brand hideIn="sm" css={{'&:hover':{transform: 'scale(1.25)'}}}>
          <Image css={{
            width: '60x',
            height: '60px',
            transitionDuration: '0.5s',
            transitionProperty: 'transform',
            borderRadius: 5,
            '&:hover':{
              cursor: 'pointer',
              transform: 'rotate(360deg)',
            }
          }} src={Logo} 
          onClick={()=>{
            window.location.pathname=''
          }}/>
        </Navbar.Brand>
        <Navbar.Content hideIn="sm" variant="underline-rounded">
        {items.map((item, index) => (
            <Navbar.Link key={index} isActive={item.href===active.substring(0,item.href.length+1)} href={item.href}>
              {item.name}
            </Navbar.Link>
          ))}
          
        </Navbar.Content>
        <Navbar.Content showIn={'sm'}>
          <Image css={{
              width: '40px',
              height: '40px'
            }} src={Logo} />
        </Navbar.Content>
        <Navbar.Content>
          <Link target="_blank" href="https://instagram.com/ashokadatasociety/">
            <FaInstagram className="instagram-logo" size={'25px'} />
          </Link>
          <Link target="_blank" href="https://www.linkedin.com/company/ashoka-data-society/">
            <FaLinkedin className="linkedin-logo" size={'25px'} />
          </Link>
        </Navbar.Content>
        
        
        <Navbar.Collapse showIn={"sm"}>
        {items.map((item, index) => (
          <Navbar.CollapseItem key={index} isActive={item.href===active.substring(0,item.href.length+1)}>
            <Link href={item.href}
              css={{
                minWidth: "100%",
              }}
            >
              {item.name}
            </Link>
          </Navbar.CollapseItem>
        ))}
          
        </Navbar.Collapse>
      </Navbar>
    )
  }

export default Header;