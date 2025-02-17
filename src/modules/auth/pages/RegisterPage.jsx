import { Button, Grid2, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../../hooks";

const formData = {
  email: 'darimile@gmail.com',
  password: '123456',
  displayName: 'Milena Aguilar'
}

const formValidations = {
  email: [ (value) => value.includes('@'), 'El correo debe tener un @'],
  password: [(value) => value.length >=6, 'El password debe tener más de 6 letras.'],
  displayName: [(value) => value.length >= 1, 'El nombre es obligatorio'],
}

export const RegisterPage = () => {

  

  const {
    formState,displayName, email, password, onInputChange,
    isFormValid, displayNameValid, emailValid, passwordValid,
  } = useForm(formData, formValidations);

  console.log(displayNameValid);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
  }

  return (

    <AuthLayout title="Crear cuenta">
      <form onSubmit={onSubmit}>
        <Grid2 container direction="column">

          <Grid2 xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre completo"
              type="text"
              placeholder="Milena Aguilar"
              fullWidth
              name="displayName"
              value={ displayName }
              onChange={ onInputChange }
            />
          </Grid2>

          <Grid2 xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="email@correo.com"
              fullWidth
              name="email"
              value={ email }
              onChange={ onInputChange }
            />
          </Grid2>

          <Grid2 xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="password"
              fullWidth
              name="password"
              value={ password }
              onChange={ onInputChange }
            />
          </Grid2>
          <Grid2 container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid2 xs={12}>
              <Button 
                type="submit"
                variant="contained" 
                fullWidth
              >
                Crear cuenta
              </Button>
            </Grid2>

          </Grid2>

          <Grid2 container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1}}>¿Ya tienes cuenta?</Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              Acceder
            </Link>
          </Grid2>
        </Grid2>
      </form>
    </AuthLayout>
  );
};
