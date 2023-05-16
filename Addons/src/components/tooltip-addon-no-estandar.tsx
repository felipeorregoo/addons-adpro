import { Tooltip, IconButton } from "@mui/material";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
export default function TooltipAddonNoEstandar() {
    return(
        <Tooltip
                                title="Addon no estándar, configurable desde encuestas de configuración, afecta procesos de integración contable y/o solo se activa para esquemas de negocio específicos."
                                placement="top"
                                arrow>
                                <IconButton
                                ><InfoOutlinedIcon color="primary" />
                                </IconButton>
                                </Tooltip>
    )
}