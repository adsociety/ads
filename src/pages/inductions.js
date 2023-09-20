import { Grid, Text } from "@nextui-org/react";
import React from "react";

export default function Inductions() {
    return (
        <Grid.Container css={{
            padding: '0 5%',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '24px 0px 0px 0px',
            display: 'flex',
            flexDirection: 'column',
        }}>

            <Text css={{
                fontWeight: '$semibold',
                '@xsMax': {
                    fontSize: '$xl',
                },
                '@xsMin': {
                    fontSize: '$3xl',
                },
                textAlign: 'center',
                margin: '24px 0px 12px 0px',
            }}>
                Society Inductions
            </Text>

            <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSdmOYJ6GNLB244VeWbbLSBLowYTbx2W5FxXp_xo028bjSldIw/viewform?embedded=true"
                width="100%"
                height="1990px"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
            >
                Loading…
            </iframe>

        </Grid.Container>
    )
}