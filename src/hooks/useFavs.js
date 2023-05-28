import React, {useState, useEffect} from 'react'
import { addToLocalStorage, getFromLocalStorage, cleanLocalStorage  } from '../utils/localStorage.utils';

const useFavs = () => {

    const [favs, setFavs] = useState([]);

    useEffect(() => {

        const favs = getFromLocalStorage("favs");
        console.log(favs);

        if (favs) {
            return setFavs(favs);
        }

    }, []);


    const isFavorite = (item) => favs.includes(item);

    const addToFavorites = (item) => {
        const newFavs = [...new Set([...favs, item])];
        setFavs(newFavs);
        addToLocalStorage("favs", newFavs);
    };
    const removeFromFavorites = (item) => {
        const newFavs = favs.filter((fav) => fav !== item);
        setFavs(newFavs);
        addToLocalStorage("favs", newFavs)
    };


    function handleFavorites(item) {

        isFavorite(item) ? removeFromFavorites(item) : addToFavorites(item);

    }

    return {
        favs,
        handleFavorites,
    }

}

export default useFavs