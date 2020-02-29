import React, { useState } from 'react';

import './dropdown.scss';

const Dropdown = ({ title, values }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState(values);

  const toggleSelect = id => {
    const index = items.findIndex(item => item.id === id);
    const updatedItems = [...items];
    updatedItems[index].selected = !items[index].selected;
    setItems(updatedItems);
  };

  const toggleList = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dd-wrapper">
      <div className="dd-header" onClick={toggleList}>
        <div className="dd-header-title">{title}</div>
        {isOpen ? (
          <i className="lni lni-arrow-up"></i>
        ) : (
          <i className="lni lni-arrow-down"></i>
        )}
      </div>
      {isOpen && (
        <ul className="dd-list">
          {items.map(({ id, name, selected }) => (
            <li
              className="dd-list-item"
              key={id}
              onClick={() => toggleSelect(id)}
            >
              {name}{' '}
              {selected && <i className="lni lni-star-filled dd-checkmark"></i>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
