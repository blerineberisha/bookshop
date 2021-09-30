import "react-app-polyfill/ie11";
import * as React from "react";
import { Formik, Field, Form, FormikHelpers } from "formik";
import * as Yup from "yup";
import "./Form.css";

interface Values {
  id: string;
  img: string;
  book_title: string;
  author: string;
  book_description: string;
  price: string;
  publisher: string;
}

const NewBook = () => {
  const SignupSchema = Yup.object().shape({});

  return (
    <div className="body">
      <Formik
        initialValues={{
          id: "",
          img: "",
          book_title: "",
          author: "",
          book_description: "",
          price: "",
          publisher: "",
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
                <legend>Add a book</legend>
                <div className="inputLabel">
                  <label htmlFor="id">ID</label>
                </div>
                <div>
                  <Field className="field" id="id" name="id" placeholder="21" />
                </div>
                <div className="inputLabel">
                  <label htmlFor="img">Image source</label>
                </div>
                <div>
                  <Field
                    className="field"
                    id="img"
                    name="img"
                    placeholder="https://...."
                  />
                </div>
                <div className="inputLabel">
                  <label htmlFor="book_title">Book title</label>{" "}
                </div>
                <div>
                  <Field
                    className="field"
                    id="book_title"
                    name="book_title"
                    placeholder="A midsummer night's dream"
                  />
                </div>
                <div className="inputLabel">
                  <label htmlFor="author">Author</label>{" "}
                </div>
                <div>
                  <Field
                    className="field"
                    id="author"
                    name="author"
                    placeholder="William Shakespeare"
                  />
                </div>
                <div className="inputLabel">
                  <label htmlFor="book_description">Description</label>{" "}
                </div>
                <div>
                  <textarea
                    className="field"
                    id="book_description"
                    name="book_description"
                    placeholder="Once upon a time, things were fine. Until they weren't."
                  />
                </div>
                <div className="inputLabel">
                  <label htmlFor="price">Price</label>{" "}
                </div>
                <div>
                  <Field
                    className="field"
                    id="price"
                    name="price"
                    placeholder="26"
                    type="number"
                  />
                </div>
                <div className="inputLabel">
                  <label htmlFor="publisher">Publisher</label>{" "}
                </div>
                <div>
                  <Field
                    className="field"
                    id="publisher"
                    name="publisher"
                    placeholder="Penguin"
                  />
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

export default NewBook;
