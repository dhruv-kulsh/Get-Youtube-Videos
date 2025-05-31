import { useEffect, useState } from "react";
import { Screen } from "./Screen";
import { globalContext } from "./context";

export const App = () => {

  const { data, apiData } = globalContext();
  const {count, number} = data;



  return (
    <>
      <Screen />
      <h1>Title</h1>
      {count + 1}
      {
        apiData?.data?.data?.map((datapoint) => {
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
