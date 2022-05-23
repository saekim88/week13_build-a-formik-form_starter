import React from "react";
// TODO: import useFormik from formik library
import {useFormik} from "formik"

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: values => {
      alert('Login Successful');
    },
    validate: values => {
      let errors = {};
      if (!values.email) {
        errors.email = "field required";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      if (!values.password) errors.password = "field required";
      return errors;
    }
  })

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email</div>
        <input name="email" type="text" onChange={formik.handleChange} value={formik.values.email}/>
        {formik.errors.email ? <div style={{color: 'red'}}>{formik.errors.email}</div> : <div>&nbsp;</div>}
        <div>Password</div>
        <input name="password" type="password" onChange={formik.handleChange} value={formik.values.password}/>
        {formik.errors.password ? <div style={{color: 'red'}}>{formik.errors.password}</div> : <div>&nbsp;</div>}
        <br/>
        <button type="submit">Submit</button>
      </form>
      <p>
        The app is ready! You can proceed with the task instructions. TODO:
        build you form here.
      </p>
    </div>
  );
}

export default App;
