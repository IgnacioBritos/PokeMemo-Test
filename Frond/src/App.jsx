import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Board from "./components/Board/Board";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import { useNavigate } from "react-router-dom";

function App() {
  const [pokemonCard, setPokemonCard] = useState([]);
  const [shufflerPokemonCards, setShufflerPokemonCards] = useState([]);
  const [selectMemoBlock, setSelectMemoBlock] = useState(null);
  const [animating, setAnimating] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/allPokemons");
        setPokemonCard(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const defineDifficulty = (dif)=>{
    let newPokemonCard = [];
    if (dif== "facil") {
      newPokemonCard=pokemonCard.slice(10)
    }else if (dif=='normal'){
      newPokemonCard=pokemonCard.slice(5)
    }else if(dif=='dificil'){
      newPokemonCard=pokemonCard
    }
    
    const array = shufflerList([...newPokemonCard], [...newPokemonCard]);
    const newArray = array.map((pokemon, i) => {
      return {
        ...pokemon,
        id: i, // Asigna el índice como id
      };
    });
    setShufflerPokemonCards(newArray);
    console.log(shufflerPokemonCards);
    navigate("/game")
  
  }

  const shufflerList = (a, b) => {
    // Concatenamos los dos arrays
    const combinedArray = a.concat(b);
  
    for (let i = combinedArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [combinedArray[i], combinedArray[j]] = [
        combinedArray[j],
        combinedArray[i],
      ];
    }
    return combinedArray;
  };
  

  const handelMemoClick = (clickedMemoBlock) => {
    if (clickedMemoBlock.flip || animating) {
      // Evitar que se hagan clic en cartas ya volteadas o durante la animación
      return;
    }

    const flippedMemoBlock = { ...clickedMemoBlock, flip: true };
    const updatedMemoBlocks = shufflerPokemonCards.map((memoBlock) => {
      if (memoBlock.id === clickedMemoBlock.id) {
        // Voltear la carta que se hizo clic
        return flippedMemoBlock;
      } else if (selectMemoBlock && memoBlock.id === selectMemoBlock.id) {
        // Voltear la carta seleccionada previamente
        return { ...memoBlock, flip: true };
      } else {
        return memoBlock;
      }
    });

    setShufflerPokemonCards(updatedMemoBlocks);

    if (selectMemoBlock === null) {
      setSelectMemoBlock(clickedMemoBlock);
    } else {
      // Verificar si las cartas coinciden después de un pequeño retraso
      setAnimating(true);
      setTimeout(() => {
        if (selectMemoBlock.name === clickedMemoBlock.name) {
          setSelectMemoBlock(null);
        } else {
          // Si no coinciden, volver a voltear las cartas después de un retraso
          const resetMemoBlocks = updatedMemoBlocks.map((memoBlock) => {
            if (
              memoBlock.id === clickedMemoBlock.id ||
              memoBlock.id === selectMemoBlock.id
            ) {
              return { ...memoBlock, flip: false };
            } else {
              return memoBlock;
            }
          });
          setShufflerPokemonCards(resetMemoBlocks);
          setSelectMemoBlock(null);
        }
        setAnimating(false);
      }, 1000);
    }
  };

  return (
    <>
      <Routes>
        <Route
          path="/game"
          element={
            <Board
            shufflerPokemonCards={shufflerPokemonCards}
              memoBlock={shufflerPokemonCards}
              animating={animating}
              handelMemoClick={handelMemoClick}
            />
          }
        />
        <Route
          path="/"
          element={
            <Home
            defineDifficulty={defineDifficulty}
            >
              
            </Home>
          }
        />
      </Routes>
    </>
  );
}

export default App;
