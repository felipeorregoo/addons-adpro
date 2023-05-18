import { Box } from "@mui/material";
import CardItem from "./Card-Item";

export default function CardList({addonList}) {
    return (<Box>
        {addonList.map((cardProps) => (<>
            <CardItem cardProps={cardProps} />
        </>))}
    </Box>)
}