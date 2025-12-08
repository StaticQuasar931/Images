// Approx dates based on your mapping (you can tweak these if needed)
const DATE_TODAY     = "2025-12-07"; // 9 hours ago
const DATE_2_WEEKS   = "2025-11-23";
const DATE_3_WEEKS   = "2025-11-16";
const DATE_LAST_WEEK = "2025-11-30";
const DATE_LAST_MON  = "2025-11-07";

// Images data list
const images = [
  {
    file: "1v1.lol_Favicon_zv2lxo.jpg",
    label: "1v1.lol Favicon",
    type: "icon",
    date: DATE_3_WEEKS,
    tags: ["icon", "favicon", "1v1.lol", "game", "seo"],
    alias: "1v1-favicon"
  },
  {
    file: "1v1_Lol_StaticQuasar931_xrplna.png",
    label: "1v1.lol Logo",
    type: "logo",
    date: DATE_3_WEEKS,
    tags: ["logo", "1v1.lol", "thumbnail", "game", "cover"],
    alias: "1v1-logo"
  },
  {
    file: "3-slices_StaticQuasar931.jpg",
    label: "3 Slices Thumbnail",
    type: "game",
    date: DATE_LAST_MON,
    tags: ["game", "3 slices", "thumbnail", "cover"]
  },
  {
    file: "Clash_Royale_StaticQuasar931_ixwb97.png",
    label: "Clash Royale Thumbnail",
    type: "game",
    date: DATE_TODAY,
    tags: ["game", "clash royale", "thumbnail", "mobile"],
    alias: "clash-royale"
  },
  {
    file: "Crossy_road_StaticQuasar931.webp",
    label: "Crossy Road Thumbnail",
    type: "game",
    date: DATE_LAST_MON,
    tags: ["game", "crossy road", "thumbnail", "arcade"]
  },
  {
    file: "Drift_Hunters_StaticQuasar931.avif",
    label: "Drift Hunters Thumbnail",
    type: "game",
    date: DATE_LAST_MON,
    tags: ["game", "drift hunters", "racing", "thumbnail"]
  },
  {
    file: "Escape_Road_1_StaticQuasar931_CDN.png",
    label: "Escape Road 1 Game Art",
    type: "game",
    date: DATE_LAST_MON,
    tags: ["game", "escape road", "fake gta", "thumbnail"]
  },
  {
    file: "Follow-us--IG",
    label: "Follow Us Instagram Icon",
    type: "seo",
    date: DATE_LAST_MON,
    tags: ["seo", "icon", "instagram", "social", "visual-seo", "static brand"],
    alias: "ig-icon"
  },
  {
    file: "GTA_Mods_StaticQuasar931_vua0h4.png",
    label: "GTA Mods Thumbnail",
    type: "game",
    date: DATE_LAST_MON,
    tags: ["game", "gta", "mods", "thumbnail"]
  },
  {
    file: "Google-logo-transparent-G.png",
    label: "Google G Logo",
    type: "seo",
    date: DATE_2_WEEKS,
    tags: ["seo", "icon", "google", "logo", "search", "ui"],
    alias: "google-g"
  },
  {
    file: "GoogleForm.png",
    label: "Google Form Icon",
    type: "seo",
    date: DATE_LAST_MON,
    tags: ["seo", "icon", "google form", "social", "visual-seo", "feedback"],
    alias: "google-form"
  },
  {
    file: "Java_Edition_1.12.2.webp",
    label: "Minecraft Java 1.12.2",
    type: "game",
    date: DATE_3_WEEKS,
    tags: ["minecraft", "java 1.12.2", "game", "version-art"]
  },
  {
    file: "Join_Our_DC_StaticQuassar931_lcplrf.png",
    label: "Join Our Discord Icon",
    type: "seo",
    date: DATE_LAST_MON,
    tags: ["seo", "icon", "discord", "social", "visual-seo", "static brand"],
    alias: "discord-icon"
  },
  {
    file: "MV5BNGIyZDE4OTYtNjBhOS00NzFkLTkyYWMtYzAzNWUxZThmMDBlXkEyXkFqcGc@._V1_.jpg",
    label: "Movie Poster Style Art",
    type: "art",
    date: DATE_2_WEEKS,
    tags: ["art", "poster", "movie-style", "thumbnail"]
  },
  {
    file: "RaftBeta.png",
    label: "Raft Beta Thumbnail",
    type: "game",
    date: DATE_2_WEEKS,
    tags: ["game", "raft", "survival", "thumbnail"]
  },
  {
    file: "Retro_Bowl_StaticQuasar931_t2epwp.jpg",
    label: "Retro Bowl Static Thumbnail",
    type: "game",
    date: DATE_2_WEEKS,
    tags: ["game", "retro bowl", "football", "thumbnail"],
    alias: "retro-bowl"
  },
  {
    file: "Retrobowl_football.webp",
    label: "Retro Bowl Football Art",
    type: "game",
    date: DATE_LAST_MON,
    tags: ["game", "retro bowl", "football", "art"]
  },
  {
    file: "Screenshot_2025-11-24_162537-removebg-preview.png",
    label: "Screenshot 162537 Transparent",
    type: "ui",
    date: DATE_2_WEEKS,
    tags: ["ui", "screenshot", "transparent", "asset"]
  },
  {
    file: "Screenshot_2025-11-24_172246-removebg-preview.png",
    label: "Screenshot 172246 Transparent",
    type: "ui",
    date: DATE_2_WEEKS,
    tags: ["ui", "screenshot", "transparent", "asset"]
  },
  {
    file: "StaticQuasar931_Banner_Media_Google_Sites_Neon_ChatGPT_Image.png",
    label: "StaticQuasar931 Neon Banner",
    type: "seo",
    date: DATE_LAST_MON,
    tags: ["seo", "banner", "header", "static brand", "google sites", "visual-seo"],
    alias: "sq-banner"
  },
  {
    file: "Stickman_Hook.webp",
    label: "Stickman Hook Thumbnail",
    type: "game",
    date: DATE_2_WEEKS,
    tags: ["game", "stickman hook", "arcade", "thumbnail"]
  },
  {
    file: "Stumble_Guys_StaticQuasar931.png",
    label: "Stumble Guys Thumbnail",
    type: "game",
    date: DATE_2_WEEKS,
    tags: ["game", "stumble guys", "battle royale", "thumbnail"]
  },
  {
    file: "The_Binding_Of_Isaac_Wrath_of_The_Lamb_StaticQuasar931_g0u5vx.jpg",
    label: "Binding of Isaac Wrath of the Lamb",
    type: "game",
    date: DATE_TODAY,
    tags: ["game", "binding of isaac", "wrath of the lamb", "thumbnail"],
    alias: "isaac-wotl"
  },
  {
    file: "We_Become_What_We_Behold_WBWWB_StaticQuasar931.png",
    label: "We Become What We Behold",
    type: "game",
    date: DATE_3_WEEKS,
    tags: ["game", "wbwwb", "we become what we behold", "thumbnail"]
  },
  {
    file: "WithhelpbyIsaac.png",
    label: "With help by Isaac Badge",
    type: "credit",
    date: DATE_LAST_WEEK,
    tags: ["credit", "badge", "support", "helper", "overlay"],
    alias: "isaac-credit"
  },
  {
    file: "basketbros-io.jpg",
    label: "BasketBros io",
    type: "game",
    date: DATE_2_WEEKS,
    tags: ["game", "basketbros", "basketball", "thumbnail"]
  },
  {
    file: "bloodmoney-online.png",
    label: "Bloodmoney Online",
    type: "game",
    date: DATE_LAST_WEEK,
    tags: ["game", "bloodmoney", "online", "thumbnail"]
  },
  {
    file: "capsule_616x353.jpg",
    label: "Capsule 616x353",
    type: "art",
    date: DATE_2_WEEKS,
    tags: ["game", "capsule", "banner", "steam-style"]
  },
  {
    file: "clash-of-vikings_StaticQuasar931.webp",
    label: "Clash of Vikings",
    type: "game",
    date: DATE_LAST_MON,
    tags: ["game", "clash of vikings", "strategy", "thumbnail"]
  },
  {
    file: "cubes-2048-io.avif",
    label: "Cubes 2048 io",
    type: "game",
    date: DATE_LAST_WEEK,
    tags: ["game", "2048", "cubes", "io", "puzzle"]
  },
  {
    file: "document-autosave.svg",
    label: "Document Autosave Icon",
    type: "icon",
    date: DATE_2_WEEKS,
    tags: ["icon", "ui", "document", "autosave", "button", "seo-ui"],
    alias: "autosave-icon"
  },
  {
    file: "icon.png",
    label: "StaticQuasar931 Main Icon",
    type: "logo",
    date: DATE_LAST_MON,
    tags: ["logo", "icon", "static brand", "favicon", "seo"],
    alias: "sq-main-icon"
  },
  {
    file: "loadishlogo-removebg-preview.png",
    label: "Loadish Logo Transparent",
    type: "logo",
    date: DATE_2_WEEKS,
    tags: ["logo", "loadish", "transparent", "brand"]
  },
  {
    file: "loadishlogo.jpg",
    label: "Loadish Logo",
    type: "logo",
    date: DATE_2_WEEKS,
    tags: ["logo", "loadish", "brand"]
  },
  {
    file: "minecraft-1639513933156.jpg",
    label: "Minecraft Generic Art",
    type: "game",
    date: DATE_3_WEEKS,
    tags: ["game", "minecraft", "thumbnail", "cover"]
  },
  {
    file: "nuts-puzzle-sort-by-color.png",
    label: "Nuts Puzzle Sort by Color",
    type: "game",
    date: DATE_3_WEEKS,
    tags: ["game", "puzzle", "sort by color", "thumbnail"]
  },
  {
    file: "ragdoll-archers_StaticQuasar931.png",
    label: "Ragdoll Archers",
    type: "game",
    date: DATE_LAST_MON,
    tags: ["game", "ragdoll archers", "archery", "thumbnail"]
  },
  {
    file: "savelogo-removebg-preview.png",
    label: "Save Logo Transparent",
    type: "icon",
    date: DATE_2_WEEKS,
    tags: ["icon", "save", "ui", "button", "transparent"]
  },
  {
    file: "savelogo.jpg",
    label: "Save Logo",
    type: "icon",
    date: DATE_2_WEEKS,
    tags: ["icon", "save", "ui", "button"]
  },
  {
    file: "signout_logout-removebg-preview.png",
    label: "Signout Logout Transparent",
    type: "icon",
    date: DATE_2_WEEKS,
    tags: ["icon", "logout", "ui", "button", "transparent"]
  },
  {
    file: "signout_logout.png",
    label: "Signout Logout Icon",
    type: "icon",
    date: DATE_2_WEEKS,
    tags: ["icon", "logout", "ui", "button"]
  },
  {
    file: "slope_Staticquasar931_stable_agqxto.png",
    label: "Slope StaticQuasar931 Stable",
    type: "game",
    date: DATE_3_WEEKS,
    tags: ["game", "slope", "unblocked", "thumbnail"],
    alias: "slope-stable"
  },
  {
    file: "staticquasar931qrcodehomepage.png",
    label: "StaticQuasar931 Homepage QR Code",
    type: "seo",
    date: DATE_LAST_WEEK,
    tags: ["seo", "qr code", "static brand", "homepage", "visual-seo"]
  },
  {
    file: "survival-race-banner_Area_king_StaticQuasar931.png",
    label: "Survival Race Banner",
    type: "game",
    date: DATE_LAST_MON,
    tags: ["game", "survival race", "banner", "thumbnail"]
  },
  {
    file: "the-baby-in-yellow-pc-game-steam-cover.jpg",
    label: "The Baby in Yellow Steam Cover",
    type: "game",
    date: DATE_3_WEEKS,
    tags: ["game", "the baby in yellow", "steam cover", "horror"]
  }
];
