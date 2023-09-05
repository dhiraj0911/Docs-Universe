// Front-end
import React, { Component } from "react";
import MetaTags from 'react-meta-tags';
// UI
import 'bootstrap/dist/css/bootstrap.min.css';
import MeAsset from "../assets/img/me.png";
import MetamaskAsset from "../assets/img/metamask.png";
import Filecoin from "../assets/img/filecoin.png";
import Ipfs from "../assets/img/ipfs.png";
import Ethereum from "../assets/img/ethereum.png";
import Polygon from "../assets/img/Polygon.png";

// Contract
import DocsUniverse from "../contracts/DocsUniverse.json";
import getWeb3 from "../getWeb3";

class Me extends Component {
  state = {
    web3: null, accounts: null, contract: null,
    activeAccount: 'Anonymous',
    tagline: 'You are offline, connect to metamask to continue.'
  }

  componentDidMount = async () => {
    const web3 = await getWeb3();
    const networkId = await web3.eth.net.getId();
    const deployedNetwork = DocsUniverse.networks[networkId];
    const instance = new web3.eth.Contract(DocsUniverse.abi,
      deployedNetwork && deployedNetwork.address,
    );
    this.setState({ web3, contract: instance})
    setInterval(async () => {
      try {
        const accounts = await web3.eth.getAccounts();
        this.setState({ accounts });
        if(this.state.activeAccount !== accounts[0]){
          var active = accounts[0];
          this.setState({ activeAccount: active })
          this.setState({ tagline: "You are now online on Docs Universe!"})
        }
      } catch (error) {
        alert(`You are offline, connect to metamask to continue.`);
        console.error(error);
      }
    }, 500)
  }

  render () {
    return (
      <section id="Me" className="p-5">
        <MetaTags>
          <title>Me</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta id="meta-description" name="description" content="Ethereum x IPFS DApp." />
          <meta id="og-title" property="og:title" content="Planet of Docs" />
        </MetaTags>

        <div className="container">
          <center className="lead">
            <b>{"Support Me 😊"}<br /></b>
            <br/>
            <span className="fs-6 fw-bold">
            Ethereum Address: 0x62D02613ed56119705165942cc724f207899D1C4<br />
            
            Filecoin Address: f1aq5sg2r53ws3tlki77phxdjwac3pcblsk7syaaq <br />
            </span>
          </center>
          <div className="justify-content-between">
            <div>
              <img src={MeAsset} className="mx-auto d-block" alt="" width="20%" height="20%" />
            </div>

            <div className="px-3 d-flex align-items-center justify-content-center">
              <h1>Me</h1>
            </div>

            <div className="px-3 pt-3 d-flex align-items-center justify-content-center">
              <p className="lead text-center">
                Good Day, <span className="fs-6 fw-bold">{this.state.activeAccount}!</span><br />
                {this.state.tagline}
              </p>
            </div>

            <hr />
            
          </div>
        </div>
      
        <section id="store" className="px-5 pb-5">
        <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-md text-center">
                <img src={Ethereum} className="img-fluid" width="50%" height="50%" alt="" />
              </div>
              <div className="col-md p-5">
                <h2>Ethereum</h2>
                <p className="lead">
                Ethereum is a decentralized, open-source blockchain with smart contract functionality.
                </p>
                <p>
                  All smart contracts are stored publicly on every node of the blockchain, which has costs.'Secure by design' means that every new transaction is recorded on a new 'block', which is connected to previous and future 'blocks', like a chain.
                </p>
                <a href="https://ethereum.org/en/" className="btn btn-light mt-3" target="_blank" rel="noreferrer">
                  <i className="bi bi-chevron-right"></i> Ethereum
                </a>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-md text-center">
                <img src={Ipfs} className="img-fluid" width="50%" height="50%" alt="" />
                <img src={Filecoin} className="img-fluid" width="50%" height="50%" alt="" />
              </div>
              <div className="col-md p-5">
                <h2>IPFS and Filecoin</h2>
                <p className="lead">
                 IPFS and Filecoin are complementary protocols for storing and sharing data in the distributed web.
                </p>
                <p>
                  IPFS is a peer-to-peer hypermedia protocol
                  designed to preserve and grow humanity's knowledge
                  by making the web upgradeable, resilient, and more open.<br></br>
                  Filecoin is an open-source, public cryptocurrency and digital payment system intended to be a blockchain-based cooperative digital storage and data retrieval method.
                </p>
                <a href="https://ipfs.io/" className="btn btn-light mt-3" target="_blank" rel="noreferrer">
                  <i className="bi bi-chevron-right"></i> IPFS
                </a>&nbsp;&nbsp;&nbsp;    
                <a href="https://filecoin.io/" className="btn btn-light mt-3" target="_blank" rel="noreferrer">
                  <i className="bi bi-chevron-right"></i> Filecoin
                </a>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-md text-center">
                <img src={Polygon} className="img-fluid" width="50%" height="50%" alt="" />
              </div>
              <div className="col-md p-5">
                <h2>Polygon</h2>
                <p className="lead">
                Polygon is the most proven way to build and scale decentralized application and projects on Ethereum</p>
                <p>
                Polygon uses a modified proof of stake consensus mechanism that enables a consensus to be achieved with every block. Achieving consensus using traditional proof of stake requires processing many blocks to achieve consensus. The proof of stake method requires network participants to stake—agree to not trade or sell—their MATIC tokens.
                </p>
                <a href="https://polygon.technology/" className="btn btn-light mt-3" target="_blank" rel="noreferrer">
                  <i className="bi bi-chevron-right"></i> Polygon
                </a>
              </div>
            </div>
          </div>
        </section>
      </section>
    );
  }
}

export default Me;