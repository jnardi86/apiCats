import React from 'react'
import { useCatsContext } from './Cats';

const FavoriteCard = ({fav}) => {

    const { showFavorite } = useCatsContext();

    return (

        <div>
            <img src={fav} alt="Favoritos" onClick={() => { showFavorite(fav) }} />
        </div>

    )
}

export default FavoriteCard