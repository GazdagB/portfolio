import { useState } from 'react';
import Button from '../components/Button'
import funFacts from '../assets/facts.json';

const FunFacts = () => {

  const [fact, setFact] = useState(funFacts[0]);

  function getRandomFact(factArray) {
    return factArray[Math.floor(Math.random() * factArray.length)];
  }

  function handleNewFact() {
    setFact(getRandomFact(funFacts));
  }

  return (
    <div className='bg-[#2C2C2C] text-white flex flex-col gap-10 items-center py-10 w-full'>
        <div className='text-center'>
            <h2 className='text-[23px] sm:text-[31px] font-[700] mb-4'>Random facts about me</h2>
            {fact && <p className='text-[18px] sm:text-[20px]'>{`FACT ${fact.number}: ${fact.fact}`}</p>}
        </div>
        <Button onClick={handleNewFact} classes={"rounded-full font-bold"} text='New Fact' bgColor='#EF479B' paddingYX={"11px 7px"} width={"124px"}>
          NEW FACT
        </Button>
    </div>
  )
}

export default FunFacts