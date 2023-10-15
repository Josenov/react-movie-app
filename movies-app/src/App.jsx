
import Navbar from "./components/Navbar"
import { AuthContextProvider, UserAuth, } from './context/AuthContext'
import MyRoutes from "./routers/MyRoutes"










function App() {

 


  return (
    <>

      <AuthContextProvider>
        <Navbar />
        <MyRoutes/>
          


      </AuthContextProvider>







    </>
  )
}

export default App
