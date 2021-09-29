import "react-app-polyfill/ie11";
import * as React from "react";
import { Formik, Field, Form, FormikHelpers } from "formik";
import * as Yup from "yup";
import "./Form.css";

interface Values {
  firstName: string;
  lastName: string;
  email: string;
}

const FormElement = () => {
  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too short!")
      .max(50, "Too long!")
      .required("Please enter your first name."),
    lastName: Yup.string()
      .min(2, "Too short!")
      .max(50, "Too long!")
      .required("Please enter your last name."),
    email: Yup.string()
      .email("Invalid email address")
      .required("Please enter your email address."),
    password: Yup.string()
      .min(8, "Too short!")
      .max(50, "Too long!")
      .required("Please enter a password."),
  });
  /*function validateEmail(value: string) {
    let error;
    if (!value) {
      error = "Email address is required";
      alert(error);
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
      alert(error);
    }
    return error;
  }

  function validateName(value: string) {
    let error;
    if (!value) {
      error = "Name is required";
      alert(error);
    }
  }*/

  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
        }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
        validationSchema={SignupSchema}
        validateOnBlur={false}
        validateOnChange={false}
      >
        <div>
          <Form>
            <fieldset>
              <legend>Sign up</legend>
              <div>
                <label htmlFor="firstName">First Name</label>
              </div>
              <div>
                <Field
                  className="field"
                  id="firstName"
                  name="firstName"
                  placeholder="John"
                  required
                  // validate={validateName}
                />
              </div>
              <div>
                <label htmlFor="lastName">Last Name</label>
              </div>
              <div>
                <Field
                  className="field"
                  id="lastName"
                  name="lastName"
                  placeholder="Doe"
                  required
                  //validate={validateName}
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>{" "}
              </div>
              <div>
                <Field
                  className="field"
                  id="email"
                  name="email"
                  placeholder="john@doe.com"
                  required
                  type="email"
                  //validate={validateEmail}
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>{" "}
              </div>
              <div>
                <Field
                  className="field"
                  id="password"
                  name="password"
                  placeholder="·····"
                  required
                  type="password"
                  //validate={validateEmail}
                />
              </div>
              <div>
                <button type="submit">Submit</button>
              </div>
            </fieldset>
          </Form>
        </div>
      </Formik>
    </div>
  );
};

export default FormElement;
