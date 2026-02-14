'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "ad7f6c39d5629b0e5efb9c43fbb54f4d",
".git/config": "e6b113f6fd1e56f7e54e1cc1ce96cd4c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "db3e8ad18eeb8d06c46a73a28c58a5b9",
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
".git/index": "6e24465aff5c291e623ebd230067760e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4b12fd18746142998d2cdbc610dd2d47",
".git/logs/refs/heads/main": "b71a9927ddaa1b083ae3e0654b88fe3f",
".git/logs/refs/remotes/origin/main": "e1f5bf1d1a002a82a9b85804753f6a0a",
".git/objects/05/e2ddf6f8487d8906cc415dea77df841f630637": "f93081faf7c2dd384048bf4c8f7c74fd",
".git/objects/08/275f57e12a9e2c63fee574a446742373cf07d7": "36041c3906f78d9cdb751a06e7625061",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/0a/c787262232a33fb75923c7040115c68d62f2f7": "37899610f5f2cf99999970399bc33321",
".git/objects/0f/2f1b6c568767175ba64c67bb702caf0d56bd92": "28cbf312c01a8cc871139b89e3543ab0",
".git/objects/10/002e6fa57f010c4d0c849bb49c84baa8be745c": "b411b110bb1957b6624a64a9054783cd",
".git/objects/12/2f73ae32a46c6678573ebb434b1febea56abd6": "c2638b1c60571810e1e5becc11815907",
".git/objects/15/406d3ab474671719eeacd55e99f92355b2e426": "8f94c439b7de83bbf096054698f6d16e",
".git/objects/15/6b66d142238b00065f71bff6f462fe1a5bbcc7": "8bc3236d0432feea9e8bd0a77bfe0708",
".git/objects/1b/9b9aeb29c42457e4e3778036a8893e6ee5b667": "1d7be5c89f9f62eee39e0817ff335df3",
".git/objects/1d/a647cff24958750b7c95bba68d7b89de1bd91d": "251f091bed257da3a4d28125617f1c1f",
".git/objects/23/42622e26b379c5eabf2382d7d100cb8b533b88": "31d9787a21e7c2b4f0b088c1fe6b7d3d",
".git/objects/23/975ce859154117abaaf4ece28fc1578abdcd21": "1c2bc668dbd6c73c15c1f68aee0c2fc0",
".git/objects/24/6cb50fbc466146604a8b55f3bb21f00b739b51": "e299106b73f0f75a7bd3e86b71c871a6",
".git/objects/27/b3a29844a39735bf9d19010c4e9a7b3fd460a1": "cbb402b5c6d338c37ec1364937c6e24c",
".git/objects/2c/47567c3f436f2d675df260f864fd27bdaaecfe": "8eb93bb63ed89c3801b4fdc8c4c27901",
".git/objects/2d/aaee5f0db292c6622054fe77492930d3eca9c5": "4f46f8e0d29c0ebd5366123e29ff90be",
".git/objects/31/e07f6df3cfc289589e4be06b258baa05abe402": "0e38383f8bc14e1db20f93e346725b0a",
".git/objects/34/2c09b456127e4913683c5da1123b42c63d8480": "da5bb7c950ddb15b14eea49e20c53a12",
".git/objects/35/b2e48086984667c8ef0a3e2e99b7290ad497e3": "0aef2882f18a04f6b76c0e6fcd0f00d2",
".git/objects/36/92fa80d291f4bd416453c2ddcbc424ee9bc54e": "ca497828016ea5c41b2e09094c7c258c",
".git/objects/38/ca7dd4c9c6b5972b7f1ca2caf6c679d7ad82c1": "78fc78e453b271dfe3f0d5a8f853cfd8",
".git/objects/39/b1b171367068258d370bfae22b10081582d171": "4023e71b0b67a5041d66b9e5c345bc58",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3c/90bbfeec885c04b61f90f9a58d8184da81f899": "6f1a4ede3bfdaad472aac9f5c33d4bdd",
".git/objects/43/a7bce2a1c379b03cbcbcfb589d40e82fb8c3c3": "35d7988b619a9f0b8b9f643b5a98de7f",
".git/objects/44/90f3b1d592e4023756b42e52d5030144996a4f": "f195189820bce525939189570573446b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/145e2ef35cee272d085ac69747bbc7678b79da": "6848b625f51d56589a6c63a772186df5",
".git/objects/48/46265c01c55194d7e85e1ded5b2eabd206de28": "9c5547d5e3a5eab9fcdb3596bfddba70",
".git/objects/4a/b5f0094bd1596f4a89de5577c998b69fe0f91f": "51e582d288620cfdd8e088bfcaa7e3f8",
".git/objects/4a/e6032918e5f688f7113aaca6b190440fcd5cb6": "3943576e418ca0801d0aa9317b4a22ea",
".git/objects/4b/2cca623e8db3186ba392c1c32687a224a58562": "72551f3de8370078ca82880292922bae",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4e/a87b448aad701a1b57b30ab0a3f45d50f76c87": "d6372db44c8beca9a5e131acc629a263",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/54/a1da9614ac6d8edd77d84c4dce48646746a924": "8ee85ff64169e31e27752614b9986d6b",
".git/objects/55/6a4dc494022694f3cb2ce095d95b0e60eada80": "313e5e07795bcc20b1f549e05c2b69e9",
".git/objects/57/04aeeb43813fb1e063ed0476a1cd30f8b34e06": "8fbf9fca715b514e531620ffa41cc9e3",
".git/objects/5a/b457e683104c72ec970bad932a00b22b8a25ac": "3b2e277d1a916d429b92670730261a24",
".git/objects/5b/40aef9cc3e889044f775b5894632a973fedafb": "f7b60f894793ced0d5e544bda00cca1b",
".git/objects/5c/34c30a9f193498a6d57b6ab96181b267018680": "2882cd0ed12b2bab6f540704a74f63f0",
".git/objects/60/ab6a2231d1a1419a8b179606fbba26b033f777": "32365518b24671ef9e4734961f7ee72a",
".git/objects/62/6d6c594e1ba74fda8ab007e0e907b08cb53a35": "159ba2a0c09f5aa6fb4f311df5ca6bce",
".git/objects/62/70014f904982ef7af745bbc20b9202bf48176b": "caa1c48d8421746b00cdb9456995a4ea",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/69/f80a29e82a630cf0beb56506ba3d37c9d6468b": "2b2c448b6e9a0578ed9b6e40c75de7e1",
".git/objects/6b/7b40d368c43a8c9077a6d89f1a2d2a59e0f26c": "ff2da62dac3bd4af6caaf2df2778f7dc",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6b/9f56c55d83c65523c5a81d1ce05073fda2c1a1": "4e2a03de7584657d4108dd49bd4f1dd4",
".git/objects/6e/7e8335384fe3ab010a8dbf0b2c5d44968ae726": "1f6f05016c3352e399eec71cff429d0b",
".git/objects/6e/ac38c36044ac25d61f014541d4c8e590cd4f6b": "9536d57cfcf333e5f8cfcb79c4b32785",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/74/2144a07ab3b0d60511bdfe63dfbccbb02ba7c7": "a23e0fc41bcbadb84a7250e5154ffbbf",
".git/objects/75/86b16050f4e9fcfbadae5da493ddcd5a48127f": "e829762b8378fc0f13dd1caec106aa69",
".git/objects/75/a990b83e2691c5d8e4d0caf4aa7aa17c6c3859": "56572431abf69e8ad3fddbdc679dfac0",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/80/524c33aec213b851219703ff34755524b16473": "b3e5fcafa5633f4f40ebbe68ebbdda95",
".git/objects/81/d991273bb7721c40c1c5ea38776b7da3fcf16c": "325f3402a0d239c8281a52ab813d15cb",
".git/objects/82/f1ee4ab60566cc821a32c1468f878a082b65a1": "f6bffaabb537392db3d0218867627347",
".git/objects/83/7eece77e58f68a62a8c7b9d38ad5633e00b716": "e1719539aae7eb95f173f8bc5bf23019",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/749bf97a81933754e2d434aeb1e0733c9a5155": "3adba5d028519531f3407027dac774e9",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/8e/3075d512f943d8f6979e82eec943fb02e12469": "7e3fc49471bf2bb1d95ad7409cee38e3",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/94/b3fbfe197c3938379f88f7e622e2f21a7f7578": "440800b647c022ada96f00ff3ebf4c52",
".git/objects/98/bae9415b8b025a81595817b36c76c4a0ec0208": "4d96a7daf4b1a9d0135c769dd7b8ffc0",
".git/objects/99/872aac42a6ca8845a2043739bc7707b3d70196": "30fa116e2a99f9bc548e10fd5184edfe",
".git/objects/9c/393ec72bfc2886d85725dc40903fa016167f96": "98a58bd39e8bb5b9fc5541675cea9d92",
".git/objects/9f/2fc276df5718ee5e0841589ad124e3140bba9c": "e02bb44043201b5fb9a3324caf5b8cf6",
".git/objects/a1/0cb9789b7101de9abfcebf87b3269098c0cc13": "9028ea7b1e9d6238ee39019d14b79df9",
".git/objects/a2/396c4681ea00ea6cf4ab7e12b0942b76b0031a": "1bb13fd74f0b80a80edda58dd2017f79",
".git/objects/a2/6b47d310e4eea2aac8831ec63c3edc541837e5": "05e84b4dbc1025b567e1d532c74bf043",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/a9/2cbdc376fee4855821535a1877672012795823": "11b0ef36117deaab786c0a007404249a",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/b2/39705a8aac2cbedaa16e2d015636b43b6aa4a6": "d45d9412e140ad525664892b11172915",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/c2/132de7b790310726fa75be247e7ddd16e553a6": "9f625c6c341c98bdf9927f290f0b8b01",
".git/objects/c5/fe5e4b6e22240f18e736f8c892187af92e670f": "50f70628abc01b363bcb687ceb1f68d8",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/c8/ab16d0aba409938767dcb3a3f6670127365ece": "4b3d11df1896d11ed43bee64d39d56b1",
".git/objects/ca/afb0c01e19ae71b5a541c487d8554cdc56ce73": "2e39e44fa38ecb1646db68f5dc45b985",
".git/objects/cc/8eb68b84269d9df5a9188a961d4db2580f005a": "1b139de9727f67cfed883d2b5b4fa67b",
".git/objects/ce/581651fad9cec58c5d4b5d0107d397713bf2fb": "b6db69300cf4840ef831a638593c2192",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/9bc8aff686daa0cad3b1ac89747bc5fdddebf8": "30f0937b23e194f6e4ecd89b0438c6f9",
".git/objects/d4/d5f3b706b46be85d42bfdb06308406b8e2f92f": "a6df5b394c94b44f8584972b5b5c74ee",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/742812a6e704ce54cb60e731cd25517bd90aa1": "9e3488d3288a4e6c40b656b3b86092ff",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/de/d3d78f11c249aecd8e2d406122983f64b93ea1": "4a1ab20017ffac878824451e68193796",
".git/objects/e5/c9a629e6ea4566ea7b12049ebbdd67681db7ca": "a4c9d47e2977d667a12a782749a2c758",
".git/objects/e6/b90684f82f278cb158c226881b49caade1660b": "5e2896f8639407ecdf17aef7ec105beb",
".git/objects/e8/0f5cf2467c919143a037d813e076f0c18a6892": "6c3bacd685a8746844ba4e9ef94ade64",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ea/643111ded70129d5b77548c239be8e3f9eb084": "06cff0d7135ac162a9ec65c040ae2ed9",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/0b2f494db121a5312e819bfe74416c35870303": "9d81965ab52c4259358a4203a84a4c2e",
".git/objects/f2/0b9a18bc25f3cb5d05a5d56b26adcd1dca900a": "7a73d23d12e82eb2ed5a20d0df5bfa3e",
".git/objects/f2/c9e97c91d0ca32002d6eba53cf1981031047bb": "05d147ca28fabf58f251c18d62f64056",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f5/10ec0860fe5d0b2c09b908e45215c91ad76873": "6dccd333dad1879e839a9b03c2822f17",
".git/objects/f5/3fb9ebd9de84368e5f837f41d1fcaa0346982f": "0aedd478aad3dba0b1356d2c72b52175",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/f8/aa6d7e1b0f2358eb58725e9566368aa832c9ac": "e57164384ebc8afad3bcaf1b376520ef",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/fe/1e854e02cdf353d13285f17c212f6dad41660a": "6b2bf39e67edb2eccbf6483954dd4c3a",
".git/objects/pack/pack-e0ac75d299bb6ec4d344c96d6f776db11f5cd5da.idx": "7bd7156acd687ff3e94c8bba26beef03",
".git/objects/pack/pack-e0ac75d299bb6ec4d344c96d6f776db11f5cd5da.pack": "c03a0cb1c6ac44035aa9e366b0cf2ecb",
".git/objects/pack/pack-e0ac75d299bb6ec4d344c96d6f776db11f5cd5da.rev": "b0e2f3db140e1a86c8ecd456421a5c82",
".git/ORIG_HEAD": "6873d91a349709b1e22b6e996c21b385",
".git/refs/heads/main": "6873d91a349709b1e22b6e996c21b385",
".git/refs/remotes/origin/main": "88836427da858d62126a854c8f9e57a6",
".github/workflows/static.yml": "7b30ac9604a8f2495b94fe5be3292699",
"assets/AssetManifest.bin": "6b5b28d71c8b0b5de322a93800c2bef6",
"assets/AssetManifest.bin.json": "8ec8f7d41fda14d8ae1bec58167c5bfc",
"assets/assets/fredhead.png": "9ddc1f6ae9c548ca88987444513be6e4",
"assets/assets/mamafred.jpeg": "2c2766389d032174bceffc7449a7b9ad",
"assets/assets/mamafred2.jpeg": "eb3289af6e0afe8aba33404ea99a0c40",
"assets/assets/mamafred3.jpeg": "a4d4d2a0bc5d6da3f12c17f803e4c40c",
"assets/assets/mamahead.png": "089d4737d10629f1d11fd3d31f21e2ed",
"assets/assets/mamahead3.png": "6493d208380d7914856b5d7bc2a349fa",
"assets/assets/mamahead4.png": "0e9ab067839ee14ec8e5074af4aaab4e",
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
"flutter_bootstrap.js": "b0a7d30952d67475479682690605b9e9",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1fcfcdf59b4374732917d814e18742e0",
"/": "1fcfcdf59b4374732917d814e18742e0",
"main.dart.js": "73680b33a9f842cad93ca84a05e2c1d5",
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
