// Set before publishing: WhatsApp number (digits, intl format) and Facebook page URL
var CONFIG={whatsapp:"201500630506",facebook:"",email:"aqlnaut@gmail.com",plans:[]};
var T={en:{n_features:"Features",n_screens:"Screens",n_how:"How it works",n_contact:"Contact",eyebrow:"Cafe and restaurant management",h1:"Your whole venue.<br>One system.",lead:"From the guest's QR order to the profit report. Calm, fast, and Arabic from the ground up.",cta1:"Request a demo",cta2:"See the system",k1:"role-based screens",k2:"Arabic and English",k3:"for every table",k4:"system for everything",kick_f:"Features",h_features:"Everything you need, none of the clutter",f1t:"QR ordering",f1d:"Every table has a QR. Guests open the menu in Arabic or English and order from their phone, no waiting.",f2t:"Separate kitchen and bar",f2d:"Food goes to the kitchen screen and drinks to the bar automatically, with sound alerts.",f3t:"Cashier and receipts",f3d:"Shifts, discounts, coupons, cash payment and printable receipts.",f4t:"Stock and recipes",f4d:"Recipe costing, purchasing and suppliers, so you know the profit on each item.",f5t:"Reservations and delivery",f5d:"Table reservations and delivery orders with drivers.",f6t:"Offers and loyalty",f6d:"Large image offer banners, loyalty points and a scratch card.",f7t:"Reports",f7d:"Profit per item, staff performance, daily sales and simple accounting.",f8t:"Aria assistant",f8d:"A menu assistant that suggests items by mood, budget and party size. Works offline.",kick_s:"Inside the system",h_screens:"A screen for every role",t1:"Tables and QR",t2:"Kitchen",t3:"Guest menu",demo_note:"Screenshots from a demo with sample data.",kick_h:"Getting started",h_how:"Up and running in 3 steps",s1t:"Install",s1:"We install the system on a device at your venue.",s2t:"Set up",s2:"We add your menu, tables and staff.",s3t:"Launch",s3:"Print the QR codes and start taking orders.",note:"Runs on your venue's local network. Online card payment is not connected yet.",h_contact:"Let us show you the system at your venue",contact_d:"Send us a message. We will run a demo and find what fits your place.",wa:"Chat on WhatsApp",fbl:"Our Facebook page",form_s:"Fill in your details and we will contact you with a demo that fits your venue.",l_name:"Contact name",l_phone:"Phone number",l_venue:"Venue name",l_type:"Business type",l_branches:"Number of branches",l_city:"City",l_msg:"Notes (optional)",e_req:"This field is required",e_phone:"Enter a valid Egyptian phone number",th_t:"Your request is ready",th_d:"Tap the button below to open WhatsApp and confirm sending. We will reply as soon as we can.",th_b:"Open WhatsApp",th_a:"New request",n_adv:"Advertise",kick_a:"Advertising",h_adv:"Advertise with us",adv_d:"Show your brand on the menu screens inside cafes and restaurants, and on our website. A real audience at the moment of choice.",adv_b:"Ask about advertising",o5:"Advertising",eyebrow:"Complete cafe and restaurant management",h1:"Every detail of your venue.<br>One system.",lead:"From the guest's QR order to the profit report. Calm, fast, and built in Arabic from the ground up.",cta1:"Request a demo",cta2:"Explore the system",n_pricing:"Plans",kick_p:"Subscriptions",h_pricing:"Plans that fit your venue",plans_note:"Contact us for pricing and the plan that fits your venue.",form_t:"Register your interest",form_b:"Send request",form_n:"WhatsApp will open with a ready message to confirm sending.",ph_name:"Name",ph_venue:"Venue name",ph_phone:"Phone number",ph_city:"City",ph_msg:"Your message (optional)",o1:"Cafe",o2:"Restaurant",o3:"Cafe and restaurant",o4:"Other"}};
var ar={};document.querySelectorAll("[data-i18n]").forEach(function(e){ar[e.dataset.i18n]=e.innerHTML});document.querySelectorAll("[data-o]").forEach(function(e){ar[e.dataset.o]=e.textContent});T.ar=ar;
function setLang(l){document.documentElement.lang=l;document.documentElement.dir=l=="ar"?"rtl":"ltr";
document.querySelectorAll("[data-i18n]").forEach(function(e){e.innerHTML=T[l][e.dataset.i18n]});
document.querySelectorAll("[data-o]").forEach(function(e){e.textContent=T[l][e.dataset.o]});document.getElementById("lang").textContent=l=="ar"?"EN":"عربي";localStorage.lang=l}
document.getElementById("lang").onclick=function(){setLang(document.documentElement.lang=="ar"?"en":"ar")};
if(localStorage.lang=="en")setLang("en");
var wa=document.getElementById("wa"),fb=document.getElementById("fb");
if(CONFIG.whatsapp)wa.href="https://wa.me/"+CONFIG.whatsapp;else wa.style.display="none";
if(CONFIG.facebook)fb.href=CONFIG.facebook;else fb.style.display="none";
var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target)}})},{threshold:.12});
document.querySelectorAll(".reveal").forEach(function(e){io.observe(e)});

document.querySelectorAll(".tile").forEach(function(t){t.addEventListener("mousemove",function(e){var r=t.getBoundingClientRect();t.style.setProperty("--mx",(e.clientX-r.left)+"px");t.style.setProperty("--my",(e.clientY-r.top)+"px")})});
var tabs=document.querySelectorAll(".tabs button"),panes=document.querySelectorAll(".pane");
tabs.forEach(function(b){b.onclick=function(){tabs.forEach(function(x){x.classList.remove("on")});panes.forEach(function(x){x.classList.remove("on")});b.classList.add("on");panes[b.dataset.t].classList.add("on")}});
var tilt=document.getElementById("tilt"),rm=matchMedia("(prefers-reduced-motion:reduce)").matches;
if(tilt&&!rm)addEventListener("scroll",function(){var p=Math.min(scrollY/500,1);tilt.style.transform="perspective(1600px) rotateX("+(10-10*p)+"deg) translateY("+(-30*p)+"px)"},{passive:true});

/* contact form, email, pricing */
var adv=document.getElementById("adv");adv.addEventListener("click",function(e){e.preventDefault();var en=document.documentElement.lang=="en";location.href="https://wa.me/"+CONFIG.whatsapp+"?text="+encodeURIComponent(en?"Hello, I would like to ask about advertising with AQLNAUT.":"مرحبًا، أود الاستفسار عن الإعلان مع AQLNAUT.")});
(function(){var f=document.getElementById("lead"),th=document.getElementById("thanks");
function en(){return document.documentElement.lang=="en"}
function ok(el){var v=el.value.trim();if(el.name=="phone"){return /^(\+?20|0)?1[0125]\d{8}$/.test(v.replace(/[\s-]/g,""))}return el.required?v.length>1:true}
function mark(el){var g=el.closest(".fld");if(!g)return true;var good=ok(el);g.classList.toggle("bad",!good);return good}
f.querySelectorAll("input,textarea").forEach(function(el){el.addEventListener("blur",function(){if(el.value||el.closest(".fld").classList.contains("bad"))mark(el)});el.addEventListener("input",function(){if(el.closest(".fld").classList.contains("bad"))mark(el)})});
f.addEventListener("submit",function(e){e.preventDefault();var bad=null;f.querySelectorAll("input").forEach(function(el){if(!mark(el)&&!bad)bad=el});if(bad){bad.focus();return}
 var v=function(n){return f.elements[n].value.trim()};
 var m="طلب تسجيل اهتمام - AQLNAUT\nالاسم: "+v("name")+"\nالهاتف: "+v("phone")+"\nالمكان: "+v("venue")+" ("+v("type")+")\nعدد الفروع: "+v("branches")+"\nالمدينة: "+v("city")+(v("msg")?"\nملاحظات: "+v("msg"):"");
 var url="https://wa.me/"+CONFIG.whatsapp+"?text="+encodeURIComponent(m);
 try{fetch("https://formsubmit.co/ajax/"+CONFIG.email,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({_subject:"AQLNAUT: طلب جديد من "+v("name"),_template:"table",_captcha:"false",name:v("name"),phone:v("phone"),venue:v("venue"),type:v("type"),branches:v("branches"),city:v("city"),notes:v("msg")})}).catch(function(){})}catch(x){}
 document.getElementById("thwa").href=url;f.hidden=true;th.hidden=false;th.scrollIntoView({block:"center",behavior:"smooth"})});
document.getElementById("again").onclick=function(){f.reset();th.hidden=true;f.hidden=false}})();
if(CONFIG.email){var ml=document.getElementById("mail");ml.href="mailto:"+CONFIG.email;ml.textContent=CONFIG.email;document.getElementById("mailrow").hidden=false}
var PLANS=[
{n:["الباقة الأساسية","Basic"],i:[["نقطة البيع والفواتير","الطاولات وقائمة QR","تقارير أساسية","فرع واحد"],["Cashier and receipts","Tables and QR menu","Basic reports","One branch"]]},
{n:["الباقة الاحترافية","Professional"],pop:1,i:[["كل مزايا الأساسية","شاشتا المطبخ والبار","المخزون والوصفات","الحجوزات والتوصيل","العروض والولاء"],["Everything in Basic","Kitchen and bar screens","Stock and recipes","Reservations and delivery","Offers and loyalty"]]},
{n:["نسبة من المبيعات","Share of sales"],i:[["بدون اشتراك ثابت","تدفع نسبة من مبيعاتك عبر النظام","كل مزايا الباقة الاحترافية","مناسبة للأماكن الجديدة"],["No fixed subscription","Pay a share of sales made through the system","Everything in Professional","Good for new venues"]]},
{n:["باقة الأعمال","Business"],i:[["فروع متعددة","مساعدة Aria","دعم بأولوية","إعداد وتدريب"],["Multiple branches","Aria assistant","Priority support","Setup and training"]]}];
function renderPlans(){var en=document.documentElement.lang=="en",k=en?1:0,ps=document.getElementById("plans");ps.innerHTML="";
PLANS.forEach(function(p){var d=document.createElement("article");d.className="plan in"+(p.pop?" pop":"");
d.innerHTML="<h3>"+p.n[k]+"</h3><ul>"+p.i[k].map(function(x){return"<li>"+x+"</li>"}).join("")+"</ul><a class='btn ghost ask' href='https://wa.me/"+CONFIG.whatsapp+"?text="+encodeURIComponent((en?"Hello, I would like to know the price of the plan: ":"مرحبًا، أود معرفة سعر باقة: ")+p.n[k])+"'>"+(en?"Ask for the price":"اسأل عن السعر")+"</a>";ps.appendChild(d)})}
renderPlans();var _s2=setLang;setLang=function(l){_s2(l);renderPlans()};
document.getElementById("pricing").hidden=false;document.getElementById("npr").hidden=false;

/* motion v3 */
(function(){
var rm=matchMedia("(prefers-reduced-motion:reduce)").matches;
var bar=document.querySelector(".progress");
addEventListener("scroll",function(){var h=document.documentElement;bar.style.width=(scrollY/(h.scrollHeight-innerHeight)*100)+"%"},{passive:true});
if(rm)return;
// word-by-word headline
var h1=document.querySelector("h1");
function splitH1(){h1.innerHTML=h1.innerHTML.split("<br>").map(function(line){return line.trim().split(/\s+/).map(function(w,i){return '<span class="word" style="animation-delay:'+(0.25+i*0.09)+'s">'+w+'</span>'}).join(" ")}).join("<br>")}
splitH1();
var _set=setLang;setLang=function(l){_set(l);splitH1()};
// mouse state
var mx=innerWidth/2,my=innerHeight/2,gx=mx,gy=my,glow=document.querySelector(".cursor-glow");
addEventListener("mousemove",function(e){mx=e.clientX;my=e.clientY;glow.classList.add("on")});
document.addEventListener("mouseleave",function(){glow.classList.remove("on")});
// particle fields
var fields=[];
document.querySelectorAll(".fx").forEach(function(sec){
 var c=document.createElement("canvas");sec.insertBefore(c,sec.firstChild);
 var f={sec:sec,c:c,x:c.getContext("2d"),p:[],w:0,h:0};
 function size(){var r=sec.getBoundingClientRect();f.w=c.width=r.width;f.h=c.height=r.height;
  var n=Math.round(f.w*f.h/14000);f.p=[];for(var i=0;i<n;i++)f.p.push({x:Math.random()*f.w,y:Math.random()*f.h,vx:(Math.random()-.5)*.25,vy:(Math.random()-.5)*.25,r:Math.random()*1.4+.4,o:Math.random()*.5+.2,ph:Math.random()*6.28})}
 size();addEventListener("resize",size);f.size=size;fields.push(f)});
function frame(t){
 gx+=(mx-gx)*.12;gy+=(my-gy)*.12;
 glow.style.transform="translate("+gx+"px,"+gy+"px)";
 fields.forEach(function(f){
  var r=f.sec.getBoundingClientRect();if(r.bottom<0||r.top>innerHeight)return;
  if(Math.abs(r.height-f.h)>2||Math.abs(r.width-f.w)>2)f.size();
  var x=f.x,lx=mx-r.left,ly=my-r.top;x.clearRect(0,0,f.w,f.h);
  for(var i=0;i<f.p.length;i++){var p=f.p[i];
   var dx=p.x-lx,dy=p.y-ly,d=Math.sqrt(dx*dx+dy*dy);
   if(d<180&&d>0){var k=(1-d/180)*.9;p.vx+=dx/d*k*.12;p.vy+=dy/d*k*.12}
   p.vx*=.985;p.vy*=.985;p.vx+=(Math.random()-.5)*.01;p.vy+=(Math.random()-.5)*.01;
   p.x+=p.vx;p.y+=p.vy;if(p.x<0)p.x=f.w;if(p.x>f.w)p.x=0;if(p.y<0)p.y=f.h;if(p.y>f.h)p.y=0;
   var near=d<180?1-d/180:0,tw=.6+.4*Math.sin(t/700+p.ph);
   x.fillStyle="rgba("+(255)+","+(150+Math.round(near*60))+","+(60+Math.round(near*40))+","+Math.min(1,(p.o*tw+near*.6))+")";
   x.beginPath();x.arc(p.x,p.y,p.r+near*1.8,0,6.283);x.fill();
   if(near>0){for(var j=i+1;j<f.p.length;j++){var q=f.p[j],ex=q.x-p.x,ey=q.y-p.y,e=ex*ex+ey*ey;
    if(e<5500){var qd=Math.hypot(q.x-lx,q.y-ly);if(qd<200){x.strokeStyle="rgba(255,150,50,"+(0.35*(1-e/5500)*near)+")";x.lineWidth=.7;x.beginPath();x.moveTo(p.x,p.y);x.lineTo(q.x,q.y);x.stroke()}}}}
  }});
 requestAnimationFrame(frame)}
requestAnimationFrame(frame);
// magnetic buttons
document.querySelectorAll(".btn,.lang").forEach(function(b){
 b.addEventListener("mousemove",function(e){var r=b.getBoundingClientRect();b.style.transform="translate("+((e.clientX-r.left-r.width/2)*.25)+"px,"+((e.clientY-r.top-r.height/2)*.35)+"px)"});
 b.addEventListener("mouseleave",function(){b.style.transform=""})});
// 3D tilt tiles
document.querySelectorAll(".tile,.steps li").forEach(function(t){
 t.addEventListener("mousemove",function(e){var r=t.getBoundingClientRect(),px=(e.clientX-r.left)/r.width-.5,py=(e.clientY-r.top)/r.height-.5;
  t.style.transform="perspective(900px) rotateY("+(px*-8)+"deg) rotateX("+(py*8)+"deg) translateY(-6px)"});
 t.addEventListener("mouseleave",function(){t.style.transform=""})});
// hero parallax with mouse
var aura=document.querySelector(".aura"),logo=document.querySelector(".hero-logo");
addEventListener("mousemove",function(e){var px=e.clientX/innerWidth-.5,py=e.clientY/innerHeight-.5;
 aura.style.marginLeft=(px*80)+"px";aura.style.marginTop=(py*60)+"px"});
})();
