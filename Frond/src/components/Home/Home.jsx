import { useEffect, useState } from "react";
import SelectDifficulty from "./SelectDificulty";

const Home = ({defineDifficulty}) => {

    const [difficulty,SetDifficulty]= useState('')
    const [colorSelect,setColorSelect]= useState('')
useEffect(()=>{
    if(difficulty=="facil"){
        setColorSelect('bg-green-500')
    }if (difficulty=="normal") {
        setColorSelect('bg-blue-500')
    }if (difficulty=="dificil") {
        setColorSelect("bg-red-500")
    }
},[difficulty])
    const handelDifficulty =(e)=>{
        SetDifficulty(e.target.value)
        console.log(e.target.value);
    }

  return (
    <main className="flex flex-col items-center justify-center h-screen  ">
    <div className="relative flex flex-col md:flex-row md:space-x-8 p-8 rounded-md border border-black" style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', backdropFilter: 'blur(8px)' }}>
      <div className="w-full md:w-1/2">
        <img src="./imgPublic/logo.png" alt="MemoTest" className=" w-full lg:w-[900px] h-auto" />
      </div>
      <SelectDifficulty defineDifficulty={defineDifficulty} colorSelect={colorSelect} handelDifficulty={handelDifficulty} difficulty={difficulty}/>
    </div>
  </main>
  
  
  );
};

export default Home;
