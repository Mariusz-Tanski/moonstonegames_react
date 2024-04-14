import React, {useEffect, useState} from 'react';
import Web3 from "web3-eth";
import Clipboard from '@react-native-clipboard/clipboard';

export const Referral = () => {
    const [referralNumber, setReferralNumber] = useState('');
    const [copyLabel, setCopyLabel] = useState('Copy');

    useEffect(() => {
        if (typeof web3 !== 'undefined') {
            window.web3 = new Web3(window.web3.currentProvider)
            if (window.web3.currentProvider.isMetaMask === true) {
                connectMetaMask()
            } else {
                // Another web3 provider, add support if you want
            }
        } else {
        }
    }, []);


    function connectMetaMask() {
        window.web3.requestAccounts()
            .then((result) => {
                if (result[0] !== undefined) {
                    setReferralNumber(result[0])
                }

            })
            .catch((error) => {
                throw new Error(error);
            });
    }

    function generateReferralUrl() {
        setCopyLabel('Copied')
        Clipboard.setString('https://ico.moonstone.gg?referralNumber=' + referralNumber)
    }

    return (
        <div className="container">
            <div>
                <div className="pancake-banner">
                    <div className="width--80--percent margin-left-60 text">
                        <h4 className="text-align__left">Get referral number!</h4>
                    </div>
                    <div
                        className="width--20--percent text-align__right margin-right-60 pancake-button__banner">
                        <a href="#!" className="pancake-button__footer"
                           onClick={() => generateReferralUrl()}>{copyLabel}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
