import './App.css'
import { InteractiveApiConsole } from './components/organisms/InteractiveApiConsole'
import { Profile } from './components/organisms/Profile'

function App() {
  return (
    <div className='flex flex-row'>
      <Profile/>
     <InteractiveApiConsole/>
    </div>
  )
}

export default App
