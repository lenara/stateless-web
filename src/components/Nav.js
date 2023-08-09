import React from 'react'
import { useEffect, useState, useRef } from 'react';

import { setupWalletSelector } from "@near-wallet-selector/core";
import { setupModal } from "@near-wallet-selector/modal-ui";

import { setupNearWallet } from "@near-wallet-selector/near-wallet";
import { setupHereWallet } from "@near-wallet-selector/here-wallet";
import { setupMyNearWallet } from "@near-wallet-selector/my-near-wallet";
import { setupSender } from "@near-wallet-selector/sender";
import { setupMeteorWallet } from "@near-wallet-selector/meteor-wallet";
import { setupLedger } from "@near-wallet-selector/ledger";

import "@near-wallet-selector/modal-ui/styles.css";

// Contains the NFT selection controls.
export function ViewSelector(props){
	return (
		<div className="selector nav">
			<span className="nav-link mx-1" ><img id="view-1x-button" 	onClick={props.onClick} src={
				props.viewMode != "4x" ? require("../assets/1x_active.svg") : require("../assets/1x_idle.svg")
			} /></span>
			<a className="nav-link mx-1"><img id="view-reselect-button" onClick={props.onClick} src={
				require("../assets/call_new_selection.svg")
			} /></a>
			<a className="nav-link mx-1"><img id="view-4x-button" 			onClick={props.onClick} src={
			  props.viewMode == "4x" ? require("../assets/4x_active.svg") : require("../assets/4x_idle.svg")
			} /></a>
		</div>
	)
}

// Contains the user wallet control and the site help link.
export function Ident(props){

	let walletConnectedIcon = require("../assets/wallet_connected.svg");
	let walletNotConnectedIcon = require("../assets/wallet_not_connected.svg");

	function helpClick(e){
		alert("help!")
	}

	return (
		<div className="ident">
			<img src={ props.walletSelector?.isSignedIn() ? walletConnectedIcon : walletNotConnectedIcon } className="pe-2" onClick={props.walletClick}/> 
			<img src={require("../assets/help.svg")} onClick={helpClick} /> 
		</div>
	)
}
