import React  from 'react';
import PropsTypes from 'prop-types';
import ComponentScholarshipItem from './ComponentScholarshipItem';

const coursesList = courses => {
    if (courses) {
        return (
            courses.map( (course, index) => <ComponentScholarshipItem key={ index } course={ course.node } /> )
        );
    }
};

const ComponentScholarshipList = ({ data }) => {
    const { courses, provider } = data;

    return (
        <div>
            <div>{ provider }</div>
            <div><ul>{ coursesList(courses) }</ul></div>
        </div>
    );
};

ComponentScholarshipList.propsTypes = {
    courses: PropsTypes.array.isRequired,
};

export default ComponentScholarshipList;
