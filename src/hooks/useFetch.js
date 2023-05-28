import React, { useState, useEffect } from 'react'


const useFetch = (url, { initialState = null } = {}) => {

  const [data, setData] = useState(initialState);
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState();
  const [refresh, setRefresh] = useState(false);

  const refetch = () => setRefresh(!refresh);

  const setLocalData = (data) => setData(data);


  useEffect( ()=> { 
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch (url);
        if(!response){
          throw new Error ("Algo anda mal");
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError("Algo anda mal");        
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [refresh]);


return {
    data,
    isLoading,
    error,
    setLocalData,
    refetch,

}

}

export default useFetch