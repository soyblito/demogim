import React from "react";

import {
    Link
  } from "react-router-dom";

const Navigation = () => {
    return <>
        {/*
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
          </ul>
        </nav>
        */}
        <header id="header" data-fullwidth="true">
            <div class="header-inner">
                <div class="container">

                    <div id="logo">
                        <a href="index.html">
                            <span class="logo-default">DEMOGIM</span>
                            <span class="logo-dark">DEMOGIM</span>
                        </a>
                    </div>

                    <div id="search"><a id="btn-search-close" class="btn-search-close" href="#1" aria-label="Close search form"><i class="icon-x"></i></a>
                        <form class="search-form" action="search-results-page.html" method="get">
                            <input class="form-control" name="q" type="search" placeholder="Type & Search..." />
                            <span class="text-muted">Start typing & press "Enter" or "ESC" to close</span>
                        </form>
                    </div>
{/*
                    <div class="header-extras">
                        <ul>
                            <li>
                                <a id="btn-search" href="#1"> <i class="icon-search"></i></a>
                            </li>
                            <li>
                                <div class="p-dropdown">
                                    <a href="#1"><i class="icon-globe"></i><span>EN</span></a>
                                    <ul class="p-dropdown-content">
                                        <li><a href="#1">French</a></li>
                                        <li><a href="#1">Spanish</a></li>
                                        <li><a href="#1">English</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
*/}                    
                    <div id="mainMenu-trigger">
                        <a href="#1" class="lines-button x"><span class="lines"></span></a>
                    </div>
                    
                    <div id="mainMenu">
                        <div class="container">
                            <nav>
                                <ul>
                                    <li><a href="index.html">Home</a></li>
                                    {/*
                                    <li class="dropdown"><a href="#1">Layout</a>
                                        <ul class="dropdown-menu">
                                            <li ><a href="#1">Topbar 1</a></li>
                                            <li ><a href="#1">Topbar 2</a></li>
                                            <li ><a href="#1">Topbar 3</a></li>                                            
                                        </ul>
                                    </li>
                                    <li><a href="index.html">Precios</a></li>
                                    */}
                                    <li><a href="index.html">Contacto</a></li>                                    
                                </ul>
                            </nav>
                        </div>
                    </div>

                </div>
            </div>
        </header>
    </>
}

export default Navigation;