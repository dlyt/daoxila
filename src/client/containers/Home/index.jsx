import React, { PureComponent } from 'react';
import './index.less';
import Carousel from 'components/Carousel';

class Home extends PureComponent {
    render() {
        return (
            <div>
                <header>
                    <div className="secTitMain">
                        <h2 className="secTitAdress">
                            <a href="//m.daoxila.com/?city=all" cityid="1">北京</a>
                        </h2>
                        <div className="LogoName">
                            <span>到喜啦</span>
                        </div>
                        <div className="ri clearfix">
                            <span className="inSearch"></span>
                            <span className="inMy"></span>
                        </div>
                    </div>
                </header>
                <section className="imgShow">
                    <Carousel autoplay>
                        <div>
                            <a href="https://mas.daoxila.com/Url/mas/?am_id=49825&amp;city_id=7&amp;aid=2466">
                                <img src="https://i.dxlfile.com/adm/material/2017_09_28/20170928114421145078.jpg" alt="" />
                            </a>
                        </div>
                        <div>
                            <a href="https://mas.daoxila.com/Url/mas/?am_id=49825&amp;city_id=7&amp;aid=2466">
                                <img src="https://i.dxlfile.com/adm/material/2017_10_13/20171013182422142656.jpg" alt="" />
                            </a>
                        </div>
                        <div>
                            <a href="https://mas.daoxila.com/Url/mas/?am_id=49825&amp;city_id=7&amp;aid=2466">
                                <img src="https://i.dxlfile.com/adm/material/2017_09_28/20170928132715123041.jpg" alt="" />
                            </a>
                        </div>
                        <div>
                            <a href="https://mas.daoxila.com/Url/mas/?am_id=49825&amp;city_id=7&amp;aid=2466">
                                <img src="https://i.dxlfile.com/adm/material/2017_10_20/20171020185451149158.jpg" alt="" />
                            </a>
                        </div>
                        <div>
                            <a href="https://mas.daoxila.com/Url/mas/?am_id=49825&amp;city_id=7&amp;aid=2466">
                                <img src="https://i.dxlfile.com/adm/material/2017_05_27/2017052714282481671.jpg" alt="" />
                            </a>
                        </div>
                    </Carousel>
                </section>
            </div>
        );
    }
}

export default Home;
