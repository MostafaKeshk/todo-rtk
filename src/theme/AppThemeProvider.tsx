import React, { ReactElement } from "react";
import { CssBaseline, ThemeProvider, GlobalStyles } from "@mui/material";

import theme from "./";

interface IProps {
  children: ReactElement;
}

const AppThemeProvider: React.FC<IProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={{}} />

      {children}
    </ThemeProvider>
  );
};

export default AppThemeProvider;
