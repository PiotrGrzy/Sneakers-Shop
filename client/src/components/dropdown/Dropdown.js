import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setQuery } from '../../redux/search/search.actions';
import './dropdown.scss';

const Dropdown = ({ type, title, itemsList, setQuery }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState(itemsList);

  const toggleSelect = (id) => {
    // selects listitem by its id
    // finds index
    const index = items.findIndex((item) => item.id === id);
    // clone list
    const updatedItems = [...items];
    // updates item to selected or unselected
    updatedItems[index].selected = !items[index].selected;
    // update local state of selected items
    setItems(updatedItems);
    // update query with new selected items names
    setQuery(
      type,
      updatedItems.filter((item) => item.selected).map((item) => item.name)
    );
  };

  const toggleList = () => {
    // reveal dropdowm
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

export default connect(null, { setQuery })(Dropdown);
