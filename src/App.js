import logo from "./logo.svg";
import "./App.css";
import Dashborad from "./pages/Dashborad";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return(
    <Provider store={store}>
      <div>
        <Dashborad />
      </div>;
    </Provider>
  )
}

export default App;
