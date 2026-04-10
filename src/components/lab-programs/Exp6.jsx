import React, { useState } from 'react';

const Exp6 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const validate = () => {
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = "Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Min 6 characters";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      setSubmittedData(formData);
      setErrors({});
    } else {
      setErrors(validationErrors);
      setSubmittedData(null);
    }
  };

  return (
    <div>
      <h2>Experiment 6: Form Validation</h2>
      <p>Collect and validate user input for name, email, and password.</p>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label><br />
          <input
            type="text"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />
          {errors.name && <p>{errors.name}</p>}
        </div>

        <div>
          <label>Email</label><br />
          <input
            type="text"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div>
          <label>Password</label><br />
          <input
            type={showPassword ? 'text' : 'password'}
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
          {errors.password && <p>{errors.password}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div>
          <h4>Submitted Data</h4>
          <p><b>Name:</b> {submittedData.name}</p>
          <p><b>Email:</b> {submittedData.email}</p>
        </div>
      )}
    </div>
  );
};

export default Exp6;