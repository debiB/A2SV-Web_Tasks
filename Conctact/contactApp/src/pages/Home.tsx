import React from "react";
import { Link } from "react-router-dom";
import { data } from "./contacts";
import useContacts from "../hooks/useContacts;

function Home() {
  const { data: contacts } = useContacts(); // Rename data to contacts for clarity

  return (
    <div>
      <h1>Home</h1>
      <ul>
        {contacts.map(({ id, name, email }) => (
          <li key={id}>
            <Link to={`/contacts/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
