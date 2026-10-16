import { useState } from "react";

function StudentForm() {
  const [name, setName] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [course, setCourse] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <h2>Student Details</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>ID Number: </label>
          <input
            type="text"
            value={idNumber}
            onChange={(e) => setIdNumber(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Course/Major: </label>
          <input
            type="text"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <div>
          <h3>Submitted Details:</h3>
          <p>Name: {name}</p>
          <p>ID Number: {idNumber}</p>
          <p>Course/Major: {course}</p>
        </div>
      )}
    </div>
  );
}

export default StudentForm;
