import Header from './header/header.layout'
import Sidebar from './sidebar/sideBar.layout'
/* eslint-disable react/prop-types */
const LayoutProvider = ({ children }) => {
  return (
    <div className="flex w-screen h-screen bg-dark">
      <Sidebar />

      <div className="w-full h-full ">
        <Header />
        {children}
      </div>
    </div>
  )
}

export default LayoutProvider
