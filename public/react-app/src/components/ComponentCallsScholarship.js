import React, { Component }  from 'react';
import PropsTypes from 'prop-types';
import ComponentScholarshipList from './ComponentScholarshipList';

class ComponentCallsScholarship extends Component {
    constructor( { api_url } ) {
        super();

        this.state = {
            api_url: api_url,
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

    getData = providers => {
        if (providers) {
            return (
                providers.map( (provider, index) => <ComponentScholarshipList key={ index } data={ provider } /> )
            );
        }
    }

    render() {
        const { data } = this.state;

        if (data) {
            return (
                <div>
                    { this.getData(data) }
                </div>
            );
        }
    }
}

ComponentCallsScholarship.propsTypes = {
    providers: PropsTypes.array.isRequired,
};

export default ComponentCallsScholarship;