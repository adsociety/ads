import React, { useEffect, useState } from 'react';
import { Grid, Image, Row, Col, Text, Loading, Input, Link } from '@nextui-org/react';
import Grey from '../assets/images/Grey.jpeg';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function EventsPage() {
    const [publishedPosts, setPublishedPosts] = useState();
    const [dateLatest, setDateLatest] = useState(true);
    const [posts, setPosts] = useState([]);
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


    return (
        <div className="home">
            <div className="desktop">
                <Grid.Container css={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '20px',
                    flexDirection: 'column'
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
                            margin: '24px 0px 0px 0px',
                        }}
                    >
                        ADS Events
                    </Text>

                    <Grid.Container
                        css={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '0px 20px'
                        }}
                    >

                        {events.map((event, index) => (
                            <Grid
                                css={{
                                    m: '24px',
                                    maxW: '850px',
                                    maxH: '300px',
                                    backgroundColor: 'white',
                                    '&:hover': {
                                        cursor: 'pointer',
                                    },
                                }}
                                key={index}
                                onClick={() => {
                                    navigate(`/events/eventlink`,{state: {event}});
                                }}
                            >
                                <Row css={{
                                    alignItems: 'center'
                                }}>
                                    <Image
                                        src={event.image}
                                        width={300}
                                        css={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            borderRadius: 10,
                                        }}
                                    />
                                    <Col
                                        css={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'stretch',
                                            jc: 'space-evenly',
                                            padding: '12px 0px', // Adjusted padding for spacing
                                            // height: '180px',   // Removed fixed height
                                        }}
                                    >
                                        <Text
                                            className="multiline-ellipsis"
                                            css={{
                                                fontWeight: '$semibold',
                                                fontSize: '$lg',
                                                padding: '6px 0px 2px 0px',
                                                margin: '0px 24px 0px 24px',
                                                borderStyle: 'solid',
                                                borderWidth: '0px 0px 1px 0px',
                                                borderColor: '$red200',
                                                '&:hover':{
                                                    textDecoration: 'underline'
                                                },
                                            }}
                                        >
                                            {event.name}
                                        </Text>
                                        <Text
                                            className="multiline-ellipsis-3"
                                            css={{
                                                fontWeight: '$normal',
                                                fontSize: '$lg',
                                                padding: '6px 24px',
                                                minWidth: '75px',
                                                '&:hover':{
                                                    textDecoration: 'underline'
                                                },
                                            }}
                                        >
                                            {event.description}
                                        </Text>
                                        <Text
                                            css={{
                                                fontWeight: '$semibold',
                                                fontSize: '$lg',
                                                padding: '2px 0px 0px 0px',
                                                margin: '0px 24px 0px 24px',
                                                borderStyle: 'solid',
                                                borderWidth: '1px 0px 0px 0px',
                                                borderColor: '$red200',
                                                width: 'max-content',
                                            }}
                                        >
                                            {event.date}
                                        </Text>
                                    </Col>
                                </Row>
                            </Grid>
                        ))}

                    </Grid.Container>
                </Grid.Container>
            </div>

            <div className='tablet'>
                <Grid.Container css={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '20px',
                    flexDirection: 'column'
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
                            margin: '24px 0px 0px 0px',
                        }}
                    >
                        ADS Events
                    </Text>

                    <Grid.Container
                        css={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '0px 20px'
                        }}
                    >

                        {events.map((event, index) => (
                            <Grid
                                css={{
                                    m: '24px',
                                    maxW: '850px',
                                    maxH: '300px',
                                    backgroundColor: 'white',
                                    '&:hover': {
                                        cursor: 'pointer',
                                    },
                                }}
                                key={index}
                                onClick={() => {
                                    navigate(`/events/eventlink`, {event});
                                }}
                            >
                                <Row css={{
                                    alignItems: 'center'
                                }}>
                                    <Image
                                        src={event.image}
                                        width={300}
                                        css={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            borderRadius: 10
                                        }}
                                    />
                                    <Col
                                        css={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'stretch',
                                            jc: 'space-evenly',
                                            padding: '12px 0px', // Adjusted padding for spacing
                                            // height: '180px',   // Removed fixed height
                                        }}
                                    >
                                        <Text
                                            className="multiline-ellipsis"
                                            css={{
                                                fontWeight: '$semibold',
                                                fontSize: '$lg',
                                                padding: '6px 0px 2px 0px',
                                                margin: '0px 24px 0px 24px',
                                                borderStyle: 'solid',
                                                borderWidth: '0px 0px 1px 0px',
                                                borderColor: '$red200',
                                            }}
                                        >
                                            {event.name}
                                        </Text>
                                        <Text
                                            className="multiline-ellipsis-3"
                                            css={{
                                                fontWeight: '$normal',
                                                fontSize: '$lg',
                                                padding: '6px 24px',
                                                minWidth: '75px',
                                            }}
                                        >
                                            {event.description}
                                        </Text>
                                        <Text
                                            css={{
                                                fontWeight: '$semibold',
                                                fontSize: '$lg',
                                                padding: '2px 0px 0px 0px',
                                                margin: '0px 24px 0px 24px',
                                                borderStyle: 'solid',
                                                borderWidth: '1px 0px 0px 0px',
                                                borderColor: '$red200',
                                                width: 'max-content',
                                            }}
                                        >
                                            {event.date}
                                        </Text>
                                    </Col>
                                </Row>
                            </Grid>
                        ))}

                    </Grid.Container>
                </Grid.Container>
            </div>


            <div className="mobile">
                <Grid.Container css={{ jc: 'center' }}>
                    <Col
                        css={{
                            display: 'flex',
                            flexDirection: 'column',
                            jc: 'center',
                        }}
                    >
                        <Text
                            css={{
                                fontWeight: '$semibold',
                                '@xsMax': {
                                    fontSize: '$2xl',
                                },
                                '@xsMin': {
                                    fontSize: '$3xl',
                                },
                                textAlign: 'center',
                                margin: '24px 0px 0px 0px',
                            }}
                        >
                            ADS Events
                        </Text>
                    </Col>

                    {events && (
                        <>
                            {events.map((event, index) => (
                                <Grid
                                    css={{
                                        m: '24px',
                                        width: '100%',
                                        maxH: '700px',
                                        backgroundColor: 'white',
                                        '&:hover': {
                                            cursor: 'pointer',
                                        },
                                        paddingBottom: '12px',
                                    }}
                                    key={index}
                                    onClick={()=>{
                                        navigate(`/events/eventlink`, {event});
                                    }}
                                >
                                    <Col>
                                        <Image
                                            src={Grey}
                                            width={350}
                                            height={250}
                                            css={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                borderRadius: 10
                                            }}
                                        />
                                        <Text
                                            className="multiline-ellipsis"
                                            css={{
                                                fontWeight: '$semibold',
                                                fontSize: '$lg',
                                                padding: '6px 0px 2px 0px',
                                                margin: '0px 24px 0px 24px',
                                                borderStyle: 'solid',
                                                borderWidth: '0px 0px 1px 0px',
                                                borderColor: '$red200',
                                            }}
                                        >
                                            {event.name}
                                        </Text>
                                        <Text
                                            className="multiline-ellipsis-6"
                                            css={{
                                                fontWeight: '$normal',
                                                fontSize: '$lg',
                                                padding: '6px 24px',
                                                minWidth: '75px',
                                            }}
                                        >
                                            {event.description}
                                        </Text>
                                        <Text
                                            css={{
                                                fontWeight: '$semibold',
                                                fontSize: '$lg',
                                                padding: '2px 0px 0px 0px',
                                                margin: '0px 24px 0px 24px',
                                                borderStyle: 'solid',
                                                borderWidth: '1px 0px 0px 0px',
                                                borderColor: '$red200',
                                                width: 'max-content',
                                            }}
                                        >
                                            {event.date}
                                        </Text>
                                    </Col>
                                </Grid>
                            ))}
                        </>
                    )}
                </Grid.Container>
            </div>

        </div>
    );
}