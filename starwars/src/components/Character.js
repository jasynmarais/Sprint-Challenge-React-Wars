import React from 'react';
import styled from 'styled-components';

const CharacterCard = styled.div`
    width: 450px;
    padding: 1.1rem;
    margin: 1rem 0;
    background: #f0db4f;
    border-radius: 11px;
    box-shadow: 3px 5px 10px #323330;
    transition: ease-in-out 0.2s;

    &:hover {
        transform: scale(1.03);
        transition: ease-in-out 0.13s;
        box-shadow: 2px 5px 7px #323330;
    }

    @media (max-width: 500px) {
        width: 85%;
    }

    h2 {
        color: #323330;
        font-size: 2rem;
        text-decoration: underline;
    }

    p {
        font-size: 1.4rem;
        color: #323330;
    }

    span {
        font-weight: bold;
    }
`;

export const Character = ({ data }) => {
    return (
        <CharacterCard>
            <h2>{data.name}</h2>
            <p>
            <p>
            <span>DOB: </span>
            {data.birth_year}
            </p>
            <span>Hair Color: </span>
            {data.hair_color}
            </p>
            <p>
            <span>Eye Color: </span>
            {data.eye_color}
            </p>
            <p>
            <span>Skin Color: </span>
            {data.skin_color}
            </p>
            <p>
            <span>Gender: </span>
            {data.gender}
            </p>
            <p>
            <span>Mass: </span>
            {data.mass} kg
            </p>
            <p>
            <span>Height: </span>
            {data.height} cm
            </p>
        </CharacterCard>
    );
};
