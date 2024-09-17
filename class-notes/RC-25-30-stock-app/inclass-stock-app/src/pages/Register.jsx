import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LockIcon from "@mui/icons-material/Lock";
import image from "../assets/regi.avif";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import AuthHeader from "../components/AuthHeader";
import AuthImage from "../components/AuthImage";
import { Formik, Form} from "formik";
import * as Yup from 'yup';
import useAuthCall from "../hooks/useAuthCall";
// import RegisterForm, { SignupSchema } from "../components/RegisterForm";



export const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .required("Bu alan zorunludur!")
    .min(3, "Username en az 3 karakter olmalıdır!"),
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .required()
    .min(8)
    .matches(/\d+/, "Digit karakter içermelidir!")
    .matches(/[a-z]/, "Küçük harf içermelidir!")
    .matches(/[A-Z]/, "Büyük harf içermelidir!")
    .matches(/[@$?!%&*]+/, "Özel karakter içermelidir(@$?!%&*)")
});


const Register = () => {
  const {register} = useAuthCall()
  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        rowSpacing={{ sm: 3 }}
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <AuthHeader />

        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "secondary.light",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon size="30" />
          </Avatar>
          <Typography
            variant="h4"
            align="center"
            mb={2}
            color="secondary.light"
          >
            Register
          </Typography>

          <Formik
            initialValues={{
              username: "",
              firstName: "",
              lastName: "",
              email: "",
              password: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              console.log(values)
              register(values);
              // actions.resetForm();// formu temizleme yapar.
              // actions.setSubmitting(false);// isSubmitting değerini tekrar false a çeker
            }}
          >
            {
              ({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
       })=>(
        <Form>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
           <TextField
            name="username" //formik name attributedından eşleştirme yapıyor.
            label="Username"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur} // kullanıcının input alanından ayrıldığını yaklayan event
            helperText={touched.username && errors.username} //validationda verdiğimiz kalıba uymazsa ilgili mesajları göstermesi için errors dan gelen mesajı yakalıyoruz.
            error={touched.username && Boolean(errors.username)} //validationda verdiğimiz kalıba uymazsa rengi errora çevirmesi için error attribute ı benden false/true degeri bekliyor ondan dolayı daha sağlıklı olması için boolean deger döndürüyoruz.
            // touched da kullanıcının inputa tıklayıp tıklamadığını yakalıyor
          />
          <TextField
            label="First Name"
            name="firstName"
            type="text"
            variant="outlined"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.firstName && errors.firstName}
            error={touched.firstName && Boolean(errors.firstName)}
          />
          <TextField
            label="Last Name"
            name="lastName"
            type="text"
            variant="outlined"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.lastName && errors.lastName}
            error={touched.lastName && Boolean(errors.lastName)}
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            variant="outlined"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.email && errors.email}
            error={touched.email && Boolean(errors.email)}
          />
          <TextField
            label="Password"
            name="password"
            id="password"
            type="password"
            variant="outlined"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.password && errors.password}
            error={touched.password && Boolean(errors.password)}
          />

          <Button
            type="submit"
            variant="contained"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Loading..." : "Sign Up"}
          </Button>
        </Box>
      </Form>
              )
            }
            {/* component={(props) => <RegisterForm {...props} />} //* formikin bize verdiğim metotlar,değişkenler props içersinde geliyor biz de onları RegisterForm componentine göndermiş olduk. */}
          </Formik>
          <Box sx={{ textAlign: "center", mt: 2, color: "secondary.main" }}>
            <Link to="/">Already have an account? Sign in</Link>
          </Box>
        </Grid>

        <AuthImage image={image} />
      </Grid>
    </Container>
  );
};

export default Register;
