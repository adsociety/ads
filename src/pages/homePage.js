import { Container, Grid, Row, Text, Image, Col, Button } from "@nextui-org/react";
import {FaApple,FaFacebookF,FaInstagram,FaTwitter,} from 'react-icons/fa';
import React from "react";
import Grey from '../assets/images/Grey.jpeg'

export default function HomePage(){

    return(
        <div>
            <div className="desktop">
                <Grid.Container css={{
                    justifyContent: 'center',
                    alignItems: 'start',
                    marginTop: '40px',
                    padding: '0 5% 0 5%',
                    flexDirection: 'column'
                }}>
                    <Text css={{
                        fontSize: '$3xl',
                        padding: '0 5% 0 5%',
                    }}>
                        Ashoka Data Society
                    </Text>
                    <Text css={{
                        fontSize: '$xl',
                        padding: '0 5% 0 5%',
                    }}>
                        Official Website
                    </Text>
                    <Image width='95%' css={{objectFit: 'cover', height: '50vh', borderRadius: 10, marginTop: 20}} src={Grey}/>

                    

                </Grid.Container>
            </div>
            <div className="mobile">
                
            </div>
        </div>
    )
}