/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import dropdown from '../assets/editor/dropdown.svg'

const Dropdown = ({ options, type, width }) => {
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
    backgroundPosition: 'right 10% center',
    backgroundRepeat: 'no-repeat',
  }

  return (
    <div className="relative w-full justify-center text-xs ">
      <input
        type="text"
        style={inputStyle}
        className={`${width} cursor-pointer border border-dark-bg pl-2 py-2 text-white ${type} bg-dark-light`}
        onClick={toggleDropdown}
        placeholder={selectedOption}
        value={selectedOption}
      />
      {isOpen && (
        <ul className="mt-2 w-full z-10 rounded-lg border border-slate-600 absolute right-0 bg-dark-light">
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
