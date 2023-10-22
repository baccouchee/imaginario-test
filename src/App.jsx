import LayoutProvider from './layout'
import Edit from './sections/edit/edit.section'
import NavigationBar from './sections/navigation/navigation.section'

function App() {
  return (
    <div>
      <LayoutProvider>
        <div className="flex flex-col m-3">
          <NavigationBar />
          <div className="flex mt-4">
            <Edit />
          </div>
        </div>
      </LayoutProvider>
    </div>
  )
}

export default App
