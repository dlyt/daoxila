import React, { PureComponent } from 'react';
import Carousel from 'components/Carousel';
import Tabs, { TabPane } from 'components/Tabs';

import './index.less';
				
const businesses = [
    {
        type: 'hunYan',
        name: '婚宴酒店',
        url: '/sh/HunYan-List',
        list: [
            {
                url: 'sh/HunYan/MeiGuiLi-Info',
                name: 'LAVIN玫瑰里（外滩店）',
                imgUrl: 'https://i.dxlfile.com/hotel/large/2017-05/20170519171884094.jpg'
            },
            {
                url: 'sh/HunYan/ShengLaWei-Info',
                name: '圣拉维高端婚礼会馆（浦东旗舰店）',
                imgUrl: 'https://i.dxlfile.com/hotel/large/2017-04/20170411103260746.jpg'
            },
            {
                url: 'sh/HunYan/AiFeiEr-BinJiang-Info',
                name: '爱菲尔主题定制婚礼会馆（滨江店）',
                imgUrl: 'https://i.dxlfile.com/hotel/large/2017-08/20170817172344195.jpg'
            }
        ]
    },
    {
        type: 'hunSha',
        name: '婚纱摄影',
        url: '/sh/HunShaSheYing/',
        list: [
            {
                url: 'sh/HunShaSheYing/YiJiangArtizStudio-menu-9528',
                name: '《珀美》系列',
                imgUrl: 'https://i.dxlfile.com/mall/medium2/2016-12/20161220174676600.jpg'
            },
            {
                url: 'sh/HunShaSheYing/MuseStudio-menu-9391',
                name: '全新【爱慕III】',
                imgUrl: 'https://i.dxlfile.com/mall/medium2/2017-04/20170418115148206.jpg'
            },
            {
                url: 'sh/HunShaSheYing/JuZi-menu-4536',
                name: '【公主系列】',
                imgUrl: 'https://i.dxlfile.com/mall/medium2/2017-03/20170302114273696.jpg'
            }
        ]
    },
    {
        type: 'hunQing',
        name: '婚礼策划',
        url: '/sh/HunQing',
        list: [
            {
                url: 'sh/HunQing/ShiYue-photo-409',
                name: '20140601凯宾斯基大酒店',
                imgUrl: 'https://iq.dxlfile.com/mall/original/2016-03/20160307110483139.jpg'
            },
            {
                url: 'sh/HunQing/ShiYue-photo-416',
                name: '20140629南郊宾馆（英伦风）',
                imgUrl: 'https://iq.dxlfile.com/mall/original/2016-03/20160307162756472.jpg'
            },
            {
                url: 'sh/HunQing/ShiYue-photo-431',
                name: '20141017虹桥喜来登酒店',
                imgUrl: 'https://iq.dxlfile.com/mall/original/2016-03/20160307112218192.jpg'
            }
        ]
    },
    {
        type: 'hunChe',
        name: '婚车',
        url: '/sh/HunChe/Class-Car',
        list: [
            {
                url: 'sh/HunChe/Info-42',
                name: '宾利慕尚',
                imgUrl: 'https://img.dxlfile.com/hunche/2017/06/20170621162237912.jpg-wapliebiao'
            },
            {
                url: 'sh/HunChe/Info-18',
                name: '保时捷Panamera',
                imgUrl: 'https://img.dxlfile.com/hunche/2017/06/20170620113805981.jpg-wapliebiao'
            },
            {
                url: 'sh/HunChe/Info-8',
                name: '宝马7系',
                imgUrl: 'https://img.dxlfile.com/hunche/2017/06/20170616105854773.jpg-wapliebiao'
            }
        ]
    }
]

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
                <section className="hotChannel pubItem">
                    <ul className="clearfix landSlide">
                        <li>
                            <a href="//m.daoxila.com/sh/HunYan-List">
                                <img src="https://s4.dxlfile.com/www/img/index/icon_main_Hotel.png" />
                                <span>婚宴酒店</span>
                            </a>
                        </li>
                    
                        <li>
                            <a href="//m.daoxila.com/sh/HunShaSheYing/">
                                <img src="https://s4.dxlfile.com/www/img/index/icon_main_HunSha.png" />
                                <span>婚纱摄影</span>
                            </a>
                        </li>
                    
                        <li>
                            <a href="//m.daoxila.com/sh/HunQing/">
                                <img src="https://s4.dxlfile.com/www/img/index/icon_main_HunQing.png" />
                                <span>婚礼策划</span>
                            </a>
                        </li>
                    
                        <li>
                            <a href="//m.daoxila.com/sh/HunChe/Class-Car">
                                <img src="https://s4.dxlfile.com/www/img/index/icon_main_HunChe.png" />
                                <span>婚车</span>
                            </a>
                        </li>
                    
                        <li>
                            <a href="//m.daoxila.com/MiYue">
                                <img src="https://s4.dxlfile.com/www/img/index/icon_main_MiYue.png" />
                                <span>蜜月游</span>
                            </a>
                        </li>
                    
                        <li>
                            <a href="//m.daoxila.com/MiYue/Tours-111">
                                <img src="https://s4.dxlfile.com/www/img/index/icon_main_HaiWaiHunLi.png" />
                                <span>海外婚礼</span>
                            </a>
                        </li>
                    
                        <li>
                            <a href="//m.daoxila.com/CuXiao/1232">
                                <img src="https://s4.dxlfile.com/www/img/index/icon_main_LvPai.png" />
                                <span>旅拍</span>
                            </a>
                        </li>
                    
                        <li>
                            <a href="//m.daoxila.com/sh/DingZhi">
                                <img src="https://s4.dxlfile.com/www/img/index/icon_main_XiFuDingZhi.png" />
                                <span>西服定制</span>
                            </a>
                        </li>
                
                    </ul>
                </section>
                <section className="adImg pubItem">
                    <a href="https://mas.daoxila.com/Url/mas/?am_id=37162&amp;city_id=7&amp;aid=2524" target="_blank">
                        <img src="https://i.dxlfile.com/adm/material/2017_03_08/2017030815354727598.jpg" alt="" />
                    </a>
                </section>
                <section className="inTips items">
                    <ul className="clearfix">
                        <li className="li_1">
                            <h3>
                                <a href="https://mas.daoxila.com/Url/mas/?am_id=37416&amp;city_id=7&amp;aid=2569" target="_blank">结婚吉日
                                </a>
                            </h3>
                            <div className="li1_d2">
                                <a href="https://mas.daoxila.com/Url/mas/?am_id=37416&amp;city_id=7&amp;aid=2569" target="_blank">
                                    <img src="https://i.dxlfile.com/adm/material/2017_03_09/2017030916492719791.png" alt="" />
                                </a>
                            </div>
                        </li>
                        <li className="li_2">
                            <h3>
                                <a href="https://mas.daoxila.com/Url/mas/?am_id=38840&amp;city_id=7&amp;aid=2602" target="_blank">结婚预算
                                </a>
                            </h3>
                            <div className="li2_d2">
                                <a href="https://mas.daoxila.com/Url/mas/?am_id=38840&amp;city_id=7&amp;aid=2602" target="_blank">
                                    <img src="https://i.dxlfile.com/adm/material/2017_06_02/201706021714138812.png" alt="" />
                                </a>
                            </div>
                        </li>
                        <li className="li_3">
                            <h3>
                                <a href="https://mas.daoxila.com/Url/mas/?am_id=38838&amp;city_id=7&amp;aid=2601" target="_blank">轻松订婚照
                                </a>
                            </h3>
                            <div className="li3_d2">
                                <a href="https://mas.daoxila.com/Url/mas/?am_id=38838&amp;city_id=7&amp;aid=2601" target="_blank">
                                    <img src="https://i.dxlfile.com/adm/material/2017_03_31/201703311725496025.png" alt="" />
                                </a>
                            </div>
                        </li>
                    </ul>
                </section>
                {businesses.map((business) => {
                    const className = business.type + ' pubItem itemType';
                    return (
                        <section className={className} key={business.type}>
                            <h3 className="tit">{business.name}<a href={business.url}>查看所有</a></h3>
                            <ul className="clearfix">
                                {business.list.map((item) => {
                                    return (
                                        <li key={item.name}>
                                            <a href={item.url}>
                                                <div className="img">
                                                    <img src={item.imgUrl} />
                                                </div>
                                                <p>{item.name}</p>
                                            </a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </section>
                    )
				})}
				<section className="all">
					<Tabs selected={0}>
						<TabPane label="婚宴酒店">
							<div className="allItem allItem_1">
								<ul>
									<li>
										<a href="sh/HunYan/MeiGuiLi-Info">
											<img src="https://i.dxlfile.com/hotel/large/2017-05/20170519171884094.jpg" />
											<div className="allPartRi">
												<h3>LAVIN玫瑰里（外滩店）</h3>
												<div className="riInfo">
													<span className="price">¥<i>3888-10099</i>/桌</span>
													<span className="sells">已售<i>40</i></span>
												</div>
											</div>
										</a>
									</li>
									<li>
										<a href="sh/HunYan/ShengLaWei-Info">
											<img src="https://i.dxlfile.com/hotel/large/2017-04/20170411103260746.jpg" />
											<div className="allPartRi">
												<h3>圣拉维高端婚礼会馆（浦东旗舰店）</h3>
												<div className="riInfo">
													<span className="price">¥<i>5288-8988</i>/桌</span>
													<span className="sells">已售<i>45</i></span>
												</div>
											</div>
										</a>
									</li>
									<li>
										<a href="sh/HunYan/AiFeiEr-BinJiang-Info">
											<img src="https://i.dxlfile.com/hotel/large/2017-08/20170817172344195.jpg" />
											<div className="allPartRi">
												<h3>爱菲尔主题定制婚礼会馆（滨江店）</h3>
												<div className="riInfo">
													<span className="price">¥<i>5388-9888</i>/桌</span>
													<span className="sells">已售<i>45</i></span>
												</div>
											</div>
										</a>
									</li>
									<li>
										<a href="sh/HunYan/HuaSheng-Info">
											<img src="https://i.dxlfile.com/hotel/large/2016-01/20160115175964925.jpg" />
											<div className="allPartRi">
												<h3>华盛婚礼会馆（外滩22号店）</h3>
												<div className="riInfo">
													<span className="price">¥<i>6888-12888</i>/桌</span>
													<span className="sells">已售<i>35</i></span>
												</div>
											</div>
										</a>
									</li>
									<li>
										<a href="sh/HunYan/AiFeiEr-Info">
											<img src="https://i.dxlfile.com/hotel/large/2017-08/20170817172596686.jpg" />
											<div className="allPartRi">
												<h3>爱菲尔主题定制婚礼会馆（大宁店）</h3>
												<div className="riInfo">
													<span className="price">¥<i>5388-9888</i>/桌</span>
													<span className="sells">已售<i>25</i></span>
												</div>
											</div>
										</a>
									</li>
									<li>
										<a href="sh/HunYan/WeiDuoLiYa-MinHang-Info">
											<img src="https://i.dxlfile.com/hotel/large/2015-01/20150105142627379.jpg" />
											<div className="allPartRi">
												<h3>维多利亚婚礼会所（闵行店）</h3>
												<div className="riInfo">
													<span className="price">¥<i>4288-7288</i>/桌</span>
													<span className="sells">已售<i>45</i></span>
												</div>
											</div>
										</a>
									</li>
									<li>
										<a href="sh/HunYan/HuaJiaLiShe-ShiBo-Info">
											<img src="https://i.dxlfile.com/hotel/large/2015-09/20150901140389510.jpg" />
											<div className="allPartRi">
												<h3>花嫁丽舍私人婚礼会所（世博店）</h3>
												<div className="riInfo">
													<span className="price">¥<i>4888-12888</i>/桌</span>
													<span className="sells">已售<i>55</i></span>
												</div>
											</div>
										</a>
									</li>
									<li>
										<a href="sh/HunYan/HuaJiaLiShe-WuZhongLu-Info">
											<img src="https://i.dxlfile.com/hotel/large/2014-11/20141104180519448.jpg" />
											<div className="allPartRi">
												<h3>花嫁丽舍私人婚礼会所（吴中路店）</h3>
												<div className="riInfo">
													<span className="price">¥<i>4888-12888</i>/桌</span>
													<span className="sells">已售<i>30</i></span>
												</div>
											</div>
										</a>
									</li>
									<li>
										<a href="sh/HunYan/HuaSheng-SH-Info">
											<img src="https://i.dxlfile.com/hotel/large/2015-12/20151228140128098.jpg" />
											<div className="allPartRi">
												<h3>华盛婚礼会馆（淮海中路店）</h3>
												<div className="riInfo">
													<span className="price">¥<i>7888-12888</i>/桌</span>
													<span className="sells">已售<i>45</i></span>
												</div>
											</div>
										</a>
									</li>
									<li>
										<a href="sh/HunYan/WeiDuoLiYa-HongKou-Info">
											<img src="https://i.dxlfile.com/hotel/large/2015-01/20150105103005866.jpg" />
											<div className="allPartRi">
												<h3>维多利亚婚礼会所（虹口店）</h3>
												<div className="riInfo">
													<span className="price">¥<i>4288-7288</i>/桌</span>
													<span className="sells">已售<i>26</i></span>
												</div>
											</div>
										</a>
									</li>
								</ul>
								<div className="more"><a href="/sh/HunYan-List">查看更多</a></div>
							</div>
						</TabPane>
						<TabPane label="婚纱摄影">
							<div className="allItem allItem_2">
								<ul>
									<li>
										<a href="sh/HunShaSheYing/YiJiangArtizStudio-menu-9528">
											<img src="https://i.dxlfile.com/mall/medium2/2016-12/20161220174676600.jpg" />
											<div className="allPartRi">
												<h3>《珀美》系列</h3>
												<div className="riInfo">
													<span className="xiang">独享价</span>
													<span className="price">¥<i>8980</i></span>
													<span className="old">¥15980</span>
												</div>
											</div>
										</a>
									</li>
									<li>
										<a href="sh/HunShaSheYing/MuseStudio-menu-9391">
											<img src="https://i.dxlfile.com/mall/medium2/2017-04/20170418115148206.jpg" />
											<div className="allPartRi">
												<h3>全新【爱慕III】</h3>
												<div className="riInfo">
													<span className="xiang">独享价</span>
													<span className="price">¥<i>12980</i></span>
													<span className="old">¥18980</span>
												</div>
											</div>
										</a>
									</li>
									<li>
										<a href="sh/HunShaSheYing/JuZi-menu-4536">
											<img src="https://i.dxlfile.com/mall/medium2/2017-03/20170302114273696.jpg" />
											<div className="allPartRi">
												<h3>【公主系列】</h3>
												<div className="riInfo">
													<span className="xiang">独享价</span>
													<span className="price">¥<i>8299</i></span>
													<span className="old">¥23999</span>
												</div>
											</div>
										</a>
									</li>
									<li>
										<a href="sh/HunShaSheYing/JuZi-menu-4526">
											<img src="https://i.dxlfile.com/mall/medium2/2017-03/20170302114662105.jpg" />
											<div className="allPartRi">
												<h3>【轻奢系列】</h3>
												<div className="riInfo">
													<span className="xiang">独享价</span>
													<span className="price">¥<i>10699</i></span>
													<span className="old">¥30599</span>
												</div>
											</div>
										</a>
									</li>
									<li>
										<a href="sh/HunShaSheYing/BaLiHunSha-SH-menu-8793">
											<img src="https://i.dxlfile.com/mall/medium2/2015-08/20150812142581778.jpg" />
											<div className="allPartRi">
												<h3>30周年纪念套系-城市微旅拍系列</h3>
												<div className="riInfo">
													<span className="xiang">独享价</span>
													<span className="price">¥<i>6680</i></span>
													<span className="old">¥13360</span>
												</div>
											</div>
										</a>
									</li>
									<li>
										<a href="sh/HunShaSheYing/ZhenNiHua-menu-8935">
											<img src="https://i.dxlfile.com/mall/medium2/2015-10/20151020180886982.jpg" />
											<div className="allPartRi">
												<h3>欢沁系列</h3>
												<div className="riInfo">
													<span className="xiang">独享价</span>
													<span className="price">¥<i>5880</i></span>
													<span className="old">¥13760</span>
												</div>
											</div>
										</a>
									</li>
									<li>
										<a href="sh/HunShaSheYing/JuZi-menu-4522">
											<img src="https://i.dxlfile.com/mall/medium2/2017-03/20170302114443851.jpg" />
											<div className="allPartRi">
												<h3>【铂悦系列】</h3>
												<div className="riInfo">
													<span className="xiang">独享价</span>
													<span className="price">¥<i>15999</i></span>
													<span className="old">¥36999</span>
												</div>
											</div>
										</a>
									</li>
									<li>
										<a href="sh/HunShaSheYing/ZhenNiHua-menu-109">
											<img src="https://i.dxlfile.com/mall/medium2/2015-09/20150923135287470.jpg" />
											<div className="allPartRi">
												<h3>霓彩系列</h3>
												<div className="riInfo">
													<span className="xiang">独享价</span>
													<span className="price">¥<i>8680</i></span>
													<span className="old">¥19360</span>
												</div>
											</div>
										</a>
									</li>
									<li>
										<a href="sh/HunShaSheYing/ZhenNiHua-menu-105">
											<img src="https://i.dxlfile.com/mall/medium2/2017-06/20170601174770155.jpg" />
											<div className="allPartRi">
												<h3>永恒系列</h3>
												<div className="riInfo">
													<span className="xiang">独享价</span>
													<span className="price">¥<i>6888</i></span>
													<span className="old">¥14776</span>
												</div>
											</div>
										</a>
									</li>
									<li>
										<a href="sh/HunShaSheYing/BaLiHunSha-SH-menu-8794">
											<img src="https://i.dxlfile.com/mall/medium2/2015-08/20150812143135609.jpg" />
											<div className="allPartRi">
												<h3>【经典法式】系列</h3>
												<div className="riInfo">
													<span className="xiang">独享价</span>
													<span className="price">¥<i>8980</i></span>
													<span className="old">¥16960</span>
												</div>
											</div>
										</a>
									</li>
								</ul>
								<div className="more"><a href="/sh/HunShaSheYing/">查看更多</a></div>
							</div>
						</TabPane>
						<TabPane label="婚礼策划">
							<div className="allItem allItem_3">
								<ul>
									<li>
										<a href="sh/HunQing/ShiYue-photo-409">
											<img src="https://iq.dxlfile.com/mall/original/2016-03/20160307110483139.jpg" />
											<div className="allPartRi">
												<h3>20140601凯宾斯基大酒店</h3>
												<div className="riInfo">
													<span className="price">¥<i>119988</i></span>
												</div>
											</div>
										</a>
									</li>
									<li>
										<a href="sh/HunQing/ShiYue-photo-416">
											<img src="https://iq.dxlfile.com/mall/original/2016-03/20160307162756472.jpg" />
											<div className="allPartRi">
												<h3>20140629南郊宾馆（英伦风）</h3>
												<div className="riInfo">
													<span className="price">¥<i>36500</i></span>
												</div>
											</div>
										</a>
									</li>
									<li>
										<a href="sh/HunQing/ShiYue-photo-431">
											<img src="https://iq.dxlfile.com/mall/original/2016-03/20160307112218192.jpg" />
											<div className="allPartRi">
												<h3>20141017虹桥喜来登酒店</h3>
												<div className="riInfo">
													<span className="price">¥<i>32888</i></span>
												</div>
											</div>
										</a>
									</li>
									<li>
										<a href="sh/HunQing/ShiYue-photo-756">
											<img src="https://iq.dxlfile.com/mall/original/2016-03/20160307115218586.jpg" />
											<div className="allPartRi">
												<h3>20150125凯宾斯基</h3>
												<div className="riInfo">
													<span className="price">¥<i>121888</i></span>
												</div>
											</div>
										</a>
									</li>
									<li>
										<a href="sh/HunQing/ShiYue-photo-2609">
											<img src="https://iq.dxlfile.com/mall/original/2016-03/20160307132943476.jpg" />
											<div className="allPartRi">
												<h3>20150426绿地万豪</h3>
												<div className="riInfo">
													<span className="price">¥<i>25000</i></span>
												</div>
											</div>
										</a>
									</li>
									<li>
										<a href="sh/HunQing/ShiYue-photo-5029">
											<img src="https://iq.dxlfile.com/mall/original/2016-03/20160307143867717.jpg" />
											<div className="allPartRi">
												<h3>20151003华尔道夫</h3>
												<div className="riInfo">
													<span className="price">¥<i>28888</i></span>
												</div>
											</div>
										</a>
									</li>
									<li>
										<a href="sh/HunQing/ShiYue-photo-5031">
											<img src="https://iq.dxlfile.com/mall/original/2016-03/20160307143335398.jpg" />
											<div className="allPartRi">
												<h3>20150927星空定制</h3>
												<div className="riInfo">
													<span className="price">¥<i>29888</i></span>
												</div>
											</div>
										</a>
									</li>
									<li>
										<a href="sh/HunQing/ShiYue-photo-5232">
											<img src="https://iq.dxlfile.com/mall/original/2016-03/20160307150192899.jpg" />
											<div className="allPartRi">
												<h3>20151025红金系列</h3>
												<div className="riInfo">
													<span className="price">¥<i>68888</i></span>
												</div>
											</div>
										</a>
									</li>
									<li>
										<a href="sh/HunQing/ShiYue-photo-429">
											<img src="https://iq.dxlfile.com/mall/original/2016-03/20160307104397365.jpg" />
											<div className="allPartRi">
												<h3>红色-20141001斯格威铂尔曼华府厅（中国风）</h3>
												<div className="riInfo">
													<span className="price">¥<i>25888</i></span>
												</div>
											</div>
										</a>
									</li>
									<li>
										<a href="sh/HunQing/ShiYue-photo-437">
											<img src="https://iq.dxlfile.com/mall/original/2016-03/20160307113588146.jpg" />
											<div className="allPartRi">
												<h3>20141116雅居乐万豪（星空梦幻复古主题）</h3>
												<div className="riInfo">
													<span className="price">¥<i>23500</i></span>
												</div>
											</div>
										</a>
									</li>
								</ul>
								<div className="more"><a href="/sh/HunQing/">查看更多</a></div>
							</div>
						</TabPane>
						<TabPane label="婚车">
							<div className="allItem allItem_4">
								<ul>
									<li>
										<a href="sh/HunChe/Info-42">
											<img src="https://img.dxlfile.com/hunche/2017/06/20170621162237912.jpg-wapliebiao" />
											<div className="allPartRi">
												<h3>宾利慕尚</h3>
												<div className="riInfo">
													<span className="price">¥<i>10800</i></span>
													<span className="old">¥12800</span>
												</div>
											</div>
										</a>
									</li>
									<li>
										<a href="sh/HunChe/Info-18">
											<img src="https://img.dxlfile.com/hunche/2017/06/20170620113805981.jpg-wapliebiao" />
											<div className="allPartRi">
												<h3>保时捷Panamera</h3>
												<div className="riInfo">
													<span className="price">¥<i>1250</i></span>
													<span className="old">¥2800</span>
												</div>
											</div>
										</a>
									</li>
									<li>
										<a href="sh/HunChe/Info-8">
											<img src="https://img.dxlfile.com/hunche/2017/06/20170616105854773.jpg-wapliebiao" />
											<div className="allPartRi">
												<h3>宝马7系</h3>
												<div className="riInfo">
													<span className="price">¥<i>950</i></span>
													<span className="old">¥1700</span>
												</div>
											</div>
										</a>
									</li>
									<li>
										<a href="sh/HunChe/Info-22">
											<img src="https://img.dxlfile.com/hunche/2017/06/20170621135933672.jpg-wapliebiao" />
											<div className="allPartRi">
												<h3>宾利飞驰</h3>
												<div className="riInfo">
													<span className="price">¥<i>4788</i></span>
													<span className="old">¥6500</span>
												</div>
											</div>
										</a>
									</li>
									<li>
										<a href="sh/HunChe/Info-16">
											<img src="https://img.dxlfile.com/hunche/2017/06/20170614133944129.jpg-wapliebiao" />
											<div className="allPartRi">
												<h3>玛莎拉蒂总裁</h3>
												<div className="riInfo">
													<span className="price">¥<i>2088</i></span>
													<span className="old">¥4500</span>
												</div>
											</div>
										</a>
									</li>
									<li>
										<a href="sh/HunChe/Info-23">
											<img src="https://img.dxlfile.com/hunche/2017/06/20170612142735192.jpg-wapliebiao" />
											<div className="allPartRi">
												<h3>劳斯莱斯幻影</h3>
												<div className="riInfo">
													<span className="price">¥<i>7988</i></span>
													<span className="old">¥10000</span>
												</div>
											</div>
										</a>
									</li>
									<li>
										<a href="sh/HunChe/Info-17">
											<img src="https://img.dxlfile.com/hunche/2017/06/20170614153015726.jpg-wapliebiao" />
											<div className="allPartRi">
												<h3>玛莎拉蒂Ghibli</h3>
												<div className="riInfo">
													<span className="price">¥<i>1488</i></span>
													<span className="old">¥3500</span>
												</div>
											</div>
										</a>
									</li>
									<li>
										<a href="sh/HunChe/Info-13">
											<img src="https://img.dxlfile.com/hunche/2017/06/20170620141707932.jpg-wapliebiao" />
											<div className="allPartRi">
												<h3>奔驰S系列</h3>
												<div className="riInfo">
													<span className="price">¥<i>950</i></span>
													<span className="old">¥1800</span>
												</div>
											</div>
										</a>
									</li>
									<li>
										<a href="sh/HunChe/Info-19">
											<img src="https://img.dxlfile.com/hunche/2017/06/20170626115146627.jpg-wapliebiao" />
											<div className="allPartRi">
												<h3>保时捷BOX敞篷</h3>
												<div className="riInfo">
													<span className="price">¥<i>1688</i></span>
													<span className="old">¥2700</span>
												</div>
											</div>
										</a>
									</li>
									<li>
										<a href="sh/HunChe/Info-2">
											<img src="https://img.dxlfile.com/hunche/2017/06/20170626104037148.jpg-wapliebiao" />
											<div className="allPartRi">
												<h3>奥迪彩虹</h3>
												<div className="riInfo">
													<span className="price">¥<i>500</i></span>
													<span className="old">¥900</span>
												</div>
											</div>
										</a>
									</li>
								</ul>
								<div className="more"><a href="/sh/HunChe/Class-Car">查看更多</a></div>
							</div>
						</TabPane>
					</Tabs>
				</section>
				<footer>
					<nav>
						<a href="/index/city/changeRoot">电脑版</a>
						<a className="appDown footAppDown" style={{display: "none"}}>App下载</a>
						<a href="/about">关于我们</a>
						<a href="http://event.daoxila.com/M-tools/contact">联系我们</a>
						<a href="//m.daoxila.com/ZiXun">婚尚资讯</a>
					</nav>
					<h3>CopyRight 2017 沪ICP备10039145号</h3>
					<h3>上海到喜啦信息技术有限公司</h3>
				</footer>
            </div>
        );
    }
}

export default Home;
