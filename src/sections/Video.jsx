import {Fade} from 'react-awesome-reveal'

const Video = () => {

  
    
  return (
  <Fade direction='right'>
    <div className="my-[50px] flex justify-center">
        <iframe  className="w-[275px] h-[174px] sm:w-[654px] lg:w-[900px] lg:h-[550px] sm:h-[405px]" src="https://www.youtube.com/embed/xNRJwmlRBNU?si=PVtoMcmirru5KaWq" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  </Fade>
  )
}

export default Video