'use client';
import { useEffect } from 'react';

export default function LandingScripts() {
  useEffect(() => {

    /* SCROLL PROGRESS + NAV */
    window.addEventListener('scroll', () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const prog = document.getElementById('prog');
      const nav = document.getElementById('nav');
      if (prog) prog.style.width = (window.scrollY / h * 100) + '%';
      if (nav) nav.classList.toggle('solid', window.scrollY > 40);
    }, { passive: true });

    /* MOBILE NAV */
    (window as any).toggleMob = function () {
      const ham = document.getElementById('ham');
      const mobNav = document.getElementById('mobNav');
      if (ham) ham.classList.toggle('open');
      if (mobNav) mobNav.classList.toggle('open');
    };

    /* REVEAL OBSERVER */
    const ro = new IntersectionObserver(entries => {
      entries.forEach(el => { if (el.isIntersecting) el.target.classList.add('in'); });
    }, { threshold: 0.10, rootMargin: '0px 0px -36px 0px' });
    document.querySelectorAll('.rev,.rev-r').forEach(el => ro.observe(el));

    /* PILLAR CARD STAGGERED ENTRANCE */
    const pillarObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const cards = e.target.querySelectorAll<HTMLElement>('.pillar-float');
          cards.forEach((card, i) => {
            setTimeout(() => {
              card.style.animation = 'floatUp 0.55s cubic-bezier(.22,.68,0,1.1) both';
              card.style.opacity = '1';
            }, i * 90);
          });
          pillarObs.disconnect();
        }
      });
    }, { threshold: 0.08 });
    const pgEl = document.querySelector('.pg');
    if (pgEl) pillarObs.observe(pgEl);

    /* TYPEWRITER HEADLINE */
    (function () {
      const L1 = 'Stop guessing with AI';
      const L2 = 'Work smarter in F\u0026A';
      const e1 = document.getElementById('tw1');
      const e2 = document.getElementById('tw2');
      const c1 = document.getElementById('twc1');
      const c2 = document.getElementById('twc2');
      if (!e1 || !e2 || !c1 || !c2) return;
      let i = 0;
      const t1 = () => {
        if (i < L1.length) {
          e1.textContent += L1[i++];
          setTimeout(t1, 52 + Math.random() * 28);
        } else {
          (c1 as HTMLElement).style.display = 'none';
          (e2 as HTMLElement).style.opacity = '1';
          (c2 as HTMLElement).style.display = 'inline-block';
          let j = 0;
          const t2 = () => {
            if (j < L2.length) {
              e2.textContent += L2[j++];
              setTimeout(t2, 48 + Math.random() * 26);
            } else {
              setTimeout(() => { (c2 as HTMLElement).style.display = 'none'; }, 2400);
            }
          };
          setTimeout(t2, 60);
        }
      };
      setTimeout(t1, 300);
    })();

    /* PROOF STAT COUNTERS */
    let sr = false;
    const so = new IntersectionObserver(e => {
      if (e[0].isIntersecting && !sr) {
        sr = true;
        anim('ps1', 0, 98, 1400, '%', 200);
        anim('ps2', 0, 35, 1200, '%', 400);
        anim('ps3', 0, 82, 1300, '%', 600);
        so.disconnect();
      }
    }, { threshold: 0.2 });
    const pe = document.getElementById('ps1');
    if (pe) {
      const closest = pe.closest('.nc,.nc-teal');
      if (closest) so.observe(closest);
    }

    function anim(id: string, f: number, t: number, d: number, s: string, delay: number) {
      setTimeout(() => {
        const el = document.getElementById(id);
        if (!el) return;
        const t0 = performance.now();
        const step = (n: number) => {
          const p = Math.min((n - t0) / d, 1);
          const ease = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(f + (t - f) * ease) + s;
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }, delay);
    }

    /* WALKTHROUGH */
    let cs = 0;
    let wo = false;
    let wti: ReturnType<typeof setInterval>;

    const goS = (n: number) => {
      document.querySelectorAll('.wt-step').forEach((s, i) => {
        s.classList.remove('active', 'exit');
        if (i === n) s.classList.add('active');
        else if (i < n) s.classList.add('exit');
      });
      document.querySelectorAll('.wt-dn').forEach((d, i) => {
        d.classList.toggle('on', i === n);
      });
      document.querySelectorAll<HTMLElement>('[data-s]').forEach(it => {
        const a = parseInt(it.dataset.s ?? '0') === n;
        it.style.borderLeftColor = a ? '#2DD4BF' : 'rgba(255,255,255,.06)';
        const divs = it.querySelectorAll<HTMLElement>('div');
        if (divs[0]) divs[0].style.color = a ? '#2DD4BF' : 'var(--t4)';
        if (divs[1]) divs[1].style.color = a ? 'var(--t1)' : 'var(--t2)';
      });
      cs = n;
      if (n === 2 && !wo) {
        wo = true;
        typeEl('wout', '3 invoice variances above threshold. Classification: 2\u00d7 price discrepancy, 1\u00d7 GL coding error. Corrective memo generated. 1 item flagged for CFO approval.', 20);
      }
    };

    (window as any).goS = goS;
    (window as any).nextS = () => goS(Math.min(cs + 1, 2));
    (window as any).prevS = () => goS(Math.max(cs - 1, 0));

    wti = setInterval(() => goS((cs + 1) % 3), 5200);

    const wt = document.querySelector('.wt');
    const wtScreen = document.querySelector('.wt-screen');
    if (wt) {
      wt.addEventListener('mouseenter', () => clearInterval(wti));
      wt.addEventListener('mouseleave', () => {
        wti = setInterval(() => goS((cs + 1) % 3), 5200);
      });
    }
    let tsx = 0;
    if (wtScreen) {
      wtScreen.addEventListener('touchstart', (e: Event) => {
        tsx = (e as TouchEvent).touches[0].clientX;
      }, { passive: true });
      wtScreen.addEventListener('touchend', (e: Event) => {
        const dx = (e as TouchEvent).changedTouches[0].clientX - tsx;
        if (Math.abs(dx) > 44) { dx < 0 ? (window as any).nextS() : (window as any).prevS(); }
      }, { passive: true });
    }

    const typeEl = (id: string, txt: string, spd: number) => {
      const el = document.getElementById(id);
      if (!el) return;
      el.textContent = '';
      let i = 0;
      const iv = setInterval(() => {
        el.textContent += txt[i++];
        if (i >= txt.length) clearInterval(iv);
      }, spd);
    };

    /* COPY */
    (window as any).doCopy = () => {
      const btn = document.getElementById('cb');
      if (!btn) return;
      if (navigator.clipboard) {
        navigator.clipboard.writeText(
          'BANK RECONCILIATION VARIANCE ANALYSIS\n\nYou are a senior finance professional conducting month-end bank reconciliation review.\n\n1. VARIANCE IDENTIFICATION\n   \u2014 Unreconciled items above materiality threshold\n   \u2014 Classify: timing / error / missing entry / unknown\n\n2. RISK ASSESSMENT\n   \u2014 Flag items outstanding > 30 days\n   \u2014 Patterns suggesting systematic error\n\n3. CORRECTIVE ACTIONS\n   \u2014 Journal entry recommendations with account codes\n   \u2014 Items requiring controller sign-off\n\nPaste your reconciliation data below:'
        );
      }
      btn.textContent = 'Copied!';
      btn.classList.add('ok');
      setTimeout(() => { btn.textContent = 'Copy for Claude'; btn.classList.remove('ok'); }, 2000);
    };

    /* TOUCH RIPPLE */
    document.addEventListener('click', (e: MouseEvent) => {
      const r = document.createElement('div');
      r.className = 'ripple';
      r.style.left = e.clientX + 'px';
      r.style.top = e.clientY + 'px';
      document.body.appendChild(r);
      setTimeout(() => r.remove(), 660);
    });

    /* SMOOTH ANCHORS */
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const href = (a as HTMLAnchorElement).getAttribute('href');
        if (!href) return;
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    /* TOUCH CARD STATES */
    document.querySelectorAll<HTMLElement>('.nc,.nc-teal').forEach(el => {
      el.addEventListener('touchstart', () => {
        el.style.transform = 'translateY(-1px)';
        el.style.transition = 'transform .15s';
      }, { passive: true });
      el.addEventListener('touchend', () => {
        el.style.transform = '';
        el.style.transition = 'transform .25s';
      }, { passive: true });
    });

  }, []);
  return null;
}
