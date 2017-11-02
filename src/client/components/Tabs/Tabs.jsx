import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';

const Tabs = createReactClass({
	displayName: 'Tabs',
	propTypes: {
	  selected: PropTypes.number,
	  children: PropTypes.oneOfType([
			PropTypes.array,
			PropTypes.element
	  ]).isRequired
	},
	getInitialState() {
	  return {
		selected: this.props.selected
	  };
	},
	handleClick(index, event) {
	  this.setState({
			selected: index
	  });
	},
	_renderTitles() {
	  function labels(child, index) {
		let activeClass = (this.state.selected === index ? 'cur' : '');
		return (
		  <li key={index} className={activeClass}>
			<span onClick={this.handleClick.bind(this, index)}>
			  {child.props.label}
			</span>
		  </li>
		);
	  }
	  return (
		<ul className="allNav clearfix">
		  {this.props.children.map(labels.bind(this))}
		</ul>
	  );
	},
	_renderContent() {
	  return (
		<div className="allItemCon">
		  {this.props.children[this.state.selected]}
		</div>
	  );
	},
	render() {
	  return (
		<div>
		  {this._renderTitles()}
		  {this._renderContent()}
		</div>
	  );
	}
});

export default Tabs;