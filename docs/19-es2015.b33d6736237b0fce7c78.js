(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{H4Xw:function(e,o,c){"use strict";c.r(o);var n=c("EM62"),t=c("uHuC"),l=c("6aXC"),a=c("PCNd"),i=c("sEIs"),d=c("2kYt"),r=c("ykr0"),p=c("J4Gr");const m=[1,"wrapper"],s=[1,"content"],u=["class","implementation",4,"ngIf"],h=["module","card",3,"show"],g=[1,"description"],f=[3,"highlight"],b=["module","expansion",3,"show"],x=["loading",""],P=["module","app-element-test",3,"show"],y=[1,"implementation"],j=["mat-flat-button","","color","primary",3,"click"],w=["mat-flat-button","","color","primary",1,"additional-btn",3,"click"],M=["color","primary",4,"ngIf"],v=["mat-raised-button","","color","primary",3,"mouseover","click",4,"ngIf"],C=["module","app-breach",2,"width","100%",3,"show"],E=["breachModule",""],L=["module","lazy-example-7",3,"show","init"],G=["lazyModule",""];function z(e,o){if(1&e){const e=n.mc();n.lc(0,"div",y),n.lc(1,"button",j),n.rc("click",function(o){return n.Dc(e),n.tc().example1=!0}),n.lc(2,"mat-icon"),n.Pc(3,"play_arrow"),n.jc(),n.Pc(4," Show "),n.jc(),n.jc()}}function O(e,o){if(1&e){const e=n.mc();n.lc(0,"div",y),n.lc(1,"button",j),n.rc("click",function(o){return n.Dc(e),n.tc().example2=!0}),n.lc(2,"mat-icon"),n.Pc(3,"play_arrow"),n.jc(),n.Pc(4," Show "),n.jc(),n.jc()}}function _(e,o){1&e&&n.Pc(0,"Loading...")}function I(e,o){if(1&e){const e=n.mc();n.lc(0,"div",y),n.lc(1,"button",j),n.rc("click",function(o){return n.Dc(e),n.tc().example3=!0}),n.lc(2,"mat-icon"),n.Pc(3,"play_arrow"),n.jc(),n.Pc(4," Show "),n.jc(),n.jc()}}function k(e,o){if(1&e){const e=n.mc();n.lc(0,"div",y),n.lc(1,"button",j),n.rc("click",function(o){return n.Dc(e),n.tc().example4=!0}),n.lc(2,"mat-icon"),n.Pc(3,"play_arrow"),n.jc(),n.Pc(4," Show "),n.jc(),n.jc()}}const S=["color","primary"];function N(e,o){1&e&&(n.lc(0,"code",S),n.Pc(1,"Loaded"),n.jc())}const A=["mat-raised-button","","color","primary",3,"mouseover","click"];function B(e,o){if(1&e){const e=n.mc();n.lc(0,"button",A),n.rc("mouseover",function(o){return n.Dc(e),n.tc(),n.Bc(134).preload()}),n.rc("click",function(o){return n.Dc(e),n.tc().showBreach=!0}),n.Pc(1,"Hover to load/ Click to show"),n.jc()}}function T(e,o){1&e&&(n.lc(0,"code",S),n.Pc(1,"Loaded"),n.jc())}let D=(()=>{class e{constructor(e){this.loadableService=e,this.example1=!1,this.example2=!1,this.example3=!1,this.example4=!1,this.showBreach=!1,this.example7=!1,this.codeExample1module=F,this.codeExample1html=R,this.codeExample2module=H,this.codeExample2html=U,this.codeExample3module=W,this.codeExample3html=V,this.codeExample4html=Y,this.codeExample4coreModule=J,this.codeExample5html=X,this.codeExample5ts=$,this.codeExample6html=q,this.codeExample7ts=Q,this.codeExample7html=K,this.counter=0}ngOnInit(){}increment(){this.counter++}preload(){this.loadableService.preloadAll().then(()=>alert("preloaded all modules"))}preloadBreach(){this.loadableService.preloadAll(["app-breach"]).then(()=>alert("preloaded breach module"))}lazyInit({instance:e}){let o=0;e.input="Updated by AppComponent using Input",e.output.subscribe(()=>{e.input="Updated by AppComponent using Output "+ ++o})}}return e.ngComponentDef=n.Yb({type:e,selectors:[["demo-advanced"]],factory:function(o){return new(o||e)(n.ec(l.c))},consts:164,vars:29,template:function(e,o){if(1&e&&(n.lc(0,"div",m),n.lc(1,"h1"),n.Pc(2,"Advanced"),n.jc(),n.lc(3,"h2"),n.Pc(4,"Elements configured in a feature module"),n.jc(),n.lc(5,"div",s),n.Nc(6,z,5,0,"div",u),n.lc(7,"div"),n.Lc(),n.fc(8,"ngx-loadable",h),n.jc(),n.lc(9,"div",g),n.lc(10,"p"),n.Pc(11," In this example we're pre-configuring "),n.lc(12,"code"),n.Pc(13,"LoadableModule"),n.jc(),n.Pc(14," with the element config. That way we don't have to specify loading template, error template and other configuration of the element in the "),n.lc(15,"code"),n.Pc(16,"ngx-loadable"),n.jc(),n.Pc(17," component. The module will be lazy-loaded the same way as before. "),n.jc(),n.fc(18,"pre",f),n.fc(19,"pre",f),n.jc(),n.jc(),n.lc(20,"h2"),n.Pc(21,"Elements configured in a feature module with HTML inline options"),n.jc(),n.lc(22,"div",s),n.Nc(23,O,5,0,"div",u),n.lc(24,"div"),n.Lc(),n.lc(25,"ngx-loadable",b),n.Nc(26,_,1,0,"ng-template",null,x,n.Oc),n.jc(),n.jc(),n.lc(28,"div",g),n.lc(29,"p"),n.Pc(30," We don't have to specify "),n.lc(31,"code"),n.Pc(32,"url"),n.jc(),n.Pc(33," when using pre-configured "),n.lc(34,"code"),n.Pc(35,"LoadableModule"),n.jc(),n.Pc(36,". We still might need to pass in "),n.lc(37,"code"),n.Pc(38,"null"),n.jc(),n.Pc(39," url into "),n.lc(40,"code"),n.Pc(41,"ngx-loadable"),n.jc(),n.Pc(42," component in case we want to use other options like "),n.lc(43,"code"),n.Pc(44,"module"),n.jc(),n.Pc(45," or "),n.lc(46,"code"),n.Pc(47,"loadingTemplate"),n.jc(),n.Pc(48,". "),n.jc(),n.fc(49,"pre",f),n.fc(50,"pre",f),n.jc(),n.jc(),n.lc(51,"h2"),n.Pc(52," Elements configured in a feature module with "),n.lc(53,"code"),n.Pc(54,"isElement"),n.jc(),n.Pc(55," option "),n.jc(),n.lc(56,"div",s),n.Nc(57,I,5,0,"div",u),n.lc(58,"div"),n.Lc(),n.jc(),n.lc(59,"div",g),n.lc(60,"p"),n.Pc(61," We can also pre-configure "),n.lc(62,"code"),n.Pc(63,"isElement"),n.jc(),n.Pc(64," flag by passing it to the "),n.lc(65,"code"),n.Pc(66,"LoadableModule"),n.jc(),n.Pc(67,"config. That way we don't have to specify it in the template for module style elements! "),n.jc(),n.fc(68,"pre",f),n.fc(69,"pre",f),n.jc(),n.jc(),n.lc(70,"h2"),n.Pc(71," Elements configured in "),n.lc(72,"code"),n.Pc(73,"AppModule"),n.jc(),n.Pc(74," or "),n.lc(75,"code"),n.Pc(76,"CoreModule"),n.jc(),n.Pc(77," using "),n.lc(78,"code"),n.Pc(79,"forRoot"),n.jc(),n.jc(),n.lc(80,"div",s),n.Nc(81,k,5,0,"div",u),n.lc(82,"div"),n.Lc(),n.fc(83,"ngx-loadable",P),n.jc(),n.lc(84,"div",g),n.lc(85,"p"),n.Pc(86," Some options can be pre-configured for the whole application using "),n.lc(87,"code"),n.Pc(88,"LoadableModule.forRoot()"),n.jc(),n.Pc(89,". This is usually done in "),n.lc(90,"code"),n.Pc(91,"AppModule"),n.jc(),n.Pc(92," or in the "),n.lc(93,"code"),n.Pc(94,"CoreModule"),n.jc(),n.Pc(95,". That way we don't have to specify this options in the feature modules while still preserving posibility to override them if necessary. The "),n.lc(96,"code"),n.Pc(97,"forRoot()"),n.jc(),n.Pc(98," accepts also "),n.lc(99,"code"),n.Pc(100,"elementConfigs"),n.jc(),n.Pc(101," so they can be pre-configured centrally removing the need to configure them in feature modules or inline in the templates. "),n.jc(),n.fc(102,"pre",f),n.fc(103,"pre",f),n.jc(),n.jc(),n.lc(104,"h2"),n.Pc(105," Preloading with service "),n.jc(),n.lc(106,"div",s),n.lc(107,"div",y),n.lc(108,"div"),n.lc(109,"button",j),n.rc("click",function(e){return o.preload()}),n.Pc(110," Preload Everything "),n.jc(),n.lc(111,"button",w),n.rc("click",function(e){return o.preloadBreach()}),n.Pc(112,' Preload "Breach" only (the next example) '),n.jc(),n.jc(),n.jc(),n.lc(113,"div",g),n.lc(114,"p"),n.Pc(115," You can inject "),n.lc(116,"code"),n.Pc(117,"LoadableService"),n.jc(),n.Pc(118," and call the "),n.lc(119,"code"),n.Pc(120,"preload"),n.jc(),n.Pc(121," method to preload all the configured modules, or specify the list of module "),n.lc(122,"code"),n.Pc(123,"names"),n.jc(),n.Pc(124," you want to preload. "),n.jc(),n.fc(125,"pre",f),n.fc(126,"pre",f),n.jc(),n.jc(),n.lc(127,"h2"),n.Pc(128," Preloading with ngx-loadable Component "),n.Nc(129,N,2,0,"code",M),n.jc(),n.lc(130,"div",s),n.lc(131,"div",y),n.Nc(132,B,2,0,"button",v),n.fc(133,"ngx-loadable",C,E),n.jc(),n.lc(135,"div",g),n.lc(136,"p"),n.Pc(137," You can use local variable to access "),n.lc(138,"code"),n.Pc(139,"LoadableComponent"),n.jc(),n.Pc(140," and call the "),n.lc(141,"code"),n.Pc(142,"preload"),n.jc(),n.Pc(143," method to preload the module passed to the component. "),n.jc(),n.fc(144,"pre",f),n.jc(),n.jc(),n.lc(145,"h2"),n.Pc(146," Passing Input and Outputs to loaded Component "),n.Nc(147,T,2,0,"code",M),n.jc(),n.lc(148,"div",s),n.lc(149,"div",y),n.lc(150,"button",j),n.rc("click",function(e){return o.example7=!0}),n.lc(151,"mat-icon"),n.Pc(152,"play_arrow"),n.jc(),n.Pc(153," Show "),n.jc(),n.lc(154,"ngx-loadable",L,G),n.rc("init",function(e){return o.lazyInit(e)}),n.jc(),n.jc(),n.lc(156,"div",g),n.lc(157,"p"),n.Pc(158," Use "),n.lc(159,"code"),n.Pc(160,"(init)"),n.jc(),n.Pc(161," output to access that components inputs and outputs "),n.jc(),n.fc(162,"pre",f),n.fc(163,"pre",f),n.jc(),n.jc(),n.jc()),2&e){const e=n.Bc(134),c=n.Bc(155);n.Gc(6),n.yc("ngIf",!o.example1),n.Gc(7),n.Vb("implementation",o.example1),n.Mc(),n.Gc(8),n.yc("show",o.example1),n.Gc(18),n.yc("highlight",o.codeExample1html),n.Gc(19),n.yc("highlight",o.codeExample1module),n.Gc(23),n.yc("ngIf",!o.example2),n.Gc(24),n.Vb("implementation",o.example2),n.Mc(),n.Gc(25),n.yc("show",o.example2),n.Gc(49),n.yc("highlight",o.codeExample2html),n.Gc(50),n.yc("highlight",o.codeExample2module),n.Gc(57),n.yc("ngIf",!o.example3),n.Gc(58),n.Vb("implementation",o.example3),n.Mc(),n.Gc(68),n.yc("highlight",o.codeExample3html),n.Gc(69),n.yc("highlight",o.codeExample3module),n.Gc(81),n.yc("ngIf",!o.example4),n.Gc(82),n.Vb("implementation",o.example4),n.Mc(),n.Gc(83),n.yc("show",o.example4),n.Gc(102),n.yc("highlight",o.codeExample4html),n.Gc(103),n.yc("highlight",o.codeExample4coreModule),n.Gc(125),n.yc("highlight",o.codeExample5html),n.Gc(126),n.yc("highlight",o.codeExample5ts),n.Gc(129),n.yc("ngIf",e.loaded),n.Gc(132),n.yc("ngIf",!o.showBreach),n.Gc(133),n.yc("show",o.showBreach),n.Gc(144),n.yc("highlight",o.codeExample6html),n.Gc(147),n.yc("ngIf",null==c?null:c.loaded),n.Gc(154),n.yc("show",o.example7),n.Gc(162),n.yc("highlight",o.codeExample7html),n.Gc(163),n.yc("highlight",o.codeExample7ts)}},directives:[d.j,l.a,t.a,r.b,p.a],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column}.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin:0 0 50px}.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .implementation[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;flex:1;margin:0 20px 20px 0;border:2px solid #eee;padding:20px}.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .implementation[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:10px 0 0}.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{flex:1.5}.responsive-large[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%], .responsive-large   [_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%]{width:60%}.additional-btn[_ngcontent-%COMP%]{margin-left:10px}"]}),e})();const F="// pre-configured LoadableModule\nconst options: LoadableModuleOptions = {\n  elementConfigs: [\n    {\n      name: 'card',\n      load: () => import('./card/card.module').then(mod => mod.CardModule),\n      loadingComponent: SpinnerComponent,\n      errorComponent: ErrorComponent,\n      preload: true\n    }\n  ]\n};\n\n@NgModule({\n  declarations: [FeatureComponent],\n  imports: [\n    LoadableModule.forFeature(options),\n  ]\n})\nexport class FeatureModule { }\n",R='\x3c!-- No need to specify loading template or error template --\x3e\n<ngx-loadable module="card" [show]="true"></ngx-loadable>',H="// pre-configured LoadableModule in FeatureModule\nconst options: LoadableModuleOptions = {\n  elementConfigs: [\n    {\n      name: 'expansion',\n      load: () => import('./expansion/expansion.module').then(mod => mod.ExpansionModule)\n    }\n  ]\n};\n\n@NgModule({\n  declarations: [FeatureComponent],\n  imports: [\n    LoadableModule.forFeature(options),\n  ]\n})\nexport class FeatureModule { }\n",U='\x3c!-- We have to specify module and pass to be able to pass in additional options --\x3e\n<ngx-loadable module="lazy" [isElement]="true">\n  <ng-template #loading>Loading...</ng-template>\n</ngx-loadable>',W="// pre-configured LoadableModule\nconst options: LoadableModuleOptions = {\n  elementConfigs: [\n    {\n      name: 'lazy',\n      url: () => import('./lazy/lazy.module').then(mod => mod.LazyModule),\n      isElement: true\n    }\n  ]\n};\n\n@NgModule({\n  declarations: [FeatureComponent],\n  imports: [\n    LoadablesModule.forFeature(options),\n  ]\n})\nexport class FeatureModule { }\n",V='\x3c!-- We have to specify module to be able to pass in additional options --\x3e\n<ngx-loadable module="lazy" [isElement]="true">\n  <ng-template #loading>Loading...</ng-template>\n</ngx-loadable>',Y='\x3c!-- This can be used in any place in the whole application --\x3e\n<ngx-loadable module="app-element-test" [show]="true"></ngx-loadable>',J="// pre-configured LoadableModule in CoreModule or AppModule\nconst options: LoadableModuleRootOptions = {\n  rootOptions: {\n    errorComponent: RootErrorComponent\n    loadingComponent: RootSpinnerComponent\n    isElement: true\n  },\n  elementConfigs: [\n    {\n      name: 'app-element-test',\n      load: () => import('./element-test/element-test.module').then(mod => mod.ElementTestModule),\n    }\n  ]\n};\n\n@NgModule({\n  imports: [\n    LoadableModule.forRoot(options),\n  ]\n})\nexport class CoreModule { }\n",X='<button (click)="preload()">Preload</button>',$="\nclass PageComponent {\n  constructor(private loadableService: LoadableService) {}\n\n  preload() {\n    this.loadableService.preloadAll();\n  }\n\n  preloadBreach() {\n    this.loadableService.preloadAll(['app-breach']);\n  }\n}\n",q='<button (mouseover)="breachModule.preload()" (click)="showBreach = true">Hover to load/ Click to show</button>\n<ngx-loadable #breachModule module="app-breach" [show]="showBreach"></ngx-loadable>\n',K='<ngx-loadable #lazyModule module="lazy" [show]="true" (init)="lazyInit($event)"></ngx-loadable>\n',Q="lazyInit({instance: lazyComponent}: ComponentRef<LazyComponent>) {\n    let i = 0;\n    lazyComponent.input = 'Updated by AppComponent using Input';\n\n    lazyComponent.output.subscribe(() => {\n      i++;\n      lazyComponent.input = 'Updated by AppComponent using Output ' + i;\n    });\n}\n",Z=[{path:"",component:D}];let ee=(()=>{class e{}return e.ngModuleDef=n.cc({type:e}),e.ngInjectorDef=n.bc({factory:function(o){return new(o||e)},imports:[[i.f.forChild(Z)],i.f]}),e})();i.f.forChild(Z),c.d(o,"AdvancedModule",function(){return oe});let oe=(()=>{class e{}return e.ngModuleDef=n.cc({type:e}),e.ngInjectorDef=n.bc({factory:function(o){return new(o||e)},imports:[[t.b,l.b.forRoot({moduleConfigs:[{name:"lazy",load:()=>c.e(0).then(c.bind(null,"xuv1")).then(e=>e.LazyModule),preload:!0},{name:"lazy-slow",load:()=>new Promise(e=>setTimeout(()=>e(!0),500)).then(()=>c.e(0).then(c.bind(null,"xuv1"))).then(e=>e.LazyModule)}]}),a.a,ee]]}),e})();l.b.forRoot({moduleConfigs:[{name:"lazy",load:()=>c.e(0).then(c.bind(null,"xuv1")).then(e=>e.LazyModule),preload:!0},{name:"lazy-slow",load:()=>new Promise(e=>setTimeout(()=>e(!0),500)).then(()=>c.e(0).then(c.bind(null,"xuv1"))).then(e=>e.LazyModule)}]})}}]);