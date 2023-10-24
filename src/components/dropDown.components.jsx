/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import dropdown from '../assets/editor/dropdown.svg'

const Dropdown = ({ options, type }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(options[0])

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = option => {
    setSelectedOption(option)
    setIsOpen(false)
  }

  const inputStyle = {
    backgroundImage: `url(${dropdown})`,
    backgroundPosition: 'right 5% center',
    backgroundRepeat: 'no-repeat',
  }

  return (
    <div className="relative w-fit justify-center ">
      <input
        type="text"
        style={inputStyle}
        className={`w-32 cursor-pointer border border-dark-bg pl-4 py-2 text-white ${type} bg-dark-light`}
        onClick={toggleDropdown}
        placeholder={selectedOption}
        value={selectedOption}
      />
      {isOpen && (
        <ul className="mt-2 w-full z-10 rounded-lg border border-slate-600 absolute left-0 bg-dark-light">
          {options.map(option => (
            <li
              key={option}
              className="py-2 px-4 hover-bg-slate-600 text-white cursor-pointer"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Dropdown
