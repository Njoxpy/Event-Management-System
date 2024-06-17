import React from "react";
import { useParams } from "react-router-dom";

export default function EventDetails() {
  const { id } = useParams();
  return (
    <div className="p-8">
      <h1>Event Details</h1>
      <h2>{id}</h2>
    </div>
  );
}
