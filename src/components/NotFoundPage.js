import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div>404 - this is not the page you're looking for...
    <p><Link to="/">Go home</Link></p>
  </div>
);

export default NotFoundPage;
