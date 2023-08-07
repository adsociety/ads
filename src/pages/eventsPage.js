import { Grid, Text } from "@nextui-org/react";
import React from "react";
import Grey from '../assets/images/Grey.jpeg';

export default function EventsPage(){

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

    return(
        <Grid.Container>
            <Grid>
                <Text>
                    EVENTS
                </Text>
            </Grid>
        </Grid.Container>
    )
}