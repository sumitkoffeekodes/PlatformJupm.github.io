'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "57382e61b58295b7488b4046c17ae7e9",
"index.html": "91b8cf539c3279e8738fb138d7fdd0ff",
"/": "91b8cf539c3279e8738fb138d7fdd0ff",
"main.dart.js": "db25026207a3da98bb58a9dbbc89fa9e",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "115b6b5c48824fe9516e1e5decc2b3de",
"assets/AssetManifest.json": "c477e5066d559440bf70f9626720e01e",
"assets/NOTICES": "ade5a6693a28f9ad06dc2fdac2e58376",
"assets/FontManifest.json": "20aeb6b1c5a407f33e3e73a28558fa98",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "c62927a9d6add82478c06d2a838345cb",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/ui/buttonBack.png": "55dbf7de1eab14f778836dcec5037656",
"assets/assets/images/ui/score_bg.png": "0aea4d90149662d8937ca3656a52faa5",
"assets/assets/images/ui/button_bg.png": "e59d146a642c2407e8e10cf7bb65685c",
"assets/assets/images/ui/rope.png": "930d927fbe170b71a7c51437b7599116",
"assets/assets/images/HappyCloud.png": "008b2a12a35fcce1bd33832c010ae8f7",
"assets/assets/images/platforms/BrokenLand.png": "b4d2bfb525e767c945ed91fa79bd0f18",
"assets/assets/images/platforms/platform.png": "ed0d667358b47b05bc148bfd38ec5fde",
"assets/assets/images/platforms/platform3.png": "bdaf16e8f3d53a8906835977a74f20b9",
"assets/assets/images/platforms/BrokenLand_right.png": "a37b6d6a9ab36118d4939f5b83bef78b",
"assets/assets/images/platforms/platform2.png": "031856ef6f5284430411c5adc7797b67",
"assets/assets/images/platforms/tree_bg.png": "85681811b8d296754fcb6cea8771e3f4",
"assets/assets/images/platforms/tiles_bg_1.png": "bdaf16e8f3d53a8906835977a74f20b9",
"assets/assets/images/platforms/tree.png": "1a51d8b36933b6a0c163eccca58cc901",
"assets/assets/images/platforms/BrokenLand_left.png": "c3a053509844dd91c4248e0daecdc742",
"assets/assets/images/platforms/home_platform.png": "ed0d667358b47b05bc148bfd38ec5fde",
"assets/assets/images/platforms/tiles_bg.png": "ac41962b25ce45aca9b464512a3831a7",
"assets/assets/images/game_logo.png": "4ef2317140d139284dce3d90ef225934",
"assets/assets/images/background.png": "80325732e9c9ba111e98ca3bb17a8e76",
"assets/assets/images/HearthEnemy1.png": "efd57e261c28ec89efea9d48d005501a",
"assets/assets/images/HearthEnemy2.png": "c3e5521597d368694c1dbbcbbe077ff0",
"assets/assets/images/items/Bullet.png": "2d53855ef84cf7601fa8d2e2ed4ee754",
"assets/assets/images/items/Jetpack_Big.png": "150cfd1e5f2af1108c765a2fdf845e8d",
"assets/assets/images/items/thunder.png": "68f39312903a257240db4dd606b9b718",
"assets/assets/images/items/Bubble_Big.png": "09122e58f77def301eb777d67292b494",
"assets/assets/images/items/gun.png": "272d5f9d5b6cf575c5a0bdb0f57858b3",
"assets/assets/images/items/JetFire1.png": "d13393a03afa99703c2b33d221bb832c",
"assets/assets/images/items/platform.png": "ed0d667358b47b05bc148bfd38ec5fde",
"assets/assets/images/items/JetFire2.png": "91163eec4c7239bf7dff8bdc49e3f0cf",
"assets/assets/images/items/Jetpack_Small.png": "595ff21dd626b0dc7b0a5ecad169240b",
"assets/assets/images/items/Spring.png": "18bd6fc216eea1fdf1a5d1e9af05b972",
"assets/assets/images/items/bullet_score.png": "b60dbd3063dd405675a4fc11b955a6a0",
"assets/assets/images/items/Bubble_Small.png": "cfba94c9a8e45ffac1231b33941bc8ad",
"assets/assets/images/items/thunder1.png": "8c630ea69653feab54ae6f51df0efd06",
"assets/assets/images/items/coin_score.png": "abb1ad2721c69ae70285c5c09ea88547",
"assets/assets/images/items/player.png": "b6bd783992e55218ad5ac3d05d3b1150",
"assets/assets/images/items/jump_player.png": "460c5f6c9766cd43d6b385ce1e633ee0",
"assets/assets/images/items/coins.png": "c7e61544ec0dc735e5be8a6ab4a8ad70",
"assets/assets/fonts/Baloo2-Bold.ttf": "77bbc88f0224c062cb5f69251352ef50",
"assets/assets/fonts/DaveysDoodleface.ttf": "944a2b6f684512b360f91e72d8812cbc",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
