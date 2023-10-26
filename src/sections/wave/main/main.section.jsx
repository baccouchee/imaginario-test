import React, { useState, useCallback, useRef } from 'react'
import { BiRewind, BiFastForward } from 'react-icons/bi'
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs'
import { AiFillPlusCircle, AiFillMinusCircle, AiOutlineExpandAlt } from 'react-icons/ai'
import PlayerSection from './player.section'
import Timeline from 'wavesurfer.js/dist/plugins/timeline'
import Region from 'wavesurfer.js/dist/plugins/regions'
import moment from 'moment'

const MainWaveSection = () => {
  const urls = ['/sample.mp3']
  const [audioUrl, setAudioUrl] = useState(urls[0])
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [fullTime, setFullTime] = useState(0)
  const playRef = useRef()

  const onUrlChange = useCallback(() => {
    urls.reverse()
    setAudioUrl(urls[0])
  }, [])

  return (
    <div className="flex flex-col items-center justify-center w-full gap-5">
      <div className="bg-dark-light w-full h-14 rounded-lg flex flex-row justify-between py-2 px-4 items-center">
        <div className="flex flex-row justify-between items-center gap-2 w-full">
          <button
            className="bg-main w-1/3 h-9 rounded-lg text-white
          hover:bg-main/80 hover:text-white transition-all duration-300"
          >
            Save Edit
          </button>
        </div>
        <div className="w-full flex flex-row justify-center gap-5 items-center ">
          <div className="flex flex-row justify-between items-center">
            <BiRewind
              className="text-white text-2xl cursor-pointer
            hover:text-main transition-all duration-300
            "
            />
            {!isPlaying ? (
              <BsFillPlayFill
                className="text-white text-2xl cursor-pointer
            hover:text-main transition-all duration-300
            "
                onClick={() => playRef.current.onPlayClick()}
              />
            ) : (
              <BsPauseFill
                className="text-white text-2xl cursor-pointer
              hover:text-main transition-all duration-300
              "
                onClick={() => playRef.current.onPlayClick()}
              />
            )}
            <BiFastForward
              className="text-white text-2xl cursor-pointer
            hover:text-main transition-all duration-300 
            "
            />
          </div>
          <div className="flex flex-row justify-between items-center">
            <p className="text-white">
              {moment.utc(currentTime * 1000).format('mm:ss:SS')}/{moment.utc(fullTime * 1000).format('mm:ss:SS')}
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-end items-end w-full gap-8">
          <div className="flex flex-row justify-between items-center gap-2">
            <AiFillPlusCircle
              className="text-white text-2xl cursor-pointer
            hover:text-main transition-all duration-300
            "
            />
            <span className="text-white text-sm border-[1px] px-5 py-1 rounded-lg border-gray-600 font-inter cursor-pointer">
              Fit
            </span>
            <AiFillMinusCircle
              className="text-white text-2xl cursor-pointer
            hover:text-main transition-all duration-300
            "
            />
          </div>
          <AiOutlineExpandAlt
            className="text-white text-2xl cursor-pointer
            hover:text-main transition-all duration-300
          "
          />
        </div>
      </div>
      <PlayerSection
        height={50}
        waveColor="#8E8E8E"
        progressColor="#fff"
        url={audioUrl}
        plugins={[
          Timeline.create(),
          Region.create({
            dragSelection: {
              slop: 5,
            },
          }),
        ]}
        width={800}
        setCurrentTime={setCurrentTime}
        setFullTime={setFullTime}
        playRef={playRef}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
    </div>
  )
}

export default MainWaveSection
