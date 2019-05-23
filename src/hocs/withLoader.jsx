import React, { useState, useEffect } from 'react';

const withLoader = (Component, loader) => {
  const Loader = (props) => {
    const {
      match,
    } = props;

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    useEffect(() => {
      loader(match).then((res) => {
        setData(res);
        setLoading(false);
      });
    }, [match]);

    if (loading) return <div>Loading...</div>;
    return <Component data={data} {...props} />;
  };

  return Loader;
};

export default withLoader;
