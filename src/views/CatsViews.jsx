import React, { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch'

const CatsViews = () => {

    const { data, isLoading, refetch } = useFetch("https://api.thecatapi.com/v1/images/search");

    const image = isLoading ? "" : data[0]?.url;

    const [favs, setFavs] = useState([]);


    const handleAddToFavs = () => {};
    const handleRemoveFromFavs = () => {};



    return (
        <>
        <div>CatsViews
            <img src={image} alt="Gatitos" />
        </div>
        <div>
            <button onClick={refetch} disabled={isLoading}>👀</button>
        </div>
        <div>
            Favorios
            <div>
                <img src="" alt="" />
            </div>
        </div>

        </>
    )
}

export default CatsViews