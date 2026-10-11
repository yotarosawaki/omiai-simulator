// ===== アクセス解析（Google アナリティクス 4）=====
// 公開サイト（下の HOSTS）以外では、何も送らない。
// 送るのは、ページの表示と、track() で決めた3つの操作（開始・最後まで完了・途中でやめる）だけ。
// 名前などの個人情報は扱わない。
'use strict';
(function () {
  var GA_ID = 'G-PXVLNR5XBK';
  var HOSTS = ['omiai.cf-m.jp'];

  window.track = function () { };
  if (!GA_ID || HOSTS.indexOf(location.hostname) < 0) return;

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  var s = document.createElement('script');
  s.async = true; s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
  document.head.appendChild(s);
  gtag('js', new Date());
  gtag('config', GA_ID);

  window.track = function (name, params) {
    try { gtag('event', name, Object.assign({ transport_type: 'beacon' }, params || {})); } catch (e) { }
  };

  // 「アクセス解析を使っています」の一文は、計測が有効なときだけ表示する
  function showNotes() { document.querySelectorAll('[data-analytics-note]').forEach(function (el) { el.hidden = false; }); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', showNotes); else showNotes();
})();
