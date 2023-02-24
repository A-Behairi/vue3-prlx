function r(i) {
  window.cancelAnimationFrame(i.__prlxRequestAnimationFrameId), delete i.__prlxRequestAnimationFrameId;
}
function n(i, { modifiers: e = {}, value: o = {} }) {
  const t = {
    isParallaxOnMobile: e.mobile || !1,
    background: e.background || !1,
    startParallaxFromBottom: o.fromBottom || !1,
    justAddParallaxValue: o.custom || !1,
    reverse: o.reverse || !1,
    speed: o.speed || 0.15,
    preserveInitialPosition: o.preserveInitialPosition === !1 ? o.preserveInitialPosition : !0,
    direction: o.direction || "y",
    limit: o.limit || null,
    mobileMaxWidth: o.mobileMaxWidth || 768,
    isDisabled: o.disabled || !1
  };
  t.background && (t.speed = o.speed || 0.02, t.limit = {
    min: 0,
    max: 100
  }), t.reverse && (t.speed = -t.speed), t.isDisabled ? r(i) : (!(window.innerWidth < t.mobileMaxWidth) || t.isParallaxOnMobile) && l(i, t);
}
function l(i, e) {
  const o = e.startParallaxFromBottom ? window.innerHeight : window.innerHeight / 2;
  let a = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) - p(i) + o;
  e.preserveInitialPosition && a < 0 && (a = 0), c(i) && s(i, a, e), i.__prlxRequestAnimationFrameId = window.requestAnimationFrame(l.bind(null, i, e));
}
function s(i, e, o) {
  let t = e * o.speed;
  o.limit && (t > o.limit.max && (t = o.limit.max), t < o.limit.min && (t = o.limit.min));
  let a;
  o.background ? a = d : o.justAddParallaxValue ? a = m : a = f, a(i, t, o.direction);
}
function d(i, e, o) {
  i.style.transition = "background-position 0.1s ease-out", o === "y" ? i.style.backgroundPosition = `50% ${e}%` : i.style.backgroundPosition = `${e}% 50%`;
}
function f(i, e, o) {
  i.style.transition = "transform 0.1s ease-out", i.style.transform = `translate${o.toUpperCase()}(${Math.round(e)}px)`;
}
function m(i, e) {
  i.style.setProperty("--parallax-value", e);
}
const c = (i, { top: e, height: o } = i.getBoundingClientRect()) => e <= innerHeight && e + o > 0, p = (i) => {
  let e = 0;
  do
    e += i.offsetTop || 0, i = i.offsetParent;
  while (i);
  return e;
}, u = {
  created: (i, e) => {
    n(i, e);
  },
  updated: (i, e) => {
    n(i, e);
  },
  unmounted: (i) => {
    r(i);
  }
}, b = {
  install(i, e) {
    i.directive("prlx", u);
  }
};
export {
  b as VuePrlx,
  u as vPrlx
};
