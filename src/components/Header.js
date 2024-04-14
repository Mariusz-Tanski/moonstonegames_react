import React from 'react';
import {SocialMedia} from "./SocialMedia";
export const Header = () => {
    return (
        <header className="c-header c-header--transparent">
            <div className="c-header-desktop">
                <div className="c-header-desktop__wrapper">
                    <div className="c-header-desktop__container container-fluid">
                        <div className="c-header-desktop__row">
                            <figure className="c-header-desktop__logo mr-auto">
                                <a href="https://moonstone.gg">
                                    <img src="https://moonstone.gg/wp-content/uploads/2021/11/logo.png"
                                         alt="Moon Stone Games"/>
                                </a>
                            </figure>
                            <nav className="c-header-desktop__nav c-header-desktop__nav--primary menu">
                                <ul id="menu-header-menu" className="menu">
                                    <li id="menu-item-150"
                                        className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-150">
                                        <a href="https://moonstone.gg/#start" aria-current="page">Go back to
                                            MoonStone.GG</a></li>
                                </ul>
                            </nav>
                            <div className="c-header-desktop__btns">
                                <ul className="btns gap-default">
                                    <li className="col col-auto">
                                        <a href="https://moonstone.gg/wp-content/uploads/2021/12/moonstone_whitepaper3.0.pdf" target="_blank"
                                           className="btn btn--primary btn--small download-whitepaper-btn ">
                                            <p style={{fontSize: "10px"}}>DOWNLOAD WHITEPAPAER</p>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <SocialMedia/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="c-header-mobile-bar">
                <div className="c-header-mobile-bar__row">
                    <figure className="c-header-mobile-bar__logo">
                        <a href="https://moonstone.gg">
                            <img src="https://moonstone.gg/wp-content/uploads/2021/11/logo.png"
                                 alt="Moon Stone Games"/>
                        </a>
                    </figure>
                    <div className="c-header-mobile__social">
                        <ul>
                            <li>
                                <a href="https://twitter.com/MoonStoneGames" aria-label="Twitter"
                                   target="_blank"
                                   rel="nofollow" className="btn--primary">
                                    <img src="https://moonstone.gg/wp-content/uploads/2021/12/twitter.svg"
                                         alt=""/>
                                </a>
                            </li>
                            <li>
                                <a href="https://t.me/MoonStoneGamesChat"
                                   aria-label="Telegram MoonStoneGamesChat"
                                   target="_blank" rel="nofollow" className="btn--primary">
                                    <img src="https://moonstone.gg/wp-content/uploads/2021/12/telegram.svg"
                                         alt=""/>
                                </a>
                            </li>
                            <li>
                                <a href="https://medium.com/moonstonegames" aria-label="Medium"
                                   target="_blank"
                                   rel="nofollow" className="btn--primary">
                                    <img
                                        src="https://moonstone.gg/wp-content/uploads/2021/12/medium-48pix.jpg"
                                        alt=""/>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/channel/UCASSVvPW2xZUErXVBqm7uSw"
                                   aria-label="Youtube"
                                   target="_blank" rel="nofollow" className="btn--primary">
                                    <img src="https://moonstone.gg/wp-content/uploads/2021/12/yt-48pix.jpg"
                                         alt=""/>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div role="button" className="c-header-mobile-bar__toggle toggle-button"
                         data-header-toggle="">
                        <i className="icon icon--menu toggle-button-inactive"></i>
                        <i className="icon icon--close toggle-button-active"></i>
                    </div>
                </div>
            </div>
            <div className="c-header-mobile">
                <nav className="c-header-mobile__nav hideable-nav">
                    <ul id="menu-header-menu-1" className="menu">
                        <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-150">
                            <a href="https://moonstone.gg/#start" aria-current="page">Homepage</a></li>
                    </ul>
                </nav>
                <div className="c-header-mobile__btns">
                    <ul className="btns gap-default">
                        <li className="col t1:col-auto-fit">
                            <a href="#" target="" className="btn btn--primary btn--large">
                                <span className="btn__text">Buy on pancakeswap</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
