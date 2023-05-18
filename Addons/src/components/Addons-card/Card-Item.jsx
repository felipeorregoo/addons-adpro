import { Box, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { useState } from "react";
import SubAccordion from "./Card-Sub-Accordion";
import AddonCardHeader from "./Card-Header";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
export default function CardItem({ cardProps }) {

    const [expand, setExpand] = useState(false);

    const toggleAccordion = () => {
        setExpand((prev) => !prev);
    };

    return (<>
        <Box sx={{ mb: "4px" }}>
            <Accordion
                expanded={expand}
                sx={{
                    width: "779,6px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    ...(cardProps.Colornivel1 === 'GREEN' && {
                        borderLeft: "10px solid #8FC93A"
                    }),
                    ...(cardProps.Colornivel1 === 'RED' && {
                        borderLeft: "10px solid #D14343"
                    }),
                }}>
                <AccordionSummary
                    sx={{
                        width: "757px",
                        display: "flex",
                        flexDirection: "row-reverse",
                        justifyContent: "space-between",
                        gap: "8px",
                        alignItems: "center",
                        "&.Mui-expanded": { minHeight: "48px", height: "48px" }
                    }}
                    expandIcon={<ExpandMoreIcon
                        color="primary"
                        onClick={toggleAccordion}
                    />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <AddonCardHeader cardProps={cardProps} />

                </AccordionSummary>
                <AccordionDetails sx={{
                    p: "0px 8px 16px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px"
                }}>

                    <SubAccordion cardProps={cardProps} />

                </AccordionDetails>
            </Accordion>
        </Box>
    </>)
}