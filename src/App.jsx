
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.min.css"
import { RouterMain } from './routes/routes'

function App() {
 

  return (
    <div className="App">
    <RouterMain/>
    <ToastContainer/>
    </div>
  )
}

export default App
