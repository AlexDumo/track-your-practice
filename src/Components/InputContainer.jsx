import React from "react";
// import ExerciseDropdown from "./ExerciseDropdown";
// import TempoInput from "./TempoInput";
// import ArchiveButton from "./ArchiveButton";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

const InputContainer = () => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    // console.log("errors are " + formData.tempo);

    // Name errors
    if (formData.name === undefined)
      newErrors.name = "Please select an exercise";

    // Tempo errors
    if (!formData.tempo) 
      newErrors.tempo = "Tempo is required";
    else if (isNaN(Number(formData.tempo))) 
      newErrors.tempoNum = "Tempo must be a valid number";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  // generates a key for an exercise event
  const genKey = (formData) => {
    return (
      formData["name"] +
      formData["tempo"] +
      (formData["date"] || new Date().toISOString())
    );
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
      date: new Date().toISOString(),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Returns if form validation fails
    if(!validateForm()) return;

    // Create a temporary form data 
    // so that the updated one can be displayed
    const updatedFormData = {
      ...formData,
      "key": genKey(formData)
    };
    setFormData(updatedFormData);
    console.log(updatedFormData);
  };

  const initExerciseObj = (name, degrees) => {
    return { name: name, degrees: degrees, key: name + degrees };
  };

  // const exercises = ["H1. 13456543", "H2. 13654543", "H3. 13654345"];
  const defaultExercises = [
    initExerciseObj("Hanon 1", "13456543"),
    initExerciseObj("Hanon 2", "13654543"),
    initExerciseObj("Hanon 3", "13654345"),
  ];

  localStorage.setItem("exercises", JSON.stringify(defaultExercises));
  const exercises = JSON.parse(localStorage.getItem("exercises"));

  // set the default formData
  // const defaultTempo = 120;
  // setFormData({
  //   "name": defaultExercises[0].name,
  //   "tempo": defaultTempo
  // });

  return (
    <div className="container text-center">
      <form className="form-inline" onSubmit={handleSubmit}>
        <div className="row">
          <label className="mr-sm-2" for="exerciseSelect">
            Select Exercise:
          </label>
          <select
            className="form-select mr-sm-2"
            id="exerciseSelect"
            name="name"
            // value="--"
            onChange={handleChange}
          >
            <option value={undefined}>--</option>
            {exercises.map((cur, index) => (
              <option value={cur.name} id={index}>
                {cur.name}: {cur.degrees}
              </option>
            ))}
            ;
          </select>
        </div>
        <div className="row">
          <label>
            Tempo:
            <input type="text" name="tempo" onChange={handleChange} />
            <label for="tempo">bpm</label>
            {/* {errors.tempo && <div className="error">{errors.tempo}</div>}
            {errors.tempo && <div className="error">{errors.tempo}</div>} */}
          </label>
        </div>
        <div className="row">
          <button className="btn btn-primary" type="submit">
            Add to Archive
          </button>
        </div>
          {Object.values(errors).map((cur) => (
            <div className="error">{cur}</div>
          ))}
      </form>
      <button className="btn btn-secondary">Add Exercise</button>
    </div>
  );
};

export default InputContainer;
