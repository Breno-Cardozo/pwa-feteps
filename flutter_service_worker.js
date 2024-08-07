'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b0b4b49f2665a9a0e90b3c206938ed22",
"assets/AssetManifest.bin.json": "8e36fa44f7208237aae56d91bbcb26a4",
"assets/AssetManifest.json": "327375693bb6d76af1d168ad6fea0667",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "fc580c8a006d9bf5d0816e445ab16fd2",
"assets/lib/assets/alunos.png": "0e759e53b7b0869cea659578f16b3c9b",
"assets/lib/assets/banner1.png": "604c3bf06c309fd6d86ffd3abcbb463a",
"assets/lib/assets/banner2.png": "7147819e361c0a4a79ec63951d95b403",
"assets/lib/assets/banner3.png": "d71e02ed1ca740051849b2e605d6316b",
"assets/lib/assets/banner4.png": "c476a5186e56177d47059796cd219a79",
"assets/lib/assets/banner5.png": "3015f246022f97b0003e47b2010370ee",
"assets/lib/assets/bannermascote.png": "6c422f0baa28a61978fbd0441c01d057",
"assets/lib/assets/calendario.png": "59f9254d700a67bf699c8a9aeb6722bb",
"assets/lib/assets/curiosidade.png": "3cac22bac42bf3315935a9b841cce685",
"assets/lib/assets/dinheiro.png": "4edda5235351c0b40e95356e2655630a",
"assets/lib/assets/documentos.png": "8a4dc1397bec29e67301491dc8a71282",
"assets/lib/assets/equipe/anderson.png": "bc78407b56e1fdcfc580a08c12e637b7",
"assets/lib/assets/equipe/andrey.png": "4f9f5f3f67cefa2851baa2e377b68fcb",
"assets/lib/assets/equipe/breno.png": "78addfc61bea7e62b824674b19958775",
"assets/lib/assets/equipe/caetano.jpg": "8e8222e5a9090ef250ecdadca2b4fd8b",
"assets/lib/assets/equipe/carol.jpg": "f60307047870a6078deab885cc9f0108",
"assets/lib/assets/equipe/cintia.jpg": "a569207f63bd360561fd0adf7f4e139f",
"assets/lib/assets/equipe/gabriel.jpg": "0dcdbe204050e9ebc539c4429447e6a8",
"assets/lib/assets/equipe/Krebs.jpg": "3294f0f82259dee6d93bbe377d6caf64",
"assets/lib/assets/equipe/lele.jpg": "18e3903ead91badfe408dc78d6956461",
"assets/lib/assets/equipe/luana.jpg": "069307b61fb8ffd0d341a5b2e4c6879e",
"assets/lib/assets/equipe/rapha.jpg": "c56b6c30988b94ee76f65a22f56f1db2",
"assets/lib/assets/equipe/ribas.png": "c62280f7bccbe70245efcdaea3094608",
"assets/lib/assets/equipe/richard.jpg": "67adb9e2ed63468c9c27bce2fdb4abe8",
"assets/lib/assets/estudantes.png": "107a4ac28ebe3c7a6b003c49663623e1",
"assets/lib/assets/Fet.png": "a8a4dedf9b7cde2853fe668d66a0f7b9",
"assets/lib/assets/fundo.png": "9bdd1dd9ebeb0632676eb26bdf338629",
"assets/lib/assets/fundoSplash.png": "7c1febd0966f1d1e090893bd460ab68b",
"assets/lib/assets/github.png": "ec3a60c8c6539a07eb70b52f6737ea6e",
"assets/lib/assets/githubDark.png": "eda40eb04911ae63c13f466a5d13351f",
"assets/lib/assets/icone.png": "475c6c089e4166976ec31e23fc929e9b",
"assets/lib/assets/linkedin.png": "f08c524d147f46398cb54013ee7013ee",
"assets/lib/assets/logo.png": "811b06d71a469e1c926674bdb7169505",
"assets/lib/assets/logo2.png": "6452e9a3e266c45f7d99ca8341a74205",
"assets/lib/assets/logo3.png": "09081511059b75f471d8dec8cce78394",
"assets/lib/assets/Mapa.png": "957b1c0c590b98a7fa6b655a27f93517",
"assets/lib/assets/MapaFeira.png": "70124400ad4deadca8ce1e1dc453b00b",
"assets/lib/assets/ods/ods1.png": "df7bd4103384afdb9545d153b1dd2b75",
"assets/lib/assets/ods/ods10.png": "71a73bf57cdd4ba972eb85f1c5722919",
"assets/lib/assets/ods/ods11.png": "1254772e72c24fe8f639e4f948b84435",
"assets/lib/assets/ods/ods12.png": "3198ef7d3402602938f8a0a5bc8b8fe1",
"assets/lib/assets/ods/ods13.png": "8ffcbde1806420fb1dd6cc3a3b55f177",
"assets/lib/assets/ods/ods14.png": "452acd4d6ab4c6e638ef3ba169411d8e",
"assets/lib/assets/ods/ods15.png": "3ee94a8ef202df58e4d06e251c58151b",
"assets/lib/assets/ods/ods16.png": "3ee9d0dc92f4648a533308b9e1e5bd11",
"assets/lib/assets/ods/ods17.png": "5aa462707a2b45405a61bbd5edc41db2",
"assets/lib/assets/ods/ods2.png": "b489a40117fff5140a2981e13e3bd1bf",
"assets/lib/assets/ods/ods3.png": "7d4fdd56eb5c2766a53b361ae6317673",
"assets/lib/assets/ods/ods4.png": "1151968a42d29a32758c8979c4232edc",
"assets/lib/assets/ods/ods5.png": "9ff4f990da41553fa91f5b1cb8878e89",
"assets/lib/assets/ods/ods6.png": "71c074c001c19afa1a1c6ad0b4ac621c",
"assets/lib/assets/ods/ods7.png": "6b5f77668bdfa6cb0cdee69381bf726c",
"assets/lib/assets/ods/ods8.png": "3a836e6ba01553cceef0fa09c483ad47",
"assets/lib/assets/ods/ods9.png": "e407da2f84de73b4331ef07cc490b975",
"assets/lib/assets/Rectangle.png": "233d8d22c7363a43dbe24d61a939e16d",
"assets/lib/assets/senha.png": "d9462615521f756176889064340afba1",
"assets/lib/assets/Teps.png": "d3f5a743e59f910c190a8f8fefb73ef5",
"assets/lib/assets/user.png": "e87a5475c833a6a9fb2dc0bf46d4eacd",
"assets/lib/assets/user2.png": "a0c4ee77b193a26a994f7bec5f8fcdb0",
"assets/lib/assets/userDark.png": "63fcb3b280f2d6c0b6b5f3c02e7d3ba9",
"assets/NOTICES": "9865a3e87be34d57dc8f47749346af8e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "fd5128e2a2e01ec37da3030ad137379e",
"/": "fd5128e2a2e01ec37da3030ad137379e",
"main.dart.js": "13515e9a72679c5b93bcefd97bc37c44",
"manifest.json": "9638f4c13007bec9d5bf0c4f488a692a",
"version.json": "599e638a17ee8d95d5a4096f2074f727"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
