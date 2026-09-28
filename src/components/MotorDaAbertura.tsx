"use client";

import { useEffect } from "react";

/** Comprimento da abertura em vh, o valor padrão do design. */
const COMPRIMENTO_VH = 340;

/**
 * A abertura cinematográfica do design: hero, contexto e números se sobrepõem
 * conforme a rolagem. Roda a cada quadro e reescreve o estado inteiro, então
 * qualquer estilo perdido se corrige no quadro seguinte. Sem biblioteca.
 * Com movimento reduzido ou tela pequena, as três seções ficam empilhadas.
 */
export function MotorDaAbertura() {
  useEffect(() => {
    const set = (el: HTMLElement | null, prop: string, val: string) => {
      const estilo = el?.style as unknown as Record<string, string> | undefined;
      if (estilo && estilo[prop] !== val) estilo[prop] = val;
    };
    const clip = (el: HTMLElement | null, v: string) => {
      set(el, "clipPath", v);
      set(el, "webkitClipPath", v);
    };
    const q = (sel: string) => document.querySelector<HTMLElement>(sel);
    const cineOn = () =>
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
      window.matchMedia("(min-width: 720px) and (min-height: 420px)").matches;

    // O atributo muted sozinho nem sempre liga a propriedade, e sem ela o autoplay é bloqueado.
    let videoLigado: HTMLVideoElement | null = null;
    const tocar = (v: HTMLVideoElement) => {
      const r = v.play();
      if (r) r.catch(() => {});
    };
    const iniciarVideo = () => {
      const v = q("[data-hero-video]") as HTMLVideoElement | null;
      if (!v || videoLigado === v) return;
      videoLigado = v;
      v.muted = true;
      v.defaultMuted = true;
      v.playsInline = true;
      v.volume = 0;
      const vai = () => tocar(v);
      vai();
      v.addEventListener("canplay", vai);
      v.addEventListener("loadeddata", vai);
      for (const ev of ["pointerdown", "keydown", "scroll"]) {
        window.addEventListener(ev, vai, { once: true, passive: true });
      }
    };

    let pontos: { el: HTMLElement; depth: number; phase: number }[] | null = null;
    const particulas = (palco: HTMLElement) => {
      if (pontos && pontos.length && pontos[0].el.isConnected) return pontos;
      palco.querySelector("[data-dots]")?.remove();
      const wrap = document.createElement("div");
      wrap.setAttribute("data-dots", "");
      wrap.setAttribute("aria-hidden", "true");
      wrap.style.cssText = "position:absolute;inset:0;z-index:4;pointer-events:none;overflow:hidden;";
      palco.appendChild(wrap);
      pontos = [];
      for (let i = 0; i < 20; i++) {
        const depth = 0.3 + ((i * 37) % 70) / 100;
        const sz = (1.5 + depth * 3).toFixed(1);
        const d = document.createElement("div");
        const bg = i % 6 === 0 ? "var(--accent)" : "rgba(228,225,206," + (0.12 + depth * 0.3).toFixed(2) + ")";
        d.style.cssText = "position:absolute;left:" + ((i * 53) % 100) + "%;top:" + (25 + ((i * 41) % 80)) + "%;width:" + sz + "px;height:" + sz + "px;border-radius:50%;background:" + bg + ";";
        wrap.appendChild(d);
        pontos.push({ el: d, depth, phase: i * 0.7 });
      }
      return pontos;
    };

    let ligado: boolean | undefined;
    const quadro = () => {
      const wrap = q("[data-cine]");
      const stage = q("[data-cine-stage]");
      const s1 = q('[data-scene="1"]');
      const s2 = q('[data-scene="2"]');
      const s3 = q('[data-scene="3"]');
      if (!wrap || !stage || !s1 || !s2 || !s3) return;
      const counts = document.querySelectorAll<HTMLElement>("[data-count]");

      if (!cineOn()) {
        if (ligado !== false) {
          ligado = false;
          for (const el of [wrap, stage, s1, s2, s3]) {
            for (const p of ["height", "position", "top", "left", "width", "zIndex", "overflow", "perspective"] as const) el.style[p] = "";
          }
          stage.style.position = "sticky";
          wrap.style.position = "relative";
          clip(s2, "none");
          clip(s3, "none");
          for (const sel of ["[data-hero-panel]", "[data-hero-side]", "[data-wordmark]", "[data-glow]", "[data-m-card]", "[data-m-label]", "[data-m-title]", "[data-m-text]", "[data-n-inner]", "[data-n-label]", "[data-stat-row]"]) {
            document.querySelectorAll<HTMLElement>(sel).forEach((el) => {
              el.style.transform = "";
              el.style.opacity = "";
            });
          }
          clip(q("[data-wm-solid]"), "none");
          set(q("[data-dim1]"), "opacity", "0");
          set(q("[data-dim2]"), "opacity", "0");
          counts.forEach((el) => {
            el.textContent = el.getAttribute("data-to");
          });
          const dots = stage.querySelector("[data-dots]");
          if (dots) {
            dots.remove();
            pontos = null;
          }
        }
        iniciarVideo();
        const vOff = s1.querySelector<HTMLVideoElement>("[data-hero-video]");
        if (vOff && vOff.paused && vOff.readyState > 1) tocar(vOff);
        return;
      }
      iniciarVideo();
      ligado = true;

      set(wrap, "height", "calc(100svh + " + COMPRIMENTO_VH + "vh)");
      set(stage, "height", "100svh");
      set(stage, "overflow", "clip");
      set(stage, "perspective", "1500px");
      set(stage, "perspectiveOrigin", "52% 46%");
      [s1, s2, s3].forEach((s, i) => {
        set(s, "position", "absolute");
        set(s, "top", "0");
        set(s, "left", "0");
        set(s, "width", "100%");
        set(s, "height", "100%");
        set(s, "minHeight", "0");
        set(s, "zIndex", String(i + 1));
      });

      const rect = wrap.getBoundingClientRect();
      const span = Math.max(1, rect.height - window.innerHeight);
      const p = Math.max(0, Math.min(1, -rect.top / span));

      const seg = (a: number, b: number) => Math.max(0, Math.min(1, (p - a) / (b - a)));
      const eo = (t: number) => 1 - Math.pow(1 - t, 3);
      const ei = (t: number) => t * t;
      const wipe = (t: number) =>
        t <= 0 ? "polygon(160% 100%, 260% 0%, 200% 0%, 200% 100%)"
          : t >= 1 ? "none"
            : "polygon(" + (160 - t * 320) + "% 100%, " + (260 - t * 320) + "% 0%, 200% 0%, 200% 100%)";

      // A: hero
      const fill = seg(0.04, 0.3);
      clip(q("[data-wm-solid]"), fill >= 1 ? "none" : "inset(0 " + (100 - fill * 100).toFixed(2) + "% 0 0)");
      set(q("[data-glow]"), "transform", "translateY(" + (-p * 14).toFixed(2) + "vh)");
      const sideOut = seg(0.22, 0.34);
      document.querySelectorAll<HTMLElement>("[data-hero-side]").forEach((el, i) => {
        const t = Math.max(0, Math.min(1, (sideOut - i * 0.06) / (1 - i * 0.06)));
        set(el, "transform", "translateY(" + (-t * 38).toFixed(1) + "px)");
        set(el, "opacity", String((1 - ei(t)).toFixed(3)));
      });
      const wmUp = seg(0.3, 0.46);
      set(q("[data-wordmark]"), "transform", "translateY(" + (-wmUp * 7).toFixed(2) + "%)");

      // B: o hero recua e o cartão do contexto entra voando
      const b = seg(0.32, 0.56);
      set(q("[data-hero-panel]"), "transform", "perspective(1500px) translateZ(" + (-b * 320).toFixed(0) + "px) translateY(" + (-b * 5).toFixed(2) + "vh) rotateY(" + (-b * 7).toFixed(2) + "deg) rotateX(" + (b * 3).toFixed(2) + "deg) scale(" + (1 - b * 0.1).toFixed(3) + ")");
      set(q("[data-dim1]"), "opacity", (b * 0.62).toFixed(3));
      clip(s2, wipe(b));
      const bIn = eo(b);
      set(q("[data-m-card]"), "transform", "perspective(1500px) translate3d(" + ((1 - bIn) * 9).toFixed(2) + "vw, " + ((1 - bIn) * 13).toFixed(2) + "vh, " + ((1 - bIn) * 420).toFixed(0) + "px) rotateY(" + ((1 - bIn) * 14).toFixed(2) + "deg) rotateX(" + (-(1 - bIn) * 6).toFixed(2) + "deg)");
      for (const [sel, at] of [["[data-m-label]", 0.4], ["[data-m-title]", 0.43], ["[data-m-text]", 0.48]] as const) {
        const t = eo(seg(at, at + 0.09));
        set(q(sel), "transform", "translateY(" + ((1 - t) * 30).toFixed(1) + "px)");
        set(q(sel), "opacity", t.toFixed(3));
      }

      // C: o contexto recua e chega a placa dos números
      const c = seg(0.62, 0.88);
      set(q("[data-m-card]"), "opacity", "1");
      if (c > 0) {
        set(q("[data-m-card]"), "transform", "perspective(1500px) translate3d(0, " + (-c * 6).toFixed(2) + "vh, " + (-c * 340).toFixed(0) + "px) rotateY(" + (-c * 9).toFixed(2) + "deg) rotateX(" + (c * 4).toFixed(2) + "deg)");
      }
      set(q("[data-dim2]"), "opacity", (c * 0.58).toFixed(3));
      clip(s3, wipe(c));
      const cIn = eo(c);
      set(q("[data-n-inner]"), "transform", "perspective(1500px) translate3d(" + ((1 - cIn) * 7).toFixed(2) + "vw, " + ((1 - cIn) * 13).toFixed(2) + "vh, " + ((1 - cIn) * 380).toFixed(0) + "px) rotateY(" + ((1 - cIn) * 12).toFixed(2) + "deg)");
      const nl = eo(seg(0.7, 0.78));
      set(q("[data-n-label]"), "transform", "translateY(" + ((1 - nl) * 16).toFixed(1) + "px)");
      set(q("[data-n-label]"), "opacity", nl.toFixed(3));

      document.querySelectorAll<HTMLElement>("[data-stat-row]").forEach((r, i) => {
        const t = eo(seg(0.72 + i * 0.06, 0.84 + i * 0.06));
        set(r, "transform", "perspective(1200px) translate3d(0, " + ((1 - t) * 60).toFixed(1) + "px, " + ((1 - t) * 140).toFixed(0) + "px) rotateX(" + (-(1 - t) * 14).toFixed(2) + "deg)");
        set(r, "opacity", t.toFixed(3));
        r.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
          const txt = String(Math.round(parseFloat(el.getAttribute("data-to") ?? "0") * t));
          if (el.textContent !== txt) el.textContent = txt;
        });
      });

      // poeira de profundidade
      const agora = performance.now() / 1000;
      particulas(stage).forEach(({ el, depth, phase }) => {
        const y = -(p * (140 + depth * 620)) + Math.sin(agora * 0.5 + phase) * 6;
        set(el, "transform", "translate3d(0," + y.toFixed(1) + "px,0)");
        set(el, "opacity", (0.25 + Math.sin(agora * 0.8 + phase) * 0.22 + 0.3).toFixed(3));
      });

      const video = s1.querySelector<HTMLVideoElement>("[data-hero-video]");
      if (video) {
        if (p > 0.6 && !video.paused) video.pause();
        else if (p <= 0.6 && video.paused && video.readyState > 1) tocar(video);
      }
    };

    let raf = 0;
    const laco = () => {
      quadro();
      raf = requestAnimationFrame(laco);
    };
    raf = requestAnimationFrame(laco);
    return () => cancelAnimationFrame(raf);
  }, []);

  return null;
}
