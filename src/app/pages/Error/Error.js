import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import PageNotFound from "../../../assets/PageNotFound.png";

function ErrorPage() {
  return (
    <div className="center">
      <img src={PageNotFound} className="page-not-found" alt="logo" />
      <p>
        <Link to="/">Go to Home </Link>
      </p>
    </div>
  );
}

export default ErrorPage;
