// import React, { useState } from "react";

const ExerciseDropdown = ({onChange}) => {
  // const [exercise, setExercise] = useState("");

  // const handleChange = (event) => {
  //   setExercise(event.target.value);
  // };

  const initExerciseObj = (name, degrees) => {
    return {name: name, degrees: degrees, key: name + degrees};
  }

  // const exercises = ["H1. 13456543", "H2. 13654543", "H3. 13654345"];
  const defaultExercises = [
    initExerciseObj("Hanon 1", "13456543"), 
    initExerciseObj("Hanon 2", "13654543"),
    initExerciseObj("Hanon 3", "13654345"), 
  ];

  localStorage.setItem("exercises", JSON.stringify(defaultExercises));
  const exercises = JSON.parse(localStorage.getItem("exercises"));

  return (
    <>
      <label className="mr-sm-2" for="exerciseSelect">
        Select Exercise:
      </label>
      <select
        className="form-select mr-sm-2"
        id="exerciseSelect"
        name="exercise"
        // value={exercise}
        onChange={onChange}
      >
        {exercises.map((cur, index) => (
          <option value={cur.name} id={index}>{cur.name}: {cur.degrees}</option>
        ))};
        {/* /* <option value="squats">Squats</option>
        <option value="deadlifts">Deadlifts</option>
        <option value="bench press">Bench Press</option> */}
      </select>
    </>
  );
};

export default ExerciseDropdown;

// In a React application, App.js and index.js are both important files that serve different purposes.

// App.js is typically used to define the root component of the application. This is the component that is rendered to the DOM when the application is launched, and it serves as the entry point for the rest of the components in the application. The App component is usually defined in a separate file called App.js, which exports the component so that it can be imported and used by other parts of the application.

// On the other hand, index.js is the entry point for the application. This is the file that is executed first when the application is launched, and it is responsible for rendering the root component to the DOM. In addition to rendering the root component, index.js may also contain code that is needed to set up the application, such as importing dependencies and initializing any global state.

// To summarize, App.js defines the root component of the application, while index.js is the entry point for the application and is responsible for rendering the root component to the DOM.

// I hope this helps! Let me know if you have any questions or need further assistance.
