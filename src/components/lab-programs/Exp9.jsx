import React, { useState } from 'react';

const pages = {
  home: {
    label: 'Home',
    title: 'Home Page',
    content: 'Welcome to our React application.',
  },
  about: {
    label: 'About',
    title: 'About Us',
    content: 'We are learning React Routing.',
  },
  contact: {
    label: 'Contact',
    title: 'Contact',
    content: 'Email: contact@example.com',
  },
};

const Exp9Routing = () => {
  const [activePage, setActivePage] = useState('home');
  const page = pages[activePage];

  return (
    <div>
      <h2>Experiment 9: React Routing</h2>
      <p>Navigation between pages (simulated routing).</p>

      <div>
        <nav>
          {Object.keys(pages).map((key) => (
            <button key={key} onClick={() => setActivePage(key)}>
              {pages[key].label}
            </button>
          ))}
        </nav>

        <div>
          <h3>{page.title}</h3>
          <p>{page.content}</p>
        </div>
      </div>
    </div>
  );
};

export default Exp9Routing;