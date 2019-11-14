import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Home({ allComponents }) {
  return (
    <>
      <h1>Visual Testing</h1>
      <ul>
        {Object.values(allComponents).map(Component => (
          <li key={Component.routePath}>
            <a href={Component.routePath}>{Component.routePath}</a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Home;
