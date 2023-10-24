import LayoutProvider from './layout'
import Edit from './sections/edit/edit.section'
import NavigationBar from './sections/navigation/navigation.section'

function App() {
  return (
    <LayoutProvider>
      <main className="flex flex-col bg-dark p-4">
        <NavigationBar />
        <div className="flex mt-4">
          <Edit />
        </div>
      </main>
    </LayoutProvider>
  )
}

export default App
