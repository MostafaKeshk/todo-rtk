import AppThemeProvider from "./theme/AppThemeProvider";
import Home from "./pages/Home";

const App = () => {
  return (
    <AppThemeProvider>
      <Home />
    </AppThemeProvider>
  );
};

export default App;
