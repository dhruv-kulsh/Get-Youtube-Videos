import { createContext, useReducer, useContext, useState } from "react";

const appContext = createContext();

const AppProvider = ({ children }) => {

    const initialData = {
        api: "https://api.freeapi.app/api/v1/public/youtube/videos",
        count: 0,
        number: 1
    };
    const [data, setData] = useState(initialData);

    return (
        <>
            <appContext.Provider value={{ data }}>{children}</appContext.Provider>
        </>
    )
}

const globalContext = () => {
    return useContext(appContext)
}

export { globalContext };

export {AppProvider}