function r(o) {
  window.cancelAnimationFrame(o.__prlxRequestAnimationFrameId), delete o.__prlxRequestAnimationFrameId;
}
function n(o, { modifiers: e = {}, value: i = {} }) {
  const t = {
    isParallaxOnMobile: e.mobile || !1,
    background: e.background || !1,
    startParallaxFromBottom: i.fromBottom || !1,
    justAddParallaxValue: i.custom || !1,
    reverse: i.reverse || !1,
    speed: i.speed || 0.15,
    preserveInitialPosition: i.preserveInitialPosition === !1 ? i.preserveInitialPosition : !0,
    direction: i.direction || "y",
    limit: i.limit || null,
    mobileMaxWidth: i.mobileMaxWidth || 768,
    isDisabled: i.disabled || !1
  };
  t.background && (t.speed = i.speed || 0.02, t.limit = {
    min: 0,
    max: 100
  }), t.reverse && (t.speed = -t.speed), t.isDisabled ? r(o) : (!(window.innerWidth < t.mobileMaxWidth) || t.isParallaxOnMobile) && l(o, t);
}
function l(o, e) {
  const i = e.startParallaxFromBottom ? window.innerHeight : window.innerHeight / 2;
  let a = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) - p(o) + i;
  e.preserveInitialPosition && a < 0 && (a = 0), c(o) && s(o, a, e), o.__prlxRequestAnimationFrameId = window.requestAnimationFrame(l.bind(null, o, e));
}
function s(o, e, i) {
  let t = e * i.speed;
  i.limit && (t > i.limit.max && (t = i.limit.max), t < i.limit.min && (t = i.limit.min));
  let a;
  i.background ? a = d : i.justAddParallaxValue ? a = m : a = f, a(o, t, i.direction);
}
function d(o, e, i) {
  o.style.transition = "background-position 0.1s ease-out", i === "y" ? o.style.backgroundPosition = `50% ${e}%` : o.style.backgroundPosition = `${e}% 50%`;
}
function f(o, e, i) {
  o.style.transition = "transform 0.1s ease-out", o.style.transform = `translate${i.toUpperCase()}(${Math.round(e)}px)`;
}
function m(o, e) {
  o.style.setProperty("--parallax-value", e);
}
const c = (o, { top: e, height: i } = o.getBoundingClientRect()) => e <= innerHeight && e + i > 0, p = (o) => {
  let e = 0;
  do
    e += o.offsetTop || 0, o = o.offsetParent;
  while (o);
  return e;
}, x = {
  install(o, e) {
    o.directive("prlx", {
      created: (i, t) => {
        console.log(e), n(i, t);
      },
      updated: (i, t) => {
        n(i, t);
      },
      unmounted: (i) => {
        r(i);
      }
    });
  }
};
export {
  x as VuePrlx
};
