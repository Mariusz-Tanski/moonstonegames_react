import React, {useEffect, useState} from 'react';
import Web3 from "web3-eth";
import ReactTooltip from "react-tooltip";
import {useSearchParams} from "react-router-dom";


export const ContractOperation = () => {
    const [searchParams] = useSearchParams();
    const defaultInvestValue = '10'
    const [minimumValueMessage, setMinimumValueMessage] = useState('');
    const [token, setToken] = useState(0);
    const [vesting, setVesting] = useState(0);
    const [investValue, setInvestValue] = useState(defaultInvestValue)
    const [referralNumber, setReferralNumber] = useState(searchParams.get('referralNumber'))
    const [bnbInvestValue, setBnBInvestValue] = useState(calculateToBNB(defaultInvestValue))
    const [accounts, setAccounts] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const [validMinimumValue, setValidMinimumValue] = useState(true);
    const [totalSupply, setTotalSupply] = useState(0);
    const [accountBalance, setAccountBalance] = useState(0);
    const [accountAvailableVesting, setAccountAvailableVesting] = useState(0);
    const [lockedValue, setLockedValue] = useState(0);
    const tokenFile = require("../abi/Token.json");
    const vestingFile = require("../abi/Vesting.json");
    const tokenAddress = "0x23081118A5f5143fE13a74DEc03CD55Bc117f747"
    const vestingAddress = "0x8902eaEE08F0153C88CD9Bb1023d414fabcD3Fbf"

    const AccountDetails = () => {
        return (
            <div style={{paddingTop: "30px"}}>
                <div className="social-media-items">
                    <div className="box-wrapper flex-column box">
                        <p className="accountValueColor">{convertToMoneySyntax(totalSupply)}</p>
                        <p className="p-8">Total supply</p>
                    </div>
                    <div>
                    </div>
                    <div className="box-wrapper flex-column box">
                        <p className="accountValueColor">{convertToMoneySyntax(accountAvailableVesting)}</p>
                        <p className="p-8">Available to withdraw</p>
                    </div>
                    <div className="box-wrapper flex-column box">
                        <p className="accountValueColor">{convertToMoneySyntax(accountBalance)}</p>
                        <p className="p-8">Account Balance</p>
                    </div>
                    <div>
                    </div>
                    <div className="box-wrapper flex-column box">
                        <p className="accountValueColor">{convertToMoneySyntax(lockedValue)}</p>
                        <p className="p-8">Locked value</p>
                    </div>
                </div>
            </div>
        )
    }

    function convertToMoneySyntax(value) {
        return Number(value / 1000000000000000000).toLocaleString("en-US")
    }

    // this will trigger whenever the App function is called, which index.js runs at startup
    useEffect(() => {
        // Here we check if there is web3 support
        if (typeof web3 !== 'undefined') {

            window.web3 = new Web3(window.web3.currentProvider)
            // Check if its MetaMask that is installed
            if (window.web3.currentProvider.isMetaMask === true) {
                connectMetaMask()
                setToken(new window.web3.Contract(tokenFile, tokenAddress));
                setVesting(new window.web3.Contract(vestingFile, vestingAddress));
            } else {
                // Another web3 provider, add support if you want
            }
        } else {

        }
    }, []);

    useEffect(() => {
        if (loaded && accounts !== 0) {
            getUserProfile()
                .catch(reason => console.log(reason));

        } else {
            setTimeout(setLoaded(true), 500);
        }
    }, [loaded, accounts]);

    function connectMetaMask() {
        window.web3.requestAccounts()
            .then((result) => {
                setAccounts(result);
            })
            .catch((error) => {
                throw new Error(error);
            });
    }

    async function getUserProfile() {
        const devToken = new window.web3.Contract(tokenFile, tokenAddress);
        call(devToken.methods.totalSupply, setTotalSupply);
        call(devToken.methods.balanceOf, setAccountBalance, accounts[0]);

        const vesting = new window.web3.Contract(vestingFile, vestingAddress);
        call(vesting.methods.hasAvailableWithdrawFromVesting, setAccountAvailableVesting, accounts[0]);
        call(vesting.methods.hasVesting, setLockedValue, accounts[0]);

    }

    function call(func, callback, ...args) {
        func(...args).call()
            .then((result) => {
                callback(result);
            })
            .catch((error) => {
                throw new Error(error);
            })
    }

    function invest() {
        if (Number.parseFloat(investValue) >= 0.1) {
            setMinimumValueMessage('')
            setValidMinimumValue(true)
            if (referralNumber === undefined || referralNumber === null || referralNumber === '') {
                vesting.methods.invest(String(bnbInvestValue)).estimateGas({from: accounts[0]})
                    .then((gas) => {
                        vesting.methods.invest(String(bnbInvestValue)).send({
                            from: accounts[0],
                            contractAddress: vestingAddress,
                            gas: gas,
                            value: String(bnbInvestValue)
                        });
                    }).catch((error) => {
                    throw new Error(error);
                });
            } else {
                vesting.methods.investWithReferral(String(bnbInvestValue), String(referralNumber).trim()).estimateGas({from: accounts[0]})
                    .then((gas) => {
                        vesting.methods.investWithReferral(String(bnbInvestValue), String(referralNumber).trim()).send({
                            from: accounts[0],
                            contractAddress: vestingAddress,
                            referral: String(referralNumber).trim(),
                            gas: gas,
                            value: String(bnbInvestValue)
                        });
                    }).catch((error) => {
                    throw new Error(error);
                });
            }
        } else {
            setValidMinimumValue(false)
            setMinimumValueMessage('Minimum value is 0.1 BNB')
        }
    }

    function withdraw() {
        vesting.methods.withdrawVesting().estimateGas({from: accounts[0]})
            .then((gas) => {
                vesting.methods.withdrawVesting().send({
                    from: accounts[0],
                    gas: gas
                });
            }).catch((error) => {
            throw new Error(error);
        });
    }

    function calculateToBNB(value) {
        const Web3Utils = require('web3-utils');
        if (value !== undefined && value.trim() !== '') {
            return Web3Utils.toWei(value).toString()
        }
        return '0';
    }

    function addInvestValue(value) {
        setInvestValue(value)
        setBnBInvestValue(calculateToBNB(value))
    }


    return (
        <div>
            <div className="main-information">
                <p className="mi-description  ">Welcome to MoonStone ICO platform</p>
                <div style={{marginTop: "2rem"}}>
                    <ReactTooltip id="registerTip" place="top" effect="solid" backgroundColor="#F25292"
                                  className="extraClass">
                        Invest value (BNB)
                    </ReactTooltip>
                    <input data-tip data-for="registerTip" className="invest-input" value={investValue}
                           onInput={e => addInvestValue(e.target.value)} placeholder="Enter weight…"/>
                    <a style={{cursor: "pointer"}} className="invest-button" onClick={invest}>Invest</a>
                    <a href="#" className="withdraw-button" onClick={withdraw}>WITHDRAW</a>
                    <p className="minimum-value" style={{paddingTop: validMinimumValue ? "0rem" : "2rem"}}>{minimumValueMessage}</p>
                </div>
                <p style={{marginTop: "2rem"}} className="mi-description  ">Referral number (if applicable):</p>
                <ReactTooltip id="referralTip" place="top" effect="solid" backgroundColor="#F25292"
                              className="extraClass">
                    Number
                </ReactTooltip>
                <input style={{marginTop: "2rem"}} data-tip data-for="referralTip" className="referral-input"
                       value={referralNumber}
                />
            </div>
            <AccountDetails/>
        </div>
    )
}
