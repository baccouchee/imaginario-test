/* eslint-disable no-unused-vars */
import Header from './header/header.layout'
import Sidebar from './sidebar/sideBar.layout'
/* eslint-disable react/prop-types */
const LayoutProvider = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-5/6">
        <Header />
        {children}
      </div>
    </div>
  )
}

export default LayoutProvider
