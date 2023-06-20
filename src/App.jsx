import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { RouterMain } from "./routes/routes";
import { GlobalStyle } from "./styles/globalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <RouterMain />
      <ToastContainer />
    </div>
  );
}

export default App;
