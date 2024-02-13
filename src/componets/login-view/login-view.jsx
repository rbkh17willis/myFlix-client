import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const LoginView = ({ onLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    // this prevents the default behavior of the form which is to reload the entire page
    event.preventDefault();

    const data = {
        Username: username,
        Password: password
      };

      fetch("https://moviesapi-o4y1.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Login response: ", data);
          if (data.user) {
            localStorage.setItem("user", JSON.stringify(data.user));
            localStorage.setItem("token", data.token);
            onLoggedIn(data.user, data.token);
          } else {
            alert("User does not exist, please try agian or create new account");
          }
        })
        .catch((e) => {
          alert("Something went wrong");
        });
    }
   /* return (
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    ); */
   return (
    <Form onSubmit={handleSubmit}>
    <Form.Group controlId="formUsername">
        <Form.Label>Username:</Form.Label>
        <Form.Control 
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)} 
        required
        minLength="5"
        />
    </Form.Group>
    <Form.Group controlId="formPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control 
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
         />
    </Form.Group>
    <Button type="submit" className="mt-2">Submit</Button>
  </Form>
  ); 
}