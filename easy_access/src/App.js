
import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";
import { Container } from '@material-ui/core';
import Header from './componentes/header/Header.js';
import Definicao from './Definicao/Definicao';

function App() {
  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]); //use
  const [category, setCategory] = useState("pt-BR");//useState for inputfield "select" in the "Header.js"
  //const[LightMode, setLightMode ] = useState(false); //

   //getting data from api
  const dictionaryApi = async () => {
    try {
      //fetching o link em baixo usando o package "axios"
      const data = await axios.get(
        `/v2/entries/${category}/${word}`
      );
        //receiving dada
      setMeanings(data.data);
    } catch (error) { //search for error
      console.log(error);
    }
  };

  console.log(meanings);

  useEffect(() => {
    dictionaryApi();
    // eslint-disable-next-line
  }, [word, category]); //sempre que alteramos o valor no input, faz chamada à API

  /*
  const PurpleSwitch = withStyles({
    switchBase: {
      color: grey[50],
      "&$checked": {
        color: grey[900],
      },
      "&$checked + $track": {
        backgroundColor: grey[500],
      },
    },
    checked: {},
    track: {},
  })(Switch); */

  return (
    <div
      className="App"
      style={{
        height: "100vh",
        backgroundColor: "#282c34",
        color: "white",
      
      }}
    >
      <Container
        maxWidth="md"
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          justifyContent: "space-evenly",
        }}
      >
        
        <Header
          setWord={setWord}
          category={category}
          setCategory={setCategory}
          word={word}
          setMeanings={setMeanings}
          
        /><br></br>
        {meanings && (
          <Definicao
          meanings={meanings}
          word={word}
        
          category={category}
          />
        )}
      </Container>
  
    </div>
  );
}

export default App;
