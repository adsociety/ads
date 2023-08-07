import React, { useEffect, useState } from 'react';
import { Grid, Image, Row, Col, Text, Loading, Input, Link } from '@nextui-org/react';
import Grey from '../assets/images/Grey.jpeg';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function EventsPage(){
    const [publishedPosts, setPublishedPosts] = useState();
    const [dateLatest, setDateLatest] = useState(true);
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

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
      Events
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
            maxW: '900px',
            backgroundColor: 'white',
            '&:hover': {
              cursor: 'pointer',
            },
          }}
          key={index}
          onClick={() => {
            navigate(`/events/eventlink`);
          }}
        >
          <Row>
            <Image
              src={event.image}
              width={300}
              height={180}
              css={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
            <Col
              css={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'stretch',
                jc: 'space-evenly',
                padding: '12px 24px', // Adjusted padding for spacing
                // height: '180px',   // Removed fixed height
              }}
            >
              <Text
                className="multiline-ellipsis-3"
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
                className="multiline-ellipsis-2"
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
        Events
      </Text>
    </Col>

    {events && (
      <>
        {events.map((event, index) => (
          <Grid
            css={{
              m: '24px',
              width: '100%',
              backgroundColor: 'white',
              '&:hover': {
                cursor: 'pointer',
              },
              paddingBottom: '12px',
            }}
            key={index}
          >
            <Col>
              <Image
                src={Grey}
                width={'100%'}
                height={220}
                css={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
              <Text
                className="multiline-ellipsis-3"
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
                className="multiline-ellipsis-2"
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