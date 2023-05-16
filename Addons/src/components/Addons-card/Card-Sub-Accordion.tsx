import { Box, Accordion, AccordionSummary, Typography, Badge, AccordionDetails, TableContainer, Table, TableCell, TableHead, TableRow, TableBody } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
export default function SubAccordion({ cardProps }: { cardProps: any }) {

    const {
        Colornivel3,
        Tabla,
        Valor,
        ObsDet,
    } = cardProps

    return (<>
    {/* Able to map for more sub accordions */}
        <Box sx={{
            width: "766px",
            border: "1px solid rgba(16, 24, 64, 0.18)",
            borderRadius: "4px"
        }}>
            <Accordion>
                <AccordionSummary
                    sx={{
                        "$.Mui-expanded": { height: "58px" },
                        width: "757px",
                        display: "flex",
                        flexDirection: "row-reverse",
                        justifyContent: "space-between",
                        gap: "8px",
                        alignItems: "center"
                    }}
                    expandIcon={<ExpandMoreIcon
                        color="primary"

                    />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Box sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px"
                    }}>
                        <Typography
                            variant="subtitle2"
                            color="text.primary">
                            {Tabla === "dbo.ADPConfig"
                                && "ADPConfig" ||
                                Tabla === "dbo.Menus"
                                && "Menu"}

                        </Typography>
                        <Badge sx={{
                            ...(Colornivel3 === 'GREEN' && {
                                ".MuiBadge-badge": { backgroundColor: "#8FC93A!important" }

                            }),
                            ...(Colornivel3 === 'RED' && {
                                ".MuiBadge-badge": { backgroundColor: "#D14343!important" }
                            }),
                            left: "4px"
                        }}
                            variant="dot"
                            badgeContent=" "
                        >
                        </Badge>
                    </Box>
                </AccordionSummary>
                <AccordionDetails sx={{
                    "&.MuiAccordionDetails-root": { p: "0 16px 16px" }
                }}>
                    <Box sx={{
                        borderTop: "2px solid #f5f5f5",
                        borderTopStyle: "dashed"
                    }}></Box>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Descripción</TableCell>
                                    <TableCell align="center"><CheckCircleRoundedIcon /></TableCell>
                                    <TableCell align="center"><WarningRoundedIcon /></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {/* Able to map more rows for a table */}
                                <TableRow>
                                    <TableCell sx={{ width: "571.15px" }}>
                                        <Typography variant="body2"> {Valor} {ObsDet} </Typography>
                                    </TableCell>
                                    <TableCell align="center">
                                        {/* {checkeds} */}
                                        1
                                        </TableCell>
                                    <TableCell align="center">
                                        {/* {Errors} */}
                                        0
                                        </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </AccordionDetails>
            </Accordion>
        </Box>
    </>)
}