import { useState, useRef, useEffect } from 'react';
import Button from '../components/Button'
import funFacts from '../assets/facts.json';
import { animated, useSpring } from '@react-spring/web'
import {Fade} from "react-awesome-reveal"

const FunFacts = () => {
  const [fact, setFact] = useState(funFacts[0]);
  const [showNewFact, setShowNewFact] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef(null);

  const fadeOut = useSpring({
    opacity: showNewFact ? 0 : 1,
    config: { duration: 200 }
  });

  const slideIn = useSpring({
    from: { transform: 'translateY(-100%)', opacity: 0 },
    to: { transform: 'translateY(0%)', opacity:  1 },
    reset: true,
    reverse: showNewFact,
    config: { duration: 500 }
  });

  const containerSpring = useSpring({
    height: contentHeight,
    config: { duration: 400 }
  });

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.offsetHeight);
    }
  }, [fact]);

  function getRandomFact(factArray, previousFact) {
    let randomFact;
    do {
      randomFact = factArray[Math.floor(Math.random() * factArray.length)];
    } while (randomFact.number === previousFact.number);
    return randomFact;
  }

  function handleNewFact() {
    setShowNewFact(true); // Trigger fade out
    setTimeout(() => {
      setFact(prevFact => getRandomFact(funFacts, prevFact));
      setShowNewFact(false); // Trigger slide in
    }, 200); // Match the duration of- the fade out animation
  }

  return (
    <div className='bg-[#2C2C2C] text-white flex flex-col items-center py-10 px-10 2xl:py-16 w-full text-pretty'>
      <Fade direction='up'>
      <h2 className='text-[23px] sm:text-[31px] font-[700] mb-4'>Random facts about me</h2>
      <animated.div style={{ ...containerSpring, overflow: 'hidden' }} className={"mb-10"}>
        <animated.div style={showNewFact ? fadeOut : slideIn} className='text-center' ref={contentRef}>
          {fact && <p className='text-[18px] sm:text-[20px] 2xl:text-2xl'><span className='text-[#EF479B]'>{`FACT ${fact.number}: `}</span>{fact.fact}</p>}
        </animated.div>
      </animated.div>
      <Button isAnimated={true} onClick={handleNewFact} classes={"rounded-full font-bold"} text='New Fact' bgColor='#EF479B' paddingYX={"11px 7px"} width={"124px"} height={"46px"}>
        NEW FACT
      </Button>
      </Fade>
    </div>
  )
}

export default FunFacts