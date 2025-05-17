import { useState } from "react";
import { Screen } from "./Screen"

export const App = () => {
  const api = "https://api.freeapi.app/api/v1/public/youtube/videos";

  const [apiData, setApiData] = useState(null);

  const fetchData = async () => {

    try {
      const res = await fetch(api);
      const data = await res.json();
      console.log(data);
      setApiData[data];
    } catch(error) {
      console.log(error.message);

    }
  }

  fetchData();
  return (
    <>
      <Screen />
      {apiData}
    </>
  )
}
