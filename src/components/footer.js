import React from "react";
import { Container, Row, Text, Link, Col, Input, Button } from "@nextui-org/react";

function Footer() {
    return (
        <Container fluid >
            <Col css={{
                w: '100%',
                justifyContent: 'center'
            }}>
                <Col css={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '20px 0px',
                    w: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <Text css={{
                        paddingRight: 20,
                        fontWeight: '$semibold'
                    }}>
                        Subscribe To Our Newsletter
                    </Text>
                    <Row css={{
                        w: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingTop: '10px'
                    }}>
                        <Input type='email' placeholder="Your email address"
                            css={{
                                paddingRight: 20
                            }}
                        />
                        <Button flat auto color="warning">
                            <Text>
                                Subscribe
                            </Text>
                        </Button>
                    </Row>
                </Col>
                <Text
                    css={{
                        color: '$gray700',
                        jc: 'center',
                        textAlign: 'center',
                        padding: '10px 0px',
                        borderStyle: 'solid',
                        borderColor: '$gray400',
                        borderWidth: '1px 0px 0px 0px',
                        '@xsMax': {
                            fontSize: '$xs'
                        }
                    }}>
                    © 2023 Ashoka Data Society. All Rights Reserved.
                </Text>
            </Col>
        </Container>
    )
}

export default Footer;