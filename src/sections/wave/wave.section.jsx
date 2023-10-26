// import React, { useEffect } from 'react'
// import sample from '../../assets/audio/sample.mp3'
// import Regions from 'wavesurfer.js/dist/plugins/regions.js'
// import WaveSurfer from 'wavesurfer.js'

// const WaveSection = () => {
//   const ref = React.useRef(null)

//   const [playing, setPlaying] = React.useState(false)
//   const [regions, setRegions] = React.useState([])
//   const [region, setRegion] = React.useState(null)
//   const wave = document.querySelector('#waveform')
//   let wavesurfer = WaveSurfer.create({
//     container: 'waveform',
//     waveColor: 'rgb(200, 0, 200)',
//     progressColor: 'rgb(100, 0, 100)',
//     url: '../../assets/audio/sample.mp3',
//   })

//   const track = document.querySelector('#track')

//   useEffect(() => {
//     handleplay()
//   }, [])

//   const handleplay = () => {
//     const wavesurfer = WaveSurfer.create({
//       container: '#waveform',
//       waveColor: 'rgb(200, 0, 200)',
//       progressColor: 'rgb(100, 0, 100)',
//       url: '../../assets/audio/sample.mp3',
//     })

//     wavesurfer.load(sample)

//     wavesurfer.on('click', () => {
//       wavesurfer.play()
//     })
//   }

//   return (
//     <div className="flex flex-col items-center justify-center w-full h-screen bg-gray-100">
//       <h1>Wave Section</h1>
//       <button>Play</button>

//       <div ref={ref} id="waveform" className="w-full h-64"></div>
//       <div className="flex flex-row items-center justify-center w-full bg-red-100 h-64" id="track"></div>
//     </div>
//   )
// }

// export default WaveSection
