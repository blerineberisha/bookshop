import "react-app-polyfill/ie11";
import * as React from "react";
import { Formik, Field, Form, FormikHelpers } from "formik";
import * as Yup from "yup";
import "./Form.css";
interface Values {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
let lcNum = new RegExp("(?=.*[a-z])");
let ucNum = new RegExp("(?=.*[A-Z])");
let num = new RegExp("(?=.*[1-9])");

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
      .required("Please enter a password.")
      .matches(lcNum, "Please include at least one lowercase letter.")
      .matches(ucNum, "Please include at least one uppercase letter.")
      .matches(num, "Please include at least one number."),
  });

  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
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
        validateOnChange={false}
      >
        {({ errors, touched }) => (
          <div>
            <Form>
              <fieldset>
                <legend>Sign up</legend>
                <div className="inputLabel">
                  <label htmlFor="firstName">First Name</label>
                </div>
                <div>
                  <Field
                    className="field"
                    id="firstName"
                    name="firstName"
                    placeholder="John"
                  />
                  {errors.firstName && touched.firstName && (
                    <div className="error">{errors.firstName}</div>
                  )}
                </div>
                <div className="inputLabel">
                  <label htmlFor="lastName">Last Name</label>
                </div>
                <div>
                  <Field
                    className="field"
                    id="lastName"
                    name="lastName"
                    placeholder="Doe"
                  />
                  {errors.lastName && touched.lastName && (
                    <div className="error">{errors.lastName}</div>
                  )}
                </div>
                <div className="inputLabel">
                  <label htmlFor="email">Email</label>{" "}
                </div>
                <div>
                  <Field
                    className="field"
                    id="email"
                    name="email"
                    placeholder="john@doe.com"
                  />
                  {errors.email && touched.email && (
                    <div className="error">{errors.email}</div>
                  )}
                </div>
                <div className="inputLabel">
                  <label htmlFor="password">Password</label>{" "}
                </div>
                <div>
                  <Field
                    className="field"
                    id="password"
                    name="password"
                    placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;"
                    type="password"
                  />
                  {errors.password && touched.password && (
                    <div className="error">{errors.password}</div>
                  )}
                </div>
                <div className="button-submit">
                  <button type="submit" className="sumbit">
                    Submit
                  </button>
                </div>
              </fieldset>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default FormElement;
