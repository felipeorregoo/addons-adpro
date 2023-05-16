import { Box, Button, Dialog, DialogTitle, DialogContent, DialogActions, Typography, Divider, Alert, Checkbox, TextField, Chip, Snackbar, FormControl, InputLabel, Select, SelectChangeEvent, MenuItem, InputAdornment, IconButton } from "@mui/material"
import { useState, ChangeEvent } from "react"
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import InfoIcon from '@mui/icons-material/Info';
import WarningIcon from '@mui/icons-material/Warning';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function ActivacionAddon() {

    const [openActivate, setOpenActivate] = useState(false)

    const handleOpenActivate = () => {
        setOpenActivate(true)
    }

    const handleCloseActivate = () => {
        setOpenActivate(false)
    }

    const [openActivate2, setOpenActivate2] = useState(false)

    const [activateCheck1, setActivateCheck1] = useState(false)

    const handleCheck1 = () => {
        setActivateCheck1(true)
    }

    const handleDeactivateCheck1 = () => {
        setActivateCheck1(false)
    }

    const [activateCheck2, setActivateCheck2] = useState(false)

    const handleCheck2 = () => {
        setActivateCheck2(true)
    }
    const handleDeactivateCheck2 = () => {
        setActivateCheck2(false)
    }

    const [activateCheck3, setActivateCheck3] = useState(false)

    const handleCheck3 = (event: ChangeEvent<HTMLInputElement>) => {
        setActivateCheck3(event.target.checked);
    };

    const [openSnack, setOpenSnack] = useState(false)

    const handleOpenSnack = () => {
        setOpenSnack(true)
    }

    const [hdMenu, setHdMenu] = useState('');

    const handleSelectChange = (event: SelectChangeEvent) => {
        setHdMenu(event.target.value as string);
    }

    return (<>
        <Button variant="text" onClick={() => handleOpenActivate()}>Activar</Button>
        <Dialog
            fullWidth
            open={openActivate}
            onClose={handleCloseActivate}
        >
            <DialogTitle>
                <Typography variant="h6" color="text.primary">Activación</Typography>
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

                <Button variant="contained" onClick={() => { setOpenActivate(false); setOpenActivate2(true) }}>
                    Activar
                </Button>
            </DialogActions>
        </Dialog>
        <Dialog
            fullWidth
            open={openActivate2}
            onClose={() => setOpenActivate2(false)}
        >
            <DialogTitle>
                <Typography variant="h6" color="text.primary">
                    Confirmación
                </Typography>
            </DialogTitle>
            <DialogContent sx={{
                display: "flex",
                flexDirection: "column",
                gap: "12px"
            }}>
                <Alert icon={<InfoIcon fontSize="medium" />} severity="info">
                    <Typography variant="body2" color="text.primary">
                        Activación del Addon Migración de datos iniciales: agrupaciones, tipos de insumo y unidades de medida.
                    </Typography>
                </Alert>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Hd asociado</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={hdMenu}
                        label="Hd asociado"
                        onChange={handleSelectChange}
                    >
                        <MenuItem value={1}>Hd no.1</MenuItem>
                        <MenuItem value={2}>Hd no.2</MenuItem>
                        <MenuItem value={3}>Hd no.3</MenuItem>
                        <MenuItem value={4}>Hd no.4</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    inputProps={{
                        style: {
                            height: "68px",
                        },
                    }}
                    fullWidth
                    label="Observaciones"
                    type="text"
                >
                </TextField>
                <Divider />
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Checkbox
                        onChange={handleCheck3}
                        checked={activateCheck3}
                    />
                    <Typography variant="body2" color="text.primary">Enviar por correo electrónico para facturación</Typography>
                </Box>
                {activateCheck3 &&

                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "12px"
                    }}>

                        <TextField
                            fullWidth
                            label="Para:"
                            defaultValue="sergio.vergara@sinco.com.co"
                            InputProps={{
                                style: {
                                    height: "38px",
                                },
                                startAdornment:
                                    <InputAdornment
                                        position="start">
                                        <Chip
                                            size="small"
                                            label="viviana.contreras@sinco.com.co"
                                        />
                                    </InputAdornment>,
                            }}
                        />
                        <TextField
                            fullWidth
                            label="De:" InputProps={{
                                style: {
                                    height: "38px",
                                },
                                startAdornment:
                                    <InputAdornment
                                        position="start">
                                        <Chip
                                            size="small"
                                            label="carlos.cipagauta@sinco.com.co"
                                        />
                                    </InputAdornment>,
                            }}
                        />
                        <Box sx={{ display: "flex", gap: "12px", alignItems: "center" }}>
                            <Box sx={{ display: "flex", gap: "4px", alignItems: "center" }}>
                                <IconButton>
                                    <InfoOutlinedIcon></InfoOutlinedIcon>
                                </IconButton>
                                <Typography variant="subtitle2" color="text.primary">Entorno principal:</Typography>
                                <Typography variant="body2" color="text.primary">00:00 p.m.</Typography>
                            </Box>
                            <Divider orientation="vertical" sx={{ height: "18px" }} />
                            <Box sx={{ display: "flex", gap: "4px", alignItems: "center" }}>
                                <IconButton>
                                    <InfoOutlinedIcon></InfoOutlinedIcon>
                                </IconButton>
                                <Typography variant="subtitle2" color="text.primary">Base de datos:</Typography>
                                <Typography variant="body2" color="text.primary">00:00 p.m.</Typography>
                            </Box>
                            <Divider orientation="vertical" sx={{ height: "18px" }} />
                            <Box sx={{ display: "flex", gap: "4px", alignItems: "center" }}>
                                <Typography variant="subtitle2" color="text.primary">Total:</Typography>
                                <Typography variant="body2" color="text.primary">0</Typography>
                            </Box>
                        </Box>
                    </Box>
                }
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setOpenActivate2(false)} variant="text">Cancelar</Button>
                <Button onClick={() => { setOpenActivate2(false); handleOpenSnack() }} variant="contained">Aceptar</Button>
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
                Addón activado con exito
            </Alert>
        </Snackbar>
    </>)
}