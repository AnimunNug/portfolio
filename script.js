const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];

const revealObserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
},{threshold:.12});

$$('.reveal').forEach(el=>revealObserver.observe(el));

const menu = $('.menu-btn');
const nav = $('.nav');
menu?.addEventListener('click',()=>{
  nav.classList.toggle('open');
});
$$('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const cursorDot = $('.cursor-dot');
const cursorRing = $('.cursor-ring');
if(cursorDot && cursorRing && matchMedia('(pointer:fine)').matches){
  let mx=0,my=0,rx=0,ry=0;
  window.addEventListener('mousemove',e=>{
    mx=e.clientX; my=e.clientY;
    cursorDot.style.left=mx+'px'; cursorDot.style.top=my+'px';
  });
  const loop=()=>{
    rx += (mx-rx)*.15; ry += (my-ry)*.15;
    cursorRing.style.left=rx+'px'; cursorRing.style.top=ry+'px';
    requestAnimationFrame(loop);
  };
  loop();
  $$('a,button,.project,.service').forEach(el=>{
    el.addEventListener('mouseenter',()=>{cursorRing.style.width='48px';cursorRing.style.height='48px'});
    el.addEventListener('mouseleave',()=>{cursorRing.style.width='34px';cursorRing.style.height='34px'});
  });
}

if(matchMedia('(pointer:fine)').matches){
  $$('.tilt').forEach(card=>{
    card.addEventListener('mousemove',e=>{
      const r=card.getBoundingClientRect();
      const x=(e.clientX-r.left)/r.width-.5;
      const y=(e.clientY-r.top)/r.height-.5;
      card.style.transform=`perspective(900px) rotateX(${y*-3}deg) rotateY(${x*4}deg) translateY(-5px)`;
    });
    card.addEventListener('mouseleave',()=>card.style.transform='');
  });
}

const toast = $('#toast');
function showToast(text){
  toast.textContent=text;
  toast.classList.add('show');
  clearTimeout(showToast.t);
  showToast.t=setTimeout(()=>toast.classList.remove('show'),2200);
}
$$('[data-placeholder]').forEach(a=>{
  a.addEventListener('click',e=>{
    e.preventDefault();
    showToast(`${a.dataset.placeholder} ссылку нужно заменить`);
  });
});

$('#moreProjects')?.addEventListener('click',()=>{
  showToast('Здесь можно добавить следующую подборку проектов');
});

const heroArt=$('.hero-art');
window.addEventListener('scroll',()=>{
  if(heroArt && window.scrollY < innerHeight){
    heroArt.style.transform=`translateY(${window.scrollY*.035}px)`;
  }
},{passive:true});
