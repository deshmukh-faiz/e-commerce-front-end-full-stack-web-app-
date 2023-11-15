import React, { createContext } from "react";
import ChilduseContext from "../useContext/ChilduseContext";

const Data1 = createContext(); // Create the context
const Data2 = createContext(); // Create the context
const Data3 = createContext(); // Create the context
const Data4 = createContext(); // Create the context
const Data5 = createContext(); // Create the context
const Offer = createContext(); // Create the context

function ParentuseContext() {
  const data1 = "Above 20K";
  const data2 = "20K-30K";
  const data3 = "30K-40K";
  const data4 = "40K-50K";
  const data5 = "50K-60K";
  const offer = "Offer 15% ";

  return (
    <Data1.Provider value={data1}>
      <Data2.Provider value={data2}>
        <Data3.Provider value={data3}>
          <Data4.Provider value={data4}>
            <Data5.Provider value={data5}>
              <Offer.Provider value={offer}>
                <ChilduseContext />
              </Offer.Provider>
            </Data5.Provider>
          </Data4.Provider>
        </Data3.Provider>
      </Data2.Provider>
    </Data1.Provider>
  );
}

export default ParentuseContext;
export { Data1, Data2, Data3, Data4, Data5, Offer };
