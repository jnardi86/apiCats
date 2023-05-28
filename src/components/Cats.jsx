import React, { createContext, useContext } from 'react'
import useFavs from '../hooks/useFavs';
import useFetch from '../hooks/useFetch';
import Viewer from './Viewer';
import FavoriteCarousel from './FavoriteCarousel';

const CatsContext = createContext();
const { Provider } = CatsContext;
export const useCatsContext = () => useContext(CatsContext);

const Cats = ({children}) => {

    const { data, isLoading, refetch, setLocalData } = useFetch("https://api.thecatapi.com/v1/images/search");

    const { favs, handleFavorites } = useFavs();

    //const image = isLoading ? "" : data[0]?.url;
    const image = isLoading || !data ? "" : data[0].url;
    
    
    const showFavorite = (fav) => {
        setLocalData([
            {
                url: fav,
            },
        ]);
    }

    return (
        <Provider
            value={{
                data,
                refetch,
                isLoading,
                handleFavorites,
                setLocalData,
                favs,
                image,
                showFavorite,
            }}
        >
            <>
                {children}
            </>

        </Provider>





    )
}

Cats.Viewer = Viewer;
Cats.FavoriteCarousel = FavoriteCarousel;

export default Cats