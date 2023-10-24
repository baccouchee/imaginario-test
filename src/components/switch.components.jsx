/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const CustomSwitch = ({ label, isChecked, onChange }) => {
  const [checked, setChecked] = useState(isChecked)

  const toggleSwitch = () => {
    const newValue = !checked
    setChecked(newValue)
    onChange(newValue)
  }

  return (
    <div className="custom-switch">
      <label className="switch-label">{label}</label>
      <div className={`switch ${checked ? 'switch-on' : 'switch-off'}`} onClick={toggleSwitch}>
        <div className={`slider ${checked ? 'slider-on' : 'slider-off'}`} />
      </div>
    </div>
  )
}

export default CustomSwitch
