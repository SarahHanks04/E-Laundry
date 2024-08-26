import React from 'react';
import { useSelector } from 'react-redux';
import ServiceCard from '../Component/ServiceCard';


const Services = () => {
  const services = useSelector((state) => state.services);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Our Services</h1>
      <div className="grid grid-cols-3 gap-4">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
