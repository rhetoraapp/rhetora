import React, { useState } from "react";
// formik
import { useFormik, Form, FormikProvider } from "formik";
// Yup
import * as Yup from "yup";
import { InviteFriendRequest, PostAccessRequest } from "../api";

const InviteFriendComponent = ({ firstQueueNumber }) => {
  const [hideForm1, setHideForm1] = useState(false);
  // validation schema
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("The Email address field is required."),
  });

  // formik
  const formik = useFormik({
    initialValues: {
      email: "",
    },

    validationSchema: LoginSchema,
    onSubmit: async (values, { setErrors, setSubmitting, resetForm }) => {
      console.log("values", values);
      try {
        const result = await InviteFriendRequest({
          email: values.email,
        });
        console.log(result);
        if (result && result.status === "200") {
          setErrors({
            success: result.message || "Successfully Requested!",
            queueNumber: result.payload.queueNumber,
          });
        } else {
          console.log("error", result);
          setErrors({
            afterSubmit:
              result?.response.data.message || "Request Failed, Try again!",
          });
        }
        values.email = "";
      } catch (error) {
        resetForm();
        setSubmitting(false);
        console.log("error", error);
        setErrors({ afterSubmit: error?.response.data.message });
      }
    },
  });

  const { errors, handleSubmit, getFieldProps } = formik;
  console.log("errors");
  return (
    <FormikProvider value={formik}>
      <Form
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="flex justify-center p-2">
          <div className="p-12 md:p-20 w-full md:w-4/6 flex justify-center flex-col bg-white rounded-3xl shadow my-5">
            {!errors.success && (
              <h1 className="text-center text-main text-2xl md:text-5xl">
                Your Queue Number is{" "}
                <span className="text-minor">{firstQueueNumber}</span>, Invite
                friend to skip to queue numbers!
              </h1>
            )}
            {errors.success && (
              <h1 className="text-center text-main text-2xl md:text-5xl">
                Awesome! Your new queue number is
                <span className="text-minor"> {errors.queueNumber}</span>
              </h1>
            )}
            <div className="mt-4">
              {/* Error handling */}
              {errors && errors.success && (
                <div
                  className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
                  role="alert"
                >
                  <span className="font-medium">
                    {errors.success}
                  </span>
                </div>
              )}
              {errors && errors.afterSubmit && (
                <div
                  className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                  role="alert"
                >
                  <span className="font-medium">{errors.afterSubmit}</span>
                </div>
              )}
              {errors && errors.email && (
                <div
                  className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                  role="alert"
                >
                  <span className="font-medium">{errors.email}</span>
                </div>
              )}
              {/* Error handling end */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
                <input
                  type="text"
                  {...getFieldProps("email")}
                  placeholder="Email"
                  className="border-1 h-full border-main rounded-lg placeholder:text-base placeholder:text-gray-300 placeholder:text-left "
                />
                <button
                  type="submit"
                  className="px-4 pb-2 bg-main text-white rounded-lg"
                  style={{ paddingTop: "14px" }}
                >
                  Invite Friend
                </button>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </FormikProvider>
  );
};

export default InviteFriendComponent;
