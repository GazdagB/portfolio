import bgVideo from "../assets/video-bg.jpg"

const Video = () => {

  
    
  return (
    <div className="my-[50px]">
        <div style={{backgroundImage: `url(${bgVideo})`, backgroundSize: "120%", backgroundPosition: "10% 60%"}} className="video w-[275px] h-[174px] overflow-hidden">
            
        </div>
    </div>
  )
}

export default Video