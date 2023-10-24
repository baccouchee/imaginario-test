/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faItalic, faUnderline } from '@fortawesome/free-solid-svg-icons'
import Dropdown from '../../../components/dropDown.components'
import ColorSetting from '../../../components/colorSetting.components'
import CustomSwitch from '../../../components/switch.components'
import { BiAlignLeft, BiAlignJustify, BiAlignMiddle, BiAlignRight } from 'react-icons/bi'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css' // Import the default styles

const ParagraphEditor = () => {
  const [underline, setUnderline] = useState(false)
  const [italic, setItalic] = useState(false)

  const [sliderValue, setSliderValue] = useState(50)

  const handleSliderChange = event => {
    const newValue = event.target.value
    setSliderValue(newValue)
  }

  const [editorState, setEditorState] = useState({
    fontSize: 'text-base',
    fontWeight: 'font-normal',
    fontStyle: 'font-normal',
    textDecoration: 'no-underline',
    fontFamily: 'font-sans',
  })

  const handleChange = (property, value) => {
    setEditorState({ ...editorState, [property]: value })
  }

  const [isSwitchOn, setSwitchOn] = useState(false)

  const handleSwitchChange = newValue => {
    setSwitchOn(newValue)
  }

  const Options = {
    font: ['Sans-serif', 'Serif', 'Monospace'],
    size: ['1', '6', '8'],
    weight: ['Bold', 'Light', 'Monospace'],
  }

  return (
    <div className="flex flex-col w-full p-4 bg-dark-bg my-2 rounded-lg">
      <div className="flex flex-row justify-start w-full">
        <Dropdown options={Options.font} type="rounded-l-lg" />
        <Dropdown options={Options.size} type="" />
        <Dropdown options={Options.weight} type="" />

        <div className="w-full h-full flex flex-row">
          <div className="flex items-center">
            <button
              onClick={() => setItalic(!italic)}
              className={`p-2 border border-dark-bg  text-white ${italic ? 'bg-main' : 'bg-dark-light'}`}
            >
              <FontAwesomeIcon icon={faItalic} />
            </button>
          </div>

          <div className="flex items-center">
            <button
              onClick={() => setUnderline(!underline)}
              className={`rounded-r-lg p-2 border border-dark-bg  text-white ${
                underline ? 'bg-main' : 'bg-dark-light'
              }`}
            >
              <FontAwesomeIcon icon={faUnderline} />
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="my-3 flex flex-col w-fit">
          <div className="flex justify-between w-full mb-3">
            <div className="text-sm font-inter text-white">Font Color</div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer"></input>
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <ColorSetting />
        </div>
        <div className="my-3 flex flex-col w-fit">
          <div className="grid grid-cols-3 text-white ">
            <BiAlignLeft size={30} />
            <BiAlignMiddle size={30} />
            <BiAlignRight size={30} />
            <BiAlignLeft size={30} />
            <BiAlignMiddle size={30} />
            <BiAlignRight size={30} />
          </div>
        </div>
        <div className="my-3 flex flex-col w-fit">
          <div className="flex justify-between w-full mb-3">
            <div className="text-sm font-inter text-white">Font Color</div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer"></input>
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <ColorSetting />
        </div>
        <div className="my-3 flex flex-col w-fit">
          <div className="flex justify-between w-full mb-3">
            <div className="text-sm font-inter text-white">Font Color</div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer"></input>
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <ColorSetting />

          <input
            id="default-range"
            type="range"
            min={0}
            max={100}
            value={sliderValue}
            onChange={handleSliderChange}
            className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          />
        </div>
      </div>
    </div>
  )
}

export default ParagraphEditor
