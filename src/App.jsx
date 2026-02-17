import './App.css'
import { PetProvider, UserProvider } from './context'
import {AppRouter} from './AppRouter'

function App() {

  return (
    <>

      <UserProvider>
        <PetProvider>
          <AppRouter></AppRouter>

        </PetProvider>

      </UserProvider>

      
    </>
  )
}

export default App
