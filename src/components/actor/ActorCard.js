import React from 'react'
import { StyledActorCard } from './ActorCard.styled';


// ActorCard.js

const ActorCard = ({ image, name, gender, country, birthday}) =>(
      <StyledActorCard>
        <div className="img-wrapper">
          <img src={image} alt="actor" />
        </div>
        <h1>
          {name} {gender ? `(${gender})` : null}
        </h1>
        <p>{country ? `Comes from ${country}` : 'No country known'}</p>
        {birthday ? <p>Born {birthday}</p> : null}
      </StyledActorCard>
    );
export default ActorCard
