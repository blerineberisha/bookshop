import "react-app-polyfill/ie11";
import * as React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import "./Form.css";
import AddBook from "./AddBook";
import { BookType } from "./Book";

const NewBook = () => {
  const handleSubmit = (values: BookType): void => {
    AddBook(values);
  };
  const SignupSchema = Yup.object().shape({
    id: Yup.string()
    .min(5, "ID has to be at least 5 characters long.")
    .max(10, "ID shouldn't be longer than 10 characters."),
    
  });

  return (
    <div className="body">
      <Formik
        initialValues={{
          id: 0,
          image: "",
          book_title: "",
          author: "",
          book_description: "",
          price: "",
          publisher: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={SignupSchema}
        validateOnChange={false}
        
      >
        {({ errors, touched, isSubmitting }) => (
          <div>
            <Form>
              <fieldset>
                <legend>Add a book</legend>
                <div className="inputLabel">
                  <label htmlFor="id">ID</label>
                </div>
                <div>
                  <Field className="field" id="id" name="id" placeholder="21" />
                  <div className="error">{touched.id && errors.id}</div>
                </div>
                
                <div className="inputLabel">
                  <label htmlFor="img">Image source</label>
                </div>
                <div>
                  <Field
                    className="field"
                    id="image"
                    name="image"
                    placeholder="https://...."
                  />
                  <div className="error">{touched.image && errors.image}</div>
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
                  <div className="error">{touched.book_title && errors.book_title}</div>
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
                  <div className="error">{touched.book_description && errors.book_description}</div>
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
                  <div className="error">{touched.price && errors.price}</div>
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
                  <div className="error">{touched.publisher && errors.publisher}</div>
                </div>
                <div className="button-submit">
                  <button type="submit" className="sumbit" disabled={isSubmitting}>
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
