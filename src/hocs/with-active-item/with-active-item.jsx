import React, {useState} from 'react';

const withActiveItem = (Component) => (props) => {
  const [activeItem, setActiveItem] = useState(null);

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
