const Header = () => {
  return (
    <div className="flex justify-between bg-dark p-2 text-white">
      <div className="flex items-center"></div>
      <div className="flex items-center">
        <div className="flex space-x-4 px-3">
          <div className="circle-container rounded-full p-1">
            <img src="../src/assets/headerIcon/person.svg" alt="arrow" className="w-[24px] h-[24px]" />
          </div>
          <div className="circle-container rounded-full p-1 bg-dark-bg">
            <img src="../src/assets/headerIcon/arrow.svg" alt="arrow" className="w-[24px] h-[24px]" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
