import React from 'react';
import Card from './Card';

const CardList = ({roborts}) => {
return(
    <div>
       {
            roborts.map((user,i) => {	
              return(
      	      <Card 
                key={i} 
                id={roborts[i].id} 
                name={roborts[i].name} 
                email={roborts[i].email}
              />
            );        
        })
    }
    </div>  
);
}
export default CardList;  