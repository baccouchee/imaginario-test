/* eslint-disable no-unused-vars */
import Header from './header/header.layout'
import Sidebar from './sidebar/sideBar.layout'
/* eslint-disable react/prop-types */
const LayoutProvider = ({ children }) => {
  return (
    <div className="flex flex-row  ">
      <div className="w-[15%]">
        <Sidebar />
      </div>
      <div className="w-[85%]">
        <Header />
        {children}
      </div>
    </div>
  )
}

export default LayoutProvider
