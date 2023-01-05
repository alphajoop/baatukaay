//import { useState } from 'react'
import { Script, handleClick } from './script';
function Wrapper() {
    //const [updated, setUpdated] = useState('');
    
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            //setUpdated(event.target.value);
            //console.log(event.target.value);
            Script();
        }
    };
    
    return (
    <div className="container">
        <header>Baatukaay Wolof</header>
        <div className="search">
            <input type="text" placeholder="Rechercher un mot" required  onKeyDown={handleKeyDown} />
            <i className="bi bi-search"></i>
            <span className="material-icons bi bi-x" onClick={handleClick}></span>
        </div>
        <p className="info-text">Tapez n'importe quel mot existant et appuyez sur Entrée pour obtenir une signification, un exemple, des synonymes, etc.</p>
        <ul>
            <li className="word">
                <div className="details">
                    <p>__</p>
                    <span>_ _</span>
                </div>
                <i className="bi bi-volume-up-fill"></i>
            </li>
            <div className="content">
                <li className="meaning">
                    <div className="details">
                        <p>Signification</p>
                        <span>___</span>
                    </div>
                </li>
                <li className="example">
                    <div className="details">
                        <p>Exemple</p>
                        <span className='wo fst-italic'>___</span><br/>
                        <span className='fr'>___</span>
                    </div>
                </li>
                <li className="synonyms">
                    <div className="details">
                        <p>Synonymes</p>
                        <div className="list"></div>
                    </div>
                </li>
            </div>
        </ul>
    </div>
    );
}

export default Wrapper