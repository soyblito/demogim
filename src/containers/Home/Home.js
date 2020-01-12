import React from "react";

import '../../commons/css/style.css';

const Home = () => {
    return (<>
        
        
        <section class="m-t-80 p-b-150">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="page-error-404">404</div>
                    </div>
                    <div class="col-lg-6">
                        <div class="text-left">
                            <h1 class="text-medium">Ooops, This Page Could Not Be Found!</h1>
                            <p class="lead">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
                            <div class="seperator m-t-20 m-b-20"></div>
                            <div class="search-form">
                                <p>Please try searching again</p>
                                <form action="search-results-page.html" method="get" class="form-inline">
                                    <div class="input-group input-group-lg">
                                        <input type="text" aria-required="true" name="q" class="form-control widget-search-form" placeholder="Search for pages..." />
                                        <div class="input-group-append">
                                            <span class="input-group-btn">
                                                <button type="submit" id="widget-widget-search-form-button" class="btn"><i class="fa fa-search"></i></button>
                                            </span>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <footer id="footer">
            <div class="footer-content">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5">
                            <div class="widget">
                                <div class="widget-title">Polo HTML5 Template</div>
                                <p class="mb-5">Built with love in Fort Worth, Texas, USA<br />
                                    All rights reserved. Copyright © 2019. INSPIRO.</p>
                                <a href="https://themeforest.net/item/polo-responsive-multipurpose-html5-template/13708923" class="btn btn-inverted">Purchase Now</a>
                            </div>
                        </div>
                        <div class="col-lg-7">
                            <div class="row">
                                <div class="col-lg-3">
                                    <div class="widget">
                                        <div class="widget-title">Discover</div>
                                        <ul class="list">
                                            <li><a href="#1">Features</a></li>
                                            <li><a href="#1">Layouts</a></li>
                                            <li><a href="#1">Corporate</a></li>
                                            <li><a href="#1">Updates</a></li>
                                            <li><a href="#1">Pricing</a></li>
                                            <li><a href="#1">Customers</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-lg-3">
                                    <div class="widget">
                                        <div class="widget-title">Features</div>
                                        <ul class="list">
                                            <li><a href="#1">Layouts</a></li>
                                            <li><a href="#1">Headers</a></li>
                                            <li><a href="#1">Widgets</a></li>
                                            <li><a href="#1">Footers</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-lg-3">
                                    <div class="widget">
                                        <div class="widget-title">Pages</div>
                                        <ul class="list">
                                            <li><a href="#1">Portfolio</a></li>
                                            <li><a href="#1">Blog</a></li>
                                            <li><a href="#1">Shop</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-lg-3">
                                    <div class="widget">
                                        <div class="widget-title">Support</div>
                                        <ul class="list">
                                            <li><a href="#1">Help Desk</a></li>
                                            <li><a href="#1">Documentation</a></li>
                                            <li><a href="#1">Contact Us</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="copyright-content">
                <div class="container">
                    <div class="copyright-text text-center">&copy; 2019 POLO - Responsive Multi-Purpose HTML5 Template. All Rights Reserved.<a href="http://www.inspiro-media.com" rel="noopener noreferrer" target="_blank"> INSPIRO</a> </div>
                </div>
            </div>
        </footer>

        <a id="scrollTop" href="#1"><i class="icon-chevron-up"></i><i class="icon-chevron-up"></i></a>

    </>
    )
}

export default Home;