// Write your Character component here
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard/CharacterCard'
import styled from 'styled-components'

const WrapperDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

const CharacterGrid = () => {
    const [characterData, setCharacterData] = useState([]);

  useEffect(() => {
    axios
      .get('https://swapi.py4e.com/api/people/')
      .then(response => {
        console.log('Look', response.data.results)
        setCharacterData(response.data.results);
      })
      .catch(error => console.log('Something is wrong', error));
  }, [])

  return (
      <WrapperDiv>
         {characterData.map(character => (
             <CharacterCard data={character} key={character.name} />
         ))} 
      </WrapperDiv>
  )
}

export default CharacterGrid