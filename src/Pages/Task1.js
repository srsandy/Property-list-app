import { useState } from "react";
import "../App.css";
import AddPropertyForm from "../Components/AddPropertyForm";
import PropertyCard from "../Components/PropertyCard";

function Task1() {
  const [list, setList] = useState([]);

  const onFormSubmit = (formInputs) => {
    setList([...list, formInputs]);
  };

  const deleteProperty = (idx) => {
    const tempList = [...list];
    tempList.splice(idx, 1);
    setList(tempList);
  };

  return (
    <div className="App">
      <div className="propertiesList">
        {list.map((property, idx) => (
          <PropertyCard
            key={idx}
            id={idx}
            property={property}
            deleteFn={deleteProperty}
          />
        ))}
      </div>
      <div className="addProperty">
        <AddPropertyForm onSubmit={onFormSubmit} />
      </div>
    </div>
  );
}

export default Task1;
