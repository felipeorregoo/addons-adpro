import { Box } from "@mui/material";
import CardItem from "./Card-Item";
import { useAddonsContext } from "../../hooks/Json-Hook";

export default function CardList() {

    const addonsDataList = useAddonsContext();

    return (<Box>
        {addonsDataList.map((cardProps) => (<>
            <CardItem cardProps={cardProps} />
        </>))}
    </Box>)
}