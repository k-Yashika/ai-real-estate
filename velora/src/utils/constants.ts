export const PAGES = {
  HOME: "home",
  UPLOAD: "upload",
  ANALYSIS: "analysis",
  COMPARE: "compare",
  AREA: "area",
};

export const DEMO_APARTMENTS = [
  {
    id: "demo1",
    name: "Luxury Studio – Midtown",
    rent: 3200,
    city: "New York",
    size: 520,
    rooms: 1,
    imageUrl:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
    analysis: {
      overall_score: 87,
      lighting_score: 90,
      space_efficiency_score: 82,
      storage_score: 65,
      layout_quality: "excellent",
      estimated_value_rating: "fair",
      detected_issues: [
        "Limited closet storage",
        "Street noise possible from floor-to-ceiling windows",
      ],
      positive_features: [
        "Exceptional natural light",
        "Modern finishes",
        "Open-plan layout",
        "Premium appliances",
      ],
      summary:
        "A high-quality studio with outstanding light and modern design. Storage is the main compromise for the price point.",
      recommendation:
        "Ideal for a single professional who values aesthetics and light over storage.",
    },
  },
  {
    id: "demo2",
    name: "Overpriced Tiny Apartment",
    rent: 2100,
    city: "San Francisco",
    size: 280,
    rooms: 1,
    imageUrl:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
    analysis: {
      overall_score: 38,
      lighting_score: 30,
      space_efficiency_score: 25,
      storage_score: 20,
      layout_quality: "poor",
      estimated_value_rating: "overpriced",
      detected_issues: [
        "Very poor natural lighting",
        "Extremely cramped layout",
        "No visible storage",
        "Outdated kitchen",
        "Suspicious photo angle widening",
      ],
      positive_features: [
        "Central location possible",
        "Recently painted walls",
      ],
      summary:
        "This listing shows signs of manipulative photography. The space appears severely cramped and dark, with critical storage and layout issues.",
      recommendation:
        "Strongly consider alternatives. Pricing does not reflect quality.",
    },
  },
  {
    id: "demo3",
    name: "Family Apartment – Great Light",
    rent: 2800,
    city: "Austin",
    size: 1100,
    rooms: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1600607687939-ce8a6f349779?w=800&q=80",
    analysis: {
      overall_score: 79,
      lighting_score: 93,
      space_efficiency_score: 78,
      storage_score: 75,
      layout_quality: "good",
      estimated_value_rating: "good value",
      detected_issues: [
        "Slightly dated bathroom fixtures",
        "Minor wear on flooring",
      ],
      positive_features: [
        "Exceptional natural light throughout",
        "Generous room sizes",
        "Ample storage",
        "Family-friendly layout",
      ],
      summary:
        "An excellent family option with standout natural light and practical space. Minor cosmetic updates needed but great overall value.",
      recommendation:
        "Highly recommended for families or those prioritizing livability over luxury finishes.",
    },
  },
];

export const features = [
  {
    icon: "🔍",
    title: "Hidden Issue Detection",
    desc: "AI spots mold, damage, poor lighting and suspicious photo editing you'd miss.",
  },
  {
    icon: "📊",
    title: "Instant AI Scores",
    desc: "Get objective scores on lighting, layout, storage, and value in seconds.",
  },
  {
    icon: "⚖️",
    title: "Side-by-Side Compare",
    desc: "Compare up to 3 apartments on every metric to make the right call.",
  },
  {
    icon: "🗺️",
    title: "Area Intelligence",
    desc: "Understand the neighborhood: safety, transit, noise, and nearby essentials.",
  },
];
