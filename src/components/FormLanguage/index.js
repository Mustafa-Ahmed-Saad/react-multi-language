import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import { schema } from '../validation/index';
import { Input } from '@chakra-ui/react';

const FormLanguage = ({ onSubmit, values }) => {
  return (
    // TODO add validationSchema={schema}
    <Formik enableReinitialize={true} initialValues={values} onSubmit={onSubmit}>
      {(props) => {
        return (
          <Form className="form" autoComplete="off">
            {Object.keys(values).map((attribute, index) => {
              return (
                <div className="input-container ic1" key={index}>
                  <label mb="8px" htmlFor={attribute}>
                    {attribute}
                  </label>{' '}
                  <br />
                  <Input id={attribute} name={attribute} type="text" onChange={props.handleChange} value={props.values[attribute]} />
                  <div className="cut cut-short"></div>
                  <ErrorMessage name={attribute} />
                  <br />
                </div>
              );
            })}

            <button type="submit" className="submit btn btn-primary">
              submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormLanguage;
