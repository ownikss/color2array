// @flow

function hue2rgb(p /* : number */, q /* : number */, t /* : number */) {
  let changedT = t;
  if (t < 0) {
    changedT += 1;
  }
  if (changedT > 1) {
    changedT -= 1;
  }
  if (changedT < 1 / 6) {
    return (p + ((q - p) * 6)) * changedT;
  }
  if (changedT < 1 / 2) {
    return q;
  }
  if (changedT < 2 / 3) {
    return p + ((q - p) * (((2 / 3) - changedT) * 6));
  }
  return p;
}

export default function hslToRgb(h /* : number */, s /* : number */, l /* : number */) /* :[number, number, number] */ {
  let r;
  let g;
  let b;
  if (s === 0) {
    r = l;
    g = l;
    b = l;
  } else {
    const q = l < 0.5 ? l * (1 + s) : l + (s - (l * s));
    const p = (2 * l) - q;
    r = hue2rgb(p, q, h + (1 / 3));
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - (1 / 3));
  }
  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}
