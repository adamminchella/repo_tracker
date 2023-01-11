
import { useState, useEffect } from 'react';

const getFetch = (url) => { 

    // Defining variables
    const [data, setData] = useState(null); 
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    // Fetching data
    useEffect(() => { 
        fetch(url) 

        .then(res => { 
            if (!res.ok) { 
                throw Error('Could not fetch data')
            } 
            return res.json() 
        })

        .then(data => { 
            setIsPending(false); 
            setData(data);
            setError(null) 
        })

        .catch(err => { 
            setIsPending(false); 
            setError(err.message); 
        })
        console.log('use effect ran')
    }, [url]); 

    return { data, isPending, error }
}

// Exporting the function
export default getFetch;