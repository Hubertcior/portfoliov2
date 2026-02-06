import './App.css'
import { ApiStatus } from './components/organisms/ApiStatus'
import { InteractiveApiConsole } from './components/organisms/InteractiveApiConsole'
import { Profile } from './components/organisms/Profile'
import { SystemArchitecture } from './components/organisms/SystemArchitecture'

function App() {
  return (
    <div className='flex flex-row'> 
      <Profile/>
      <ApiStatus/>
      <div>
      <InteractiveApiConsole/>
     <SystemArchitecture/>
     </div>
    </div>
  )
}


export default App
