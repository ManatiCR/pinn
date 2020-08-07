import React  from 'react';

const ComponentListItem = ( { element } ) => {
    const { title } = element;

    return (
        <li>{ title }</li>
    );
};

export default ComponentListItem;
