import React, { useEffect, useRef, useState, useCallback, useImperativeHandle } from 'react'
import WaveSurfer from 'wavesurfer.js'
import { AiOutlinePlus } from 'react-icons/ai'
import Regions from 'wavesurfer.js/dist/plugins/regions.js'
import useWavesurfer from '../../../hooks/useWaveSurfer'
import Timeline from 'wavesurfer.js/dist/plugins/timeline'
import sample from '../../../../public/sample.mp3'

const PlayerSection = ({ setIsPlaying, isPlaying, playRef, setCurrentTime, setFullTime, ...props }) => {
  const containerRef = useRef()

  const wavesurfer = useWavesurfer(containerRef, props)

  // On play button click
  const onPlayClick = useCallback(() => {
    setFullTime(wavesurfer.getDuration())

    wavesurfer.isPlaying() ? wavesurfer.pause() : wavesurfer.play()
  }, [wavesurfer])

  // Initialize wavesurfer when the container mounts
  // or any of the props change

  useEffect(() => {
    if (!wavesurfer) return

    setCurrentTime(0)

    setIsPlaying(false)

    const subscriptions = [
      wavesurfer.on('play', () => setIsPlaying(true)),
      wavesurfer.on('pause', () => setIsPlaying(false)),
      wavesurfer.on('timeupdate', currentTime => setCurrentTime(currentTime)),
    ]

    return () => {
      subscriptions.forEach(unsub => unsub())
    }
  }, [wavesurfer])

  useImperativeHandle(playRef, () => ({
    onPlayClick,
  }))

  return (
    <div className="relative flex flex-row items-center justify-center w-full bg-dark-light p-2 rounded-lg h-24 overflow-x-auto overflow-y-hidden">
      <AiOutlinePlus className="text-white text-5xl rounded-lg bg-dark-bg p-3 absolute left-3 cursor-pointer hover:bg-main transition-all duration-300 " />
      <div
        className="absolute left-20  flex flex-row justify-between items-center w-[599px] h-24"
        ref={containerRef}
        id="waveform"
      ></div>
      <AiOutlinePlus className="text-white text-5xl rounded-lg bg-dark-bg p-3 absolute right-3 cursor-pointer hover:bg-main transition-all duration-300 " />
    </div>
  )
}

export default PlayerSection
