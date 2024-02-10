import { Grid, Text, Image, Row, Col } from "@nextui-org/react";
import React from "react";
import Grey from '../assets/images/Grey.jpeg'
import Aryan from '../assets/team/webteam_aryanyadav.jpeg'
import Zahaan from '../assets/team/webteam_zahaan.jpg'
import Uttakrsh from '../assets/team/president_uttkarshkohli.jpeg';
import Vrinda from '../assets/team/president_vrindabhola.jpeg';
import Ananya from '../assets/team/newsletter_ananyasarvanasankara.jpeg';
import Tanya from '../assets/team/marketing_tanyamahajan.jpeg';
import Syona from '../assets/team/newsletter_syonajain.jpeg';
import Gareema from '../assets/team/events_gareemagoel.jpeg';
import Yogya from '../assets/team/yogya_research.jpg';

export default function TeamPage() {
    return (
        <div>
            <Grid.Container css={{
                padding: '0 5%',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '24px 0px 0px 0px'
            }}>
                <Text
                    css={{
                        fontWeight: '$semibold',
                        '@xsMax': {
                            fontSize: '$xl',
                        },
                        '@xsMin': {
                            fontSize: '$3xl',
                        },
                        textAlign: 'center',
                        margin: '24px 0px 12px 0px',
                    }}
                >
                    ADS Core Team
                </Text>

                {/* Presidents */}

                <Grid.Container css={{
                    justifyContent: 'center',
                    paddingTop: '20px'
                }}>
                    <Col css={{
                        display: 'flex',
                        flexDirection: 'column',
                        w: 'max-content',
                        justifyContent: 'center',
                        textAlign: 'center',
                        alignItems: 'center'
                    }}>
                        <Text css={{
                            width: 'max-content',
                            textAlign: 'center',
                            // backgroundColor: '#3E5896',
                            backgroundColor: '$red300',
                            color: 'white',
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                            padding: '5px 25px',
                            fontWeight: '$medium',
                            color: '$red800'
                        }}
                        >
                            Presidents
                        </Text>

                        <Row>
                            <Grid css={{
                                flexDirection: 'column',
                                padding: '20px',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                                borderColor: '$red300',
                                borderWidth: '2px 0px 0px 0px',
                                borderStyle: 'solid',
                                borderRadius: '30px 0px 0px 0px'
                            }}>
                                <Col css={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center'
                                }}>
                                    <Image src={Vrinda}
                                        css={{
                                            borderRadius: 300,
                                            '@xsMax': {
                                                width: 125,
                                                height: 125
                                            },
                                            '@xsMin': {
                                                width: 200,
                                                height: 200
                                            },
                                            objectFit: 'cover'
                                        }}
                                    />
                                    <Text
                                            css={{
                                                marginTop: 10,
                                                fontSize: '$base',
                                                fontWeight: '$medium'
                                            }}
                                        >
                                            Vrinda Bhola
                                        </Text>
                                        <Text
                                            css={{
                                                marginTop: 0,
                                                fontSize: '$base',
                                                fontWeight: '$medium'
                                            }}
                                        >
                                            UG24
                                        </Text>
                                        <Text 
                                            css={{
                                                marginTop: 0,
                                                fontSize: '$base',
                                                fontWeight: '$medium'
                                            }}>
                                            President & Co-Founder
                                        </Text>
                                </Col>
                            </Grid>

                            <Grid css={{
                                flexDirection: 'column',
                                padding: '20px',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                                borderColor: '$red300',
                                borderWidth: '2px 0px 0px 0px',
                                borderStyle: 'solid',
                                borderRadius: '0px 0px 0px 0px'
                            }}>
                                <Col css={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center'
                                }}>
                                    <Image src={Uttakrsh}
                                        css={{
                                            borderRadius: 300,
                                            '@xsMax': {
                                                width: 125,
                                                height: 125
                                            },
                                            '@xsMin': {
                                                width: 200,
                                                height: 200
                                            },
                                            objectFit: 'cover'
                                        }}
                                    />
                                    <Text
                                            css={{
                                                marginTop: 10,
                                                fontSize: '$base',
                                                fontWeight: '$medium'
                                            }}
                                        >
                                            Uttkarsh Kohli
                                        </Text>
                                        <Text
                                            css={{
                                                marginTop: 0,
                                                fontSize: '$base',
                                                fontWeight: '$medium'
                                            }}
                                        >
                                            UG24
                                        </Text>
                                        <Text 
                                            css={{
                                                marginTop: 0,
                                                fontSize: '$base',
                                                fontWeight: '$medium'
                                            }}>
                                            President & Co-Founder
                                        </Text>
                                </Col>
                            </Grid>



                            <Grid css={{
                                flexDirection: 'column',
                                padding: '20px',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                                borderColor: '$red300',
                                borderWidth: '2px 0px 0px 0px',
                                borderStyle: 'solid',
                                borderRadius: '0px 30px 0px 0px'
                            }}>
                                <Col css={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center'
                                }}>
                                    <Image src={Ananya}
                                        css={{
                                            borderRadius: 300,
                                            '@xsMax': {
                                                width: 125,
                                                height: 125
                                            },
                                            '@xsMin': {
                                                width: 200,
                                                height: 200
                                            },
                                            objectFit: 'cover'
                                        }}
                                    />
                                    <Text
                                            css={{
                                                marginTop: 10,
                                                fontSize: '$base',
                                                fontWeight: '$medium'
                                            }}
                                        >
                                            Ananya Sarvani Sankara
                                        </Text>
                                        <Text
                                            css={{
                                                marginTop: 0,
                                                fontSize: '$base',
                                                fontWeight: '$medium'
                                            }}
                                        >
                                            UG24
                                        </Text>
                                        <Text 
                                            css={{
                                                marginTop: 0,
                                                fontSize: '$base',
                                                fontWeight: '$medium'
                                            }}>
                                            Vice President
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
                        w: 'max-content',
                        paddingTop: '60px'
                    }}>


                        <Col css={{
                            display: 'flex',
                            flexDirection: 'column',
                            w: 'max-content',
                            justifyContent: 'center',
                            textAlign: 'center',
                            alignItems: 'center'
                        }}>
                            <Text css={{
                                width: 'max-content',
                                textAlign: 'center',
                                // backgroundColor: '#3E5896',
                                backgroundColor: '$yellow300',
                                color: 'white',
                                borderTopLeftRadius: 10,
                                borderTopRightRadius: 10,
                                padding: '5px 25px',
                                fontWeight: '$medium',
                                color: '$yellow800'
                            }}
                            >
                                Marketing
                            </Text>

                            <Row>
                                <Grid css={{
                                    flexDirection: 'column',
                                    padding: '20px',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    textAlign: 'center',
                                    borderColor: '$yellow300',
                                    borderWidth: '2px 0px 0px 0px',
                                    borderStyle: 'solid',
                                    borderRadius: '30px 0px 0px 0px'
                                }}>
                                    <Col css={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center'
                                    }}>
                                        <Image src={Tanya}
                                            css={{
                                                borderRadius: 300,
                                                '@xsMax': {
                                                    width: 125,
                                                    height: 125
                                                },
                                                '@xsMin': {
                                                    width: 200,
                                                    height: 200
                                                },
                                                objectFit: 'cover'
                                            }}
                                        />
                                        <Text
                                            css={{
                                                marginTop: 10,
                                                fontSize: '$base',
                                                fontWeight: '$medium'
                                            }}
                                        >
                                            Tanya Mahajan
                                        </Text>
                                        <Text
                                            css={{
                                                marginTop: 0,
                                                fontSize: '$base',
                                                fontWeight: '$medium'
                                            }}
                                        >
                                            UG24
                                        </Text>
                                        <Text 
                                            css={{
                                                marginTop: 0,
                                                fontSize: '$base',
                                                fontWeight: '$medium'
                                            }}>
                                            Co-Head
                                        </Text>
                                    </Col>
                                </Grid>

                                <Grid css={{
                                    flexDirection: 'column',
                                    padding: '20px',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    textAlign: 'center',
                                    borderColor: '$yellow300',
                                    borderWidth: '2px 0px 0px 0px',
                                    borderStyle: 'solid',
                                    borderRadius: '0px 30px 0px 0px'
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
                                                },
                                                objectFit: 'cover'
                                            }}
                                        />
                                        <Text
                                            css={{
                                                marginTop: 10,
                                                fontSize: '$base',
                                                fontWeight: '$medium'
                                            }}
                                        >
                                            Manjari Goel
                                        </Text>
                                        <Text
                                            css={{
                                                marginTop: 0,
                                                fontSize: '$base',
                                                fontWeight: '$medium'
                                            }}
                                        >
                                            UG24
                                        </Text>
                                        <Text 
                                            css={{
                                                marginTop: 0,
                                                fontSize: '$base',
                                                fontWeight: '$medium'
                                            }}>
                                            Co-Head
                                        </Text>
                                    </Col>
                                </Grid>
                            </Row>
                        </Col>


                    </Row>

                    <Row css={{
                        w: 'max-content',
                        paddingTop: '60px'
                    }}>

                        <Col css={{
                            display: 'flex',
                            flexDirection: 'column',
                            w: 'max-content',
                            justifyContent: 'center',
                            textAlign: 'center',
                            alignItems: 'center'
                        }}>
                            <Text css={{
                                width: 'max-content',
                                textAlign: 'center',
                                // backgroundColor: '#3E5896',
                                backgroundColor: '$green300',
                                color: 'white',
                                borderTopLeftRadius: 10,
                                borderTopRightRadius: 10,
                                padding: '5px 25px',
                                fontWeight: '$medium',
                                color: '$green800'
                            }}
                            >
                                Events
                            </Text>

                            <Row>
                                <Grid css={{
                                    flexDirection: 'column',
                                    padding: '20px',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    textAlign: 'center',
                                    borderColor: '$green300',
                                    borderWidth: '2px 0px 0px 0px',
                                    borderStyle: 'solid',
                                    borderRadius: '30px 0px 0px 0px'
                                }}>
                                    <Col css={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center'
                                    }}>
                                        <Image src={Gareema}
                                            css={{
                                                borderRadius: 300,
                                                '@xsMax': {
                                                    width: 125,
                                                    height: 125
                                                },
                                                '@xsMin': {
                                                    width: 200,
                                                    height: 200
                                                },
                                                objectFit: 'cover'
                                            }}
                                        />
                                        <Text
                                            css={{
                                                marginTop: 10,
                                                fontSize: '$base',
                                                fontWeight: '$medium'
                                            }}
                                        >
                                            Gareema Goel
                                        </Text>
                                        <Text
                                            css={{
                                                marginTop: 0,
                                                fontSize: '$base',
                                                fontWeight: '$medium'
                                            }}
                                        >
                                            UG25
                                        </Text>
                                        <Text 
                                            css={{
                                                marginTop: 0,
                                                fontSize: '$base',
                                                fontWeight: '$medium'
                                            }}>
                                            Co-Head
                                        </Text>
                                    </Col>
                                </Grid>

                                <Grid css={{
                                    flexDirection: 'column',
                                    padding: '20px',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    textAlign: 'center',
                                    borderColor: '$green300',
                                    borderWidth: '2px 0px 0px 0px',
                                    borderStyle: 'solid',
                                    borderRadius: '0px 30px 0px 0px'
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
                                                },
                                                objectFit: 'cover'
                                            }}
                                        />
                                        <Text
                                            css={{
                                                marginTop: 10,
                                                fontSize: '$base',
                                                fontWeight: '$medium'
                                            }}
                                        >
                                            Abhay Madan
                                        </Text>
                                        <Text
                                            css={{
                                                marginTop: 0,
                                                fontSize: '$base',
                                                fontWeight: '$medium'
                                            }}
                                        >
                                            UG24
                                        </Text>
                                        <Text 
                                            css={{
                                                marginTop: 0,
                                                fontSize: '$base',
                                                fontWeight: '$medium'
                                            }}>
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
                        w: 'max-content',
                        paddingTop: '60px'
                    }}>

                        <Col css={{
                            display: 'flex',
                            flexDirection: 'column',
                            w: 'max-content',
                            justifyContent: 'center',
                            textAlign: 'center',
                            alignItems: 'center'
                        }}>
                            <Text css={{
                                width: 'max-content',
                                textAlign: 'center',
                                // backgroundColor: '#3E5896',
                                backgroundColor: '$blue300',
                                color: 'white',
                                borderTopLeftRadius: 10,
                                borderTopRightRadius: 10,
                                padding: '5px 25px',
                                fontWeight: '$medium',
                                color: '$blue800'
                            }}
                            >
                                Research
                            </Text>

                            <Row>
                                <Grid css={{
                                    flexDirection: 'column',
                                    padding: '20px',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    textAlign: 'center',
                                    borderColor: '$blue300',
                                    borderWidth: '2px 0px 0px 0px',
                                    borderStyle: 'solid',
                                    borderRadius: '30px 0px 0px 0px'
                                }}>
                                    <Col css={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center'
                                    }}>
                                        <Image src={Yogya}
                                            css={{
                                                borderRadius: 300,
                                                '@xsMax': {
                                                    width: 125,
                                                    height: 125
                                                },
                                                '@xsMin': {
                                                    width: 200,
                                                    height: 200
                                                },
                                                objectFit: 'cover'
                                            }}
                                        />
                                        <Text
                                            css={{
                                                marginTop: 10,
                                                fontSize: '$base',
                                                fontWeight: '$medium'
                                            }}
                                        >
                                            Yogya Sareen
                                        </Text>
                                        <Text
                                            css={{
                                                marginTop: 0,
                                                fontSize: '$base',
                                                fontWeight: '$medium'
                                            }}
                                        >
                                            UG24
                                        </Text>
                                        <Text 
                                            css={{
                                                marginTop: 0,
                                                fontSize: '$base',
                                                fontWeight: '$medium'
                                            }}>
                                            Co-Head
                                        </Text>
                                    </Col>
                                </Grid>

                                <Grid css={{
                                    flexDirection: 'column',
                                    padding: '20px',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    textAlign: 'center',
                                    borderColor: '$blue300',
                                    borderWidth: '2px 0px 0px 0px',
                                    borderStyle: 'solid',
                                    borderRadius: '0px 30px 0px 0px'
                                }}>
                                    <Col css={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center'
                                    }}>
                                        <Image src={Syona}
                                            css={{
                                                borderRadius: 300,
                                                '@xsMax': {
                                                    width: 125,
                                                    height: 125
                                                },
                                                '@xsMin': {
                                                    width: 200,
                                                    height: 200
                                                },
                                                objectFit: 'cover'
                                            }}
                                        />
                                        <Text
                                            css={{
                                                marginTop: 10,
                                                fontSize: '$base',
                                                fontWeight: '$medium'
                                            }}
                                        >
                                            Syona Jain
                                        </Text>
                                        <Text
                                            css={{
                                                marginTop: 0,
                                                fontSize: '$base',
                                                fontWeight: '$medium'
                                            }}
                                        >
                                            UG25
                                        </Text>
                                        <Text 
                                            css={{
                                                marginTop: 0,
                                                fontSize: '$base',
                                                fontWeight: '$medium'
                                            }}>
                                            Co-Head
                                        </Text>
                                    </Col>
                                </Grid>
                            </Row>
                        </Col>

                    </Row>

                    <Row css={{
                        w: 'max-content',
                        paddingTop: '60px'
                    }}>

                        <Col css={{
                            display: 'flex',
                            flexDirection: 'column',
                            w: 'max-content',
                            justifyContent: 'center',
                            textAlign: 'center',
                            alignItems: 'center'
                        }}>
                            <Text css={{
                                width: 'max-content',
                                textAlign: 'center',
                                // backgroundColor: '#3E5896',
                                backgroundColor: '$purple300',
                                color: 'white',
                                borderTopLeftRadius: 10,
                                borderTopRightRadius: 10,
                                padding: '5px 25px',
                                fontWeight: '$medium',
                                color: '$purple800',
                            }}
                            >
                                Technology
                            </Text>

                            <Row>
                                <Grid css={{
                                    flexDirection: 'column',
                                    padding: '20px',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    textAlign: 'center',
                                    borderColor: '$purple300',
                                    borderWidth: '2px 0px 0px 0px',
                                    borderStyle: 'solid',
                                    borderRadius: '30px 0px 0px 0px'
                                }}>
                                    <Col css={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center'
                                    }}>
                                        <Image src={Aryan}
                                            css={{
                                                borderRadius: 300,
                                                '@xsMax': {
                                                    width: 125,
                                                    height: 125
                                                },
                                                '@xsMin': {
                                                    width: 200,
                                                    height: 200
                                                },
                                                objectFit: 'cover'
                                            }}
                                        />
                                        <Text
                                            css={{
                                                marginTop: 10,
                                                fontSize: '$base',
                                                fontWeight: '$medium'
                                            }}
                                        >
                                            Aryan Yadav
                                        </Text>
                                        <Text
                                            css={{
                                                marginTop: 0,
                                                fontSize: '$base',
                                                fontWeight: '$medium'
                                            }}
                                        >
                                            ASP24
                                        </Text>
                                        <Text 
                                            css={{
                                                marginTop: 0,
                                                fontSize: '$base',
                                                fontWeight: '$medium'
                                            }}>
                                            Co-Head
                                        </Text>
                                    </Col>
                                </Grid>

                                <Grid css={{
                                    flexDirection: 'column',
                                    padding: '20px',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    textAlign: 'center',
                                    borderColor: '$purple300',
                                    borderWidth: '2px 0px 0px 0px',
                                    borderStyle: 'solid',
                                    borderRadius: '0px 30px 0px 0px'
                                }}>
                                    <Col css={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center'
                                    }}>
                                        <Image src={Zahaan}
                                            css={{
                                                borderRadius: 300,
                                                '@xsMax': {
                                                    width: 125,
                                                    height: 125
                                                },
                                                '@xsMin': {
                                                    width: 200,
                                                    height: 200
                                                },
                                                objectFit: 'cover'
                                            }}
                                        />
                                        <Text
                                            css={{
                                                marginTop: 10,
                                                fontSize: '$base',
                                                fontWeight: '$medium'
                                            }}
                                        >
                                            Zahaan Shapoorjee
                                        </Text>
                                        <Text
                                            css={{
                                                marginTop: 0,
                                                fontSize: '$base',
                                                fontWeight: '$medium'
                                            }}
                                        >
                                            UG24
                                        </Text>
                                        <Text 
                                            css={{
                                                marginTop: 0,
                                                fontSize: '$base',
                                                fontWeight: '$medium'
                                            }}>
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