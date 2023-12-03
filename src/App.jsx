import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { RouterMain } from "./routes/routes";
import { GlobalStyle } from "./styles/globalStyles";
import { UserProvider } from "./providers/userprovider";
import { TechProvider } from "./providers/techProvider";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <TechProvider>
          <GlobalStyle />
          <RouterMain />
        </TechProvider>
        <ToastContainer />
      </UserProvider>
    </div>
  );
}

export default App;
