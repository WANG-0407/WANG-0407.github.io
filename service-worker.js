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
    "revision": "1068fd929c6e60fce6360f5caf246802"
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
    "url": "assets/js/12.e1bab619.js",
    "revision": "0c777fe88fdd1926f6457e03ff5126c9"
  },
  {
    "url": "assets/js/13.9c007ea8.js",
    "revision": "fb0f7ea5688e3ef478ec4948a14f5dc2"
  },
  {
    "url": "assets/js/14.5be2e989.js",
    "revision": "39142490c34d8b87eef5230e87d45f41"
  },
  {
    "url": "assets/js/15.e8669f07.js",
    "revision": "42e67a60f2cbd72426f24a5cbb374311"
  },
  {
    "url": "assets/js/16.312b5bea.js",
    "revision": "bc467476030fc056cc659098f66714de"
  },
  {
    "url": "assets/js/17.66972c9b.js",
    "revision": "206181d85b857baea779be315406a7b6"
  },
  {
    "url": "assets/js/18.f08bf664.js",
    "revision": "826306b4983d384ba3626387a7270c4c"
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
    "url": "assets/js/app.3c42b807.js",
    "revision": "1749f366a68792d96e9b3d3c34653cfe"
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
    "revision": "f75c59bcb53b311678bd7dd5dad22bf6"
  },
  {
    "url": "categories/java/index.html",
    "revision": "b15a5f6adc4bfe6e9ee7cd155c190976"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "63352b799918d2e8978b88bfb0a92444"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "9a39de9f24d9de306f0d946a4a3ba713"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "838018e4786ba90a119fac97ccbad099"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "026acd26d2edd6785398302838a869b7"
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
    "revision": "a94e376451b5e19368c79402282f830e"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "b5bd7371ccd8f6ead3408ad8b9e23eae"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "f5f26c74dce4282a8202e94b91fe78a5"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "028c5b56163882a0aa1b8db2fbf305dd"
  },
  {
    "url": "tags/js/index.html",
    "revision": "e8b020f1e5068c0b68e3ace55e8b48f8"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "599c0d9f2e8f68cf2e9e30e0b0d2be93"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "5fb020c8d270c02567c2230105ee5d66"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "6656badbb476ee9061323228dd4a2df1"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "748f70a231044286b14b11645bffc802"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "f7c8e59138b5167f52b1a2d984f545f2"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "3dd8f0bb548005d436017482ce50083a"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "29baeccc3af28c94df9bf19d6eb2de56"
  },
  {
    "url": "timeline/index.html",
    "revision": "ba2a8b1f5d4e70255ce0fc6dbc21eeb3"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "cd246fba33116d8390a88b406ccf5265"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "7f42e52d3fe75359e588f6e7f6fb7115"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "c0cbfb4e7d20785ca8b1bc3e78138b8c"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "ceeb4e45ca05a504ee58546dacd79d88"
  },
  {
    "url": "生活分享/life.html",
    "revision": "438547a230e6274900b2cca6e28b3a9a"
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
