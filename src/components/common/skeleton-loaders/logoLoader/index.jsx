import React from 'react';
import ContentLoader from 'react-content-loader';

const LogoLoader = ({ width = 50, height = 90 }) => (
  <ContentLoader
    speed={3}
    width={width}
    height={height}
    backgroundColor="#ECF3FA"
    foregroundColor="#dbe8f7"
  >
    <circle cx="25" cy="50" r="25" />

  </ContentLoader>
);

export default LogoLoader;
