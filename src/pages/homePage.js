import { Container, Grid, Row, Text, Image, Col, Card, Button, Link, Avatar } from "@nextui-org/react";
import { BsArrowRight } from 'react-icons/bs';
import React from "react";
import Grey from '../assets/images/Grey.jpeg'
import Overview from '../assets/images/overview.png'
import Mission from '../assets/images/mission.png'
import Vision from '../assets/images/vision.png'
import { useNavigate } from "react-router-dom";
import NewsTicker from "../components/newsticker";
import ADEXABC from "../assets/images/ADEXABC.jpeg"
import DATADRIVENFINANCE from "../assets/images/DATADRIVENFINANCE.jpeg"
import debayan from "../assets/images/debayan.jpg"
import Kumarjit from "../assets/images/kumarjitsaha.png"
import Amit from "../assets/images/amitgoyal.png"
import tskrishna from "../assets/images/tskrishnan.png"




export default function HomePage() {


    const navigate = useNavigate();

    const events = [
        {
            name: 'ADE X ABC CONVERSATION WITH SNEHIL JAIN, THE VICE PRESIDENT OF HSBC',
            description: `Ashoka Data Society, in collaboration with the Ashoka Business Club, organized an engaging conversation on "Marketing Analytics" featuring Snehil Jain, the Vice President of HSBC. The conversation aimed to provide participants with valuable insights into the field of marketing analytics and its applications in today's business landscape.\n During the conversation, Snehil Jain, an experienced professional in the finance and marketing domain, shared her expertise and perspectives on marketing analytics. Participants had the opportunity to learn about the importance of data- driven decision-making in marketing, the role of analytics in understanding customer behaviour and preferences, and the impact of analytics on marketing strategies.\n The conversation fostered interactive discussions, allowing participants to engage directly with Snehil Jain, and ask questions. It provided a platform for knowledge sharing and networking among like-minded individuals interested in marketing analytics. `,
            image: [ADEXABC],
            date: '1st February, 2023',
        },
        {
            name: 'IMPORTANCE OF DATA-DRIVEN FINANCE AND HOW TO BREAK INTO THIS FIELD BY SRINIDHI RAGHAVENDRA, CEO OF MINT FINANCE',
            description: `Ashoka Data Society organized an insightful webinar titled "Importance of Data-Driven Finance and How to Break into This Field," featuring Srinidhi Raghavendra, the CEO of Mint Finance, as the distinguished speaker.\n Srinidhi Raghavendra, an industry expert with extensive experience in finance and data analytics, shared his expertise and insights with the attendees. The webinar explored various aspects, including the role of data- driven decision-making in finance, emerging trends, and the skills required to thrive in this evolving landscape. Participants had the opportunity to learn from Srinidhi Raghavendra's experiences and gain valuable insights into how data analytics is transforming the finance sector. The webinar also provided guidance on breaking into the field, highlighting the essential skills, educational background, and career pathways to consider.`,
            image: [DATADRIVENFINANCE],
            date: '1st February, 2023',
        },
    ]

    const team = [
        {
            name: 'Debayan Gupta',
            batch: 'UG24',
            role: 'CS Department',
            image: debayan
        },
        {
            name: 'Kumarjit Saha',
            batch: 'UG24',
            role: 'B Department',
            image: Kumarjit
        },
        {
            name: 'Amit Goyal',
            batch: 'UG24',
            role: 'C Department',
            image: Amit
        },
        {
            name: 'TS Krishnan',
            batch: 'UG24',
            role: 'D Department',
            image: tskrishna
        },
    ]

    return (
        <div>
            <div className="desktop">
                <NewsTicker />

                <Grid.Container css={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '20px',
                    padding: '0 20px 0 20px',
                    flexDirection: 'column'
                }}>

                    {/* <Row css={{
                        jc: 'center',
                        alignItems: 'center',
                        // w: 'max-content',
                        padding: '60px 20%',
                    }}>
                        <Col css={{}}>
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

                        </Col>
                        <Image width='700px' css={{ objectFit: 'cover', height: '300px', borderRadius: 10, marginTop: 20 }} src={Grey} />

                    </Row> */}

                    <Row className="homepage-row" css={{
                        jc: 'center',
                        alignItems: 'start',
                        padding: '60px 20%',
                        height: '85vh'
                    }}>
                        <Col css={{
                            w: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            jc: 'center',
                            alignItems: 'center',
                        }}>
                            <Text css={{
                                fontSize: '$3xl',
                                padding: '0 5%',
                                fontWeight: '$semibold',
                                color: 'White'
                            }}>
                                Data Society @Ashoka
                            </Text>
                            <Text css={{
                                fontSize: '$xl',
                                padding: '0 5%',
                                color: 'White'
                            }}>
                                The official Data Society of Ashoka University.
                            </Text>

                        </Col>
                    </Row>

                    <Text css={{
                        textAlign: 'center',
                        fontWeight: '$semibold',
                        width: '100%',
                        fontSize: '$3xl',
                        paddingBottom: '0px',
                        paddingTop: '60px'
                    }}>
                        About Us
                    </Text>

                    <Row css={{
                        // margin: '40px 0 40px 0',
                        justifyContent: 'space-center',
                        width: '960px',
                        justifySelf: 'center',
                        alignSelf: 'center',
                        margin: '40px 0px 80px 0px'
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

                    <Row className="featuredpage-row" css={{
                        jc: 'start',
                        alignItems: 'center',
                        // w: 'max-content',
                        padding: '60px 10%',
                        height: '85vh'
                    }}>
                        <Col css={{
                            margin: '0px 0px 0px 0px'
                        }}>
                            <Text css={{
                                textAlign: 'center',
                                fontWeight: '$semibold',
                                width: '100%',
                                fontSize: '$3xl',
                                paddingBottom: '80px'
                            }}>
                                Featured Events
                            </Text>

                            <Row css={{
                                padding: '0 40px 10px 40px',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>

                                {events.map(event => (
                                    <Card css={{ w: "450px", h: "400px", margin: '0px 20px' }}>
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
                                                        <Button flat auto rounded color="primary"
                                                            onClick={() => {
                                                                navigate(`/events/eventlink`, { state: { event } });
                                                            }}
                                                        >
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
                        </Col>


                    </Row>
                    <Grid css={{
                        width: '100%',
                        justifyContent: 'center',
                        display: 'flex',
                        marginBottom: '40px',
                        marginTop: '20px'
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
                                    textAlign: 'center',
                                    textDecoration: 'underline',
                                    color: 'Black'
                                }}>
                                    Explore All Events
                                </Text>
                                <BsArrowRight size={20} color='#000' />
                            </Row>
                        </Link>
                    </Grid>



                    <Text css={{
                        textAlign: 'center',
                        fontWeight: '$semibold',
                        width: '100%',
                        fontSize: '$3xl',
                        padding: '60px 0px 10px 0px'
                    }}>
                        Professors Associated With Us
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
                                        objectFit:"fill"
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
                        marginBottom: '100px'
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
                                    textAlign: 'center',
                                    textDecoration: 'underline'
                                }}>
                                    ADS Core Team
                                </Text>
                                <BsArrowRight size={20} color='black' />
                            </Row>
                        </Link>
                    </Grid>

                </Grid.Container>
            </div>

            <div className="tablet">
                <NewsTicker />

                <Grid.Container css={{
                    justifyContent: 'center',
                    alignItems: 'start',
                    marginTop: '20px',
                    padding: '0 20px 0 20px',
                    flexDirection: 'column'
                }}>

                    <Row className="homepage-row" css={{
                        jc: 'center',
                        alignItems: 'start',
                        // w: 'max-content',
                        padding: '60px 20%',
                        height: 715
                    }}>
                        <Col css={{
                            w: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            jc: 'center',
                            alignItems: 'center'
                        }}>
                            <Text css={{
                                fontSize: '$2xl',
                                padding: '0 5%',
                                fontWeight: '$semibold',
                                color: 'white'
                            }}>
                                Data Society @Ashoka
                            </Text>
                            <Text css={{
                                fontSize: '$xl',
                                padding: '0 5%',
                                color: 'white'
                            }}>
                                The official Data Society of Ashoka University.
                            </Text>

                        </Col>
                        {/* <Image width='500px' css={{ objectFit: 'cover', height: '300px', borderRadius: 10 }} src={Grey} /> */}
                    </Row>
                    {/* <Text css={{
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
                    <Image width='95%' css={{ objectFit: 'cover', height: '500px', borderRadius: 10, marginTop: 20 }} src={Grey} /> */}

                    <Text css={{
                        textAlign: 'center',
                        fontWeight: '$semibold',
                        width: '100%',
                        fontSize: '$2xl',
                        paddingBottom: '20px',
                        paddingTop: '40px'
                    }}>
                        About Us
                    </Text>

                    <Col css={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: '10px 0px 50px 0px',
                        paddingBottom: '150px'
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
                                top: 1322,
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

                    {/* <Text css={{
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
                            <Card css={{ w: "400px", h: "300px", margin: '20px 0px' }}>
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
                                    textAlign: 'center',
                                    textDecoration: 'underline'
                                }}>
                                    Explore All Events
                                </Text>
                                <BsArrowRight size={20} color='black' />
                            </Row>
                        </Link>
                    </Grid> */}

                    <Row className="featuredpage-row" css={{
                        jc: 'start',
                        alignItems: 'center',
                        // w: 'max-content',
                        padding: '60px 10%',
                        height: '85vh'
                    }}>
                        <Col css={{
                            margin: '0px 0px 0px 0px'
                        }}>
                            <Text css={{
                                textAlign: 'center',
                                fontWeight: '$semibold',
                                width: '100%',
                                fontSize: '$2xl',
                                padding: '40px 0px'
                            }}>
                                Featured Events
                            </Text>

                            <Col css={{
                                padding: '30px 40px 0px 40px',
                                justifyContent: 'center',
                                alignItems: 'center',
                                w: '100%',
                                display: 'flex',
                                flexDirection: 'column'
                            }}>

                                {events.map(event => (
                                    <Card css={{ w: "400px", h: "300px", margin: '20px 0px' }}>
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
                                                        <Button flat auto rounded color="primary"
                                                            onClick={() => {
                                                                navigate(`/events/eventlink`, { state: { event } });
                                                            }}
                                                        >
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
                                marginBottom: '80px',
                                padding: '40px 0px 0px 0px'
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
                                            textAlign: 'center',
                                            textDecoration: 'underline'
                                        }}>
                                            Explore All Events
                                        </Text>
                                        <BsArrowRight size={20} color='black' />
                                    </Row>
                                </Link>
                            </Grid>
                        </Col>


                    </Row>



                    <Text css={{
                        textAlign: 'center',
                        fontWeight: '$semibold',
                        width: '100%',
                        fontSize: '$3xl',
                        paddingBottom: '10px',
                        paddingTop: '80px',
                        marginTop: '60px'
                    }}>
                        Professors Associated With Us
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
                                    textAlign: 'center',
                                    textDecoration: 'underline'
                                }}>
                                    ADS Core Team
                                </Text>
                                <BsArrowRight size={20} color='black' />
                            </Row>
                        </Link>
                    </Grid>


                </Grid.Container>
            </div>

            <div className="mobile">
                <NewsTicker />

                <Grid.Container css={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '20px',
                    padding: '0px 5%',
                    flexDirection: 'column'
                }}>
                    {/* <Text css={{
                        fontSize: '$2xl',
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
                    <Image width='95%' css={{ objectFit: 'cover', height: '300px', marginTop: 20, marginBottom: 20, borderRadius: 10 }} src={Grey} /> */}

                    <Row className="homepage-mobile-row" css={{
                        jc: 'center',
                        alignItems: 'start',
                        padding: '60px 20%',
                        height: 615
                    }}>
                        <Col css={{
                            w: 'max-content',
                            display: 'flex',
                            flexDirection: 'column',
                            jc: 'center',
                            alignItems: 'center',
                            textAlign: 'center'
                        }}>
                            <Text css={{
                                fontSize: '$xl',
                                padding: '0 2.5%',
                                fontWeight: '$semibold',
                                color: 'White'
                            }}>
                                Data Society @Ashoka
                            </Text>
                            <Text css={{
                                fontSize: '$md',
                                padding: '0 2.5%',
                                color: 'White'
                            }}>
                                The official Data Society of Ashoka University.
                            </Text>

                        </Col>
                    </Row>

                    <Text css={{
                        textAlign: 'center',
                        fontWeight: '$semibold',
                        width: '100%',
                        fontSize: '$2xl',
                        paddingBottom: '20px',
                        paddingTop: '40px'
                    }}>
                        About Us
                    </Text>

                    <Col css={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: '10px 0px 100px 0px'
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
                            margin: '20px 10px'
                        }}>
                            <Container css={{
                                position: 'absolute',
                                top: 875,
                                maxW: 'max-content',
                                marginLeft: '75px'
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
                            margin: '20px 10px'
                        }}>
                            <Container css={{
                                position: 'absolute',
                                top: 1200,
                                maxW: 'max-content',
                                marginLeft: '67px'
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
                            margin: '20px 10px'
                        }}>
                            <Container css={{
                                position: 'absolute',
                                top: 1525,
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

                    <Row className="featuredpage-mobile-row" css={{
                        jc: 'start',
                        alignItems: 'center',
                        // w: 'max-content',
                        padding: '60px 10%',
                        height: '85vh'
                    }}>
                        <Col css={{
                            margin: '0px 0px 0px 0px',
                            w: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            jc: 'center',
                            alignItems: 'center'
                        }}>
                            <Text css={{
                                textAlign: 'center',
                                fontWeight: '$semibold',
                                width: '100%',
                                fontSize: '$2xl',
                                paddingBottom: '10px',
                            }}>
                                Featured Events
                            </Text>

                            {events.map(event => (
                                <Card css={{ w: "90%", margin: '10px 0', maxW: '350px', h: '300px' }}>
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
                                            padding: '10px'
                                        }}
                                    >
                                        <Col css={{
                                            w: '100%',
                                            jc: 'center',
                                            alignItems: 'center',
                                            display: 'flex',
                                            flexDirection: 'column',
                                        }}>
                                            <Text className="multiline-ellipsis" css={{
                                                fontWeight: '$semibold',
                                                fontSize: '$md',
                                                marginBottom: 5
                                            }}>
                                                {event.name}
                                            </Text>
                                            <Text className="multiline-ellipsis" css={{
                                                fontSize: '$sm',
                                                marginBottom: 15
                                            }}>
                                                {event.date}
                                            </Text>
                                            <Button flat auto rounded color="primary"
                                                onClick={() => {
                                                    navigate(`/events/eventlink`, { state: { event } });
                                                }}
                                            >
                                                <Text
                                                    css={{ color: "inherit", fontSize: '$sm' }}
                                                    weight="bold"
                                                    transform="uppercase"
                                                >
                                                    KNOW MORE
                                                </Text>
                                            </Button>
                                        </Col>
                                    </Card.Footer>
                                </Card>
                            ))}

                        </Col>

                    </Row>

                    <Grid css={{
                        width: '100%',
                        justifyContent: 'center',
                        display: 'flex',
                        marginBottom: '80px',
                        marginTop: '40px'
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
                                    textAlign: 'center',
                                    textDecoration: 'underline'
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
                        fontSize: '$2xl',
                        paddingBottom: '10px'
                    }}>
                        Team
                    </Text>

                    <Grid.Container
                        css={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '0px 10px'
                        }}
                    >
                        {team.map(member => (
                            <Grid css={{
                                flexDirection: 'column',
                                padding: '10px',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center'
                            }}>
                                <Image width={120} height={120} src={member.image}
                                    css={{
                                        borderRadius: '50%',
                                    }}
                                />
                                <Text
                                    css={{
                                        marginTop: 5,
                                        fontSize: '$base',
                                        fontWeight: '$medium'
                                    }}
                                >
                                    {member.name}
                                </Text>
                                <Text css={{ fontSize: '$sm' }}>
                                    {member.role}
                                </Text>
                            </Grid>
                        ))}
                    </Grid.Container>

                    <Link href="/team" >
                        <Row css={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '20px 0 80px 0'
                        }}>
                            <Text css={{
                                fontSize: '$md',
                                fontWeight: '$semibold',
                                textAlign: 'center',
                                textDecoration: 'underline'
                            }}>
                                ADS Core Team
                            </Text>
                            <BsArrowRight size={20} color='black' />
                        </Row>
                    </Link>
                </Grid.Container>
            </div>

        </div>
    )
}