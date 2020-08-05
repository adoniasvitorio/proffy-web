import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return(
        <article className="teacher-item">
        <header>
            <img src="https://avatars0.githubusercontent.com/u/46370687?s=460&u=5e638cdd53256d445269e0d4bc417584f02151b4&v=4" alt="Adonias Vitorio"/>
            <div>
                <strong>Adonias Vitorio</strong>
                <span>Programação</span>
            </div>
        </header>
        <p>
        In love with tech and music, geek and Open Source world's enthusiast.
        <br/><br/>
        Currently studying Javascript and PHP ecosystem, also interested in Bitcoin and Economy.
        </p>
        <footer>
            <p>
                Preço/hora
                <strong>R$50,00</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="Whatsapp"/>
                Entrar em contato
            </button>
        </footer>
    </article>
    )
}

export default TeacherItem;