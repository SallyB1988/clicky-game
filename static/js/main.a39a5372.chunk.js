(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{37:function(e){e.exports=[{name:"boo",image:"images/boo.png",clicked:!1},{name:"luigi",image:"images/luigi.png",clicked:!1},{name:"koopa",image:"./images/koopa.png",clicked:!1},{name:"toad",image:"./images/toad.png",clicked:!1},{name:"toadette",image:"./images/toadette.png",clicked:!1},{name:"bowser",image:"./images/bowser.png",clicked:!1},{name:"mario",image:"./images/mario.png",clicked:!1},{name:"fish",image:"./images/fish.png",clicked:!1},{name:"squid",image:"./images/squid.png",clicked:!1},{name:"shyguy",image:"./images/shyguy.png",clicked:!1},{name:"yoshi",image:"./images/yoshi.png",clicked:!1},{name:"wario",image:"./images/wario.png",clicked:!1}]},43:function(e,a,t){e.exports=t(93)},49:function(e,a,t){},50:function(e,a,t){},51:function(e,a,t){},52:function(e,a,t){},92:function(e,a,t){},93:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(7),m=t.n(c),r=(t(49),t(95)),i=t(98),o=t(94),s=t(37),d=t(38),u=t(39),g=t(41),p=t(40),h=t(42),k=t(13),f=t.n(k),y=t(96),C=t(97),E=t(99);t(50);var v=function(e){return l.a.createElement(E.a,{bg:"info",style:{width:"10rem",margin:"5px auto"},onClick:function(){e.playerClicked(e.name),e.updateCount()}},l.a.createElement(E.a.Body,null,l.a.createElement(o.a,{className:"card-img",src:e.image}),l.a.createElement(E.a.Text,null,l.a.createElement("h2",null,e.temp?"true":"false"))))};t(51);var O=function(e){return l.a.createElement(n.Fragment,null,e.players.map(function(a){return l.a.createElement(v,{key:a.name,name:a.name,image:a.image,playerClicked:e.playerClicked,updateCount:e.updateCount,gameLost:e.gameLost,temp:a.clicked})}))},b=(t(52),function(e){function a(e){var t;return Object(d.a)(this,a),(t=Object(g.a)(this,Object(p.a)(a).call(this,e))).getRandIndex=function(e){return Math.floor(Math.random()*e.length)},t.shuffleCards=function(){for(var e=t.state.players,a=e.length,n=[],l=0;l<a;l++){var c=t.getRandIndex(e);n.push(e[c]),e.splice(c,1)}return n},t.checkGameOver=function(){t.state.numClicked===t.state.players.length-1&&t.setState({gameOver:!0,gameWon:!0})},t.gameLost=function(){var e=t.state.numClicked>t.state.topScore?t.state.numClicked:t.state.topScore,a=l.a.createElement("h3",{className:"text-center"},t.state.gameWon?"You Won!":"You Lost!");t.setState({gameOver:!0,gameWon:!1,topScore:e,modalOpen:!0,modalContent:a})},t.handleClickCount=function(){t.checkGameOver();var e=t.shuffleCards();t.setState({numClicked:t.state.numClicked+1,players:e})},t.handlePlayerClicked=function(e){var a=t.state.players.map(function(a){return a.name===e&&(a.clicked&&t.gameLost(),a.clicked=!0),a});t.setState({players:a})},t.handleModalClose=function(){for(var e=t.state.players,a=0;a<e.length;a++)e[a].clicked=!1;t.setState({modalOpen:!1,gameOver:!1,numClicked:0,players:e})},t.state={numClicked:0,players:[],gameOver:!1,gameWon:!1,topScore:0,modalOpen:!1,modalContent:""},t}return Object(h.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){this.setState({players:this.props.players})}},{key:"render",value:function(){return l.a.createElement(r.a,null,l.a.createElement(y.a,{className:"game-container"},l.a.createElement(C.a,{md:"2"}),l.a.createElement(C.a,{md:"4"},l.a.createElement("h3",{className:"text-center"},"Clicks: ",this.state.numClicked," ")),l.a.createElement(C.a,{md:"4",justifyContentCentered:!0},l.a.createElement("h3",{className:"text-center"},"Top Score: ",this.state.topScore," "))),l.a.createElement(C.a,{md:"8",mx:"auto",className:"game-board"},l.a.createElement(O,{players:this.state.players,playerClicked:this.handlePlayerClicked,updateCount:this.handleClickCount,gameLost:this.gameLost})),l.a.createElement(f.a,{centered:!0,show:this.state.modalOpen,onHide:this.handleModalClose},l.a.createElement(f.a.Header,{className:"modal-header",closeButton:!0},l.a.createElement(f.a.Title,{centered:!0},"Game Over")),l.a.createElement(f.a.Body,null,this.state.modalContent)))}}]),a}(n.Component));t(92);var w=function(){return l.a.createElement(r.a,null,l.a.createElement(i.a,{className:"jumbotron my-0",fluid:!0},l.a.createElement(o.a,{fluid:!0,src:"/images/MarioCardsheader.png"})),l.a.createElement(b,{className:"gameboard",players:s}))};m.a.render(l.a.createElement(w,null),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.a39a5372.chunk.js.map