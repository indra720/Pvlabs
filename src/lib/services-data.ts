import producthero from "../assets/producthero-1.jpg"
import productheroagain from "../assets/producthero-2.avif"
import lifestyle from "../assets/lifestyle1.webp"
import lifestyleagain from "../assets/lifestle2.png"
import acontent from "../assets/a+content.webp"
import inforgraphic from "../assets/inforgraphic.png"
import catlog from "../assets/catlog.webp"
import logodesign from "../assets/logodesing.jpg"
import brandiden from "../assets/brand3.jpg"
import packing from "../assets/packing.jpg"
import socialimg from "../assets/socialimg.png"
import addgoogle from "../assets/adgoogle.webp" 
import presentation from "../assets/presenation.jpg" 

// Split Image Collections
export const ecommerceImages = [
  producthero,
  productheroagain,
  lifestyle,
  lifestyleagain,
  acontent,
  inforgraphic,
  catlog
];

export const brandImages = [
  logodesign,
  brandiden,
  packing,
  socialimg,
  addgoogle,
  presentation
];

export const getEcommerceImages = (mainImage: string) => {
  const otherImages = ecommerceImages.filter(img => img !== mainImage);
  return [mainImage, ...otherImages.sort(() => 0.5 - Math.random())];
};

export const getBrandImages = (mainImage: string) => {
  const otherImages = brandImages.filter(img => img !== mainImage);
  return [mainImage, ...otherImages.sort(() => 0.5 - Math.random())];
};

export const ecommerceServices = [
  {
    id: "product-hero-images",
    badge: "🔥 Most Ordered",
    badgeType: "hot",
    title: "Product Hero Images",
    desc: "Your main listing image is the single most important factor in getting a click. We create hero images that stop the scroll - clean, sharp, marketplace-compliant, and built to convert.",
    checklist: [
      "White background (marketplace compliant)",
      "Gradient & colored backgrounds",
      "Multiple angle shots",
      "Amazon 2000×2000px ready",
      "3–5 day delivery"
    ],
    cta: "→ See Hero Image Examples",
    image: producthero,
    images: getEcommerceImages(producthero)
  },
  {
    id: "lifestyle-scene-images",
    title: "Lifestyle & Scene Images",
    desc: "Show your product in real life. Build emotional desire. Increase 'Add to Cart.' We create AI-powered lifestyle scenes - home, kitchen, outdoor, festive.",
    checklist: [
      "Home & kitchen scenes",
      "Festive & seasonal themes",
      "Flat lay compositions",
      "AI model integration",
      "Multiple scenes per product"
    ],
    cta: "→ See Lifestyle Examples",
    image: lifestyle,
    images: getEcommerceImages(lifestyle)
  },
  {
    id: "a-content-ebc-design",
    badge: "Amazon Exclusive",
    badgeType: "amazon",
    title: "A+ Content & EBC Design",
    desc: "Amazon sellers with A+ content see up to 10% more sales. We design scroll-stopping A+ modules - brand story, feature banners, comparison charts.",
    checklist: [
      "Brand story module",
      "Feature highlight banners",
      "Product comparison charts",
      "Amazon guideline compliant",
      "Delivered within 5 days"
    ],
    cta: "→ See A+ Content Examples",
    image: lifestyleagain,
    images: getEcommerceImages(lifestyleagain)
  },
  {
    id: "infographics-listing-images",
    title: "Infographics & Listing Images",
    desc: "Images 2–7 in your listing do the heavy lifting. We design visuals that answer every buyer question before they even think to ask it.",
    checklist: [
      "Feature callout graphics",
      "Size & dimension charts",
      "How-to-use visuals",
      "USP highlight images",
      "Trust & certification badges"
    ],
    cta: "→ See Infographic Examples",
    image: acontent,
    images: getEcommerceImages(acontent)
  },
  {
    id: "catalog-rpd-creation",
    badge: "Flipkart Specialist",
    badgeType: "flipkart",
    title: "Catalog & RPD Creation",
    desc: "Launching on Flipkart or Meesho? We handle complete catalog creation - product listings, RPD sheets, image uploads.",
    checklist: [
      "Flipkart catalog creation",
      "RPD sheet preparation",
      "Meesho listing setup",
      "Category-specific optimization",
      "Image spec compliance"
    ],
    cta: "→ Talk to Us About Catalog",
    image: catlog,
    images: getEcommerceImages(catlog)
  }
];

export const brandServices = [
  {
    id: "logo-brand-identity",
    title: "Logo & Brand Identity",
    desc: "Your logo is the face of your business. Your brand identity is everything behind it. We build complete brand systems for Indian businesses.",
    checklist: [
      "Logo design (5+ concepts)",
      "Brand color palette",
      "Typography system",
      "Business card design",
      "Complete brand guidelines PDF"
    ],
    cta: "→ See Branding Examples",
    image: logodesign,
    images: getBrandImages(logodesign)
  },
  {
    id: "packaging-design",
    title: "Packaging Design",
    desc: "Packaging is your first physical brand moment. We design shelf-worthy packaging - boxes, labels, pouches, inserts.",
    checklist: [
      "Box & carton design",
      "Product label & sticker",
      "Pouch & sachet design",
      "Print-ready CMYK files",
      "Multiple size variants"
    ],
    cta: "→ See Packaging Examples",
    image: packing,
    images: getBrandImages(packing)
  },
  {
    id: "social-media-creatives",
    title: "Social Media Creatives",
    desc: "Your Instagram and Facebook feed is your brand's shop window. We design scroll-stopping social creatives - posts, reels covers, stories, carousels.",
    checklist: [
      "Instagram posts & carousels",
      "Story & reel cover designs",
      "Facebook ad creatives",
      "LinkedIn company banners",
      "Batch delivery (30 posts/month)"
    ],
    cta: "→ See Social Examples",
    image: brandiden,
    images: getBrandImages(brandiden)
  },
  {
    id: "ad-creatives-meta-google",
    badge: "High Converting",
    title: "Ad Creatives (Meta & Google)",
    desc: "A great product with a bad ad creative wastes your budget. We design high-converting Meta and Google ad creatives.",
    checklist: [
      "Meta (Facebook & Instagram) ads",
      "Google display banners",
      "Multiple size variants",
      "Conversion-focused layouts",
      "Brand consistent design"
    ],
    cta: "→ See Ad Creative Examples",
    image: addgoogle,
    images: getBrandImages(addgoogle)
  },
  {
    id: "presentation-pitch-deck",
    title: "Presentation & Pitch Deck",
    desc: "Your pitch deck is the difference between a deal and a no. We design investor decks and sales presentations that tell your story visually.",
    checklist: [
      "Investor pitch decks",
      "Sales presentations",
      "Brand decks",
      "PowerPoint & Google Slides",
      "Editable templates delivered"
    ],
    cta: "→ See Deck Examples",
    image: presentation,
    images: getBrandImages(presentation)
  }
];
