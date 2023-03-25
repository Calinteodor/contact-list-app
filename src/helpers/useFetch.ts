import { useEffect, useState } from 'react';

//Used axios library for fetching data from the fake API
import axios from 'axios';


export function useFetch(url: string) {
    const [ data, setData ] = useState(null);
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(null);

    useEffect(() => {

        //Used for tracking
        setLoading(true);
        axios.get(url).then((response) => {
            setData(response.data);
        }).catch((err) => {
            setError(err)
        }).finally(() => {

            //No matter the result, when the promise is resolved.
            setLoading(false)
        })
    }, [ url ])

    return {
        data,
        loading,
        error
    }
}
