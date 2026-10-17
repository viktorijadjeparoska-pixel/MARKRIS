const T = {
mk:{},
en:{
hero_kicker:"Accounting · Tax advice · Consulting",
hero_title:"Order in your numbers is freedom for your business.",
hero_lead:"Professional accounting and administrative services that you can fully trust.",
hero_cta:"Request a consultation",
hero_cta2:"Our services",
hf1:"Established",
hf2:"Registered office",
hf2v:"Ohrid",
hf3:"Main activity",
hf4:"Legal form",
srv_lead:"Complete financial support in one place.",
band_t:"Prepare your year without stress.",
band_cta:"Book a conversation",
team_lead:"The people who take care of your books.",
det_lead:"According to the decision of the Central Registry of the Republic of North Macedonia.",
c_lead:"Write to us and we will reply as soon as possible.",
credit:"Photos:",
d10:"Registration approved",
d11:"Duration",
d11v:"Unlimited",
d12:"Type of ownership",
d12v:"Private ownership",
d13:"Size of entity",
d13v:"Micro",
d9v:"5,000.00 EUR (non-cash contribution, fully paid)",
d14:"Competent register",
d14v:"Trade Register",
skip:"Skip to content",
nav_about:"About",
nav_services:"Services",
nav_team:"Team",
nav_news:"News",
nav_details:"Company data",
nav_contact:"Contact",
about_title:"Trust built on accuracy",
about_p1:"MARKRIS DOOEL Ohrid is an accounting and consulting company, founded on 10 August 2023 and entered in the Trade Register.",
about_p2:"Our activity covers accounting and bookkeeping work and tax advice. We make sure your documents are in order, deadlines are met and obligations are clear.",
v1_t:"Accuracy",
v1_d:"Every entry is checked before it reaches you.",
v2_t:"Deadlines",
v2_d:"Returns and reports are filed on time.",
v3_t:"Clarity",
v3_d:"We explain simply, without accounting jargon.",
g1:"Precise calculations",
g2:"Tidy documentation",
g3:"Clear financial reports",
srv_title:"Services",
s1_t:"Bookkeeping",
s1_d:"Regular keeping of business books, posting of invoices, bank statements and cash.",
s2_t:"Annual accounts",
s2_d:"Preparation of the balance sheet and income statement and filing with the Central Registry.",
s3_t:"Tax advice",
s3_d:"VAT, corporate income tax and personal income tax, with a plan to lawfully reduce your burden.",
s4_t:"Payroll and HR records",
s4_d:"Payroll and contribution calculation and related returns.",
s5_t:"Formation of trading companies",
s5_d:"Formation of trading companies according to your needs.",
s6_t:"Business consulting",
s6_d:"Financial planning, cost analysis and support for decision-making.",
proc_title:"How we work",
p1_t:"Conversation",
p1_d:"We learn about your business and needs.",
p2_t:"Agreement",
p2_d:"We define the scope of services and a clear price.",
p3_t:"Regular work",
p3_d:"Monthly bookkeeping and timely returns.",
p4_t:"Report",
p4_d:"An overview of your position and recommendations.",
team_title:"Team",
role1:"Manager and founder",
bio1:"Runs the company and is responsible for the quality of all services.",
role2:"Associate",role_acc:"Certified accountant",role_it:"IT associate",role_econ:"Economist",brand_tag:"Accounting and consulting",
news_title:"News and tips",
n1_t:"What to prepare before year-end closing",
n1_d:"Stocktaking, balance reconciliation and a check of unpaid invoices: a list of tasks to finish before year-end.",
n2_t:"VAT: the most common mistakes in returns",
n2_d:"A wrong period, a missing document or an incorrect VAT number delay the return. Here is how to avoid them.",
n3_t:"How to organise your accounting documents",
n3_d:"A simple monthly system for keeping invoices and statements that saves time and money.",
faq_title:"Frequently asked questions",
q1:"Which documents do I need to send you?",
a1:"Outgoing and incoming invoices, bank statements, cash records, contracts and payment documents, by the deadline we agree on.",
q2:"Do you work with new companies?",
a2:"Yes. We form trading companies and keep their books from the very start.",
q3:"Can we work remotely?",
a3:"Yes. Documents can be sent electronically and meetings held by e-mail or video call.",
det_title:"Company data",
d1:"Full name",
d2:"Short name",
d3:"Registered office",
d4:"Tax number",
d5:"Date of establishment",
d6:"Legal form",
d6v:"Single-member limited liability company (DOOEL)",
d7:"Main activity",
d7v:"69.20 – Accounting and bookkeeping activities; tax advice",
d8:"Manager",
d9:"Share capital",
c_title:"Contact",
c_addr:"Address",
f_name:"Full name",
f_subject:"Subject",
f_msg:"Message",
o1:"Bookkeeping",
o2:"Tax advice",
o3:"Formation of a trading company",
o4:"Other",
f_consent:"I agree that my data may be used to respond to my request.",
f_send:"Send message",
rights:"All rights reserved.",
cookie_settings:"Cookie settings",
cookie_text:"We use cookies for the site to work properly and to analyse traffic. You can accept all or only the necessary ones.",
cookie_accept:"Accept all",
cookie_nec:"Necessary only"
}};
const MSG={mk:{ok:"Се отвора вашата е-пошта за испраќање. Благодариме!",err:"Пополнете ги задолжителните полиња и дајте согласност."},
en:{ok:"Opening your e-mail app to send. Thank you!",err:"Please fill in the required fields and give consent."}};
let lang=localStorage.getItem("lang")||"mk";
const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
$$("[data-i18n]").forEach(e=>T.mk[e.dataset.i18n]=e.textContent);
function setLang(l){
  lang=l;localStorage.setItem("lang",l);document.documentElement.lang=l;
  $$("[data-i18n]").forEach(e=>{const v=T[l][e.dataset.i18n];if(v)e.textContent=v});
  $$(".lang button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.lang===l));
}
$$(".lang button").forEach(b=>b.onclick=()=>setLang(b.dataset.lang));
if(lang!=="mk")setLang(lang);
$("#year").textContent=new Date().getFullYear();

const hdr=$("#header");const onS=()=>hdr.classList.toggle("solid",scrollY>40);onS();addEventListener("scroll",onS,{passive:true});
const toggle=$(".nav-toggle"),nav=$("#nav");
toggle.onclick=()=>toggle.setAttribute("aria-expanded",nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(a=>a.onclick=()=>nav.classList.remove("open"));

const banner=$("#cookie-banner");
function setCookie(v){document.cookie="cookie_consent="+v+"; max-age=31536000; path=/; SameSite=Lax";banner.hidden=true}
if(!document.cookie.includes("cookie_consent="))banner.hidden=false;
$("#cookie-accept").onclick=()=>setCookie("all");
$("#cookie-necessary").onclick=()=>setCookie("necessary");
$("#open-cookies").onclick=e=>{e.preventDefault();banner.hidden=false};

$("#contact-form").addEventListener("submit",e=>{
  e.preventDefault();
  const f=e.target,st=$("#form-status");let ok=true;
  f.querySelectorAll("[required]").forEach(i=>{
    const bad=i.type==="checkbox"?!i.checked:!i.value.trim()||(i.type==="email"&&!/^\S+@\S+\.\S+$/.test(i.value));
    i.classList.toggle("invalid",bad);if(bad)ok=false;
  });
  if(!ok){st.textContent=MSG[lang].err;return}
  const d=new FormData(f);
  location.href="mailto:markrisdooel@gmail.com?subject="+encodeURIComponent(d.get("subject")+" – "+d.get("name"))+
    "&body="+encodeURIComponent(d.get("message")+"\n\n"+d.get("name")+" <"+d.get("email")+">");
  st.textContent=MSG[lang].ok;f.reset();
});
