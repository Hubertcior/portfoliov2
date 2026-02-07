import './App.css'
import { ApiStatus } from './components/organisms/ApiStatus'
import { Bio } from './components/organisms/Bio'
import { InteractiveApiConsole } from './components/organisms/InteractiveApiConsole'
import { Profile } from './components/organisms/Profile'
import { SystemArchitecture } from './components/organisms/SystemArchitecture'

function App() {
  return (
    <div className='flex flex-col gap-12 p-10 min-h-screen text-white w-full'>
      
      <div className='flex flex-row gap-12 items-start justify-center w-full'>
        
        <div className='flex flex-col gap-10 w-1/3'>
          <Profile/>
          <ApiStatus/>
        </div>

        <div className='flex flex-col gap-10 flex-1'>
          <SystemArchitecture/>
          <InteractiveApiConsole/>
        </div>

      </div>
      
      <div className='w-full'>
        <Bio/>
      </div>

    </div>
  )
}

export default App