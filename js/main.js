// Mobile nav toggle
document.addEventListener('DOMContentLoaded',()=>{
  const btn=document.querySelector('.hamburger');
  const nav=document.querySelector('.nav-links');
  if(btn&&nav){
    const toggle=(open)=>{
      const isOpen=typeof open==='boolean'?open:!nav.classList.contains('open');
      btn.classList.toggle('open',isOpen);
      nav.classList.toggle('open',isOpen);
      btn.setAttribute('aria-expanded',String(isOpen));
    };
    btn.addEventListener('click',()=>toggle());
    nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>toggle(false)));
    document.addEventListener('keydown',(e)=>{
      if(e.key==='Escape'&&nav.classList.contains('open')){
        toggle(false);
        btn.focus();
      }
    });
  }
  // FAQ accordion
  document.querySelectorAll('.faq-item h3').forEach(h=>{
    h.addEventListener('click',()=>h.parentElement.classList.toggle('open'));
  });
  // Active nav link
  const path=location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('.nav-links a').forEach(a=>{
    const href=a.getAttribute('href');
    if(href===path||(path==='index.html'&&href==='index.html'))a.classList.add('active');
  });
});
