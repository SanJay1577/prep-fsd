import * as yup from "yup";

export const interviewSchema = yup.object({
  companyName: yup.string().required("Please fill in company name"),
  role: yup
    .string()
    .required("Please fill in role")
    .min(3, "minimum three words are required"),
  questions: yup.array().of(yup.string().required("Please fill in a question")),
  date: yup.string().required("Please select a date"),
  location: yup
    .string()
    .required("Please fill in the location")
    .max(10, "Max words exceeded"),
  userId: yup.string(),
});
