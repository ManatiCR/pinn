import React, { Component }  from 'react';
import PropsTypes from 'prop-types';
import ComponentListItem from './ComponentListItem';

class ComponentList extends Component {
    constructor( { api_url, type } ) {
        super();

        this.state = {
            api_url: api_url,
            type: type,
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
                elements.map( (element, index) => <ComponentListItem key={ index } element={ element.node } /> )
            );
        }
    }

    render() {
        const { data, type } = this.state;
        const result = this.getData(data); 
        const output = type === "ordered" ? <ol>{ result }</ol> : <ul>{ result }</ul>;

        if (data) {
            return (
                <div>{ output }</div>
            );
        }
    }
}

ComponentList.propsTypes = {
    elements: PropsTypes.array.isRequired,
};

export default ComponentList;