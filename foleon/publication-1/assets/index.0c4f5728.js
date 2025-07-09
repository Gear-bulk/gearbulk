var ri=Object.defineProperty,si=Object.defineProperties;var ii=Object.getOwnPropertyDescriptors;var xt=Object.getOwnPropertySymbols;var lo=Object.prototype.hasOwnProperty,co=Object.prototype.propertyIsEnumerable;var ln=(e,t,o)=>t in e?ri(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,g=(e,t)=>{for(var o in t||(t={}))lo.call(t,o)&&ln(e,o,t[o]);if(xt)for(var o of xt(t))co.call(t,o)&&ln(e,o,t[o]);return e},O=(e,t)=>si(e,ii(t));var Se=(e,t)=>{var o={};for(var n in e)lo.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&xt)for(var n of xt(e))t.indexOf(n)<0&&co.call(e,n)&&(o[n]=e[n]);return o};var R=(e,t,o)=>(ln(e,typeof t!="symbol"?t+"":t,o),o);import{af as mt,ag as uo,ah as po,ai,a1 as mo,_ as ho,aa as li,a6 as fo,s as y,R as s,I as ne,U as ce,C as Ee,aj as go,ak as Eo,al as bo,a4 as ci,a3 as di,am as ui,an as pi,ao as mi,ap as hi,aq as xe,r as m,y as ye,u as ve,t as cn,g as dn,ar as yo,as as vo,at as fi,au as gi,av as me,c as Ei,l as G,a as bi,aw as yi,ax as ze,ay as To,az as vi,aA as Ti,aB as wi,ad as un,v as pn,i as Ii,f as Ci,aC as Si,D as Ue,w as xi,aD as ki,aE as _i,aF as Ai,aG as Ni,V as Ri,aH as Li,aI as Mi,j as Oi,aJ as wo,o as et,F as Pi,z as Di,aK as Io,aL as Co,aM as $i,aN as Bi,aO as Fi}from"./vendor.96c5c2b8.js";import{m as ke,s as Gi,u as W,a as zi,C as kt,S as z,b as Ye,n as So,A as He,c as X,d as Ui,e as Hi,f as Ie,g as tt,h as nt,i as xo,j as Vi,T as ko,M as mn,t as de,k as Ki,l as q,B as ji,o as Wi,p as qi,q as Yi,r as Xi,v as Qi,w as Zi,I as Ji,x as he,y as ea,z as ta,D as na,E as hn,P as fn,F as _o,O as gn,G as oa,H as fe,J as Xe,K as ra,L as sa,N as Ao,Q as ot,R as ia,U as aa,V as la,W as ca,X as da,Y as ht,Z as Oe,_ as ua,$ as ft,a0 as gt,a1 as No,a2 as Et,a3 as _t,a4 as rt,a5 as At,a6 as pa,a7 as ma,a8 as ha,a9 as fa,aa as ga,ab as Ro,ac as Ea,ad as ba,ae as Lo,af as ya,ag as va,ah as Ta,ai as wa,aj as En,ak as Ia,al as Ca,am as Mo,an as Sa,ao as xa,ap as ka,aq as bn,ar as _a,as as Aa,at as Na,au as Ra,av as La,aw as Ma,ax as Oa,ay as Nt,az as Rt,aA as Pa,aB as yn,aC as Da,aD as $a,aE as Oo,aF as Po,aG as Ba,aH as Fa,aI as Ga,aJ as za,aK as Ua,aL as Ha,aM as Va,aN as Ka,aO as st,aP as ja,aQ as vn,aR as Wa,aS as qa,aT as Ya,aU as Xa,aV as Qa,aW as Za,aX as Do,aY as $o,aZ as Bo,a_ as Fo,a$ as Ja,b0 as el,b1 as tl,b2 as nl,b3 as ol,b4 as rl,b5 as it,b6 as sl,b7 as il,b8 as al,b9 as ll,ba as cl,bb as dl,bc as ul,bd as pl,be as ml,bf as hl,bg as fl,bh as gl,bi as El,bj as bl,bk as yl,bl as vl,bm as Go,bn as zo,bo as Tl,bp as Uo,bq as Ho,br as wl,bs as Il,bt as Vo,bu as Cl,bv as Sl,bw as xl,bx as kl,by as _l,bz as Al,bA as Nl,bB as Ko,bC as jo,bD as Rl,bE as Ll,bF as Wo,bG as Ml,bH as Ol,bI as Pl,bJ as Dl,bK as $l,bL as Bl,bM as qo,bN as Fl,bO as Ve,bP as $,bQ as Gl,bR as zl,bS as ue,bT as Ul,bU as Hl,bV as Vl,bW as Yo,bX as Kl,bY as jl,bZ as Wl,b_ as ql,b$ as Yl,c0 as Xl,c1 as Xo,c2 as Qo,c3 as Ql,c4 as Zl,c5 as Jl,c6 as ec,c7 as tc,c8 as nc,c9 as oc}from"./core.970ae399.js";import{c as rc,H as Zo}from"./sdk.29730c60.js";const ro={},sc=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=o(r);fetch(r.href,i)}};sc();const Lt=(e,t)=>t.includes(e.key),ic=(e,t)=>{const o=[],n={};for(let r=0;r<e.length;r++)n[e[r].beckyId]=e[r];for(let r=0;r<t.length;r++){const i=n[t[r].refId]||null;if(i)for(const a in t[r].highlight){const l=t[r].highlight[a];o.push({id:i.id,refId:i.beckyId,screenshot:i.meta.screenshotLinks.original.href,pageTitle:i.name,pageIndex:i.pageNumber,text:l[0],elementName:a})}}return o};class ac{constructor(t){R(this,"searchablePagesInPublication");R(this,"searchTerm$");this.searchablePagesInPublication=t,this.searchTerm$=new mt}search(t){this.searchTerm$.next(t)}async performSearch(t,o,n){return fetch(`${o}${t}${n&&`&language=${n}`}`)}getResults(t,o){return this.searchTerm$.pipe(uo(300),po(n=>n.trim()),ai(),mo(n=>n?li(this.performSearch(n,t,o).then(r=>r.json()).catch(r=>console.error(r))).pipe(fo(r=>ho(ic(this.searchablePagesInPublication,r)))):ho([])))}}const lc=y.button`
	font-size: 22px;
	border: none;
	flex: 0 0 57px;
	height: 57px;
	display: flex;
	align-items: center;
	justify-content: center;
	background: transparent;
	@media screen and (max-width: 749px) {
		flex: 0 0 37px;
		padding: 1px 7px 2px 7px;
	}
`,Jo=({size:e,color:t,style:o,className:n,onClick:r})=>{const i=e||"1em",a=g({},r?{onClick:r}:{});return s.createElement(lc,O(g({},a),{"data-foleon-element":"search-icon","aria-label":"Search"}),s.createElement("svg",{stroke:t,fill:t,strokeWidth:"0",className:n?`${n} `:"",style:g({verticalAlign:"middle",color:t},o),height:i,width:i,preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 40 40","aria-hidden":!0},s.createElement("g",null,s.createElement("path",{d:"m15.9 23.4c4.1 0 7.5-3.4 7.5-7.5s-3.4-7.5-7.5-7.5-7.5 3.3-7.5 7.5 3.3 7.5 7.5 7.5z m10 0l8.2 8.2-2.5 2.5-8.2-8.2v-1.4l-0.5-0.4c-1.9 1.6-4.4 2.5-7 2.5-6.1 0-10.9-4.7-10.9-10.7s4.8-10.9 10.9-10.9 10.7 4.8 10.7 10.9c0 2.6-0.9 5.1-2.5 7l0.4 0.5h1.4z"}))))},cc=y.button`
	border: none;
	margin-top: 7px;
	padding: 0;
	width: 24px;
	height: 24px;
`,dc=s.forwardRef((e,t)=>s.createElement(cc,O(g({},e),{ref:t}),s.createElement(ne,{viewBox:"0 0 40 40",size:"auto"},s.createElement("defs",null,s.createElement("polygon",{id:"close-button-path",points:"32 10.4171429 29.5828571 8 20 17.5828571 10.4171429 8 8 10.4171429 17.5828571 20 8 29.5828571 10.4171429 32 20 22.4171429 29.5828571 32 32 29.5828571 22.4171429 20"}),s.createElement("filter",{x:"-11.5%",y:"-7.3%",width:"122.9%",height:"122.9%",filterUnits:"objectBoundingBox",id:"box-shadow-filter"},s.createElement("feMorphology",{radius:"0.25",operator:"dilate",in:"SourceAlpha",result:"shadowSpreadOuter1"}),s.createElement("feOffset",{dx:"0",dy:"1",in:"shadowSpreadOuter1",result:"shadowOffsetOuter1"}),s.createElement("feGaussianBlur",{stdDeviation:"0.5",in:"shadowOffsetOuter1",result:"shadowBlurOuter1"}),s.createElement("feColorMatrix",{values:"0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.15 0",type:"matrix",in:"shadowBlurOuter1"}))),s.createElement("g",{id:"Page-1",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",dangerouslySetInnerHTML:{__html:`<g id="baseline-close-24px-(1)" transform="translate(-6.000000, -7.000000)" fill-rule="nonzero">
					<g id="Group-2">
							<g id="Shape">
									<use fill="black" fill-opacity="1" filter="url(#box-shadow-filter)" xlink:href="#close-button-path"></use>
									<use fill="currentColor" fill-rule="evenodd" xlink:href="#close-button-path"></use>
							</g>
					</g>
			</g>`}})))),Mt=170,Ot=1.4,uc=ce({"0%":{stroke:"#19b2d2"},"25%":{stroke:"#FBA026"},"50%":{stroke:"#9365B8"},"75%":{stroke:"#333333"},"100%":{stroke:"#19b2d2"}}),pc=ce({"0%":{strokeDashoffset:`${Mt}`},"50%":{strokeDashoffset:`${Mt/4}`,transform:"rotate(135deg)"},"100%":{strokeDashoffset:`${Mt}`,transform:"rotate(450deg)"}}),mc=ce({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(270deg)"}}),hc=ce({"0%":{opacity:1},"50%":{opacity:0},"100%":{opacity:1}}),fc=Ee`
	animation: ${hc} ${Ot}s ease-in-out infinite;
`,gc=y.circle`
	stroke-dasharray: ${Mt};
	stroke-dashoffset: 0;
	transform-origin: center;
	animation: ${uc} ${Ot}s ease-in-out infinite, ${pc} ${Ot}s ease-in-out infinite;
`,Ec=y.svg`
	animation: ${mc} ${Ot}s linear infinite;
`,bc=y.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`,yc=y.div`
	padding-top: 2em;
	font-size: 1em;
	font-family: Roboto, serif;
`,vc=({size:e=50,text:t,animate:o})=>s.createElement(bc,g({className:"shared-loading-indicator"},o?fc:{}),s.createElement(Ec,{width:`${e}px`,height:`${e}px`,viewBox:`0 0 ${e} ${e}`,xmlns:"http://www.w3.org/2000/svg"},s.createElement(gc,{fill:"none",strokeWidth:`${e/11}`,strokeLinecap:"round",cx:`${e/2}`,cy:`${e/2}`,r:`${e/2*.9}`})),s.createElement(yc,null,Array.isArray(t)?t.map((n,r)=>s.createElement("p",{key:`loader-txt-${r}`},n)):t)),Tc="modal-search-widget";class wc extends s.Component{constructor(t){super(t);R(this,"modalRoot");R(this,"parentElement");R(this,"el");const{parentId:o}=this.props;this.parentElement=document.getElementById(o),this.modalRoot=document.createElement("div"),this.modalRoot.id=Tc}componentDidMount(){this.parentElement.appendChild(this.modalRoot)}componentWillUnmount(){this.parentElement.removeChild(this.modalRoot)}render(){return go.exports.createPortal(this.props.children,this.modalRoot)}}const Ic=y.div`
	display: flex;
	box-shadow: rgb(0 0 0 / 20%) 0 2px 10px -3px;
	height: 360px;
	background: white;
	text-decoration: none;
	color: black;
	flex-direction: column;
	align-items: baseline;
	font-family: ${({cssFontFamily:e})=>e.fontFamily};
	a {
		width: 100%;
		display: block;
		text-decoration: none;
		color: inherit;
	}
`,Cc=y.div`
	padding: 20px;
	color: #333333;
`,Sc=y.div`
	width: 100%;
	height: 138.8px;
	background-color: #eee;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`,xc=y.p`
	font-size: 12px;
	font-weight: 600;
	line-height: 1.5em;
`,kc=y.p`
	font-size: 16px;
	margin-top: 10px;
	line-height: 1.5em;
`,_c=y.p`
	font-size: 14px;
	line-height: 1.5em;
	margin-top: 5px;
	overflow: hidden;
	height: 120px;
	em {
		background-color: #fde1ae;
	}
`,Ac=({refId:e,screenshot:t,pageTitle:o,pageIndex:n,text:r,routing:i,onClose:a,cssFontFamily:l})=>{const{LinkComponent:c,routeMap:d}=i,u=d.filter(p=>p.id===e)[0].path;return s.createElement(Ic,{className:"search-widget_results-result",cssFontFamily:l},s.createElement(c,{to:u,routeChangedCallback:a},s.createElement(Sc,null,t&&s.createElement("img",{className:"result-tile_image",src:t,alt:o})),s.createElement(Cc,null,s.createElement(xc,null,"Page ",n),s.createElement(kc,null,o),s.createElement(_c,{dangerouslySetInnerHTML:{__html:r}}))))},Nc=y.div`
	display: flex;
	justify-content: space-around;
	height: 30px;
	box-shadow: 0 1px #fafafa;
	align-items: center;
	transition: opacity 0.3s;
	input {
		font-size: 24px;
		border: 0;
		outline: 0;
	}
	.search-bar_icon {
		color: grey;
	}
`;class Rc extends s.Component{constructor(t){super(t);R(this,"searchBarRef");R(this,"selectionWithArrowsStream$");R(this,"selectionWithArrowsSubscription");R(this,"normalArrowsStream$");R(this,"normalArrowsSubscription");R(this,"timeoutID");R(this,"handleSelection",t=>{if(!this.isSearchRefPresentAndEditable())return;const o=(l,c,d,u)=>{const{selectionDirection:p}=this.state;c==="Left"&&p==="backwards"&&d>0&&d<=u&&(this.timeoutID=setTimeout(()=>l.setSelectionRange(d-1,u),0)),c==="Right"&&p==="backwards"&&d<u&&(this.timeoutID=setTimeout(()=>l.setSelectionRange(d+1,u),0)),c==="Right"&&p==="forwards"&&u<l.value.length&&d<=u&&(this.timeoutID=setTimeout(()=>l.setSelectionRange(d,u+1),0)),c==="Left"&&p==="forwards"&&d<u&&(this.timeoutID=setTimeout(()=>l.setSelectionRange(d,u-1),0))},n=this.searchBarRef.current,r=n.selectionStart,i=n.selectionEnd,a=t.key==="ArrowLeft"?"Left":"Right";r===i?(a==="Left"&&this.setState({selectionDirection:"backwards"},()=>o(n,a,r,i)),a==="Right"&&this.setState({selectionDirection:"forwards"},()=>o(n,a,r,i))):o(n,a,r,i)});R(this,"handleArrowNavigation",t=>{if(!this.isSearchRefPresentAndEditable())return;const o=this.searchBarRef.current,n=o==null?void 0:o.selectionStart,r=o==null?void 0:o.selectionEnd;n>0&&t.key==="ArrowLeft"?o&&(o.selectionStart=n-1,o.selectionEnd=n-1):n===0&&t.key==="ArrowLeft"?o&&(o.selectionStart=0,o.selectionEnd=0):t.key==="ArrowRight"&&o&&r<=o.value.length&&(o.selectionStart=r+1,o.selectionEnd=r+1)});R(this,"resubscribeToArrowSelectionStream",()=>{this.selectionWithArrowsStream$.subscribe()});R(this,"handleKeyPress",t=>{(t.key==="ArrowLeft"||t.key==="ArrowRight")&&(t.stopImmediatePropagation(),t.stopPropagation(),t.preventDefault(),this.props.isInAccessibilityMode?this.selectionWithArrowsStream$.next(t):this.normalArrowsStream$.next(t))});R(this,"handleChange",t=>{this.setState({value:t.target.value}),this.props.onInputChange(t.target.value)});R(this,"isSearchRefPresentAndEditable",()=>{var o,n,r;const t=i=>i!=null;return[this.searchBarRef,this.searchBarRef.current,(o=this.searchBarRef.current)==null?void 0:o.value,(n=this.searchBarRef.current)==null?void 0:n.selectionStart,(r=this.searchBarRef.current)==null?void 0:r.selectionEnd].every(t)});this.searchBarRef=s.createRef(),this.state={isFocusOnInit:!1,value:"",selectionDirection:""},this.selectionWithArrowsStream$=new mt,this.normalArrowsStream$=new mt}componentDidMount(){this.searchBarRef.current&&this.searchBarRef.current.addEventListener("keydown",this.handleKeyPress),this.setState({isFocusOnInit:!0}),!!this.searchBarRef.current&&(this.selectionWithArrowsSubscription=this.selectionWithArrowsStream$.subscribe(t=>{this.handleSelection(t)}),this.normalArrowsSubscription=this.normalArrowsStream$.subscribe(t=>{this.handleArrowNavigation(t)}))}componentDidUpdate(t,o){!this.searchBarRef.current||(this.props.focusElement&&!o.isFocusOnInit&&this.state.isFocusOnInit&&this.props.focusElement.focus(),t.fCount<this.props.fCount&&(this.searchBarRef.current.value=`${this.searchBarRef.current.value}f`))}componentWillUnmount(){this.searchBarRef.current&&this.searchBarRef.current.removeEventListener("keydown",this.handleKeyPress),this.selectionWithArrowsSubscription.unsubscribe(),this.normalArrowsSubscription.unsubscribe(),this.timeoutID!=null&&clearTimeout(this.timeoutID)}render(){const{placeholder:t}=this.props;return s.createElement(s.Fragment,null,s.createElement(Nc,null,s.createElement("input",{ref:this.searchBarRef,placeholder:t,onChange:this.handleChange}),s.createElement(Jo,{size:24,className:"search-bar_icon"})))}}const Tn=20,er=70,_e={MOBILE:ke.sm,TABLET_LANDSCAPE:ke.lg,TABLET_PORTRAIT:ke.md},Lc=y.div`
	z-index: 1000;
	position: fixed;
	background: rgba(51, 51, 51, 0.7);
	width: 100%;
	height: 100%;
	.search-widget-portal-wrapper {
		opacity: 1;
		left: 20px;
		right: 10px;
		margin: 20px;
		display: flex;
		flex-direction: column;
		${_e.MOBILE} {
			margin: 0;
		}
	}

	.search-widget_search-bar-wrapper {
		input {
			width: 275px;
		}
		height: 70px;
		display: flex;
		position: relative;
		background: white;
		justify-content: center;
		padding: 20px;
		${_e.MOBILE} {
			.search-bar_icon {
				display: none;
			}
		}
		.search-widget_close {
			display: inline-block;
			position: absolute;
			cursor: pointer;
			top: 10px;
			right: 10px;
			color: grey;
		}
	}
	.search-widget-results-wrapper--init {
		display: flex;
		background: #fafafa;
		flex-direction: column;
		justify-content: center;

		${_e.MOBILE} {
			height: calc(100vh - ${er}px);
		}
	}
	.search-widget-results-wrapper {
		display: block;
		background: #fafafa;
		overflow: auto;

		${_e.MOBILE} {
			height: calc(100vh - ${er}px);
		}
	}

	.search-widget_results--maxWidth {
		max-width: 1080px;
		margin: auto;
		.search-widget_results--counter {
			display: flex;
			align-self: center;
			font-size: 12px;
			padding-left: 20px;
			padding-top: 20px;

			${_e.MOBILE} {
				padding-left: 30px;
				margin-bottom: 10px;
			}
		}
		.search-widget_results--ignored-words {
			display: flex;
			align-self: center;
			font-size: 12px;
			padding-left: 20px;
			padding-top: 20px;
		}
		& .search-widget_results--grid {
			display: grid;
			margin: auto;
			grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);
			grid-template-rows: auto auto auto auto;
			grid-gap: 20px;
			position: relative;
			justify-items: center;
			align-items: center;
			padding: 20px;
			.search-widget_results-result {
				:hover {
					outline: 1px solid #22b3d7;
					cursor: pointer;

					${_e.MOBILE} {
						outline: none;
					}
				}
				:focus {
					outline: 1px solid #22b3d7;
					cursor: pointer;

					${_e.MOBILE} {
						outline: none;
					}
				}
				display: flex;
				margin: 0 auto;
				box-shadow: 0 2px 10px -3px rgba(0, 0, 0, 0.2);
				flex-direction: column;
				height: 360px;
				width: 230px;
				background: white;
				text-decoration: none;
				color: black;
			}
			${_e.TABLET_LANDSCAPE} {
				grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);
				max-width: 800px;
			}
			${_e.TABLET_PORTRAIT} {
				grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
				max-width: 620px;
			}
			${_e.MOBILE} {
				grid-template-columns: minmax(0, 1fr);
				grid-template-rows: auto;
				width: 100%;
				padding: 0;
				grid-gap: 20px;
				.search-widget_results-result {
					height: auto;
					width: 100%;
					padding: ${Tn}px ${Tn}px 0 ${Tn}px;
					background: #fafafa;
				}
			}
		}
	}
`,Mc=1e3/24,Pt=300,Oc=300,Pc=70,Dc=20,wn={transition:`opacity ${Pt}ms ease-in-out`,opacity:0},In={entering:{opacity:0},entered:{opacity:1}};class $c extends s.Component{constructor(t){super(t);R(this,"closeButtonRef");R(this,"portalRef");R(this,"searchResultStream");R(this,"searchService");R(this,"timeoutID");R(this,"handleKeyDown",t=>{t.key==="Tab"&&Gi(this.portalRef.current,t)});R(this,"handleIncomingResult",t=>{this.setState({results:t}),this.timeoutID=setTimeout(()=>this.setState({resultsToAnimate:t}),Pt)});R(this,"handleClose",()=>{const{onClose:t}=this.props;this.setState({isActive:!1}),this.timeoutID=setTimeout(()=>t(),Pt)});R(this,"handleChange",t=>{!this.searchService||(this.searchService.search(t),this.setState({searchTerm:t}))});this.closeButtonRef=s.createRef(),this.portalRef=s.createRef(),this.state={isActive:!1,results:[],resultsToAnimate:[],showResults:!1,searchTerm:""},this.timeoutID=null,this.renderResults=this.renderResults.bind(this)}componentDidMount(){this.setState({isActive:!0}),document.addEventListener("keydown",this.handleKeyDown,!0)}componentDidUpdate(t,o){const{searchService:n,searchURL:r,isForceClose:i,docLocale:a}=this.props;(this.searchService===null||this.searchService===void 0)&&n&&(this.searchService=n,this.searchResultStream=n.getResults(r,a).subscribe(l=>{this.handleIncomingResult(l)})),o.results.length===0&&this.state.results.length>0&&this.setState({showResults:!0}),o.results.length>0&&this.state.results.length===0&&this.setState({showResults:!1}),!t.isForceClose&&i&&this.handleClose()}componentWillUnmount(){this.setState({isActive:!1}),this.searchResultStream.unsubscribe(),document.removeEventListener("keydown",this.handleKeyDown,!0),this.timeoutID!=null&&clearTimeout(this.timeoutID)}renderResults(){const{windowHeight:t,routing:o,onClose:n,hasInitAnimation:r,cssFontFamily:i,translate:a}=this.props,{resultsToAnimate:l,results:c,showResults:d,searchTerm:u}=this.state,p=u.length>0&&!r?`${c.length} ${a("resultsFoundFor")} '${u}'`:"",h=r?"search-widget-results-wrapper--init":"search-widget-results-wrapper";return s.createElement("div",{className:h,style:{height:t-Pc-2*Dc}},r?s.createElement(vc,{text:a("initialisingSearch"),size:20}):s.createElement("div",{className:"search-widget_results--maxWidth"},s.createElement("div",{className:"search-widget_results--counter im-paragraph",style:{fontFamily:`${i.fontFamily}`}},p),s.createElement("div",{className:"search-widget_results--grid"},l.map((f,E)=>{const b=c.length>0?E*Mc:Pt,{id:v,refId:T,pageTitle:w,pageIndex:_,screenshot:k,text:x}=f;return s.createElement(Eo.Transition,{key:`${f.elementName}-${f.id}`,in:d&&c[E]!==null&&c[E]!==void 0,timeout:b,unmountOnExit:!0,appear:!0},I=>s.createElement("div",{style:O(g(g({},wn),In[I]),{width:"100%"})},s.createElement(Ac,{id:v,refId:T,onClose:n,routing:o,screenshot:k,pageTitle:w,pageIndex:_,text:x,cssFontFamily:i})))}))))}render(){const{isActive:t}=this.state,{fCount:o,hasInitAnimation:n,isInAccessibilityMode:r,translate:i}=this.props;return s.createElement(Eo.Transition,{in:t,timeout:Oc,appear:!0},a=>{const l=t?{}:g(g({},wn),In[a]);return s.createElement(Lc,{style:g({},l),ref:this.portalRef},s.createElement("div",{className:"search-widget-portal-wrapper",style:g(g({},wn),In[a]),tabIndex:-1},s.createElement("div",{className:"search-widget_search-bar-wrapper"},n?null:s.createElement(dc,{className:"search-widget_close",onClick:this.handleClose,size:24,style:{marginTop:"7px"},"aria-label":"Close",ref:this.closeButtonRef}),n?null:s.createElement(Rc,{fCount:o,placeholder:i("searchPlaceholder"),onInputChange:this.handleChange,isInAccessibilityMode:r,focusElement:this.closeButtonRef.current})),this.renderResults()))})}}const tr=s.createContext({searchURL:"null"}),Cn={NO_FOLEON_SPECIFIC_HOTKEYS:"NO_FOLEON_SPECIFIC_HOTKEYS",CMD_OR_CTRL_SHIFT_F:"CMD/CTRL_SHIFT_F"},Bc=y.div`
	cursor: pointer;
	height: 57px;
	width: 57px;
	display: flex;
	flex: 1 0 57px;
	pointer-events: auto;
	justify-content: center;
	align-items: center;
	border: none;
	transition: all 0.3s ease 0s;
	opacity: ${e=>e.isVisible?1:0};
`;class Sn extends s.Component{constructor(t){super(t);R(this,"state",{isShowSearchPortal:!1,windowHeight:500,fCount:0,isForceClosePortal:!1,isWithActiveSearchService:!1,isInAccessibilityMode:!1});R(this,"keydownObservable$");R(this,"keydownSubscription");R(this,"keyupObservable$");R(this,"keyupSubscription");R(this,"cmdShiftFSubject$");R(this,"cmdFSubject$");R(this,"hotKeyPresses$");R(this,"service");R(this,"getSearchConfigAndInput$");R(this,"hotKeySubscription");R(this,"handleOpenSearch",()=>{const{isOnlyShowIcon:t}=this.props;t||this.setState({isShowSearchPortal:!0,isForceClosePortal:!1})});R(this,"handleResize",()=>{const{isOnlyShowIcon:t}=this.props;t||this.setState({windowHeight:window.innerHeight})});R(this,"setHideSearchPortal",()=>{this.setState({isShowSearchPortal:!1})});this.cmdShiftFSubject$=new mt,this.cmdFSubject$=new mt}componentDidMount(){const{isOnlyShowIcon:t}=this.props;t||(window&&(this.setState({windowHeight:window.innerHeight}),window.addEventListener("resize",this.handleResize)),this.keyupObservable$=bo(window,"keyup"),this.keyupObservable$.subscribe(o=>{Lt(o,["Shift"])&&this.setState({isInAccessibilityMode:!1})}),this.keydownObservable$=bo(window,"keydown").pipe(ci(o=>{const{isShowSearchPortal:n}=this.state;Lt(o,["Shift"])&&this.setState({isInAccessibilityMode:!0}),Lt(o,["Escape","Esc"])&&n&&this.setState({isForceClosePortal:!0}),!(o.key!=="f"||!this.state.isInAccessibilityMode||n)&&(o.stopImmediatePropagation(),o.preventDefault(),o.stopPropagation(),this.setState({fCount:this.state.fCount+=1}))}),di(o=>Lt(o,["f","Meta","Shift","Control"]))),this.keydownSubscription=this.keydownObservable$.subscribe(o=>{this.cmdFSubject$.next(o)}),this.hotKeyPresses$=this.cmdFSubject$.pipe(ui(this.cmdFSubject$.pipe(uo(300))),mo(o=>o.pipe(pi(3))),po(o=>o.map(n=>n.key)),fo(o=>{let n=Cn.NO_FOLEON_SPECIFIC_HOTKEYS;return[...new Set(o)].length===3&&o.indexOf("f")>0&&(n=Cn.CMD_OR_CTRL_SHIFT_F),mi([n],hi)})),this.hotKeySubscription=this.hotKeyPresses$.subscribe(o=>{o===Cn.CMD_OR_CTRL_SHIFT_F&&this.handleOpenSearch()}))}componentDidUpdate(t,o){const{isOnlyShowIcon:n}=this.props;n||o.isWithActiveSearchService||(this.service=new ac(this.props.docData),this.setState({isWithActiveSearchService:!0}),!this.service)}componentWillUnMount(){const{isOnlyShowIcon:t}=this.props;t||(window.removeEventListener("resize",this.handleResize),this.keydownSubscription.unsubscribe(),this.hotKeySubscription.unsubscribe())}render(){const{parentElementId:t,routing:o,isVisible:n,cssFontFamily:r,cssText:i,docLocale:a,translator:{translate:l}}=this.props,{isShowSearchPortal:c,isForceClosePortal:d,isWithActiveSearchService:u}=this.state,p=`${i.color}`;return s.createElement(Bc,{isVisible:n!=null?n:!1},s.createElement(Jo,{color:p,onClick:()=>this.handleOpenSearch(),size:24}),c?s.createElement(wc,{parentId:t},s.createElement($c,{fCount:this.state.fCount,onClose:this.setHideSearchPortal,searchService:this.service,windowHeight:this.state.windowHeight,routing:o,isForceClose:d,hasInitAnimation:!u,isInAccessibilityMode:this.state.isInAccessibilityMode,cssFontFamily:r,searchURL:this.context.searchURL,translate:l,docLocale:a})):null)}}R(Sn,"defaultProps",{isOnlyShowIcon:!1}),R(Sn,"contextType",tr);const nr=()=>{var e;return(e=ro==null?void 0:ro.env)==null?void 0:e.SSR},Fc=()=>{const e=xe();return m.exports.useEffect(()=>{if(nr())return;let t;return window.foleon=(o,n)=>{o==="onPageChange"?t=e.listen((r,i)=>{switch(i){case"PUSH":case"POP":n();break}}):console.error("There is no event to subscribe, please check FOLEON CLIENT API documentation: https://developers.foleon.com/how-do-i/tracking-integration/")},()=>{t==null||t()}},[e]),null},Gc=()=>{const{doc:e}=W(),t=e.options.locale;return m.exports.useEffect(()=>{zi(t)},[t]),null},or={audio:{muted:!0},inCommentsMode:!1,connections:[]},rr=ye("SET_AUDIO_MUTED",e=>({muted:e}))(),sr=ye("SET_IN_COMMENTS_MODE",e=>({inCommentsMode:e}))(),ir=ye("SET_CONNECTION",e=>({connection:e}))(),ar=m.exports.createContext(or),lr=m.exports.createContext(null),zc=(e,t)=>{switch(t.type){case ve(rr):return e.audio.muted!==t.payload.muted?O(g({},e),{audio:O(g({},e.audio),{muted:t.payload.muted})}):e;case ve(sr):return e.inCommentsMode!==t.payload.inCommentsMode?O(g({},e),{inCommentsMode:t.payload.inCommentsMode}):e;case ve(ir):return O(g({},e),{connections:[...e.connections,t.payload.connection]});default:throw new Error(`Unknown action passed to ConfigStoreReducer ${JSON.stringify(t,null,1)}`)}},Uc=({children:e})=>{const[t,o]=m.exports.useReducer(zc,g({},or));return s.createElement(ar.Provider,{value:t},s.createElement(lr.Provider,{value:o},e))};function cr(){const e=m.exports.useContext(lr);if(e===void 0)throw new Error("useConfigStoreActions must be used in a ConfigStoreDispatchContext.Provider");const t=m.exports.useCallback(r=>{e&&e(rr(r))},[e]),o=m.exports.useCallback(r=>{e&&e(sr(r))},[e]),n=m.exports.useCallback(r=>{e&&e(ir(r))},[e]);return{setAudioMuted:t,setInCommentsMode:o,setConnection:n}}function xn(){const e=m.exports.useContext(ar);if(e===void 0)throw new Error("useConfigStoreState must be used in a ConfigStoreStateContext.Provider");return e}const kn={padding:"12px 20px",display:"inline-block",border:"0px solid rgba(0,0,0,1)",fontFamily:"Arial, Helvetica, sans-serif",letterSpacing:"0.05em",lineHeight:"1em",textDecoration:"none",cursor:"pointer",position:"relative",animation:"none",fontSize:"12px",alignItems:"center"},dr={backgroundColor:"#008a00",border:"none",color:"rgba(255,255,255,1)",borderRadius:"2px"},Hc={backgroundColor:"white",color:"#333333",border:"1px solid rgb(51, 51, 51)",borderRadius:"2px"},ur={display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"rgba(55, 58, 71, 0)"};var Te;(function(e){e.MESSAGE="message",e.SETTINGS="settings",e.CLOSE="closed"})(Te||(Te={}));const pr=ye("ADD_TO_STORE",e=>({state:e}))(),mr=m.exports.createContext(null),hr=m.exports.createContext(null),Vc=(e,t)=>{switch(t.type){case ve(pr):return cn(e,t.payload.state);default:throw new Error(`Unknown action passed to entitiesStoreReducer ${JSON.stringify(t,null,1)}`)}},Kc=({children:e,initialStore:t})=>{const[o,n]=m.exports.useReducer(Vc,g({},t));return s.createElement(mr.Provider,{value:o},s.createElement(hr.Provider,{value:n},e))};function fr(){const e=m.exports.useContext(mr);if(e===void 0)throw new Error("useEntitiesStoreState must be used in a EntitiesStoreProvider");return e}function C(e){const t=fr();return e(t)}function jc(){return{state:fr()}}function Wc(){const e=m.exports.useContext(hr);if(e===void 0)throw new Error("useEntitiesStoreActions must be used in a EntitiesStoreDispatchContext.Provider");return{addToStore:m.exports.useCallback(o=>{e&&e(pr(o))},[e])}}const at=e=>t=>{const o=t.which||t.charCode||t.keyCode||0;(o===32||o===13)&&e()},gr=ye("CC_SET_STATUS",e=>({status:e}))(),Er=ye("CC_UPDATE_SETTINGS",e=>({settings:e}))(),br=ye("CC_ACCEPT_SETTINGS",()=>({}))(),yr=ye("CC_MODAL_STATUS",e=>({modalStatus:e}))(),qc=(e,t)=>{switch(t.type){case ve(gr):return z.status=t.payload.status,z.update(z.current),Ui(Hi.CHANGE_STATUS,z),O(g({},e),{cookieConsentStatus:t.payload.status,acceptedCookieConsentSettings:g({},z.current)});case ve(Er):return z.update(t.payload.settings),O(g({},e),{cookieConsentSettings:g({},z.current)});case ve(br):return z.save(),O(g({},e),{cookieConsentSettings:g({},z.current),acceptedCookieConsentSettings:g({},z.current),cookieConsentStatus:z.status});case ve(yr):return O(g({},e),{modalStatus:t.payload.modalStatus});default:throw new Error(`Unknown action passed to CookieReducer ${JSON.stringify(t,null,1)}`)}},Pe=m.exports.createContext(void 0),Yc=({children:e})=>{var E;const{doc:t}=W(),o=(E=t.options)==null?void 0:E.has_cookie_check,n=typeof window!="undefined"&&window.localStorage&&window.localStorage.getItem(kt.SETTINGS),r=!!(o||n),i=z.status!==Ye.ACCEPTED||!So()||!r?Object.keys(z.current).reduce((b,v)=>O(g({},b),{[v]:He.ALLOW}),{}):g({},z.current);!r&&!n&&z.update(i);const a={[X.PREFERENCES]:He.ALLOW,[X.STATISTICS]:He.DENY,[X.MARKETING]:He.DENY},l={cookieConsentSettings:r?z.current:a,acceptedCookieConsentSettings:So()&&r?g({},z.current):g({},i),cookieConsentStatus:z.status,config:z.config,modalStatus:Te.MESSAGE},[c,d]=m.exports.useReducer(qc,g({},l)),u=b=>{d(gr(b))},p=b=>{d(Er(b))},h=()=>{d(br())},f=b=>{d(yr(b))};return s.createElement(Pe.Provider,{value:O(g({},c),{setCookieConsentStatus:u,updateCookieConsentSettings:p,acceptCookieConsent:h,setModalStatus:f})},e)},Xc=y.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #000;
`,Qc=y.p`
	max-width: 260px;
	text-align: center;

	${({styles:e})=>e}
	padding: 10px;
	font-size: 12px;
	color: #fff;
	position: relative;
	white-space: pre-wrap;
	& a {
		color: #fff;
		text-decoration: underline;
	}
`,Zc=({cookieType:e,handleOpenSettings:t,handleAcceptCookie:o,config:n})=>{const{doc:r}=W(),i=Ie(C,r.id.toString()),a=tt(i.entity,"paragraph"),l=nt(a,{}),c={cursor:"pointer"};return n&&n.marketingRequired?m.exports.createElement("span",{dangerouslySetInnerHTML:{__html:n.marketingRequired}}):m.exports.createElement(Qc,{styles:l},"This video has been disabled until you accept ",e," cookies.",m.exports.createElement("a",{onKeyPress:at(t),onClick:d=>t(d),tabIndex:0,role:"button",style:c,"data-testid":"cc-link-manage-preferences"}," Manage your preferences here")," or ",m.exports.createElement("a",{onKeyPress:at(o),onClick:d=>o(d),tabIndex:0,role:"button",style:c,"data-testid":"cc-link-direct-accept-targeting-cookies"},"directly accept targeting cookies"))},Jc=(e,t=!0)=>o=>r=>m.exports.createElement(Pe.Consumer,null,({acceptedCookieConsentSettings:i,updateCookieConsentSettings:a,acceptCookieConsent:l,setCookieConsentStatus:c,setModalStatus:d,config:u})=>{const p=typeof window!="undefined"&&window.localStorage&&!dn(window.localStorage.getItem(kt.SETTINGS)),h=z.isAllowed(e),f=p?h:i[e]===1;return m.exports.createElement(m.exports.Fragment,null,m.exports.createElement(o,O(g({},r),{allowedCookies:f})),t&&!f&&m.exports.createElement(Xc,{"data-testid":"cc-video-message-wrapper"},m.exports.createElement(Zc,{config:u,handleOpenSettings:()=>{c(Ye.REQUEST),d(Te.SETTINGS)},handleAcceptCookie:()=>{a(O(g({},i),{[e]:He.ALLOW})),l()},cookieType:X.MARKETING})))}),ed=y.div`
	margin-bottom: 1em;
`,td=y.div`
	flex: 1 auto;
	color: rgba(0, 0, 0, 0.87);

	${({styles:e})=>e}

	& {
		font-size: 15px;
		font-weight: 600;
		color: rgb(51, 51, 51);
		text-decoration: none;
		font-style: normal;
		letter-spacing: normal;
		line-height: 1.5em;
	}
`,nd=y.div`
	display: flex;
	margin: 0 0 5px 0;
	flex-direction: row;

	& > div.disabled-style {
		pointer-events: none;
		opacity: 0.5;
	}
`,od=y.div`
	${({styles:e})=>e}

	& {
		font-size: 13px;
		text-decoration: none;
		font-weight: 500;
		color: rgb(51, 51, 51);
		text-decoration: none;
		font-style: normal;
		letter-spacing: normal;
		line-height: 1.5em;
	}
`,Dt=({label:e,visualElement:t,description:o,disabled:n})=>{const{doc:r}=W(),i=Ie(C,r.id.toString()),a=tt(i.entity,"paragraph"),l=nt(a,{});return m.exports.createElement(ed,null,m.exports.createElement(nd,null,m.exports.createElement(td,{styles:l},e),m.exports.createElement("div",{className:n?"disabled-style ":""},t)),o&&m.exports.createElement(od,{styles:l},o))},vr=y.div`
	background-color: white;
	padding: 3em;
	max-width: 500px;
	margin: auto;
`,_n=y.div`
	cursor: pointer;
	font-size: 12px;
	display: flex;
	-webkit-box-align: center;
	align-items: center;
	margin: 0px;
	white-space: pre-wrap;

	${({styles:e})=>e}
`,rd=y.a`
	${({paragraphStyles:e})=>e}

	${({styles:e})=>Ee`
			& {
				font-style: normal;
				font-weight: normal;
				${e}
			}
		`}

  & {
		letter-spacing: normal;
		line-height: 1.5em;
		font-size: 1rem;
	}
`,Tr=y.h3`
	${({styles:e})=>e}

	& {
		font-style: normal;
		font-weight: normal;
		color: rgb(51, 51, 51);
		letter-spacing: normal;
		line-height: 1.5em;
		font-size: 2rem;
		text-decoration: none;
	}

	padding: 0;
	margin: 0 0 0.55em 0;
	overflow-wrap: break-word;
	hyphens: manual;
	position: relative;
	white-space: pre-wrap;
`,wr=y.p`
	${({styles:e})=>e}

	& {
		font-size: 1rem;
		font-style: normal;
		line-height: 1.5em;
		color: rgba(51, 51, 51, 1);
		letter-spacing: normal;
		margin: 0 0 1em 0;
		text-decoration: none;
		font-weight: normal;
	}

	padding: 0px 0px 0px 0px;
	position: relative;
	white-space: pre-wrap;
`,Ir=y.div`
	display: flex;
	margin-top: 2em;
	justify-content: flex-end;
`,An=y.a`
	${({styles:e})=>e}
`,sd=({cookieCheckMessage:e,cookieCheckShowSettings:t,onClose:o})=>{const{title:n,description:r,link:i,linktext:a}=e,{loadFonts:l}=xo(),{doc:c}=W(),d=Vi(),u=Ie(C,c.id.toString()),[p,h]=m.exports.useState(!1);m.exports.useEffect(()=>{ko&&h(!0)},[ko]);const f={[X.PREFERENCES]:He.ALLOW,[X.STATISTICS]:He.ALLOW,[X.MARKETING]:He.ALLOW},E=(D,H)=>{const ae=tt(u.entity,D);return nt(ae,{font:Ki(d,pe=>H.push(...Array.isArray(pe)?pe:[pe]))})},{paragraphStyles:b,textLinkStyles:v,titleStyles:T,usedFonts:w}=m.exports.useMemo(()=>{const D=[];return{paragraphStyles:E("paragraph",D),textLinkStyles:E("text-link",D),titleStyles:E("header-three",D),usedFonts:D}},[d,u.entity]);m.exports.useEffect(()=>{l(w)},[l,w]);const{setModalStatus:_,updateCookieConsentSettings:k,acceptCookieConsent:x,cookieConsentSettings:I,config:S,modalStatus:A,acceptedCookieConsentSettings:U}=m.exports.useContext(Pe),j=()=>{k(g({},I)),x(),_(Te.CLOSE)},ge=()=>{k(g({},f)),x(),_(Te.CLOSE)},L=()=>{_(Te.SETTINGS)},re=()=>{k(U),_(Te.CLOSE),o()};return s.createElement("div",{role:"button","aria-label":"cookie-consent"},s.createElement("div",{id:"cookie-wall"},A===Te.MESSAGE&&s.createElement(mn,{isOpen:!0,role:"dialog",contentLabel:"CookieWall",parentSelector:()=>document.getElementById("cookie-wall"),itemStyle:ur,onRequestClose:re},s.createElement(vr,{role:"dialog"},s.createElement(Tr,{styles:T},n),s.createElement(wr,{styles:b},r),i&&s.createElement(rd,{href:i,target:"_blank",paragraphStyles:b,styles:v},a),s.createElement(Ir,null,t&&s.createElement(_n,{"data-testid":"settings-button"},s.createElement(An,{onKeyPress:at(L),onClick:()=>L(),styles:O(g(g({},kn),Hc),{transition:"0.3s"}),tabIndex:0,role:"button"},p&&de("cookieSettingsButtonText").toUpperCase())),s.createElement(_n,{styles:{marginLeft:"1em"},"data-testid":"accept-cc-button"},s.createElement(An,{onKeyPress:at(ge),onClick:()=>ge(),styles:O(g(g({},kn),dr),{transition:"0.3s"}),tabIndex:0,role:"button"},p&&de("acceptButtonText").toUpperCase()))))),A===Te.SETTINGS&&s.createElement(mn,{isOpen:!0,role:"dialog",contentLabel:"CookieWall",parentSelector:()=>document.getElementById("cookie-wall"),itemStyle:ur,onRequestClose:re},s.createElement(vr,{role:"dialog"},s.createElement(Tr,{styles:T},de("cookieSettingsTitle")),s.createElement(wr,{styles:b},de("cookieSettingsDescription")),s.createElement(Dt,{label:de("functionalCookiesTitle"),description:de("functionalCookiesDescription"),visualElement:s.createElement(yo,{title:de("functionalCookiesEnabled"),size:24,color:"#008a00"})}),S.optinStatistics?s.createElement(Dt,{label:de("analyticsCookiesTitle"),description:de("analyticsCookiesDescription"),visualElement:s.createElement(yo,{title:de("analyticsCookiesEnabled"),size:24,color:"#008a00"})}):s.createElement(Dt,{label:de("analyticsCookiesTitle"),description:de("analyticsCookiesDescription"),visualElement:s.createElement(vo,{"aria-label":de("analyticsCookiesTitle"),"data-testid":"switch-cookies-statistics",checked:I[X.STATISTICS]===1,onChange:()=>{k(O(g({},I),{statistics:I[X.STATISTICS]===1?0:1}))}})}),s.createElement(Dt,{label:de("targetingCookiesTitle"),description:de("targetingCookiesDescription"),visualElement:s.createElement(vo,{"aria-label":"Targeting cookies","data-testid":"switch-cookies-marketing",checked:I[X.MARKETING]===1,onChange:()=>{k(O(g({},I),{marketing:I[X.MARKETING]===1?0:1}))}})}),s.createElement(Ir,null,s.createElement(_n,{"data-testid":"save-and-accept"},s.createElement(An,{onKeyPress:at(j),onClick:()=>j(),styles:g(g({},kn),dr),tabIndex:0,role:"button"},de("saveButtonText").toUpperCase())))))))},id=()=>{const{doc:e}=W(),{isScreenshot:t,isPrint:o}=q();if(t||o)return null;const{has_cookie_check:n,cookie_check_message:r,cookie_check_show_settings:i}=e.options;return s.createElement(s.Fragment,null,n&&r&&s.createElement(Pe.Consumer,null,({cookieConsentStatus:a,setCookieConsentStatus:l})=>a!==Ye.ACCEPTED&&a!==Ye.CANCELED&&s.createElement(sd,{key:"cookie-wall",cookieCheckMessage:r,onClose:()=>{l(Ye.CANCELED)},cookieCheckShowSettings:i})))},ad=y.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	p {
		font-family: Arial, Helvetica, sans-serif !important;
	}
`,ld=()=>s.createElement(ad,null,s.createElement(fi,{logoSize:gi.LARGE,text:"Loading Foleon Doc..."})),Qe=typeof window=="undefined";var bt;(function(e){e.Screenshot="screenshot",e.Print="print"})(bt||(bt={}));class cd{constructor(t,o,n,r){this.requestOptions={headers:{Accept:"application/json"}},this.origin=n,this.assetsApi=me.AssetsApiFactory(r,o,t),n===me.IndexSyncDtoOriginEnum.Draft&&(this.draftApi=me.DraftApiFactory(r,o,t)),n===me.IndexSyncDtoOriginEnum.Version&&(this.versionApi=me.VersionApiFactory(r,o,t))}handleError(t,o,n){const r=n?` ${n}`:"",i=this.draftApi?me.IndexSyncDtoOriginEnum.Draft:me.IndexSyncDtoOriginEnum.Version;throw console.error(`Error: get FoleonDoc${r} ${i} from CS`,o,"with error message:",t),t}async getFoleonDocData(t,o){let n;try{this.draftApi&&(n=await this.draftApi.draftControllerGetDraftsByFoleonDocId(t,void 0,this.requestOptions)),this.versionApi&&(n=await this.versionApi.versionControllerGetVersions(g({foleonDocId:t},o?{versionNumber:o}:{}),this.requestOptions))}catch(r){this.handleError(r,t)}return n?n.data:Promise.reject("Neither Draft nor Version API selected.")}async getFoleonDocDataByContentType(t,o,n){let r;try{this.draftApi&&(r=await this.draftApi.draftControllerGetDraftsByFoleonDocId(o,t,this.requestOptions)),this.versionApi&&(r=await this.versionApi.versionControllerGetVersions(g({foleonDocId:o,contentType:t},n?{versionNumber:n}:{}),this.requestOptions))}catch(i){this.handleError(i,o,t)}return r?r.data:Promise.reject("Neither Draft nor Version API selected.")}async getFoleonDocAssets(t,o){let n;try{n=await this.assetsApi.assetControllerGetAssetsForFoleonDoc(t,this.origin===me.IndexSyncDtoOriginEnum.Version,o,this.requestOptions)}catch(r){this.handleError(r,t,"Assets")}return n.data}async getFoleonDocMetadata(t,o){let n;try{this.draftApi&&(n=await this.draftApi.draftControllerGetMetadata(t,this.requestOptions)),this.versionApi&&(n=await this.versionApi.versionControllerGetMetadata(t,o,this.requestOptions))}catch(r){this.handleError(r,t,"MetaData")}return n?n.data:Promise.reject("Neither Draft nor Version API selected.")}async getFoleonDocContentPieceData(t,o,n){let r,i;try{this.draftApi&&(i=await this.draftApi.draftControllerGetDraftByDraftTypeAndRefId(t,o,this.requestOptions),i&&(r=i.data)),this.versionApi&&(i=await this.versionApi.versionControllerGetVersions(g({refId:o,contentType:t},n?{versionNumber:n}:{}),this.requestOptions),i&&(r=i.data[0]))}catch(a){this.handleError(a,o,t)}return r||Promise.reject("Neither Draft nor Version API selected.")}async getFoleonDocContentPieceAssets(t,o,n){let r;try{r=await this.assetsApi.assetControllerGetAssetsForContentPiece(t,o,this.origin===me.IndexSyncDtoOriginEnum.Version,n,this.requestOptions)}catch(i){this.handleError(i,o,`${t} Assets`)}return r.data}}const dd=e=>{var n;const t=Object.values((n=e[ji.identity])!=null?n:{}),o=[Zi.identity,Ji.identity];t.forEach(r=>{let i=0;const a=l=>{const c=e[l==null?void 0:l.identity][l.id],d=G(c,["styles",he.xl,"animation"]);if(d){const u=i+1;d.delay=u*Yi,(Xi(d.animationName)||!o.includes(c.identity))&&(i=u)}!!c&&"refs"in c&&c.refs.forEach(u=>a(u))};r&&a(r)})},ud=async(e,t)=>{const o={};return Object.keys(e).forEach(n=>{var a,l,c,d,u;const r=(a=e[n]._embedded)==null?void 0:a.image,i=(c=(l=r==null?void 0:r._links)==null?void 0:l.self)==null?void 0:c.href;r&&i&&!((u=(d=r._links)==null?void 0:d.image)==null?void 0:u.href)&&(o[i]=o[i]||[]).push(n)}),Promise.all(Object.keys(o).map(async n=>{await t.get(n).then(r=>{Object.values(o[n]).forEach(i=>{e[i]._embedded.image=g(g({},e[i]._embedded.image),r.data)})})}))},pd=async(e,t,o)=>({assets:await e.getFoleonDocContentPieceAssets(me.VersionDtoTypeEnum.Overlay,t,o),content:[await e.getFoleonDocContentPieceData(me.VersionDtoTypeEnum.Overlay,t,o)]}),md=async(e,t,o)=>{let n=g({},Qi);const r=[],i=[],a=Sr(t);return Object.values(a[Wi.identity]||{}).forEach(l=>{var c,d;((c=l==null?void 0:l.options)==null?void 0:c.type)==="overlay"&&((d=l==null?void 0:l.options)==null?void 0:d.beckyId)&&r.indexOf(l.options.beckyId)===-1&&r.push(l.options.beckyId)}),r.length&&await Promise.all(r.map(async l=>{i.push(await e.getFoleonDocContentPieceData(me.VersionDtoTypeEnum.Overlay,l,o)),n=cn(await e.getFoleonDocContentPieceAssets(me.VersionDtoTypeEnum.Overlay,l,o),n)})),{assets:n,content:i}},hd=e=>qi(e.image||{}).reduce((o,n)=>n.url?O(g({},o),{[n.url]:{properties:g({},n.properties),url:n.url}}):o,{}),Cr=async(e,t,o)=>{const n=Sr(e),r=hd(n);return await ud(t.videos,o),dd(n),{assets:{externalImages:r,fonts:t.fonts,images:t.images,videos:t.videos},completeStore:n}},Sr=e=>{const t=Ei(ea);return e.forEach(({content:o})=>{Object.entries(o).forEach(([n,r])=>{t[n]=g(g({},t[n]),r)})}),t};var xr=globalThis&&globalThis.__assign||function(){return xr=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++){t=arguments[o];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},xr.apply(this,arguments)},fd=globalThis&&globalThis.__spreadArrays||function(){for(var e=0,t=0,o=arguments.length;t<o;t++)e+=arguments[t].length;for(var n=Array(e),r=0,t=0;t<o;t++)for(var i=arguments[t],a=0,l=i.length;a<l;a++,r++)n[r]=i[a];return n},Nn;(function(e){e.ACCOUNT="ACCOUNT",e.CURRENT_ACCOUNT="CURRENT_ACCOUNT"})(Nn||(Nn={}));var Rn;(function(e){e.MAGAZINE_EDITION="MAGAZINE_EDITION",e.MAGAZINE_TITLE="MAGAZINE_TITLE",e.MAGAZINE_PAGE="MAGAZINE_PAGE",e.MAGAZINE_COMPOSITION="MAGAZINE_COMPOSITION"})(Rn||(Rn={}));var Ln;(function(e){e.CLIENT="ARTICLE",e.SERVER="PAGE"})(Ln||(Ln={}));var Mn;(function(e){e.ATTRIBUTES="ATTRIBUTES",e.ITEM_RANGE="ITEM_RANGE",e.PUBLICATION_GROUP="PUBLICATION_GROUP",e.PUBLICATION="PUBLICATION",e.COLLECTIONS="COLLECTIONS",e.PRESET_TAGS="PRESET_TAGS"})(Mn||(Mn={}));var On;(function(e){e.MEDIA_ITEMS="MEDIA_ITEMS",e.USER_ITEMS="USER_ITEMS",e.STOCK_IMAGES="STOCK_IMAGES",e.BYNDER_ITEMS="BYNDER_ITEMS",e.UNSPLASH_ITEMS="UNSPLASH_ITEMS",e.FONT="FONT"})(On||(On={}));var Pn;(function(e){e.ITEM_ACTION="ITEM_ACTION",e.ITEM_SECTION_ROW="ITEM_SECTION_ROW",e.ITEM_BACKGROUND_VIDEO="ITEM_BACKGROUND_VIDEO",e.ITEM_IMAGE_WITH_REVEAL="ITEM_IMAGE_WITH_REVEAL",e.ITEM_FORM_INPUT_LABEL="ITEM_FORM_INPUT_LABEL",e.ITEM_FORM_INPUT_LABEL_TEXT="ITEM_FORM_INPUT_LABEL_TEXT",e.ITEM_FORM_FIELD="ITEM_FORM_FIELD",e.ITEM_FORM_INPUT_TEXT_AREA="ITEM_FORM_INPUT_TEXT_AREA",e.ITEM_FORM_INPUT_LIST_OPTION_DROPDOWN="ITEM_FORM_INPUT_LIST_OPTION_DROPDOWN",e.ITEM_FORM_INPUT_LIST_OPTION_CHECKBOX="ITEM_FORM_INPUT_LIST_OPTION_CHECKBOX",e.ITEM_FORM_INPUT_LIST_OPTION_RADIO="ITEM_FORM_INPUT_LIST_OPTION_RADIO",e.ITEM_OR="ITEM_OR",e.ITEM_SECTION_COLUMN_SCROLL="ITEM_SECTION_COLUMN_SCROLL",e.ITEM_ACTION_OVERLAY_BACKGROUND="ITEM_ACTION_OVERLAY_BACKGROUND",e.ITEM_ACTION_OVERLAY_CLOSE_ICON="ITEM_ACTION_OVERLAY_CLOSE_ICON"})(Pn||(Pn={}));var kr;(function(e){e.PARAGRAPH="paragraph",e.TITLE="header-one",e.ORDERED_LIST_ITEM="ordered-list-item",e.UNORDERED_LIST_ITEM="unordered-list-item",e.CODE_BLOCK="code-block",e.BUTTON="button",e.BLOCKQUOTE="blockquote"})(kr||(kr={}));var _r;(function(e){e.CIRCLE="circle",e.LINE="line",e.NUMBER="number"})(_r||(_r={}));var Dn;(function(e){e.ITEM_ACTION_OVERLAY="ITEM_ACTION_OVERLAY",e.ITEM_ACTION_URL="ITEM_ACTION_URL",e.ITEM_ACTION_DOCUMENT="ITEM_ACTION_DOCUMENT",e.ITEM_ACTION_PAGE="ITEM_ACTION_PAGE",e.ITEM_ACTION_FILE="ITEM_ACTION_FILE",e.ITEM_ACTION_BLOCK="ITEM_ACTION_BLOCK",e.ITEM_SECTION_COLUMN="ITEM_SECTION_COLUMN",e.ITEM_SECTION="ITEM_SECTION",e.ITEM_TRIGGER="ITEM_TRIGGER",e.ITEM_FORM_PARDOT="ITEM_FORM_PARDOT",e.ITEM_FORM_HUBSPOT="ITEM_FORM_HUBSPOT",e.ITEM_FORM_ELOQUA="ITEM_FORM_ELOQUA",e.ITEM_FORM_MARKETO="ITEM_FORM_MARKETO",e.ITEM_WHITEPAPER="ITEM_WHITEPAPER",e.ITEM_FORM="ITEM_FORM",e.ITEM_INPUT_TEXT="ITEM_INPUT_TEXT",e.ITEM_INPUT_TEXTAREA="ITEM_INPUT_TEXTAREA",e.ITEM_INPUT_CHECKBOX="ITEM_INPUT_CHECKBOX",e.ITEM_INPUT_DROPDOWN="ITEM_INPUT_DROPDOWN",e.ITEM_INPUT_HIDDEN="ITEM_INPUT_HIDDEN",e.ITEM_INPUT_OPTION="ITEM_INPUT_OPTION",e.ITEM_INPUT_RADIO="ITEM_INPUT_RADIO",e.ITEM_INPUT_SELECTLIST="ITEM_INPUT_SELECTLIST",e.ITEM_INPUT_SUBMIT="ITEM_INPUT_SUBMIT",e.ITEM_IMAGE="ITEM_IMAGE",e.IMAGE="IMAGE",e.ITEM_VIDEO="ITEM_VIDEO",e.VIDEO="VIDEO",e.ITEM_BUTTON_SCROLL="ITEM_BUTTON_SCROLL",e.ITEM_BUTTON="ITEM_BUTTON",e.ITEM_DIVIDER="ITEM_DIVIDER",e.ITEM_SOCIAL="ITEM_SOCIAL",e.ITEM_ICON="ITEM_ICON",e.ITEM_EXTERNAL_VIDEO="ITEM_EXTERNAL_VIDEO",e.ITEM_EXTERNAL_IMAGE="ITEM_EXTERNAL_IMAGE",e.ITEM_EMBED="ITEM_EMBED",e.ITEM_FIGURE="ITEM_FIGURE",e.ITEM_BACKGROUND="ITEM_BACKGROUND",e.ITEM_HOTSPOT="ITEM_HOTSPOT",e.ITEM_QUOTE="ITEM_QUOTE",e.ITEM_LEAD_FACEBOOK="ITEM_LEAD_FACEBOOK",e.ITEM_LEAD_LINKEDIN="ITEM_LEAD_LINKEDIN",e.ITEM_UNORDERED_LIST="ITEM_UNORDERED_LIST",e.ITEM_ORDERED_LIST="ITEM_ORDERED_LIST",e.ITEM_CODE_BLOCK="ITEM_CODE_BLOCK",e.VIRTUAL_ACTION_OVERLAY="VIRTUAL_ACTION_OVERLAY",e.ITEM_PRESET="ITEM_PRESET",e.ITEM_BLOCK="ITEM_BLOCK",e.ITEM_INFOGRAPHIC_COUNTER="ITEM_INFOGRAPHIC_COUNTER"})(Dn||(Dn={}));var $n;(function(e){e.ITEM_PARAGRAPH="ITEM_PARAGRAPH",e.ITEM_TITLE="ITEM_TITLE",e.ITEM_QUOTE="ITEM_QUOTE"})($n||($n={}));var $t;(function(e){e.ITEM_FORM_INPUT_TEXT="ITEM_FORM_INPUT_TEXT",e.ITEM_FORM_INPUT_TEXT_AREA="ITEM_FORM_INPUT_TEXT_AREA",e.ITEM_FORM_INPUT_HIDDEN="ITEM_FORM_INPUT_HIDDEN",e.ITEM_FORM_INPUT_LIST_RADIO="ITEM_FORM_INPUT_LIST_RADIO",e.ITEM_FORM_INPUT_LIST_OPTION="ITEM_FORM_INPUT_LIST_OPTION",e.ITEM_FORM_INPUT_LIST_DROPDOWN="ITEM_FORM_INPUT_LIST_DROPDOWN",e.ITEM_FORM_INPUT_LIST_CHECKBOX="ITEM_FORM_INPUT_LIST_CHECKBOX",e.ITEM_FORM_VALIDATOR_EMAIL="ITEM_FORM_VALIDATOR_EMAIL",e.ITEM_FORM_FIRST_NAME="ITEM_FORM_FIRST_NAME",e.ITEM_FORM_LAST_NAME="ITEM_FORM_LAST_NAME",e.ITEM_FORM_PHONE="ITEM_FORM_PHONE",e.ITEM_FORM_COMMENT="ITEM_FORM_COMMENT",e.ITEM_FORM_GENDER="ITEM_FORM_GENDER"})($t||($t={}));var Bn;(function(e){e.VIRTUAL_FORM_INPUT_LABEL="VIRTUAL_FORM_INPUT_LABEL",e.VIRTUAL_FORM_INPUT_PLACEHOLDER="VIRTUAL_FORM_INPUT_PLACEHOLDER",e.VIRTUAL_FORM_INPUT_TEXT="VIRTUAL_FORM_INPUT_TEXT",e.VIRTUAL_FORM_OPTION_LABEL="VIRTUAL_FORM_OPTION_LABEL",e.VIRTUAL_FORM_INPUT="VIRTUAL_FORM_INPUT"})(Bn||(Bn={}));var Fn;(function(e){e.ACTION_URL="ACTION_URL",e.ACTION_PAGE="ACTION_PAGE",e.ACTION_OVERLAY="ACTION_OVERLAY",e.ACTION_VIRTUAL_OVERLAY="ACTION_VIRTUAL_OVERLAY",e.NO_ACTION="NO_ACTION"})(Fn||(Fn={}));fd(Object.values(Nn),Object.values(Rn),Object.values(Ln),Object.values(Mn),Object.values(On),Object.values(Pn),Object.values(Bn),Object.values(Dn),Object.values($t),Object.values(Fn),Object.values($t),Object.values($n));var Ar=globalThis&&globalThis.__assign||function(){return Ar=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++){t=arguments[o];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Ar.apply(this,arguments)},Nr;(function(e){e.formInputLabel="formInputLabel",e.formInputPlaceholder="formInputPlaceholder",e.formInputText="formInputText",e.formOptionLabel="formOptionLabel",e.formInput="formInput"})(Nr||(Nr={}));var Rr;(function(e){e.dropdown="form-input-list-option-dropdown",e.radio="form-input-list-option-radio",e.checkbox="form-input-list-option-checkbox"})(Rr||(Rr={}));var Lr;(function(e){e.Item="_embedded.items",e.Attributes="_embedded.attributes"})(Lr||(Lr={}));var Mr;(function(e){e.name="name",e.label="label",e.value="value",e.placeholder="placeholder",e.size="size",e.isDefault="is_default",e.isRequired="is_required"})(Mr||(Mr={}));var lt;(function(e){e.xl="xl",e.lg="lg",e.md="md",e.sm="sm"})(lt||(lt={}));lt.xl,lt.lg,lt.md,lt.sm;var Or;(function(e){e.button1="im-button",e.button2="im-button-2"})(Or||(Or={}));var Pr;(function(e){e.EDITOR="EDITOR",e.PREVIEWER="PREVIEWER",e.ZIP="ZIP",e.PUBLISHER="PUBLISHER",e.SCREENSHOTS="SCREENSHOTS"})(Pr||(Pr={}));var Dr;(function(e){e.FONT_FAMILY="fontFamily",e.TEXT_SPACING="textSpacing",e.FONT_STYLE="fontStyle",e.FONT_SIZE="fontSize",e.FONT_WEIGHT="fontWeight",e.TEXT_DECORATION="textDecoration",e.TEXT_ALIGN="textAlign",e.LETTER_SPACING="letterSpacing",e.LINE_HEIGHT="lineHeight",e.COLOR="color",e.ITALIC="italic",e.BOLD="bold",e.UNDERLINE="underline",e.LINE_THROUGH="lineThrough",e.UL="unorderedListItem",e.OL="orderedListItem",e.LINK="link",e.SPACING="spacing",e.SEPARATOR="separator",e.CLEAR_FORMAT="clearFormat",e.SUPERSCRIPT="superscript",e.HYPHENATE="hyphenate",e.NON_BREAKING_SPACE="nonBreakingSpace"})(Dr||(Dr={}));const gd=async({client:e,dataOrigin:t,foleonDocId:o,foleonDocVersionNumber:n,foleonPageId:r,skipOverlays:i=!1})=>{let a=[],l;const c=await e.getFoleonDocContentPieceData(me.VersionDtoTypeEnum.Page,r,n);if(o&&o!==c.foleonDocId)throw new Error(`Error: get FoleonDoc ${t} from CS, mismatch "docId" and "pageId"`);if(o||(o=c.foleonDocId),a=[c],l=await e.getFoleonDocContentPieceAssets(me.VersionDtoTypeEnum.Page,r,n),!i){const{assets:d,content:u}=await md(e,a,n);a=[...a,...u],l=cn(l,d)}return{assets:l,content:a,foleonDocId:o}},Ed=e=>{const t=bi.create();return t.interceptors.request.use(async o=>(o.headers={Authorization:`Bearer ${e.accessToken}`},o),o=>{Promise.reject(o)}),t.interceptors.response.use(o=>o,async o=>{const n=o.config;if(o.response.status===401&&!n._retry){n._retry=!0;const{response:r}=await rc({API_URL:e.apiURL,AUTH_URL:e.authURL})().toPromise();return e.accessToken=r.access_token,t(n)}return Promise.reject(o)}),t},bd=(e,t)=>new cd(t,e.apiURL,e.dataOrigin),yd=(e,t,o,n)=>pd(t,n,o.foleonDocVersionNumber).then(r=>Cr(r.content,r.assets,e)).catch(r=>{throw console.error("[DataLoader]",r),r}),$r=(e,t,o,n,r=!1)=>gd({client:t,dataOrigin:o.dataOrigin,foleonDocId:o.foleonDocId,foleonDocVersionNumber:o.foleonDocVersionNumber,foleonPageId:n,skipOverlays:r}).then(i=>Cr(i.content,i.assets,e)).catch(i=>{throw console.error("[DataLoader]",i),i}),Br=(e,t)=>{const o=[];return Object.values(e[ta.identity]||{}).forEach(n=>{var r,i;((r=n==null?void 0:n.options)==null?void 0:r.type)===t&&((i=n==null?void 0:n.options)==null?void 0:i.beckyId)&&o.indexOf(n.options.beckyId)===-1&&o.push(n.options.beckyId)}),o},vd=m.exports.createContext({isFetching:!1}),Td=({children:e,config:t,routes:o})=>{const[n,r]=m.exports.useState(!1),[i,a]=m.exports.useState(!1),l=na(),c=m.exports.useRef(),d=m.exports.useRef(),u=m.exports.useRef(!1),p=xe(),h=jc(),f=Wc();!t.fetchEntireDoc&&(!c.current||!d.current)&&(c.current=Ed(t),d.current=bd(t,c.current));const E=m.exports.useRef({}),b=(_,k)=>{let x,I;k?I=Promise.resolve():I=new Promise(S=>{x=S}),E.current[_.id]={beckyId:_.beckyId,content:k,promise:I,resolve:x}},v=(_,k)=>{k&&(E.current[_.id].content=k),E.current[_.id].resolve&&E.current[_.id].resolve()},T=(_,k,x)=>{switch(x(),_){case"POP":case"PUSH":p.push(k);break;case"REPLACE":p.replace(k);break;default:throw new Error("[DataLoader] Error: unknown history action called")}},w=m.exports.useMemo(()=>{if(Qe||t.fetchEntireDoc||!t.prefetchPages)return;const _=Object.values(o.pages).find(({identifier:k})=>p.location.pathname===k);return _&&!E.current[_.id]&&b(_,g({},h.state)),_},[o.pages,n]);return m.exports.useEffect(()=>{if(!(Qe||t.fetchEntireDoc))return p.listen(()=>{r(!n)})},[n]),m.exports.useEffect(()=>{if(Qe||t.fetchEntireDoc)return;const _=p.block((k,x)=>{const I=Object.values(o.pages).find(({identifier:S})=>k.pathname===S);if(!I)throw new Error("[DataLoader] Error: page not found");return E.current[I.id]?(a(!0),E.current[I.id].promise.then(()=>{a(!1),T(x,k,_)})):!hn(h.state,{id:I.id,identity:fn.identity})&&!u.current?(a(!0),u.current=!0,b(I),$r(c.current,d.current,t,I.beckyId).then(({assets:A,completeStore:U})=>{const j=U;l.mergeAssetsStore(A),f.addToStore(j),a(!1),u.current=!1,v(I,j),T(x,k,_)}).catch(A=>{throw console.error("[DataLoader]",A),A})):u.current||T(x,k,_),!1});return _},[n,h.state]),m.exports.useEffect(()=>{if(Qe||t.fetchEntireDoc||!t.prefetchPages||!w)return;const _=Br(E.current[w.id].content||{},_o.page),k=[];for(const x of Object.values(o.pages)){const I=hn(h.state,{id:x.id,identity:fn.identity}),S=E.current[x.id],A=_.indexOf(x.beckyId)!==-1;!([w.pageNumber-1,w.pageNumber+1].indexOf(x.pageNumber)!==-1)&&!A||I||S||k.push(x)}for(const x of k)b(x),$r(c.current,d.current,t,x.beckyId,!0).then(({assets:I,completeStore:S})=>{const A=S;l.mergeAssetsStore(I),f.addToStore(A),v(x,A)}).catch(I=>{console.error("[DataLoader]",I)})},[n]),m.exports.useEffect(()=>{if(Qe||t.fetchEntireDoc||!t.prefetchPages||!w)return;const _=Br(h.state,_o.overlay),k=[];for(const x of _){const I=Object.values(o.overlays).find(({beckyId:U})=>U===x);if(!I)continue;const S=hn(h.state,{id:I.id,identity:gn.identity}),A=E.current[I.id];!S&&!A&&k.push(I)}for(const x of k)b(x),yd(c.current,d.current,t,x.beckyId).then(({assets:I,completeStore:S})=>{l.mergeAssetsStore(I),f.addToStore(S),v(x)}).catch(I=>{console.error("[DataLoader]",I)})},[h.state]),s.createElement(vd.Provider,{value:{isFetching:i}},i?s.createElement(ld,null):e)},wd="modulepreload",Fr={},Id="./",Gr=function(t,o){return!o||o.length===0?t():Promise.all(o.map(n=>{if(n=`${Id}${n}`,n in Fr)return;Fr[n]=!0;const r=n.endsWith(".css"),i=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${i}`))return;const a=document.createElement("link");if(a.rel=r?"stylesheet":wd,r||(a.as="script",a.crossOrigin=""),a.href=n,document.head.appendChild(a),r)return new Promise((l,c)=>{a.addEventListener("load",l),a.addEventListener("error",c)})})).then(()=>t())},Cd=m.exports.lazy(()=>Gr(()=>import("./core.970ae399.js").then(function(e){return e.ca}),["assets/core.970ae399.js","assets/vendor.96c5c2b8.js"]).then(e=>({default:e.DevToolProvider}))),Sd=m.exports.lazy(()=>Gr(()=>import("./core.970ae399.js").then(function(e){return e.ca}),["assets/core.970ae399.js","assets/vendor.96c5c2b8.js"]).then(e=>({default:e.DevToolContainer}))),xd=()=>oa()&&!nr()?s.createElement(m.exports.Suspense,{fallback:null},s.createElement(Cd,null,s.createElement(Sd,{subscribeEntitiesState:C,toggleImageSrc:"https://lh5.ggpht.com/oF0NSgJ52QiFS2I4_cIQhAnwh3TchkPTp5lJ4RFX0Wl3G44lbViXCAthdRCZAsGX9g=w300"}))):null,zr=m.exports.createContext(fe.sm),kd=({children:e})=>{let t;const o=yi({initialWidth:Xe[fe.lg]+1}),{isPrint:n}=q();return n?t=fe.xl:o>Xe[fe.lg]?t=fe.xl:o>Xe[fe.md]&&o<=Xe[fe.lg]?t=fe.lg:o>Xe[fe.sm]&&o<=Xe[fe.md]?t=fe.md:o>0&&o<=Xe[fe.sm]?t=fe.sm:t=fe.sm,s.createElement(zr.Provider,{value:t},e)};function P(){return m.exports.useContext(zr)}const Ur=ye("SET_BLOCK_REFERENCE",e=>({blockNode:e}))(),_d=(e,t)=>{switch(t.type){case ve(Ur):return t.payload.blockNode?O(g({},e),{[t.payload.blockNode.id]:t.payload.blockNode}):e;default:throw new Error(`Unknown action passed to BlockTransitionReducer ${JSON.stringify(t,null,1)}`)}},Hr=m.exports.createContext({}),Vr=m.exports.createContext(null),Ad=({children:e})=>{const[t,o]=m.exports.useReducer(_d,{});return s.createElement(Hr.Provider,{value:t},s.createElement(Vr.Provider,{value:o},e))};function Nd(){const e=m.exports.useContext(Vr);if(e===void 0)throw new Error("useBlockTransitionActions must be used in a BlockTransitionDispatchContext.Provider");return{setBlockReference:m.exports.useCallback(o=>{e&&e(Ur(o))},[e])}}function Rd(){const e=m.exports.useContext(Hr);if(e===void 0)throw new Error("useBlockTransitionState must be used in a BlockTransitionStateContext.Provider");return e}const Kr={isTransitioning:!1},jr=ye("SET_IS_TRANSITIONING",e=>({transition:e}))(),Wr=m.exports.createContext(Kr),qr=m.exports.createContext(null),Ld=(e,t)=>{switch(t.type){case ve(jr):return e.isTransitioning!==t.payload.transition?O(g({},e),{isTransitioning:t.payload.transition}):e;default:throw new Error(`Unknown action passed to PageTransitionReducer ${JSON.stringify(t,null,1)}`)}},Md=({children:e})=>{const[t,o]=m.exports.useReducer(Ld,Kr);return s.createElement(Wr.Provider,{value:t},s.createElement(qr.Provider,{value:o},e))};function Od(){const e=m.exports.useContext(qr);if(e===void 0)throw new Error("usePageTransitionActions must be used in a PageTransitionDispatchContext.Provider");return{setIsTransitioning:m.exports.useCallback(o=>{e&&e(jr(o))},[e])}}function Bt(){const e=m.exports.useContext(Wr);if(e===void 0)throw new Error("usePageTransitionState must be used in a PageTransitionStateContext.Provider");return e}const Pd=({backgroundEntity:e,videoRef:t,css:o})=>{var b,v;const n=P(),{entity:r}=Ao(t,n,C),{getVideoAsset:i}=ot(),{acceptedCookieConsentSettings:a}=m.exports.useContext(Pe),{isScreenshot:l,isPrint:c}=q(),d=i(r.assetRef),p=xn().audio.muted?0:1;if(!(d==null?void 0:d.url))return null;const h=typeof window!="undefined"&&window.localStorage&&!dn(window.localStorage.getItem(kt.SETTINGS)),f=z.isAllowed(X.MARKETING),E=h?f:a[X.MARKETING]===1;return s.createElement(ia,{url:d.url,options:{backgroundVideoLoopDisabled:!((v=(b=e.options)==null?void 0:b.video)==null?void 0:v.shouldLoopVideo),backgroundVideoSoundDisabled:!1},show:!0,styles:o,styleSize:n,volume:p,shouldRenderVideoFallbackImage:l||c||!E})},Dd=({backgroundStyles:e,scrollRate:t,isDescendantOfFirstBlock:o,disableParallax:n})=>s.createElement(aa,{styles:e,scrollRate:t,descendantOfFirstBlock:o,disableParallax:n}),$d=({id:e,identity:t})=>{var h;const o=P(),{entity:n,imageEntity:r,videoEntity:i,computed:a,css:l}=ra({id:e,identity:t},o,C);let c=!1;if(typeof window!="undefined"){const f=new URLSearchParams(window.location.search);c=Boolean(f.get("overlay"))}const{isDescendantOfFirstBlock:d}=sa(n,C),{isScreenshot:u,isPrint:p}=q();return n.type==="video"&&i?s.createElement(Pd,{css:l,backgroundEntity:n,videoRef:i}):n.type==="image"&&r?s.createElement(Dd,{backgroundStyles:l,scrollRate:u||p?"1":(h=a==null?void 0:a.background)==null?void 0:h.scrollRate,isDescendantOfFirstBlock:d,disableParallax:c}):s.createElement(s.Fragment,null)},Gn=({children:e,identifier:t,onClick:o})=>{const n=ze(),r=xe(),{isPrint:i}=q(),a=l=>{l.preventDefault(),r.push({pathname:n.pathname,search:`?overlay=${encodeURIComponent(t||"")}`}),o&&o()};return t&&!i?s.createElement("a",{href:`?overlay=${t}`,onClick:a},e):s.createElement(s.Fragment,null,e)},zn=m.exports.createContext(void 0),Bd=({children:e,environment:t,apiUrl:o})=>s.createElement(zn.Provider,{value:{environment:t,apiUrl:o}},e),yt=()=>{const e=m.exports.useContext(zn);if(e===void 0)throw new Error("useEnvironment must be used in a EnvironmentContextProvider");return e.environment},Fd=()=>{const e=m.exports.useContext(zn);if(e===void 0)throw new Error("useApi must be used in a EnvironmentContextProvider");return e.apiUrl},Gd=To`
	body {
		width: 100vw;
		max-width: 100vw;
		margin: 0;
		padding: 0;
		overflow-x: hidden;
	}
	
	// If there are any errors, hide the comments bar
	div[data-testid="comments-bar"]{
		display: none !important;
	}
`,zd=y.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
	padding: 20px;
	background: #002b49;
	font-family: Arial, Helvetica, sans-serif;
	color: white;
	img {
		position: absolute;
		bottom: 20px;
		left: 20px;
		width: 98px;
		height: 26px;
	}
`,Ud=y.h1`
	font-size: 5.3125rem;
	margin-bottom: 10px;
	font-weight: bold;
`,Hd=y.h2`
	font-size: 2.0625rem;
	margin-top: 0;
	margin-bottom: 5px;
`,Vd=y.p`
	font-size: 1.4375rem;
	margin-top: 0;
`,Un={[Zo.NOT_FOUND]:{title:"404 Error",subtitle:"The requested page was not found.",description:"Double check the URL and try again."}},Kd=({status:e=Zo.NOT_FOUND})=>{var t,o,n,r,i,a;return s.createElement(s.Fragment,null,s.createElement(Gd,null),s.createElement(zd,null,s.createElement(Ud,null,(o=(t=Un[e])==null?void 0:t.title)!=null?o:"Unknown Error"),s.createElement(Hd,null,(r=(n=Un[e])==null?void 0:n.subtitle)!=null?r:"Something went wrong."),s.createElement(Vd,null,(a=(i=Un[e])==null?void 0:i.description)!=null?a:"Please try again later."),s.createElement("img",{src:"./images/logo.png",alt:"Logo"})))};var J;(function(e){e.SlideLeft="SlideLeft",e.SlideRight="SlideRight"})(J||(J={}));const Hn={default:"translate(0%)",SlideLeft:"translate(100%)",SlideRight:"translate(-100%)"},jd=({children:e})=>{var L,re;const{currentPage:{identifier:t}}=Ke(),o=ze(),n={forward:J.SlideLeft,backward:J.SlideRight},{doc:r}=W(),i=m.exports.useRef(r),{entity:a}=Ie(C,`${i.current.id}`),l=m.exports.useRef(a),c=m.exports.useRef(null),d=m.exports.useRef({}),u=m.exports.useRef(!1),{state:p,hash:h}=o,{setIsTransitioning:f}=Od(),{isTransitioning:E}=Bt(),b=m.exports.useRef(null),v=Rd(),T=h?h.replace("#",""):void 0,w=!((L=i.current.options)==null?void 0:L.has_disabled_navigation)&&((re=l.current.navigation)==null?void 0:re.position)!==la.Bottom?-ca:0,_=-1+w,[k,x]=m.exports.useState(_);m.exports.useEffect(()=>{if(k>_&&!E&&!u.current){window.scrollTo({top:k,behavior:"smooth"}),x(_);const D=setInterval(()=>{const H=T&&v[T];window.scrollY>=Math.floor(k)&&window.scrollY<=Math.ceil(k)&&(I(H),clearInterval(D))},25)}},[k,E,v]),m.exports.useEffect(()=>{if(Object.keys(v).length!==0&&T){const D=v[T];if(!D)return;setTimeout(()=>{const H=D.getBoundingClientRect();x(E?_:(H==null?void 0:H.top)+window.scrollY+w)},100)}},[v,w,T,o,E]);const I=D=>{const H=D.querySelectorAll('a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])');(H==null?void 0:H.length)>0?H[0].focus():(D.tabIndex=0,D.focus())},S=D=>typeof document!="undefined"?document.querySelectorAll(`[data-pathname="${D}"]`)[0]:null,A=()=>{if(typeof window!="undefined"){u.current=!0;const D=d.current[t];setTimeout(()=>{b.current=S(t),window.scrollTo(0,0),D&&b.current&&(b.current.style.top=`${D>window.scrollY?"-":""}${window.scrollY+D}px`,b.current.style.position="absolute")},0),c.current=t}return{transform:Hn.default}},U=()=>{if(typeof window!="undefined"){const D=da()||0,H=c.current;setTimeout(()=>{const ae=S(H!=null?H:"");ae&&(ae.style.top=`-${D}px`),ae&&(ae.style.position="absolute")},0),D>=0&&c.current&&(d.current[c.current]=D)}return{transform:Hn[(p==null?void 0:p.pageTransition)===n.forward?J[n.backward]:J[n.forward]]}},j=()=>{if(typeof window!="undefined"){const D=S(t),H=d.current[t];D&&(D.style.top="0px"),D&&(D.style.position="relative"),window.scrollTo(0,H||0)}return f(!1),u.current=!1,!0};return vi(o,{keys:D=>D.pathname,config:{tension:80,friction:16,mass:1},initial:()=>(f(!1),u.current=!1,null),from:{transform:Hn[J[p==null?void 0:p.pageTransition]||"default"]},enter:A,leave:U,expires:j,onStart:()=>f(!0)})((D,H)=>s.createElement(Ti.div,{"data-component":"f-comment-indicator-target-page-wrapper",key:t,style:O(g({},D),{transform:D.transform.to(ae=>E?ae:"none")})},s.createElement(wi,{location:H},e)))},Yr=m.exports.createContext(void 0),Wd=({auth:e,children:t,overlaysMetadata:o,pageRoutes:n,overlayRoutes:r,pagesMetadata:i})=>{const{doc:a}=W(),l=xe(),c=ze(),d=yt(),u=m.exports.useRef(a),p=m.exports.useMemo(()=>Object.values(n).find(({identifier:E})=>c.pathname===E),[c.pathname,n]);!p&&d===ht.zip&&l.replace("/");const h=m.exports.useRef(e),f=m.exports.useRef(o);return s.createElement(Yr.Provider,{value:{auth:h.current,currentPage:p,overlaysMeta:f.current,overlayRoutes:r,pagesMeta:i,pageRoutes:n,publicationHal:u.current}},p?t:s.createElement(Kd,{status:404}))};function Ke(){return m.exports.useContext(Yr)}function Ae(){const{pageRoutes:e}=Ke();return e}function vt(){const{overlayRoutes:e}=Ke();return e}function Xr(){const e=xe(),{overlayRoutes:t}=Ke(),{search:o}=ze(),n=m.exports.useMemo(()=>{const a=un.parse(o.replace(/^\?/,""));return a?a.overlay:null},[o]),r=m.exports.useCallback(a=>(t==null?void 0:t[a])||null,[t]),i=m.exports.useCallback(()=>{const a=new URLSearchParams(o);a.has("overlay")&&(a.delete("overlay"),e.replace({search:a.toString()}))},[e,o]);return{getOverlayInfoFromIdentifier:r,closeOverlay:i,currentOverlayIdentifier:n}}function qd(){const{currentPage:e,pageRoutes:t}=Ke();return{getTransitionAnimationFromPath:m.exports.useCallback(n=>{const r=Object.values(t).find(({identifier:i})=>i===n);return r?r.pageNumber===e.pageNumber?null:r.pageNumber>e.pageNumber?J.SlideLeft:J.SlideRight:null},[e,t])}}const Yd=(e,t)=>{const o=Object.values(e).sort((r,i)=>r.pageNumber-i.pageNumber),n=o.findIndex(r=>r.id===(t==null?void 0:t.id));return n===void 0||n===-1?{nextPage:null,prevPage:null}:{nextPageData:o[n+1]||null,prevPageData:o[n-1]||null}};function ct(){const{currentPage:e,pageRoutes:t}=Ke(),{nextPageData:o,prevPageData:n}=m.exports.useMemo(()=>Yd(t,e),[t,e]);return{currentPageData:e,nextPageData:o,prevPageData:n}}const Xd=(e,t,o)=>{const n=e.split("/");return o&&t.includes(`/${n.splice(-2).shift()}`)?`${e.split("/").slice(0,-2).join("/")}/`:`${e.split("/").slice(0,-1).join("/")}/`},Tt=e=>e===!1?"./":`.${e}`,Ft=({children:e,blockId:t,page:o={beckyId:0,id:pn(),identifier:"",name:"",pageNumber:0},className:n="",style:r,target:i,ariaLabel:a,onClick:l})=>{const c=ze(),{currentPageData:d}=ct(),{isPrint:u}=q(),p=xe(),h=(o==null?void 0:o.identifier)?o.identifier:c.pathname,f=`#${t}`,E=(T,w)=>(T==null?void 0:T.pageNumber)>w.pageNumber?J.SlideLeft:(T==null?void 0:T.pageNumber)<w.pageNumber?J.SlideRight:!1,b=T=>{T.preventDefault(),p.push({pathname:h,state:g({},v?{pageTransition:v,scroll:!1}:{scroll:!1}),hash:f}),l&&l()},v=E(o,d);return u?s.createElement("a",{"aria-disabled":!0,style:O(g({},r),{pointerEvents:"none"})},e):s.createElement("a",{href:Tt(h),className:n,"aria-label":a,target:i,style:r,onClick:b},e)},Qd=({className:e="",page:t,children:o,pageTransition:n,handleOnClick:r,handleOnKeyPress:i})=>{const{isPrint:a}=q(),l=xe(),c=d=>{d.preventDefault(),l.push({pathname:t.identifier,state:g({},n?{pageTransition:n,scroll:!1}:{scroll:!1})}),r(d)};return t&&!a?s.createElement("a",{href:Tt(t.identifier),onClick:c,className:e,onKeyPress:i},o):s.createElement("a",{"aria-disabled":!0,style:{pointerEvents:"none"}},o)},Zd=(e,t)=>(e==null?void 0:e.pageNumber)>t.pageNumber?J.SlideLeft:(e==null?void 0:e.pageNumber)<t.pageNumber?J.SlideRight:!1,Jd=(e,{handleLinkClicked:t})=>function(n){const r=ze(),i=Ae(),{currentPageData:a}=ct(),l=m.exports.useMemo(()=>n.page?n.page:Object.values(i).find(p=>p.identifier===r.pathname)||null,[n.page,i,r.pathname]),c=m.exports.useCallback((p,h=!1)=>{t(p,n,h)},[n]),d=m.exports.useCallback(p=>{at(c(p,!0))},[c]);if(!l)return s.createElement("a",{"aria-disabled":!0,style:{pointerEvents:"none"}},n.children);const u=Zd(l,a)||n.pageTransition;return s.createElement(e,{handleClick:c,handleKeyPress:d,page:l,pageTransition:u},n.children)},eu=e=>e.currentTarget.nodeName==="A"&&(e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&e.nativeEvent.which===2),{send:Gt,TRACKING_CATEGORY:zt,TRACKING_EVENT:Ut}=Oe.events,tu=({page:e,pageTransition:t,handleClick:o,handleKeyPress:n,children:r})=>s.createElement(Qd,{handleOnClick:o,handleOnKeyPress:n,page:e,pageTransition:t},r),Vn=Jd(tu,{handleLinkClicked:(e,{children:t,className:o,foleonElement:n,handleClick:r,href:i,linkType:a,page:l,role:c,routeChangedCallback:d,to:u},p)=>{if(a==="EXTERNAL")return Gt(zt.EXTERNAL,Ut.LINK,`${t==null?void 0:t.toString()} - ${i}`),p?window.open(i):void 0;c==="menuitem"?Gt(zt.INTERNAL,Ut.MENU_BAR,`${u}`):n==="menu-item"?Gt(zt.NAVIGATION_BAR,Ut.CLICK,"Page index"):o==="im-link"&&Gt(zt.INTERNAL,Ut.LINK,`${t==null?void 0:t.toString()} - ${u}`),Ii(r)&&r(e),!eu(e)&&((!u||G(u,"pathname")===!1)&&!l||d&&d())}}),nu=y.div`
	position: absolute;
	min-height: 12px;
	border-radius: 2px;
	background-color: rgba(0, 0, 0, 0.87);
`,ou=y.p`
	font-family: Helvetica;
	font-size: 9px;
	letter-spacing: normal;
	color: #ffffff;
`,Ht=({overlayOptions:e,overlayName:t})=>{const o=vt();if(!t){const n=Object.values(o).find(({beckyId:r})=>r===(e==null?void 0:e.beckyId));t=n==null?void 0:n.name}return s.createElement(nu,{className:"link-name-displayer"},s.createElement(ou,null,t))},{send:Vt,TRACKING_CATEGORY:Kt,TRACKING_EVENT:jt}=Oe.events,ru=({options:e,children:t})=>{const o=Ae(),n=Object.values(o).find(r=>r.beckyId===e.beckyId);return n?s.createElement(Vn,{page:n,handleClick:()=>{var r;return Vt(Kt.INTERNAL,jt.IMAGE,`${(r=t==null?void 0:t.props)==null?void 0:r.url.href} - ${n==null?void 0:n.identifier.replace(/\//g,"")}`)}},t):null},su=({options:e,children:t})=>{const o=vt(),n=Object.values(o).find(({beckyId:r})=>r===e.beckyId);return s.createElement(Gn,{identifier:n==null?void 0:n.name,onClick:()=>{var r;return Vt(Kt.INTERNAL,jt.IMAGE,`${(r=t==null?void 0:t.props)==null?void 0:r.url.href} - /?overlay=${encodeURIComponent((n==null?void 0:n.name)||"")}`)}},t)},iu=({options:e,children:t})=>{const o=Ae();if(gt(e))return s.createElement(su,{options:e},t);if(Et(e)){const n=Object.values(o).find(r=>r.beckyId===e.beckyId);return s.createElement(Ft,{blockId:e.blockId||"",page:n,onClick:()=>{var r,i;return Vt(Kt.INTERNAL,jt.IMAGE,`${(i=(r=t==null?void 0:t.props)==null?void 0:r.url)==null?void 0:i.href} - ${n==null?void 0:n.name}-page`)}},t)}if(_t(e))return s.createElement(ru,{options:e},t);if(rt(e)){const n=At(e.value);return s.createElement("a",{href:n,target:e.target,onClick:()=>{var r,i;return Vt(Kt.EXTERNAL,jt.IMAGE,`${(i=(r=t==null?void 0:t.props)==null?void 0:r.url)==null?void 0:i.href} - ${n}`)}},t)}return s.createElement(s.Fragment,null,t)},Kn=({id:e,identity:t})=>{var p;const o=P(),{css:n,entity:r,revealAnimation:i}=ua({id:e,identity:t},o,C),{getImageAsset:a}=ot(),[l]=ft(r,C),{isPrint:c}=q(),d=c&&(l==null?void 0:l.options)&&gt(l==null?void 0:l.options),u=a(r);return(u==null?void 0:u.url)?r&&Array.isArray(r.refs)&&r.refs.length>0?s.createElement(s.Fragment,null,r.refs.map(({identity:h,id:f})=>{var E;return h==="action"?s.createElement(iu,{key:f,options:(l==null?void 0:l.options)||{}},s.createElement(No,{url:{href:u.url,width:(E=u==null?void 0:u.properties)==null?void 0:E.width},styles:n,revealAnimation:i,shouldShowLinkDisplay:!!d,alt:(u==null?void 0:u.alt)||""},d?s.createElement(Ht,{overlayOptions:l==null?void 0:l.options}):void 0)):null})):s.createElement(No,{url:{href:u.url,width:(p=u==null?void 0:u.properties)==null?void 0:p.width},alt:(u==null?void 0:u.alt)||"",styles:n,revealAnimation:i,dataFoleonId:r.id}):null},{send:Wt,TRACKING_CATEGORY:qt,TRACKING_EVENT:Yt}=Oe.events,au=({options:e})=>{const t=Ae(),o=Object.values(t).find(n=>n.beckyId===e.beckyId);return o?s.createElement(Vn,{page:o,handleClick:()=>Wt(qt.INTERNAL,Yt.HOTSPOT,`${o==null?void 0:o.identifier.replace(/\//g,"")}`)}):null},lu=({options:e})=>{const t=vt(),o=Object.values(t).find(({beckyId:i})=>i===e.beckyId),{isPrint:n}=q(),r=gt(e);return n&&r?s.createElement(Ht,{overlayOptions:e}):s.createElement(Gn,{identifier:o==null?void 0:o.name,onClick:()=>Wt(qt.INTERNAL,Yt.HOTSPOT,`/?overlay=${encodeURIComponent((o==null?void 0:o.name)||"")}`)})},cu=({options:e,children:t})=>{const o=Ae();if(gt(e))return s.createElement(lu,{options:e}," ");if(Et(e)){const n=Object.values(o).find(r=>r.beckyId===e.beckyId);return s.createElement(Ft,{blockId:e.blockId||"",page:n,onClick:()=>Wt(qt.INTERNAL,Yt.HOTSPOT,`${n==null?void 0:n.name}-page`)},t)}if(_t(e))return s.createElement(au,{options:e}," ");if(rt(e)){const n=At(e.value);return s.createElement("a",{href:n,target:e.target,onClick:()=>Wt(qt.EXTERNAL,Yt.HOTSPOT,n)})}return s.createElement("a",{"aria-disabled":!0,style:{pointerEvents:"none"}})},du=({hotspotRef:e,backgroundRef:t,container:o})=>{const n=P(),{css:r,entity:i}=pa(e,n,C),{backgroundPosition:a,backgroundX:l,backgroundY:c,containerHeight:d,containerWidth:u,data:p,hotspotHeight:h,hotspotMouseoverPosition:f,hotspotType:E,hotspotWidth:b,hoverImageId:v,imageHeight:T,imageWidth:w,isCustom:_}=ma(e,t,o,n,C),[k]=ft(i,C),x=rt((k==null?void 0:k.options)||{}),{isPrint:I}=q(),S=I&&!x?O(g({},r),{pointerEvents:"none"}):r;return s.createElement(ha,{backgroundPosition:a,backgroundX:l||null,backgroundY:c||null,containerHeight:d||0,containerWidth:u||0,hotspotHeight:h,hotspotWidth:b,imageHeight:T,imageWidth:w,dataFoleonId:i.id},s.createElement(fa,{data:p,hotspotHeight:h,hotspotMouseoverPosition:f,hotspotType:E,hotspotWidth:b,hoverImageId:v||"",isCustom:_,styles:S},i&&Array.isArray(i.refs)?i.refs.map(({id:A,identity:U})=>U==="action"?s.createElement(cu,{key:A,options:(k==null?void 0:k.options)||{},"aria-label":p}):U==="image"&&_?s.createElement(Kn,{id:A,identity:U,key:A,"aria-label":p}):null):null))},Qr="whitepaper.userHasAccess",Zr=" ",Jr=()=>{try{const e=JSON.parse(localStorage.getItem(Qr)).publications;return typeof e!="string"?"":e}catch{return""}},uu=e=>{const t={publications:e};typeof window!="undefined"&&window.localStorage&&window.localStorage.setItem(Qr,JSON.stringify(t))},pu=e=>e?Jr().split(Zr).indexOf(e.toString())>=0:!1,Ze=e=>{const t=`${Jr()}${Zr}${e}`;uu(t)},mu=e=>pu(e),jn=ye("SET_LEAD_GEN_ID",e=>({id:e}))(),Wn=ye("SET_GATING",e=>({isGating:e}))(),je=()=>{const e=gu(),t=m.exports.useCallback(r=>{e(jn(r))},[e]),o=m.exports.useCallback(r=>{e(Wn(r))},[e]),n=m.exports.useCallback(()=>{e(Wn(!1)),e(jn(""))},[e]);return{setGating:o,setLeadGenId:t,reset:n}},hu=(e,t)=>{switch(t.type){case ve(jn):return e.leadGenId!==t.payload.id?O(g({},e),{leadGenId:t.payload.id}):e;case ve(Wn):return e.isGating!==t.payload.isGating?O(g({},e),{isGating:t.payload.isGating}):e;default:throw new Error(`Unknown action passed to AuthReducer ${JSON.stringify(t,null,1)}`)}},es={userHasProvidedDetails:!1,leadGenId:null,isGating:!1,beckyDocId:0},ts=m.exports.createContext(es),ns=m.exports.createContext(void 0),fu=({children:e})=>{const{doc:t}=W(),[o,n]=m.exports.useReducer(hu,O(g({},es),{beckyDocId:t.id}));return s.createElement(ts.Provider,{value:o},s.createElement(ns.Provider,{value:n},e))};function Xt(){const e=m.exports.useContext(ts);if(e===void 0)throw new Error("useGatingState must be used within a GatingStateProvider");return e}function gu(){const e=m.exports.useContext(ns);if(e===void 0)throw new Error("useAuthStateDispatch must be used within a GatingStateProvider");return e}const Eu=/\S/,bu=/\"/g,yu=/\n/g,vu=/\r/g,Tu=/\\/g,wu=/\u2028/,Iu=/\u2029/;let B={};B.tags={"#":1,"^":2,"<":3,$:4,"/":5,"!":6,">":7,"=":8,_v:9,"{":10,"&":11,_t:12};B.scan=function(t,o){let n=t.length,r=0,i=1,a=2,l=r,c="",d=null,u="",p=[],h,f=0,E=0,b="{{",v="}}";function T(){u.length>0&&(p.push({tag:"_t",text:new String(u)}),u="")}function w(){var S;for(var x=!0,I=E;I<p.length;I++)if(x=B.tags[p[I].tag]<B.tags._v||p[I].tag=="_t"&&((S=p[I].text)==null?void 0:S.match(Eu))===null,!x)return!1;return x}function _(x,I){var U;if(T(),x&&w())for(var S=E,A;S<p.length;S++)p[S].text&&((A=p[S+1])&&A.tag==">"&&(A.indent=(U=p[S].text)==null?void 0:U.toString()),p.splice(S,1));else I||p.push({tag:`
`});h=!1,E=p.length}function k(x,I){var S="="+v,A=x.indexOf(S,I),U=os(x.substring(x.indexOf("=",I)+1,A)).split(" ");return b=U[0],v=U[U.length-1],A+S.length-1}for(o&&(o=o.split(" "),b=o[0],v=o[1]),f=0;f<n;f++)l==r?rs(b,t,f)?(--f,T(),l=i):t.charAt(f)==`
`?_(h):u+=t.charAt(f):l==i?(f+=b.length-1,d=B.tags[t.charAt(f+1)],c=d?t.charAt(f+1):"_v",c=="="?(f=k(t,f),l=r):(d&&f++,l=a),h=f):rs(v,t,f)?(p.push({tag:c,n:os(u),otag:b,ctag:v,i:c=="/"?h-b.length:f+v.length}),u="",f+=v.length-1,l=r,c=="{"&&(v=="}}"?f++:Cu(p[p.length-1]))):u+=t.charAt(f);return _(h,!0),p};function Cu(e){e.n.substr(e.n.length-1)==="}"&&(e.n=e.n.substring(0,e.n.length-1))}function os(e){return e.trim?e.trim():e.replace(/^\s*|\s*$/g,"")}function rs(e,t,o){if(t.charAt(o)!=e.charAt(0))return!1;for(var n=1,r=e.length;n<r;n++)if(t.charAt(o+n)!=e.charAt(n))return!1;return!0}var Su={_t:!0,"\n":!0,$:!0,"/":!0};function ss(e,t,o,n){var r=[],i=null,a=null,l=[];for(a=o[o.length-1];e.length>0;){if(l=e.shift(),a&&a.tag=="<"&&!(l.tag in Su))throw new Error("Illegal content in < super tag.");if(B.tags[l.tag]<=B.tags.$||xu(l,n))o.push(l),l.nodes=ss(e,l.tag,o,n);else if(l.tag=="/"){if(o.length===0)throw new Error("Closing tag without opener: /"+l.n);if(i=o.pop(),l.n!=(i==null?void 0:i.n)&&!ku(l.n,i==null?void 0:i.n,n))throw new Error("Nesting error: "+(i==null?void 0:i.n)+" vs. "+l.n);return i&&(i.end=l.i),r}else l.tag==`
`&&(l.last=e.length==0||e[0].tag==`
`);r.push(l)}if(o.length>0)throw new Error("missing closing tag: "+o.pop().n);return r}function xu(e,t){for(var o=0,n=t.length;o<n;o++)if(t[o].o==e.n)return e.tag="#",!0}function ku(e,t,o){for(var n=0,r=o.length;n<r;n++)if(o[n].c==e&&o[n].o==t)return!0}function _u(e){var t=[];for(var o in e)t.push('"'+Ne(o)+'": function(c,p,t,i) {'+e[o]+"}");return"{ "+t.join(",")+" }"}function is(e){var t=[];for(var o in e.partials)t.push('"'+Ne(o)+'":{name:"'+Ne(e.partials[o].name)+'", '+is(e.partials[o])+"}");return"partials: {"+t.join(",")+"}, subs: "+_u(e.subs)}B.stringify=function(e,t,o){return"{code: function (c,p,i) { "+B.wrapMain(e.code)+" },"+is(e)+"}"};var as=0;B.generate=function(e,t,o){as=0;var n={code:"",subs:{},partials:{}};return B.walk(e,n),o.asString?this.stringify(n,t,o):this.makeTemplate(n,t,o)};B.wrapMain=function(e){return'var t=this;t.b(i=i||"");'+e+"return t.fl();"};B.template=B.Template;B.makeTemplate=function(e,t,o){var n=this.makePartials(e);return n.code=new Function("c","p","i",this.wrapMain(e.code)),new this.template(n,t,this,o)};B.makePartials=function(e){var t,o={subs:{},partials:e.partials,name:e.name};for(t in o.partials)o.partials[t]=this.makePartials(o.partials[t]);for(t in e.subs)o.subs[t]=new Function("c","p","t","i",e.subs[t]);return o};function Ne(e){return e.replace(Tu,"\\\\").replace(bu,'\\"').replace(yu,"\\n").replace(vu,"\\r").replace(wu,"\\u2028").replace(Iu,"\\u2029")}function Qt(e){return~e.indexOf(".")?"d":"f"}function ls(e,t){var o="<"+(t.prefix||""),n=o+e.n+as++;return t.partials[n]={name:e.n,partials:{}},t.code+='t.b(t.rp("'+Ne(n)+'",c,p,"'+(e.indent||"")+'"));',n}B.codegen={"#":function(e,t){t.code+="if(t.s(t."+Qt(e.n)+'("'+Ne(e.n)+'",c,p,1),c,p,0,'+e.i+","+e.end+',"'+e.otag+" "+e.ctag+'")){t.rs(c,p,function(c,p,t){',B.walk(e.nodes,t),t.code+="});c.pop();}"},"^":function(e,t){t.code+="if(!t.s(t."+Qt(e.n)+'("'+Ne(e.n)+'",c,p,1),c,p,1,0,0,"")){',B.walk(e.nodes,t),t.code+="};"},">":ls,"<":function(e,t){var o={partials:{},code:"",subs:{},inPartial:!0};B.walk(e.nodes,o);var n=t.partials[ls(e,t)];n.subs=o.subs,n.partials=o.partials},$:function(e,t){var o={subs:{},code:"",partials:t.partials,prefix:e.n};B.walk(e.nodes,o),t.subs[e.n]=o.code,t.inPartial||(t.code+='t.sub("'+Ne(e.n)+'",c,p,i);')},"\n":function(e,t){t.code+=ds('"\\n"'+(e.last?"":" + i"))},_v:function(e,t){t.code+="t.b(t.v(t."+Qt(e.n)+'("'+Ne(e.n)+'",c,p,0)));'},_t:function(e,t){t.code+=ds('"'+Ne(e.text)+'"')},"{":cs,"&":cs};function cs(e,t){t.code+="t.b(t.t(t."+Qt(e.n)+'("'+Ne(e.n)+'",c,p,0)));'}function ds(e){return"t.b("+e+");"}B.walk=function(e,t){for(var o,n=0,r=e.length;n<r;n++)o=B.codegen[e[n].tag],o&&o(e[n],t);return t};B.parse=function(e,t,o){return o=o||{},ss(e,"",[],o.sectionTags||[])};B.cache={};B.cacheKey=function(e,t){return[e,!!t.asString,!!t.disableLambda,t.delimiters,!!t.modelGet].join("||")};B.compile=function(e,t){t=t||{};var o=B.cacheKey(e,t),n=this.cache[o];if(n){var r=n.partials;for(var i in r)delete r[i].instance;return n}return n=this.generate(this.parse(this.scan(e,t.delimiters),e,t),e,t),this.cache[o]=n};let qn={};qn.Template=function(e,t,o,n){e=e||{},this.r=e.code||this.r,this.c=o,this.options=n||{},this.text=t||"",this.partials=e.partials||{},this.subs=e.subs||{},this.buf=""};qn.Template.prototype={r:function(e,t,o){return""},v:Du,t:Zt,render:function(t,o,n){return this.ri([t],o||{},n)},ri:function(e,t,o){return this.r(e,t,o)},ep:function(e,t){var o=this.partials[e],n=t[o.name];if(o.instance&&o.base==n)return o.instance;if(typeof n=="string"){if(!this.c)throw new Error("No compiler available.");n=this.c.compile(n,this.options)}if(!n)return null;if(this.partials[e].base=n,o.subs){t.stackText||(t.stackText={});for(let r in o.subs)t.stackText[r]||(t.stackText[r]=this.activeSub!==void 0&&t.stackText[this.activeSub]?t.stackText[this.activeSub]:this.text);n=Au(n,o.subs,o.partials,this.stackSubs,this.stackPartials,t.stackText)}return this.partials[e].instance=n,n},rp:function(e,t,o,n){var r=this.ep(e,o);return r?r.ri(t,o,n):""},rs:function(e,t,o){var n=e[e.length-1];if(!Yn(n)){o(e,t,this);return}for(var r=0;r<n.length;r++)e.push(n[r]),o(e,t,this),e.pop()},s:function(e,t,o,n,r,i,a){var l;return Yn(e)&&e.length===0?!1:(typeof e=="function"&&(e=this.ms(e,t,o,n,r,i,a)),l=!!e,!n&&l&&t&&t.push(typeof e=="object"?e:t[t.length-1]),l)},d:function(e,t,o,n){var r,i=e.split("."),a=this.f(i[0],t,o,n),l=this.options.modelGet,c=null;if(e==="."&&Yn(t[t.length-2]))a=t[t.length-1];else for(var d=1;d<i.length;d++)r=us(i[d],a,l),r!==void 0?(c=a,a=r):a="";return n&&!a?!1:(!n&&typeof a=="function"&&(t.push(c),a=this.mv(a,t,o),t.pop()),a)},f:function(e,t,o,n){for(var r=!1,i=null,a=!1,l=this.options.modelGet,c=t.length-1;c>=0;c--)if(i=t[c],r=us(e,i,l),r!==void 0){a=!0;break}return a?(!n&&typeof r=="function"&&(r=this.mv(r,t,o)),r):n?!1:""},ls:function(e,t,o,n,r,i){var a=this.options.delimiters;return this.options.delimiters=i,this.b(this.ct(Zt(e.call(t,r,o)),t,n)),this.options.delimiters=a,!1},ct:function(e,t,o){if(this.options.disableLambda)throw new Error("Lambda features disabled.");return this.c.compile(e,this.options).render(t,o)},b:function(e){this.buf+=e},fl:function(){var e=this.buf;return this.buf="",e},ms:function(e,t,o,n,r,i,a){var l,c=t[t.length-1],d=e.call(c);return typeof d=="function"?n?!0:(l=this.activeSub&&this.subsText&&this.subsText[this.activeSub]?this.subsText[this.activeSub]:this.text,this.ls(d,c,t,o,l.substring(r,i),a)):d},mv:function(e,t,o){var n=t[t.length-1],r=e.call(n);return typeof r=="function"?this.ct(Zt(r.call(n)),n,o):r},sub:function(e,t,o,n){var r=this.subs[e];r&&(this.activeSub=e,r(t,o,this,n),this.activeSub=!1)}};function us(e,t,o){var n;return t&&typeof t=="object"&&(t[e]!==void 0?n=t[e]:o&&t.get&&typeof t.get=="function"&&(n=t.get(e))),n}function Au(e,t,o,n,r,i){function a(){}a.prototype=e;function l(){}l.prototype=e.subs;var c,d=new a;d.subs=new l,d.subsText={},d.buf="",n=n||{},d.stackSubs=n,d.subsText=i;for(c in t)n[c]||(n[c]=t[c]);for(c in n)d.subs[c]=n[c];r=r||{},d.stackPartials=r;for(c in o)r[c]||(r[c]=o[c]);for(c in r)d.partials[c]=r[c];return d}var Nu=/&/g,Ru=/</g,Lu=/>/g,Mu=/\'/g,Ou=/\"/g,Pu=/[&<>\"\']/;function Zt(e){return String(e==null?"":e)}function Du(e){return e=Zt(e),Pu.test(e)?e.replace(Nu,"&amp;").replace(Ru,"&lt;").replace(Lu,"&gt;").replace(Mu,"&#39;").replace(Ou,"&quot;"):e}var Yn=Array.isArray||function(e){return Object.prototype.toString.call(e)==="[object Array]"};B.Template=qn.Template;B.template=B.Template;const $u=({children:e})=>s.createElement("span",null,B.compile(Array.isArray(e)?e.join():e).render(typeof window!="undefined"&&window.__PERSONALIZATION?window.__PERSONALIZATION:{})),{send:De,TRACKING_CATEGORY:$e,TRACKING_EVENT:Be}=Oe.events,Bu=y.a`
	transition: all 0.3s ease 0s;
	display: inline-block;

	${({styles:e})=>e}
`,Fu=y.button`
	display: block;
	padding: 12px 20px;
	transition: all 0.3s ease 0s;
	white-space: pre-wrap;

	${({styles:e})=>e}
`,wt=({parent:e,stylesFromParent:t={},id:o,formName:n=""})=>{var H,ae,pe,Je;const r=ze(),i=xe(),a=P(),l=W(),{entity:c,css:d,revealAnimation:u,computed:p}=Lo({id:o,identity:ya.identity},a,C),h=vt(),f=Ae(),{reset:E}=je(),{getTransitionAnimationFromPath:b}=qd(),v=ft(e,C),{getFontByRef:T}=ot(),{loadFonts:w}=xo(),_=va({actions:v,publication:l.doc,pageRoutes:f,overlayRoutes:h,currentUrl:r.pathname}),{children:k,childrenHoverStyleMap:x,fonts:I}=m.exports.useMemo(()=>Ta(e,c,_,$u,T,p.font),[e,c,_,T,p.font]);m.exports.useEffect(()=>{w(I)},[I,w]);const{doc:S}=W(),A=Ie(C,S.id.toString()),U=m.exports.useMemo(()=>{const le={};let N={};const K=tt(A.entity,"text-link"),te=nt(K);return Object.keys(te).forEach(se=>{Ci(te[se])?wa[a]===se&&(N=te[se]):le[se]=te[se]}),g(g({},le),N)},[a,A.entity]),{isPrint:j}=q(),ge=((H=v[0])==null?void 0:H.options)&&En(v[0].options),[L]=ft(e,C);if(c.type==="button"){const le=Si(t,d),N=e.parent.identity==="form",K=e.parent.identity==="lead-gen",te={position:"relative",pointerEvents:"none"},se=j&&ge?g(g({},le),te):le;if(Object.keys(x).forEach(F=>{se["&:hover"+F]=x[F]}),N)return s.createElement(Fu,{type:"submit",value:c.text,"aria-label":c.text,styles:se,"data-foleon-element":"form-submit-button","data-foleon-id":c.id},k);if(K){const F=()=>{De($e.LEAD_FORM,Be.SKIP,n),E(),Ze(l.doc.id)};return s.createElement(Bu,{href:"javascript:void(0)",styles:se,onClick:F,"data-testid":"leadgen-skip-button","data-foleon-id":c.id},k)}const Z=Object.values(f).find(F=>{var Q,St;if(((Q=L==null?void 0:L.options)==null?void 0:Q.type)==="page")return F.beckyId===((St=L==null?void 0:L.options)==null?void 0:St.beckyId)}),Fe=(Z==null?void 0:Z.identifier)==="/"?Z==null?void 0:Z.name:(ae=Z==null?void 0:Z.identifier)==null?void 0:ae.replace(/\//g,""),Le=(L==null?void 0:L.options)&&_t(L==null?void 0:L.options),Me=(Z==null?void 0:Z.name)+"-page",Ce=Object.values(h).find(({beckyId:F})=>{var Q;if((L==null?void 0:L.options)&&En(L==null?void 0:L.options))return F===((Q=L==null?void 0:L.options)==null?void 0:Q.beckyId)}),We=(L==null?void 0:L.options)&&Et(L==null?void 0:L.options)&&Me,qe=(L==null?void 0:L.options)&&En(L==null?void 0:L.options)&&(Ce==null?void 0:Ce.name),Ge=(L==null?void 0:L.options)&&rt(L==null?void 0:L.options)&&At((pe=L==null?void 0:L.options)==null?void 0:pe.value),Y=()=>{Ge&&De($e.EXTERNAL,Be.BUTTON,`${k} - ${Ge}`),Le&&De($e.INTERNAL,Be.BUTTON,`${c.text} - ${Fe}`),We&&De($e.INTERNAL,Be.BUTTON,`${c.text}-${We}`),qe&&De($e.INTERNAL,Be.BUTTON,`${c.text}- /?overlay=${qe}`)};return s.createElement(Ia,{styles:se,className:"im-button rte-element",renderAllStyles:!0,handleClick:Y,dataFoleonId:c.id},k,j&&ge&&s.createElement(Ht,{overlayOptions:(Je=v[0])==null?void 0:Je.options}))}const re=(le,N,K)=>{var te;le.preventDefault(),i.push({pathname:K,search:`?${un.stringify(N.props.search)}`}),De($e.INTERNAL,Be.LINK,`${(te=N==null?void 0:N.props)==null?void 0:te.children[0]} - ${K}?${un.stringify(N.props.search)}`)},D=(le,N,K)=>{var te;le.preventDefault(),i.push({pathname:K,state:{pageTransition:b(K)}}),De($e.INTERNAL,Be.LINK,`${(te=N==null?void 0:N.props)==null?void 0:te.children[0]} - ${K.replace(/\//g,"")}`)};return s.createElement(Ca,{styles:d,type:c.type,dataFoleonId:c.id,revealAnimation:u},m.exports.Children.map(k,le=>{var Z,Fe,Le,Me,Ce,We,qe,Ge;const N=le,K=(Z=N==null?void 0:N.props)==null?void 0:Z.href;let te=!0,se=!1;if(!Ue(N.props)&&!Ue(N.props.actionid)){const{options:Y}=v.find(({id:F})=>{var Q;return F===((Q=N==null?void 0:N.props)==null?void 0:Q.actionid)});te=rt(Y),se=Mo(Y)}if((N==null?void 0:N.type)==="a"){const Y=N.props.style;if(Object.keys(U).forEach(F=>{Y[F]||(Y[F]=U[F])}),j&&!te)return s.createElement("span",g({},N.props))}if(se&&N.props&&!K)return s.createElement(Pe.Consumer,null,({setCookieConsentStatus:Y,setModalStatus:F})=>s.createElement("a",g({onClick:Q=>{Q.preventDefault(),Y(Ye.REQUEST),F(Te.SETTINGS)},"data-testid":"revoke-cc-text-link"},N.props)));if(K&&N.props.search)return s.createElement("a",g({href:Tt(K),onClick:Y=>re(Y,N,K)},N.props));if((Fe=N==null?void 0:N.props)==null?void 0:Fe.actionid){const{options:Y}=v.find(({id:F})=>{var Q;return F===((Q=N==null?void 0:N.props)==null?void 0:Q.actionid)});if((Y==null?void 0:Y.type)==="page"&&Et(Y)){const F=Object.values(f).find(Q=>Q.beckyId===Y.beckyId);return s.createElement(Ft,{blockId:Y.blockId||"",page:F,style:(Le=N.props)==null?void 0:Le.style,className:(Me=N.props)==null?void 0:Me.className,ariaLabel:N.props["aria-label"],target:(Ce=N.props)==null?void 0:Ce.target,onClick:()=>{var Q;return De($e.INTERNAL,Be.LINK,`${(Q=N.props)==null?void 0:Q.children} - ${F==null?void 0:F.name}-page`)}},(We=N.props)==null?void 0:We.children)}}if(K){if(K.startsWith("http")||Sa(K))return s.createElement("a",O(g({href:K,target:(qe=N==null?void 0:N.props)==null?void 0:qe.target},N.props),{onClick:()=>{var F;return De($e.EXTERNAL,Be.LINK,`${(F=N==null?void 0:N.props)==null?void 0:F.children[0]} - ${K}`)}}),(Ge=N==null?void 0:N.props)==null?void 0:Ge.children[0]);const Y=O(g({},N.props),{href:Tt(N.props.href)});return s.createElement("a",g({onClick:F=>D(F,N,K)},Y))}return le}))},Gu=({refs:e,parent:t,isMobileViewport:o=!1})=>{const n=e[0].type==="ordered-list-item"?"ol":"ul";return s.createElement(n,{key:e[0].id,style:{margin:"0",padding:"0",paddingLeft:o?"0.875rem":"1em"}},e.flat(1/0).map(r=>s.createElement(wt,{key:r.id,parent:t,id:r.id})))},Jt=({id:e,identity:t})=>{const o=P(),{entity:n,css:r,refs:i}=ga({id:e,identity:t},o,C),a=m.exports.useMemo(()=>(i==null?void 0:i.filter(Ro))||[],[n,r,i==null?void 0:i.length]);return s.createElement(Ea,{styles:r},a&&Array.isArray(a)?ba(a).map(l=>Array.isArray(l)?s.createElement(Gu,{key:l[0].id,refs:l,parent:n,isMobileViewport:o===fe.sm}):s.createElement(wt,{key:l.id,parent:n,id:l.id})):null)},zu=y.div`
	width: 100%;
	text-align: ${e=>e.textAlign};
	position: relative;
	pointer-events: auto;
`,Uu=({options:e,children:t})=>{const o=Ae(),n=Object.values(o).find(r=>r.beckyId===e.beckyId);return n?s.createElement(Vn,{page:n},t):null},Hu=({children:e,options:t})=>{const o=vt(),n=Object.values(o).find(({beckyId:r})=>r===t.beckyId);return s.createElement(Gn,{identifier:n==null?void 0:n.name},e)},Vu=({children:e})=>{const{isPrint:t}=q();return t?s.createElement("a",{"aria-disabled":!0,style:{pointerEvents:"none"}},e):s.createElement(Pe.Consumer,null,({setCookieConsentStatus:o,setModalStatus:n})=>s.createElement("a",{onClick:()=>{o(Ye.REQUEST),n(Te.SETTINGS)},"data-testid":"revoke-cc-button"},e))},Ku=({options:e,children:t})=>{const o=Ae();if(gt(e))return s.createElement(Hu,{options:e},t);if(Et(e)){const n=Object.values(o).find(r=>r.beckyId===e.beckyId);return s.createElement(Ft,{blockId:e.blockId||"",page:n},t)}if(_t(e))return s.createElement(Uu,{options:e},t);if(rt(e)){const n=At(e.value);return s.createElement("a",{href:n,target:e.target},t)}return Mo(e)?s.createElement(Vu,null,t):s.createElement("a",{"aria-disabled":!0,style:{pointerEvents:"none"}},t)},Xn=({id:e,identity:t,formName:o})=>{var E,b,v;const n=P(),{entity:r,computed:i,css:a}=xa({id:e,identity:t},n,C),l=((E=r.refs)==null?void 0:E.filter(Ro))||[],c=l[0],{css:d}=Lo(c,n,C),u=d.textAlign||ka((v=(b=i.box)==null?void 0:b.alignment)==null?void 0:v.horizontal),[p]=ft(r,C),{leadGenItem:h}=bn(C),f=()=>{switch(r.parent.identity){case"form":return s.createElement(s.Fragment,null,l?l.map(T=>s.createElement(wt,{key:T.id,parent:r,stylesFromParent:a,id:T.id})):null);case"lead-gen":return(h==null?void 0:h.isSkippable)&&s.createElement(s.Fragment,null,l?l.map(T=>s.createElement(wt,{key:T.id,parent:r,stylesFromParent:a,id:T.id,formName:o})):null);default:return s.createElement(Ku,{options:(p==null?void 0:p.options)||{}},l?l.map(T=>s.createElement(wt,{key:T.id,parent:r,stylesFromParent:a,id:T.id})):null)}};return s.createElement(zu,{key:e,textAlign:u},f())},ps=({id:e,identity:t})=>{const o=P(),{css:n}=_a({id:e,identity:t},o,C);return s.createElement(Aa,{styles:n,dataFoleonId:e})};y.div`
	flex: 0 0 auto;
	line-height: 0;
	${({styles:e})=>e}
`;y.figure`
	display: inline-block;
	width: 100%;
	position: relative;
	box-sizing: border-box;
`;const ju=({id:e,identity:t})=>{var c,d;const o=P(),{entity:n,css:r,computed:i}=Na({id:e,identity:t},o,C),{isPrint:a}=q(),l=typeof window!="undefined"&&typeof window.location!="undefined"&&window.location.host.indexOf("viewer")!==0;return s.createElement(Ra,{styles:r,hasDynamicHeight:n.hasDynamicHeight,dataFoleonId:n.id},n.options.type==="website"?s.createElement(La,{value:n.options.url||"",overflow:(d=(c=i.box)==null?void 0:c.overflow)==null?void 0:d.y,isPrint:a}):s.createElement(Ma,{value:n.options.value,isPrint:a,shouldExecute:l}))},Wu=m.exports.createContext(void 0),qu=()=>m.exports.useContext(Wu);function Yu({id:e,identity:t,validationMessages:o}){var d;const n=P(),{entity:r,css:i}=Oa({id:e,identity:t},n,C),a=r.refs.find(u=>u.identity==="form-label"),{entity:l,css:c}=Nt(a,n,C);return s.createElement(Rt,{validationMessages:o},s.createElement(Pa,{styles:i,label:l==null?void 0:l.value,additionalLabelStyles:c,name:r.name,id:r.id},(d=r==null?void 0:r.refs)==null?void 0:d.map(u=>{switch(u.identity){case"form-list-option":return s.createElement(Xu,{key:u.id,id:u.id,identity:u.identity,name:`${r.name}[]`,alertID:o?`alert-${e}`:""});default:return null}})))}function Xu(n){var r=n,{name:e,alertID:t}=r,o=Se(r,["name","alertID"]);const i=P(),{entity:a,css:l}=yn(o,i,C);return s.createElement(Da,{id:a.id,styles:l,initialChecked:a.isDefault,label:a.label||"",name:e,value:a.value,alertID:t})}function Qu({id:e,identity:t,validationMessages:o}){var f;const n=P(),{entity:r,css:i}=$a({id:e,identity:t},n,C),a=r.refs.find(E=>E.identity==="form-label"),{entity:l,css:c}=Nt(a,n,C),d=r.refs.find(E=>E.identity==="form-placeholder"),{entity:u,css:p}=Oo(d,n,C),h=`${r.name}-${e}`;return s.createElement(Rt,{validationMessages:o},s.createElement(Po,{htmlFor:h,styles:c},s.createElement(s.Fragment,null,(l==null?void 0:l.value)||"")),s.createElement(Ba,{id:r.id,htmlIdentifier:h,name:r.name,styles:i,value:(u==null?void 0:u.value)||"",additionalStyles:p,placeholder:(u==null?void 0:u.value)||"","aria-describedby":o?`alert-${e}`:""},(f=r==null?void 0:r.refs)==null?void 0:f.map(E=>{switch(E.identity){case"form-list-option":return s.createElement(Zu,{id:E.id,identity:E.identity,key:E.id});default:return null}})))}function Zu(t){var e=Se(t,[]);const o=P(),{entity:n}=yn(e,o,C);return s.createElement(Fa,{label:n.label||"",value:n.value})}function Ju({id:e,identity:t,validationMessages:o}){var d;const n=P(),{entity:r,css:i}=Ga({id:e,identity:t},n,C),a=r.refs.find(u=>u.identity==="form-label"),{entity:l,css:c}=Nt(a,n,C);return s.createElement(Rt,{validationMessages:o},s.createElement(za,{styles:i,label:l==null?void 0:l.value,additionalLabelStyles:c,name:r.name,id:r.id},(d=r==null?void 0:r.refs)==null?void 0:d.map(u=>{switch(u.identity){case"form-list-option":return s.createElement(ep,{key:u.id,id:u.id,identity:u.identity,name:r.name,alertID:o?`alert-${e}`:""});default:return null}})))}function ep(n){var r=n,{name:e,alertID:t}=r,o=Se(r,["name","alertID"]);const i=P(),{entity:a,css:l}=yn(o,i,C);return s.createElement(Ua,{id:a.id,styles:l,initialChecked:a.isDefault,label:a.label||"",name:e,value:a.value,alertID:t})}const ms=e=>{let t;try{t=window[e];const o="__storage_test__";return t.setItem(o,o),t.removeItem(o),!0}catch(o){return console.warn(o),o instanceof DOMException&&(o.code===22||o.code===1014||o.name==="QuotaExceededError"||o.name==="NS_ERROR_DOM_QUOTA_REACHED")&&t&&t.length!==0}},tp=()=>typeof window!="undefined"&&ms("sessionStorage")===!0&&window.sessionStorage.getItem("referrerParamsFromUrl")||"",np=({id:e,identity:t,validationMessages:o})=>{const n=P(),{entity:r,css:i}=Ha({id:e,identity:t},n,C),a=r.refs.find(b=>b.identity==="form-label"),{entity:l,css:c}=Nt(a,n,C),d=r.refs.find(b=>b.identity==="form-placeholder"),{entity:u,css:p}=Oo(d,n,C),h=yt(),f=()=>(u==null?void 0:u.styles[50].color)?p:xi(p,["color"]),E=r.size!=="line";return s.createElement(Rt,{validationMessages:o},s.createElement(Po,{htmlFor:r.id,styles:c},s.createElement(s.Fragment,null,(l==null?void 0:l.value)||"")),E?s.createElement(Va,{additionalStyles:f(),id:r.id,name:r.name,placeholder:(u==null?void 0:u.value)||"",size:r.size,styles:i,"aria-describedby":o?`alert-${e}`:""}):s.createElement(Ka,O(g({additionalStyles:f(),id:r.id,type:r.name==="hidden-referral"?"hidden":"text",name:r.name},h===ht.publish&&r.name==="hidden-referral"?{defaultValue:tp()}:{}),{placeholder:(u==null?void 0:u.value)||"",styles:i,"aria-describedby":o?`alert-${e}`:""})))},hs=e=>{const t=P(),{entity:o,css:n}=st(e,t,C),{name:r,submitEndpoint:i,successMessage:a,refs:l}=o,{reset:c}=je(),{beckyDocId:d}=Xt(),u=yt(),p=Fd(),h=qu(),f=Ie(C,d.toString()),E=tt(f.entity,"paragraph"),b=nt(E,{}),v=()=>{c(),Ze(d)},T=w=>!!w&&w.includes("/forms/api/submission/");return s.createElement(ja,{styles:n,name:r||"",paragraphStyles:b,headers:(!i||T(i))&&u===vn.preview?{Authorization:`Bearer ${h}`}:void 0,submitEndpoint:i&&!T(i)?i:`${p}/forms/api/submission/${u===vn.preview?"previewer":"published"}/foleon-doc/${d}/form/${o.id}/submit`,successMessage:a||"",isPartOfLeadGen:e.isPartOfLeadGen,grantDocAccess:v,dataFoleonId:o.id},l.map(w=>{if(w.identity==="form-text")return s.createElement(np,{id:w.id,identity:w.identity,key:w.id});if(w.identity==="form-list-radio")return s.createElement(Ju,{id:w.id,identity:w.identity,key:w.id});if(w.identity==="form-list-checkbox")return s.createElement(Yu,{id:w.id,identity:w.identity,key:w.id});if(w.identity==="form-list-dropdown")return s.createElement(Qu,{id:w.id,identity:w.identity,key:w.id});if(w.identity==="divider")return s.createElement(ps,{id:w.id,identity:w.identity,key:w.id});if(w.identity==="text")return s.createElement(Jt,{id:w.id,identity:w.identity,key:w.id});if(w.identity==="button")return s.createElement(Xn,{id:w.id,identity:w.identity,key:w.id})}))},op=e=>{const t=P(),{entity:o,css:n}=Wa(e,t,C),{isScreenshot:r,isPrint:i}=q();return s.createElement(qa,O(g({},o),{styles:n,disableCountingAnimation:r||i}))},rp=e=>{const t=P(),{entity:o,css:n}=Ya(e,t,C),{isScreenshot:r,isPrint:i}=q();return s.createElement(Xa,O(g({},o),{styles:n,disableCountingAnimation:r||i}))},sp=e=>{const t=P(),{entity:o,css:n}=Qa(e,t,C),{isScreenshot:r,isPrint:i}=q();return s.createElement(Za,O(g({},o),{styles:n,disableCountingAnimation:r||i}))},ip=({id:e,identity:t,landingPageUrl:o})=>{const n=P(),{doc:r}=W(),{css:i}=st({id:e,identity:t},n,C),{reset:a}=je(),l=()=>{a(),Ze(r.id)};return s.createElement(Do,{id:e,styles:i,isPartOfLeadGen:!0,landingPageUrl:o,grantDocAccess:l})},ap=({id:e,identity:t,hubId:o,formId:n,hublet:r})=>{const i=P(),{beckyDocId:a}=Xt(),{css:l}=st({id:e,identity:t},i,C),{reset:c}=je(),d=()=>{c(),Ze(a)};return s.createElement($o,{id:e,hubId:o,formId:n,styles:l,isPartOfLeadGen:!0,grantDocAccess:d,hublet:r})},lp=({id:e,identity:t,munchkinId:o,baseUrl:n,formId:r})=>{const i=P(),{doc:a}=W(),{css:l}=st({id:e,identity:t},i,C),{reset:c}=je(),d=()=>{c(),Ze(a.id)};return s.createElement(Bo,{id:e,munchkinId:o,formId:r,baseUrl:n,styles:l,isPartOfLeadGen:!0,grantDocAccess:d})},cp=({id:e,identity:t,formLink:o})=>{const n=P(),{doc:r}=W(),{css:i}=st({id:e,identity:t},n,C),{reset:a}=je(),l=()=>{a(),Ze(r.id)};return s.createElement(Fo,{id:e,formLink:o,styles:i,isPartOfLeadGen:!0,grantDocAccess:l})},dp=({id:e,identity:t})=>{const o=P(),{beckyDocId:n}=Xt(),{reset:r}=je(),{entity:i}=Ja({id:e,identity:t},o,C),{authUrl:a}=el(C),{setConnection:l}=cr(),{connections:c}=xn(),d=()=>{r(),Ze(n)},u=i.value!=="enabled";return s.createElement(tl,{authUrl:a||"",disabled:u,thirdPartyKey:i.thirdPartyKey,connections:c,setConnection:l,grantDocAccess:d})},up=({id:e,identity:t})=>{var I;const o=P(),{css:n,entity:r}=nl({id:e,identity:t},o,C),{doc:i}=W(),{shouldRenderOr:a}=bn(C),l=Ie(C,i.id.toString()),c=tt(l.entity,"paragraph"),d=nt(c,{}),{project:u}=W(),p=(I=u.hubspot_code)==null?void 0:I.hublet,h=ol(r,rl.identity),{entity:f}=st(h,o,C),E=i.options.lead_gen_gate,b=i.options.lead_gen_gate_data,v=E===it.FOLEON?f==null?void 0:f.name:E,T=(S,A)=>s.createElement(ip,{key:S,id:S,identity:A,landingPageUrl:b.eloqua_landing_page_url}),w=(S,A)=>s.createElement(ap,{key:S,id:S,identity:A,hubId:b.hubspot_hub_id,formId:b.hubspot_form_id,hublet:p}),_=(S,A)=>s.createElement(lp,{key:S,id:S,identity:A,munchkinId:b.marketo_munchkin_id,baseUrl:b.marketo_base_url,formId:b.marketo_form_id}),k=(S,A)=>s.createElement(cp,{key:S,id:S,identity:A,formLink:b.sfp_form_link}),x=(S,A)=>s.createElement(s.Fragment,{key:S},a&&s.createElement(il,{styles:d}),s.createElement(hs,{id:S,identity:A,isPartOfLeadGen:!0}));return s.createElement(sl,O(g({},r),{styles:n,leadGenGate:E}),r&&Array.isArray(r.refs)?r.refs.map(({id:S,identity:A})=>{if(A==="block")return s.createElement(en,{key:S,id:S,identity:A});if(A==="button")return s.createElement(Xn,{key:S,id:S,identity:A,formName:v||""});if(A==="form")switch(E){case it.ELOQUA:return T(S,A);case it.HUBSPOT:return w(S,A);case it.MARKETO:return _(S,A);case it.SFP:return k(S,A);default:return x(S,A)}if(A==="social-login"&&E===it.FOLEON)return s.createElement(dp,{key:S,id:S,identity:A});if(A==="text")return s.createElement(Jt,{key:S,id:S,identity:A})}):null)},pp=e=>{const t=P(),{entity:o,css:n}=al(e,t,C);return s.createElement(Do,O(g({},o),{styles:n,isPartOfLeadGen:!1}))},mp=e=>{var l,c;const t=P(),{entity:o,css:n}=ll(e,t,C),{project:r}=W(),i=((l=r.hubspot_code)==null?void 0:l.hub_id)||"",a=(c=r.hubspot_code)==null?void 0:c.hublet;return s.createElement($o,O(g({},o),{styles:n,isPartOfLeadGen:!1,hubId:i,hublet:a}))},hp=e=>{var a;const t=P(),{entity:o,css:n}=cl(e,t,C),{project:r}=W(),i=((a=r.marketo_code)==null?void 0:a.munchkin_id)||"";return s.createElement(Bo,O(g({},o),{styles:n,isPartOfLeadGen:!1,munchkinId:i}))},fp=e=>{const t=P(),{entity:o,css:n}=dl(e,t,C);return s.createElement(Fo,O(g({},o),{styles:n,isPartOfLeadGen:!1}))},gp=({id:e,identity:t})=>{const o=P(),{entity:n,css:r}=ul({id:e,identity:t},o,C),{doc:i}=W(),a=Ie(C,i.id.toString());return s.createElement(pl,{items:a.entity.socialOptions,url:n.url||"",styles:r,cssIdentifiers:ml,dataFoleonId:n.id})},Ep=({headerCellScope:e,id:t,identity:o,isHeaderCell:n})=>{var d,u,p,h,f;const r=P(),{entity:i,tableEntity:a,css:l}=hl({id:t,identity:o},r,C),c=n?(u=(d=a==null?void 0:a.options.header)==null?void 0:d.styles[50].background)==null?void 0:u.color:(h=(p=a==null?void 0:a.options.data)==null?void 0:p.styles[50].background)==null?void 0:h.color;return s.createElement(fl,{backgroundColor:c,headerCellScope:e,isHeaderCell:n,styles:l},(f=i==null?void 0:i.refs)==null?void 0:f.map(E=>E.identity==="text"?s.createElement(Jt,{id:E.id,identity:E.identity,key:E.id}):null))},bp=({id:e,identity:t,numberOfRows:o,rowIndex:n,headerPosition:r})=>{var l;const i=P(),{entity:a}=gl({id:e,identity:t},i,C);return s.createElement("tr",null,(l=a==null?void 0:a.refs)==null?void 0:l.map((c,d)=>c.identity==="table-cell"?s.createElement(Ep,{id:c.id,identity:c.identity,isHeaderCell:El(r,n,o,a.refs.length,d),key:c.id,headerCellScope:bl(r,n)}):null))},yp=({id:e,identity:t})=>{const o=P(),{entity:n,css:r,columnCount:i}=yl({id:e,identity:t},o,C),a=n.options.header.position;return s.createElement(vl,{entity:n,styles:r,columnCount:i},n.refs.map((l,c)=>l.identity==="table-row"?s.createElement(bp,{id:l.id,identity:l.identity,key:l.id,numberOfRows:n.refs.length,rowIndex:c,headerPosition:a}):null))},Qn={YOUTUBE:"youtube",VIMEO:"vimeo"},vp="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI1MXB4IiBoZWlnaHQ9IjM2cHgiIHZpZXdCb3g9IjAgMCA1MSAzNiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4gICAgICAgIDx0aXRsZT5QbGF5YnV0dG9uPC90aXRsZT4gICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+ICAgIDxnIGlkPSJQbGF5YnV0dG9uIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxwYXRoIGQ9Ik00OS44ODk5OTc4LDUuODA0OTk5ODUgQzQ5LjMwNDk5ODUsMy42MDc0OTk2MyA0OC4wMjI0OTkzLDEuNzQ3NDk5OTMgNDUuODI0OTk4NSwxLjE2MjQ5OTc4IEM0MS44NDI1MDA3LDAuMDk3NDk5OTk2MyAyNS41LDAgMjUuNSwwIEMyNS41LDAgOS4xNTc1LDAuMDk3NDk5OTk2MyA1LjE3NTAwMDA3LDEuMTYyNDk5OTYgQzIuOTc3NSwxLjc0NzQ5OTkzIDEuNzAyNSwzLjYwNzQ5OTkzIDEuMTEwMDAwMDIsNS44MDQ5OTk4NSBDMC4wNDUwMDAwMDE1LDkuNzg3NTAwMTUgMCwxOCAwLDE4IEMwLDE4IDAuMDQ1MDAwMDAxNSwyNi4yMTI1MDA4IDEuMTEwMDAwMDIsMzAuMTk1MDAxNSBDMS42OTUsMzIuMzkyNTAxNSAyLjk3NzUsMzQuMjUyNTAxNSA1LjE3NTAwMDA3LDM0LjgzNzUwMDggQzkuMTU3NSwzNS45MDI0OTkzIDI1LjUsMzYgMjUuNSwzNiBDMjUuNSwzNiA0MS44NDI1MDA3LDM1LjkwMjQ5OTMgNDUuODI0OTk4NSwzNC44Mzc1MDA4IEM0OC4wMjI0OTkzLDM0LjI1MjUwMTUgNDkuMzA0OTk4NSwzMi4zOTI1MDE1IDQ5Ljg4OTk5NzgsMzAuMTk1MDAxNSBDNTAuOTU1MDAxNSwyNi4yMTI1MDA4IDUxLDE4IDUxLDE4IEM1MSwxOCA1MC45NTUwMDE1LDkuNzg3NTAwMTUgNDkuODg5OTk3OCw1LjgwNDk5OTg1IFoiIGlkPSJGaWxsLTM3IiBmaWxsLW9wYWNpdHk9IjAuOCIgZmlsbD0iIzIxMjEyMSI+PC9wYXRoPiAgICAgICAgPHBvbHlsaW5lIGlkPSJGaWxsLTM5IiBmaWxsPSIjRkZGRkZGIiBwb2ludHM9IjMzIDE3LjUgMjAgMTAgMjAgMjUiPjwvcG9seWxpbmU+ICAgIDwvZz48L3N2Zz4=",Tp=y.div`
	pointer-events: none;
	position: absolute;
	inset: 0px;

	& img {
		position: absolute;
		right: 10px;
		bottom: 10px;
		border: 3px solid white;
		width: 20%;
	}

	& img.play-button {
		left: 50%;
		bottom: 50%;
		right: auto;
		border: none;
		margin-left: -10%;
		margin-bottom: -10%;
	}
`,wp=({url:e,fallbackImageUrl:t,css:o,renderingMode:n})=>s.createElement(Go,{styles:o},s.createElement(zo,null,s.createElement("a",{href:e,target:"_blank","data-foleon-element":"image",rel:"noreferrer"},s.createElement(Tl,{url:{href:t},isFallbackImage:!0})),n===bt.Print&&s.createElement(Tp,null,s.createElement("img",{alt:"video-overlay",src:vp,className:"play-button"}),s.createElement(ki,{value:e})))),{send:Ip,TRACKING_CATEGORY:Cp,TRACKING_EVENT:Re}=Oe.events,Sp=Jc("marketing")(Ho),xp=({height:e,id:t,shouldWrapWithCookieConsumer:o,url:n})=>{const r=m.exports.useCallback(i=>{Ip(Cp.VIDEOS,i,t)},[t]);return o?s.createElement(Sp,{url:n,isInLightMode:!1,shouldPlayInline:!1,cssIdentifier:Uo.VideoWrapper,onBuffer:()=>r(Re.BUFFERING),onEnded:()=>r(Re.ENDED),onError:()=>r(Re.BUFFERING),onPause:()=>r(Re.PAUSED),onPlay:()=>r(Re.PLAYING),height:e}):s.createElement(Ho,{url:n,isInLightMode:!1,shouldPlayInline:!1,cssIdentifier:Uo.VideoWrapper,onBuffer:()=>r(Re.BUFFERING),onEnded:()=>r(Re.ENDED),onError:()=>r(Re.BUFFERING),onPause:()=>r(Re.PAUSED),onPlay:()=>r(Re.PLAYING),height:e})},kp=({id:e,identity:t})=>{var v,T,w;const o=P(),{entity:n,css:r}=Ao({id:e,identity:t},o,C),{getVideoAsset:i}=ot(),a=i(n.assetRef);if(!a||!a.url)return null;const{_embedded:l,defaultFallbackImage:c="",source:d,url:u}=a,{isScreenshot:p,isPrint:h}=q();let f=((w=(T=(v=l==null?void 0:l.image)==null?void 0:v._links)==null?void 0:T.image)==null?void 0:w.href)||c;c&&d===Qn.YOUTUBE&&(f=f==null?void 0:f.replace("maxresdefault","hqdefault"));const E=d===Qn.YOUTUBE||d===Qn.VIMEO,b=n.provider==="custom"?"inherit":"unset";return p||h?s.createElement(wp,{renderingMode:p?bt.Screenshot:bt.Print,url:u,fallbackImageUrl:f,css:r}):s.createElement(Go,{styles:r},s.createElement(zo,{dataFoleonId:n.id},s.createElement(xp,{height:b,id:n.id,shouldWrapWithCookieConsumer:E,url:u})))},_p=({children:e,columnScrollEntity:t})=>{const o=P(),{css:n}=Sl(t||null,o,C);return e({columnScrollStyles:n})},Ap=({id:e,identity:t})=>{const o=P(),{entity:n,css:r}=wl({id:e,identity:t},o,C),{fullHeight:i,firstColumn:a,lastColumn:l}=Il(n,C,o),c=Vo(C),d=n.refs.find(u=>u.identity==="column-scroll");return s.createElement(_p,{columnScrollEntity:d||null},({columnScrollStyles:u})=>s.createElement(Cl,{barPosition:c==null?void 0:c.navigation.position,isFirstColumn:a,isFullHeight:i,isLastColumn:l,key:e,refSetters:[],scrollIndicatorStyles:u,styles:r,viewport:o,dataFoleonId:n.id},n&&Array.isArray(n.refs)?n.refs.map(({id:p,identity:h})=>h==="button"?s.createElement(Xn,{key:p,id:p,identity:h}):h==="divider"?s.createElement(ps,{key:p,id:p,identity:h}):h==="image"?s.createElement(Kn,{key:p,id:p,identity:h}):h==="text"?s.createElement(Jt,{key:p,id:p,identity:h}):h==="video"?s.createElement(kp,{key:p,id:p,identity:h}):h==="embed"?s.createElement(ju,{key:p,id:p,identity:h}):h==="social"?s.createElement(gp,{key:p,id:p,identity:h}):h==="form"?s.createElement(hs,{key:p,id:p,identity:h}):h==="lead-gen"?s.createElement(up,{key:p,id:p,identity:h}):h==="infographic-counter-number"?s.createElement(sp,{key:p,id:p,identity:h}):h==="infographic-counter-line"?s.createElement(rp,{key:p,id:p,identity:h}):h==="infographic-counter-circle"?s.createElement(op,{key:p,id:p,identity:h}):h==="map-form-eloqua"?s.createElement(pp,{key:p,id:p,identity:h}):h==="map-form-hubspot"?s.createElement(mp,{key:p,id:p,identity:h}):h==="map-form-marketo"?s.createElement(hp,{key:p,id:p,identity:h}):h==="map-form-sfp"?s.createElement(fp,{key:p,id:p,identity:h}):h==="table"?s.createElement(yp,{key:p,id:p,identity:h}):null):null))},Np=({id:e,identity:t})=>{const o=P(),{entity:n,css:r}=xl({id:e,identity:t},o,C),i=m.exports.useMemo(()=>n?n.refs.filter(l=>l.identity==="column").map(l=>s.createElement(Ap,{id:l.id,key:l.id,identity:l.identity})):[],[n]);return s.createElement(kl,{styles:r,key:e},i)},en=({id:e,identity:t,isLeadGen:o,children:n,hasEnabledCommentsBar:r})=>{const i=P(),a=q(),{entity:l,css:c}=_l({id:e,identity:t},i,C,void 0,a),d=Al(l,!0,i,C),[u,p]=m.exports.useState(null),{setBlockReference:h}=Nd(),{isTransitioning:f}=Bt();m.exports.useEffect(()=>{u&&h(u)},[u,h]),l.refs.sort((b,v)=>b.identity>v.identity?1:-1);const E=l.customIdentifier||`block-${l.id}`;return s.createElement(Nl,{blockId:E,isTransitioning:o?!1:f,key:e,refSetters:[p],styles:c,triggerContentAnimationOnce:l.triggerContentAnimationOnce,hasEnabledCommentsBar:r},l.refs.map(({id:b,identity:v})=>v==="background"&&d&&d.id===b?s.createElement($d,{key:b,id:b,identity:v}):v==="row"?s.createElement(s.Fragment,{key:b},n,s.createElement(Np,{id:b,identity:v})):v==="hotspot"&&d?s.createElement(du,{key:b,hotspotRef:{id:b,identity:v},backgroundRef:{id:d.id,identity:d.identity},container:u}):null))},Rp=({id:e,name:t,isTemplateMode:o})=>{var u;const n=P(),{entity:r,css:i,computed:a}=Ko({id:e,identity:gn.identity},n,C),{isPrint:l}=q(),c=p=>s.createElement(s.Fragment,null,p&&Array.isArray(p.refs)?p.refs.map(({id:h,identity:f})=>f==="block"?s.createElement(en,{key:h,id:h,identity:f},l?s.createElement(Ht,{overlayName:t}):s.createElement(s.Fragment,null)):null):null),d=s.createElement(jo,{key:e,styles:O(g({},i),{position:"relative"})},c(r));return o?s.createElement("div",{style:{backgroundColor:(u=a.container)==null?void 0:u.backgroundColor}},d):d},Lp=y.div`
	left: 0;
	top: 0;
	width: 100%;
`,Mp=({children:e,pathname:t})=>s.createElement(Lp,{className:"page-wrapper","data-pathname":t},e),Op=({id:e,identity:t})=>{const o=P(),{entity:n,css:r}=Rl({id:e,identity:t},o,C),{alignment:i,alwaysVisible:a,iconSettings:l}=Ll(n,o,C),c=Vo(C),{entity:d}=Wo(n.parent,o,C),u=d.refs.filter(w=>w.identity==="block").length,{currentPage:p}=Ke(),{pages:h}=W(),f=h==null?void 0:h.find(({beckyId:w,id:_})=>(w||_)===(p==null?void 0:p.beckyId)),E=f&&f.options?typeof f.options.page_scroll_button=="undefined"||f.options.page_scroll_button:!1,{isTransitioning:b}=Bt(),{isScreenshot:v,isPrint:T}=q();return v||T?null:s.createElement(Ml,{alignment:i,barPosition:c==null?void 0:c.navigation.position,iconSettings:l,isAlwaysVisible:a,isShown:E,isTransitioning:b,numberOfBlocks:u,styles:r,viewport:o},n&&Array.isArray(n.refs)?n.refs.map(({id:w,identity:_})=>{if(_==="image")return s.createElement(Kn,{id:w,identity:_,key:w})}):null)},Pp=Ol(({id:e,refs:t,hasEnabledCommentsBar:o})=>s.createElement($l,{id:e,scrollTracking:!0,hasEnabledCommentsBar:o},t.map(({id:n,identity:r})=>r==="block"?s.createElement(en,{id:n,identity:r,key:n,hasEnabledCommentsBar:o}):r==="page-scroll"?s.createElement(Op,{id:n,identity:r,key:n}):null))),fs=m.exports.memo(({id:e,hasEnabledCommentsBar:t})=>{const o=P(),{entity:n}=Wo({id:e,identity:fn.identity},o,C),r=m.exports.useMemo(()=>n.refs.filter(a=>Pl(a)||Dl(a)),[n.refs]),{isTransitioning:i}=Bt();return s.createElement(s.Fragment,null,s.createElement(Pp,{id:e,refs:r,isTransitioning:i,hasEnabledCommentsBar:t}))},(e,t)=>e.id===t.id),Dp=e=>{const t=m.exports.useRef(!1),o=m.exports.useRef(!1),{isScreenshot:n,isPrint:r}=q(),i=()=>e!==0,a=()=>(o.current=!0,o.current),l=()=>(o.current=!1,o.current),c=h=>h===e,d=h=>h>=e;return{isCurrentPageNumberBehindThreshold:d,handleLock:h=>h?!(n||r)&&i()&&d(h)?a():l():!1,shouldRouteChangesBeBlocked:()=>t.current?!1:o.current,isLeadGen:c}},$p=()=>{var p;const{auth:e,currentPage:t,overlaysMeta:o}=Ke(),{doc:n}=W(),r=t&&t.pageNumber?t.pageNumber:0,i=_i(!Qe&&r),a=((p=e==null?void 0:e.leadGen)==null?void 0:p.enabled)&&e.leadGen.pageNumber||0,l=o.find(h=>h.value==="im_whitepaper_reserved"||h.value==="im_whitepaper_overlay"),{handleLock:c}=Dp(a),{setGating:d,setLeadGenId:u}=je();return m.exports.useEffect(()=>{!Qe&&l&&r!==i&&!mu(n.id)&&(c(r)?(d(!0),u(l.id)):d(!1))},[r,i,n.id,l,c,d,u]),null},Bp={overlayContainer:"overlay-container"},gs="modal-wrapper",Fp=()=>document.getElementById(gs);function Gp(e){var n,r;const t=(n=e.container)==null?void 0:n.backgroundColor,o=(r=e.container)==null?void 0:r.color;return{overlayBackgroundStyle:g({},t?{backgroundColor:t}:{}),overlayCloseIconStyle:g({},o?{color:o}:{})}}const Es=({leadGenId:e,isGating:t,overlayInfo:o,isOverlayOverLeadGen:n=!1})=>{const{closeOverlay:r}=Xr(),i=P(),a=t?e:o.id,{entity:l,css:c,computed:d}=Ko({id:a,identity:gn.identity},i,C),{leadGenItem:u}=bn(C),p=Bl(l),h=p&&u?u:void 0;h&&p&&u&&u.isSkippable&&(h.is_skippable=u.isSkippable);const f=!!h,{send:E,TRACKING_CATEGORY:b,TRACKING_EVENT:v}=Oe.events;return m.exports.useEffect(()=>{const T=location.search;return E(b.OVERLAY,v.OPENED,T),()=>{E(b.OVERLAY,v.CLOSED,T)}},[]),l?s.createElement(mn,g({isOpen:!0,contentLabel:Bp.overlayContainer,onRequestClose:r,overrideClose:n,whitePaperItem:h,parentSelector:Fp},Gp(d)),s.createElement(jo,{styles:c,isWhitePaper:f},l==null?void 0:l.refs.map(T=>s.createElement(en,{key:T.id,id:T.id,identity:T.identity,isLeadGen:f})))):null},zp={id:pn(),beckyId:0,identifier:"",name:""},Up=()=>{const{leadGenId:e,isGating:t}=Xt(),{currentOverlayIdentifier:o,getOverlayInfoFromIdentifier:n}=Xr(),r=n(o||""),i=()=>{if(r){const a=Boolean(t&&e);return s.createElement(Es,{leadGenId:pn(),overlayInfo:r,isGating:!1,isOverlayOverLeadGen:a})}else if(t&&e)return s.createElement(Es,{leadGenId:e,overlayInfo:zp,isGating:t});return null};return s.createElement("div",{id:gs},i())},Hp=({onLeftArrowPressed:e,onRightArrowPressed:t})=>{const o=n=>{const r=document.getElementById("expanded-menu");if(!r||r&&window.getComputedStyle(r).display!=="block")switch(n.key){case"Left":case"ArrowLeft":e();break;case"Right":case"ArrowRight":t();break}};return m.exports.useEffect(()=>(document.addEventListener("keydown",o,!1),()=>{document.removeEventListener("keydown",o,!1)}),[e,t]),null},Vp=y.span`
	display: flex;
	flex: 0 0 auto;
	width: 1px;
	height: 57px;
	background-color: rgba(0, 0, 0, 0.1);
`,bs=()=>s.createElement(Vp,{className:"im-bar-divider"}),Kp=y.div`
	display: grid;
	grid-template-columns: repeat(4, minmax(auto, ${({withGaps:e})=>e?"calc(25% - 16px)":"25%"}));
	${({withGaps:e})=>e&&"gap: 16px;"}

	> * {
		display: block;
		width: 100%;
	}

	@media (max-width: 1679px) {
		grid-template-columns: repeat(
			3,
			minmax(auto, ${({withGaps:e})=>e?"calc(33.333% - 16px)":"33.333%"})
		);
	}

	${ke.md} {
		grid-template-columns: repeat(2, minmax(auto, ${({withGaps:e})=>e?"calc(50% - 16px)":"50%"}));
	}

	${ke.sm} {
		grid-template-columns: minmax(auto, 100%);
	}
`,ys=({children:e,withGaps:t=!1})=>s.createElement(Kp,{withGaps:t},e),vs=Ee`
	position: absolute;
	right: 0;
	bottom: 0;
	left: 0;
	height: 40%;
	background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%);
`,jp=y.div`
	position: relative;
`,Wp=y.img`
	width: 100%;
`,qp=y.div`
	position: relative;
	padding-bottom: 67%;
	background-image: ${({thumbnail:e})=>e&&`url(${e})`};
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
`,Ts=y.div`
	${({absolute:e})=>e&&"position: absolute;"}

	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: ${({isActive:e})=>e?"transparent":"rgba(0, 0, 0, 0.6)"};
	transition: all 0.3s ease 0s;

	&:hover {
		background-color: transparent;

		& > .pages-index-footer {
			${vs}
		}
	}
`,Yp=y(o=>{var n=o,{component:e}=n,t=Se(n,["component"]);return s.cloneElement(e,t)})`
	&:focus {
		background-color: magenta;
		z-index: 9;

		& > div > div {
			background-color: transparent;

			& > .pages-index-footer {
				${vs}
			}
		}
	}
`,ws=({ariaCurrent:e,ariaLabel:t,children:o,currentPathname:n,foleonElement:r,onCellClicked:i,routePath:a,RouterLink:l,thumbnail:c,className:d})=>{const u=n===a;return a?l?s.createElement(Yp,{className:d,component:s.createElement(l,{ariaCurrent:e,ariaLabel:t,foleonElement:r,prefetch:!0,routeChangedCallback:i,to:a},typeof window!="undefined"&&s.createElement(qp,{thumbnail:c},s.createElement(Ts,{absolute:!0,isActive:u},o)))}):null:s.createElement(jp,null,s.createElement(Wp,{alt:t,src:c}),s.createElement(Ts,{isActive:u},o))},{send:Xp,TRACKING_CATEGORY:Qp,TRACKING_EVENT:Zp}=Ve.events,Jp=y.div`
	position: absolute;
	right: 0;
	bottom: 0;
	left: 0;
	padding: 10px;
	font-size: 15px;
	color: #fff;
`,e0=y.span`
	${({fontFamily:e})=>e&&`font-family: ${e.fontFamily};`}
	color: #fff;
	float: left;
	padding: 5px;
	margin: 0 10px 0 0;
	font-weight: bold;
	${({isActive:e})=>e&&`
			display: flex;
			height: 32px;
			padding: 10px;
			align-items: center;
			justify-content: center;
			border-radius: 16px;
			background-color: rgba(0, 0, 0, 0.6);
		`}
`,Is=e=>e==null||isNaN(e)?"no page number found":e.toString().length===1?`0${e}`:e,t0=({currentPathname:e="/",onCellClicked:t,themeParagraphFontFamily:o,pages:n,RouterLink:r,translator:i})=>{const{featuredImageUrls:a}=qo(n);return s.createElement(ys,null,n.map(l=>{var u,p;const c=l.identifier===e,d=(u=l.id)!=null?u:l.identifier;return s.createElement(ws,{"aria-checked":c,ariaCurrent:c,ariaLabel:`${i.translate("Page")} ${l.pageNumber}: ${l.name}`,currentPathname:e,foleonElement:"menu-item",key:`page-index-${d}`,className:"page-index-item",onCellClicked:()=>{Xp(Qp.PAGE_INDEX,Zp.CLICK,l.name),t&&t()},routePath:l.identifier,RouterLink:r,thumbnail:a[l.id]?Fl({dprControl:!0,imageUrl:a[l.id]||"",maxWidth:800}):(p=l.meta.screenshotLinks.original)==null?void 0:p.href},s.createElement("div",{className:"pages-index-footer"}),s.createElement(Jp,{className:"im-paragraph-theme"},s.createElement(e0,{className:"pageindex-pagenumber",fontFamily:o,isActive:c},Is(l.pageNumber)," ",l.name)))}))},n0=y.span`
	${({headingFourStyle:e})=>e&&`
		${e.fontFamily?`font-family: ${e.fontFamily};`:""}
		${e.fontSize?`font-size: ${e.fontSize};`:""}
		${e.fontStyle?`font-style: ${e.fontStyle};`:""}
		${e.fontWeight?`font-weight: ${e.fontWeight};`:""}
		${e.letterSpacing?`letter-spacing: ${e.letterSpacing};`:""}
		${e.lineHeight?`line-height: ${e.lineHeight};`:""}
		${e.textDecoration?`text-decoration: ${e.textDecoration};`:""}
	`}

	color: #fff;
	padding: 0 29px;
	position: absolute;
	z-index: 2;

	${ke.sm} {
		margin-top: -50px;
		top: unset;
		font-size: 40px;
		padding: 0 29px;
	}
`,o0=y.div`
	${({fontFamily:e})=>e&&`font-family: ${e};`}
	${({letterSpacing:e})=>e&&`letter-spacing: ${e};`}
	font-size: 20px;
	color: #000;
	background-color: #fff;
	z-index: 2;
`,r0=y.div`
	${({fontFamily:e})=>e&&`font-family: ${e};`}
	${({letterSpacing:e})=>e&&`letter-spacing: ${e};`}
	${({fontWeight:e})=>e&&`font-weight: ${e};`}
	font-size: 13px;
	color: #000;
	margin-top: 10px;
	-webkit-line-clamp: 3;
	line-clamp: 3;
	word-wrap: break-word;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-box-orient: vertical;
}
`,s0=y.div`
	display: flex;
	flex-direction: column;
	background-color: #ffffff;
	${({shadow:e})=>e&&"box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.08);"}
	overflow: hidden;
	font-weight: bold;
	height: auto;
`,i0=y.div`
	display: flex;
	align-items: end;
	overflow: hidden;
`,a0=y.div`
	padding: 20px 29px 20px 29px;
`,l0=y.div`
	height: 100%;
	width: 100%;
	position: relative;
	padding-bottom: 67%;
	background-image: ${({thumbnail:e})=>e&&`url(${e})`}; // keeping this as fallback
	background-image: ${({thumbnail:e})=>e&&`linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.75) 100%), url(${e});`};
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
	transition: transform 0.5s;
	&:hover {
		transform: scale(1.1);
	}
`,c0=y(o=>{var n=o,{component:e}=n,t=Se(n,["component"]);return s.cloneElement(e,t)})`
	width: 354px;
	flex-shrink: 0;
	visibility: visible !important;
	text-decoration: none !important;

	${({$barPosition:e})=>e===$.Bottom&&"align-self: end;"}

	${ke.sm} {
		width: auto;
		height: auto;
	}
`,Cs=({page:e,shadow:t,themeParagraphFontFamily:o,themeHeadingFourFontFamily:n,thumbnail:r})=>typeof window=="undefined"?null:s.createElement(s0,{shadow:t},s.createElement(i0,null,s.createElement(l0,{thumbnail:r}),s.createElement(n0,{className:"pageindex-pagenumber",headingFourStyle:n},Is(e.pageNumber))),s.createElement(a0,null,s.createElement(o0,{className:"im-paragraph-theme",fontFamily:o==null?void 0:o.fontFamily,letterSpacing:o==null?void 0:o.letterSpacing},e.name),!!e.options.page_description&&s.createElement(r0,{fontFamily:o==null?void 0:o.fontFamily,letterSpacing:o==null?void 0:o.letterSpacing,fontWeight:o==null?void 0:o.fontWeight},e.options.page_description))),Ss=({ariaCurrent:e,ariaLabel:t,className:o,foleonElement:n,onCellClicked:r,page:i,routePath:a,RouterLink:l,themeParagraphFontFamily:c,themeHeadingFourFontFamily:d,thumbnail:u,barPosition:p})=>s.createElement(c0,{$barPosition:p,className:o,component:l&&a?s.createElement(l,{ariaCurrent:e,ariaLabel:t,foleonElement:n,prefetch:!0,routeChangedCallback:r,to:a},s.createElement(Cs,{page:i,themeParagraphFontFamily:c,themeHeadingFourFontFamily:d,thumbnail:u})):s.createElement(Cs,{page:i,shadow:!0,themeParagraphFontFamily:c,themeHeadingFourFontFamily:d,thumbnail:u})}),d0=e=>s.createElement(ne,g({viewBox:"0 0 40 40"},e),s.createElement("g",null,s.createElement("path",{d:"m5 10h30v3.4h-30v-3.4z m0 11.6v-3.2h30v3.2h-30z m0 8.4v-3.4h30v3.4h-30z"}))),u0=e=>s.createElement(ne,g({viewBox:"0 0 40 40"},e),s.createElement("g",null,s.createElement("path",{d:"m33.4 18.4v3.2h-20.4l9.3 9.4-2.3 2.4-13.4-13.4 13.4-13.4 2.3 2.4-9.3 9.4h20.4z"}))),p0=e=>s.createElement(ne,g({viewBox:"0 0 40 40"},e),s.createElement("g",null,s.createElement("path",{d:"m20 6.6l13.4 13.4-13.4 13.4-2.3-2.4 9.3-9.4h-20.4v-3.2h20.4l-9.3-9.4z"}))),m0=e=>s.createElement(ne,g({viewBox:"0 0 40 40"},e),s.createElement("g",null,s.createElement("path",{d:"m37.7 9.1q-1.5 2.2-3.7 3.7 0.1 0.3 0.1 1 0 2.9-0.9 5.8t-2.6 5.5-4.1 4.7-5.7 3.3-7.2 1.2q-6.1 0-11.1-3.3 0.8 0.1 1.7 0.1 5 0 9-3-2.4-0.1-4.2-1.5t-2.6-3.5q0.8 0.1 1.4 0.1 1 0 1.9-0.3-2.5-0.5-4.1-2.5t-1.7-4.6v0q1.5 0.8 3.3 0.9-1.5-1-2.4-2.6t-0.8-3.4q0-2 0.9-3.7 2.7 3.4 6.6 5.4t8.3 2.2q-0.2-0.9-0.2-1.7 0-3 2.1-5.1t5.1-2.1q3.2 0 5.3 2.3 2.4-0.5 4.6-1.7-0.8 2.5-3.2 3.9 2.1-0.2 4.2-1.1z"}))),h0=e=>s.createElement(ne,g({viewBox:"0 0 40 40"},e),s.createElement("g",null,s.createElement("path",{d:"m29.4 0.3v5.9h-3.5q-1.9 0-2.6 0.8t-0.7 2.4v4.2h6.6l-0.9 6.6h-5.7v16.9h-6.8v-16.9h-5.7v-6.6h5.7v-4.9q0-4.1 2.3-6.4t6.2-2.3q3.3 0 5.1 0.3z"}))),f0=e=>s.createElement(ne,g({viewBox:"0 0 40 40"},e),s.createElement("g",null,s.createElement("path",{d:"m10.8 13.9v22.2h-7.4v-22.1h7.4z m0.5-6.8q0 1.7-1.2 2.7t-3 1.1h0q-1.9 0-3-1.1t-1.1-2.7q0-1.6 1.2-2.7t3-1.1 2.9 1.1 1.2 2.7z m26 16.3v12.7h-7.4v-11.9q0-2.3-0.9-3.6t-2.8-1.4q-1.4 0-2.3 0.8t-1.5 1.9q-0.2 0.7-0.2 1.8v12.4h-7.3q0-8.9 0-14.5t0-6.6l0-1h7.3v3.2h-0.1q0.5-0.7 1-1.3t1.2-1.1 2-1 2.5-0.4q3.8 0 6.2 2.6t2.3 7.4z"}))),g0=e=>s.createElement(ne,g({viewBox:"0 0 40 40"},e),s.createElement("g",null,s.createElement("path",{d:"m25 21.7q0.3 0 2.2 1t2 1.2q0 0.1 0 0.3 0 0.8-0.4 1.7-0.3 0.9-1.6 1.5t-2.2 0.6q-1.3 0-4.3-1.4-2.2-1-3.8-2.6t-3.3-4.2q-1.6-2.3-1.6-4.3v-0.2q0.1-2 1.7-3.5 0.5-0.5 1.2-0.5 0.1 0 0.4 0t0.4 0.1q0.4 0 0.6 0.1t0.3 0.6q0.2 0.5 0.8 2t0.5 1.7q0 0.5-0.8 1.3t-0.7 1q0 0.2 0.1 0.3 0.7 1.7 2.3 3.1 1.2 1.2 3.3 2.2 0.3 0.2 0.5 0.2 0.4 0 1.2-1.1t1.2-1.1z m-4.5 11.9q2.8 0 5.4-1.1t4.5-3 3-4.5 1.1-5.4-1.1-5.5-3-4.5-4.5-2.9-5.4-1.2-5.5 1.2-4.5 2.9-2.9 4.5-1.2 5.5q0 4.5 2.7 8.2l-1.7 5.2 5.4-1.8q3.5 2.4 7.7 2.4z m0-30.9q3.4 0 6.5 1.4t5.4 3.6 3.5 5.3 1.4 6.6-1.4 6.5-3.5 5.3-5.4 3.6-6.5 1.4q-4.4 0-8.2-2.1l-9.3 3 3-9.1q-2.4-3.9-2.4-8.6 0-3.5 1.4-6.6t3.6-5.3 5.3-3.6 6.6-1.4z"}))),E0=e=>s.createElement(ne,g({viewBox:"0 0 40 40"},e),s.createElement("g",null,s.createElement("path",{d:"m40 15.8v17.8q0 1.4-1 2.5t-2.6 1h-32.8q-1.5 0-2.6-1t-1-2.5v-17.8q1 1.1 2.3 2 8 5.5 11 7.7 1.3 0.9 2.1 1.5t2.1 1 2.5 0.6h0q1.2 0 2.5-0.6t2.1-1 2.1-1.5q3.7-2.8 11.1-7.7 1.2-0.9 2.2-1.9z m0-6.5q0 1.7-1.1 3.4t-2.7 2.7q-8.4 5.8-10.5 7.3-0.2 0.1-0.9 0.6t-1.2 0.9-1.2 0.7-1.3 0.6-1.1 0.2h0q-0.5 0-1.1-0.2t-1.3-0.6-1.2-0.7-1.2-0.9-0.9-0.6q-2.1-1.5-5.9-4.1t-4.6-3.2q-1.3-0.9-2.6-2.6t-1.2-3q0-1.8 0.9-2.9t2.7-1.2h32.8q1.5 0 2.5 1.1t1.1 2.5z"}))),b0=e=>s.createElement(ne,g({viewBox:"0 0 40 40"},e),s.createElement("g",null,s.createElement("path",{d:"m17.8 14.9q-0.2 0.4-5.7 10.2-0.6 1-1.5 1h-5.3q-0.5 0-0.7-0.4t0-0.8l5.7-10q0 0 0 0l-3.6-6.2q-0.3-0.5-0.1-0.9 0.2-0.3 0.8-0.3h5.3q0.9 0 1.5 1z m18-14.3q0.3 0.3 0 0.8l-11.8 20.8v0.1l7.5 13.7q0.3 0.4 0.1 0.8-0.3 0.3-0.8 0.3h-5.3q-0.9 0-1.5-1l-7.5-13.8 11.8-21.1q0.6-1 1.4-1h5.4q0.5 0 0.7 0.4z"}))),y0=e=>s.createElement(ne,g({viewBox:"0 0 40 40"},e),s.createElement("g",null,s.createElement("g",null,s.createElement("path",{d:`M39.9,11.8c-0.1-2.1-0.4-3.6-0.9-4.9c-0.5-1.3-1.2-2.4-2.3-3.5c-1.1-1.1-2.2-1.8-3.5-2.3
					c-1.3-0.5-2.7-0.8-4.9-0.9C26.1,0,25.4,0,20,0s-6.1,0-8.2,0.1C9.6,0.2,8.2,0.6,6.9,1C5.6,1.6,4.5,2.2,3.4,3.4
					C2.2,4.5,1.6,5.6,1,6.9c-0.5,1.3-0.8,2.7-0.9,4.9C0,13.9,0,14.6,0,20c0,5.4,0,6.1,0.1,8.2c0.1,2.1,0.4,3.6,0.9,4.9
					c0.5,1.3,1.2,2.4,2.3,3.5c1.1,1.1,2.2,1.8,3.5,2.3c1.3,0.5,2.7,0.8,4.9,0.9C13.9,40,14.6,40,20,40s6.1,0,8.2-0.1
					c2.1-0.1,3.6-0.4,4.9-0.9c1.3-0.5,2.4-1.2,3.5-2.3c1.1-1.1,1.8-2.2,2.3-3.5c0.5-1.3,0.8-2.7,0.9-4.9C40,26.1,40,25.4,40,20
					S40,13.9,39.9,11.8z M36.3,28.1c-0.1,1.9-0.4,3-0.7,3.7c-0.4,0.9-0.8,1.6-1.5,2.3c-0.7,0.7-1.4,1.1-2.3,1.5
					c-0.7,0.3-1.8,0.6-3.7,0.7c-2.1,0.1-2.7,0.1-8.1,0.1s-6,0-8.1-0.1c-1.9-0.1-3-0.4-3.7-0.7c-0.9-0.4-1.6-0.8-2.3-1.5
					c-0.7-0.7-1.1-1.4-1.5-2.3c-0.3-0.7-0.6-1.8-0.7-3.7C3.6,26,3.6,25.3,3.6,20s0-6,0.1-8.1c0.1-1.9,0.4-3,0.7-3.7
					c0.4-0.9,0.8-1.6,1.5-2.3c0.7-0.7,1.4-1.1,2.3-1.5c0.7-0.3,1.8-0.6,3.7-0.7C14,3.6,14.7,3.6,20,3.6s6,0,8.1,0.1
					c1.9,0.1,3,0.4,3.7,0.7c0.9,0.4,1.6,0.8,2.3,1.5c0.7,0.7,1.1,1.4,1.5,2.3c0.3,0.7,0.6,1.8,0.7,3.7c0.1,2.1,0.1,2.7,0.1,8.1
					S36.4,26,36.3,28.1z`}),s.createElement("path",{d:`M20,9.7C14.3,9.7,9.7,14.3,9.7,20c0,5.7,4.6,10.3,10.3,10.3S30.3,25.7,30.3,20C30.3,14.3,25.7,9.7,20,9.7z
					 M20,26.7c-3.7,0-6.7-3-6.7-6.7c0-3.7,3-6.7,6.7-6.7c3.7,0,6.7,3,6.7,6.7C26.7,23.7,23.7,26.7,20,26.7z`})),s.createElement("circle",{cx:"30.7",cy:"9.3",r:"2.4"}))),v0=e=>s.createElement(ne,g({viewBox:"0 0 40 40"},e),s.createElement("g",null,s.createElement("path",{d:"M20.9,0.2C10.1,0.2,4.6,7.9,4.6,14.4c0,3.9,1.5,7.4,4.7,8.7c0.5,0.2,1,0,1.1-0.6c0.1-0.4,0.4-1.4,0.5-1.8 c0.2-0.6,0.1-0.8-0.3-1.3C9.7,18.4,9.1,17,9.1,15c0-5.8,4.3-10.9,11.2-10.9c6.1,0,9.5,3.7,9.5,8.7c0,6.6-2.9,12.1-7.2,12.1 c-2.4,0-4.2-2-3.6-4.4c0.7-2.9,2-6,2-8.1c0-1.9-1-3.4-3.1-3.4c-2.4,0-4.4,2.5-4.4,5.9c0,2.2,0.7,3.6,0.7,3.6s-2.5,10.6-2.9,12.4 c-0.9,3.7-0.1,8.2-0.1,8.7c0,0.3,0.4,0.3,0.5,0.1c0.2-0.3,3.1-3.9,4.1-7.5c0.3-1,1.6-6.3,1.6-6.3c0.8,1.5,3.1,2.8,5.6,2.8 c7.3,0,12.3-6.7,12.3-15.6C35.4,6.5,29.6,0.2,20.9,0.2"}))),T0=e=>s.createElement(ne,g({viewBox:"0 0 40 40"},e),s.createElement("g",null,s.createElement("path",{d:"M19.9,38L19.9,38c0.1,0,0.2,0,0.3,0c2.2,0,3.6-1,5-2c1-0.7,2-1.4,3.2-1.6c0.6-0.1,1.1-0.1,1.7-0.1 c0.9,0,1.6,0.1,2.3,0.2c0.4,0.1,0.6,0.1,0.7,0.1h0c0.1,0,0.1,0,0.2-0.1c0.1-0.3,0.2-0.6,0.2-0.9c0.2-0.8,0.3-1.5,0.9-1.6 c3.9-0.6,4.6-1.4,4.7-1.7c0,0,0-0.1,0-0.1c0,0,0,0,0,0c-5.9-1-8.5-6.9-8.6-7.2l0,0c-0.4-0.8-0.5-1.5-0.2-2.1 c0.5-1.1,1.8-1.5,2.7-1.8c0.2-0.1,0.4-0.1,0.5-0.2c1.4-0.6,1.5-1.1,1.5-1.2c0-0.2-0.3-0.5-0.7-0.7l0,0C34.2,17,34.1,17,33.9,17 c-0.2,0-0.3,0-0.4,0.1c-0.7,0.4-1.4,0.5-2,0.6l0,0l0,0c-0.8,0-1.3-0.4-1.4-0.5L29.9,17l0-0.2c0-0.3,0-0.7,0.1-1.1l0-0.1 c0.2-2.6,0.4-5.9-0.4-7.7C27.1,2.4,21.9,2,20.4,2l-0.1,0l0,0c0,0-0.7,0-0.7,0c-1.5,0-6.7,0.4-9.1,5.9C9.6,9.7,9.8,13,10,15.6l0,0 c0,0.4,0,0.8,0.1,1.2l0,0.2L10,17.1c-0.1,0.1-0.6,0.5-1.5,0.5c-0.6,0-1.4-0.2-2.2-0.6C6.2,17,6.1,17,6,17c-0.5,0-1.1,0.3-1.2,0.7 c-0.1,0.3,0.3,0.8,1.5,1.3C6.5,19,6.7,19,6.9,19.1c0.9,0.3,2.3,0.7,2.7,1.8c0.3,0.6,0.2,1.3-0.2,2.1l0,0c-0.1,0.3-2.7,6.2-8.6,7.2 c0,0,0,0,0,0c0,0,0,0.1,0,0.1c0.1,0.2,0.7,1.1,4.7,1.7c0.6,0.1,0.7,0.8,0.9,1.6c0.1,0.3,0.1,0.6,0.2,0.9c0,0.1,0,0.1,0.2,0.1 c0.2,0,0.5-0.1,0.7-0.1c0.6-0.1,1.3-0.3,2.3-0.3c0.5,0,1.1,0,1.7,0.1c1.2,0.2,2.2,0.9,3.2,1.6c1.4,1,2.8,2,5,2 C19.8,38,19.8,38,19.9,38L19.9,38z"}),s.createElement("path",{fill:"#000",d:"M20.4,2c1.5,0,6.7,0.4,9.1,5.9c0.8,1.8,0.6,5.1,0.4,7.7c0,0.4-0.1,0.8-0.1,1.2l0,0.2l0.1,0.1 c0,0,0.5,0.5,1.4,0.5l0,0l0,0c0.6,0,1.3-0.2,2.1-0.6c0.1-0.1,0.3-0.1,0.4-0.1c0.2,0,0.4,0,0.5,0.1l0,0c0.4,0.1,0.7,0.4,0.7,0.6 c0,0.1-0.1,0.6-1.5,1.2c-0.1,0.1-0.3,0.1-0.5,0.2c-0.9,0.3-2.3,0.7-2.7,1.8c-0.3,0.6-0.2,1.3,0.2,2.2c0.2,0.4,2.8,6.2,8.6,7.2 c0,0,0,0.1,0,0.1c-0.1,0.2-0.7,1-4.6,1.6c-0.6,0.1-0.8,0.8-0.9,1.6c-0.1,0.3-0.1,0.6-0.2,0.9c0,0.1,0,0.1-0.1,0.1c0,0,0,0,0,0l0,0 c-0.2,0-0.4,0-0.7-0.1c-0.6-0.1-1.3-0.2-2.3-0.2c-0.5,0-1.1,0-1.7,0.1c-1.2,0.2-2.2,0.9-3.2,1.6c-1.4,1-2.8,2-5,2 c-0.1,0-0.2,0-0.3,0l0,0l0,0c-0.1,0-0.1,0-0.2,0c-2.2,0-3.6-1-5-2c-1-0.7-2-1.4-3.2-1.6c-0.6-0.1-1.1-0.1-1.7-0.1 c-1,0-1.7,0.1-2.3,0.3c-0.3,0.1-0.6,0.1-0.7,0.1c-0.1,0-0.1,0-0.2-0.1c-0.1-0.3-0.2-0.6-0.2-0.9c-0.2-0.8-0.3-1.5-0.9-1.6 c-3.9-0.6-4.5-1.4-4.6-1.6c0,0,0-0.1,0-0.1c5.8-1,8.4-6.8,8.6-7.2c0.4-0.8,0.5-1.5,0.2-2.2c-0.5-1.1-1.8-1.5-2.7-1.8 C6.7,19,6.5,19,6.4,18.9c-1.2-0.5-1.5-0.9-1.5-1.2C4.9,17.4,5.5,17,6,17c0.1,0,0.2,0,0.3,0.1c0.8,0.4,1.5,0.6,2.2,0.6 c1,0,1.5-0.5,1.5-0.5l0.1-0.1l0-0.2c0-0.4,0-0.8-0.1-1.2C9.9,13,9.7,9.7,10.5,7.9c2.4-5.5,7.6-5.9,9.1-5.9C19.6,2.1,20.3,2,20.4,2 C20.3,2,20.3,2,20.4,2 M20.4,1.2L20.4,1.2C20.3,1.2,20.3,1.2,20.4,1.2L20.4,1.2c-0.1,0-0.7,0-0.8,0c-1.6,0-7.2,0.5-9.9,6.4 C8.8,9.6,9,13,9.2,15.7c0,0.3,0,0.7,0.1,1c-0.1,0.1-0.4,0.2-0.8,0.2c-0.5,0-1.1-0.2-1.8-0.5c-0.2-0.1-0.4-0.1-0.6-0.1 c-0.8,0-1.8,0.5-1.9,1.3c-0.1,0.6,0.1,1.4,2,2.1c0.2,0.1,0.4,0.1,0.6,0.2c0.8,0.2,1.9,0.6,2.2,1.3C9,21.6,9,22.1,8.7,22.7 c0,0,0,0,0,0c-0.1,0.2-2.5,5.8-8,6.7C0.3,29.5,0,29.9,0,30.3c0,0.1,0,0.3,0.1,0.4c0.4,1,2.1,1.7,5.3,2.1c0.1,0.1,0.2,0.6,0.3,0.9 c0.1,0.3,0.1,0.6,0.2,0.9c0.1,0.3,0.3,0.7,1,0.7c0.3,0,0.6-0.1,0.9-0.1C8.3,35.2,9,35,9.9,35c0.5,0,1,0,1.5,0.1 c1,0.2,1.9,0.8,2.9,1.5c1.4,1,3,2.1,5.5,2.1c0.1,0,0.1,0,0.2,0c0.1,0,0.2,0,0.3,0c2.5,0,4.1-1.1,5.5-2.1c1-0.7,1.9-1.3,2.9-1.5 c0.5-0.1,1-0.1,1.5-0.1c0.9,0,1.5,0.1,2.1,0.2c0.4,0.1,0.7,0.1,0.9,0.1l0,0h0c0.5,0,0.8-0.2,0.9-0.7c0.1-0.3,0.2-0.6,0.2-0.9 c0.1-0.3,0.2-0.8,0.3-0.9c3.1-0.5,4.9-1.2,5.3-2.1c0.1-0.1,0.1-0.2,0.1-0.4c0-0.4-0.3-0.8-0.7-0.9c-5.4-0.9-7.9-6.5-8-6.7 c0,0,0,0,0,0c-0.3-0.6-0.4-1.1-0.2-1.5c0.3-0.7,1.5-1.1,2.2-1.3c0.2-0.1,0.4-0.1,0.6-0.2c1.4-0.5,2-1.2,2-2c0-0.6-0.5-1.1-1.2-1.4 l0,0c-0.2-0.1-0.5-0.2-0.8-0.2c-0.2,0-0.5,0-0.8,0.2c-0.6,0.3-1.2,0.5-1.7,0.5c-0.3,0-0.5-0.1-0.7-0.2c0-0.3,0-0.6,0.1-0.9l0-0.1 c0.2-2.7,0.4-6.1-0.5-8.1C27.6,1.7,22,1.2,20.4,1.2L20.4,1.2z"}))),w0=e=>s.createElement(ne,g({viewBox:"0 0 40 40"},e),s.createElement("g",null,s.createElement("path",{d:"m37.23077,16.46432a16.34356,16.34356 0 0 1 -9.55203,-3.05382l0,13.90518a12.64708,12.64708 0 1 1 -10.91049,-12.53193l0,6.99382a5.80575,5.80575 0 1 0 4.06372,5.53811l0,-27.18325l6.84677,0a9.42832,9.42832 0 0 0 0.14472,1.72492l0,0a9.50612,9.50612 0 0 0 4.19443,6.24146a9.44777,9.44777 0 0 0 5.21288,1.56698l0,6.79854z"}))),I0=e=>s.createElement(ne,g({viewBox:"0 0 40 40"},e),s.createElement("g",null,s.createElement("path",{d:"m24.7 27.8v4.7q0 1.5-0.9 1.5-0.5 0-1-0.5v-6.7q0.5-0.5 1-0.5 0.9 0 0.9 1.5z m7.5 0v1h-2v-1q0-1.5 1-1.5t1 1.5z m-21.5-4.9h2.3v-2.1h-6.9v2.1h2.3v12.7h2.3v-12.7z m6.4 12.7h2v-11h-2v8.4q-0.7 1-1.3 1-0.4 0-0.5-0.5 0-0.1 0-0.8v-8.1h-2v8.7q0 1.1 0.2 1.7 0.3 0.8 1.3 0.8 1.1 0 2.3-1.4v1.2z m9.6-3.3v-4.4q0-1.6-0.2-2.2-0.4-1.2-1.6-1.2-1.1 0-2.1 1.2v-4.9h-2v14.8h2v-1q1 1.2 2.1 1.2 1.2 0 1.6-1.2 0.2-0.6 0.2-2.3z m7.5-0.2v-0.3h-2q0 1.1-0.1 1.4-0.1 0.8-0.9 0.8-1 0-1-1.6v-1.9h4v-2.3q0-1.8-0.6-2.6-0.9-1.1-2.4-1.1-1.5 0-2.4 1.1-0.6 0.8-0.6 2.6v3.9q0 1.7 0.7 2.5 0.8 1.2 2.4 1.2 1.6 0 2.4-1.2 0.4-0.6 0.5-1.2 0-0.2 0-1.3z m-13.6-20.4v-4.7q0-1.5-0.9-1.5t-1 1.5v4.7q0 1.6 1 1.6t0.9-1.6z m16.1 16.8q0 5.2-0.6 7.8-0.3 1.3-1.3 2.2t-2.3 1q-4.1 0.5-12.4 0.5t-12.3-0.5q-1.3-0.1-2.3-1t-1.3-2.2q-0.6-2.5-0.6-7.8 0-5.2 0.6-7.8 0.3-1.3 1.3-2.2t2.3-1.1q4.1-0.4 12.3-0.4t12.4 0.4q1.3 0.2 2.3 1.1t1.3 2.2q0.6 2.5 0.6 7.8z m-22.3-28.5h2.3l-2.7 8.9v6.1h-2.2v-6.1q-0.4-1.6-1.4-4.7-0.8-2.3-1.5-4.2h2.4l1.6 5.9z m8.3 7.4v3.9q0 1.8-0.7 2.7-0.8 1.1-2.3 1.1-1.5 0-2.4-1.1-0.6-0.9-0.6-2.7v-3.9q0-1.8 0.6-2.6 0.9-1.1 2.4-1.1 1.5 0 2.3 1.1 0.7 0.8 0.7 2.6z m7.4-3.6v11.2h-2v-1.3q-1.2 1.4-2.3 1.4-1 0-1.3-0.8-0.2-0.5-0.2-1.7v-8.8h2v8.2q0 0.7 0.1 0.8 0 0.5 0.4 0.5 0.6 0 1.3-1v-8.5h2z"}))),C0=e=>s.createElement(ne,g({viewBox:"0 0 40 40"},e),s.createElement("g",null,s.createElement("path",{d:"m38.1 11.6q-0.2 5.2-7.4 14.5-7.4 9.6-12.5 9.6-3.2 0-5.4-5.9-0.9-3.5-2.9-10.7-1.6-5.9-3.5-5.9-0.4 0-2.9 1.7l-1.7-2.2q0.6-0.4 2.4-2.1t2.9-2.6q3.5-3.1 5.4-3.2 2.1-0.2 3.4 1.2t1.8 4.5q1 6.4 1.5 8.4 1.2 5.5 2.7 5.5 1.1 0 3.4-3.6 2.3-3.6 2.5-5.5 0.3-3.1-2.5-3.1-1.2 0-2.7 0.6 2.7-8.8 10.3-8.5 5.6 0.2 5.2 7.3z"}))),S0=e=>s.createElement(ne,g({viewBox:"0 0 40 40"},e),s.createElement("g",null,s.createElement("path",{d:"M20,3.33A16.67,16.67,0,1,0,36.67,20,16.66,16.66,0,0,0,20,3.33Zm11.55,10H26.62a26.43,26.43,0,0,0-2.3-5.93A13.39,13.39,0,0,1,31.53,13.33ZM20,6.73a23.42,23.42,0,0,1,3.18,6.6H16.82A23.42,23.42,0,0,1,20,6.73ZM7.1,23.33a13.11,13.11,0,0,1,0-6.66h5.63A28.21,28.21,0,0,0,12.5,20a28.21,28.21,0,0,0,.23,3.33Zm1.37,3.34h4.91a26.43,26.43,0,0,0,2.3,5.93A13.34,13.34,0,0,1,8.47,26.67Zm4.91-13.34H8.47A13.34,13.34,0,0,1,15.68,7.4,26.43,26.43,0,0,0,13.38,13.33ZM20,33.27a23.42,23.42,0,0,1-3.18-6.6h6.36A23.42,23.42,0,0,1,20,33.27Zm3.9-9.94H16.1A24.52,24.52,0,0,1,15.83,20a24.26,24.26,0,0,1,.27-3.33h7.8A24.26,24.26,0,0,1,24.17,20,24.52,24.52,0,0,1,23.9,23.33Zm.42,9.27a26.43,26.43,0,0,0,2.3-5.93h4.91A13.39,13.39,0,0,1,24.32,32.6Zm2.95-9.27A28.21,28.21,0,0,0,27.5,20a28.21,28.21,0,0,0-.23-3.33H32.9a13.11,13.11,0,0,1,0,6.66Z"}))),x0=e=>s.createElement(ne,g({viewBox:"0 0 334 68"},e),s.createElement("g",null,s.createElement("path",{d:"M1,66.1 L15.9,66.1 C16.4,66.1 16.8,65.7 16.8,65.2 L16.8,46.3 C16.8,45.8 17.2,45.4 17.7,45.4 L32.8,45.4 C33.3,45.4 33.7,45 33.7,44.5 L33.7,31.7 C33.7,31.2 33.3,30.8 32.8,30.8 L17.7,30.8 C17.2,30.8 16.8,30.4 16.8,29.9 L16.8,17.6 C16.8,17.1 17.2,16.7 17.7,16.7 L39.1,16.7 C39.6,16.7 40,16.3 40,15.8 L40,3.1 C40,2.6 39.6,2.2 39.1,2.2 L1,2.2 C0.5,2.2 0.1,2.6 0.1,3.1 L0.1,65.5 C0,65.7 0.5,66.1 1,66.1 Z"}),s.createElement("path",{d:"M75.7,0.6 C59,0.6 42.6,11.8 42.6,34 C42.6,56.3 58.5,67.3 75.5,67.3 C95,67.3 108.5,53.6 108.5,34 C108.4,11.8 92.1,0.6 75.7,0.6 Z M75.5,51.4 C67.2,51.4 59.3,45.4 59.3,34 C59.3,22.3 67.3,16.6 75.6,16.6 C83.6,16.6 91.6,22.6 91.6,34 C91.6,45.4 83.5,51.4 75.5,51.4 Z",fillRule:"nonzero"}),s.createElement("path",{d:"M129.8,1.8 L114.9,1.8 C114.4,1.8 114,2.2 114,2.7 L114,65.1 C114,65.6 114.4,66 114.9,66 L153,66 C153.5,66 153.9,65.6 153.9,65.1 L153.9,52 C153.9,51.5 153.5,51.1 153,51.1 L131.7,51.1 C131.2,51.1 130.8,50.7 130.8,50.2 L130.8,2.9 C130.8,2.3 130.3,1.8 129.8,1.8 Z"}),s.createElement("path",{d:"M178.3,40.3 L195.5,40.3 C196,40.3 196.4,39.9 196.4,39.4 L196.4,26.6 C196.4,26.1 196,25.7 195.5,25.7 L178.3,25.7 C177.8,25.7 177.4,25.3 177.4,24.8 L177.4,17.5 C177.4,17 177.8,16.6 178.3,16.6 L199.7,16.6 C200.2,16.6 200.6,16.2 200.6,15.7 L200.6,3 C200.6,2.5 200.2,2.1 199.7,2.1 L161.5,2.1 C161,2.1 160.6,2.5 160.6,3 L160.6,65.4 C160.6,65.9 161,66.3 161.5,66.3 L200.6,66.3 C201.1,66.3 201.5,65.9 201.5,65.4 L201.5,52 C201.5,51.5 201.1,51.1 200.6,51.1 L178.3,51.1 C177.8,51.1 177.4,50.7 177.4,50.2 L177.4,41.6 C177.4,40.7 177.8,40.3 178.3,40.3 Z"}),s.createElement("path",{d:"M239.1,0.6 C222.4,0.6 206,11.8 206,34 C206,56.3 221.9,67.3 238.9,67.3 C258.4,67.3 271.9,53.6 271.9,34 C271.8,11.8 255.5,0.6 239.1,0.6 Z M238.9,51.4 C230.6,51.4 222.7,45.4 222.7,34 C222.7,22.3 230.7,16.6 239,16.6 C247,16.6 255,22.6 255,34 C255,45.4 246.9,51.4 238.9,51.4 Z",fillRule:"nonzero"}),s.createElement("path",{d:"M315.7,31.7 L284,1.8 C283.8,1.6 283.6,1.5 283.4,1.5 L279.5,1.5 C279,1.5 278.6,1.9 278.6,2.4 L278.6,65 C278.6,65.5 279,65.9 279.5,65.9 L294.4,65.9 C294.9,65.9 295.3,65.5 295.3,65 L295.3,35.1 C295.3,34.3 296.3,33.8 296.9,34.4 L328.8,65.9 C329,66.1 329.2,66.2 329.5,66.2 L333.1,66.2 C333.6,66.2 334,65.8 334,65.3 L334,2.8 C334,2.3 333.6,1.9 333.1,1.9 L318.2,1.9 C317.7,1.9 317.3,2.3 317.3,2.8 L317.3,31 C317.2,31.9 316.3,32.3 315.7,31.7 Z"}))),k0=e=>s.createElement(ne,g({viewBox:"0 0 100 100"},e),s.createElement("g",null,s.createElement("path",{d:"M82.5270099,18.9435134 L18.7856962,82.6877815 C18.1993406,83.2731404 17.2001014,82.8592298 17.2001014,82.0314085 L17.2001014,19.3929311 C17.2001014,18.2688796 18.1110829,17.3588849 19.2351002,17.3588849 L81.8706569,17.3588849 C82.698453,17.3588849 83.1113365,18.3591689 82.5270099,18.9435134 M0,1.72970012 L0,98.2713144 C0,99.2259465 0.775044382,100 1.72964748,100 L98.2703525,100 C99.2249556,100 100,99.2259465 100,98.2713144 L100,1.72970012 C100,0.774053484 99.2249556,0 98.2703525,0 L1.72964748,0 C0.775044382,0 0,0.774053484 0,1.72970012"})));var oe;(function(e){e.Next="Next",e.Previous="Previous"})(oe||(oe={}));const _0=y.div`
	display: flex;
	padding: 9px 8px 8px 9px;
	align-items: center;
	opacity: ${({disabled:e})=>e?"0.5":"1"};
	cursor: ${({disabled:e})=>e?"auto":"pointer"};
	pointer-events: ${({disabled:e})=>e?"none":"auto"};
	.open-modal & {
		opacity: 0;
	}
	.open-modal & * {
		pointer-events: none;
	}
	${({styles:e})=>e&&`
			border-radius: ${e.borderRadius};
			background-color: ${e.backgroundColor||"rgba(0, 0, 0, 0.2)"};
			color: ${e.color||"rgba(255, 255, 255, 1)"};
		`}
	${({hasLinearNavigation:e,disabled:t})=>e&&t&&`
			display: none;
		`}
`,A0=({children:e,disabled:t,foleonElement:o,handleClick:n,styles:r,hasLinearNavigation:i})=>s.createElement(_0,{className:"im-navigation-button","data-foleon-element":o,disabled:t,onClick:n,styles:r,hasLinearNavigation:i},e),{send:N0,TRACKING_CATEGORY:R0,TRACKING_EVENT:L0}=Ve.events,Zn=ce`
	from {
		opacity: 1;
	}
	to { 
		opacity: 0;
	}
`,M0=y.div`
	margin: 0;
	position: absolute;
	top: 50%;
	-ms-transform: translateY(-50%);
	transform: translateY(-50%);
	right: 40px;
	padding-right: 10px;
	width: 280px;
	display: none;
	&.show {
		display: block;
		-webkit-animation-name: fadeIn;
		-webkit-animation-duration: 1s;
		animation-name: fadeIn;
		animation-duration: 1s;
		animation-fill-mode: both;
	}
	&.hide {
		display: block;
		-webkit-animation-name: ${Zn};
		-webkit-animation-duration: 1s;
		animation-name: ${Zn};
		animation-duration: 1s;
		animation-fill-mode: both;
	}
	:&hover,&: focus-visible {
		display: block;
	}
`,dt={[oe.Next]:{borderRadius:"20px 20px 0px 0px",borderRadiusTop:"0px 2px 2px 0px",label:"Next",foleonElement:"next-page",forward:!0,Icon:p0},[oe.Previous]:{borderRadius:"0px 0px 20px 20px",borderRadiusTop:"2px 0px 0px 2px",label:"Previous",foleonElement:"previous-page",forward:!1,Icon:u0}},xs=({direction:e,disabled:t,handleClick:o,styles:n,hasLinearNavigation:r})=>s.createElement(A0,{disabled:t,foleonElement:dt[e].foleonElement,handleClick:o,styles:n,hasLinearNavigation:r},s.createElement(dt[e].Icon,{"aria-hidden":!0,size:24})),tn=({ariaLabel:e,barPosition:t,colors:o,direction:n,disabled:r,handleClick:i,hasLinearNavigation:a,isEditor:l,nextButtonDisabled:c,page:d,previousButtonDisabled:u,RouterLink:p,themeParagraphFontFamily:h,themeHeadingFourFontFamily:f,to:E})=>{var x;const{featuredImageUrl:b}=Gl(d==null?void 0:d.options.featured_image_url),v={backgroundColor:o.background,borderRadius:dt[n][t===$.Top?"borderRadiusTop":"borderRadius"],color:o.icon};a&&(v.borderRadius=u||c?"40px":dt[n].borderRadius);const T=I=>{const S=document.getElementById(`sneak-peak-${n}`);S&&I.animationName===Zn.getName()&&(S.style.display="none",S.removeEventListener("animationend",T))},w=()=>{const I=document.getElementById(`sneak-peak-${n}`);I&&(I.classList.add("hide"),I.classList.remove("show"),I.addEventListener("animationend",T))},_=()=>{const I=document.getElementById(`sneak-peak-${n}`),S=n===oe.Next?oe.Previous:oe.Next,A=document.getElementById(`sneak-peak-${S}`);A&&(A.style.display="none"),I&&(I.classList.remove("hide"),I.style.display="block",I.classList.add("show"))},k=!l&&a;return p?s.createElement(p,O(g({},k?{onBlur:w,onFocusCapture:_,onMouseEnter:_,onMouseLeave:w}:{}),{ariaLabel:e,disabled:r,handleClick:()=>N0(R0.NAVIGATION_BAR,L0.CLICK,dt[n].label),to:{pathname:E,state:{forward:dt[n].forward}},style:{pointerEvents:r?"none":"auto"}}),k&&d&&s.createElement(M0,{id:`sneak-peak-${n}`},s.createElement(Ss,{ariaLabel:`${zl.translate("Page")} ${d.pageNumber}: ${d.name}`,isActive:!1,page:d,themeParagraphFontFamily:h,themeHeadingFourFontFamily:f,thumbnail:b||((x=d.meta.screenshotLinks.original)==null?void 0:x.href)})),xs({direction:n,disabled:r,styles:v,hasLinearNavigation:a})):xs({direction:n,disabled:r,handleClick:i,styles:v,hasLinearNavigation:a})},O0=y.div`
	display: flex;
	position: ${({isEditor:e})=>e?"absolute":"fixed"};
	z-index: 10;
	right: 30px;
	bottom: ${({barPosition:e,isEditor:t,hasLinearNavigation:o})=>!o&&e===$.Top?t?"150px":"60px":t?"45vh":"45%"};
	flex-direction: ${({barPosition:e,hasLinearNavigation:t})=>e===$.Top&&!t?"row":"column"};
	justify-content: center;
	font-size: 24px;
	height: 90px;
`,ks=({ariaHidden:e,barPosition:t,children:o,isEditor:n,hasLinearNavigation:r})=>s.createElement(O0,{"aria-hidden":e,barPosition:t,isEditor:n,hasLinearNavigation:r},o),P0=60,_s=e=>{const{pageX:t,pageY:o}=e.touches[0];return{x:t,y:o+window.pageYOffset}},D0=(e,t)=>e<t,$0=(e,t)=>Math.abs(e-t)>=P0,B0=(e,t)=>Math.abs(e-t),F0=(e,t)=>Math.abs(e-t),G0=({onForwardSwipe:e,onBackwardSwipe:t})=>{const[o,n]=m.exports.useState({startX:null,startY:null}),r=l=>{const{x:c,y:d}=_s(l);n({startX:c,startY:d})},i=()=>{n({startX:null,startY:null})},a=l=>{var f,E,b,v,T,w;const c=l.target;if(((f=c==null?void 0:c.classList)==null?void 0:f.contains("im-menu-button"))||((b=(E=c==null?void 0:c.parentNode)==null?void 0:E.classList)==null?void 0:b.contains("im-menu-button"))||((v=c==null?void 0:c.classList)==null?void 0:v.contains("page-index-item"))||((w=(T=c==null?void 0:c.parentNode)==null?void 0:T.classList)==null?void 0:w.contains("page-index-item")))return;const{x:d,y:u}=_s(l),{startX:p,startY:h}=o;if(h!==null&&p!==null){const _=F0(h,u),k=B0(p,d);if(_>=k)return;p&&$0(p,d)&&(D0(p,d)?(n({startX:null,startY:null}),t()):(n({startX:null,startY:null}),e()))}};return m.exports.useEffect(()=>(o.startX!==null&&(document.addEventListener("touchmove",a,!1),document.addEventListener("touchend",i,!1)),()=>{o.startX!==null&&(document.removeEventListener("touchmove",a,!1),document.removeEventListener("touchend",i,!1))}),[o]),m.exports.useEffect(()=>(document.addEventListener("touchstart",r,!1),()=>{document.removeEventListener("touchstart",r,!1)}),[]),null},z0=({docName:e,title:t})=>{const o=()=>{document.title.indexOf("[DEV]")!==-1?document.title=`[DEV] ${t} - ${e}`:document.title=`${t} - ${e}`};return m.exports.useEffect(()=>{o()}),null},As=e=>e?Object.keys(e).filter(t=>e[t]).length>0:!1,U0=(e,t)=>{e===ue.Mail?window.open(`mailto:${t}`):e===ue.Whatsapp?window.open(`https://api.whatsapp.com/send?phone=${t}`):window.open(t)},H0={[ue.Twitter]:{name:"Twitter",Icon:m0,color:"#00ACED",size:18},[ue.Facebook]:{name:"Facebook",Icon:h0,color:"#3B5998",size:18},[ue.Linkedin]:{name:"LinkedIn",Icon:f0,color:"#0077B5",size:18},[ue.Whatsapp]:{name:"Whatsapp",Icon:g0,color:"#25d366",size:20},[ue.Mail]:{name:"Mail",Icon:E0,color:"rgba(0,0,0, 0.5)",size:16},[ue.Xing]:{name:"Xing",Icon:b0,color:"#005a5f",size:16},[ue.Instagram]:{name:"Instagram",Icon:y0,size:18,color:"#D93175",placeholder:"https://www.instagram.com/example"},[ue.Pinterest]:{name:"Pinterest",Icon:v0,size:18,color:"#BD081C",placeholder:"https://www.pinterest.com/example"},[ue.Snapchat]:{name:"Snapchat",Icon:T0,size:18,color:"#FFFC00",placeholder:"https://www.snapchat.com/example"},[ue.Tiktok]:{name:"TikTok",Icon:w0,size:18,color:"#000000",placeholder:"https://www.tiktok.com/@example"},[ue.Youtube]:{name:"Youtube",Icon:I0,size:18,color:"#FF0000",placeholder:"https://www.youtube.com/example"},[ue.Vimeo]:{name:"Vimeo",Icon:C0,size:18,color:"#1ab7ea",placeholder:"https://www.vimeo.com/example"},[ue.Globe]:{name:"",Icon:S0,size:18,color:"#6E6E6E",placeholder:"https://www.example.com"}},{send:V0,TRACKING_CATEGORY:K0,TRACKING_EVENT:j0}=Ve.events,W0=y.a`
	text-decoration: inherit;
	color: inherit;
	cursor: pointer;
	margin: 2px;
	height: 24px;
	width: 24px;
	border-radius: 50%;
	pointer-events: auto;
	transition: all 0.3s ease 0s;
	border: none;
	padding: 0;
	${({color:e,viewport:t})=>t!==he.sm?`
				height: 28px;
				width: 28px;
				justify-content: center;
				align-items: center;
				display: flex;
				&:hover {
					color: #f5f5f5;
					background-color: ${e};
				}
			`:`
				text-align: center;
				line-height: 1px;
				justify-content: center;
				align-items: center;
				display: inline-flex;
				color: #f5f5f5;
				background-color: ${e};
			`}
`,q0=({translator:e,type:t,url:o,viewport:n})=>{if(t===ue.Googleplus)return null;const{color:r,name:i,Icon:a,size:l}=H0[t];return o!==null?s.createElement(W0,{"data-foleon-element":`social-platform-${i.toLowerCase()}`,href:"#",tabIndex:0,className:"im-socialIcon",title:i,"aria-label":e.translate("Follow us on {platform}",{platform:i}),onClick:c=>{c.preventDefault(),V0(K0.SOCIAL_PAGE,j0.CLICK,i.toLowerCase()),U0(t,o)},target:"_blank",color:r,viewport:n},s.createElement(a,{size:n===he.sm?16:l,"aria-hidden":!0})):null},Y0=y.div`
	transition: opacity 300ms linear 0s;
	${({barPosition:e,isVisible:t,viewport:o})=>o===he.sm?`
				width: 100vh;
				min-height: 60px;
				display: flex;
				align-items: center;
				padding-left: 3px;
				opacity: ${t?"1":"0"};
			`:`
				margin: 0 12px;
				display: flex;
				flex-direction: ${e===$.Left?"column":"row"};
				opacity: ${t?"1":"0"};
			`}
`,Ns=({viewport:e,socialPlatforms:t,translator:o,barPosition:n,isVisible:r})=>{const i=Ul(t);return As(i)?s.createElement(Y0,{"aria-label":"Social platforms",barPosition:n,isVisible:r,viewport:e},Object.entries(i).map(([a,l])=>l&&s.createElement(q0,{translator:o,key:a,type:a,viewport:e,url:l}))):null},X0=y.div`
	display: flex;
	flex: 1;
	flex-direction: ${({barPosition:e})=>e===$.Left?"column":"row"};
	margin: 0;
	align-items: center;
	justify-self: flex-start;
	background-color: inherit;
	${({cssText:e})=>e}
	line-height: 2em;
	overflow: hidden;
	color: inherit;
`,Q0=({barPosition:e,cssText:t,children:o})=>s.createElement(X0,{barPosition:e,cssText:t,className:"im-navigation-bar im-paragraph-theme im-main-navigation"},o),Z0=y.div`
	display: flex;
	min-width: 20px;
	align-items: center;
	justify-self: flex-end;

	${({isEditor:e})=>`pointer-events: ${e?"none":"auto"};`}
	${({barPosition:e})=>e===$.Left&&"flex-direction: column;"}
`,J0=({barPosition:e,isEditor:t,children:o})=>s.createElement(Z0,{isEditor:t,barPosition:e},o),em=y.div`
	display: block;
	position: absolute;
	z-index: 10;
	left: 0;
	margin: 0;
	line-height: 2em;
	white-space: normal;
	pointer-events: none;

	${({barColors:e})=>`
		background-color: ${e.background||"rgba(0, 0, 0, .2)"};
		color: ${e.icon||"rgba(255, 255, 255, 1)"};
	`}

	${({barOffset:e})=>`height: ${e.height+e.measure};`}

	${({barPosition:e})=>{switch(e){case $.Bottom:return"right: 0; bottom: 0;";case $.Top:return"right: 0; top: 0;";default:return}}}
`,tm=y.div`
	display: flex;
	padding: 0;
	justify-content: space-between;

	${({barOffset:e})=>e.inner&&`width: ${e.inner.width+e.inner.measure};`}
	${({barOffset:e})=>`max-height: ${e.container.height+e.container.measure};`}

	${({barPosition:e})=>e===$.Left&&`
			height: 80%;
			flexDirection: column;
		`}
`,nm=({ariaHidden:e,barColors:t,barPosition:o,children:n})=>{const r=m.exports.useMemo(()=>Hl(o),[o]);return s.createElement(em,{barColors:t,barOffset:r.container,barPosition:o,className:"im-navigation-bar","data-testid":"core-editor_navigator_top-bar"},s.createElement(tm,{barOffset:r,barPosition:o,"aria-hidden":e},n))},om=(e,t)=>e===null||t===null?null:`${t}/magazine/edition/${e}/preview/editions`,rm=y.div`
	padding: 50px;
`,sm=y.div`
	${({fontFamily:e})=>e&&`font-family: ${e.fontFamily};`}
	display: flex;
	width: 100%;
	min-height: 75px;
	padding: 10px 15px 5px 15px;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	background: #fff;
	font-size: 15px;
	font-weight: 600;
	letter-spacing: 1px;
	text-align: center;
	text-transform: uppercase;
	color: #000;

	& > h5 {
		width: 100%;
		margin: 2px 2px 2px 2px;
		font-size: 0.8em;
		text-align: left;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;

		@media (min-width: 410px) {
			font-size: 1em;
		}
	}

	& > p {
		font-size: 0.8em;
		color: rgba(0, 0, 0, 0.54);
	}
`,Jn=y.div`
	${({fontFamily:e})=>e&&`font-family: ${e.fontFamily};`}
	display: flex;
	height: calc(100vh - 158px);
	align-items: center;
	justify-content: center;
	text-align: center;
	h4 {
		font-size: 2.5vw;
	}
	color: #000;
`,eo="0 16px 16px -1px rgba(10, 22, 70, 0.1), 0 0 1px 0 rgba(10, 22, 70, 0.06)",im=y.a`
	height: 100%;
	margin: 8px;
	border-radius: 3px;
	text-decoration: none;
	box-shadow: ${({isActive:e})=>e?eo:"0 1px 1px 0 rgba(10, 22, 70, 0.1), 0 0 1px 0 rgba(10, 22, 70, 0.06)"};

	&:hover {
		box-shadow: ${eo};
	}

	&:focus {
		box-shadow: ${eo};
	}
`,am=({apiURL:e,currentPathname:t,docId:o,themeParagraphFontFamily:n,themeHeadingFourFontFamily:r,translator:i})=>e?s.createElement(rm,null,s.createElement(Vl,{url:om(o,e),collectionKey:"editions"},({results:a,isFetching:l,fetchError:c})=>c?s.createElement(Jn,{fontFamily:r},s.createElement("h4",null,s.createElement(i.Component,{},"Error fetching editions"))):l?s.createElement(Jn,{fontFamily:r},s.createElement("h4",null,s.createElement(i.Component,{},"Loading..."))):a.length===0?s.createElement(Jn,{fontFamily:r},s.createElement("h4",null,s.createElement(i.Component,{},"No editions found"))):s.createElement(ys,{withGaps:!0},a.map(({title:d,thumb:u,url:p,pages_count:h,id:f})=>s.createElement(im,{key:f,isActive:o===f.toString(),"aria-label":`${i.translate("Edition")}: ${d}`,href:p,target:"_blank",tabIndex:0,className:"edition-index-item"},s.createElement(ws,{currentPathname:t,thumbnail:u,key:`cell-${p}`},s.createElement(sm,{className:"im-paragraph-theme",fontFamily:n},s.createElement("h5",null,d),s.createElement("p",null,s.createElement(Ai,{color:"rgba(125,125,125,.5)",size:"16px"})," ",`${h} pages`)))))))):null,Rs="white",lm=0,to=.5,cm=.7;var V;(function(e){e.Closed="Closed",e.Open="Open",e.Pending="Pending"})(V||(V={}));var ie;(function(e){e.Editions="Editions",e.Pages="Pages"})(ie||(ie={}));const dm=()=>typeof window=="undefined"?0:window.outerWidth>window.outerHeight?window.outerWidth:window.outerHeight,um=e=>{const t=e.querySelectorAll('a[role="tab"]:not([disabled]), button:not([disabled])'),o=t[0],n=t[t.length-1],r=9;e.addEventListener("keydown",i=>{(i.key==="Tab"||i.keyCode===r)&&(i.shiftKey?document.activeElement===o&&(n.focus(),i.preventDefault()):document.activeElement===n&&(o.focus(),i.preventDefault()))})},nn="page-index-item",on="edition-index-item",Ls=e=>{var r,i,a,l;const t=document.getElementsByClassName(nn),o=document.getElementsByClassName(on),n=document.activeElement;switch(e.key){case"Left":case"ArrowLeft":(n==null?void 0:n.classList.contains(nn))&&((r=n==null?void 0:n.previousElementSibling)==null||r.focus()),(n==null?void 0:n.classList.contains(on))&&((i=n==null?void 0:n.previousElementSibling)==null||i.focus());break;case"Right":case"ArrowRight":(n==null?void 0:n.classList.contains(nn))&&((a=n==null?void 0:n.nextElementSibling)==null||a.focus()),t[0]&&(n==null?void 0:n.classList.contains(nn))&&(n==null?void 0:n.nextElementSibling)===null&&t[0].focus(),(n==null?void 0:n.classList.contains(on))&&((l=n==null?void 0:n.nextElementSibling)==null||l.focus()),o[0]&&(n==null?void 0:n.classList.contains(on))&&(n==null?void 0:n.nextElementSibling)===null&&o[0].focus();break}},{send:pm,TRACKING_CATEGORY:mm,TRACKING_EVENT:hm}=Ve.events,fm=ce`
	from {
		transform: translateY(100%);
	}
	to { 
		transform: translateY(0);
	}
`,gm=ce`
	from {
		transform: translateY(200%);
	}
	to { 
		transform: translateY(400%);
	}
`,Em=ce`
	from {
		transform: translateY(-100%);
	}
	to { 
		transform: translateY(0);
	}
`,bm=ce`
	from {
		transform: translateY(0);
	}
	to {
		 transform: translateY(-300%);
	}
`,Ms=ce`
	from {
		opacity: 1;
	}
	to { 
		opacity: 0;
	}
`,ym=ce`
	from {
		height: 100%;
	}
	to { 
		height: 0%;
	}
`,vm=y.div`
	${({state:e,barPosition:t,hasBeenOpened:o})=>{const n=t===$.Bottom?"0px;":"57px;",r=t===$.Bottom?"57px;":"0;",i=t===$.Bottom?" flex-end":void 0;switch(e){case V.Open:return`
        	position: fixed;
          top: ${n};
          bottom: ${r};
					right: 0;
					left: 0;
          display: flex;
					align-items: ${i||"flex-start"};
				`;case V.Pending:return o?Ee`
						animation-name: ${ym};
						animation-duration: 1s;
						animation-fill-mode: both;
					`:`
				display: none;
			`}}}
`,Tm=y.div`
	display: flex;
	flex-direction: row;
	overflow: auto;
	width: 100%;
	max-height: 385px;
	height: auto;
	-webkit-overflow-scrolling: touch;
	overflow-y: auto;
	opacity: 1;
	z-index: 2;
	animation-name: ${({barPosition:e})=>e===$.Bottom?fm:Em};
	animation-duration: 1s;
	animation-fill-mode: both;
	${ke.sm} {
		flex-direction: column;
		max-height: 100%;
	}
	::-webkit-scrollbar {
		display: none;
	}
	scrollbar-width: none;
	${({state:e,hasBeenOpened:t,barPosition:o})=>{switch(e){case V.Pending:return Ee`
					animation-name: ${()=>o===$.Bottom&&t?gm:bm};
					animation-duration: 1s;
					animation-fill-mode: both;
				`}}}
`,wm=y.div`
	position: absolute;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	background: rgb(0, 0, 0, 0.7);
	${({state:e,hasBeenOpened:t})=>{switch(e){case V.Open:return`
				display:block;
				background: rgb(0,0,0,0.7);
				-webkit-animation-name: fadeIn;
				-webkit-animation-duration: 1s;
				animation-name: fadeIn;
				animation-duration: 1s;
			`;case V.Pending:return t?Ee`
						animation-name: ${Ms};
						animation-duration: 0.5s;
						animation-fill-mode: both;
					`:`
				display: none;
			`}}}
`,Im=({currentPathname:e,themeParagraphFontFamily:t,themeHeadingFourFontFamily:o,overviewOpenState:n,pages:r,RouterLink:i,toggleOverview:a,translator:l,barPosition:c})=>{const d=m.exports.useRef(null),[u,p]=m.exports.useState(!1),{featuredImageUrls:h}=qo(r);let f,E;typeof document!="undefined"&&(f=document.getElementById("horizontal-overview-overlay"),E=document.getElementById("horizontal-overview-container"));const b=T=>{E&&(T.preventDefault(),E.scrollLeft+=T.deltaY,E.scrollLeft+=T.deltaX)};m.exports.useEffect(()=>{n===V.Open&&f&&(E&&E.addEventListener("wheel",b),f.style.display="block",p(!0),f&&f.addEventListener("animationend",v))},[n]);const v=T=>{f&&T.animationName===Ms.getName()&&(f.style.display="none",f.removeEventListener("animationend",v),E==null||E.removeEventListener("wheel",b))};return s.createElement(vm,{"aria-label":l.translate("Index"),id:"expanded-menu",ref:d,state:n,onClick:a,barPosition:c,hasBeenOpened:u},s.createElement(wm,{state:n,hasBeenOpened:u,id:"horizontal-overview-overlay"}),s.createElement(Tm,{barPosition:c,hasBeenOpened:u,state:n,id:"horizontal-overview-container"},s.createElement(s.Fragment,null,r.map(T=>{var k,x;const w=T.identifier===e,_=(k=T.id)!=null?k:T.identifier;return s.createElement(Ss,{isActive:w,"aria-checked":w,ariaCurrent:w,ariaLabel:`${l.translate("Page")} ${T.pageNumber}: ${T.name}`,currentPathname:e,foleonElement:"menu-item",key:`page-index-${_}`,className:"page-index-item",onCellClicked:()=>{pm(mm.PAGE_INDEX,hm.CLICK,T.name),a()},routePath:T.identifier,page:T,RouterLink:i,thumbnail:h[T.id]||((x=T.meta.screenshotLinks.original)==null?void 0:x.href),themeParagraphFontFamily:t,themeHeadingFourFontFamily:o,barPosition:c})}))))},Cm=y.div`
	display: flex;
	height: 57px;
	align-items: center;
	justify-content: center;
	border-bottom: solid 1px rgba(0, 0, 0, 0.12);
`,Sm=y.div`
	display: flex;
	position: relative;
	width: 100%;
	height: 100%;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`,xm=y.ul`
	display: flex;
	height: 100%;
	align-items: center;
	justify-content: center;

	& > li {
		list-style: none;
	}
`,Os=y.a`
	${({fontFamily:e})=>e}
	height: 100%;
	margin: ${({isActive:e})=>e?"0 1em -4px":"0 1em"};
	padding: 1.2em 1em;
	border-top: none;
	border-right: none;
	border-bottom: ${({isActive:e})=>e?"4px solid #000":"none"};
	border-left: none;
	font-size: 16px;
	color: #000;
	text-decoration: none;
	cursor: pointer;
`,rn=(e,t)=>e===t,km=({activeOverviewTab:e,hideEditions:t,themeParagraphFontFamily:o,setActiveOverviewTab:n,translator:{translate:r}})=>(s.useEffect(()=>{let i;e===ie.Pages&&(i=document.getElementById("pagesTab")),e===ie.Editions&&(i=document.getElementById("editionsTab")),i&&i.focus()},[e]),s.createElement(Cm,null,s.createElement(Sm,null,s.createElement(xm,{role:"tablist"},s.createElement("li",{role:"presentation"},s.createElement(Os,{"aria-selected":rn(ie.Pages,e),className:"im-paragraph-theme","data-foleon-element":"pages-tab",fontFamily:o,id:"pagesTab",isActive:rn(ie.Pages,e),onClick:()=>{n(ie.Pages)},onKeyDown:i=>{(i.key==="Enter"||i.keyCode===13)&&n(ie.Pages)},role:"tab",tabIndex:0},r("Pages"))),!t&&s.createElement("li",{role:"presentation"},s.createElement(Os,{"aria-selected":rn(ie.Editions,e),className:"im-paragraph-theme","data-foleon-element":"editions-tab",fontFamily:o,id:"editionsTab",isActive:rn(ie.Editions,e),onClick:()=>{n(ie.Editions)},onKeyDown:i=>{(i.key==="Enter"||i.keyCode===13)&&n(ie.Editions)},role:"tab",tabIndex:0},r("Editions"))))))),{send:_m,TRACKING_CATEGORY:Am,TRACKING_EVENT:Nm}=Ve.events,Rm=ce`
	0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
`,Lm=ce`
	0% {
		display: flex;
		transform: scale(1);
		opacity: 1;
	}

	99% {
		display: flex;
		transform: scale(1);
		opacity: 0;
	}

	100% {
		display: none;
		transform: scale(0);
		opacity: 0;
	}
`,Mm=ce`
	0% {
		transform: scale(0,0);
	}

	100% {
		transform: scale(2.5, 2.5);
	}
`,Om=y.div`
	${({state:e})=>{switch(e){case V.Open:return`
					position: fixed;
					z-index: 999;
					top: 0;
					right: 0;
					bottom: 0;
					left: 0;
					flex-direction: column;
					transform: scale(1);
				`;case V.Closed:return Ee`
					animation: ${Lm} ${cm}s cubic-bezier(0.8, 0.38, 0.91, 0.8) forwards;
				`;case V.Pending:return`
					display: none;
				`}}}
`,Pm=y.div`
	display: flex;
	position: absolute;
	top: ${({diameter:e})=>`-${e/2}px`};
	left: ${({diameter:e})=>`-${e/2}px`};
	min-width: ${({diameter:e})=>`${e}px`};
	min-height: ${({diameter:e})=>`${e}px`};
	background-color: ${Rs};

	${({state:e})=>e===V.Open?Ee`
					opacity: 1;
					animation: ${Mm} ${to}s cubic-bezier(0.42, 0, 1, 1) forwards;
			  `:`
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				border-radius: 0;
				transform: none;
			`}
`,Dm=y.div`
	position: relative;
	padding: ${lm};
	width: 100%;
	height: 100%;
	max-height: 100%;
	flex-direction: column;
	background: ${Rs};
	-webkit-overflow-scrolling: touch;
	overflow-y: auto;
	opacity: 0;

	${({state:e})=>e===V.Open?Ee`
					animation: ${Rm} ${to}s cubic-bezier(0.2, 0.47, 0.72, 0.68) forwards;
					animation-delay: ${to}s;
			  `:`
				display: none;
				opacity: 0;
			`}
`,$m=y.button`
	position: absolute;
	top: 15px;
	right: 5px;
	border: none;
`,Bm=y(Ni)`
	color: rgba(0, 0, 0, 0.54);
	cursor: pointer;
`,Ps=y.div`
	display: flex;
	padding: 10px 0;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	pointer-events: auto;
`,Fm=({activeOverviewTab:e,apiURL:t,children:o,currentPathname:n,docId:r,hideEditions:i=!1,cssFontFamily:a,themeParagraphFontFamily:l,themeHeadingFourFontFamily:c,overviewOpenState:d,pages:u,RouterLink:p,setActiveOverviewTab:h,socialPlatforms:f,toggleOverview:E,translator:b,viewport:v,barPosition:T,hasLinearNavigation:w})=>{const _=m.exports.useRef(null),[k,x]=m.exports.useState(!1),I=dm();return m.exports.useEffect(()=>{const S=document.getElementById("expanded-menu");return S&&um(S),document.addEventListener("keydown",Ls,!1),()=>{document.removeEventListener("keydown",Ls,!1)}},[]),m.exports.useEffect(()=>{x(v===he.sm&&As(f))},[v,f]),w?s.createElement(Im,{currentPathname:n,themeParagraphFontFamily:l,themeHeadingFourFontFamily:c,overviewOpenState:d,pages:u,RouterLink:p,toggleOverview:E,translator:b,barPosition:T}):s.createElement(Om,{"aria-label":b.translate("Index"),id:"expanded-menu",ref:_,state:d},s.createElement(Pm,{diameter:I,state:d}),s.createElement(Dm,{state:d},s.createElement(km,{activeOverviewTab:e,hideEditions:i,themeParagraphFontFamily:l,setActiveOverviewTab:h,translator:b}),e===ie.Pages&&s.createElement(s.Fragment,null,k&&s.createElement(Ps,null,o),s.createElement(t0,{currentPathname:n,onCellClicked:E,cssFontFamily:a,themeParagraphFontFamily:l,pages:u,RouterLink:p,translator:b})),e===ie.Editions&&s.createElement(s.Fragment,null,k&&s.createElement(Ps,null,o),s.createElement(am,{apiURL:t,currentPathname:n,docId:r,cssFontFamily:a,themeParagraphFontFamily:l,themeHeadingFourFontFamily:c,translator:b})),s.createElement($m,{"aria-label":b.translate("Close"),"data-testid":"close-menu-button",onClick:()=>{_m(Am.PAGE_INDEX,Nm.CLICK,"Close"),E()},tabIndex:0},s.createElement(Bm,{"aria-hidden":!0,size:24}))))};var ee;(function(e){e.Start="start",e.Center="center",e.End="end"})(ee||(ee={}));var M;(function(e){e.CoBranding="cobranding",e.Divider="divider",e.Logo="logo",e.Menu="menu",e.MenuBar="menuBar",e.PageIndicator="pageIndicator",e.PageName="pageName",e.Search="search",e.SocialIcons="socialIcons",e.VolumeControl="volumeControl"})(M||(M={}));var Ds;(function(e){e.Browser="browser",e.Menu="menu",e.None="none",e.Side="sidepane",e.Social="socialpane"})(Ds||(Ds={}));const Gm=`
	position: static;
	opacity: 1;
	transition: all 600ms linear 700ms;
	pointer-events: unset;
`,zm=y.a`
	display: inline-block;
	position: absolute;
	left: 100%;
	padding: 5px 15px;
	border: 1px solid #f10e0b;
	border-radius: 4px;
	background: #f10e0b;
	font-size: 0.75rem;
	font-weight: 900;
	text-decoration: none;
	color: #fff;
	opacity: 0;
	pointer-events: none;
`,Um=({children:e,onBlur:t,onFocus:o,url:n})=>{const r=i=>{["Enter","Spacebar"," "].indexOf(i.key)&&window.open(n)};return s.createElement(zm,{"data-foleon-element":"foleon-branding",href:n,onBlur:t,onFocus:o,onKeyPress:i=>r(i),tabIndex:0,target:"_blank",className:"co-branding-button"},e)},$s=`
	padding: 0 15px 15px;
	background: rgba(0, 0, 0, 0.5);

	& > h5 {
		opacity: 1;
		transition: all 600ms linear 500ms;
	}

	& > p {
		opacity: 1;
		transition: all 600ms linear 600ms;
	}
`,Hm=y.div`
	position: absolute;
	top: ${({barPosition:e,isDesktop:t})=>!t&&e===$.Bottom&&"57px"||e===$.Top&&"57px"};
	bottom: ${({barPosition:e,isDesktop:t})=>t&&e===$.Bottom&&"57px"};
	left: 0;
	width: ${({isRendered:e})=>e?"100%":"170px"};
	${({isRendered:e})=>e&&"height: 0;"}
	text-align: center;
	line-height: 14px;
	transition: height 0.6s ease-in-out;
	box-sizing: border-box;
	letter-spacing: normal;
	font-weight: normal;
	text-decoration: none;
	font-style: normal;

	& > h5,
	p {
		pointer-events: none;
		opacity: 0;
		font-size: 0.75rem;
	}
	& > h5 {
		margin: 20px 0 0 0;
	}

	& > p {
		margin: 5px 0 15px;
	}
`,Vm=({barPosition:e,children:t,contentRef:o,isRendered:n,viewport:r})=>s.createElement(Hm,{barPosition:e,isDesktop:r>he.md,isRendered:n,ref:o,className:"co-branding-content"},t),Km=`
	padding: 0;
`,jm=y.div`
	display: flex;
	height: 100%;
	padding: 0 18px;
	align-items: center;
	justify-content: center;
	transition: padding 500ms ease-out;
`,Wm=()=>s.createElement(jm,{className:"co-branding-logo"},s.createElement(k0,{key:"brand-icon-fln",size:24,title:"foleon-logo","aria-label":"This document is powered by Foleon"})),qm=`
	display: flex;
	width: 72px;
	margin: 0 0 0 6px;
`,Ym=y.div`
	width: 0;
	overflow: hidden;
	transition: width 500ms ease-in-out;
`,Xm=()=>s.createElement(Ym,{className:"co-branding-text"},s.createElement(x0,{height:24,key:"brand-text-fln",width:60})),Bs=`
	width: 170px;

	.co-branding-button {
		${Gm}
	}
	.co-branding-logo {
		${Km}
	}

	.co-branding-text {
		${qm}
	}
`,Qm=y.div`
	display: flex;
	position: relative;
	width: 60px;
	height: 100%;
	margin: 0;
	align-items: center;
	justify-content: center;
	background: rgba(0, 0, 0, 0.54);
	transition: all 0.6s ease-in-out;

	line-height: 2em;
	color: #fff;
	font-family: Arial, Helvetica, sans-serif;

	&:hover {
		.co-branding-content {
			height: ${({contentHeight:e})=>e}px;
			${$s}
		}

		${Bs}
	}

	${({contentHeight:e,isTabPressed:t})=>t&&`
		.co-branding-content {
			height: ${e}px;
			${$s}
		}
		${Bs}
		`}
`,Zm=({barPosition:e,onMouseEnter:t,onMouseLeave:o,viewport:n})=>{const r="https://foleon.com",i=m.exports.useRef(null),a=m.exports.useRef(0),[l,c]=m.exports.useState(!1);return m.exports.useEffect(()=>{i.current&&(a.current=i.current.scrollHeight+10)},[]),s.createElement(Qm,{className:"im-paragraph-theme",contentHeight:a.current,isTabPressed:l,onMouseEnter:t,onMouseLeave:o},s.createElement(Wm,null),s.createElement(Xm,null),s.createElement(Vm,{barPosition:e,contentRef:i,isRendered:a.current>0,viewport:n},s.createElement("h5",null,"Powered by Foleon"),s.createElement("p",null,"Create the content your audience craves."),s.createElement(Um,{onBlur:()=>c(!1),onFocus:()=>c(!0),url:r},"Find out more")))},{send:Jm,TRACKING_CATEGORY:eh,TRACKING_EVENT:th}=Ve.events,nh=y.img`
	display: flex;
	flex-shrink: 0;
	transition: opacity 300ms linear;
	cursor: pointer;

	${({fixedWidth:e,maxSize:t})=>t&&(e?`height: ${t}px;`:`
				width: ${t}px;
				max-width: 100%;
			`)}

	${({isVisible:e,viewport:t})=>!e&&t===he.sm&&"opacity: 0;"}
`,oh=y.a`
	${({barPosition:e,centered:t})=>t&&`
			position: absolute;
			top: ${e===$.Left?"auto":"50%"};
			left: 50%;
			max-width: 45%;
			transform: translate(-50%, -50%);
		`}
`,rh=({barPosition:e,centered:t,customUrl:o,fixedWidth:n=!1,handleNavigateToHomeRoute:r,hasEnabledCustomUrl:i,isVisible:a,size:l=45,source:c,viewport:d})=>{c.properties=c.properties||{width:50,height:50};let u="#";i&&o&&(u=o.match(/^[a-zA-Z]+:\/\//)?o:`https://${o}`);const p=m.exports.useMemo(()=>n?c.properties.height/c.properties.width*l:c.properties.width/c.properties.height*l,[n,l,c.properties]);return s.createElement(oh,{barPosition:e,centered:t,"data-foleon-element":"home-button",href:u,id:"foleon-logo-anchor",onClick:h=>{Jm(eh.NAVIGATION_BAR,th.CLICK,"Logo"),r&&r(h)}},typeof window!="undefined"&&s.createElement(nh,{alt:c.alt||"",fixedWidth:n,isVisible:a,maxSize:p,src:c.url,viewport:d}))},sh=a=>{var l=a,{children:e,isActive:t,isEditor:o,RouterLink:n,to:r}=l,i=Se(l,["children","isActive","isEditor","RouterLink","to"]);const c=m.exports.useCallback(u=>{const p=u.target;Array.from(document.getElementsByClassName("im-menu-button")).forEach(f=>{f.classList.remove("active-state")}),p.classList.add("active-state"),p==null||p.parentNode.classList.add("active-state")},[]),d=m.exports.useCallback(u=>{if(t)return;u.target.classList.remove("active-state")},[t]);return o?s.createElement("a",{className:`im-menu-button${t?" active":""}`,"data-foleon-element":"menuitem",href:"#",role:"menuitem"},s.createElement("span",null,e)):s.createElement(n,g({onMouseOver:c,onMouseLeave:d,className:`im-menu-button${t?" active":""}`,"data-foleon-element":"menuitem",role:"menuitem",to:r},i),s.createElement("span",null,e))},ih=y.div`
	display: flex;
	flex-wrap: nowrap;
	width: ${({width:e})=>e}px;
	overflow: auto;
	-ms-overflow-style: -ms-autohiding-scrollbar;

	&::-webkit-scrollbar {
		display: none;
	}
	&.im-scrollable {
		transition: box-shadow 300ms;
		box-shadow: 14px 0 14px -8px rgba(0, 0, 0, 0.2) inset, -14px 0 14px -8px rgba(0, 0, 0, 0.2) inset;
	}
	&.im-scrollable.im-scrollable-start {
		box-shadow: 0 0 0 -8px rgba(0, 0, 0, 0.2) inset, -14px 0 14px -8px rgba(0, 0, 0, 0.2) inset;
	}
	&.im-scrollable.im-scrollable-end {
		box-shadow: 14px 0 14px -8px rgba(0, 0, 0, 0.2) inset, 0 0 0 -8px rgba(0, 0, 0, 0.2) inset;
	}
`,ah=.9,Fs=8;class lh extends s.Component{constructor(t){super(t);R(this,"_ref");R(this,"_animationFrame");R(this,"_scrollingTimeout");R(this,"_usingTouch",!1);R(this,"_speed",0);R(this,"_isMoving",!1);R(this,"_isHovering",!1);R(this,"_isScrolling",!1);R(this,"scrollToNavItem");this.ref=this.ref.bind(this),this.handleMouseMove=this.handleMouseMove.bind(this),this.handleMouseLeave=this.handleMouseLeave.bind(this),this.handleMouseEnter=this.handleMouseEnter.bind(this),this.handleWheel=this.handleWheel.bind(this),this.handleTouchStart=this.handleTouchStart.bind(this),this.handleTouchEnd=this.handleTouchEnd.bind(this),this.handleMainScroll=this.handleMainScroll.bind(this),this.checkToScrollToNavItem=this.checkToScrollToNavItem.bind(this)}componentDidMount(){typeof window!="undefined"&&this._ref&&(this._ref.addEventListener("wheel",this.handleWheel),this._ref.addEventListener("mousemove",this.handleMouseMove),this._ref.addEventListener("mouseenter",this.handleMouseEnter),this._ref.addEventListener("mouseleave",this.handleMouseLeave),this._ref.addEventListener("touchstart",this.handleTouchStart),this._ref.addEventListener("touchend",this.handleTouchEnd),window.addEventListener("scroll",this.handleMainScroll),this.scrollToNavItem=Ri(t=>{t.scrollIntoView({block:"center"})},100),setTimeout(this.checkToScrollToNavItem,100))}componentWillUnmount(){this._ref&&(this._ref.removeEventListener("wheel",this.handleWheel),this._ref.removeEventListener("mousemove",this.handleMouseMove),this._ref.removeEventListener("mouseenter",this.handleMouseEnter),this._ref.removeEventListener("mouseleave",this.handleMouseLeave),this._ref.removeEventListener("touchstart",this.handleTouchStart),this._ref.removeEventListener("touchend",this.handleTouchEnd),window.removeEventListener("scroll",this.handleMainScroll),clearTimeout(this._scrollingTimeout),this._isHovering=!1)}componentDidUpdate(){this.checkToScrollToNavItem()}ref(t){t&&(this._ref=t)}checkToScrollToNavItem(){const t=document.querySelector(".im-menu-button.active");t&&!this.props.isEditor&&this.scrollToNavItem&&this.scrollToNavItem(t)}handleMainScroll(){this.checkToScrollToNavItem()}handleTouchStart(){this._usingTouch=!0}handleTouchEnd(){setTimeout(()=>{this._usingTouch=!1},100)}handleWheel(t){!this._ref||this._ref.scrollWidth<this.props.size||(t.preventDefault(),this._isScrolling=!0,this._ref.scrollLeft+=Math.abs(t.deltaX)>Math.abs(t.deltaY)?t.deltaX:t.deltaY,clearTimeout(this._scrollingTimeout),this._scrollingTimeout=setTimeout(()=>{this._isScrolling=!1,this._isMoving=!1},100),this._speed=0,this.addShadows())}handleMouseEnter(){this._usingTouch||(this._isHovering=!0)}handleMouseLeave(){this._usingTouch||(this._isHovering=!1)}handleMouseMove(t){if(!this._ref||this._usingTouch)return;const o=t.clientX-this.props.offset,n=this.props.size*.4,r=this.props.size*.6;o<n?this._speed=(o/n-1)*Fs:o>r&&(this._speed=((this.props.size-o)/n-1)*-Fs),this._speed!==0&&!this._isMoving&&(this._isMoving=!0,this.move())}move(){if(this._isScrolling||this._usingTouch)return;this.addShadows();let t=this._ref.scrollLeft+this._speed>0?Math.round(this._ref.scrollLeft+this._speed):0;if(t>this._ref.scrollWidth-this.props.size&&(t=Math.round(this._ref.scrollWidth-this.props.size)),cancelAnimationFrame(this._animationFrame),t===this._ref.scrollLeft){this._isMoving=!1,this._speed=0;return}this._animationFrame=window.requestAnimationFrame(()=>{this._ref.scrollLeft=t,this._isHovering||(this._speed*=ah),Math.abs(this._speed)>.002?this.move():(this._isMoving=!1,this._speed=0)})}addShadows(){this.isScrollEnd()?this._ref.classList.add("im-scrollable-end"):this._ref.classList.remove("im-scrollable-end"),this.isScrollStart()?this._ref.classList.add("im-scrollable-start"):this._ref.classList.remove("im-scrollable-start")}isScrollStart(){return this._ref&&this._ref.scrollLeft<2}isScrollEnd(){return this._ref&&this._ref.scrollWidth-2<=this.props.size+this._ref.scrollLeft}render(){const a=this.props,{children:t,size:o,offset:n,isEditor:r}=a,i=Se(a,["children","size","offset","isEditor"]);return i.className=`${this._ref&&this._ref.scrollWidth>this.props.size?"im-scrollable im-scrollable-start":""}  ${i.className||""}`,s.createElement(ih,g({width:o,ref:this.ref},i),t)}}const ch=y(lh)`
	display: flex;
	padding-left: 3px;
	background-color: transparent;
	overflow-y: hidden;
	${({isEditor:e})=>e&&"pointer-events: none !important;"}
	& a {
		display: flex;
		position: relative;
		z-index: 1;
		height: ${Yo}px;
		padding: 0 25px;
		flex: 0 0 auto;
		align-items: center;
		justify-content: center;
		background-color: transparent;
		text-align: center;
		text-decoration: none;
		transition: all 0.3s;
		color: inherit;
	}

	& a:after {
		content: '';
		position: absolute;
		z-index: -1;
		left: 50%;
		bottom: 0;
		width: 0%;
		height: 3px;
		background-color: rgba(0, 0, 0, 0.2);
		transition: all 300ms;
	}

	//hover and active pseudo classes were causing issues on iPad
	//that is the reason for these classes
	//refeer to https://foleon.atlassian.net/browse/UNDOREDO-4142
	& a.active:after,
	& a.active-state:after {
		left: 0%;
		width: 100%;
	}
	${({$barColors:e})=>e.active}

	& .im-bar-divider {
		height: ${Yo}px;
	}
`,dh=({barColors:e,currentPageNumber:t,isEditor:o,pages:n,RouterLink:r})=>s.createElement(Kl,null,({containerWidth:i,containerLeft:a,resizeListenerRef:l})=>s.createElement("div",{ref:l,id:"scrollbar-container",style:{width:"95%"}},s.createElement(ch,{$barColors:e,className:"im-menubar",isEditor:o,offset:a,role:"menubar",size:i*.95},n.filter(({options:c})=>c&&!c.exclude_from_navigationbar).map((c,d)=>{const u=c.pageNumber===t;return s.createElement(sh,{isActive:u,isEditor:o,key:`menu-button-${d}`,RouterLink:r,to:c.identifier},c.name)}).reduce((c,d,u)=>(c.push(d),u!==n.length-1&&c.push(s.createElement(bs,{key:`menu-bar-divider-${u}`})),c),[])))),{send:uh,TRACKING_CATEGORY:ph,TRACKING_EVENT:mh}=Ve.events,hh=y.button`
	display: flex;
	flex: 0 0 57px;
	height: 57px;
	border: none;
	font-size: 22px;
	align-items: center;
	justify-content: center;
	background: transparent;
	cursor: ${({disabled:e})=>e?"default":"pointer"};

	${ke.sm} {
		flex: 0 0 37px;
		padding: 1px 7px 2px 7px;
	}

	${({disabled:e})=>e&&`
		opacity: 0.5;
		pointer-events: none;
		`}
`,fh=y.div`
	width: 40px;
	height: 57px;
	position: relative;
	cursor: pointer;
	align-items: center;
	background-color: auto;
	align-content: space-evenly;
	display: flex;
	flex-direction: column;
	justify-content: center;
	background-color: transparent;
	border: none;
	margin: 0 5px;
	padding: 1px 6px;

	span {
		display: block;
		height: 3px;
		width: 100%;
		margin: 2px 0;
		background: ${({color:e})=>e||"transparent"};
		opacity: 1;
		left: 0;
		-webkit-transform: rotate(0deg);
		-moz-transform: rotate(0deg);
		-o-transform: rotate(0deg);
		transform: rotate(0deg);
		-webkit-transition: 0.25s ease-in-out;
		-moz-transition: 0.25s ease-in-out;
		-o-transition: 0.25s ease-in-out;
		transition: 0.25s ease-in-out;
	}

	span:nth-child(1) {
		-webkit-transform-origin: left center;
		-moz-transform-origin: left center;
		-o-transform-origin: left center;
		transform-origin: left center;
	}

	span:nth-child(2) {
		-webkit-transform-origin: left center;
		-moz-transform-origin: left center;
		-o-transform-origin: left center;
		transform-origin: left center;
	}

	span:nth-child(3) {
		-webkit-transform-origin: left center;
		-moz-transform-origin: left center;
		-o-transform-origin: left center;
		transform-origin: left center;
	}

	&.open span:nth-child(1) {
		-webkit-transform: translateY(-1px) translateX(3px) rotate(40deg);
		-moz-transform: translateY(-1px) translateX(3px) rotate(40deg);
		-o-transform: translateY(-1px) translateX(3px) rotate(40deg);
		transform: translateY(-1px) translateX(3px) rotate(40deg);
	}

	&.open span:nth-child(2) {
		width: 0%;
		opacity: 0;
	}

	&.open span:nth-child(3) {
		-webkit-transform: translateY(3px) translateX(3px) rotate(-40deg);
		-moz-transform: translateY(3px) translateX(3px) rotate(-40deg);
		-o-transform: translateY(3px) translateX(3px) rotate(-40deg);
		transform: translateY(3px) translateX(3px) rotate(-40deg);
	}
`,gh=({disabled:e=!1,handleClick:t,hasEnabledPageMenuButton:o,label:n,tabIndex:r,viewport:i,cssText:a,isExpanded:l,hasLinearNavigation:c})=>{let d="Page index";return m.exports.useEffect(()=>{const u=document==null?void 0:document.getElementById("nav-icon");!c||!u||!o||(l?u.classList.add("open"):u.classList.remove("open"))},[l,c]),o?(i&&i<he.md&&(d="Mobile page index"),s.createElement(hh,{"aria-label":n,"data-foleon-element":"menu-item","data-testid":"menu-item",disabled:e,id:"overview-button",onClick:u=>{u.preventDefault(),uh(ph.NAVIGATION_BAR,mh.CLICK,d),t&&t()},tabIndex:r||0},c?s.createElement(fh,{id:"nav-icon",color:a.color},s.createElement("span",null),s.createElement("span",null),s.createElement("span",null)):s.createElement(d0,{fill:a.color,alt:"Menu icon","aria-hidden":!0,size:24}))):null},Eh=y.div`
	display: flex;
	flex: 0 0 auto;
	min-width: 37px;
	padding: 0 10px;
	justify-content: center;

	${ke.sm} {
		flex: 0 0 auto;
	}
`,bh=({barPosition:e,pageIndex:t,totalPages:o})=>e!==$.Left?s.createElement(Eh,null,t+1,"/",o):s.createElement("div",null,t+1,"/",o),yh=y.span`
	display: flex;
	flex: 0 0 auto;
	padding: 0 10px;
`,vh=({barPosition:e,name:t})=>e!==$.Left?s.createElement(yh,null,t):s.createElement("span",null,t),Th=y.div`
	display: flex;
	width: 57px;
	height: 57px;
	border: none;
	flex: 1 0 57px;
	align-items: center;
	justify-content: center;
	transition: all 0.3s ease 0s;
	opacity: ${({isVisible:e})=>e?"1":"0"};
	pointer-events: auto;
	cursor: pointer;
`,wh=({audioMuted:e=!0,isVisible:t,setAudioMuted:o})=>{const[n,r]=m.exports.useState(e);return m.exports.useEffect(()=>{o&&o(n)},[n]),s.createElement(Th,{"aria-label":"Mute",className:"maggie-volume-indicator-topbar",isVisible:t,onClick:()=>r(!n),onKeyPress:()=>r(!n),role:"button",tabIndex:0},n?s.createElement(Li,{size:20}):s.createElement(Mi,{size:20}))},no={[M.Logo]:({barPosition:e,customUrl:t,handleNavigateToHomeRoute:o,hasEnabledCustomUrl:n,hideIcons:r,logo:i,position:a,viewport:l})=>!i||!i.url?null:s.createElement(rh,{barPosition:e,centered:a===ee.Center,customUrl:t,handleNavigateToHomeRoute:o,hasEnabledCustomUrl:n,isVisible:!(r&&a===ee.Center),key:"logo",source:i,viewport:l}),[M.PageName]:({barPosition:e,currentPage:{name:t},viewport:o})=>o!==he.sm&&s.createElement(vh,{barPosition:e,key:"page-name",name:t}),[M.PageIndicator]:({barPosition:e,hasEnabledPageNumbers:t,pageIndex:o,totalPages:n})=>t?s.createElement(bh,{barPosition:e,key:"page-index",pageIndex:o,totalPages:n}):null,[M.VolumeControl]:({audioMuted:e,hideIcons:t,setAudioMuted:o,showVolumeControl:n,viewport:r})=>n&&r>he.md?s.createElement(wh,{audioMuted:e,isVisible:!t,key:"volume-control",setAudioMuted:o}):null,[M.SocialIcons]:({barPosition:e,viewport:t,socialPlatforms:o,translator:n,hideIcons:r,hasEnabledSocial:i})=>t!==he.sm&&o&&i?s.createElement(Ns,{barPosition:e,isVisible:!r,key:"social-icons",socialPlatforms:o,translator:n,viewport:t}):null,[M.MenuBar]:({barColors:e,currentPageNumber:t,isEditor:o,pages:n,RouterLink:r,viewport:i})=>i!==he.sm&&s.createElement(dh,{barColors:e,currentPageNumber:t,isEditor:o,key:"menu-bar",pages:n,RouterLink:r,viewport:i}),[M.Menu]:({hasEnabledPageMenuButton:e,isMenuExpanded:t,toggleOverview:o,translator:n,viewport:r,cssText:i,isEditor:a,hasLinearNavigation:l})=>s.createElement(gh,{handleClick:o,hasEnabledPageMenuButton:e,isExpanded:t,key:"menu-buttons",label:n.translate("Index"),tabIndex:0,viewport:r,cssText:i,disabled:a,hasLinearNavigation:l}),[M.Search]:({pages:e,RouterLink:t,isEditor:o,hasSearch:n,hideIcons:r,cssFontFamily:i,translator:a,cssText:l,docLocale:c})=>{let d;if(!n)return null;if(!o){const u=e.map(p=>({id:p.beckyId,path:p.identifier}));d={LinkComponent:t,routeMap:u}}return s.createElement(Sn,{docData:e,docLocale:c,cssFontFamily:i,cssText:l,isOnlyShowIcon:o,isVisible:!r,key:"search",parentElementId:"navigation-wrapper",routing:d,translator:a})},[M.CoBranding]:({barPosition:e,viewport:t,hasCoBranding:o,dispatchAction:n})=>o?s.createElement(Zm,{barPosition:e,key:"co-branding",onMouseEnter:n?n(ut.CoBrandingEnter):void 0,onMouseLeave:n?n(ut.CoBrandingLeave):void 0,viewport:t}):null,[M.Divider]:({index:e})=>s.createElement(bs,{key:`divider-${e}`})},sn={[ee.Start]:[M.Menu,M.PageIndicator],[ee.Center]:[M.Logo],[ee.End]:[M.Search,M.VolumeControl,M.SocialIcons,M.CoBranding]},Gs={[he.sm]:{[$.Top]:sn,[$.Bottom]:sn,[$.BottomWithMenu]:sn,[$.TopWithMenu]:sn},[$.Top]:{[ee.Start]:[M.Menu,M.PageIndicator,M.PageName],[ee.Center]:[M.Logo],[ee.End]:[M.Search,M.VolumeControl,M.SocialIcons,M.CoBranding]},[$.Bottom]:{[ee.Start]:[M.Menu,M.PageIndicator,M.PageName],[ee.Center]:[M.Logo],[ee.End]:[M.Search,M.VolumeControl,M.SocialIcons,M.CoBranding]},[$.BottomWithMenu]:{[ee.Start]:[[M.Logo,{size:57}],M.Menu,M.PageIndicator,M.MenuBar],[ee.End]:[M.Search,M.VolumeControl,M.SocialIcons,M.CoBranding]},[$.TopWithMenu]:{[ee.Start]:[[M.Logo,{size:45}],M.Menu,M.PageIndicator,M.MenuBar],[ee.End]:[M.Search,M.VolumeControl,M.SocialIcons,M.CoBranding]}},Ih=(e,t,o,n)=>{const r=`${e}${n?"-withMenuBar":""}`;return G(Gs,[o,r,t])||G(Gs,[r,t])},Ch=(e,t)=>Array.isArray(e)?no[e[0]](g(g({},t),e[1])):no[e](t),Sh=(e,t,o)=>e.map(n=>({component:Ch(n,g(g({},t),o)),name:n})).filter(({component:n})=>n).reduce((n,r,i,a)=>(r.name===M.CoBranding&&i!==0&&n.pop(),n.push(r.component),i<a.length-1&&n.push(no[M.Divider]({index:i})),n),[]);var ut;(function(e){e.CoBrandingEnter="enter-coBranding",e.CoBrandingLeave="leave-coBranding"})(ut||(ut={}));const xh=y.div`
	${({barPosition:e,isEditor:t,hasEnabledCommentsBar:o})=>t?`
				position: absolute;
				${e===$.Top&&"height: 100vh;"}
			`:`
				position: fixed;
				z-index: 999;
				top: 0;
				right: 0;
				bottom: 0;
				left: 0;
				${o&&`top: ${jl};`}
        `}}
        
	width: 100%;
	transition: opacity 300ms linear;
	pointer-events: none !important;
	opacity: 1;

	& > * {
		${({isEditor:e})=>`pointer-events: ${e?"none":"auto"} !important;`}
	}

	.open-modal & {
		opacity: 0;
	}
	.open-modal & * {
		pointer-events: none;
	}

	${({cssText:e})=>e}
`,kh=({barPosition:e,children:t,cssText:o,isEditor:n,hasEnabledCommentsBar:r})=>s.createElement(xh,{barPosition:e,className:"container",cssText:o,isEditor:n,hasEnabledCommentsBar:r},t);class _h extends s.Component{constructor(t){super(t);R(this,"dispatchAction",t=>()=>{switch(t){case ut.CoBrandingEnter:this.setState({openedCoBranding:!0});break;case ut.CoBrandingLeave:this.setState({openedCoBranding:!1});break}});R(this,"renderBar",(t,o)=>{const{viewport:n,withMenuBar:r,cssFontFamily:i}=this.props,{openedCoBranding:a}=this.state,l=this.state.overviewOpenState===V.Open,c=Ih(t,o,n,r);return c?Sh(c,O(g({},this.props),{isMenuExpanded:l,position:o,hideIcons:a,cssFontFamily:i}),{dispatchAction:this.dispatchAction,handleNavigateToHomeRoute:this.props.handleNavigateToHomeRoute,setAudioMuted:this.props.setAudioMuted,setPane:this.setPane,toggleOverview:this.toggleOverview}):null});R(this,"renderOrderedPrevNextButtons",(t,o,n,r,i,a)=>{const{totalPages:l,pageIndex:c,nextRoute:d,prevNextColors:u,prevRoute:p,RouterLink:h,translator:f}=this.props,{overviewOpenState:E}=this.state,b=c===0,v=c===l-1;return l===1?null:!n&&t===$.Top?s.createElement(ks,{ariaHidden:E===V.Open,barPosition:t,isEditor:o,hasLinearNavigation:n},s.createElement(tn,{ariaLabel:f.translate("Previous page"),barPosition:t,colors:u,direction:oe.Previous,disabled:b,RouterLink:h,to:p,hasLinearNavigation:n,previousButtonDisabled:b,nextButtonDisabled:v,page:c&&c>0?r[c-1]:void 0,themeParagraphFontFamily:i,themeHeadingFourFontFamily:a,isEditor:o}),s.createElement(tn,{ariaLabel:f.translate("Next page"),barPosition:t,colors:u,direction:oe.Next,disabled:v,RouterLink:h,to:d,hasLinearNavigation:n,previousButtonDisabled:b,nextButtonDisabled:v,page:c&&c>0?r[c+1]:void 0,themeParagraphFontFamily:i,themeHeadingFourFontFamily:a,isEditor:o})):s.createElement(ks,{ariaHidden:E===V.Open,barPosition:t,isEditor:o,hasLinearNavigation:n},s.createElement(tn,{ariaLabel:f.translate("Next page"),barPosition:t,colors:u,direction:oe.Next,disabled:v,RouterLink:h,to:d,hasLinearNavigation:n,previousButtonDisabled:b,nextButtonDisabled:v,page:c!==void 0?r[c+1]:void 0,themeParagraphFontFamily:i,themeHeadingFourFontFamily:a,isEditor:o}),s.createElement(tn,{ariaLabel:f.translate("Previous page"),barPosition:t,colors:u,direction:oe.Previous,disabled:b,RouterLink:h,to:p,hasLinearNavigation:n,previousButtonDisabled:b,nextButtonDisabled:v,page:c!==void 0&&c>0?r[c-1]:void 0,themeParagraphFontFamily:i,themeHeadingFourFontFamily:a,isEditor:o}))});R(this,"featureFlagForTabletAndMobile",t=>t>he.md);this.state={openedCoBranding:!1,openedTabInOverview:ie.Pages,overviewOpenState:V.Pending,pane:null},this.handleKeyDown=this.handleKeyDown.bind(this),this.setActiveOverviewTab=this.setActiveOverviewTab.bind(this),this.setPane=this.setPane.bind(this),this.toggleOverview=this.toggleOverview.bind(this)}shouldComponentUpdate(t,o){const{openedCoBranding:n,openedTabInOverview:r,overviewOpenState:i,pane:a}=this.state;return n!==o.openedCoBranding||r!==o.openedTabInOverview||i!==o.overviewOpenState||a!==o.pane||t.currentPage.name!==this.props.currentPage.name||t.viewport!==this.props.viewport||t.prevNextNode!==this.props.prevNextNode?!0:t.currentPage!==this.props.currentPage.pageNumber}updateDocumentFocus(){const t=document.body.classList.contains("accessibility"),o=document.getElementById("foleon-logo-anchor"),n=document.getElementById("overview-button");!this.props.withMenuBar&&o&&t&&o.focus(),n&&t&&n.focus()}componentDidUpdate(t){if(this.state.overviewOpenState===V.Open){const o=document.querySelector("article");o&&o.setAttribute("aria-hidden","true");let n;this.state.openedTabInOverview===ie.Pages&&(n=document.getElementById("pagesTab")),this.state.openedTabInOverview===ie.Editions&&(n=document.getElementById("editionsTab")),n&&n.focus(),document.addEventListener("keydown",this.handleKeyDown)}if(this.state.overviewOpenState===V.Closed){const o=document.querySelector("article");o&&o.removeAttribute("aria-hidden"),document.removeEventListener("keydown",this.handleKeyDown),this.updateDocumentFocus(),this.setState({overviewOpenState:V.Pending})}this.state.overviewOpenState===V.Pending&&t.currentPathname!==this.props.currentPathname&&this.updateDocumentFocus()}setPane(t){this.setState({pane:t})}handleKeyDown(t){(t.key==="Escape"||t.key==="Esc")&&this.setState({overviewOpenState:V.Closed})}toggleOverview(){const{overviewOpenState:t}=this.state,o=document.querySelector('[data-testid="comments-bar"]');t===V.Closed||t===V.Pending?(this.setState({overviewOpenState:V.Open}),o&&(o.style.display="none")):(this.setState({overviewOpenState:V.Closed}),o&&(o.style.display="flex"),document.removeEventListener("keydown",this.handleKeyDown))}setActiveOverviewTab(t){this.setState({openedTabInOverview:t})}render(){const{apiURL:t,barColors:o,barPosition:n,navigatorPageNameText:r,cssText:i,currentPage:a,currentPathname:l,docId:c,docName:d,hasDisabledNavigation:u,hasEditionsHidden:p,hasEnabledPageButtons:h,cssFontFamily:f,themeParagraphFontFamily:E,themeHeadingFourFontFamily:b,pages:v,prevNextNode:T,RouterLink:w,socialPlatforms:_,translator:k,viewport:x,isEditor:I,hasEnabledCommentsBar:S,hasLinearNavigation:A}=this.props,j=this.featureFlagForTabletAndMobile(x)?n:$.Top,{overviewOpenState:ge,openedTabInOverview:L}=this.state,re=T?Oi.createPortal(this.renderOrderedPrevNextButtons(j,I,!!A,v,E,b),T):this.renderOrderedPrevNextButtons(j,I,!!A,v,E,b);return u&&!h?null:u&&h?re:s.createElement(kh,{hasEnabledCommentsBar:S,barPosition:n,cssText:i,isEditor:I},s.createElement(z0,{title:a.name,docName:d}),s.createElement(nm,{barColors:o,barPosition:j,ariaHidden:ge===V.Open},s.createElement(Q0,{cssText:r,barPosition:j},this.renderBar(j,ee.Start)),this.renderBar(j,ee.Center),s.createElement(J0,{isEditor:I,barPosition:j},this.renderBar(j,ee.End))),!I&&s.createElement(Fm,{hasLinearNavigation:!!A,barPosition:j,activeOverviewTab:L,apiURL:t,currentPathname:l,docId:c,hideEditions:p,cssFontFamily:f,themeParagraphFontFamily:E,themeHeadingFourFontFamily:b,overviewOpenState:ge,pages:v,RouterLink:w,setActiveOverviewTab:this.setActiveOverviewTab,socialPlatforms:_,toggleOverview:this.toggleOverview,translator:k,viewport:x},x===he.sm&&s.createElement(Ns,{isVisible:!0,socialPlatforms:_,translator:k,viewport:x})),h&&re)}}const{send:zs,TRACKING_CATEGORY:Us,TRACKING_EVENT:Hs}=Ve.events,Ah=y.div`
	${({barPosition:e,isEditor:t})=>t&&`
			position: sticky;
			z-index: 110;
			left: 28px;
			right: 28px;
			width: 100%;
			pointer-events: none;
			${e===$.Bottom?"top: 100vh; bottom: 60px;":"top: 50px;"}
		`}
`;class Nh extends s.Component{constructor(t){super(t);R(this,"_totalPages");R(this,"_routeMap",{});this.handlePageChange=this.handlePageChange.bind(this),this._totalPages=t.pages.length,t.routeMap&&(this._routeMap=t.routeMap)}getRoute(t){return t.router?t.router.location.pathname:t.currentPathname||"/"}getCurrentPage(t){return this._routeMap[this.getRoute(t)]}getNextRoute(){try{const t=this.getCurrentPage(this.props);return t.pageNumber<this._totalPages&&t.pageNumber!==this._totalPages?this.props.pages[t.pageNumber].identifier:!1}catch(t){return console.error("Error in getNextRoute()",t),!1}}getPrevRoute(){try{const t=this.getCurrentPage(this.props);return t.pageNumber>1?this.props.pages[t.pageNumber-2]&&this.props.pages[t.pageNumber-2].identifier:!1}catch(t){return console.error("Error in getPrevRoute()",t),!1}}handlePageChange(t,o=!1){const{handlePageChange:n}=this.props,r=o?Hs.SWIPE:Hs.ARROW_KEY;if(t===oe.Next){const i=this.getNextRoute();i&&zs(Us.GESTURE,r,i),n&&n(t)}else if(t===oe.Previous){const i=this.getPrevRoute();i&&zs(Us.GESTURE,r,i),n&&n(t)}}render(){const{apiURL:t,audioMuted:o,barColors:n,barPosition:r,currentPage:i,currentPageNumber:a,currentPathname:l,customUrl:c,docId:d,docName:u,handleNavigateToHomeRoute:p,hasCoBranding:h,hasDisabledNavigation:f,hasEditionsHidden:E,hasEnabledCustomUrl:b,hasEnabledPageButtons:v,hasEnabledPageMenuButton:T,hasEnabledPageNumbers:w,hasEnabledSocial:_,hasSearch:k,isEditor:x,logo:I,cssText:S,nextRouteIdentifier:A,cssFontFamily:U,themeParagraphFontFamily:j,themeHeadingFourFontFamily:ge,navigatorPageNameText:L,pages:re,prevNextColors:D,prevNextNode:H,prevRouteIdentifier:ae,router:pe,RouterLink:Je,setAudioMuted:le,showVolumeControl:N,socialPlatforms:K,translator:te,viewport:se,withMenuBar:Z,docLocale:Fe,hasEnabledCommentsBar:Le,hasLinearNavigation:Me,inCommentsMode:Ce}=this.props;return s.createElement(Ah,{barPosition:r,id:"navigation-wrapper",isEditor:x},s.createElement(_h,{hasLinearNavigation:Me,apiURL:t,audioMuted:o,barColors:n,navigatorPageNameText:L,cssText:S,barPosition:r||$.Top,currentPage:i,currentPageNumber:a,currentPathname:l,customUrl:c,docId:d,docName:u,docLocale:Fe,handleNavigateToHomeRoute:p,hasEnabledCommentsBar:Le,hasCoBranding:h,hasDisabledNavigation:f,hasEditionsHidden:E,hasEnabledCustomUrl:b,hasEnabledPageButtons:Ue(v)?!f:v,hasEnabledPageNumbers:w,hasEnabledPageMenuButton:T,hasEnabledSocial:Ue(_)?!wo(K).every(et):_,hasSearch:k,isEditor:x,logo:I,nextRoute:A||!1,cssFontFamily:U,themeParagraphFontFamily:j,themeHeadingFourFontFamily:ge,pages:re,pageIndex:i.pageNumber-1,prevNextColors:D,prevNextNode:H,prevRoute:ae||!1,router:pe,RouterLink:Je,setAudioMuted:le,showVolumeControl:N,socialPlatforms:K,totalPages:this._totalPages,translator:te,viewport:se,withMenuBar:Z}),!x&&!Ce&&s.createElement(s.Fragment,null,s.createElement(G0,{onBackwardSwipe:()=>this.handlePageChange(oe.Previous,!0),onForwardSwipe:()=>this.handlePageChange(oe.Next,!0)}),s.createElement(Hp,{onLeftArrowPressed:()=>this.handlePageChange(oe.Previous),onRightArrowPressed:()=>this.handlePageChange(oe.Next)})))}}function Rh(e){const{currentPageData:t}=ct(),{currentPageBackgrounds:o}=e(r=>{const i=Object.values(r[Wl.identity]||{}).reduce((a,l)=>l&&l.parent.id===t.id?[...a,l.id]:a,[]);return{currentPageBackgrounds:Object.values(r[ql.identity]||{}).filter(a=>a&&i.includes(a.parent.id))}});return{hasBackgroundVideo:m.exports.useMemo(()=>o.some(r=>r&&r.type==="video"),[o])}}const Lh=e=>e.reduce((t,o)=>(t[o.identifier]=o,t),{}),Mh=c=>{var d=c,{ariaCurrent:e,ariaLabel:t,children:o,disabled:n,handleClick:r,routeChangedCallback:i,to:a}=d,l=Se(d,["ariaCurrent","ariaLabel","children","disabled","handleClick","routeChangedCallback","to"]);const u=Ae(),{currentPageData:p}=ct(),h=xe();let f,E;typeof a=="string"?(f=u[a].pageNumber>p.pageNumber?J.SlideLeft:J.SlideRight,E=a):(f=a.state.forward?J.SlideLeft:J.SlideRight,E=a.pathname);const _=l,{foleonElement:b,prefetch:v}=_,T=Se(_,["foleonElement","prefetch"]),w=k=>{if(k.preventDefault(),!n){if(h.push({pathname:E,state:g({},f?{pageTransition:f}:{})}),r){r();return}if(i){i();return}}};return s.createElement("a",g(g({"aria-current":e,"aria-label":t,"data-testid":t,onClick:w,href:Tt(E)},n&&{tabIndex:-1}),T),o)},It=(e,t)=>typeof e!="undefined"&&e!==null?e:t,Oh=e=>g({has_page_buttons:It(e.has_page_buttons,e.has_enabled_page_buttons),has_social:It(e.has_social,e.has_enabled_social),has_page_menu_button:It(e.has_page_menu_button,e.has_enabled_page_menu_button),has_custom_url:It(e.has_custom_url,e.has_enabled_custom_url),has_page_numbers:It(e.has_page_numbers,e.has_enabled_page_numbers)},e),Ph=({apiURL:e,prevNextNode:t,hasEnabledCommentsBar:o})=>{var so,io;const n=W(),r=xe(),i=Ae(),{entity:a}=Ie(C,`${n.doc.id}`),l=m.exports.useRef(a),c=m.exports.useRef(n.doc),[d,u]=m.exports.useState(20),p=xn(),{setAudioMuted:h}=cr(),{hasBackgroundVideo:f}=Rh(C),{getFoleonImageAsset:E}=ot(),b=yt(),v=P();m.exports.useEffect(()=>{u(v)},[v]);const T=m.exports.useMemo(()=>Object.values(i).map(we=>{var pt,ao;const be=n.pages.find(({beckyId:ni,id:oi})=>(ni||oi)===we.beckyId);return O(g({},we),{meta:{screenshotLinks:(be==null?void 0:be.screenshotLinks)||((ao=(pt=be==null?void 0:be._embedded)==null?void 0:pt.screenshot)==null?void 0:ao._links)||{}},options:(be==null?void 0:be.options)||{exclude_from_navigationbar:!1,has_disabled_header:!1}})}),[n.pages,i]),{currentPageData:w,nextPageData:_,prevPageData:k}=ct(),{navigator:x,cssText:I,cssPageIndicator:S,cssFontFamily:A,themeParagraphFontFamily:U,themeHeadingFourFontFamily:j}=Yl(l.current),ge={active:S,background:x.bar&&((so=x.bar[50].background)==null?void 0:so.color),icon:x.bar[50].color},L={background:x.prevNext&&((io=x.prevNext[50].background)==null?void 0:io.color),icon:x.prevNext[50].color},re=E(x.logo.assetRef),D=re?{url:re.url,properties:re.properties,alt:re.alt}:void 0,{isScreenshot:H,isPrint:ae}=q();if(H||ae)return null;const pe=Object.values(i).find(we=>we.pageNumber===1),Je=(pe==null?void 0:pe.id)===w.id,le=Lh(T),N=G(k,"identifier",""),K=G(_,"identifier",""),te=T.find(we=>we.id===w.id),{has_page_numbers:se,has_social:Z,has_search:Fe,social_platforms:Le,has_custom_url:Me,custom_url:Ce,has_cobranding:We,has_editions_hidden:qe,has_page_buttons:Ge,has_disabled_navigation:Y,has_page_menu_button:F,has_linear_navigation:Q}=Oh(c.current.options),St=we=>{const be=we===oe.Next?J.SlideLeft:J.SlideRight,pt=we===oe.Next?_:k;pt&&r.push({pathname:`${pt.identifier}`,state:g({},be?{pageTransition:be}:{})})},Zs=we=>{if(!Me){if(we.preventDefault(),Je)return;r.push({pathname:pe==null?void 0:pe.identifier,state:{pageTransition:J.SlideRight}})}},Js=Ue(Ge)?!Y:Ge,ei=Ue(Z)?!wo(Le).every(et):Z,ti=Ue(Q)?!1:Q;return s.createElement(Nh,{apiURL:e,audioMuted:p.audio.muted,barColors:Pi(ge,Ue),barPosition:x.position,hasEnabledCommentsBar:o,currentPage:te,currentPathname:w.identifier,currentPageNumber:w.pageNumber,customUrl:Ce,docId:`${c.current.id}`,docName:c.current.name,docLocale:c.current.options.locale,handleNavigateToHomeRoute:Zs,handlePageChange:St,hasCoBranding:We,hasDisabledNavigation:Y,hasEditionsHidden:qe||b===ht.zip,hasEnabledCustomUrl:Me,hasEnabledPageButtons:Js,hasEnabledPageMenuButton:F,hasEnabledPageNumbers:se,hasEnabledSocial:ei,hasSearch:Fe,hasLinearNavigation:ti,isEditor:!1,inCommentsMode:p.inCommentsMode,logo:D,cssText:I,prevNextNode:t,nextRouteIdentifier:K,cssFontFamily:A,themeParagraphFontFamily:U,themeHeadingFourFontFamily:j,navigatorPageNameText:I,pages:T,prevNextColors:L,prevRouteIdentifier:N,router:r,routeMap:le,RouterLink:Mh,setAudioMuted:h,showVolumeControl:f,socialPlatforms:Le,translator:Xl,viewport:d,withMenuBar:x.pageNames})},Ct=(e,t,o,n)=>{const r=typeof window!="undefined"&&window.localStorage&&dn(window.localStorage.getItem(kt.SETTINGS)),i=z.isAllowed(X.MARKETING);(!e&&r||i)&&(t.type="text/javascript",t.setAttribute("src",o)),i||(t.type="text/plain",t.setAttribute("data-src",o),t.setAttribute(Xo,X.MARKETING)),e&&!i&&(t.setAttribute(Xo,X.MARKETING),z.addScript(t),n&&n())},Dh=(e,t,o)=>{window._elqQ=window._elqQ||[],window._elqQ.push(["elqSetSiteId",e]),t&&window._elqQ.push(["elqUseFirstPartyCookie",t]),function(){const r=document.createElement("script");r.id="eloqua-tracking-script",r.async=!0,Ct(o,r,"//img.en25.com/i/elqCfg.min.js");const a=document.getElementsByTagName("script")[0];a.parentNode&&a.parentNode.insertBefore(r,a)}()},$h=(e,t)=>{Dh(t.site_id,t.custom_tracker_subdomain,e),window._elqQ&&setTimeout(()=>{t&&t.custom_tracker_subdomain&&window._elqQ.push(["elqUseFirstPartyCookie",t.custom_tracker_subdomain]),z.isAllowed(X.MARKETING)&&window._elqQ.push(["elqTrackPageView",window.location.href])},0)},Bh=({hasTrackingDisabled:e,accountId:t,publicationId:o,publicationGroupId:n,publicationCategory:r,hasCookieCheck:i,foleonAnalyticsURL:a})=>{if(e)return;e||Oe.foleonAnalytics.addScript(i,a);const l=function(){window.ia({type:"initialize",context:{accountId:t,publicationId:o,publicationGroupId:n,publicationCategory:r}})};window.ia&&l()},Fh=({uacode:e,hasTrackingDisabled:t,publicationId:o,publicationCategory:n,pageId:r,hasTrackingAnonymized:i,hasCookieCheck:a})=>{const l=e&&e.includes("UA-")?e:!1;(!t||l)&&Oe.googleAnalytics.addScript(a,i);const c=function(){if(t&&l)window.ga("create",e,"auto"),window.ga("send","pageview",{dimension1:o,dimension2:"T2",dimension3:r,dimension4:n}),window.trackersArray=[""];else{if(t&&!l)return;l&&!t?(window.ga("create",e,"auto"),window.ga("create","UA-36092362-3","auto","im"),i&&(window.ga("set","anonymizeIp",!0),window.ga("im.set","anonymizeIp",!0)),window.ga("send","pageview",{dimension1:o,dimension2:"T2",dimension3:r,dimension4:n}),window.ga("im.send","pageview",{dimension1:o,dimension2:"T2",dimension3:r,dimension4:n}),window.trackersArray=["im",""]):!l&&!t&&(window.ga("create","UA-36092362-3","auto","im"),window.ga("im.send","pageview",{dimension1:o,dimension2:"T2",dimension3:r,dimension4:n}),window.ga("im.set","anonymizeIp",!0),window.trackersArray=["im"])}};setTimeout(()=>{c()},0)},oo=e=>{const t=document==null?void 0:document.getElementById(e);t&&t.remove()},Gh=(e,{hubId:t,is_enabled:o,hublet:n})=>{!o||function(){var d;const i="hs-script-loader";oo(i),z.deleteScript(X.MARKETING,i);const a=document.createElement("script");a.id=i;const l=`//js${n?`-${n}`:""}.hs-scripts.com/${t}.js`;Ct(e,a,l,Vs);const c=document.getElementsByTagName("script")[0];(d=c.parentNode)==null||d.insertBefore(a,c)}()},zh=(e,t)=>{(function(){var l;const n="hs-script-collected-forms-loader";oo(n),z.deleteScript(X.MARKETING,n);const r=document.createElement("script");r.id=n,r.async=!0;const i=`https://js${t?`-${t}`:""}.hscollectedforms.net/collectedforms.js`;Ct(e,r,i);const a=document.getElementsByTagName("script")[0];(l=a.parentNode)==null||l.insertBefore(r,a)})()},Vs=()=>{const e=z.isAllowed(X.MARKETING);window._hsq&&e&&setTimeout(()=>{window._hsq.push(["setPath",window.location.pathname]),window._hsq.push(["trackPageView"])},0)},Uh=(e,t)=>{let o=!1;const n=()=>{o===!1&&(o=!0,window.Munchkin.init(e))},r="marketo-script-loader",i=document==null?void 0:document.createElement("script");i.id=r,Ct(t,i,"//munchkin.marketo.net/munchkin.js"),i.onreadystatechange=function(){(this.readyState=="complete"||this.readyState=="loaded")&&n()},i.onload=n,document.getElementsByTagName("head")[0].appendChild(i)},Hh=()=>{const e=z.isAllowed(X.MARKETING);window.Munchkin&&e&&setTimeout(()=>{window.Munchkin.munchkinFunction("visitWebPage",{url:window.location.pathname,params:window.location.search})},0)},Vh=(e,{piCid:t,piAid:o,pardotTrackingScriptURL:n})=>{window.piAId=o,window.piCId=t,window.piHostname=n,function(){var d;const i="pardot-script-loader";oo(i),z.deleteScript(X.MARKETING,i);const a=document.createElement("script");a.id=i;const l=(document.location.protocol=="https:"?"https://pi":"http://cdn")+".pardot.com/pd.js";Ct(e,a,l);const c=document.getElementsByTagName("script")[0];(d=c.parentNode)==null||d.insertBefore(a,c)}()},Kh=e=>{const{trackerCRM:t,trackerGA:o,trackerFA:n}=e;if(t){const{hubspot:r,hasCookieCheck:i,marketo:a}=t;Ks(t),Gh(i,r),a&&a.munchkin_id&&a.is_enabled&&Uh(a.munchkin_id,i)}o&&(Fh(o),js()),n&&Bh(n)},Ks=e=>{if(e){const{marketo:t,eloqua:o,pardot:n,hasCookieCheck:r}=e;t&&t.munchkin_id&&t.is_enabled&&Hh(),n&&n.piCid&&n.piAid&&Vh(r,n),o&&o.site_id&&$h(r,o)}},jh=e=>{const{trackerCRM:t}=e;if(t){const{hubspot:o,hasCookieCheck:n}=t;o&&o.hubId&&o.is_enabled&&!Di(o.hublet)&&(Vs(),zh(n,o.hublet)),Ks(t)}js()},js=()=>{window.ga&&typeof window.trackersArray!="undefined"&&z.isAllowed(X.STATISTICS)&&setTimeout(()=>{window.trackersArray.forEach(e=>{window.ga(`${e.length>0?`${e}.`:""}set`,"page",location.pathname),window.ga(`${e.length>0?`${e}.`:""}send`,"pageview")})},0)},Wh=e=>{window.ia&&setTimeout(()=>{window.ia({type:"pageview",context:{pageId:e}})},0)};var Ws;(function(e){e.docId="docId",e.pageId="pageId",e.templateId="templateId",e.itemId="itemId",e.overlayId="overlayId",e.themeId="themeId"})(Ws||(Ws={}));var an;(function(e){e.contentService="contentService",e.dynamicOverride="dynamicOverride",e.prefetchDisabled="prefetchDisabled",e.publishOverride="publishOverride",e.trackingOverride="trackingOverride"})(an||(an={}));const qh=e=>{const t="document.addEventListener('DOMContentLoaded', function () {",o="});",n="foleon(";return e&&e.includes(n)?`${t}${e}${o}`:e},qs=e=>{const{script:t}=s.useMemo(()=>Qo(e),[e]),{acceptedCookieConsentSettings:o}=s.useContext(Pe),n=s.useMemo(()=>{if(typeof window=="undefined")return!1;const r=new URLSearchParams(window.location.search);return r.has(an.publishOverride)||r.has(an.trackingOverride)},[]);s.useEffect(()=>{!n||et(t)||t.filter(({attributes:r})=>r&&r["data-cookieconsent"]==="statistics").forEach(r=>{if(o.statistics){const i=r.children&&new Function(r.children);i&&i()}})},[o.statistics]),s.useEffect(()=>{!n||et(t)||t.filter(({attributes:r})=>r&&r["data-cookieconsent"]==="preferences").forEach(r=>{if(o.preferences){const i=r.children&&new Function(r.children);i&&i()}})},[o.preferences]),s.useEffect(()=>{!n||et(t)||t.filter(({attributes:r})=>r&&r["data-cookieconsent"]==="marketing").forEach(r=>{if(o.marketing){const i=r.children&&new Function(r.children);i&&i()}})},[o.marketing]),s.useEffect(()=>{!n||et(t)||t.filter(({attributes:r})=>!r||typeof r["data-cookieconsent"]===void 0).forEach(r=>{const i=r.children&&new Function(r.children);i&&i()})},[])},Yh=(e,t=!1)=>{if(!e||e.length<2)return;const{style:o,link:n,meta:r,script:i}=Qo(e);return s.createElement(s.Fragment,null,r.map(({attributes:a},l)=>s.createElement("meta",g({key:`meta-${l}`},a))),!t&&i.map(({attributes:a,children:l},c)=>s.createElement("script",O(g({key:`script-${c}`},a),{dangerouslySetInnerHTML:{__html:qh(l)||""}}))),t?o.map(({attributes:a,children:l},c)=>s.createElement("style",g({type:"text/css",key:`style-${c}`},a),l||"")):o.map(({attributes:a,children:l},c)=>s.createElement("style",O(g({key:`style-${c}`},a),{dangerouslySetInnerHTML:{__html:l||""}}))),n.map(({attributes:a},l)=>s.createElement("link",g({key:`link-${l}`},a))))},Xh=e=>{const{currentPageData:t}=ct(),o=t.beckyId,{acceptedCookieConsentSettings:n}=m.exports.useContext(Pe);qs(e.trackerRemarketingField.headerCode),qs(e.trackerGTM.gtmCode),m.exports.useEffect(()=>{if(!window.foleon||typeof window.foleon!="function"){console.error("[tracking/useRouterSubscribe]: implement window.foleon tracking");return}window.foleon("onPageChange",()=>{jh(e)}),Kh(e);const r=location.search||window.document.referrer;ms("sessionStorage")===!0&&window.sessionStorage.setItem("referrerParamsFromUrl",r)},[]),m.exports.useEffect(()=>{window.ia&&n.statistics&&Wh(o),window._elqQ&&n.marketing&&window._elqQ.push(["elqTrackPageView",window.location.href]),window.Munchkin&&setTimeout(()=>{const r=document.querySelectorAll("a");n.marketing?r.forEach(i=>{i.classList.remove("mchNoDecorate")}):r.forEach(i=>{i.classList.add("mchNoDecorate")})},0)},[o,n.statistics,n.marketing])},Qh=e=>e===ht.publish||e===ht.zip,Zh=({pageId:e="",foleonAnalyticsURL:t="",pardotTrackingScriptURL:o="",environment:n,trackingOverride:r})=>{const{isScreenshot:i,isPrint:a}=q();return r===!0||!(i||a)&&Qh(n)?Jh(e,t,o):null},Jh=(e,t,o)=>{const{project:n,doc:r}=W(),i=m.exports.useRef(n),a=m.exports.useRef(r),l={marketo:{is_enabled:G(i.current,"marketo_code.is_enabled"),munchkin_id:G(i.current,"marketo_code.munchkin_id")},pardot:{piCid:G(i.current,"pardot_code.piCid"),piAid:G(i.current,"pardot_code.piAid"),pardotTrackingScriptURL:o},eloqua:{site_id:G(i.current,"eloqua_code.site_id"),custom_tracker_subdomain:G(i.current,"eloqua_code.custom_tracker_subdomain")},hubspot:{hubId:G(i.current,"hubspot_code.hub_id"),is_enabled:G(i.current,"hubspot_code.is_enabled"),hublet:G(i.current,"hubspot_code.hublet","")},hasCookieCheck:G(a.current.options,"has_cookie_check")},c={uacode:G(i.current,"ua_code")||"",hasTrackingAnonymized:G(a.current.options,"anonymize_ip"),publicationId:G(a.current,"id"),publicationCategory:G(a.current,"category"),pageId:e,hasTrackingDisabled:G(a.current.options,"has_tracking_disabled"),hasCookieCheck:G(a.current.options,"has_cookie_check")},d={hasTrackingDisabled:G(a.current.options,"has_tracking_disabled",!1),accountId:G(i.current._embedded.account,"id"),publicationId:G(a.current,"id"),publicationGroupId:G(i.current,"id"),publicationCategory:G(a.current,"category"),hasCookieCheck:G(a.current.options,"has_cookie_check"),foleonAnalyticsURL:t},u={gtmCode:G(a.current.options,"gtm_code")||""},p={headerCode:G(a.current.options,"header_code")||""};return Xh({trackerCRM:l,trackerGA:c,trackerFA:d,trackerGTM:u,trackerRemarketingField:p}),null};Oe.events;const ef=e=>e.includes("_")?e.split("_")[0]:e,tf=()=>{const{doc:e}=W(),{entity:t}=Ie(C,e.id.toString()),{getFoleonImageAsset:o}=ot(),n=o(t.navigation.favicon.assetRef),r=yt(),i=n==null?void 0:n.url;return r!==vn.preview?null:s.createElement(Io,{htmlAttributes:{lang:ef(e.options.locale||"en_gb")}},Yh(e.options.header_code||"",!0),i&&s.createElement("link",{rel:"shortcut icon",sizes:"16x16",href:i}))},nf=()=>{const{isScreenshot:e,isPrint:t}=Jl();if(e||t)return null;if(typeof window!="undefined"){const o=window.document.getElementById("app");o&&o.classList.add(Ql)}return Zl()},of=Ee`
	@page {
		margin: 1cm;
		size: portrait;
	}

	@media only print {
		html {
			font-size: 10px !important;
		}
		article {
			page-break-after: always;
			display: block !important;
		}
		article,
		.im-overlay {
			display: block !important;
		}
		figure,
		h1,
		h2,
		h3,
		h4,
		h5,
		h6,
		form {
			-webkit-column-break-inside: avoid;
			break-inside: avoid;
		}
		[data-scroll='buttons'] {
			display: none !important;
		}
		.section_inner {
			max-width: 1200px !important;
		}
		section {
			max-height: none !important;
		}
		section,
		.im-column {
			-webkit-column-break-inside: avoid;
			page-break-inside: avoid;
			break-inside: avoid;
			position: relative;
		}
		* {
			opacity: 1 !important;
			background-attachment: initial !important;
			animation-duration: 0s !important;
			animation-delay: 0s !important;
			transition-duration: 0s !important;
			transition-delay: 0s !important;
		}
	}
`,Ys=ce`
  0% {
    transform: scale(1.);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1.1);
  }
`,Xs=ce`
  0% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`,rf=Ee`
	.rc-switch {
		position: relative;
		display: inline-block;
		box-sizing: border-box;
		width: 44px;
		height: 22px;
		line-height: 20px;
		vertical-align: middle;
		border-radius: 20px 20px;
		border: 1px solid #19b2d2;
		background-olor: #19b2d2;
		cursor: pointer;
		transition: all 0.3s cubic-bezier(0.35, 0, 0.25, 1);
	}
	.rc-switch {
		position: relative;
		display: inline-block;
		box-sizing: border-box;
		width: 44px;
		height: 22px;
		line-height: 20px;
		vertical-align: middle;
		border-radius: 20px 20px;
		border: 1px solid #ccc;
		background-color: #ccc;
		cursor: pointer;
		transition: all 0.3s cubic-bezier(0.35, 0, 0.25, 1);
	}
	.rc-switch-inner {
		color: #fff;
		font-size: 12px;
		position: absolute;
		left: 24px;
	}
	.rc-switch:after {
		position: absolute;
		width: 18px;
		height: 18px;
		left: 2px;
		top: 1px;
		border-radius: 50% 50%;
		background-color: #fff;
		content: ' ';
		cursor: pointer;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);
		-webkit-transform: scale(1);
		transform: scale(1);
		transition: left 0.3s cubic-bezier(0.35, 0, 0.25, 1);
		-webkit-animation-timing-function: cubic-bezier(0.35, 0, 0.25, 1);
		animation-timing-function: cubic-bezier(0.35, 0, 0.25, 1);
		-webkit-animation-duration: 0.3s;
		animation-duration: 0.3s;
		-webkit-animation-name: ${Xs};
		animation-name: ${Xs};
	}
	.rc-switch:hover:after {
		-webkit-transform: scale(1.1);
		transform: scale(1.1);
		-webkit-animation-name: ${Ys};
		animation-name: ${Ys};
	}
	.rc-switch-checked {
		border: 1px solid #008a00;
		background-color: #008a00;
	}
	.rc-switch-checked .rc-switch-inner {
		left: 6px;
	}
	.rc-switch-checked:after {
		left: 22px;
	}
	.rc-switch-disabled {
		cursor: no-drop;
		background: #ccc;
		border-color: #ccc;
	}
	.rc-switch-disabled:after {
		background: #9e9e9e;
		-webkit-animation-name: none;
		animation-name: none;
		cursor: no-drop;
	}
	.rc-switch-disabled:hover:after {
		-webkit-transform: scale(1);
		transform: scale(1);
		-webkit-animation-name: none;
		animation-name: none;
	}
	.rc-switch-label {
		display: inline-block;
		line-height: 20px;
		font-size: 14px;
		padding-left: 10px;
		vertical-align: middle;
		white-space: normal;
		pointer-events: none;
		-webkit-user-select: text;
		-moz-user-select: text;
		-ms-user-select: text;
		user-select: text;
	}
`,sf=Ee`
	/* version 13.0.0 github.com/jonathantneal/sanitize.css */

	/* sanitize.css */

	*,
	::after,
	::before {
		box-sizing: border-box;
		background-repeat: no-repeat;
	}

	::after,
	::before {
		text-decoration: inherit;
		vertical-align: inherit;
	}

	:where(:root) {
		cursor: default;
		line-height: 1.5;
		overflow-wrap: break-word;
		-moz-tab-size: 4;
		tab-size: 4;
		-webkit-tap-highlight-color: transparent;
		-webkit-text-size-adjust: 100%;
	}

	:where(body) {
		margin: 0;
	}

	:where(h1) {
		font-size: 2em;
		margin: 0.67em 0;
	}

	:where(dl, ol, ul) :where(dl, ol, ul) {
		margin: 0;
	}

	:where(hr) {
		color: inherit;
		height: 0;
	}

	:where(nav) :where(ol, ul) {
		list-style-type: none;
		padding: 0;
	}

	:where(navli)::before {
		content: '\\200B';
		float: left;
	}

	:where(pre) {
		font-family: monospace, monospace;
		font-size: 1em;
		overflow: auto;
	}

	:where(abbr[title]) {
		text-decoration: underline;
		text-decoration: underline dotted;
	}

	:where(b, strong) {
		font-weight: bolder;
	}

	:where(code, kbd, samp) {
		font-family: monospace, monospace;
		font-size: 1em;
	}

	:where(small) {
		font-size: 80%;
	}

	:where(audio, canvas, iframe, img, svg, video) {
		vertical-align: middle;
	}

	:where(iframe) {
		border-style: none;
	}

	:where(svg:not([fill])) {
		fill: currentColor;
	}

	:where(table) {
		border-collapse: collapse;
		border-color: inherit;
		text-indent: 0;
	}

	:where(button, input, select) {
		margin: 0;
	}

	:where(button, [type='button' i], [type='reset' i], [type='submit' i]) {
		-webkit-appearance: button;
	}

	:where(fieldset) {
		border: 1px solid #a0a0a0;
	}

	:where(progress) {
		vertical-align: baseline;
	}

	:where(textarea) {
		margin: 0;
		resize: vertical;
	}

	:where([type='search' i]) {
		-webkit-appearance: textfield;
		outline-offset: -2px;
	}

	::-webkit-inner-spin-button,
	::-webkit-outer-spin-button {
		height: auto;
	}

	::-webkit-input-placeholder {
		color: inherit;
		opacity: 0.54;
	}

	::-webkit-search-decoration {
		-webkit-appearance: none;
	}

	::-webkit-file-upload-button {
		-webkit-appearance: button;
		font: inherit;
	}

	:where(dialog) {
		background-color: #fff;
		border: solid;
		color: #000;
		height: -moz-fit-content;
		height: fit-content;
		left: 0;
		margin: auto;
		padding: 1em;
		position: absolute;
		right: 0;
		width: -moz-fit-content;
		width: fit-content;
	}

	:where(dialog:not([open])) {
		display: none;
	}

	:where(details > summary:first-of-type) {
		display: list-item;
	}

	:where([aria-busy='true' i]) {
		cursor: progress;
	}

	:where([aria-controls]) {
		cursor: pointer;
	}

	:where([aria-disabled='true' i], [disabled]) {
		cursor: not-allowed;
	}

	:where([aria-hidden='false' i][hidden]) {
		display: initial;
	}

	:where([aria-hidden='false' i][hidden]:not(:focus)) {
		clip: rect(0, 0, 0, 0);
		position: absolute;
	}
`,af={colors:{primary:"#0070f3"}},lf=To`
	:root {
		--main: ${e=>e.theme.colors.main};
		--light: ${e=>e.theme.colors.light};
		--dark: ${e=>e.theme.colors.dark};
	}

  // If we need to override sanitize styles, we should do it in the global styles below, not the sanitize css itself
	${({sanitizeStyle:e})=>e}

	${({globalRCSwitchStyle:e})=>e}

	body {
		width: 100%;
		max-width: 100vw;
		margin: 0;
		padding: 0;
		overflow-x: hidden;
		-webkit-font-smoothing: antialiased;
		font-size: 16px;

    	${({renderConfig:e})=>e.isScreenshot&&Ee`
					height: auto;
				`}
	}
	
	body.open-modal {
		overflow: hidden;
	}

	body:not(.accessibility) *:focus {
		outline: none;
	}

	.im-overlay {
		display: flex;
		flex-direction: column;
		margin: 10%;
		background-color: rgb(255, 255, 255);
	}

	${ec.sm} {
		.im-overlay {
			border-radius: 0 !important;
			overflow: visible;
			margin: 0;
		}
	}

	button {
		background-color: transparent
	}

	figure {
		margin: 0 0 16px 0;
	}

	p {
		margin: 0;
		padding: 0;
		line-height: inherit;
	}
  
  :where(:root) {
		-moz-tab-size: initial;
		tab-size: initial;
	}

	${({globalPrintStyle:e})=>e}
	${({buildGlobalAnimationsStyles:e})=>e()};
`,cf=({children:e})=>{const{doc:t}=W(),{entity:o}=Ie(C,t.id.toString()),n=q(),r=i=>{i.key==="Tab"&&(document.body.classList.contains("accessibility")||(document.body.classList.add("accessibility"),document.removeEventListener("keydown",r)))};return m.exports.useEffect(()=>(document.addEventListener("keydown",r),()=>{document.removeEventListener("keydown",r)}),[]),s.createElement(s.Fragment,null,s.createElement(lf,{theme:o,sanitizeStyle:sf,globalRCSwitchStyle:rf,renderConfig:n,buildGlobalAnimationsStyles:nf,globalPrintStyle:of}),e)},df=m.exports.memo(({pageRoutes:e,hasEnabledCommentsBar:t})=>s.createElement(jd,null,Object.values(e).map(({id:o,identifier:n})=>s.createElement(Co,{exact:!0,key:o,path:n},s.createElement(Mp,{pathname:n},s.createElement(fs,{id:o,hasEnabledCommentsBar:t})))),s.createElement(Co,{render:()=>(console.warn(`[App.tsx] Missing route ${window.location.pathname}. 404`),null)}))),uf=({routes:e})=>Object.values(e.pages).map(({id:t})=>s.createElement(fs,{id:t,key:t})).concat(Object.values(e.overlays).map(({id:t,name:o})=>s.createElement(Rp,{id:t,key:t,name:o}))),pf=m.exports.memo(({assets:e,becky:t,CommentsBar:o,config:n,doc:r,entities:i,page:a})=>{const l=!!o,c=m.exports.useRef(),{isPrint:d}=q(),u=p=>{c.current=p};return s.createElement($i,null,s.createElement(tr.Provider,{value:{searchURL:n.searchUrl||""}},s.createElement(Bd,{environment:n.ripleyEnvironment,apiUrl:(n==null?void 0:n.apiURL)||""},s.createElement(tc,{doc:t.doc,pages:t.pages,project:t.project},s.createElement(Yc,null,s.createElement(nc,g({},e),s.createElement(oc,{helmet:Io},s.createElement(Kc,{initialStore:i.store},s.createElement(Td,{config:n,routes:r.routes},s.createElement(xd,null),s.createElement(Uc,null,s.createElement(tf,null),s.createElement(Wd,{auth:r.auth,pagesMetadata:r.pagesMetadata,pageRoutes:r.routes.pages,overlaysMetadata:r.overlaysMetadata,overlayRoutes:r.routes.overlays},l&&s.createElement(o,{doc:r,docId:Number(t.doc.id),overlaysData:r.routes.overlays}),s.createElement(fu,null,s.createElement($p,null),s.createElement(Bi,{theme:af},s.createElement(kd,null,s.createElement(Fc,null),s.createElement(Zh,{pageId:a.id,foleonAnalyticsURL:n==null?void 0:n.foleonAnalyticsURL,pardotTrackingScriptURL:n==null?void 0:n.pardotTrackingScriptURL,environment:n==null?void 0:n.ripleyEnvironment,trackingOverride:n==null?void 0:n.trackingOverride}),s.createElement(cf,null),s.createElement(Gc,null),s.createElement(Ph,{apiURL:n==null?void 0:n.apiURL,prevNextNode:c.current,hasEnabledCommentsBar:l}),s.createElement(Md,null,s.createElement(Ad,null,d?s.createElement(uf,{routes:r.routes}):s.createElement(df,{pageRoutes:r.routes.pages,hasEnabledCommentsBar:l}),s.createElement(Up,null))),s.createElement("div",{id:"im-previous-next-navigation",ref:u}),s.createElement(id,null)))))))))))))))}),Qs=window.__INITIAL_DATA__,mf=Xd(window.location.pathname,Object.keys(Qs.doc.routes.pages),!1),hf=({foleonDoc:e})=>{const t=ze(),o=m.exports.useRef(!0);return e.config.initialRenderControl&&o.current&&t.pathname!==e.page.identifier&&(t.pathname=e.page.identifier),o.current=!1,s.createElement(pf,g({},e))};go.exports.hydrate(s.createElement(Fi,{basename:mf},s.createElement(hf,{foleonDoc:Qs})),document.getElementById("app"));
