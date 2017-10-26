import React, { PureComponent } from 'react';
// Use require over import (will be lifted up)
const SlickCarousel = require('react-slick').default;
import './index.less';

export default class Carousel extends PureComponent {
    static defaultProps = {
        dots: true,
        arrows: false,
        prefixCls: 'ant-carousel',
        draggable: false,
    };

    render() {
        let props = this.props;

        let className = props.prefixCls;
        if (props.vertical) {
            className = `${className} ${className}-vertical`;
        }
        return (
            <div className={className}>
                <SlickCarousel ref='slick' {...props} />
            </div>
        );
    }
}