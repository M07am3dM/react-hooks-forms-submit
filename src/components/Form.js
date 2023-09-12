import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState('Mohamed');
  const [lastName, setLastName] = useState('Matassi');
  const [submittedData, setSubmittedData] = useState([]);
  const [errors, setErrors] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    if (firstName.length > 0) {
      const formData = {
        firstName: firstName,
        lastName: lastName,
      };
      const dataArray = [...submittedData, formData];
      // props.sendFormDataSomewhere(formData);
      setSubmittedData(dataArray);
      setFirstName("");
      setLastName("");
    } else {
      setErrors(["First name is required!"]);
    }
  }

  const listOfSubmissions = submittedData.map((data, i) => {
    return (
      <div key={i}>
        {data.firstName} {data.lastName}
      </div>
    );
  });

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleFirstNameChange} value={firstName} />
        <input type="text" onChange={handleLastNameChange} value={lastName} />
        <button type="submit">Submit</button>
      </form>
      {errors.length > 0
        ? errors.map((error, i) => (
            <p key={i} style={{ color: "red" }}>
              {error}
            </p>
          ))
        : null}
      <h3>Submissions</h3>
      {listOfSubmissions}
    </div>
  );
}

export default Form;
