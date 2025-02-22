import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // Ensure React Router is installed
import "./Notfound.css"; // Import styles

const Notfound = () => {
  return (
    <div className="not-found-page">
      <Container className="text-center">
        <div className="not-found-content">
          <h1 className="error-code">404</h1>
          <h2 className="error-message">Oops! Page Not Found</h2>
          <p className="error-description">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link to="/">
            <Button className="back-home-btn">Go to Homepage</Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Notfound;
