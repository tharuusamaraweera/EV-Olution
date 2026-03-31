import React from 'react'
import Background from './Components/Background/Background';
import NavBar from './Components/NavBar/NavBar';

const App = () => {
  let heroData = [
    {text1:"Dive into",text2:"what you love"},
    {text1:"Indulge",text2:"your passions"},
    {text1:"Give in to",text2:"your passions"},
  ]
  const [heroCount,setHeroCount] = React.useState(2);
  const [playStatus,setPlayStatus] = React.useState(false);
  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/>
    
    <NavBar/>
    <Hero 
       setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />

    </div>
  )
}

export default App
