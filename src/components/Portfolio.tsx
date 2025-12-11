import { useState } from "react";
import { Expand } from "lucide-react";

const portfolioItems = [
  {
    id: 1,
    title: "Hoplon Lounge",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    title: "La Mansa Restaurant",
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    title: "YoCreo Platform",
    category: "Web App",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
  },
  {
    id: 4,
    title: "Lleva Viajes",
    category: "Landing Page",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=600&fit=crop",
  },
  {
    id: 5,
    title: "Brand Identity",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop",
  },
  {
    id: 6,
    title: "UI Components",
    category: "UI/UX",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
  },
];

const categories = ["Todos", "Web Design", "E-commerce", "Web App", "Landing Page", "Branding", "UI/UX"];

export const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredItems = activeCategory === "Todos" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-sm font-medium text-primary tracking-wider uppercase">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mt-4 mb-6">
            Galería de{" "}
            <span className="text-gradient">trabajos</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Una selección de nuestros mejores proyectos y diseños.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-elegant"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                  <div className="w-12 h-12 rounded-full bg-silver-light/20 backdrop-blur-sm flex items-center justify-center mb-4 scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 delay-100">
                    <Expand className="w-5 h-5 text-silver-light" />
                  </div>
                  <h3 className="font-display font-semibold text-xl text-silver-light mb-1 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-150">
                    {item.title}
                  </h3>
                  <p className="text-sm text-silver/80 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-200">
                    {item.category}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
