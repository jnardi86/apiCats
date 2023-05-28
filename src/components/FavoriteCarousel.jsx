import React from 'react'
import FavoriteCard from './FavoriteCard'
import { useCatsContext } from './Cats'

const FavoriteCarousel = () => {

    const { favs } = useCatsContext();

    return (
        <div>
            <div>
                Favoritos{
                    favs.map((fav) => (
                        <FavoriteCard
                            key={fav}
                            fav={fav}
                        />
                    ))}
            </div>
        </div>
    )
}

export default FavoriteCarousel