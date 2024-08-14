
const IconSkill = ({icon, level, skillName}) => {
  return (
    <div className='flex flex-col items-center justify-center h-[140px]'>
        <img className="w-[70px]" src={icon} alt="" />
        <div className="progress-bar h-[6px] w-[80px] bg-[#D9D9D9] rounded-full items-center">
            <div style={{width: `${level}%`}} className={`progress rounded-full bg-[#EF479B] h-[6px]`} ></div>
            
        </div>
        <p className='text-[18px] font-semibold text-white'>{skillName}</p>
    </div>
  )
}

export default IconSkill