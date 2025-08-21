/* Accessible tabs with hash + localStorage state */
(function(){
  const TAB_KEY = 'activeTab';
  const tabs = Array.from(document.querySelectorAll('.tab-btn[role="tab"]'));
  const panels = Array.from(document.querySelectorAll('.tabpanel[role="tabpanel"]'));

  function setActive(which){
    tabs.forEach(btn => {
      const active = btn.dataset.tab === which;
      btn.setAttribute('aria-selected', String(active));
      btn.setAttribute('tabindex', active ? '0' : '-1');
    });
    panels.forEach(p => {
      const show = p.dataset.panel === which;
      if (show) p.removeAttribute('hidden'); else p.setAttribute('hidden','');
    });
    try{ localStorage.setItem(TAB_KEY, which); }catch(_){}
    const newHash = '#' + which;
    if (location.hash !== newHash) history.replaceState(null, '', newHash);
  }

  function init(){
    const hash = location.hash.replace('#','');
    const saved = (()=>{ try{ return localStorage.getItem(TAB_KEY); }catch(_){ return null; } })();
    const start = (hash === 'resume' || hash === 'homelab') ? hash : (saved || 'resume');
    setActive(start);
  }

  tabs.forEach(btn => {
    btn.addEventListener('click', () => { setActive(btn.dataset.tab); btn.focus(); });
    btn.addEventListener('keydown', e => {
      const i = tabs.indexOf(btn);
      if (e.key === 'ArrowRight'){ e.preventDefault(); tabs[(i+1)%tabs.length].click(); }
      if (e.key === 'ArrowLeft'){ e.preventDefault(); tabs[(i-1+tabs.length)%tabs.length].click(); }
      if (e.key === 'Home'){ e.preventDefault(); tabs[0].click(); }
      if (e.key === 'End'){ e.preventDefault(); tabs[tabs.length-1].click(); }
      if (e.key === 'Enter' || e.key === ' '){ e.preventDefault(); btn.click(); }
    });
  });

  window.addEventListener('hashchange', () => {
    const h = location.hash.replace('#','');
    if (h === 'resume' || h === 'homelab') setActive(h);
  });

  // smooth-scroll for non-tab anchors (optional)
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (!id || id === '#resume' || id === '#homelab') return;
      const t = document.querySelector(id);
      if (t){ e.preventDefault(); t.scrollIntoView({behavior:'smooth', block:'start'}); }
    });
  });

  init();
})();
