import React, {useState} from 'react';

const withActiveItem = (Component, initActiveItem = null) => (props) => {
  const [activeItem, setActiveItem] = useState(initActiveItem);

  const handleActiveItemChange = (item) => setActiveItem(item);

  return (
    <Component
      {...props}
      activeItem={activeItem}
      onActiveItemChange={handleActiveItemChange}
    />
  );
};

export default withActiveItem;
