import logo from './logo.svg';
import './App.css';
import { useFormik } from 'formik';

function App() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: ''
    },
    onSubmit: values =>{
      console.log('form:', values)
    },
    validate: values => {
      let errors = {};
        errors.submit = 'Login Successful';
      if(!values.email) {
        errors.email = 'Field required';
        errors.submit = '';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
        errors.submit = '';
      }

      if(!values.password) {
        errors.password = 'Field required';
        errors.submit = '';
      }
      return errors;
    }
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Login</div>
        <div>Email</div>
        <input id="emailField" type="text" onChange={formik.handleChange} value={formik.values.email}/>
        {formik.errors.email ? <div id="emailError" style={{color:'red'}}>{formik.errors.email}</div> : null}
        <div>Password</div>
        <input id="pswField" type="text" onChange={formik.handleChange} value={formik.values.password}/>
        {formik.errors.password ? <div id="pswError" style={{color:'red'}}>{formik.errors.password}</div> : null}
        <button id="submitBtn" type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;
