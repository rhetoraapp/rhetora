import React, { useState } from "react";
import Navbar from "../components/navbar";
import SignupButton from "../components/communitywaitlist";
import Footer from "../components/footer";
import Background from "../assets/Hero-lines.svg";
import slackgraphic from "../assets/slackGraphic.png";
// formik
import { useFormik, Form, FormikProvider } from "formik";
// Yup
import * as Yup from "yup";
import { PostAccessRequest } from "../api";
import { Link } from "react-router-dom";
import InviteFriendComponent from "../components/InviteFriend";

const Invited = () => {
  const [hide, setHide] = useState(false);
  // validation schema
  const LoginSchema = Yup.object().shape({
    name: Yup.string().required("Name is required."),
    companyName: Yup.string().required("Company name is required."),
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("The Email address field is required."),
  });

  // formik
  const formik = useFormik({
    initialValues: {
      name: "",
      companyName: "",
      email: "",
    },

    validationSchema: LoginSchema,
    onSubmit: async (values, { setErrors, setSubmitting, resetForm }) => {
      console.log("values", values);
      try {
        const result = await PostAccessRequest({
          name: values.name,
          companyName: values.companyName,
          email: values.email,
        });
        console.log(result);
        if (result && result.status === "200") {
          setErrors({
            success: result.message || "Successfully Requested!",
            queueNumber: result.payload.queueNumber,
          });
          localStorage.setItem("successfullAccess", values.email);
          setHide(true);
        } else {
          console.log("error", result);
          setErrors({
            afterSubmit:
              result?.response.data.message || "Request Failed, Try again!",
          });
        }
        values.name = "";
        values.companyName = "";
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
  return (
    <div>
      <Navbar />
      <div
        id="i-background"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
        }}
      >
        {!hide && (
          <FormikProvider value={formik}>
            <Form
              autoComplete="off"
              noValidate
              // onSubmit={handleSubmit}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="container hero d-flex flex-column justify-content-around align-items-center">
                <div className="flex w-full justify-center p-2">
                  <div className="p-12 md:p-20 w-full md:w-4/6 flex justify-center flex-col bg-white rounded-3xl shadow my-5">
                    <h1 className="text-center text-main">
                      rhetora is <br></br>Launching Soon
                    </h1>
                    <p className="tc mt-2">
                      Designed by sales professionals, for sales professionals.
                    </p>
                    <div className="mt-4">
                      {/* Error handling */}
                      {errors && errors.success && (
                        <div
                          className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
                          role="alert"
                        >
                          <span className="font-medium">
                            {errors.success}, your Queue number is{" "}
                            <b>
                              {errors.queueNumber},{" "}
                              <Link to="/invite-friend">
                                Invite Friends to skip to queue ➡
                              </Link>
                            </b>
                          </span>
                        </div>
                      )}
                      {errors && errors.afterSubmit && (
                        <div
                          className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                          role="alert"
                        >
                          <span className="font-medium">
                            {errors.afterSubmit}
                          </span>
                        </div>
                      )}
                      {(errors.name || errors.companyName) && (
                        <div
                          className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                          role="alert"
                        >
                          <span className="font-medium">
                            Kindly fill all the fields!
                          </span>
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
                      {/* Error handling */}
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                        <input
                          type="text"
                          placeholder="Name"
                          {...getFieldProps("name")}
                          className="md:col-start-1 md:col-end-3 border-1 border-main rounded-lg placeholder:text-base placeholder:text-gray-300 placeholder:text-left "
                        />
                        <input
                          type="text"
                          {...getFieldProps("companyName")}
                          placeholder="Company Name"
                          className="md:col-start-3 md:col-end-5 border-1 border-main rounded-lg placeholder:text-base placeholder:text-gray-300 placeholder:text-left "
                        />
                        <input
                          type="text"
                          {...getFieldProps("email")}
                          placeholder="Email"
                          className="md:col-start-1 md:col-end-4 border-1 border-main rounded-lg placeholder:text-base placeholder:text-gray-300 placeholder:text-left "
                        />
                        <button
                          type="submit"
                          onClick={handleSubmit}
                          style={{ paddingTop: "12px" }}
                          className="md:col-start-4 pb-2 md:col-end-5 bg-main text-white rounded-lg"
                        >
                          Get Early Access
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          </FormikProvider>
        )}
        {hide && <InviteFriendComponent />}

        <div className="w-full d-flex justify-center">
          <img src={slackgraphic} className="w-10/12 md:9/12" alt="slack-graphic" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Invited;
