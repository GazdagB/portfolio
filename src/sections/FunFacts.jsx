import Button from '../components/Button'

const FunFacts = () => {
  return (
    <div className='bg-[#2C2C2C] text-white flex flex-col gap-10 items-center py-10 w-full'>
        <div className='text-center'>
            <h2 className='text-[23px] font-[700] mb-4'>Random facts about me</h2>
            <p className='text-[18px]'>&quot;I&apos;m currently 25 years old.&quot;</p>
        </div>
        <Button classes={"rounded-full font-bold"} text='New Fact' bgColor='#EF479B' paddingYX={"11px 7px"} width={"124px"}/>
    </div>
  )
}

export default FunFacts