import React, { useState, useEffect } from 'react'



const useFetch = (url, {initialState = null} = {}) => {
    const [data, setData] = useState(initialState);
    const [isLoading, setIsLoading] = useState();
    const [error, setError] = useState();
    const [refresh, setRefresh] = useState(false);

    const refetch = () => setRefresh(!refresh);

    
    useEffect(() => {

        const fetchData = async () => {
            setIsLoading(true);
            setError(null);
            try {

                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Algo anda mal");
                }
                const [data] = response.json();
                console.log(data);
                setData(data.url);

            } catch (error) {

                setError("Algo anda mal!")
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();

    }, [refresh]);

    return {
        data,        
        isLoading,
        error,
        refetch,
    };
 
}

export default useFetch