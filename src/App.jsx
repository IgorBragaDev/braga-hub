import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { RouterMain } from "./routes/routes";
import { GlobalStyle } from "./styles/globalStyles";
import { GlobalProvider } from "./providers";

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <GlobalStyle />
        <RouterMain />
        <ToastContainer />
      </GlobalProvider>
    </div>
  );
}

export default App;
