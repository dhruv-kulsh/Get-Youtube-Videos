import { useEffect, useState } from "react";
import { Screen } from "./Screen";
import { globalContext } from "./context";

export const App = () => {

  const { data } = globalContext();
  const {api, count, number} = data;

  // console.log(data);
  console.log(api);  


  const fetchData = async () => {

    try {
      const res = await fetch(api);
      const data = await res.json();      
      console.log(data);
    } catch (error) {
      console.log(error.message);

    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    // console.log(api);
  }, [api]);

  return (
    <>
      <Screen />
      <h1>Title</h1>
      {count + 1}
      {
        api?.data?.data?.map((datapoint) => {
          return (
            < ul key = { datapoint.items.id } >
              <li>{datapoint.items.snippet.title}</li>
            </ul >
          )
        })
      }
    </>
  )
}
