import React from 'react'
import { useCatsContext } from './Cats';

const Viewer = () => {

    const {
        data,
        refetch,
        isLoading,
        handleFavorites,
        image,
    } = useCatsContext();
    
    return (
        <div>
            <div>
                <h1>Gatitos</h1>
            </div>
            <div> {isLoading ? (
                <div>...Loading </div>
            ) : (<img src={image} alt="Gatitos" />)
            }
            </div>
            <div>
                <button onClick={refetch} disabled={isLoading}>👀</button>
                <button onClick={() => { handleFavorites(data[0].url); }}>❤</button>
            </div></div>
    )
}

export default Viewer