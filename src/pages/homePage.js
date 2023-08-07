import { Container, Grid, Row, Text, Image, Col, Card, Button, Link, Avatar } from "@nextui-org/react";
import { BsArrowRight } from 'react-icons/bs';
import React from "react";
import Grey from '../assets/images/Grey.jpeg'
import Overview from '../assets/images/overview.png'
import Mission from '../assets/images/mission.png'
import Vision from '../assets/images/vision.png'

export default function HomePage() {

    const events = [
        {
            name: 'CS Social WICSER',
            description: "Ashoka Data Society actively participated in the CS Social Wicser, which served as an excellent platform for networking, knowledge exchange, and creating opportunities for collaboration among the Ashokans. Ashoka Data Society set up an information booth to showcase our organization's mission, projects, and initiatives. It provided an opportunity for attendees to interact directly with our team, inquire about our work, and learn about potential involvement opportunities. Our team members actively engaged with attendees, allowing for meaningful conversations and identifying potential researchers, and industry professionals with shared interests, paving the way for future joint initiatives or projects.",
            image: [Grey],
            date: '1st February, 2023',
        },
        {
            name: 'PYTHON BOOTCAMP WITH PROFESSOR AMIT GOYAL',
            description: "Ashoka Data Society conducted a Python Bootcamp in collaboration with Professor Amit Goyal. The boot camp provided participants with an immersive learning experience and a solid foundation in Python programming. Led by Professor Amit Goyal, an esteemed expert in the field, the Python Bootcamp aimed to equip attendees with practical programming skills and empower them to leverage Python's capabilities for data analysis and machine learning.\n The boot camp covered essential Python concep syntax, data structures, and commonly used libraries. The boot camp ensured active participation and engagement from attendees and proved to a valuable learning experience for all participants.",
            image: [Grey],
            date: '1st February, 2023',
        },
    ]

    const team = [
        {
            name: 'Vrinda Bhola',
            batch: 'UG24',
            role: 'President & Co-Founder',
            image: Grey
        },
        {
            name: 'Uttkarsh Kohli',
            batch: 'UG24',
            role: 'President & Co-Founder',
            image: Grey
        },
        {
            name: 'Tanya Mahajan',
            batch: 'UG24',
            role: 'Co-Head of Marketing',
            image: Grey
        },
        {
            name: 'Ananya Sarvani Sankara',
            batch: 'UG24',
            role: 'Co-Head of Newsletter',
            image: Grey
        },
    ]

    return (
        <div>
            <div className="desktop">
                <Grid.Container css={{
                    justifyContent: 'center',
                    alignItems: 'start',
                    marginTop: '20px',
                    padding: '0 20px 0 20px',
                    flexDirection: 'column'
                }}>
                    <Text css={{
                        fontSize: '$3xl',
                        padding: '0 15% 0 15%',
                        fontWeight: '$medium'
                    }}>
                        Ashoka Data Society
                    </Text>
                    <Text css={{
                        fontSize: '$xl',
                        padding: '0 15% 0 15%',
                    }}>
                        Official Website
                    </Text>
                    <Image width='80%' css={{ objectFit: 'cover', height: '500px', borderRadius: 10, marginTop: 20 }} src={Grey} />

                    <Row css={{
                        // margin: '40px 0 40px 0',
                        justifyContent: 'space-center',
                        width: '960px',
                        justifySelf: 'center',
                        alignSelf: 'center',
                        margin: '70px 0px 50px 0px'
                    }}>

                        <Grid css={{
                            flexDirection: 'column',
                            alignItems: 'center',
                            jc: 'center',
                            width: '300px',
                            borderColor: '$gray300',
                            borderRadius: 20,
                            borderWidth: '1px',
                            borderStyle: 'solid',
                            shadow: '$sm',
                            padding: '25px 0px 0px 0px',
                            margin: '0px 10px'
                        }}>
                            <Container css={{
                                position: 'absolute',
                                top: -20,
                                maxW: 'max-content',
                                marginLeft: '8%'
                            }}>
                                <Text css={{
                                    width: '',
                                    textAlign: 'center',
                                    // backgroundColor: '#3E5896',
                                    backgroundColor: '$red300',
                                    color: 'white',
                                    borderRadius: 10,
                                    padding: '5px 25px',
                                    fontWeight: '$medium',
                                    color: '$red800'
                                }}
                                >
                                    VISION
                                </Text>
                            </Container>
                            <Image
                                src={Vision}
                                width={50}
                                height={50}
                            />
                            <Text css={{
                                fontWeight: '$medium',
                                fontSize: '$base',
                                textAlign: 'center',
                                padding: '5px 10px 0px 10px'
                            }}>
                                To build an active and bustling data analytics and data science community at Ashoka University.
                                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.
                            </Text>
                            <Text css={{
                                height: 25,
                                marginTop: '10px',
                                backgroundColor: '$gray100',
                                color: '$gray200',
                                borderBottomLeftRadius: 20,
                                borderBottomRightRadius: 20
                            }}>

                            </Text>
                        </Grid>

                        <Grid css={{
                            flexDirection: 'column',
                            alignItems: 'center',
                            jc: 'center',
                            padding: '25px 0px 0px 0px',
                            width: '300px',
                            borderColor: '$gray300',
                            borderRadius: 20,
                            borderWidth: '1px',
                            borderStyle: 'solid',
                            shadow: '$sm',
                            margin: '0px 10px'
                        }}>
                            <Container css={{
                                position: 'absolute',
                                top: -20,
                                maxW: 'max-content',
                                marginLeft: '7%'
                            }}>
                                <Text css={{
                                    width: '',
                                    textAlign: 'center',
                                    // backgroundColor: '#3E5896',
                                    backgroundColor: '$blue300',
                                    color: 'white',
                                    borderRadius: 10,
                                    padding: '5px 25px',
                                    fontWeight: '$medium',
                                    color: '$blue800'
                                }}
                                >
                                    MISSION
                                </Text>
                            </Container>
                            <Image
                                src={Mission}
                                width={50}
                                height={50}
                            />
                            <Text css={{
                                fontWeight: '$medium',
                                fontSize: '$base',
                                textAlign: 'center',
                                padding: '5px 10px 0px 10px'
                            }}>
                                To provide a platform for students to further in the field of data by exposing them to experienced professionals,
                                introducing courses that urge them to upskill and conducting competitions for development.
                            </Text>
                            <Text css={{
                                height: 25,
                                marginTop: '10px',
                                backgroundColor: '$gray100',
                                color: '$gray200',
                                borderBottomLeftRadius: 20,
                                borderBottomRightRadius: 20
                            }}>

                            </Text>
                        </Grid>

                        <Grid css={{
                            flexDirection: 'column',
                            alignItems: 'center',
                            jc: 'center',
                            padding: '25px 0px 0px 0px',
                            width: '300px',
                            borderColor: '$gray300',
                            borderRadius: 20,
                            borderWidth: '1px',
                            borderStyle: 'solid',
                            shadow: '$sm',
                            margin: '0px 10px'
                        }}>
                            <Container css={{
                                position: 'absolute',
                                top: -20,
                                maxW: 'max-content',
                                marginLeft: '6.25%'
                            }}>
                                <Text css={{
                                    width: '',
                                    textAlign: 'center',
                                    // backgroundColor: '#3E5896',
                                    backgroundColor: '$gray400',
                                    color: 'white',
                                    borderRadius: 10,
                                    padding: '5px 25px',
                                    fontWeight: '$medium',
                                    color: 'black'
                                }}
                                >
                                    OVERVIEW
                                </Text>
                            </Container>
                            <Image
                                src={Overview}
                                width={50}
                                height={50}
                            />
                            <Text css={{
                                fontWeight: '$medium',
                                fontSize: '$base',
                                textAlign: 'center',
                                padding: '5px 10px 0px 10px'
                            }}>

                                Presided over by Uttkarsh Kohli and Vrinda Bhola, the club functions smoothly and the work of each department is well coordinated.
                                Departments include Marketing, Events, Newsletter, Technology

                            </Text>

                            <Text css={{
                                height: 25,
                                marginTop: '10px',
                                backgroundColor: '$gray100',
                                color: '$gray200',
                                borderBottomLeftRadius: 20,
                                borderBottomRightRadius: 20
                            }}>

                            </Text>
                        </Grid>

                    </Row>

                    <Text css={{
                        textAlign: 'center',
                        fontWeight: '$semibold',
                        width: '100%',
                        fontSize: '$3xl',
                        paddingBottom: '40px'
                    }}>
                        Featured Events
                    </Text>

                    <Row css={{
                        padding: '0 40px 30px 40px',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>

                        {events.map(event => (
                            <Card css={{ w: "460px", h: "400px", margin: '0px 20px' }}>
                                <Card.Body css={{ p: 0 }}>
                                    <Card.Image
                                        src={event.image[0]}
                                        width="100%"
                                        height="100%"
                                        objectFit="cover"
                                        alt="Card example background"
                                    />
                                </Card.Body>
                                <Card.Footer
                                    isBlurred
                                    css={{
                                        position: "absolute",
                                        bgBlur: "#ffffff66",
                                        borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                                        bottom: 0,
                                        zIndex: 1,
                                    }}
                                >
                                    <Row css={{
                                        alignItems: 'center'
                                    }}>
                                        <Col css={{
                                            width: '75%',
                                        }}>
                                            <Text className="multiline-ellipsis" css={{
                                                fontWeight: '$semibold',
                                                fontSize: '$md',
                                                marginRight: 10
                                            }}>
                                                {event.name}
                                            </Text>
                                            <Text className="multiline-ellipsis" css={{
                                                fontWeight: '$semibold',
                                                fontSize: '$md',
                                                marginRight: 10
                                            }}>
                                                {event.date}
                                            </Text>
                                        </Col>
                                        <Col css={{
                                            width: 'max-content'
                                        }}>
                                            <Row justify="flex-end">
                                                <Button flat auto rounded color="primary">
                                                    <Text
                                                        css={{ color: "inherit" }}
                                                        size={12}
                                                        weight="bold"
                                                        transform="uppercase"
                                                    >
                                                        KNOW MORE
                                                    </Text>
                                                </Button>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Card.Footer>
                            </Card>
                        ))}


                    </Row>

                    <Grid css={{
                        width: '100%',
                        justifyContent: 'center',
                        display: 'flex',
                        marginBottom: '80px'
                    }}>
                        <Link href="/events" >
                            <Row css={{
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Text css={{
                                    fontSize: '$lg',
                                    fontWeight: '$semibold',
                                    paddingRight: 10,
                                    textAlign: 'center'
                                }}>
                                    Explore All Events
                                </Text>
                                <BsArrowRight size={20} color='black' />
                            </Row>
                        </Link>
                    </Grid>


                    <Text css={{
                        textAlign: 'center',
                        fontWeight: '$semibold',
                        width: '100%',
                        fontSize: '$3xl',
                        paddingBottom: '10px'
                    }}>
                        Team
                    </Text>

                    <Grid.Container
                        css={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '0px 20px'
                        }}
                    >
                        {team.map(member => (

                            <Grid css={{
                                flexDirection: 'column',
                                padding: '20px',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center'
                            }}>
                                <Image width={200} height={200} src={member.image}
                                    css={{
                                        borderRadius: 300,
                                    }}
                                />
                                <Text
                                    css={{
                                        marginTop: 10,
                                        fontSize: '$base',
                                        fontWeight: '$medium'
                                    }}
                                >
                                    {member.name}
                                </Text>
                                <Text>
                                    {member.role}
                                </Text>
                            </Grid>

                        ))}
                    </Grid.Container>

                    <Grid css={{
                        width: '100%',
                        justifyContent: 'center',
                        display: 'flex',
                        marginBottom: '80px'
                    }}>
                        <Link href="/team" >
                            <Row css={{
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Text css={{
                                    fontSize: '$lg',
                                    fontWeight: '$semibold',
                                    paddingRight: 10,
                                    textAlign: 'center'
                                }}>
                                    All Team Members
                                </Text>
                                <BsArrowRight size={20} color='black' />
                            </Row>
                        </Link>
                    </Grid>

                </Grid.Container>
            </div>

            <div className="tablet">
                <Grid.Container css={{
                    justifyContent: 'center',
                    alignItems: 'start',
                    marginTop: '20px',
                    padding: '0 20px 0 20px',
                    flexDirection: 'column'
                }}>
                    <Text css={{
                        fontSize: '$3xl',
                        padding: '0 5% 0 5%',
                        fontWeight: '$medium'
                    }}>
                        Ashoka Data Society
                    </Text>
                    <Text css={{
                        fontSize: '$xl',
                        padding: '0 5% 0 5%',
                    }}>
                        Official Website
                    </Text>
                    <Image width='95%' css={{ objectFit: 'cover', height: '500px', borderRadius: 10, marginTop: 20 }} src={Grey} />

                    <Col css={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: '10px 0px'
                    }}>
                        <Row css={{
                            // margin: '40px 0 40px 0',
                            justifyContent: 'center',
                            width: '660px',
                            justifySelf: 'center',
                            alignSelf: 'center',
                            margin: '40px 0px'
                        }}>

                            <Grid css={{
                                flexDirection: 'column',
                                alignItems: 'center',
                                jc: 'center',
                                width: '300px',
                                borderColor: '$gray300',
                                borderRadius: 20,
                                borderWidth: '1px',
                                borderStyle: 'solid',
                                shadow: '$sm',
                                padding: '25px 0px 0px 0px',
                                margin: '0px 10px'
                            }}>
                                <Container css={{
                                    position: 'absolute',
                                    top: -20,
                                    maxW: 'max-content',
                                    marginLeft: '11.25%'
                                }}>
                                    <Text css={{
                                        width: '',
                                        textAlign: 'center',
                                        // backgroundColor: '#3E5896',
                                        backgroundColor: '$red300',
                                        color: 'white',
                                        borderRadius: 10,
                                        padding: '5px 25px',
                                        fontWeight: '$medium',
                                        color: '$red800'
                                    }}
                                    >
                                        VISION
                                    </Text>
                                </Container>
                                <Image
                                    src={Vision}
                                    width={50}
                                    height={50}
                                />
                                <Text css={{
                                    fontWeight: '$medium',
                                    fontSize: '$base',
                                    textAlign: 'center',
                                    padding: '5px 10px 0px 10px'
                                }}>
                                    To build an active and bustling data analytics and data science community at Ashoka University.
                                    Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.
                                </Text>
                                <Text css={{
                                    height: 25,
                                    marginTop: '10px',
                                    backgroundColor: '$gray100',
                                    color: '$gray200',
                                    borderBottomLeftRadius: 20,
                                    borderBottomRightRadius: 20
                                }}>

                                </Text>
                            </Grid>

                            <Grid css={{
                                flexDirection: 'column',
                                alignItems: 'center',
                                jc: 'center',
                                padding: '25px 0px 0px 0px',
                                width: '300px',
                                borderColor: '$gray300',
                                borderRadius: 20,
                                borderWidth: '1px',
                                borderStyle: 'solid',
                                shadow: '$sm',
                                margin: '0px 10px'
                            }}>
                                <Container css={{
                                    position: 'absolute',
                                    top: -20,
                                    maxW: 'max-content',
                                    marginLeft: '10.5%'
                                }}>
                                    <Text css={{
                                        width: '',
                                        textAlign: 'center',
                                        // backgroundColor: '#3E5896',
                                        backgroundColor: '$blue300',
                                        color: 'white',
                                        borderRadius: 10,
                                        padding: '5px 25px',
                                        fontWeight: '$medium',
                                        color: '$blue800'
                                    }}
                                    >
                                        MISSION
                                    </Text>
                                </Container>
                                <Image
                                    src={Mission}
                                    width={50}
                                    height={50}
                                />
                                <Text css={{
                                    fontWeight: '$medium',
                                    fontSize: '$base',
                                    textAlign: 'center',
                                    padding: '5px 10px 0px 10px'
                                }}>
                                    To provide a platform for students to further in the field of data by exposing them to experienced professionals,
                                    introducing courses that urge them to upskill and conducting competitions for development.
                                </Text>
                                <Text css={{
                                    height: 25,
                                    marginTop: '10px',
                                    backgroundColor: '$gray100',
                                    color: '$gray200',
                                    borderBottomLeftRadius: 20,
                                    borderBottomRightRadius: 20
                                }}>

                                </Text>
                            </Grid>

                        </Row>

                        <Grid css={{
                            flexDirection: 'column',
                            alignItems: 'center',
                            jc: 'center',
                            padding: '25px 0px 0px 0px',
                            width: '300px',
                            borderColor: '$gray300',
                            borderRadius: 20,
                            borderWidth: '1px',
                            borderStyle: 'solid',
                            shadow: '$sm',
                            margin: '0px 10px'
                        }}>
                            <Container css={{
                                position: 'absolute',
                                top: 1060,
                                maxW: 'max-content',
                                marginLeft: '64px'
                            }}>
                                <Text css={{
                                    width: '',
                                    textAlign: 'center',
                                    // backgroundColor: '#3E5896',
                                    backgroundColor: '$gray300',
                                    color: 'white',
                                    borderRadius: 10,
                                    padding: '5px 25px',
                                    fontWeight: '$semibold',
                                    color: 'black'
                                }}
                                >
                                    OVERVIEW
                                </Text>
                            </Container>
                            <Image
                                src={Overview}
                                width={50}
                                height={50}
                            />
                            <Text css={{
                                fontWeight: '$medium',
                                fontSize: '$base',
                                textAlign: 'center',
                                padding: '5px 10px 0px 10px'
                            }}>

                                Presided over by Uttkarsh Kohli and Vrinda Bhola, the club functions smoothly and the work of each department is well coordinated.
                                Departments include Marketing, Events, Newsletter, Technology

                            </Text>

                            <Text css={{
                                height: 25,
                                marginTop: '10px',
                                backgroundColor: '$gray100',
                                color: '$gray200',
                                borderBottomLeftRadius: 20,
                                borderBottomRightRadius: 20
                            }}>

                            </Text>
                        </Grid>

                    </Col>

                    <Text css={{
                        textAlign: 'center',
                        fontWeight: '$semibold',
                        width: '100%',
                        fontSize: '$3xl',
                        paddingBottom: '20px',
                        paddingTop: '40px'
                    }}>
                        Featured Events
                    </Text>

                    <Col css={{
                        padding: '0 40px 30px 40px',
                        justifyContent: 'center',
                        alignItems: 'center',
                        w: '100%',
                        display: 'flex',
                        flexDirection: 'column'
                    }}>

                        {events.map(event => (
                            <Card css={{ w: "460px", h: "400px", margin: '20px 0px' }}>
                                <Card.Body css={{ p: 0 }}>
                                    <Card.Image
                                        src={event.image[0]}
                                        width="100%"
                                        height="100%"
                                        objectFit="cover"
                                        alt="Card example background"
                                    />
                                </Card.Body>
                                <Card.Footer
                                    isBlurred
                                    css={{
                                        position: "absolute",
                                        bgBlur: "#ffffff66",
                                        borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                                        bottom: 0,
                                        zIndex: 1,
                                    }}
                                >
                                    <Row css={{
                                        alignItems: 'center'
                                    }}>
                                        <Col css={{
                                            width: '75%',
                                        }}>
                                            <Text className="multiline-ellipsis" css={{
                                                fontWeight: '$semibold',
                                                fontSize: '$md',
                                                marginRight: 10
                                            }}>
                                                {event.name}
                                            </Text>
                                            <Text className="multiline-ellipsis" css={{
                                                fontWeight: '$semibold',
                                                fontSize: '$md',
                                                marginRight: 10
                                            }}>
                                                {event.date}
                                            </Text>
                                        </Col>
                                        <Col css={{
                                            width: 'max-content'
                                        }}>
                                            <Row justify="flex-end">
                                                <Button flat auto rounded color="primary">
                                                    <Text
                                                        css={{ color: "inherit" }}
                                                        size={12}
                                                        weight="bold"
                                                        transform="uppercase"
                                                    >
                                                        KNOW MORE
                                                    </Text>
                                                </Button>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Card.Footer>
                            </Card>
                        ))}


                    </Col>

                    <Grid css={{
                        width: '100%',
                        justifyContent: 'center',
                        display: 'flex',
                        marginBottom: '80px'
                    }}>
                        <Link href="/events" >
                            <Row css={{
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Text css={{
                                    fontSize: '$lg',
                                    fontWeight: '$semibold',
                                    paddingRight: 10,
                                    textAlign: 'center'
                                }}>
                                    Explore All Events
                                </Text>
                                <BsArrowRight size={20} color='black' />
                            </Row>
                        </Link>
                    </Grid>


                    <Text css={{
                        textAlign: 'center',
                        fontWeight: '$semibold',
                        width: '100%',
                        fontSize: '$3xl',
                        paddingBottom: '10px'
                    }}>
                        Team
                    </Text>

                    <Grid.Container
                        css={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '0px 20px'
                        }}
                    >
                        {team.map(member => (

                            <Grid css={{
                                flexDirection: 'column',
                                padding: '20px',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center'
                            }}>
                                <Image width={200} height={200} src={member.image}
                                    css={{
                                        borderRadius: 300,
                                    }}
                                />
                                <Text
                                    css={{
                                        marginTop: 10,
                                        fontSize: '$base',
                                        fontWeight: '$medium'
                                    }}
                                >
                                    {member.name}
                                </Text>
                                <Text>
                                    {member.role}
                                </Text>
                            </Grid>

                        ))}
                    </Grid.Container>

                    <Grid css={{
                        width: '100%',
                        justifyContent: 'center',
                        display: 'flex',
                        marginBottom: '80px'
                    }}>
                        <Link href="/team" >
                            <Row css={{
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Text css={{
                                    fontSize: '$lg',
                                    fontWeight: '$semibold',
                                    paddingRight: 10,
                                    textAlign: 'center'
                                }}>
                                    All Team Members
                                </Text>
                                <BsArrowRight size={20} color='black' />
                            </Row>
                        </Link>
                    </Grid>


                </Grid.Container>
            </div>

            <div className="mobile">

            </div>
        </div>
    )
}