import React from 'react'

const ServiceCard = ({ service }) => (
  <div className="border p-4">
    <h3>{service.title}</h3>
    <p>{service.description}</p>
  </div>
);

export default ServiceCard;

