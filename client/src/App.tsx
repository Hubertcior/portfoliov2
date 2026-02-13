import './App.css'
import { ApiStatus } from './components/organisms/ApiStatus'
import { Bio } from './components/organisms/Bio'
import { Profile } from './components/organisms/Profile'
import { Resume } from './components/organisms/Resume'
import { InteractiveApiConsole } from './components/organisms/InteractiveApiConsole'
import { ProjectSection } from './components/organisms/ProjectSection'
import { TechStack } from './components/organisms/TechStack'
import MatrixBackground from './components/organisms/MatrixBackground'

function App() {
  return (
    <div className='flex flex-col gap-12 p-4 md:p-10 min-h-screen text-white w-full overflow-x-hidden'>

      <MatrixBackground fontSize={16} color="#0F0" speed={60} />

      <div className='flex flex-col md:flex-row gap-12 items-start justify-center w-full'>

        <div className='flex flex-col gap-10'>
          <Profile/>
          <Resume/>
          <TechStack/>
          <ApiStatus/>
        </div>

        <div className='flex flex-col gap-10 w-full md:flex-1'>
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