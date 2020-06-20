import React, { useState } from 'react';
import './styles.css';
import DevTech from '../DevTechs'

function DevItem({ dev }){

  const [ devList, setDevList ] = useState([dev.techs.join(' ')]);

  return (
      <li className="dev-item">
      <header>
        <img src={dev.avatar_url} alt={dev.github_username} />
        <div className="user-info">
            <strong>{dev.name}</strong>
            {devList.map((tech) => ( 

              <DevTech key={tech} content={tech}/>

            ))}
            <p>{dev.bio}</p>
            <a href={`https://github.com/${dev.github_username}`} target="_blank" rel="noopener noreferrer">Acessar perfil no GitHub</a>
          </div>
      </header>
    </li>);
}

export default DevItem;