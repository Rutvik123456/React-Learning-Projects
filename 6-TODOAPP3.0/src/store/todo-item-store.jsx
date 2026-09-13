import { createContext, useReducer } from "react";

export const Toitemcontex = createContext({
  todoItems: [],
  onAddclick: () => {},
  onDeleteClick: () => {},
});

const reducerMethod = (curstatevalue, action) => {
  let newdataList = curstatevalue;

  if (action.type === "NEW_ITEM") {
    newdataList = [
      ...curstatevalue,
      { task: action.payload.task, date: action.payload.date },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newdataList = curstatevalue.filter(
      (item) => item.task !== action.payload.task,
    );
  }

  return newdataList;
};


const MainContextProvider = ({ children }) => {

    const [todoItems, dispatchObj] = useReducer(reducerMethod, []);

    const onAddclick = (itemName, itemDate) => {
    const AddclickObj = {
      type: "NEW_ITEM",
      payload: {
        task: itemName,
        date: itemDate,
      },
    };
    dispatchObj(AddclickObj);
  };


  const onDeleteClick = (itemName) => {
    const deleteObj = {
      type: "DELETE_ITEM",
      payload: {
        task: itemName,
      },
    };
    dispatchObj(deleteObj);
  };

  return (
    <Toitemcontex.Provider value={{ todoItems, onAddclick, onDeleteClick }}>
      {children}
    </Toitemcontex.Provider>
  );
};

export default MainContextProvider;
