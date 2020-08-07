import React, { Component }  from 'react';
import PropsTypes from 'prop-types';
import ComponentFaqsListItem from './ComponentFaqsListItem';

class ComponentFaqsList extends Component {
    constructor( { api_url, type, title } ) {
        super();

        this.state = {
            api_url: api_url,
            type: type,
            title: title,
            data: []
        };
    }

    componentDidMount() {
        const { api_url } = this.state;

        fetch(api_url).then( resolve => {
            return resolve.json();
        }).then( data => {
            const { nodes } = data;

            this.setState({
                data: nodes
            });
        });
    }

    getData = elements => {
        if (elements) {
            return (
                elements.map( (element, index) => <ComponentFaqsListItem key={ index } element={ element.node } /> )
            );
        }
    }

    render() {
        const { data, type, title } = this.state;

        if (data && data.length > 0) {
            const result = this.getData(data); 
            const output = type === "ordered" ? <ol>{ result }</ol> : <ul>{ result }</ul>;

            return (
                <div>
                    <h3>{ title }</h3>
                    <div>{ output }</div>
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }
}

ComponentFaqsList.propsTypes = {
    elements: PropsTypes.array.isRequired,
};

export default ComponentFaqsList;