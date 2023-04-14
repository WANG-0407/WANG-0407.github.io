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
    "revision": "d56ccf519ab2fdd9462eed94a4ec0dc6"
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
    "url": "assets/js/13.9b199988.js",
    "revision": "838eac0ebd4d1cc01a1c6762dda65bce"
  },
  {
    "url": "assets/js/14.179eaf8f.js",
    "revision": "7fdc669ad85130ad137a228209249b3d"
  },
  {
    "url": "assets/js/15.881f1c71.js",
    "revision": "139fb947484616d1abc8e1b44abbcbda"
  },
  {
    "url": "assets/js/16.ed258a1e.js",
    "revision": "3715c071cd9357e79000b7b5a054ef35"
  },
  {
    "url": "assets/js/17.287fa90a.js",
    "revision": "6bfe9f510eef6ee814bac18322a20aa7"
  },
  {
    "url": "assets/js/18.5ac236ed.js",
    "revision": "6ebf26e8a597d729a1f560a4bfc03fc9"
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
    "url": "assets/js/app.8fb414c6.js",
    "revision": "b276c80cf4fe5c8245735852fcb96609"
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
    "revision": "bcd311a3da44617a47fe587e8826de9b"
  },
  {
    "url": "categories/java/index.html",
    "revision": "a49f2a42bc59970b0769218530d0695e"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "71cddc93ef3e6e28e5e497ce14c9f59b"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "61fbaa5ec98a3189cb77755edd29e5b3"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "a49a041868eb2804a3b54ce819f24631"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "cc9e24669dcfd6b029b0f4a3bf85daea"
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
    "revision": "bc5f5d117f53c38e41de605a016fbd7f"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "efa0a7741666f5ed81c4ef07191b374a"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "da41bdbc28bbee2b3f5d54eeaeb60ac7"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "db3b05a8005cf7cb668ff48b16155633"
  },
  {
    "url": "tags/js/index.html",
    "revision": "097df8e27f251c3b32d2e2b9728d496f"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "98f9313ac1b56c78834f3754dca0da8b"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "04fd5bbba4793007c43123b96a1f949f"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "4c300792f39fed32a8a5988aedf65822"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "d5fe477ef0b5987b3296ebe36ec86ae3"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "f9231f1c512d614aa3fc50f9b72fd4b7"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "b923d68e9988f187af1b1152b22752e6"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "fb224a0843947ba70ee178c039323a99"
  },
  {
    "url": "timeline/index.html",
    "revision": "08e5e3d1a6a15b583f5dc557b902ea04"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "ada6b0f10397a23890151806d336fa1d"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "0a3696fd88c2622dc750dd56b7dee821"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "b7b462a78688ac3798af90b5c766f265"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "5e3906eba1ac122e9fce79dfcb8ebdb7"
  },
  {
    "url": "生活分享/life.html",
    "revision": "410ebbf2a70cadd550dd89e9a5d57bed"
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
