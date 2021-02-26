import PropTypes from 'prop-types';

import Navbar from '../Navbar';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="container pt-4">
        { children }
      </div>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
