import { useState } from 'react'
import Back from '../../../assets/NavigationIcon/back.svg'
import Pen from '../../../assets/NavigationIcon/pen.svg'
import Play from '../../../assets/NavigationIcon/play.svg'
import Upload from '../../../assets/NavigationIcon/upload.svg'

const VideoEditor = () => {
  const [disableInput, setDisableInput] = useState(true)
  const [penClicked, setPenClicked] = useState(false)
  const [playClicked, setPlayClicked] = useState(false)
  const [uploadClicked, setUploadClicked] = useState(false)

  // Function to toggle the input field's disabled state and change the penClicked state
  const toggleInput = () => {
    setDisableInput(!disableInput)
    setPenClicked(!penClicked)
  }

  // Function to toggle the background color of the play icon
  const togglePlay = () => {
    setPlayClicked(!playClicked)
  }

  // Function to toggle the background color of the upload icon
  const toggleUpload = () => {
    setUploadClicked(!uploadClicked)
  }

  return (
    <div className="text-white flex justify-between px-7 py-3 bg-dark-bg rounded-lg">
      <div className="flex space-x-3 items-center">
        <img src={Back} alt="arrow" className="w-4 h-4" />
        <div className="font-inter text-xs"> Back to XYZ</div>
      </div>
      <div className="flex space-x-3 items-center">
        <input
          disabled={disableInput}
          className="font-inter text-xs bg-transparent w-24"
          defaultValue="Untitled Project"
          onBlur={toggleInput}
        />

        <img
          src={Pen}
          onClick={toggleInput}
          alt="pen"
          className={`circle-container rounded-full p-2 w-8 h-8 hover:bg-slate-700 cursor-pointer ${
            penClicked ? 'bg-main' : 'bg-dark-light'
          }`}
        />
      </div>
      <div className="flex space-x-3 items-center">
        <img
          src={Play}
          alt="arrow"
          onClick={togglePlay}
          className={`circle-container rounded-full p-2 w-8 h-8 hover:bg-slate-700 cursor-pointer ${
            playClicked ? 'bg-main' : 'bg-dark-light'
          }`}
        />
        <img
          src={Upload}
          alt="arrow"
          onClick={toggleUpload}
          className={`circle-container rounded-full p-2 w-8 h-8 hover:bg-slate-700 cursor-pointer ${
            uploadClicked ? 'bg-main' : 'bg-dark-light'
          }`}
        />
      </div>
    </div>
  )
}

export default VideoEditor
