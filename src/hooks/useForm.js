import { useState } from "react";
export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const reset = () => {
    setValues(initialState);
  };
  const setFormValues = ({state}) => {
    setValues(state);
  };

  const handleInputChange = ({ target }) => {
    const [section, key] = target.name.split(".");
    // section is : company
    // key is : position
    
    if (key) {
        // if you have nested keys to update
        setValues({
          ...values,
          [section]: {
            ...values[section],
            [key]: target.value
          }
        });
    } else {
      // if you're updating on the first level
      setValues({
        ...values,
        [section]: target.value
      });
    }

  };


  return [values, handleInputChange, reset, setFormValues];
};