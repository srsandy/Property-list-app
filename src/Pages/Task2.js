import { useEffect, useState } from "react";
import "../App.css";
import AddPropertyForm from "../Components/AddPropertyForm";
import PropertyCard from "../Components/PropertyCard";
import { createRecord, deleteRecord, fetchRecords } from "../Services/airtable";

function Task2() {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const onFormSubmit = async (formInputs) => {
    setIsLoading(true);
    await createRecord(formInputs);
    const records = await fetchRecords();
    setList(records);
    setIsLoading(false);
  };

  const deleteProperty = async (idx) => {
    setIsLoading(true);
    await deleteRecord(idx);
    const records = await fetchRecords();
    setList(records);
    setIsLoading(false);
  };

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const records = await fetchRecords();
      setList(records);
      setIsLoading(false);
    })();
  }, []);

  return (
    <div className="App">
      <div className="propertiesList">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          list.map((property) => (
            <PropertyCard
              key={property.id}
              id={property.id}
              property={property}
              deleteFn={deleteProperty}
            />
          ))
        )}
      </div>
      <div className="addProperty">
        <AddPropertyForm onSubmit={onFormSubmit} />
      </div>
    </div>
  );
}

export default Task2;
