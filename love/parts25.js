(function(){var j=function(){var a=document.getElementsByTagName("script"),c=a[a.length-1].src,a=[];if(-1!=c.lastIndexOf("?")){c=c.substring(c.lastIndexOf("?")+1).split("&");for(i=0;i<c.length;i++){var f=c[i].split("=");a[f[0]]=f[1]}}return a}(),x=function(){var a=navigator.appVersion.toLowerCase(),a=-1<a.indexOf("msie")?parseInt(a.replace(/.*msie[ ]/,"").match(/^[0-9]+/)):0;return{ltIE6:6>=a&&0!=a,ltIE7:7>=a&&0!=a,ltIE8:8>=a&&0!=a,ltIE9:9>=a&&0!=a,ie:0!=a,firefox:window.globalStorage,opera:window.opera,
webkit:!document.uniqueID&&!window.opera&&!window.globalStorage&&window.localStorage,mobile:/android|iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase())}}(),l=j.us,u=j.id,r=j.bic,y=j.nc,t=j.c1,o=Number(j.c2),m=Number(j.c3);5<m&&(m=5);var p=j.c9,q=j.c10,z=j.c11,A=j.c8,B="/love/",v=document.body,l=l+"_"+u,C=(new Date).getTime(),D=Math.ceil(500/o),w=!1,a=[],n=[],s={x:0,y:0};window[l]={init:function(){for(i=
0;i<r;i++)n[i]=new Image,n[i].src=B+j["im"+(i+1)]+(1==y?"?"+C:"");for(i=0;i<t;i++){var e=document.createElement("div");e.style.position="fixed";e.style.overflow="hidden";e.style.visibility="hidden";e.style.top=0;e.style.left=0;e.style.zIndex=1E3+i;var g=document.createElement("img");g.style.border="0";g.src=n[0].src;e.appendChild(g);v.appendChild(e);a[i]={obj:e,img:g,action:0,from:s,to:s,begin:0,duration:0,subball:[]};for(var f=0;f<p;f++)e=document.createElement("div"),e.style.position="fixed",e.style.overflow=
"hidden",e.style.visibility="hidden",e.style.top=0,e.style.left=0,e.style.zIndex=1E3+i,g=document.createElement("img"),g.style.border="0",g.src=1==r?n[0].src:n[f%(r-1)+1].src,e.appendChild(g),v.appendChild(e),a[i].subball[f]={obj:e,img:g,action:0,from:s,to:s,begin:0,duration:0,angle:0}}c.action();c.addEventListener(document,"mousemove",function(b){for(var b=c.getCursorPosition(b),e=0;e<t;e++)if(1==a[e].action){var g=Number(a[e].obj.style.top.replace("px","")),d=g+a[e].img.height,f=Number(a[e].obj.style.left.replace("px",
"")),j=f+a[e].img.width;g<=b.y&&(b.y<=d&&f<=b.x&&b.x<=j)&&(a[e].to={x:f,y:g},a[e].action=3)}},!0);setInterval(c.action,10)},action:function(){if(!w){for(b=0;b<r;b++)if(0==n[b].height)return;w=!0}for(var e=c.getViewHeight(),g=c.getViewWidth(),f=c.getViewHeight(),b=0;b<t;b++){switch(a[b].action){case 0:if(0==c.getRandomNum(D)){var k=c.getRandomNum(g-a[b].img.width);a[b].from={x:k,y:f};a[b].to={x:k,y:-1*Number(a[b].img.height)};a[b].begin=new Date-0;a[b].duration=20*e/o;0<m&&(a[b].duration*=1+0.1*(0==
c.getRandomNum(2)?1:-1)*c.getRandomNum(m));a[b].action=1;c.move(a[b].obj,a[b].from);c.setVisible(a[b].obj)}break;case 1:var h=new Date-a[b].begin;h<a[b].duration?c.move(a[b].obj,c.easingPos(h,a[b].from,a[b].to,a[b].duration)):(c.setHidden(a[b].obj),a[b].action=0);break;case 2:var k=a[b].to.x,d=a[b].to.y,j=c.getRandomNum(g-a[b].img.width),h=c.getRandomNum(e-a[b].img.height);a[b].from={x:k,y:d};a[b].to={x:j,y:h};a[b].begin=new Date-0;k=Math.abs(j-k);d=Math.abs(h-d);d=Math.sqrt(k*k+d*d);a[b].duration=
20*e/o*d/e;a[b].action=1;c.move(a[b].obj,a[b].from);c.setVisible(a[b].obj);break;case 3:c.setHidden(a[b].obj);h=360/p;k=c.getRandomNum(360);for(d=0;d<p;d++)a[b].subball[d].angle=k,a[b].subball[d].from={x:a[b].to.x+a[b].img.width/2-a[b].subball[d].img.width/2,y:a[b].to.y+a[b].img.height/2-a[b].subball[d].img.height/2},a[b].subball[d].to={x:a[b].subball[d].from.x-20*q+c.getRandomNum(40*q),y:a[b].subball[d].from.y-20*q+c.getRandomNum(40*q)},a[b].subball[d].begin=new Date-0,a[b].subball[d].duration=1E3*
q/z/o,k+=h,a[b].subball[d].action=1,c.move(a[b].subball[d].obj,a[b].subball[d].from),c.setVisible(a[b].subball[d].obj),c.setOpacity(a[b].subball[d].obj,100);a[b].action=4;break;case 4:h=1;for(d=0;d<p;d++)if(0!=a[b].subball[d].action){h=0;break}1==h&&(a[b].action=0)}for(d=0;d<p;d++)switch(a[b].subball[d].action){case 1:h=new Date-a[b].subball[d].begin;h<a[b].subball[d].duration?(k=c.easingDecelPos(h,a[b].subball[d].from,a[b].subball[d].to,a[b].subball[d].duration),c.move(a[b].subball[d].obj,k)):(a[b].subball[d].from=
a[b].subball[d].to,a[b].subball[d].to={x:a[b].subball[d].to.x,y:f},a[b].subball[d].begin=new Date-0,a[b].subball[d].duration=20*(f-a[b].subball[d].from.y)/o,0<m&&(a[b].subball[d].duration*=1+0.1*(0==c.getRandomNum(2)?1:-1)*c.getRandomNum(m)),a[b].subball[d].action=2);break;case 2:h=new Date-a[b].subball[d].begin,h<a[b].subball[d].duration?(k=c.easingAccelPos(h,a[b].subball[d].from,a[b].subball[d].to,a[b].subball[d].duration),c.move(a[b].subball[d].obj,k),1==A&&(h=c.easing(h,100,0,a[b].subball[d].duration),
c.setOpacity(a[b].subball[d].obj,h))):(c.setHidden(a[b].subball[d].obj),a[b].subball[d].action=0)}}},getRandomNum:function(a){return Math.floor(Math.random()*a)},getViewHeight:function(){return window.innerHeight?window.innerHeight:document.documentElement&&document.documentElement.clientHeight?document.documentElement.clientHeight:document.body&&document.body.clientHeight?document.body.clientHeight:0},getViewWidth:function(){return window.innerWidth?window.innerWidth:document.documentElement&&document.documentElement.clientWidth?
document.documentElement.clientWidth:document.body&&document.body.clientWidth?document.body.clientWidth:0},getViewTop:function(){return window.scrollY?window.scrollY:window.pageYOffset?window.pageYOffset:document.documentElement&&document.documentElement.scrollTop?document.documentElement.scrollTop:document.body&&document.body.scrollTop?document.body.scrollTop:0},getViewBottom:function(){return c.getViewTop()+c.getViewHeight()},getViewLeft:function(){return window.scrollX?window.scrollX:window.pageXOffset?
window.pageXOffset:document.documentElement&&document.documentElement.scrollLeft?document.documentElement.scrollLeft:document.body&&document.body.scrollLeft?document.body.scrollLeft:0},getViewRight:function(){return c.getViewLeft()+c.getViewWidth()},easing:function(a,c,f,b){return(f-c)*a/b+c},easingAccel:function(a,c,f,b){return f-c-(f-c)*Math.cos(90*a/b*Math.PI/180)+c},easingDecel:function(a,c,f,b){return(f-c)*Math.cos((90-90*a/b)*Math.PI/180)+c},easingPos:function(a,g,f,b){return{x:c.easing(a,g.x,
f.x,b),y:c.easing(a,g.y,f.y,b)}},easingAccelPos:function(a,g,f,b){return{x:c.easingAccel(a,g.x,f.x,b),y:c.easingAccel(a,g.y,f.y,b)}},easingDecelPos:function(a,g,f,b){return{x:c.easingDecel(a,g.x,f.x,b),y:c.easingDecel(a,g.y,f.y,b)}},move:function(a,c){a.style.top=c.y+"px";a.style.left=c.x+"px"},setHidden:function(a){a.style.visibility="hidden"},setVisible:function(a){a.style.visibility="visible"},addEventListener:function(a,c,f,b){return!a?!1:a.addEventListener?(a.addEventListener(c,f,b),!0):a.attachEvent?
(a.attachEvent("on"+c,f),!0):!1},getCursorPosition:function(a){return window.opera?{x:window.event.clientX-c.getViewLeft(),y:window.event.clientY-c.getViewTop()}:document.all?{x:window.event.clientX,y:window.event.clientY}:document.getElementById?{x:a.clientX,y:a.clientY}:document.layers?{x:a.clientX-c.getViewLeft(),y:a.clientY-c.getViewTop()}:{x:0,y:0}},setOpacity:function(a,c){x.ltIE8||(a.style.filter="alpha(opacity="+c+")",a.style.MozOpacity=c/100,a.style.opacity=c/100)}};var c=window[l];c.init()})();