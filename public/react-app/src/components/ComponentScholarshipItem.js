import React  from 'react';

const ComponentScholarshipItem = ( { course } ) => {
    const { link, title } = course;
    const item = (link) ? <a href={ link } target="_blank" rel="noopener noreferrer">{ title }</a> : title;

    return (
        <li>{ item }</li>
    );
};

export default ComponentScholarshipItem;
