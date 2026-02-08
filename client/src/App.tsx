import './App.css'
import { ApiStatus } from './components/organisms/ApiStatus'
import { Bio } from './components/organisms/Bio'
import { Profile } from './components/organisms/Profile'
import { Resume } from './components/organisms/Resume'
import { InteractiveApiConsole } from './components/organisms/InteractiveApiConsole'
import { ProjectSection } from './components/organisms/ProjectSection'

function App() {
  return (
    <div className='flex flex-col gap-12 p-10 min-h-screen text-white w-full'>
      
      <div className='flex flex-row gap-12 items-start justify-center w-full'>
        
        <div className='flex flex-col gap-10 w-1/3'>
          <Profile/>
          <Resume/>
          <ApiStatus/>
        </div>

        <div className='flex flex-col gap-10 flex-1'>
          <Bio/>
          <ProjectSection/>
          <InteractiveApiConsole />
        </div>

      </div>
      
      <div className='w-full'>
      </div>

    </div>
  )
}

export default App