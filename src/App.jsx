import LayoutProvider from './layout'

function App() {
  return (
    <div>
      <LayoutProvider>
        <div className="text-3xl"> text</div>
      </LayoutProvider>
    </div>
  )
}

export default App
