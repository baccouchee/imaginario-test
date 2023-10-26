/* eslint-disable no-unused-vars */
import React from 'react'
import pipette from '../assets/editor/pipette.svg'

const ColorSetting = () => {
  return (
    <div className="flex flex-row  p-1 bg-dark-light rounded-lg w-full justify-between font-inter text-sm text-white">
      <div className="bg-white w-6 h-6 rounded rounded-m"></div>

      <div className="bg-dark-bg w-6 h-6 rounded rounded-m hover:bg-slate-600 cursor-pointer">
        <img src={pipette} alt="pipette" className="p-1 w-6 h-6" />
      </div>

      <div className="bg-dark-bg px-2 rounded rounded-m flex flex-row items-center">
        <div className="text-dark-light mr-1">#</div> ffffff
      </div>
    </div>
  )
}

export default ColorSetting
