import { Grid, Text, Image, Row, Col } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Grey from '../assets/images/Grey.jpeg'

export default function EachEvent(props) {
    const navigate = useNavigate();

    const events = [
        {
            name: 'CS Social WICSER',
            description: "Ashoka Data Society actively participated in the CS Social Wicser, which served as an excellent platform for networking, knowledge exchange, and creating opportunities for collaboration among the Ashokans.\n Ashoka Data Society set up an information booth to showcase our organization's mission, projects, and initiatives. It provided an opportunity for attendees to interact directly with our team, inquire about our work, and learn about potential involvement opportunities. Our team members actively engaged with attendees, allowing for meaningful conversations and identifying potential researchers, and industry professionals with shared interests, paving the way for future joint initiatives or projects.",
            image: [Grey],
            date: '1st February, 2023',
        },
        {
            name: 'PYTHON BOOTCAMP WITH PROFESSOR AMIT GOYAL',
            description: "Ashoka Data Society conducted a Python Bootcamp in collaboration with Professor Amit Goyal. The boot camp provided participants with an immersive learning experience and a solid foundation in Python programming. Led by Professor Amit Goyal, an esteemed expert in the field, the Python Bootcamp aimed to equip attendees with practical programming skills and empower them to leverage Python's capabilities for data analysis and machine learning.\n The boot camp covered essential Python concep syntax, data structures, and commonly used libraries.\n The boot camp ensured active participation and engagement from attendees and proved to a valuable learning experience for all participants.",
            image: [Grey],
            date: '1st February, 2023',
        },
        {
            name: 'DATA ANALYTICS COHORT WITH METVY',
            description: "Ashoka Data Society, in collaboration with Ed-Tech start-up Metvy, is proud to announce the successful completion of a comprehensive Data Analytics cohort. This cohort provided participants with valuable industry-relevant skills and insights into the field of data analytics.\n The Data Analytics cohort covered essential tools such as PowerBI, SQL, Excel, and Python, which are widely used in the data analytics industry. One of the distinguishing features of the cohort was the inclusion of talks by industry experts from renowned companies like BCG, Amazon, and Netflix, providing participants with a unique opportunity to learn from the experiences and perspectives of industry leaders.\n The cohort received an overwhelming response, with over 115 paid registrations, highlighting the demand for data analytics skills in today's job market. Participants not only gained knowledge and skills but also enjoyed several perks. These perks included free lifetime access to resources, personalized letters of recommendation, and a prestigious certificate from IIM Bangalore, one of India's top management institutes. Additionally, the cohort boasted an impressive 90% internship rate, opening doors for practical experience and career advancement.",
            image: [Grey],
            date: '1st February, 2023',
        },
        {
            name: 'IMPORTANCE OF DATA-DRIVEN FINANCE AND HOW TO BREAK INTO THIS FIELD BY SRINIDHI RAGHAVENDRA, CEO OF MINT FINANCE',
            description: `Ashoka Data Society organized an insightful webinar titled "Importance of Data-Driven Finance and How to Break into This Field," featuring Srinidhi Raghavendra, the CEO of Mint Finance, as the distinguished speaker.\n Srinidhi Raghavendra, an industry expert with extensive experience in finance and data analytics, shared his expertise and insights with the attendees. The webinar explored various aspects, including the role of data- driven decision-making in finance, emerging trends, and the skills required to thrive in this evolving landscape. Participants had the opportunity to learn from Srinidhi Raghavendra's experiences and gain valuable insights into how data analytics is transforming the finance sector. The webinar also provided guidance on breaking into the field, highlighting the essential skills, educational background, and career pathways to consider.`,
            image: [Grey],
            date: '1st February, 2023',
        },
        {
            name: 'RED PEN MASTERCLASS ON ADMISSIONS FOR POSTGRADUATE STUDIES',
            description: `Ashoka Data Society yet again partnered with the Ed- Tech start-up Metvy to organize a comprehensive Finance cohort, providing participants with a unique learning experience. This cohort focused on equipping individuals with the necessary skills and knowledge to excel in the field of finance. The Finance cohort offered several valuable features to enhance participants' learning journey.\n Firstly, the cohort provided opportunities to learn from industry experts, who shared their insights and experiences through interactive sessions. Additionally, the cohort incorporated live projects, enabling participants to apply their newfound knowledge and skills in real-world scenarios. Upon successful completion of the cohort, participants received a certificate recognizing their achievement and proficiency in finance. Moreover, they had the opportunity to obtain personalized Letters of Recommendation (LORs), which could be valuable for future career prospects.`,
            image: [Grey],
            date: '1st February, 2023',
        },
        {
            name: 'FINANCE COHORT WITH METVY',
            description: `The speaker, Tripti Singh, shared valuable insights about the application processes and detailed on building the right profile. The event was well attended with lively discussions and doubt clarifications, making it an informative session for the attendees.\n`,
            image: [Grey],
            date: '1st February, 2023',
        },
        {
            name: 'FINANCE COHORT WITH METVY',
            description: `Ashoka Data Society yet again partnered with the Ed- Tech start-up Metvy to organize a comprehensive Finance cohort, providing participants with a unique learning experience. This cohort focused on equipping individuals with the necessary skills and knowledge to excel in the field of finance. The Finance cohort offered several valuable features to enhance participants' learning journey.\n Firstly, the cohort provided opportunities to learn from industry experts, who shared their insights and experiences through interactive sessions. Additionally, the cohort incorporated live projects, enabling participants to apply their newfound knowledge and skills in real-world scenarios. Upon successful completion of the cohort, participants received a certificate recognizing their achievement and proficiency in finance. Moreover, they had the opportunity to obtain personalized Letters of Recommendation (LORs), which could be valuable for future career prospects.`,
            image: [Grey],
            date: '1st February, 2023',
        },
        {
            name: 'ADE X EQUILIBRIUM FAMILY FEUD',
            description: `ADE, at the first Ashoka Economics Fest “Equilibrium”, organised an interactive activity inspired by the reality show “Family Feud”. This adapted version managed to gain a lot of traction from visitors bustling around the stall and playing out the game to win Theobroma Brownies. From engaging conversations to wild guesses for difficult questions, we saw it all at the stall!\n `,
            image: [Grey],
            date: '1st February, 2023',
        },
        {
            name: 'ADE X ABC CONVERSATION WITH SNEHIL JAIN, THE VICE PRESIDENT OF HSBC',
            description: `Ashoka Data Society, in collaboration with the Ashoka Business Club, organized an engaging conversation on "Marketing Analytics" featuring Snehil Jain, the Vice President of HSBC. The conversation aimed to provide participants with valuable insights into the field of marketing analytics and its applications in today's business landscape.\n During the conversation, Snehil Jain, an experienced professional in the finance and marketing domain, shared her expertise and perspectives on marketing analytics. Participants had the opportunity to learn about the importance of data- driven decision-making in marketing, the role of analytics in understanding customer behaviour and preferences, and the impact of analytics on marketing strategies.\n The conversation fostered interactive discussions, allowing participants to engage directly with Snehil Jain, and ask questions. It provided a platform for knowledge sharing and networking among like-minded individuals interested in marketing analytics. `,
            image: [Grey],
            date: '1st February, 2023',
        },
    ]

    const event = useLocation().state.event

    const [restEvents, setRestEvents] = useState([])

    useEffect(() => {
        let tempRestEvents = []
        Object.keys(events).forEach(key => {
            if (events[key].name != event.name) {
                tempRestEvents.push(events[key])
            }
        })
        setRestEvents(tempRestEvents)
    }, [])


    return (
        <>
            {restEvents.length > 0 &&
                <>
                    <div className="desktop">

                        <Grid.Container
                            css={{
                                alignItems: 'start'
                            }}
                        >
                            {/* Event */}
                            <Grid css={{
                                flexDirection: 'column',
                                jc: 'space-evenly',
                                alignItems: 'center',
                                width: '75%',
                                textAlign: 'center',
                                padding: '30px 0px 30px 0px',
                                height: 'max-content'
                            }}>
                                <Text css={{
                                    fontWeight: '$semibold',
                                    fontSize: '$4xl',
                                    padding: '0px 15% 0px 15%',
                                }}>
                                    {event.name}
                                </Text>
                                <Text css={{
                                    fontWeight: '$medium',
                                    fontSize: '$xl',
                                    padding: '0px 15% 20px 15%',
                                }}>
                                    {event.date}
                                </Text>
                                <Image
                                    src={event.image}
                                    width='50%'
                                    height={300}
                                    css={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        borderRadius: 10,
                                    }}
                                />
                                <Text css={{
                                    fontSize: '$lg',
                                    fontWeight: '$medium',
                                    padding: '30px 15% 30px 17%',
                                    textAlign: 'start',
                                }}>
                                    {event.description}
                                </Text>
                            </Grid>

                            {/* Other Events column */}
                            <Grid css={{
                                flexDirection: 'column',
                                width: '23%',
                                jc: 'center',
                                alignItems: 'center',
                                minWidth: '200px',
                                padding: '30px 0px',
                            }}>

                                <Text css={{
                                    fontSize: '$2xl',
                                    fontWeight: '$semibold',
                                    textAlign: 'center',
                                    borderWidth: '0px 0px 2px 0px',
                                    borderStyle: 'solid',
                                    borderColor: '$gray300'
                                }}>
                                    Other Events
                                </Text>

                                {restEvents.map((event, index) => {

                                    if (index < 5) {
                                        return (

                                            <Row css={{
                                                margin: '20px 0px',
                                                alignItems: 'center'
                                            }}>
                                                <Image src={event.image}
                                                    css={{
                                                        width: '100%',
                                                        height: '100%',
                                                        objectFit: 'cover',
                                                        borderRadius: 5,
                                                    }}
                                                    width={200}
                                                    height={100}
                                                />
                                                <Col css={{
                                                }}>
                                                    <Text className="multiline-ellipsis-3" css={{
                                                        padding: '0px 0px 0px 5px',
                                                        fontWeight: '$semibold',
                                                        fontSize: '$base'
                                                    }}>
                                                        {event.name}
                                                    </Text>
                                                </Col>
                                            </Row>

                                        )
                                    }


                                })}


                            </Grid>
                        </Grid.Container>

                    </div>
                    <div className="tablet">

                        <Grid.Container>
                            {/* Event */}
                            <Grid css={{
                                flexDirection: 'row',
                                jc: 'center',
                                alignItems: 'center',
                                width: '100%',
                                textAlign: 'center',
                                padding: '10px 0px 10px 0px',
                                height: 'max-content'
                            }}>
                                <Text css={{
                                    fontWeight: '$semibold',
                                    fontSize: '$4xl',
                                    padding: '0px 10% 0px 10%',
                                }}>
                                    {event.name}
                                </Text>
                                <Text css={{
                                    fontWeight: '$medium',
                                    fontSize: '$xl',
                                    padding: '0px 10% 20px 10%',
                                }}>
                                    {event.date}
                                </Text>
                                <Image
                                    src={event.image}
                                    width='70%'
                                    height={300}
                                    css={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        borderRadius: 10,
                                    }}
                                />
                                <Text css={{
                                    fontSize: '$lg',
                                    fontWeight: '$medium',
                                    padding: '30px 10% 30px 10%',
                                    textAlign: 'start',
                                }}>
                                    {event.description}
                                </Text>
                            </Grid>

                            {/* Other Events column */}
                            <Grid css={{
                                flexDirection: 'column',
                                width: '100%',
                                jc: 'center',
                                alignItems: 'center',
                                minWidth: '200px',
                                padding: '30px 15%',
                            }}>

                                <Text css={{
                                    fontSize: '$2xl',
                                    fontWeight: '$semibold',
                                    textAlign: 'center',
                                    borderWidth: '0px 0px 2px 0px',
                                    borderStyle: 'solid',
                                    borderColor: '$gray300'
                                }}>
                                    Other Events
                                </Text>

                                {restEvents.map((event, index) => {

                                    if (index < restEvents.length) {
                                        return (

                                            <Row css={{
                                                margin: '20px 0px',
                                                alignItems: 'center'
                                            }}
                                                onClick={() => {
                                                    navigate(`/events/eventlink`, { state: { event } });
                                                }}
                                            >
                                                <Image src={event.image}
                                                    css={{
                                                        width: '100%',
                                                        height: '100%',
                                                        objectFit: 'cover',
                                                        borderRadius: 5,
                                                    }}
                                                    width={200}
                                                    height={100}
                                                />
                                                <Col css={{
                                                }}>
                                                    <Text className="multiline-ellipsis-3" css={{
                                                        padding: '0px 0px 0px 5px',
                                                        fontWeight: '$semibold',
                                                        fontSize: '$base'
                                                    }}>
                                                        {event.name}
                                                    </Text>
                                                </Col>
                                            </Row>

                                        )
                                    }


                                })}


                            </Grid>
                        </Grid.Container>

                    </div>

                    <div className="mobile">
                        <Grid.Container>
                            {/* Event */}
                            <Grid css={{
                                flexDirection: 'row',
                                jc: 'center',
                                alignItems: 'center',
                                width: '100%',
                                textAlign: 'center',
                                padding: '10px 0px 10px 0px',
                                height: 'max-content'
                            }}>
                                <Text css={{
                                    fontWeight: '$semibold',
                                    fontSize: '$4xl',
                                    padding: '0px 10% 0px 10%',
                                }}>
                                    {event.name}
                                </Text>
                                <Text css={{
                                    fontWeight: '$medium',
                                    fontSize: '$xl',
                                    padding: '0px 10% 20px 10%',
                                }}>
                                    {event.date}
                                </Text>
                                <Image
                                    src={event.image}
                                    width='70%'
                                    height={300}
                                    css={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        borderRadius: 10,
                                    }}
                                />
                                <Text css={{
                                    fontSize: '$lg',
                                    fontWeight: '$medium',
                                    padding: '30px 10% 30px 10%',
                                    textAlign: 'start',
                                }}>
                                    {event.description}
                                </Text>
                            </Grid>

                            {/* Other Events column */}
                            <Grid css={{
                                flexDirection: 'column',
                                width: '100%',
                                jc: 'center',
                                alignItems: 'center',
                                minWidth: '200px',
                                padding: '30px 5%',
                            }}>

                                <Text css={{
                                    fontSize: '$2xl',
                                    fontWeight: '$semibold',
                                    textAlign: 'center',
                                    borderWidth: '0px 0px 2px 0px',
                                    borderStyle: 'solid',
                                    borderColor: '$gray300'
                                }}>
                                    Other Events
                                </Text>

                                {restEvents.map((event, index) => {

                                    if (index < restEvents.length) {
                                        return (

                                            <Row css={{
                                                margin: '20px 0px',
                                                alignItems: 'center'
                                            }}
                                                onClick={() => {
                                                    navigate(`/events/eventlink`, { state: { event } });
                                                }}
                                            >
                                                <Image src={event.image}
                                                    css={{
                                                        width: '100%',
                                                        height: '100%',
                                                        objectFit: 'cover',
                                                        borderRadius: 5,
                                                    }}
                                                    width={200}
                                                    height={100}
                                                />
                                                <Col css={{
                                                }}>
                                                    <Text className="multiline-ellipsis-3" css={{
                                                        padding: '0px 0px 0px 5px',
                                                        fontWeight: '$semibold',
                                                        fontSize: '$base'
                                                    }}>
                                                        {event.name}
                                                    </Text>
                                                </Col>
                                            </Row>

                                        )
                                    }


                                })}


                            </Grid>
                        </Grid.Container>
                    </div>

                </>
            }
        </>
    )
}