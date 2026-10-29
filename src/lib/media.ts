/**
 * Every photo slot on the site, in one place.
 *
 * A slot set to `null` falls back to the line-art plate named in its
 * <ImageSlot art> prop, so the layout is complete either way. Every slot
 * is currently filled.
 *
 * All photography is from Pexels, free for commercial use, no attribution
 * required. The Pexels id is recorded against each slot.
 *
 * Heroes are stored pre-cropped to 16:9 and pillars to 3:4, because a source
 * in the wrong aspect gets sliced to a useless strip by object-cover.
 *
 * Bias is deliberately toward controls and BMS rather than mechanical HVAC:
 * the one chiller-plant shot sits on a page hero behind a heavy wash, and
 * ductwork appears only on the pillar that is actually about mechanical.
 */
export const media: Record<string, string | null> = {
  // --- home -------------------------------------------------------------
  // #33706880 a long run of switchgear and control panels. Depth, real tonal
  // range, and unmistakably the control layer.
  hero: "/assets/hero-switchgear-room.jpg",
  // #38217230 a real switchgear room: facing panel lineups, overhead
  // conduit, scuffed floor. Chosen after four panel close-ups failed, each
  // reading as generic electrical, a competitor's brand, or a studio
  // product shot. A room with depth and wear reads as real; an isolated
  // enclosure does not.
  whoWeAre: "/assets/who-we-are-switchgear-room.jpg",

  // --- page heroes, all behind a heavy grey wash at 56vh ----------------
  aboutHero: "/assets/about-hero-wiring.jpg", // #28265032
  // #35573433 distribution board elevation. Replaced #18471553, which
  // turned out to be a Festo training rig rather than a real panel.
  areasHero: "/assets/areas-hero-distribution-board.jpg",
  ownersHero: "/assets/owners-hero-chiller-plant.jpg", // #37913513
  networkHero: "/assets/network-hero-rooftop.jpg", // #30210086
  contactHero: "/assets/contact-hero-facade.jpg", // #33719774

  // --- CTA banner, rendered at opacity-30 under a gradient --------------
  ctaBackdrop: "/assets/cta-network-cables.jpg", // #6466143

  // --- Areas of Interest, the five pillars ------------------------------
  // 3:4 portrait, rendered large with no overlay. The most exposed
  // photographs on the site.
  categoryControls: "/assets/category-controls-panels.jpg", // #39639325
  categoryMechanical: "/assets/category-mechanical-ductwork.jpg", // #8297856
  // #29148355 dome cameras and linear lighting in one frame, which is this
  // pillar's scope exactly.
  categoryIntegrated: "/assets/category-integrated-cameras.jpg",
  categoryService: "/assets/category-service-multimeter.jpg", // #34054464
  // #12207608 metering. Pexels has no real BMS analytics dashboard: the
  // results are stock-market charts or sci-fi sets. Submetering and trend
  // logging are in this pillar's bullets, so metering is honest.
  categoryEnergy: "/assets/category-energy-meters.jpg",
};
