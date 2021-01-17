import React, { useEffect, useState } from 'react';

  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(
      () => setValue(new Date()),
      1000
    );

    return () => {
      clearInterval(interval);
    }
  }, []);

  return (
    <div className="clock">
      <p>Current time:</p>
      <Clock value={value} />
    </div>
  )

