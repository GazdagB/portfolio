
// eslint-disable-next-line react/prop-types
const Details = ({detailTitle,detailBody}) => {

    let dividerStyles = {
        width: "100%",
        height: "1px" ,
        backgroundColor: "white"
    }

  return (
    <div className='w-full mb-[8px]'>
        <h3 className='text-[#9DA6A6] 2xl:text-2xl font-bold text-[20px] mb-[8px]'>{detailTitle}</h3>
        <div style={dividerStyles} className='divider mb-[8px]'></div>
        <p className='text-[18px] 2xl:text-xl text-white'>{detailBody}</p>
    </div>
  )
}

export default Details