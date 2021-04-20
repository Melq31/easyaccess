import React from "react";
import "./Definicao.css";

//import { createMuiTheme,TextField, ThemeProvider, MenuItem} from '@material-ui/core';


//importar os valores de word, category e meaning à funcao Definicao
//maping para receber os valores da APi relacionado a deficinicao da palavra
const Definicao = ({ meanings, word, category }) => {
  return (
    <div className="meanings">
      {/* audio---------------------------- */}
      {meanings[0] && word && category === "pt-BR" && (
        <audio
          style={{ backgroundColor: "#fff", borderRadius: 10 }}
          src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
          controls
        >
        Audio disponível em inglês apenas.
        </audio>
      )}
      {/* audio---------------------------- */}

      {word === "" ? (
        <span className="subTitle">Comece por digitar algo</span>
      ) : (
        meanings.map((mean) =>
          mean.meanings.map((item) =>
            item.definitions.map((def) => (
              <div
                className="singleMean"
                style={{
                  backgroundColor: "white",
                  color: "black",
                }}
              >
                <b>{def.definition}</b>
                <hr style={{ backgroundColor: "black", width: "100%" }} />
                {def.example && (
                  <span>
                    <b>Exemplo :</b> {def.example}
                  </span>
                )}
                {def.synonyms && (
                  <span>
                    <b>Sinônimo :</b> {def.synonyms.map((s) => `${s}, `)}
                  </span>
                )}
              </div>
            ))
          )
        )
      )}
    </div>
  );
};

export default Definicao;
