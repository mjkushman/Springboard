import { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Box, Container, Stack } from "@mui/material";

const Login = () => {
  const navigate = useNavigate();

  // Prefilled form fields for dev convenience.
  const INITIAL_FORM_DATA = {
    // username: "mikekush",
    // password: "123456",
    username: "",
    password: "",
  };

  const { loginFormSubmit } = useContext(UserContext);

  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginFormSubmit(formData);
    // take person to companies page after 1 second
    setTimeout(() => {
      navigate("/companies");
    }, 1000);
  };

  return (
    <>
      <Container>
      <h1>Log in to continue</h1>
        <Box p={4}>
          <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <TextField
                required
                type="text"
                name="username"
                id="username"
                placeholder="Pick a username"
                value={formData.username}
                onChange={handleChange}
              />

              <TextField
                required
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />

              <Button variant="contained">Log In</Button>
            </Stack>
          </form>
        </Box>
      </Container>
    </>
  );
};

export default Login;
