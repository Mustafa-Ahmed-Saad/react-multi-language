import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';
import translateFile from '../../../public/assets/locales/en/translation.json'; // Your file path
import { Input, Text } from '@chakra-ui/react';

const myTranslateFile = Object.keys(translateFile).map((attribute) => {
  return {
    label: attribute,
    value: translateFile[attribute],
  };
});

const initialValues = {
  lines: myTranslateFile,
};

const FormLanguage = () => (
  <div>
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ values, handleChange }) => (
        <Form>
          <FieldArray name="lines">
            {({ insert, remove, push }) => (
              <div>
                {values.lines.length > 0 &&
                  values.lines.map((line, index) => (
                    <div className="row" key={index}>
                      <div className="col">
                        <label htmlFor={`lines.${index}.label`}>
                          <Text mb="8px">Label:</Text>
                        </label>
                        {/* <Field name={`lines.${index}.label`} placeholder="Jane Doe" type="text" /> */}
                        <Input name={`lines.${index}.label`} type="text" value={values.lines[index].label} onChange={handleChange} placeholder="Enter label" size="sm" />
                        <ErrorMessage name={`lines.${index}.label`} component="div" className="field-error" />
                      </div>
                      <div className="col">
                        <label htmlFor={`lines.${index}.value`}>
                          <Text mb="8px">Value:</Text>
                        </label>
                        {/* <Field name={`lines.${index}.value`} placeholder="jane@acme.com" type="value" /> */}
                        <Input name={`lines.${index}.value`} type="value" value={values.lines[index].value} onChange={handleChange} placeholder="Enter value" size="sm" />
                        <ErrorMessage name={`lines.${index}.label`} component="div" className="field-error" />
                      </div>
                      <div className="col">
                        <button type="button" className="secondary" onClick={() => remove(index)}>
                          X
                        </button>
                      </div>
                      <br />
                      <hr />
                    </div>
                  ))}
                <br />
                <button type="button" className="btn btn-primary" onClick={() => push({ label: '', value: '' })}>
                  +
                </button>
                <br />
                <br />
              </div>
            )}
          </FieldArray>
          <button type="submit" className="submit btn btn-primary">
            submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default FormLanguage;
