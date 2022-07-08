"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[2320],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(n),p=i,f=h["".concat(l,".").concat(p)]||h[p]||d[p]||o;return n?a.createElement(f,r(r({ref:t},u),{},{components:n})):a.createElement(f,r({ref:t},u))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},32785:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return h}});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),r=["components"],s={sidebar_label:"Introduction",sidebar_position:2,hide_table_of_contents:!1},l="Introduction",c={unversionedId:"learn/intro",id:"learn/intro",isDocsHomePage:!1,title:"Introduction",description:"BNB Smart Chain is an innovative solution to bring programmability and interoperability to Beacon Chain. BNB Smart Chain relies on a system of 21 active validators with Proof of Staked Authority (PoSA) consensus that can support short block time and lower fees. The most bonded validator candidates of staking will become validators and produce blocks. The double-sign detection and other slashing logic guarantee security, stability, and chain finality.",source:"@site/docs/learn/intro.md",sourceDirName:"learn",slug:"/learn/intro",permalink:"/docs/learn/intro",editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/learn/intro.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Introduction",sidebar_position:2,hide_table_of_contents:!1},sidebar:"bscSideBar",previous:{title:"Getting Started",permalink:"/docs/getting-started"},next:{title:"Tutorials",permalink:"/docs/bsc-tutorials"}},u=[{value:"Ecosystem of cross-chains and multi-chains",id:"ecosystem-of-cross-chains-and-multi-chains",children:[{value:"BNB Sidechain",id:"bnb-sidechain",children:[],level:3},{value:"BNB ZkRollup - A Trustless Scaling Solution",id:"bnb-zkrollup---a-trustless-scaling-solution",children:[],level:3}],level:2},{value:"Resources",id:"resources",children:[],level:2}],d={toc:u};function h(e){var t=e.components,s=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"BNB Smart Chain is an innovative solution to bring programmability and interoperability to Beacon Chain. BNB Smart Chain relies on a system of 21 active validators with Proof of Staked Authority (PoSA) consensus that can support short block time and lower fees. The most bonded validator candidates of staking will become validators and produce blocks. The double-sign detection and other slashing logic guarantee security, stability, and chain finality.\nOther than the 21 active validators, BSC will introduce more validators, e.g. another 20 inactive validators, into the validator set as backups, which will be called \u201cCandidates\u201d."),(0,o.kt)("p",null,"Candidates will produce blocks and charge gas fees in BSC mainnet, but in a much less chance than the official validator set of 21 elected. The unavailable candidates will be slashed as well though in a smaller size. A decent motivation is expected to be maintained so that the candidate validators are willing to ensure the quality and help secure BSC."),(0,o.kt)("p",null,"In an extreme case, if a majority of the active 21 validators get attacked and offline, Candidate Validators can report to Beacon Chain about the stale blocking, resume it and eventually propose a re-election of the active validator set."),(0,o.kt)("p",null,"The BNB Smart Chain also supports EVM-compatible smart contracts and protocols. Cross-chain transfer and other communication are possible due to native support of interoperability. Binance DEX remains a liquid venue of the exchange of assets on both chains. This dual-chain architecture will be ideal for users to take advantage of the fast trading on one side and build their decentralized apps on the other side. The Binance Smart Chain will be:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"A self-sovereign blockchain"),": Provides security and safety with elected ",(0,o.kt)("a",{parentName:"li",href:"/docs/learn/consensus"},"validators"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"EVM-compatible"),": Supports all the existing Ethereum tooling along with faster finality and cheaper transaction fees."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Interoperable"),": Comes with efficient native dual chain communication; Optimized for scaling high-performance dApps that require a fast and smooth user experience."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Distributed with on-chain governance"),": Proof of Staked Authority (PoSA) brings in decentralization and community participants. As the native token, BNB will serve as both the gas of smart contract execution and tokens for staking.")),(0,o.kt)("h2",{id:"ecosystem-of-cross-chains-and-multi-chains"},"Ecosystem of cross-chains and multi-chains"),(0,o.kt)("p",null,"The big lesson learned from BSC 2021 is that \u201cone chain\u201d cannot cover all angles. At the peak time, BSC had more than 2M daily active users (DAU), with a single GameFi reaching up to 1M DAU. This introduced significant challenges for both the network itself and its supporting infrastructure like RPC/API nodes. For dApps with massive user bases, multi-chains and cross-chain should be the solution.  "),(0,o.kt)("p",null,"The BSC Core Team strongly believes in partition chains and a multi-chain future as it can sustain the ever-increasing demand for decentralized computing power and storage. This is consistent with many other blockchains in the industry, such as ETH2.0 and multi-chain strategies in Polkadot, Cosmos, and Avalanche."),(0,o.kt)("p",null,"The cross-shard and cross-chain/multi-chain interoperability will be the key topic of 2022. The BSC validators and developers community is dedicated to fulfilling BSC\u2019s vision to operate at the crossroads of a decentralized blockchain future. Specifically, we aim to achieve this by implementing new technologies on BSC via BNB Sidechain and BSC Partition Chain (BPC) infrastructure layers."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"BSC 2022",src:n(5906).Z})),(0,o.kt)("h3",{id:"bnb-sidechain"},"BNB Sidechain"),(0,o.kt)("p",null,"The BNB Sidechain is an infrastructure introduced to help developers and node operators build and run their own blockchain as their internal value system for a massive number of users while still maintaining a close connection with BSC. Any project developer will be able to deploy their own BNB Sidechain with its unique specifications and validator set. This validator set can run with fewer validators than BSC, depending on the BNB Sidechain deployer. These validators can be run by the application owners or any community stakeholders, bringing more flexibility and decentralization to BNB Sidechain. The typical usage of BNB Sidechain is like the Ronin chain for the Axie Infinity.  However, to minimize the potential risks of the side chain, a new protocol (including built-in asset types and cross-chain) should be introduced to ensure seamless liquidity between BNB Sidechain and BSC."),(0,o.kt)("h3",{id:"bnb-zkrollup---a-trustless-scaling-solution"},"BNB ZkRollup - A Trustless Scaling Solution"),(0,o.kt)("p",null,"BNB ZkRollup is a trustless and scaling solution for BNB Smart Chain. BNB ZkRollup is built on ZK Rollup architecture. BNB ZkRollup bundles (or \u201croll-up\u201d) hundreds of transactions off-chain and generates cryptographic proof. These proofs can come in the form of SNARKs (succinct non-interactive argument of knowledge) which can prove the validity of every single transaction in the Rollup Block. It means all funds are held on the BSC, while computation and storage are performed on BNB Sidechain with less cost and fast speed."),(0,o.kt)("p",null,"BNB ZkRollup achieves the following goals:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"No sacrificing on decentralization or security; "),(0,o.kt)("li",{parentName:"ul"},"The BNB ZkRollup share the same security as BSC does. Thanks to zkSNARK proofs, the security is guaranteed by cryptographic. Users do not have to trust any third parties or keep monitoring the Rollup blocks in order to prevent fraud."),(0,o.kt)("li",{parentName:"ul"},"Fast transaction speed, faster finality, much lower gas fee."),(0,o.kt)("li",{parentName:"ul"},"BNB, and BEP20/BEP721/BEP1155 created on BSC or BNB ZkRollup can flow freely between BSC and ZkRollup."),(0,o.kt)("li",{parentName:"ul"},"The gas token on the BNB ZkRollup can be either BEP20 or BNB. "),(0,o.kt)("li",{parentName:"ul"},"Users can trigger a \u201cfull exit\u201d on BSC. The user can request this operation to withdraw funds if he thinks that his transactions are censored by BNB ZkRollup."),(0,o.kt)("li",{parentName:"ul"},"Built-in instant AMM swap."),(0,o.kt)("li",{parentName:"ul"},"Built-in NFT marketplace.")),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/whitepaper/blob/master/WHITEPAPER.md"},"White Paper")))}h.isMDXComponent=!0},5906:function(e,t,n){t.Z=n.p+"assets/images/BNBChain2022-f77353b5f3f677f9cb0c4c74e5f1e753.png"}}]);