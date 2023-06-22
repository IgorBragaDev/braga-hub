import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { RouterMain } from "./routes/routes";
import { GlobalStyle } from "./styles/globalStyles";
import { GlobalProvider } from "./providers";
import { UserProvider } from "./providers/userprovider";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <GlobalStyle />
        <RouterMain />
        <ToastContainer />
      </UserProvider>
    </div>
  );
}

export default App;
