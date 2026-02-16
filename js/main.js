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
      // Close dropdown when closing mobile nav
      if(!isOpen){
        document.querySelectorAll('.nav-dropdown').forEach(d=>{d.classList.remove('open');d.querySelector('.nav-dropdown-toggle').setAttribute('aria-expanded','false')});
      }
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

  // Services dropdown
  document.querySelectorAll('.nav-dropdown').forEach(dropdown=>{
    const toggleBtn=dropdown.querySelector('.nav-dropdown-toggle');
    const menu=dropdown.querySelector('.nav-dropdown-menu');
    const isMobile=()=>window.matchMedia('(max-width:768px)').matches;

    // Click/tap toggle
    toggleBtn.addEventListener('click',(e)=>{
      e.preventDefault();
      const opening=!dropdown.classList.contains('open');
      // Close other dropdowns
      document.querySelectorAll('.nav-dropdown').forEach(d=>{
        if(d!==dropdown){d.classList.remove('open');d.querySelector('.nav-dropdown-toggle').setAttribute('aria-expanded','false')}
      });
      dropdown.classList.toggle('open',opening);
      toggleBtn.setAttribute('aria-expanded',String(opening));
      if(opening){menu.querySelector('a')?.focus()}
    });

    // Desktop hover
    let hoverTimeout;
    dropdown.addEventListener('mouseenter',()=>{
      if(!isMobile()){clearTimeout(hoverTimeout);dropdown.classList.add('open');toggleBtn.setAttribute('aria-expanded','true')}
    });
    dropdown.addEventListener('mouseleave',()=>{
      if(!isMobile()){hoverTimeout=setTimeout(()=>{dropdown.classList.remove('open');toggleBtn.setAttribute('aria-expanded','false')},150)}
    });

    // Keyboard navigation
    toggleBtn.addEventListener('keydown',(e)=>{
      if(e.key==='ArrowDown'||e.key==='Enter'||e.key===' '){
        e.preventDefault();
        dropdown.classList.add('open');
        toggleBtn.setAttribute('aria-expanded','true');
        menu.querySelector('a')?.focus();
      }
    });
    menu.addEventListener('keydown',(e)=>{
      const items=[...menu.querySelectorAll('a')];
      const idx=items.indexOf(document.activeElement);
      if(e.key==='ArrowDown'){e.preventDefault();items[(idx+1)%items.length]?.focus()}
      else if(e.key==='ArrowUp'){e.preventDefault();items[(idx-1+items.length)%items.length]?.focus()}
      else if(e.key==='Escape'){dropdown.classList.remove('open');toggleBtn.setAttribute('aria-expanded','false');toggleBtn.focus()}
      else if(e.key==='Tab'&&!e.shiftKey&&idx===items.length-1){dropdown.classList.remove('open');toggleBtn.setAttribute('aria-expanded','false')}
      else if(e.key==='Tab'&&e.shiftKey&&idx===0){dropdown.classList.remove('open');toggleBtn.setAttribute('aria-expanded','false')}
    });
  });

  // Close dropdown on outside click
  document.addEventListener('click',(e)=>{
    if(!e.target.closest('.nav-dropdown')){
      document.querySelectorAll('.nav-dropdown').forEach(d=>{d.classList.remove('open');d.querySelector('.nav-dropdown-toggle').setAttribute('aria-expanded','false')});
    }
  });

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
  // Also highlight Services dropdown toggle if on a service page
  const servicePages=['services.html','individual-therapy.html','therapy-for-men.html','young-adult-therapy.html','clinical-supervision.html','consultation-training.html'];
  if(servicePages.includes(path)){
    document.querySelectorAll('.nav-dropdown-toggle').forEach(t=>t.classList.add('active'));
  }
});
