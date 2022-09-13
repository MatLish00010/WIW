import * as yup from 'yup';

export const schema = yup.object().shape({
  email: yup.string().email('Email must be a valid email address').required('Email must be a valid email address'),
  password: yup
    .string()
    .min(8, 'Min length 8 characters')
    .max(200, 'Maximum length 200 characters')
    .required('Password is required'),
});
