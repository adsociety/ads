import { Grid, Text, Image, Row, Col } from "@nextui-org/react";
import React from "react";
import Grey from '../assets/images/Grey.jpeg'

export default function TeamPage() {
    return (
        <div>
            <Grid.Container css={{
                padding: '0 5%',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text
                    css={{
                        textAlign: 'center',
                        w: '100%',
                        '@xsMin': {
                            fontSize: '$2xl',
                            fontWeight: '$semibold',
                            padding: '40px 0px'
                        },
                        '@xsMax': {
                            fontSize: '$xl',
                            fontWeight: '$semibold',
                            padding: '20px 0px'
                        }
                    }}
                >
                    ADS Core Team
                </Text>

                {/* Presidents */}

                <Grid.Container css={{
                    justifyContent: 'center'
                }}>
                    <Col css={{
                        display: 'flex',
                        flexDirection: 'column',
                        w: 'max-content',
                        justifyContent: 'center',
                        textAlign: 'center'
                    }}>
                        <Text css={{
                            fontWeight: '$semibold',
                            '@xsMax': {
                                fontSize: '$xl',
                            },
                            '@xsMin': {
                                fontSize: '$2xl'
                            },
                            color: '$red700'
                        }}>
                            Presidents
                        </Text>

                        <Row>
                            <Grid css={{
                                flexDirection: 'column',
                                padding: '20px',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center'
                            }}>
                                <Col css={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center'
                                }}>
                                    <Image src={Grey}
                                        css={{
                                            borderRadius: 300,
                                            '@xsMax': {
                                                width: 125,
                                                height: 125
                                            },
                                            '@xsMin': {
                                                width: 200,
                                                height: 200
                                            }
                                        }}
                                    />
                                    <Text
                                        css={{
                                            marginTop: 10,
                                            fontSize: '$base',
                                            fontWeight: '$medium'
                                        }}
                                    >
                                        Vrinda Bhola, UG24
                                    </Text>
                                    <Text>
                                        President & Co-Founder
                                    </Text>
                                </Col>
                            </Grid>

                            <Grid css={{
                                flexDirection: 'column',
                                padding: '20px',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center'
                            }}>
                                <Col css={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center'
                                }}>
                                    <Image src={Grey}
                                        css={{
                                            borderRadius: 300,
                                            '@xsMax': {
                                                width: 125,
                                                height: 125
                                            },
                                            '@xsMin': {
                                                width: 200,
                                                height: 200
                                            }
                                        }}
                                    />
                                    <Text
                                        css={{
                                            marginTop: 10,
                                            fontSize: '$base',
                                            fontWeight: '$medium'
                                        }}
                                    >
                                        Uttkarsh Kohli, UG24
                                    </Text>
                                    <Text>
                                        President & Co-Founder
                                    </Text>
                                </Col>
                            </Grid>
                        </Row>
                    </Col>


                </Grid.Container>

                {/* Marketing & Events */}

                <Grid.Container css={{
                    jc: 'center',
                }}>

                    <Row css={{
                        w: 'max-content'
                    }}>


                        <Col css={{
                            display: 'flex',
                            flexDirection: 'column',
                            w: 'max-content',
                            justifyContent: 'center',
                            textAlign: 'center'
                        }}>
                            <Text css={{
                                fontWeight: '$semibold',
                                '@xsMax': {
                                    fontSize: '$xl',
                                },
                                '@xsMin': {
                                    fontSize: '$2xl'
                                },
                                color: '$yellow600'
                            }}>
                                Marketing
                            </Text>

                            <Row>
                                <Grid css={{
                                    flexDirection: 'column',
                                    padding: '20px',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    textAlign: 'center'
                                }}>
                                    <Col css={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center'
                                    }}>
                                        <Image src={Grey}
                                            css={{
                                                borderRadius: 300,
                                                '@xsMax': {
                                                    width: 125,
                                                    height: 125
                                                },
                                                '@xsMin': {
                                                    width: 200,
                                                    height: 200
                                                }
                                            }}
                                        />
                                        <Text
                                            css={{
                                                marginTop: 10,
                                                fontSize: '$base',
                                                fontWeight: '$medium'
                                            }}
                                        >
                                            Tanvi Mahajan, UG24
                                        </Text>
                                        <Text>
                                            Co-Head
                                        </Text>
                                    </Col>
                                </Grid>

                                <Grid css={{
                                    flexDirection: 'column',
                                    padding: '20px',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    textAlign: 'center'
                                }}>
                                    <Col css={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center'
                                    }}>
                                        <Image src={Grey}
                                            css={{
                                                borderRadius: 300,
                                                '@xsMax': {
                                                    width: 125,
                                                    height: 125
                                                },
                                                '@xsMin': {
                                                    width: 200,
                                                    height: 200
                                                }
                                            }}
                                        />
                                        <Text
                                            css={{
                                                marginTop: 10,
                                                fontSize: '$base',
                                                fontWeight: '$medium'
                                            }}
                                        >
                                            Manjari Goel, UG24
                                        </Text>
                                        <Text>
                                            Co-Head
                                        </Text>
                                    </Col>
                                </Grid>
                            </Row>
                        </Col>


                    </Row>

                    <Row css={{
                        w: 'max-content'
                    }}>

                        <Col css={{
                            display: 'flex',
                            flexDirection: 'column',
                            w: 'max-content',
                            justifyContent: 'center',
                            textAlign: 'center'
                        }}>
                            <Text css={{
                                fontWeight: '$semibold',
                                '@xsMax': {
                                    fontSize: '$xl',
                                },
                                '@xsMin': {
                                    fontSize: '$2xl'
                                },
                                color: '$green600'
                            }}>
                                Events
                            </Text>

                            <Row>
                                <Grid css={{
                                    flexDirection: 'column',
                                    padding: '20px',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    textAlign: 'center'
                                }}>
                                    <Col css={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center'
                                    }}>
                                        <Image src={Grey}
                                            css={{
                                                borderRadius: 300,
                                                '@xsMax': {
                                                    width: 125,
                                                    height: 125
                                                },
                                                '@xsMin': {
                                                    width: 200,
                                                    height: 200
                                                }
                                            }}
                                        />
                                        <Text
                                            css={{
                                                marginTop: 10,
                                                fontSize: '$base',
                                                fontWeight: '$medium'
                                            }}
                                        >
                                            Gareema Goel, UG25
                                        </Text>
                                        <Text>
                                            Co-Head
                                        </Text>
                                    </Col>
                                </Grid>

                                <Grid css={{
                                    flexDirection: 'column',
                                    padding: '20px',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    textAlign: 'center'
                                }}>
                                    <Col css={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center'
                                    }}>
                                        <Image src={Grey}
                                            css={{
                                                borderRadius: 300,
                                                '@xsMax': {
                                                    width: 125,
                                                    height: 125
                                                },
                                                '@xsMin': {
                                                    width: 200,
                                                    height: 200
                                                }
                                            }}
                                        />
                                        <Text
                                            css={{
                                                marginTop: 10,
                                                fontSize: '$base',
                                                fontWeight: '$medium'
                                            }}
                                        >
                                            Abhay Madan, UG24
                                        </Text>
                                        <Text>
                                            Co-Head
                                        </Text>
                                    </Col>
                                </Grid>
                            </Row>
                        </Col>


                    </Row>


                </Grid.Container>

                {/* Newsletter & Technology */}

                <Grid.Container css={{
                    jc: 'center',
                }}>

                    <Row css={{
                        w: 'max-content'
                    }}>

                        <Col css={{
                            display: 'flex',
                            flexDirection: 'column',
                            w: 'max-content',
                            justifyContent: 'center',
                            textAlign: 'center'
                        }}>
                            <Text css={{
                                fontWeight: '$semibold',
                                '@xsMax': {
                                    fontSize: '$xl',
                                },
                                '@xsMin': {
                                    fontSize: '$2xl'
                                },
                                color: '$blue600'
                            }}>
                                Newsletter
                            </Text>

                            <Row>
                                <Grid css={{
                                    flexDirection: 'column',
                                    padding: '20px',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    textAlign: 'center'
                                }}>
                                    <Col css={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center'
                                    }}>
                                        <Image src={Grey}
                                            css={{
                                                borderRadius: 300,
                                                '@xsMax': {
                                                    width: 125,
                                                    height: 125
                                                },
                                                '@xsMin': {
                                                    width: 200,
                                                    height: 200
                                                }
                                            }}
                                        />
                                        <Text
                                            css={{
                                                marginTop: 10,
                                                fontSize: '$base',
                                                fontWeight: '$medium'
                                            }}
                                        >
                                            Ananya Sarvani Sankara, UG25
                                        </Text>
                                        <Text>
                                            Co-Head
                                        </Text>
                                    </Col>
                                </Grid>

                                <Grid css={{
                                    flexDirection: 'column',
                                    padding: '20px',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    textAlign: 'center'
                                }}>
                                    <Col css={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center'
                                    }}>
                                        <Image src={Grey}
                                            css={{
                                                borderRadius: 300,
                                                '@xsMax': {
                                                    width: 125,
                                                    height: 125
                                                },
                                                '@xsMin': {
                                                    width: 200,
                                                    height: 200
                                                }
                                            }}
                                        />
                                        <Text
                                            css={{
                                                marginTop: 10,
                                                fontSize: '$base',
                                                fontWeight: '$medium'
                                            }}
                                        >
                                            Syona, UG25
                                        </Text>
                                        <Text>
                                            Co-Head
                                        </Text>
                                    </Col>
                                </Grid>
                            </Row>
                        </Col>

                    </Row>

                    <Row css={{
                        w: 'max-content'
                    }}>

                        <Col css={{
                            display: 'flex',
                            flexDirection: 'column',
                            w: 'max-content',
                            justifyContent: 'center',
                            textAlign: 'center'
                        }}>
                            <Text css={{
                                fontWeight: '$semibold',
                                '@xsMax': {
                                    fontSize: '$xl',
                                },
                                '@xsMin': {
                                    fontSize: '$2xl'
                                },
                                color: '$purple600'
                            }}>
                                Technology
                            </Text>

                            <Row>
                                <Grid css={{
                                    flexDirection: 'column',
                                    padding: '20px',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    textAlign: 'center'
                                }}>
                                    <Col css={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center'
                                    }}>
                                        <Image src={Grey}
                                            css={{
                                                borderRadius: 300,
                                                '@xsMax': {
                                                    width: 125,
                                                    height: 125
                                                },
                                                '@xsMin': {
                                                    width: 200,
                                                    height: 200
                                                }
                                            }}
                                        />
                                        <Text
                                            css={{
                                                marginTop: 10,
                                                fontSize: '$base',
                                                fontWeight: '$medium'
                                            }}
                                        >
                                            Aryan Yadav, ASP24
                                        </Text>
                                        <Text>
                                            Co-Head
                                        </Text>
                                    </Col>
                                </Grid>

                                <Grid css={{
                                    flexDirection: 'column',
                                    padding: '20px',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    textAlign: 'center'
                                }}>
                                    <Col css={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center'
                                    }}>
                                        <Image src={Grey}
                                            css={{
                                                borderRadius: 300,
                                                '@xsMax': {
                                                    width: 125,
                                                    height: 125
                                                },
                                                '@xsMin': {
                                                    width: 200,
                                                    height: 200
                                                }
                                            }}
                                        />
                                        <Text
                                            css={{
                                                marginTop: 10,
                                                fontSize: '$base',
                                                fontWeight: '$medium'
                                            }}
                                        >
                                            Zahaan Shapoorjee, UG24
                                        </Text>
                                        <Text>
                                            Co-Head
                                        </Text>
                                    </Col>
                                </Grid>
                            </Row>
                        </Col>


                    </Row>


                </Grid.Container>

            </Grid.Container>
        </div>
    )
}