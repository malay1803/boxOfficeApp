import React from 'react'


// ActorCard.js

const ActorCard = ({ image, name, gender, country, birthday}) =>(
      <div>
        <div>
          <img src={image} alt="actor" />
        </div>
        <h1>
          {name} {gender ? `(${gender})` : null}
        </h1>
        <p>{country ? `Comes from ${country}` : 'No country known'}</p>
        {birthday ? <p>Born {birthday}</p> : null}
      </div>
    );
export default ActorCard
