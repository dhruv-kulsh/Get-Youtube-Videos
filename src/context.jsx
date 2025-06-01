import { createContext, useContext, useState, useEffect } from "react";

const appContext = createContext();

const AppProvider = ({ children }) => {
    const api = "https://api.freeapi.app/api/v1/public/youtube/videos";

    const initialData = {
        count: 0,
        number: 1
    };
    const [data, setData] = useState(initialData);
    const [apiData, setApiData] = useState(null);

    const apiCall = async () => {
        try {
            const res = await fetch(api);
            const data = await res.json();
            setApiData(data);
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        apiCall();
    }, []);

    return (
        <>
            <appContext.Provider value={{ data, apiData }}>{children}</appContext.Provider>
        </>
    )
}

const globalContext = () => {
    return useContext(appContext)
}

export { globalContext };
export { AppProvider }