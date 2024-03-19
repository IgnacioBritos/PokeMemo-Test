import MemoBlock from "../MemoBlock/MemoBlock";
import { useNavigate } from "react-router-dom";
const Board = ({shufflerPokemonCards,memoBlock,animating,handelMemoClick})=>{
    const navigate= useNavigate()
 console.log(memoBlock);
    return( 
        
        <main className=" flex justify-center items-center h-screen " >
            
             <div className="place-content-center grid grid-cols-5 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-10 gap-x-2 rounded-sm p-8 lg:mt-10 mx-auto"  style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)'}}>
             
            {shufflerPokemonCards.length >3 ?
                memoBlock.map((pokemon, i)=>{
                   return  <MemoBlock class=" size-4"key={`${i}_${pokemon.name} `} animating={animating}  handelMemoClick={handelMemoClick} memoBlock={pokemon}/> 
                })
                : navigate('/')
            }
        </div>

        </main>      
    )
}


export default Board;