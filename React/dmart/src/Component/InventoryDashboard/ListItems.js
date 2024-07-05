import React, { useState } from "react";
import groceriesData from '../../Component/item.js';

let ListItems = () => {
console.log(groceriesData)
  let [list, setList] = useState(groceriesData);
  console.log(list);
  return (
    <div>
      <div>
        {list.map((data) => {
          console.log(data);
          return (
            <div>
              <h1>{data.name}</h1>
              <img src={data.image} width="200px" height="200px"/>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ListItems;
