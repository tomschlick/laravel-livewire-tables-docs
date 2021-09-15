__NUXT_JSONP__("/usage/Basic-Example-Table", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W){return {data:[{document:{slug:"Basic-Example-Table",description:"",title:"Basic Example",position:3,category:"Usage",fullscreen:true,toc:[],body:{type:"root",children:[{type:b,tag:I,props:{},children:[{type:a,value:"At the very least, you need to give the DataTable component a list of columns, and a base query to start with:"}]},{type:a,value:l},{type:b,tag:I,props:{},children:[{type:a,value:"For this basic example, the component will use the columns to generate the display as well, it will also use the columns sortable() and searchable() methods to add that functionality for you automatically."}]},{type:a,value:l},{type:b,tag:"div",props:{className:["nuxt-content-highlight"]},children:[{type:b,tag:"pre",props:{className:[J,"line-numbers"]},children:[{type:b,tag:"code",props:{},children:[{type:b,tag:c,props:{className:[d,"php",J]},children:[{type:b,tag:c,props:{className:[d,"delimiter","important"]},children:[{type:a,value:"\u003C?php"}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"namespace"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:K},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"Http"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"Livewire"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"Admin"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:u}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:K},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"Domains"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"Auth"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"Models"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:u}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"Illuminate"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"Database"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"Eloquent"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:L}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:u}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:M},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:u}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:M},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"Views"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"class"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:"UsersTable"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"extends"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:O}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:Q}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"columns"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:R}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h,S]},children:[{type:a,value:"array"}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:T}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"["}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:F}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,o,p]},children:[{type:a,value:"'Name'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:U}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:F}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,o,p]},children:[{type:a,value:"'E-mail'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o,p]},children:[{type:a,value:"'email'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:U}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:F}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,o,p]},children:[{type:a,value:"'Verified'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o,p]},children:[{type:a,value:"'email_verified_at'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"]"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:H}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:Q}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:V}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:R}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,B,S]},children:[{type:a,value:L}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:T}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:A},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:V}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:H}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:H}]},{type:a,value:l}]}]}]}]}]},dir:"\u002Fen\u002Fusage",path:"\u002Fen\u002Fusage\u002FBasic-Example-Table",extension:".md",createdAt:W,updatedAt:W,to:"\u002Fusage\u002FBasic-Example-Table"},prev:{title:"Installation & Configuration",path:"\u002Fen\u002Fstart\u002FInstallation-&-Configuration",to:"\u002Fstart\u002FInstallation-&-Configuration"},next:{title:"Advanced Example",path:"\u002Fen\u002Fusage\u002FAdvanced-Example-Table",to:"\u002Fusage\u002FAdvanced-Example-Table"}}],fetch:{},mutations:[]}}("text","element","span","token","punctuation"," ","\\","keyword","function","(",")","\n",";","package","string","single-quoted-string","\n                ","operator","-\u003E",",","use","Column","\n    ","scope","::","\n\n","User","class-name","{","\n        ","\n            ","make","sortable","}","p","language-php","App","Builder","Rappasoft","LaravelLivewireTables","DataTableComponent","\n\n    ","public",":","return-type","return","searchable","query","2021-09-15T15:33:43.235Z")));