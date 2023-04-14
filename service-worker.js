/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "4899eb560643d849c532f26cb07e1e2f"
  },
  {
    "url": "assets/css/0.styles.bfd62ff8.css",
    "revision": "ae2091e16a740727342387df46a4b4d6"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.ffdfd666.js",
    "revision": "63ee03f03d39c47d65ac67485a27a829"
  },
  {
    "url": "assets/js/10.0f1a6214.js",
    "revision": "aed2ce279cb8069139b9ce0b4c0d8761"
  },
  {
    "url": "assets/js/11.1dcef5e3.js",
    "revision": "b44c80b1e90dd1fea3953864833ff464"
  },
  {
    "url": "assets/js/12.6edf7f3f.js",
    "revision": "4f4e7f7a92bfb7ae20c15956772e8771"
  },
  {
    "url": "assets/js/13.4a3c5608.js",
    "revision": "8cb4d7fab0a33a6c8253dae1cc7522ae"
  },
  {
    "url": "assets/js/14.4760726a.js",
    "revision": "6b11e02d4f96a166b04dac3809201f1a"
  },
  {
    "url": "assets/js/15.d618cf92.js",
    "revision": "a2d0f51575afa3dcaa017af980cb1114"
  },
  {
    "url": "assets/js/16.dc7c3db8.js",
    "revision": "7bb0e61bd61fb18e74d0c8023b8349b4"
  },
  {
    "url": "assets/js/17.287fa90a.js",
    "revision": "6bfe9f510eef6ee814bac18322a20aa7"
  },
  {
    "url": "assets/js/18.5dd2ba73.js",
    "revision": "4e7c6eed2cd1035eb0452c6068c17d61"
  },
  {
    "url": "assets/js/4.1d137dd5.js",
    "revision": "e10459d3809dba98c1bba49ef9ec64c3"
  },
  {
    "url": "assets/js/5.03304066.js",
    "revision": "7347dfdedba2d017c568c7b51150269e"
  },
  {
    "url": "assets/js/6.3b839563.js",
    "revision": "6663f4417c923daea0fe08aad64d7c09"
  },
  {
    "url": "assets/js/7.6503cb7d.js",
    "revision": "fe02ddd8bfbd811354a0d6b7f3f2a35d"
  },
  {
    "url": "assets/js/8.fc5b7506.js",
    "revision": "868cb4ce0a0a9291b4a5dade91da3cf6"
  },
  {
    "url": "assets/js/9.d898caf8.js",
    "revision": "c6abf0f2268fd16ebac5d1a16ddc286e"
  },
  {
    "url": "assets/js/app.f65205cc.js",
    "revision": "2c519aacf5e39fb882dbbb57502d1bd9"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.fe7c321e.js",
    "revision": "a64ebb2f4c1ee386f2eed5d866fffdab"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "1127af3b279db39deaa320f1d4347427"
  },
  {
    "url": "categories/java/index.html",
    "revision": "e0e6678fda5597cd4b9a85ed8df1bd21"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "ce7d6a121521177e2bc5c597706d04c4"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "6a675c4d48c7a5560b2bc34bbed0a21b"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "df22ef7b0900e258da211e0c1821cd58"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "678f3fae4c14ec15ac79e164bed1f0d2"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "f84a030c9e6155bca6f86aafca0253d8"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "4f602df59b313218467db11248e9e67f"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "1f776e0de5c6a6b1ade4090ba0df07ab"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "fe4edc5bf2e08c614f20744dcfb22312"
  },
  {
    "url": "tags/js/index.html",
    "revision": "187b96583ed1c51a16770b8272516f3b"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "d06b364a936ecac6ecca36d484522664"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "5cc6f3a0bcc59642a68d70a8cad43e2e"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "91291298652f1ea5f16691dffba5e2bb"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "029db6d8af3f417bf152703071cf1abb"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "12a6bf06b81997b460fa068ab0bf5e09"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "86bc46a28f116a69b9577c0d899c724a"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "cb6afd9f0ee928ff0ff7e3196eb2ae00"
  },
  {
    "url": "timeline/index.html",
    "revision": "020c1c6e6647c8f30e2008944790e831"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "d4aa492ec8c4f11b7ce855a77e134573"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "4c03c6757f73bfbfc8833215c5cf9478"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "c02feac848cd359f1fd11b1f7398b51e"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "2275d568cc576c196c9b4576fdbec468"
  },
  {
    "url": "生活分享/life.html",
    "revision": "1e0d5b0d290fc4f5b37ddc13bcab6a02"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
