import Hero from "./Hero.css"
import arrow_btn from "../../Assets/arrow_btn.png"
import play_icon from "../../Assets/play_icon.png"
import pause_icon from "../../Assets/pause_icon.png"

const Hero = ({heroData, heroCount, setHeroCount, playStatus, setPlayStatus}) => {
  return (
    <div className="hero">
      <div className="hero-text">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className="hero-explore">
        <p>Explore the features</p>
      </div>
    </div>
  )
}

export default Hero
