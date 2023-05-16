import { Chip, Tooltip } from "@mui/material";

export default function TooltipModuloRequerido() {
    return(<Tooltip
        title="Módulo requerido"
        placement="top"
        arrow>
       <Chip
          
           size="small"
           variant="outlined"
           label="A&F"
           color="primary"
       />
       </Tooltip>)
}