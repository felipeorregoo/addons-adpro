import { Box, Typography } from "@mui/material";
import ActivacionAddon from "../activación";
import CardDialogs from "./Card-Dialog";
import TooltipAddonNoEstandar from "../tooltip-addon-no-estandar";
import TooltipModuloRequerido from "../tooltip-modulo-requerido";
export default function AddonCardHeader({ cardProps }) {

    const { AddonNo,
        AddonNombre,
        Colornivel1 } = cardProps

    return (<Box sx={{
        width: "716px",
        display: "flex",
        justifyContent: "space-between",
        gap: "8px",
        alignItems: "center",
    }}>
        <Box sx={{
            display: "flex",
            gap: "4px",
            alignItems: "center"
        }}>
            <Box sx={{
                display: "flex",
                alignItems: "center",
                gap: "4px"
            }}>
                <Typography variant="subtitle2" color="text.primary">
                    {AddonNo} {AddonNombre}
                </Typography>
                {Colornivel1 === "GREEN" && <TooltipAddonNoEstandar />}
                <TooltipModuloRequerido />
            </Box>
        </Box>
        {/* Activación / Actualización */}
        {Colornivel1 === "RED" &&
            <Box sx={{ ml: "auto" }}>
                <ActivacionAddon />

                {/* <ActualizacionAddon/> */}
            </Box>}
        {/* /Activación / Actualización */}
        {/* More Menu */}
        <CardDialogs cardProps={cardProps} />
        {/* /More menu */}
    </Box>)
}