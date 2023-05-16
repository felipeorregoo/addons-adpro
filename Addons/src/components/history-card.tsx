import React from "react"
import { Card, CardContent, Box, Typography, IconButton } from "@mui/material"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';


export default function HistoryCard() {

    const [expandText, setExpandText] = React.useState(false);

    const HandleClickExpandText = () => {
        setExpandText(true);
    }

    const HandleClickExpandLessText = () => {
        setExpandText(false);
    }

    return (
        <Card sx={{ width: "538px"}}>
            <CardContent sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Box sx={{ display: "flex" }}>
                        <Box sx={{ display: "flex", gap: "4px", width: "253px" }}>
                            <Typography variant="subtitle2" color="primary">Usuario:</Typography>
                            <Typography variant="body2" color="text.primary">SINCO/Carlos</Typography>
                        </Box>
                        <Box sx={{ display: "flex", gap: "4px" }}>
                            <Typography variant="subtitle2" color="primary">Fecha:</Typography>
                            <Typography variant="body2" color="text.primary">01/01/2023</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                        <Box sx={{ display: "flex", gap: "4px", width: "252px" }}>
                            <Typography variant="subtitle2" color="primary">HD:</Typography>
                            <Typography variant="body2" color="text.primary">7857</Typography>
                        </Box>
                        <Box sx={{ display: "flex", gap: "4px" }}>
                            <Box sx={{ display: "flex", gap: "4px" }}>
                                <RadioButtonUncheckedIcon />
                                <Typography variant="body1" color="text.primary">DOA</Typography>
                            </Box>
                            <Box sx={{ display: "flex", gap: "4px" }}>
                                <CheckCircleIcon color="success" />
                                <Typography variant="body1" color="text.primary">RIA</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <Typography variant="subtitle2" color="primary">Descripción:</Typography>
                    {!expandText &&
                        <Box sx={{ display: "flex" }}>
                            <Typography variant="body2" color="text.primary">
                                Lorem ipsum dolor sit amet consectetur. Morbi eu sed ultrices vel. Risus tempor consectetur in sit. Aenean justo eget erat erat convallis. Id sed
                            </Typography>
                            <IconButton onClick={() => { HandleClickExpandText() }}>
                                <ExpandMoreIcon color="primary" />
                            </IconButton>
                        </Box>
                    }
                    {expandText &&
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Typography variant="body2" color="text.primary">
                                Lorem ipsum dolor sit amet consectetur. Morbi eu sed ultrices vel. Risus tempor consectetur in sit. Aenean justo eget erat erat convallis. Id sed Lorem ipsum dolor sit amet consectetur. Morbi eu sed ultrices vel. Risus tempor consectetur in sit. Aenean justo eget erat erat convallis. Id sed Lorem ipsum dolor sit amet consectetur. Morbi eu sed ultrices vel. Risus tempor consectetur in sit. Aenean justo eget erat erat convallis. Id sed Lorem ipsum dolor sit amet consectetur. Morbi eu sed ultrices vel. Risus tempor consectetur in sit. Aenean justo eget erat erat convallis. Id sed
                            </Typography>
                            <IconButton onClick={() => { HandleClickExpandLessText() }}>
                                <ExpandLessIcon color="primary" />
                            </IconButton>
                        </Box>
                    }
                </Box>
            </CardContent>
        </Card>
    )
}