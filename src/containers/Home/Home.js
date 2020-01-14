import React from "react";

import '../../commons/css/style.css';

const Home = () => {

const contents = [
    { section: "Porque Elegirnos", excerpt: "algun texto sobre porque elegirnos..." },
    { section: "Queres tener venir a una clase de prueba ? " }
]

const why = [
    { title: "Powerful template", text: "Lorem ipsum dolor sit amet, consecte adipiscing elit. Suspendisse condimentum porttitor cursumus." },
    { title: "Powerful template", text: "Lorem ipsum dolor sit amet, consecte adipiscing elit. Suspendisse condimentum porttitor cursumus." },
    { title: "Powerful template", text: "Lorem ipsum dolor sit amet, consecte adipiscing elit. Suspendisse condimentum porttitor cursumus." } 
]

const callToAction = { title: "Join by April 27 to Programs and Services", subtitle: "This is a simple hero unit, a simple call-to-action-style component for calling extra attention to featured content.", buttonText: "Call us now!", buttonLink: "/" }

const pricing = {
    title: "Tabla de Precios",
    subtitle: "Elegi tu Plan",
    excerpt: "Mira nuestros planes y elegi el que mas se adapte a vos!",
    prices: [
        {
            title: "Plan 1",
            subtitle: "medio pelo",
            price: "800",
            items:[
                {title:"pileta"},
                {title:"musculacion"}
            ]
        },
        {
            title: "Plan 2",
            subtitle: "buen plan",
            price: "1200",
            items:[
                {title:"pileta"},
                {title:"musculacion"},
                {title:"masajes"}
            ]
        },
        {
            title: "Plan 3",
            subtitle: "super plan",
            price: "2200",
            items:[
                {title:"pileta"},
                {title:"musculacion"},
                {title:"masajes"},
                {title:"cross-fit"}
            ]
        }
    ]
}

    return (<>
        
        <section className="headerImage">
            <img src={require("../../commons/img/borrarimg1.jpg")} alt="imagen header" />
        </section>
        <section>
            <div class="container">
                <div class="heading-text heading-section text-center">
                    <h2>{contents[0].section}</h2>
                    <p>{contents[0].excerpt}</p>
                </div>
                <div class="row">
                    {
                        why.map( item => (
                            <div class="col-lg-4">
                                <div class="icon-box effect medium border center">
                                    <div class="icon">
                                        <a href="#"><i class="fa fa-plug"></i></a>
                                    </div>
                                    <h3>{item.title}</h3>
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        ) )
                    }
                    
                    
                </div>
            </div>
        </section>

        <div class="call-to-action background-image p-t-100 p-b-100" style={{background:"#ccc"}}>
            <div class="container">
                <div class="row">
                    <div class="col-lg-10">
                        <h3 class="text-light">{callToAction.title}</h3>
                        <p class="text-light">{callToAction.subtitle}</p>
                    </div>
                    <div class="col-lg-2"> <a class="btn btn-light btn-outline" href={callToAction.buttonLink}>{callToAction.buttonText}</a> </div>
                </div>
            </div>
        </div>


        <section id="section3" class="p-t-120 p-b-120">
            <div class="container">
                <div class="col-lg-8 m-b-100  center">
                    <div class="heading-text heading-section text-center">
                        <h4>{pricing.title}</h4>
                        <h2>{pricing.subtitle}</h2>
                        <p>{pricing.excerpt}</p>
                    </div>
                </div>
                <hr class="space" />
                <div class="row pricing-table">
                    
                    {
                        pricing.prices.map( item =>  (
                            <div class="col-lg-4 col-md-12 col-12">
                                <div class="plan">
                                    <div class="plan-header">
                                        <h4>{item.title}</h4>
                                        <p class="text-muted">{item.subtitle}</p>
                                        <div class="plan-price"><sup>$</sup>{item.price}<span>/mes</span> </div>
                                    </div>
                                    <div class="plan-list">
                                        <ul>
                                        {
                                            item.items.map( li => (
                                                <li><i class="fas fa-globe-americas"></i>{li.title}</li>
                                            ))
                                        }
                                        </ul>
                                        <div class="plan-button">
                                            <a href="#" class="btn btn-light">Buy Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    
                    
                </div>
            </div>
        </section>

{/**
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
*/}
        <footer id="footer">
            <div class="footer-content">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5">
                            <div class="widget">
                                <div class="widget-title">DemoGim</div>
                                <p class="mb-5">Built with love in Zona Oeste, Buenos Aires, Argentina<br />
                                    All rights reserved. Copyright © 2019. BZL.</p>
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
                    <div class="copyright-text text-center">&copy; 2019 BZL - All Rights Reserved.<a href="#1" rel="noopener noreferrer" target="_blank"> BZL </a> </div>
                </div>
            </div>
        </footer>

        <a id="scrollTop" href="#1"><i class="icon-chevron-up"></i><i class="icon-chevron-up"></i></a>

    </>
    )
}

export default Home;