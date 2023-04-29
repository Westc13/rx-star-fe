import React from "react";

const Medication = () => {
  return (
    <div>
      <h1>Medication</h1>
      <form action="">
        <fieldset>
          <label htmlFor="">Heart Medication</label>
          <select name="" id="">
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
          </select>
        </fieldset>
        <fieldset>
          <label htmlFor="">Diabetes Medication</label>
          <select name="" id="">
            <option value="">Metformin</option>
            <option value="">Jardiance</option>
            <option value="">Ozempic</option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
          </select>
        </fieldset>
      </form>
    </div>
  );
};

export default Medication;
