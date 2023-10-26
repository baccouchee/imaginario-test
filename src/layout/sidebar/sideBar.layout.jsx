import { useState } from 'react'

const Sidebar = () => {
  const [activeElement, setActiveElement] = useState(null)

  const handleElementClick = element => {
    setActiveElement(element)
  }

  const isElementActive = element => activeElement === element

  const sidebarElements = [
    { icon: 'Media', name: 'Media' },
    { icon: 'Transform', name: 'Transform' },
    { icon: 'Text', name: 'Text' },
    { icon: 'Brand', name: 'Brand' },
  ]

  const sidebarBottomElements = [
    { icon: 'Settings', name: 'Settings' },
    { icon: 'Questions', name: 'Questions' },
  ]

  return (
    <div className="fixed z-50 flex flex-col  h-screen bg-dark-bg text-white  ">
      <div className="p-4">
        <img src="../src/assets/logo.png" alt="Logo" className="mx-auto max-w-[70%]" />
      </div>
      <div className="w-full h-full flex flex-col justify-between ">
        <div className="flex flex-col">
          {sidebarElements.map((element, index) => (
            <div className="p-1 flex justify-center" key={index}>
              <div
                className={`flex  cursor-pointer hover:bg-slate-700 rounded-lg items-center p-2 w-10/12 space-x-3 px-3 ${
                  isElementActive(element.name) ? 'rounded-lg bg-dark-light transition-all duration-200' : ''
                }`}
                onClick={() => handleElementClick(element.name)}
              >
                <img src={`../src/assets/sidebarIcon/${element.icon}.svg`} alt="My Icon" className="w-4 h-4" />
                <div className="text-xs font-inter">{element.name}</div>
              </div>
            </div>
          ))}
        </div>
        <div className=" mb-10">
          {sidebarBottomElements.map((element, index) => (
            <div className="p-1 flex justify-center" key={index}>
              <div
                className={`flex items-center cursor-pointer hover:bg-slate-700 rounded-lg  p-2 w-10/12 space-x-3 px-3 ${
                  isElementActive(element.name) ? 'rounded-lg bg-dark-light transition-all duration-200' : ''
                }`}
                onClick={() => handleElementClick(element.name)}
              >
                <img src={`../src/assets/sidebarIcon/${element.icon}.svg`} alt="My Icon" className="w-4 h-4" />
                <div className="text-xs font-inter">{element.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
