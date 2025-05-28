import { useEffect, useState } from "react";
import { Screen } from "./Screen";
import { globalContext } from "./context";

export const App = () => {
  const api = "https://api.freeapi.app/api/v1/public/youtube/videos";


  const fetchData = async () => {

    try {
      const res = await fetch(api);
      const data = await res.json();
      console.log(data);
      setApiData(data);
    } catch (error) {
      console.log(error.message);

    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log(apiData);
  }, [apiData]);

  return (
    <>
      <Screen />
      <h1>Title</h1>
      {
        apiData?.data?.data?.map((datapoint) => {
          return (
            <ul key={datapoint.items.id}>
              <li>{datapoint.items.snippet.title}</li>
            </ul>
          )
        })
      }
    </>
  )
}
