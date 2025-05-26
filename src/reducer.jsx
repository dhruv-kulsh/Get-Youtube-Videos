import { useReducer } from "react";

const initialData ={
    api: "https://api.freeapi.app/api/v1/public/youtube/videos",
    count: 0,
    number: 1
}

const [data, setData] = useReducer(reducer, initialData);

const reducer = (state, action) => {
    switch(action.type){
        case "INCREMENT":
            
    }
}

export {}