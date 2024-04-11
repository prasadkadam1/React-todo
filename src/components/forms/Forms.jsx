import React from "react";

const Forms = ({ handleChange, handleSubmit, trainer, course }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form">
        <div className="formGroup">

          <input
            className="courseInput"
            type="text"
            value={course}
            required
            name="course"
            placeholder="course"
            onChange={handleChange}
          ></input>
        </div>
        <div>

          <input
            className="courseInput"
            type="text"
            value={trainer}
            required
            name="trainer"
            placeholder="trainer"
            onChange={handleChange}
          ></input>
        </div>

        <div>
          <button className="submitButton">submit</button>
        </div>
      </div>
    </form>
  );
};

export default Forms;
