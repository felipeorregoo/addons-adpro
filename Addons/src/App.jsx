import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Addons from "./Pages/Addons";

function App() {
  return (<>
    {/* Available workspace = 1224x578 */}
    <Box sx={{ width: "1224px", height: "578px" }}>
      <Routes>
        <Route path="/" element={<Addons />} />
      </Routes>
    </Box>
  </>);
}

export default App;
