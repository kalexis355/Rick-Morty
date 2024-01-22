"use strict";(self.webpackChunkappMorty=self.webpackChunkappMorty||[]).push([[605],{4605:(he,j,a)=>{a.r(j),a.d(j,{MortyModule:()=>pe});var l=a(6814),d=a(600),e=a(4946),f=a(7398),u=a(6306),p=a(2096),T=a(9397),U=a(9862);let m=(()=>{class s{constructor(t){this.http=t,this.apiUrlLocation="https://rickandmortyapi.com/api/location",this.apiUrlePersonaje="https://rickandmortyapi.com/api/character",this.apiUrlEpisode="https://rickandmortyapi.com/api/episode",this.personajes=[],this.termino=""}personajeresidente(t){return this.http.get(t).pipe((0,f.U)(n=>n.id>0?n:null),(0,u.K)(()=>(0,p.of)(null)))}searchPersajeUnico(t){return this.http.get(`${this.apiUrlePersonaje}/${t}`).pipe((0,f.U)(o=>o.id>0?o:null),(0,u.K)(()=>(0,p.of)(null)))}searchLocationUnica(t){return this.http.get(`${this.apiUrlLocation}/${t}`).pipe((0,f.U)(o=>o.id>0?o:null),(0,u.K)(()=>(0,p.of)(null)))}searchEpisodeUnico(t){return this.http.get(`${this.apiUrlEpisode}/${t}`).pipe((0,f.U)(o=>o.id>0?o:null),(0,u.K)(o=>(0,p.of)(null)))}searchNamePersonaje(t){return this.http.get(`${this.apiUrlePersonaje}?name=${t}`).pipe((0,u.K)(()=>(0,p.of)(null)),(0,T.b)(n=>{n?(console.log(n.results),this.personajes=n?.results,this.termino=t):this.personajes=[]}))}searchNameLocation(t){return this.http.get(`${this.apiUrlLocation}?name=${t}`).pipe((0,u.K)(()=>(0,p.of)(null)))}searchNameEpisode(t){return this.http.get(`${this.apiUrlEpisode}?name=${t}`).pipe((0,u.K)(()=>(0,p.of)(null)))}searchLocation(){return this.http.get(`${this.apiUrlLocation}`).pipe((0,u.K)(()=>(0,p.of)()))}searchEpisode(){return this.http.get(`${this.apiUrlEpisode}`).pipe((0,u.K)(()=>(0,p.of)()))}static#e=this.\u0275fac=function(n){return new(n||s)(e.LFG(U.eN))};static#t=this.\u0275prov=e.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();var N=a(8645),w=a(7394);class A extends w.w0{constructor(i,t){super()}schedule(i,t=0){return this}}const y={setInterval(s,i,...t){const{delegate:n}=y;return n?.setInterval?n.setInterval(s,i,...t):setInterval(s,i,...t)},clearInterval(s){const{delegate:i}=y;return(i?.clearInterval||clearInterval)(s)},delegate:void 0};var q=a(9039);const C={now:()=>(C.delegate||Date).now(),delegate:void 0};class g{constructor(i,t=g.now){this.schedulerActionCtor=i,this.now=t}schedule(i,t=0,n){return new this.schedulerActionCtor(this,i).schedule(n,t)}}g.now=C.now;const I=new class O extends g{constructor(i,t=g.now){super(i,t),this.actions=[],this._active=!1}flush(i){const{actions:t}=this;if(this._active)return void t.push(i);let n;this._active=!0;do{if(n=i.execute(i.state,i.delay))break}while(i=t.shift());if(this._active=!1,n){for(;i=t.shift();)i.unsubscribe();throw n}}}(class E extends A{constructor(i,t){super(i,t),this.scheduler=i,this.work=t,this.pending=!1}schedule(i,t=0){var n;if(this.closed)return this;this.state=i;const o=this.id,r=this.scheduler;return null!=o&&(this.id=this.recycleAsyncId(r,o,t)),this.pending=!0,this.delay=t,this.id=null!==(n=this.id)&&void 0!==n?n:this.requestAsyncId(r,this.id,t),this}requestAsyncId(i,t,n=0){return y.setInterval(i.flush.bind(i,this),n)}recycleAsyncId(i,t,n=0){if(null!=n&&this.delay===n&&!1===this.pending)return t;null!=t&&y.clearInterval(t)}execute(i,t){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const n=this._execute(i,t);if(n)return n;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(i,t){let o,n=!1;try{this.work(i)}catch(r){n=!0,o=r||new Error("Scheduled action threw falsy error")}if(n)return this.unsubscribe(),o}unsubscribe(){if(!this.closed){const{id:i,scheduler:t}=this,{actions:n}=t;this.work=this.state=this.scheduler=null,this.pending=!1,(0,q.P)(n,this),null!=i&&(this.id=this.recycleAsyncId(t,i,null)),this.delay=null,super.unsubscribe()}}});var L=a(9360),M=a(8251);const J=["valorInput"];let v=(()=>{class s{constructor(){this.ondebunce=new N.x,this.termino="",this.valorPlaceHolder="",this.emitirNombre=new e.vpe,this.emitirNombrePresionando=new e.vpe}ngOnInit(){this.ondebunce.pipe(function B(s,i=I){return(0,L.e)((t,n)=>{let o=null,r=null,c=null;const x=()=>{if(o){o.unsubscribe(),o=null;const h=r;r=null,n.next(h)}};function me(){const h=c+s,P=i.now();if(P<h)return o=this.schedule(void 0,h-P),void n.add(o);x()}t.subscribe((0,M.x)(n,h=>{r=h,c=i.now(),o||(o=i.schedule(me,s),n.add(o))},()=>{x(),n.complete()},void 0,()=>{r=o=null}))})}(1e3)).subscribe(t=>{console.log(t),this.emitirNombrePresionando.emit(t)})}emitirNombreInput(){this.emitirNombre.emit(this.valorInput.nativeElement.value)}emitirTerminoPresionando(){this.ondebunce.next(this.valorInput.nativeElement.value)}static#e=this.\u0275fac=function(n){return new(n||s)};static#t=this.\u0275cmp=e.Xpm({type:s,selectors:[["shared-buscador"]],viewQuery:function(n,o){if(1&n&&e.Gf(J,5),2&n){let r;e.iGM(r=e.CRH())&&(o.valorInput=r.first)}},inputs:{termino:"termino",valorPlaceHolder:"valorPlaceHolder"},outputs:{emitirNombre:"emitirNombre",emitirNombrePresionando:"emitirNombrePresionando"},decls:2,vars:2,consts:[["type","text",1,"form-control","form-input",3,"placeholder","value","keyup.enter","keyup"],["valorInput",""]],template:function(n,o){1&n&&(e.TgZ(0,"input",0,1),e.NdJ("keyup.enter",function(){return o.emitirNombreInput()})("keyup",function(){return o.emitirTerminoPresionando()}),e.qZA()),2&n&&e.Q6J("placeholder",o.valorPlaceHolder)("value",o.termino)},styles:[".form-control[_ngcontent-%COMP%]{width:63%;text-align:center;margin-left:auto;margin-right:auto}"]})}return s})(),_=(()=>{class s{static#e=this.\u0275fac=function(n){return new(n||s)};static#t=this.\u0275cmp=e.Xpm({type:s,selectors:[["shared-loading"]],inputs:{buscando:"buscando"},decls:15,vars:1,consts:[[1,"col-3","contenedor-spinner","text-center"],["width","57","height","57","viewBox","0 0 57 57","xmlns","http://www.w3.org/2000/svg","stroke","#fff"],["fill","none","fill-rule","evenodd"],["transform","translate(1 1)","stroke-width","2"],["cx","5","cy","50","r","5"],["attributeName","cy","begin","0s","dur","2.2s","values","50;5;50;50","calcMode","linear","repeatCount","indefinite"],["attributeName","cx","begin","0s","dur","2.2s","values","5;27;49;5","calcMode","linear","repeatCount","indefinite"],["cx","27","cy","5","r","5"],["attributeName","cy","begin","0s","dur","2.2s","from","5","to","5","values","5;50;50;5","calcMode","linear","repeatCount","indefinite"],["attributeName","cx","begin","0s","dur","2.2s","from","27","to","27","values","27;49;5;27","calcMode","linear","repeatCount","indefinite"],["cx","49","cy","50","r","5"],["attributeName","cy","begin","0s","dur","2.2s","values","50;50;5;50","calcMode","linear","repeatCount","indefinite"],["attributeName","cx","from","49","to","49","begin","0s","dur","2.2s","values","49;5;27;49","calcMode","linear","repeatCount","indefinite"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0)(1,"h5"),e._uU(2),e.qZA(),e.O4$(),e.TgZ(3,"svg",1)(4,"g",2)(5,"g",3)(6,"circle",4),e._UZ(7,"animate",5)(8,"animate",6),e.qZA(),e.TgZ(9,"circle",7),e._UZ(10,"animate",8)(11,"animate",9),e.qZA(),e.TgZ(12,"circle",10),e._UZ(13,"animate",11)(14,"animate",12),e.qZA()()()()()),2&n&&(e.xp6(2),e.Oqu(o.buscando))},styles:[".contenedor-spinner[_ngcontent-%COMP%]{margin:150px auto}"]})}return s})();function F(s,i){1&s&&(e.TgZ(0,"div",4),e._uU(1,"\nNo hay Personajes para mostrar\n"),e.qZA())}const Q=function(s){return["/mortys/by/",s]};function S(s,i){if(1&s&&(e.TgZ(0,"div",5)(1,"div"),e._UZ(2,"img",6),e.qZA(),e.TgZ(3,"div",7)(4,"h3",8),e._uU(5),e.qZA(),e.TgZ(6,"div",9)(7,"strong",10),e._uU(8,"Especie:"),e.qZA(),e.TgZ(9,"h3",10),e._uU(10),e.qZA()(),e.TgZ(11,"a",11),e._uU(12,"Ver m\xe1s"),e.qZA()()()),2&s){const t=i.$implicit;e.xp6(2),e.Q6J("src",t.image,e.LSH)("alt",t.name),e.xp6(3),e.Oqu(t.name),e.xp6(5),e.Oqu(t.species),e.xp6(1),e.Q6J("routerLink",e.VKq(5,Q,t.id))}}let b=(()=>{class s{constructor(){this.morties=[]}get morty(){return this.morties}static#e=this.\u0275fac=function(n){return new(n||s)};static#t=this.\u0275cmp=e.Xpm({type:s,selectors:[["morty-cards"]],inputs:{morties:"morties"},decls:4,vars:2,consts:[["class","alert alert-danger text-center m-4",4,"ngIf"],[1,"contenedor"],[1,"row"],["class","m-4 col-md-3 d-flex",4,"ngFor","ngForOf"],[1,"alert","alert-danger","text-center","m-4"],[1,"m-4","col-md-3","d-flex"],[1,"rounded",3,"src","alt"],[1,"row","justify-content-center","color"],[1,"fs-6","text-center"],[1,"col","text-center"],[1,"fs-6"],[1,"etiqueta","text-center",3,"routerLink"]],template:function(n,o){1&n&&(e.YNc(0,F,2,0,"div",0),e.TgZ(1,"div",1)(2,"div",2),e.YNc(3,S,13,7,"div",3),e.qZA()()),2&n&&(e.Q6J("ngIf",0===o.morties.length),e.xp6(3),e.Q6J("ngForOf",o.morties))},dependencies:[l.sg,l.O5,d.rH],styles:["img[_ngcontent-%COMP%]{width:120px;border:3px solid #305a34;box-shadow:1px 1px 12px #c6ef56}.etiqueta[_ngcontent-%COMP%]{text-decoration:none;font-size:15px;font-weight:700;color:#55099c;text-shadow:2px 2px 12px #305a34}.etiqueta[_ngcontent-%COMP%]:hover{color:#c6ef56c0}.row[_ngcontent-%COMP%]{justify-content:center}"]})}return s})();function Y(s,i){1&s&&e._UZ(0,"shared-loading",3),2&s&&e.Q6J("buscando","Buscando Personajes")}function k(s,i){if(1&s&&e._UZ(0,"morty-cards",4),2&s){const t=e.oxw();e.Q6J("morties",t.mortys)}}let $=(()=>{class s{constructor(t){this.mortyService=t,this.mortys=this.mortyService.personajes,this.isloading=!1,this.inicialValue=""}ngOnInit(){this.inicialValue=this.mortyService.termino,0===this.mortys.length?this.searchPersonaje(""):this.mortys=this.mortyService.personajes}searchPersonaje(t){this.isloading=!0,this.mortyService.searchNamePersonaje(t).subscribe(n=>{this.mortys=n?n.results:[],this.isloading=!1})}static#e=this.\u0275fac=function(n){return new(n||s)(e.Y36(m))};static#t=this.\u0275cmp=e.Xpm({type:s,selectors:[["morty-by-personaje-page"]],decls:3,vars:3,consts:[["valorPlaceHolder","Buscar Personaje...",3,"termino","emitirNombre","emitirNombrePresionando"],[3,"buscando",4,"ngIf"],[3,"morties",4,"ngIf"],[3,"buscando"],[3,"morties"]],template:function(n,o){1&n&&(e.TgZ(0,"shared-buscador",0),e.NdJ("emitirNombre",function(c){return o.searchPersonaje(c)})("emitirNombrePresionando",function(c){return o.searchPersonaje(c)}),e.qZA(),e.YNc(1,Y,1,1,"shared-loading",1),e.YNc(2,k,1,1,"morty-cards",2)),2&n&&(e.Q6J("termino",o.inicialValue),e.xp6(1),e.Q6J("ngIf",o.isloading),e.xp6(1),e.Q6J("ngIf",!o.isloading))},dependencies:[l.O5,v,_,b]})}return s})();function H(s,i){1&s&&(e.TgZ(0,"div",4),e._uU(1," No hay episodios que mostrar\n"),e.qZA())}const K=function(s){return["/mortys/by-episode/",s]};function R(s,i){if(1&s){const t=e.EpF();e.TgZ(0,"div",5)(1,"div",6)(2,"strong",7),e._uU(3),e.qZA(),e.TgZ(4,"div"),e._uU(5),e.qZA(),e.TgZ(6,"div")(7,"strong"),e._uU(8,"Fecha de Emisi\xf3n"),e.qZA(),e._uU(9),e.qZA(),e.TgZ(10,"div"),e._uU(11),e.qZA(),e.TgZ(12,"div")(13,"a",8),e.NdJ("click",function(){const r=e.CHM(t).$implicit,c=e.oxw();return e.KtG(c.emitirtitulo(r.name))}),e._uU(14,"Ver M\xe1s"),e.qZA()()()()}if(2&s){const t=i.$implicit;e.xp6(3),e.Oqu(t.name),e.xp6(2),e.hij(" ",t.episode," "),e.xp6(4),e.hij(" ",t.air_date," "),e.xp6(2),e.hij(" ",t.characters.length," personajes Participantes "),e.xp6(2),e.Q6J("routerLink",e.VKq(5,K,t.id))}}let X=(()=>{class s{constructor(){this.episodes=[],this.tituloEpisodio=new e.vpe}emitirtitulo(t){console.log(t),this.tituloEpisodio.emit(t)}static#e=this.\u0275fac=function(n){return new(n||s)};static#t=this.\u0275cmp=e.Xpm({type:s,selectors:[["morty-cards-episodes"]],inputs:{episodes:"episodes"},outputs:{tituloEpisodio:"tituloEpisodio"},decls:4,vars:2,consts:[["class","alert alert-danger text-center m-4",4,"ngIf"],[1,"contenedor"],[1,"row","justify-content-center"],["class","m-4 col-md-3 d-flex color ",4,"ngFor","ngForOf"],[1,"alert","alert-danger","text-center","m-4"],[1,"m-4","col-md-3","d-flex","color"],[1,"col","text-center"],[1,"fs-5","color-titulo"],[1,"etiqueta",3,"routerLink","click"]],template:function(n,o){1&n&&(e.YNc(0,H,2,0,"div",0),e.TgZ(1,"div",1)(2,"div",2),e.YNc(3,R,15,7,"div",3),e.qZA()()),2&n&&(e.Q6J("ngIf",0===o.episodes.length),e.xp6(3),e.Q6J("ngForOf",o.episodes))},dependencies:[l.sg,l.O5,d.rH],styles:[".etiqueta[_ngcontent-%COMP%]{text-decoration:none;font-size:20px;font-weight:700;color:#6f12c5;text-shadow:2px 2px 12px #305a34}.etiqueta[_ngcontent-%COMP%]:hover{color:#c6ef56c0}"]})}return s})();function z(s,i){1&s&&e._UZ(0,"shared-loading",3),2&s&&e.Q6J("buscando","Buscando Episodios")}function V(s,i){if(1&s&&e._UZ(0,"morty-cards-episodes",4),2&s){const t=e.oxw();e.Q6J("episodes",t.episodes)}}let D=(()=>{class s{constructor(t){this.mortysService=t,this.episodes=[],this.isLoading=!1}ngOnInit(){this.searchEpisode()}searchEpisode(){this.isLoading=!0,this.mortysService.searchEpisode().subscribe(t=>{this.episodes=t.results,this.isLoading=!1})}searchNameEpisode(t){this.isLoading=!0,this.mortysService.searchNameEpisode(t).subscribe(n=>{this.episodes=n?n.results:[],this.isLoading=!1})}static#e=this.\u0275fac=function(n){return new(n||s)(e.Y36(m))};static#t=this.\u0275cmp=e.Xpm({type:s,selectors:[["app-by-episode-page"]],decls:3,vars:2,consts:[["valorPlaceHolder","Buscar episodio...",3,"emitirNombre","emitirNombrePresionando"],[3,"buscando",4,"ngIf"],[3,"episodes",4,"ngIf"],[3,"buscando"],[3,"episodes"]],template:function(n,o){1&n&&(e.TgZ(0,"shared-buscador",0),e.NdJ("emitirNombre",function(c){return o.searchNameEpisode(c)})("emitirNombrePresionando",function(c){return o.searchNameEpisode(c)}),e.qZA(),e.YNc(1,z,1,1,"shared-loading",1),e.YNc(2,V,1,1,"morty-cards-episodes",2)),2&n&&(e.xp6(1),e.Q6J("ngIf",o.isLoading),e.xp6(1),e.Q6J("ngIf",!o.isLoading))},dependencies:[l.O5,v,_,X]})}return s})();function G(s,i){1&s&&(e.TgZ(0,"div",4),e._uU(1,"\nNo hay locaciones para mostrar\n"),e.qZA())}const W=function(s){return["/mortys/by-location/",s]};function ee(s,i){if(1&s&&(e.TgZ(0,"div",5)(1,"div",6)(2,"strong",7),e._uU(3),e.qZA(),e.TgZ(4,"div")(5,"strong"),e._uU(6,"Cantidad de Integrantes"),e.qZA(),e.TgZ(7,"div"),e._uU(8),e.qZA(),e.TgZ(9,"strong"),e._uU(10,"Tipo de Locaci\xf3n"),e.qZA(),e.TgZ(11,"div"),e._uU(12),e.qZA(),e.TgZ(13,"div",8)(14,"strong"),e._uU(15,"Dimensi\xf3n"),e.qZA(),e._uU(16),e.TgZ(17,"a",9),e._uU(18,"Ver m\xe1s"),e.qZA()()()()()),2&s){const t=i.$implicit;e.xp6(3),e.Oqu(t.name),e.xp6(5),e.hij(" ",t.residents.length," "),e.xp6(4),e.hij(" ",t.type," "),e.xp6(4),e.hij(" ",t.dimension," "),e.xp6(1),e.Q6J("routerLink",e.VKq(5,W,t.id))}}let te=(()=>{class s{constructor(){this.locations=[]}static#e=this.\u0275fac=function(n){return new(n||s)};static#t=this.\u0275cmp=e.Xpm({type:s,selectors:[["morty-cards-locations"]],inputs:{locations:"locations"},decls:4,vars:2,consts:[["class","alert alert-danger text-center m-4",4,"ngIf"],[1,"contenedor"],[1,"row","justify-content-center"],["class","m-4 col-md-3 d-flex  ",4,"ngFor","ngForOf"],[1,"alert","alert-danger","text-center","m-4"],[1,"m-4","col-md-3","d-flex"],[1,"col","text-center","color"],[1,"fs-4","color-titulo"],[1,""],[1,"etiqueta",3,"routerLink"]],template:function(n,o){1&n&&(e.YNc(0,G,2,0,"div",0),e.TgZ(1,"div",1)(2,"div",2),e.YNc(3,ee,19,7,"div",3),e.qZA()()),2&n&&(e.Q6J("ngIf",0===o.locations.length),e.xp6(3),e.Q6J("ngForOf",o.locations))},dependencies:[l.sg,l.O5,d.rH],styles:[".etiqueta[_ngcontent-%COMP%]{text-decoration:none;font-size:15px;font-weight:700;color:#6f12c5;text-shadow:2px 2px 12px #305a34}.etiqueta[_ngcontent-%COMP%]:hover{color:#c6ef56c0}"]})}return s})();function ne(s,i){1&s&&e._UZ(0,"shared-loading",3),2&s&&e.Q6J("buscando","Buscando Episodios")}function se(s,i){if(1&s&&e._UZ(0,"morty-cards-locations",4),2&s){const t=e.oxw();e.Q6J("locations",t.locations)}}let oe=(()=>{class s{constructor(t){this.MortyService=t,this.locations=[],this.isLoading=!1}ngOnInit(){this.searchLocationMortys()}searchLocationMortys(){this.isLoading=!0,this.MortyService.searchLocation().subscribe(t=>{this.locations=t.results,this.isLoading=!1})}searchLocationUnica(t){this.isLoading=!0,this.MortyService.searchNameLocation(t).subscribe(n=>{this.locations=n?n.results:[],this.isLoading=!1})}static#e=this.\u0275fac=function(n){return new(n||s)(e.Y36(m))};static#t=this.\u0275cmp=e.Xpm({type:s,selectors:[["app-by-dimensiones-page"]],decls:3,vars:2,consts:[["valorPlaceHolder","Buscar Locaci\xf3n...",3,"emitirNombre","emitirNombrePresionando"],[3,"buscando",4,"ngIf"],[3,"locations",4,"ngIf"],[3,"buscando"],[3,"locations"]],template:function(n,o){1&n&&(e.TgZ(0,"shared-buscador",0),e.NdJ("emitirNombre",function(c){return o.searchLocationUnica(c)})("emitirNombrePresionando",function(c){return o.searchLocationUnica(c)}),e.qZA(),e.YNc(1,ne,1,1,"shared-loading",1),e.YNc(2,se,1,1,"morty-cards-locations",2)),2&n&&(e.xp6(1),e.Q6J("ngIf",o.isLoading),e.xp6(1),e.Q6J("ngIf",!o.isLoading))},dependencies:[l.O5,v,_,te]})}return s})();var Z=a(4664);function ie(s,i){if(1&s&&(e.TgZ(0,"div")(1,"strong"),e._uU(2,"Tipo: "),e.qZA(),e.TgZ(3,"p",8),e._uU(4),e.qZA()()),2&s){const t=e.oxw();e.xp6(4),e.Oqu(null==t.personaje?null:t.personaje.type)}}const re=function(s,i,t){return{"bg-success":s,"bg-danger":i,"bg-info bg-opacity-75":t}},ae=function(s,i){return{simbolo:s,desconocido:i}};let ce=(()=>{class s{static#e=this.\u0275fac=function(n){return new(n||s)};static#t=this.\u0275cmp=e.Xpm({type:s,selectors:[["morty-cards-personaje"]],inputs:{personaje:"personaje"},decls:31,vars:18,consts:[[1,"text-center"],[1,"d-flex","justify-content-center","align-items-center"],[1,"bg-success","m-2","rounded-pill","p-2",3,"ngClass"],[1,"d-inline","p-1",3,"ngClass"],[1,"img-thumbnail",3,"src","alt"],[1,"info","d-flex","flex-column"],[1,"m-2"],[1,"especie"],[1,"d-inline"],[4,"ngIf"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h3"),e._uU(3),e.qZA(),e.TgZ(4,"h6",2)(5,"p",3),e._uU(6," O "),e.qZA(),e._uU(7),e.qZA()(),e._UZ(8,"img",4),e.TgZ(9,"div",5)(10,"div",6)(11,"div",7)(12,"strong",8),e._uU(13,"Especie: "),e.qZA(),e.TgZ(14,"p",8),e._uU(15),e.qZA()(),e.YNc(16,ie,5,1,"div",9),e.TgZ(17,"div")(18,"strong",8),e._uU(19,"Genero:"),e.qZA(),e.TgZ(20,"p",8),e._uU(21),e.qZA(),e.TgZ(22,"strong"),e._uU(23," Origen:"),e.qZA(),e.TgZ(24,"p",8),e._uU(25),e.qZA()(),e.TgZ(26,"div")(27,"strong"),e._uU(28,"Cantidad de apariciones en episodios:"),e.TgZ(29,"p",8),e._uU(30),e.qZA()()()()()()),2&n&&(e.xp6(3),e.Oqu(null==o.personaje?null:o.personaje.name),e.xp6(1),e.Q6J("ngClass",e.kEZ(11,re,"Alive"===(null==o.personaje?null:o.personaje.status),"Dead"===(null==o.personaje?null:o.personaje.status),"unknown"===(null==o.personaje?null:o.personaje.status))),e.xp6(1),e.Q6J("ngClass",e.WLB(15,ae,"Dead"===(null==o.personaje?null:o.personaje.status),"unknown"===(null==o.personaje?null:o.personaje.status))),e.xp6(2),e.hij(" ",null==o.personaje?null:o.personaje.status," "),e.xp6(1),e.Q6J("src",null==o.personaje?null:o.personaje.image,e.LSH)("alt",null==o.personaje?null:o.personaje.name),e.xp6(7),e.Oqu(null==o.personaje?null:o.personaje.species),e.xp6(1),e.Q6J("ngIf",""!==(null==o.personaje?null:o.personaje.type)),e.xp6(5),e.Oqu(null==o.personaje?null:o.personaje.gender),e.xp6(4),e.Oqu(null==o.personaje||null==o.personaje.origin?null:o.personaje.origin.name),e.xp6(5),e.Oqu(null==o.personaje||null==o.personaje.episode?null:o.personaje.episode.length))},dependencies:[l.mk,l.O5],styles:["img[_ngcontent-%COMP%]{width:250px}p[_ngcontent-%COMP%]{color:#adff2f;font-weight:700;margin-bottom:0}.simbolo[_ngcontent-%COMP%]{color:#a50909;font-weight:700}.desconocido[_ngcontent-%COMP%]{color:#0a50b9;font-weight:700}.info[_ngcontent-%COMP%]{border-radius:10px;width:320px;background-color:#9d049dbc;margin:10px auto;text-align:center;box-shadow:2px 2px 18px #9d049d}.especie[_ngcontent-%COMP%]{text-align:center}"]})}return s})();const le=[{path:"by-personajes",component:$},{path:"by-episodios",component:D},{path:"by-dimensiones",component:oe},{path:"by/:id",component:(()=>{class s{constructor(t,n,o){this.mortyService=t,this.router=n,this.activatedRoute=o}ngOnInit(){this.activatedRoute.params.pipe((0,Z.w)(({id:t})=>this.mortyService.searchPersajeUnico(t))).subscribe(t=>{if(!t)return this.router.navigateByUrl("");this.personajes=t})}static#e=this.\u0275fac=function(n){return new(n||s)(e.Y36(m),e.Y36(d.F0),e.Y36(d.gz))};static#t=this.\u0275cmp=e.Xpm({type:s,selectors:[["morty-personaje"]],decls:1,vars:1,consts:[[3,"personaje"]],template:function(n,o){1&n&&e._UZ(0,"morty-cards-personaje",0),2&n&&e.Q6J("personaje",o.personajes)},dependencies:[ce]})}return s})()},{path:"by-location/:id",component:(()=>{class s{constructor(t,n,o){this.mortyService=t,this.router=n,this.activatedRoute=o,this.personajeResidente=[]}ngOnInit(){this.activatedRoute.params.pipe((0,Z.w)(({id:t})=>this.mortyService.searchLocationUnica(t))).subscribe(t=>{if(!t)return this.router.navigateByUrl("");this.personajeLocation=t,this.titulo=t.name,this.personajesResidentes(t)})}personajesResidentes(t){t.residents.forEach(n=>{this.mortyService.personajeresidente(n).subscribe(o=>{o&&this.personajeResidente.push(o)})})}static#e=this.\u0275fac=function(n){return new(n||s)(e.Y36(m),e.Y36(d.F0),e.Y36(d.gz))};static#t=this.\u0275cmp=e.Xpm({type:s,selectors:[["morty-personaje-location"]],decls:3,vars:2,consts:[[1,"text-center","bg","bg-success","col-4","titulo","fs-4"],[3,"morties"]],template:function(n,o){1&n&&(e.TgZ(0,"h3",0),e._uU(1),e.qZA(),e._UZ(2,"morty-cards",1)),2&n&&(e.xp6(1),e.Oqu(o.titulo),e.xp6(1),e.Q6J("morties",o.personajeResidente))},dependencies:[b]})}return s})()},{path:"by-episode/:id",component:(()=>{class s{constructor(t,n,o){this.mortyService=t,this.router=n,this.activatedRoute=o,this.personajesEpisode=[]}ngOnInit(){this.activatedRoute.params.pipe((0,Z.w)(({id:t})=>this.mortyService.searchEpisodeUnico(t))).subscribe(t=>{t?(this.episodeUnico=t,this.personajeEpisodio(t),this.titulo=t.name):this.router.navigateByUrl("")})}personajeEpisodio(t){t.characters.forEach(n=>{n&&this.mortyService.personajeresidente(n).subscribe(o=>{o&&this.personajesEpisode.push(o)})})}static#e=this.\u0275fac=function(n){return new(n||s)(e.Y36(m),e.Y36(d.F0),e.Y36(d.gz))};static#t=this.\u0275cmp=e.Xpm({type:s,selectors:[["app-personaje-episode"]],decls:3,vars:2,consts:[[1,"text-center","bg","bg-success","col-4","titulo","fs-4"],[3,"morties"]],template:function(n,o){1&n&&(e.TgZ(0,"h3",0),e._uU(1),e.qZA(),e._UZ(2,"morty-cards",1)),2&n&&(e.xp6(1),e.Oqu(o.titulo),e.xp6(1),e.Q6J("morties",o.personajesEpisode))},dependencies:[b]})}return s})()},{path:"**",redirectTo:"by-personajes"}];let de=(()=>{class s{static#e=this.\u0275fac=function(n){return new(n||s)};static#t=this.\u0275mod=e.oAB({type:s});static#n=this.\u0275inj=e.cJS({imports:[l.ez,d.Bz.forChild(le),d.Bz]})}return s})();var ue=a(1367);let pe=(()=>{class s{static#e=this.\u0275fac=function(n){return new(n||s)};static#t=this.\u0275mod=e.oAB({type:s});static#n=this.\u0275inj=e.cJS({imports:[l.ez,de,ue.m]})}return s})()}}]);