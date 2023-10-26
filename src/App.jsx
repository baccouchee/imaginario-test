import { useRef } from 'react'
import LayoutProvider from './layout'
import Edit from './sections/edit/edit.section'
import NavigationBar from './sections/navigation/navigation.section'
import MainWaveSection from './sections/wave/main/main.section'
function App() {
  const videoRef = useRef()
  return (
    <LayoutProvider>
      <main className="flex flex-col bg-dark ml-3 p-4">
        <NavigationBar />
        <div className="flex mt-4">
          <Edit videoRef={videoRef} />
        </div>
        <div className="flex mt-4">
          <MainWaveSection videoRef={videoRef} />
        </div>
      </main>
    </LayoutProvider>
  )
}

export default App
