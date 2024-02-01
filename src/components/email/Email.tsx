import React from "react";
import {
  ContendorButton,
  ContenedorForms,
  ContenedorFormulario,
  Div,
} from "./EmailStyle";
import { Formik, Field, Form, FormikHelpers, ErrorMessage } from "formik";
import { validationSchema } from "./EmailValidacion";

const Email: React.FC<{}> = () => {
  return (
    <ContenedorFormulario>
      <ContenedorForms>
        <Formik
          initialValues={{
            user: "",
            email: "",
            msj: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(
            values: { user: string; email: string; msj: string },
            {
              setSubmitting,
            }: FormikHelpers<{ user: string; email: string; msj: string }>
          ) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 500);
          }}
        >
          <Form>
            <Div>
              <Field id="user" name="user" placeholder="NOMBRE" />
              <ErrorMessage
                name="user"
                component="div"
                className="error-message"
              />
            </Div>

            <Div>
              <Field id="email" name="email" placeholder="EMAIL" type="email" />
              <ErrorMessage
                name="email"
                component="div"
                className="error-message"
              />
            </Div>

            <Div>
              <Field id="msj" name="msj" as="textarea" placeholder="MENSAJE" />
              <ErrorMessage
                name="msj"
                component="div"
                className="error-message"
              />
            </Div>

            <ContendorButton>
              <button type="submit">Submit</button>
            </ContendorButton>
          </Form>
        </Formik>
      </ContenedorForms>
    </ContenedorFormulario>
  );
};

export default Email;
