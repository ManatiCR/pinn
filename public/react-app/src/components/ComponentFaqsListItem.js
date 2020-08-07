import React  from 'react';

const ComponentFaqsListItem = ( { element } ) => {
    const { title, description } = element;

    return (
        <li>
            <b>{ title }</b> <span>{ description }</span>
        </li>
    );
};

export default ComponentFaqsListItem;
