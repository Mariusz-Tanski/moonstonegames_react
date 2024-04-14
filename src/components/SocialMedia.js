import React from 'react';

export const SocialMedia = () => {
    return (
        <div className="c-header-desktop__social">
            <ul>
                <li>
                    <a href="https://twitter.com/MoonStoneGames" aria-label="Twitter"
                       target="_blank" rel="nofollow" className="btn--primary">
                        <img
                            src="https://moonstone.gg/wp-content/uploads/2021/12/twitter.svg"
                            alt=""/>
                    </a>
                </li>
                <li>
                    <a href="https://t.me/MoonStoneGamesChat"
                       aria-label="Telegram MoonStoneGamesChat" target="_blank"
                       rel="nofollow"
                       className="btn--primary">
                        <img
                            src="https://moonstone.gg/wp-content/uploads/2021/12/telegram.svg"
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
                       aria-label="Youtube" target="_blank" rel="nofollow"
                       className="btn--primary">
                        <img
                            src="https://moonstone.gg/wp-content/uploads/2021/12/yt-48pix.jpg"
                            alt=""/>
                    </a>
                </li>
            </ul>
        </div>
    )
}
