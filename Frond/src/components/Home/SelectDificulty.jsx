const SelectDifficulty=({handelDifficulty,colorSelect , defineDifficulty,difficulty})=>{
    return(
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center ">
        <div className="h-3/5 w-full flex gap-4 justify-around">
          <select onChange={handelDifficulty} className={`${colorSelect} border border-black w-1/2 h-16 text-center font-medium rounded-md  hover:scale-105 transition`}>
          <option value="" disabled selected hidden>Difficulty</option>
            <option value="facil" >Facil</option>
            <option value="normal" >Normal</option>
            <option value="dificil" >Dificil</option> 
        </select>
          <button onClick={() => defineDifficulty(difficulty)} className={`border border-black bg-yellow-400 w-1/2 h-16 hover:bg-yellow-500 font-medium rounded-md hover:scale-105 transition ${difficulty ? '' : 'opacity-50 cursor-not-allowed'}`}  type="button" disabled={!difficulty}>Jugar</button>
        </div>
        <div className="w-full">
          <button className=" border border-black bg-[#8F71CC] w-full h-16 mt-2 font-medium rounded-md hover:scale-105 transition" type="button" >Creditos</button>
        </div>
      </div>
   
    )
}
export default SelectDifficulty