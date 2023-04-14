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
    "revision": "146774e47fd7008ea548e172facecbb7"
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
    "url": "assets/js/12.d5946778.js",
    "revision": "8f5295a943bc9282ba34d7885db10bed"
  },
  {
    "url": "assets/js/13.9c007ea8.js",
    "revision": "fb0f7ea5688e3ef478ec4948a14f5dc2"
  },
  {
    "url": "assets/js/14.4760726a.js",
    "revision": "6b11e02d4f96a166b04dac3809201f1a"
  },
  {
    "url": "assets/js/15.740d29e0.js",
    "revision": "ed1178aae3893d0a9f56c232548be0df"
  },
  {
    "url": "assets/js/16.153b0256.js",
    "revision": "a38a957fae1cba7a30e2807f5ffc4aa2"
  },
  {
    "url": "assets/js/17.66972c9b.js",
    "revision": "206181d85b857baea779be315406a7b6"
  },
  {
    "url": "assets/js/18.5afc78c2.js",
    "revision": "88ff354f0941ee76427a488c0f288c90"
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
    "url": "assets/js/app.b2335f49.js",
    "revision": "3484e951a17426c33d4fcce406ccf606"
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
    "revision": "6a67b2df0b312e453a088314a5abf38c"
  },
  {
    "url": "categories/java/index.html",
    "revision": "c1fd1bdfc4dda88da452d9825b14de2d"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "bf8eb118159d4e7d92ccb9bd3957909d"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "90cc85c1f630bfd5cbbefabc152a1ba0"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "883ed0e4cfac0b64eab636ec4ff404f6"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "7092cf47d51656251e7016e7d1166999"
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
    "revision": "67bb7917e2a57d5f28d344e8a2e835f6"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "1982133baaf14db85479ba3d8e178bb0"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "861125729a1c46983fa5a1d73597f436"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "66c2284b5615decd833943e49aec7f25"
  },
  {
    "url": "tags/js/index.html",
    "revision": "edc8585d854db9e2ac10b62e5cf7852f"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "e53dbec2da1bd0875a0ba15abed851a8"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "134a15bd58ec714fd30757627ee22eff"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "de8e4670b8d5c304a479671a7a2204cc"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "9452d5960a7ce97cb9a99cf6303ca525"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "c70517992f4543c2ccc56b97998995c5"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "9bc759ae5df342870527f83a05fc9f89"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "e94e3e1f4c18688ce20c686476313834"
  },
  {
    "url": "timeline/index.html",
    "revision": "8c9742ea9795861024a98f1453d92aa4"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "bf6985502a621aaed2dee6c51ec57c5d"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "9c23d91f56f0b366a89a83566812d282"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "b5ddb13c9afc6f24bbe2ee7902c02e00"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "3afab6011c144ee805f33ee4d699d272"
  },
  {
    "url": "生活分享/life.html",
    "revision": "51aa63820430750de88378055740a360"
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
