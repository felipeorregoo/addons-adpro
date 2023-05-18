import { Snackbar, Box, Button, Dialog, DialogTitle, DialogContent, DialogActions, Typography, Divider, Alert, Checkbox, TextField, Chip } from "@mui/material"
import React from "react"
import WarningIcon from '@mui/icons-material/Warning';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import InfoIcon from '@mui/icons-material/Info';
export default function ActualizacionAddon() {

    const [openActivate, setOpenActivate] = React.useState(false)

    const handleOpenActivate = () => {
        setOpenActivate(true)
    }

    const handleCloseActivate = () => {
        setOpenActivate(false)
    }

    const [activateCheck1, setActivateCheck1] = React.useState(false)

    const handleCheck1 = () => {
        setActivateCheck1(true)
    }

    const handleDeactivateCheck1 = () => {
        setActivateCheck1(false)
    }

    const [activateCheck2, setActivateCheck2] = React.useState(false)

    const handleCheck2 = () => {
        setActivateCheck2(true)
    }
    const handleDeactivateCheck2 = () => {
        setActivateCheck2(false)
    }

    const [openSnack, setOpenSnack] = React.useState(false)

    const handleOpenSnack = () => {
        setOpenSnack(true)
    }

    return (<>
        <Button variant="text" onClick={() => handleOpenActivate()}>Activar</Button>
        <Dialog
            fullWidth
            open={openActivate}
            onClose={handleCloseActivate}
        >
            <DialogTitle>
                <Typography variant="h6" color="text.primary">Actualización</Typography>
            </DialogTitle>
            <DialogContent sx={{ display: "flex", flexDirection: "column", gap: "8px" }} >
                <Typography variant="subtitle2" color="primary">Modo de activación</Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Checkbox
                            onChange={() => {
                                handleCheck1();
                                handleDeactivateCheck2()
                            }}
                            checked={
                                activateCheck1
                            } />
                        <Typography>MAC</Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Checkbox
                            onChange={() => {
                                handleCheck2();
                                handleDeactivateCheck1()
                            }}
                            checked={
                                activateCheck2
                            } />
                        <Typography>DOA</Typography>
                    </Box>
                </Box>
                {activateCheck1 &&
                    <Alert icon={<InfoIcon fontSize="medium" />} severity="info">
                        <Typography variant="body2" color="text.primary">
                            Genera la migración inmediata de los accesos
                        </Typography>
                    </Alert>}
                {activateCheck2 &&
                    <Alert icon={<WarningIcon fontSize="medium" />} severity="warning">
                        <Typography variant="body2" color="text.primary">
                            Desactiva opciones antiguas y migra accesos
                        </Typography>
                    </Alert>}
                <Divider />
                <Typography variant="subtitle2" color="primary">Tipo de producción</Typography>
                <Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Checkbox />
                        <Typography>Sinco</Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Checkbox />
                        <Typography>SincoConsolidacion</Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Checkbox />
                        <Typography>SincoPrueba</Typography>
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button variant="text" onClick={handleCloseActivate}>
                    Cancelar
                </Button>

                <Button variant="contained" onClick={() => { handleCloseActivate(); handleOpenSnack() }}>
                    Activar
                </Button>
            </DialogActions>
        </Dialog>
        <Snackbar
            open={openSnack}
            autoHideDuration={3000}
            onClose={() => setOpenSnack(false)}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
            <Alert
                icon={<CheckCircleIcon fontSize="medium" />}
                severity="success"
            >
                Addón actualizado con exito
            </Alert>
        </Snackbar>
    </>)
}