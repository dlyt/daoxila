import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';

const TabPane = createReactClass({
    displayName: 'TabPane',
    propTypes: {
        children: PropTypes.element.isRequired
    },
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
});


export default TabPane;