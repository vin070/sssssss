import React from 'react';
import ContentLoader from 'react-content-loader';

const TextLoader = ({ width = '200', height = '30' }) => (
  <ContentLoader
    speed={3}
    width={width}
    height={height}
    backgroundColor="#ECF3FA"
    foregroundColor="#dbe8f7"
  >
    <rect x="2" y="2" rx="0" ry="18" width="90%" height={height} />
  </ContentLoader>
);

export default TextLoader;
