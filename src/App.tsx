import { Provider } from "react-redux";
import store from "./store";

import AppThemeProvider from "./theme/AppThemeProvider";
import { AlertProvider } from "./context/AlertContext";

import Home from "./pages/Home";

const App = () => {
  return (
    <Provider store={store}>
      <AppThemeProvider>
        <AlertProvider>
          <Home />
        </AlertProvider>
      </AppThemeProvider>
    </Provider>
  );
};

export default App;
