import React, { useEffect, useRef, useState, useCallback } from 'react'
import WaveSurfer from 'wavesurfer.js'

const useWavesurfer = (containerRef, options) => {
  const [wavesurfer, setWavesurfer] = useState(null)

  // Initialize wavesurfer when the container mounts
  // or any of the props change
  useEffect(() => {
    if (!containerRef.current) return
    const ws = WaveSurfer.create({
      ...options,
      container: containerRef.current,
    })
    console.log('options ', ws)

    setWavesurfer(ws)

    return () => {
      ws.destroy()
    }
  }, [containerRef])
  return wavesurfer
}

export default useWavesurfer
