import { Link } from "react-router-dom";
import React from "react";

export default function LandingPage() {
  return (
    <div>
      <h1>Bienvenidos a mi landing page</h1>
      <Link to="/home">
        <button>Entar</button>
      </Link>
    </div>
  );
}
