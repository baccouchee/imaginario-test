/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from 'react'
import WaveSurfer from 'wavesurfer.js'

const CustomWaveform = ({ audioUrl }) => {
  const waveformRef = useRef(null)
  const wavesurfer = useRef(null)

  useEffect(() => {
    wavesurfer.current = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: 'violet',
      progressColor: 'purple',
    })

    wavesurfer.current.load(audioUrl)

    // Add a click event listener to the waveform
    waveformRef.current.addEventListener('click', handleWaveformClick)

    return () => {
      // Clean up WaveSurfer instance and event listener when component unmounts
      wavesurfer.current.destroy()
      waveformRef.current.removeEventListener('click', handleWaveformClick)
    }
  }, [audioUrl])

  const handleWaveformClick = e => {
    // Calculate the position of the click relative to the waveform
    const clickX = e.clientX - waveformRef.current.getBoundingClientRect().left

    // Convert the click position to a percentage of the total duration
    const duration = wavesurfer.current.getDuration()
    const clickPercentage = (clickX / waveformRef.current.offsetWidth) * 100

    // Set the playhead to the clicked position and start playback
    wavesurfer.current.seekAndCenter(clickPercentage)
    wavesurfer.current.playPause()
  }

  return (
    <div>
      <div ref={waveformRef}></div>
    </div>
  )
}

export default CustomWaveform
