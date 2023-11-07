import { createTheme } from "@mui/material/styles";
import Colors from "./colors";

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
    background: {
      default: Colors.background,
    },
  },
});

export default theme;
