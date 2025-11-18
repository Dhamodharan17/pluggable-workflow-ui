import { Provider } from "react-redux";
import AppRouter from "./routes/AppRouter";
import store from "./store/store"

const App = () => (
  <Provider store = {store}>    {/* provider for redux store */}
    <AppRouter/>                {/* BrowserRouter applied */}
  </Provider>
);

export default App
