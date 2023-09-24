import React, { useState} from "react";
import MyList from "./MyList";
const Body = () => {
  const [activity, setActivity] = useState("");
  const [listData, setlistData] = useState([]);


  const addActivity = () => {
    setlistData(listData => [...listData, activity]);
    setActivity("");
  };

  const removeActivity = (i) => {
    const updatedListData = listData.filter((elem, id) => {
      return i !== id;
    });
    setlistData(updatedListData);
  };

  const removeAll = () => {
    setlistData([]);
  };

  return (
    <div>
      <h1>hello this is my todolist</h1>

      <input
        type="text"
        placeholder="my-activity"
        value={activity}
        onChange={(e) => setActivity(e.target.value)}
      ></input>

      <button onClick={addActivity}>add</button>
      <h2>here is your list</h2>
      {listData.length > 0 &&
        listData.map((data, i) => {
          return (
            <MyList name= {data} key= {i} rm = {()=> removeActivity(i)}/>
          );
        })}
      {listData.length >= 1 && (
        <button onClick={removeAll}>removeall</button>
      )}
    </div>
  );
};

export default Body;
