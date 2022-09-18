import { useReducer } from "react";

const AddPropertyForm = ({ onSubmit = async () => {} }) => {
  const formInitalValues = {
    Name: "",
    Description: "",
    Size: "",
  };

  const formReducer = (state, action) => {
    switch (action.type) {
      case "INPUT":
        return {
          ...state,
          [action.key]: action.value,
        };
      case "CLEAR":
        return formInitalValues;
      default:
        return state;
    }
  };

  const [formInputs, dispatch] = useReducer(formReducer, formInitalValues);

  const handleAddProperty = async (e) => {
    e.preventDefault();
    await onSubmit(formInputs);
    dispatch({ type: "CLEAR" });
  };

  return (
    <form onSubmit={handleAddProperty}>
      <div>
        Name* :
        <input
          name="name"
          value={formInputs.Name}
          required
          onChange={(e) =>
            dispatch({ type: "INPUT", key: "Name", value: e.target.value })
          }
        />
      </div>
      <div>
        Description* :
        <textarea
          name="description"
          value={formInputs.Description}
          required
          onChange={(e) =>
            dispatch({
              type: "INPUT",
              key: "Description",
              value: e.target.value,
            })
          }
        ></textarea>
      </div>
      <div>
        Size* :
        <input
          name="size"
          value={formInputs.Size}
          required
          onChange={(e) =>
            dispatch({
              type: "INPUT",
              key: "Size",
              value: e.target.value,
            })
          }
        />
      </div>
      <button>Add Property</button>
    </form>
  );
};

export default AddPropertyForm;
