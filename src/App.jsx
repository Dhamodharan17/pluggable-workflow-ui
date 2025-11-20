import { Provider, useSelector } from "react-redux";
import AppRouter from "./routes/AppRouter";
import store from "./store/store"
import { GlobalStyles } from "./style/GlobalStyles";
import { lightTheme, darkTheme } from "./style/theme";
import { ThemeProvider } from "styled-components";

const ThemedApp = () => {
  const themeMode = useSelector((state) => state.theme.mode);

  return (
    <ThemeProvider theme={themeMode === "light" ? lightTheme : darkTheme}>   {/* Theme config */}
      <GlobalStyles />          {/* Global style config */}
      <AppRouter/>              {/* BrowserRouter applied */}
    </ThemeProvider>
  );
};

const App = () => (
  <Provider store = {store}>    {/* provider for redux store */}
    <ThemedApp />
  </Provider>
);

export default App;
