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

  return (
    <div className="flex flex-col h-screen w-1/6 bg-dark-bg text-white font-inter">
      <div className="p-4">
        <img src="../src/assets/logo.png" alt="Logo" style={{ maxWidth: '140px' }} className="mx-auto" />
      </div>

      <div className="flex flex-col cursor-pointer ">
        {sidebarElements.map((element, index) => (
          <div className="p-1 flex justify-center" key={index}>
            <div
              className={`flex items-center p-2 w-10/12 space-x-3 px-3 ${
                isElementActive(element.name)
                  ? 'rounded-lg bg-dark-light transition-all duration-200' // Add transition classes
                  : ''
              }`}
              onClick={() => handleElementClick(element.name)}
            >
              <img src={`../src/assets/sidebarIcon/${element.icon}.svg`} alt="My Icon" className="w-6 h-6" />
              <span>{element.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
