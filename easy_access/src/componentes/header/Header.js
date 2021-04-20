import React from "react";
import './header.css';
import { createMuiTheme,TextField, ThemeProvider, MenuItem} from '@material-ui/core';
import categories from "../../dados/categorias";


const Header = ({
    setCategory, 
    category, 
    word, 
    setWord,
    SetMeanings, 
   
}) => {
    const darkTheme = createMuiTheme({
    //specifing background color
    palette: {
            primary: {
                main: "#fff",
            }, 
            type: "dark", 
        },
    });
      /*apagar o valor contido em Idioma. O valor no input desaparece, 
      depois de clicarmos no idioma(category) pretendida*/
    const handleChange = (Idioma) => {
        setCategory(Idioma);
        setWord(""); // manter vazio
    }; 
      //input
    return (
        <div className='header'> 
            <span className="title">{word ? word : "Easy Access"} </span> 
            <div className='inputs'> 
                <ThemeProvider theme={darkTheme}>
                    <TextField 
                    className="search"
                    label="Digite a palavra"
                    value={word}
                    onChange={(e) => setWord(e.target.value)}
                    />
                    <TextField
                        className="select"
                        select
                        label="Idioma" 
                        value = {category}
                        //chamar a funçao handleChange
                        onChange= {(e) => handleChange(e.target.value)}
                        // helperText="Por favor, escolha o idioma"
                >
                    {categories.map((opcao) => (
                        <MenuItem key={opcao.label} value={opcao.label}>
                            {opcao.value} 
                        </MenuItem>
                    
                  ))}
                    
                </TextField>
            </ThemeProvider>
            </div>
    </div>
    );
};

export default Header;