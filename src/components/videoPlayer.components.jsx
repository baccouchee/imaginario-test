/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import video from '../assets/video.mp4'

function VideoPlayer({ videoRef }) {
  const [subtitle, setSubtitle] = useState('')

  const subtitles = [
    { start: 0, end: 5, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { start: 5, end: 10, text: 'Praesent euismod euismod neque, in tristique quam congue a.' },
    { start: 10, end: 15, text: 'In hac habitasse platea dictumst.' },
  ]

  function handleTimeUpdate(e) {
    const currentTime = e.target.currentTime

    const currentSubtitle = subtitles.find(sub => currentTime >= sub.start && currentTime <= sub.end)

    if (currentSubtitle) {
      setSubtitle(currentSubtitle.text)
    } else {
      setSubtitle('')
    }
  }

  return (
    <div className="mx-auto mt-4 w-[65%] border rounded-md p-2 relative">
      <video controls className="w-full h-auto rounded-md" onTimeUpdate={e => handleTimeUpdate(e)}>
        <source src={video} type="video/mp4" ref={videoRef} />
        Your browser does not support the video tag.
      </video>
      <div className="absolute bottom-20 left-0 right-0 mx-8 flex justify-center items-center rounded-sm border border-black border-dashed bg-white opacity-70 text-center text-black">
        {subtitle}
      </div>
    </div>
  )
}

export default VideoPlayer
