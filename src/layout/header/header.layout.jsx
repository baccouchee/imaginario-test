const Header = () => {
  return (
    <div className=" flex justify-between bg-dark text-white">
      <div className="flex items-center"></div>
      <div className="flex items-center">
        <div className="flex space-x-4 p-3">
          <div className="circle-container rounded-full cursor-pointer">
            <img src="../src/assets/headerIcon/person.svg" alt="arrow" className="w-6 h-6" />
          </div>
          <div className="circle-container rounded-full bg-dark-bg hover:bg-slate-600 cursor-pointer ">
            <img src="../src/assets/headerIcon/arrow.svg" alt="arrow" className="w-6 h-6 p-1" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
