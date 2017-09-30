import React from 'react';
import './index.less';

class Home extends React.PureComponent {
    render() {
        return (
            <header>
                <div className='secTitMain'>
                    <h2 className='secTitAdress'>
                        <a href='//m.daoxila.com/?city=all' cityid='1'>北京</a>
                    </h2>
                    <h1 className='LogoName'>
                        <span>到喜啦</span>
                    </h1>
                    <div className='ri clearfix'>
                        <span className='inSearch'></span>
                        <span className='inMy'></span>
                    </div>
                </div>
	        </header>
        );
    }
}

export default Home;
