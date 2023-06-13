import React from 'react';
import { Transition } from 'react-transition-group';
import { useState } from 'react';
import { FiGlobe, FiMail, FiPhone } from 'react-icons/fi';

const ServiceItem = ({ title, description, icon }) => {
  const [show, setShow] = useState(false);

  const handleEnter = () => {
    setShow(true);
  };

  const handleExit = () => {
    setShow(false);
  };

  const duration = 300;

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  };

  const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  return (
    <Transition in={show} timeout={duration} onEnter={handleEnter} onExit={handleExit}>
      {(state) => (
        <div
          className="p-4 md:w-1/3"
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg">
            <div className="flex items-center mb-4">
              <span className="text-3xl text-blue-500 mr-3">{icon}</span>
              <h4 className="text-lg font-semibold">{title}</h4>
            </div>
            <p>{description}</p>
          </div>
        </div>
      )}
    </Transition>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Online Services',
      description: 'Access various government services online, including application forms, document submissions, and service requests.',
      icon: <FiGlobe />,
    },
    {
      title: 'Contact Information',
      description: 'Get in touch with the Harari Government Communication Affairs Office through email or phone to address your queries or concerns.',
      icon: <FiMail />,
    },
    {
      title: 'Helpline Services',
      description: 'Call our helpline for immediate assistance and support regarding government services and information.',
      icon: <FiPhone />,
    },
  ];

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl text-center font-semibold mb-8">Government Services</h2>
      <div className="flex flex-wrap justify-center">
        {services.map((service, index) => (
          <ServiceItem key={index} title={service.title} description={service.description} icon={service.icon} />
        ))}
      </div>
    </div>
  );
};

export default Services;
