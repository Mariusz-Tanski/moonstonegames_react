import './App.css';
import React from 'react';
import {BrowserView, MobileView} from 'react-device-detect';
import {ContractOperation} from "./components/ContractOperation";
import {Referral} from "./components/Referral";
import {MobileUnavailable} from "./components/MobileUnavailable";
import {Header} from "./components/Header";

function App() {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 870;

    React.useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, []);
    return (
        <div>
            <BrowserView>
                <div className="App">
                    <sectison id="main-section">
                        <div className="container">
                            <Header/>
                            <ContractOperation/>
                        </div>

                    </sectison>
                    <section id="BUY-BANNER">
                        <Referral/>
                    </section>
                    <section id="copyright">
                        <div className="container">
                            <p>Copyright &copy; 2021 Moon Stone NFT. All
                                Rights Reserved.</p>
                        </div>
                    </section>
                </div>
            </BrowserView>
            <MobileView>
                <div className="App">
                    <MobileUnavailable/>
                </div>
            </MobileView>
        </div>
    )
        ;
}

export default App;
