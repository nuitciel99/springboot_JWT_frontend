import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { postLogin } from "../api/api";

function LoginView() {
  const handlerSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const useremail = data.get("username");
    const password = data.get("password");

    postLogin({ email: useremail, password: password });
  };

  return (
    <>
      <Container component="main" maxWidth="xs" className="container">
        {/* {process.env.REACT_APP_BASE_URL} */}
        <Grid container spacing={5}>
          <Grid item xs={12} style={{ marginBottom: "10px" }}>
            <Typography component="h3" variant="h5">
              Login
            </Typography>
          </Grid>
          <form onSubmit={handlerSubmit}>
            <Grid container spacing={2} style={{ marginBottom: "10px" }}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="username"
                  label="아이디"
                  name="username"
                  autoComplete="username"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="password"
                  label="비밀번호"
                  name="password"
                  autoComplete="password"
                />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Login
              </Button>
            </Grid>
          </form>
        </Grid>
      </Container>
    </>
  );
}

export default LoginView;
