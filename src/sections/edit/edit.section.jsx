/* eslint-disable no-unused-vars */
import { useState } from 'react'
import Chips from '../../components/chips.components'
import ParagraphEditor from './ParagraphEditor/ParagraphEditor'
import CustomWaveform from '../../components/AuditVisualizer.component'
import VideoEditor from './VideoEditor/videoEditor.section'
import VideoPlayer from '../../components/videoPlayer.components'

const Edit = ({ videoRef }) => {
  const [chips, setChips] = useState([
    { name: 'Edit', backgroundColor: false },
    { name: 'Style', backgroundColor: false },
    { name: 'Summarize', backgroundColor: false },
    { name: 'Post', backgroundColor: false },
  ])

  const handleClick = index => {
    const updatedChips = chips.map((chip, i) => {
      if (i === index) {
        return { ...chip, backgroundColor: true }
      }
      return { ...chip, backgroundColor: false }
    })
    setChips(updatedChips)
  }

  return (
    <div className="flex flex-col w-full">
      <div className="flex space-x-2">
        {chips.map((chip, index) => (
          <Chips
            key={index}
            name={chip.name}
            backgroundColor={chip.backgroundColor}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
      <div className="flex w-full space-x-2">
        <ParagraphEditor />
        <VideoPlayer videoRef={videoRef} />
      </div>
    </div>
  )
}

export default Edit
