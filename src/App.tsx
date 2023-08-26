import { useDispatch, useSelector } from "react-redux";
import { addLanguages, toFavorite, useLanguages } from "./redux/sliceLanguages";
import { useState } from "react";

function App() {

  const languages = useSelector(useLanguages);

  const [newLanguage, setNewLanguage] = useState('');

  const dispatch = useDispatch();

  return (
    <div>
      <ul>
        {languages.map(language => {
          return (
            <div style={{display: "flex", gap: "20px", marginBottom: "10px"}}>
              <span style={{color: language.favorite ? "green" : "black"}}>{language.name}</span>
              <button type="button" onClick={() => dispatch(toFavorite(language.name))}>
                {language.favorite ? 'Desfavoritar' : 'Favoritar'}
              </button>
            </div>
          );
        })}
      </ul>
      <div>
        <input type="text" value={newLanguage} onChange={(e) => setNewLanguage(e.target.value)}/>
        <button onClick={() => dispatch(addLanguages(newLanguage))} type="button">adicionar nova linguagem</button>
      </div>
    </div>
  );
}

export default App;
