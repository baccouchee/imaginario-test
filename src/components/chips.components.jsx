/* eslint-disable react/prop-types */
const Chips = ({ name, backgroundColor, onClick }) => {
  return (
    <div
      className={`flex font-inter text-xs hover:cursor-pointer hover:bg-slate-700 p-2 ${
        backgroundColor ? 'bg-secondary' : 'bg-dark-light'
      } w-fit rounded-lg text-white`}
      onClick={onClick}
    >
      {name}
    </div>
  )
}

export default Chips
