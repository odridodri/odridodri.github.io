'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "567dbef9f17825966e8eb623e2092f67",
".git/config": "c17339009ca5ac9c53fe8d7e36174a64",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d1a66537bfaf61299c76a7591d2f1565",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "3e89635fa876d7a685d4016261bff255",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "18699a14fabc76994b7e861b5ce3d8d6",
".git/logs/refs/heads/main": "9cf3dd0e3abceed6690cea94e3e79505",
".git/logs/refs/remotes/origin/main": "39558cb8c366e4303576f37da0198801",
".git/objects/05/e2ddf6f8487d8906cc415dea77df841f630637": "f93081faf7c2dd384048bf4c8f7c74fd",
".git/objects/08/275f57e12a9e2c63fee574a446742373cf07d7": "36041c3906f78d9cdb751a06e7625061",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/0f/2f1b6c568767175ba64c67bb702caf0d56bd92": "28cbf312c01a8cc871139b89e3543ab0",
".git/objects/12/2f73ae32a46c6678573ebb434b1febea56abd6": "c2638b1c60571810e1e5becc11815907",
".git/objects/23/975ce859154117abaaf4ece28fc1578abdcd21": "1c2bc668dbd6c73c15c1f68aee0c2fc0",
".git/objects/35/b2e48086984667c8ef0a3e2e99b7290ad497e3": "0aef2882f18a04f6b76c0e6fcd0f00d2",
".git/objects/36/92fa80d291f4bd416453c2ddcbc424ee9bc54e": "ca497828016ea5c41b2e09094c7c258c",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/145e2ef35cee272d085ac69747bbc7678b79da": "6848b625f51d56589a6c63a772186df5",
".git/objects/48/46265c01c55194d7e85e1ded5b2eabd206de28": "9c5547d5e3a5eab9fcdb3596bfddba70",
".git/objects/4a/e6032918e5f688f7113aaca6b190440fcd5cb6": "3943576e418ca0801d0aa9317b4a22ea",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4e/a87b448aad701a1b57b30ab0a3f45d50f76c87": "d6372db44c8beca9a5e131acc629a263",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/54/a1da9614ac6d8edd77d84c4dce48646746a924": "8ee85ff64169e31e27752614b9986d6b",
".git/objects/55/6a4dc494022694f3cb2ce095d95b0e60eada80": "313e5e07795bcc20b1f549e05c2b69e9",
".git/objects/57/04aeeb43813fb1e063ed0476a1cd30f8b34e06": "8fbf9fca715b514e531620ffa41cc9e3",
".git/objects/5b/40aef9cc3e889044f775b5894632a973fedafb": "f7b60f894793ced0d5e544bda00cca1b",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/69/f80a29e82a630cf0beb56506ba3d37c9d6468b": "2b2c448b6e9a0578ed9b6e40c75de7e1",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6e/7e8335384fe3ab010a8dbf0b2c5d44968ae726": "1f6f05016c3352e399eec71cff429d0b",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/74/2144a07ab3b0d60511bdfe63dfbccbb02ba7c7": "a23e0fc41bcbadb84a7250e5154ffbbf",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/80/524c33aec213b851219703ff34755524b16473": "b3e5fcafa5633f4f40ebbe68ebbdda95",
".git/objects/83/7eece77e58f68a62a8c7b9d38ad5633e00b716": "e1719539aae7eb95f173f8bc5bf23019",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/8e/3075d512f943d8f6979e82eec943fb02e12469": "7e3fc49471bf2bb1d95ad7409cee38e3",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/94/b3fbfe197c3938379f88f7e622e2f21a7f7578": "440800b647c022ada96f00ff3ebf4c52",
".git/objects/98/bae9415b8b025a81595817b36c76c4a0ec0208": "4d96a7daf4b1a9d0135c769dd7b8ffc0",
".git/objects/99/872aac42a6ca8845a2043739bc7707b3d70196": "30fa116e2a99f9bc548e10fd5184edfe",
".git/objects/a2/396c4681ea00ea6cf4ab7e12b0942b76b0031a": "1bb13fd74f0b80a80edda58dd2017f79",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/a9/2cbdc376fee4855821535a1877672012795823": "11b0ef36117deaab786c0a007404249a",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/c2/132de7b790310726fa75be247e7ddd16e553a6": "9f625c6c341c98bdf9927f290f0b8b01",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/ce/581651fad9cec58c5d4b5d0107d397713bf2fb": "b6db69300cf4840ef831a638593c2192",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/9bc8aff686daa0cad3b1ac89747bc5fdddebf8": "30f0937b23e194f6e4ecd89b0438c6f9",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/de/d3d78f11c249aecd8e2d406122983f64b93ea1": "4a1ab20017ffac878824451e68193796",
".git/objects/e6/b90684f82f278cb158c226881b49caade1660b": "5e2896f8639407ecdf17aef7ec105beb",
".git/objects/e8/0f5cf2467c919143a037d813e076f0c18a6892": "6c3bacd685a8746844ba4e9ef94ade64",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ea/643111ded70129d5b77548c239be8e3f9eb084": "06cff0d7135ac162a9ec65c040ae2ed9",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f5/10ec0860fe5d0b2c09b908e45215c91ad76873": "6dccd333dad1879e839a9b03c2822f17",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/pack/pack-e0ac75d299bb6ec4d344c96d6f776db11f5cd5da.idx": "7bd7156acd687ff3e94c8bba26beef03",
".git/objects/pack/pack-e0ac75d299bb6ec4d344c96d6f776db11f5cd5da.pack": "c03a0cb1c6ac44035aa9e366b0cf2ecb",
".git/objects/pack/pack-e0ac75d299bb6ec4d344c96d6f776db11f5cd5da.rev": "b0e2f3db140e1a86c8ecd456421a5c82",
".git/ORIG_HEAD": "62355652b95e958e28a2e038b3b309bd",
".git/refs/heads/main": "62355652b95e958e28a2e038b3b309bd",
".git/refs/remotes/origin/main": "62355652b95e958e28a2e038b3b309bd",
"assets/AssetManifest.bin": "1ccc5ea3e60e89d38e67532df5c0fe16",
"assets/AssetManifest.bin.json": "8d9f95935b99ed05b155046bd0aa2fd4",
"assets/assets/odrihead1.png": "881cf520862878524a333f3a8fdb2d24",
"assets/assets/odrihead2.png": "97794c0dc6a9e75f4c4fbc42ea0895e1",
"assets/assets/odrihead3.png": "15c3000b18762706c27bc30c76dc445c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "99448ed6d2eb4dfada988cbfeb8ab68a",
"assets/NOTICES": "109080dba1d43b596d04efbdb45efa8e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "3727859ffdc6ca326a79209f85d18d58",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5953e0dec1b17a3a2ffdcce5ef263e9a",
"/": "5953e0dec1b17a3a2ffdcce5ef263e9a",
"main.dart.js": "17bacbe26c0ce7edd1cc227055fc546e",
"manifest.json": "a23fb817ead9584d2eab5b743ef19fbd",
"version.json": "cd05cc4203f388959d4561c45f7dcc38"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
