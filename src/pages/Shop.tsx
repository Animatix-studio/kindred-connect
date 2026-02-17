import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import ganeshMarathi from "@/assets/shop/ganesh-chaturthi-marathi.jpeg";
import ganeshHindi from "@/assets/shop/ganesh-chaturthi-hindi.jpeg";
import ganeshEnglish from "@/assets/shop/ganesh-chaturthi-english.jpeg";
import ganeshMockup from "@/assets/shop/ganesh-chaturthi-mockup.jpeg";

const products = [
  {
    id: 1,
    title: "गणेश चतुर्थी कथा (मराठी)",
    subtitle: "जेव्हा घर मंदिर होतं..",
    price: "₹251/-",
    image: ganeshMarathi,
  },
  {
    id: 2,
    title: "गणेश चतुर्थी कथा (हिंदी)",
    subtitle: "जब घर मंदिर बन जाता है..",
    price: "₹251/-",
    image: ganeshHindi,
  },
  {
    id: 3,
    title: "Ganesh Chaturthi Katha (English)",
    subtitle: "When a Home Becomes a Temple",
    price: "₹259/-",
    image: ganeshEnglish,
  },
];

const Shop = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-12 sm:pt-40 sm:pb-20 px-4 sm:px-6">
        <div className="container mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold mb-4"
          >
            <span className="text-gradient">Shop</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base"
          >
            Explore our collection of beautifully illustrated books and prints by AnimatiX Studio.
          </motion.p>
        </div>
      </section>

      {/* Mockup Feature */}
      <section className="px-4 sm:px-6 pb-12 sm:pb-20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl sm:rounded-3xl overflow-hidden premium-card"
          >
            <img
              src={ganeshMockup}
              alt="Ganesh Chaturthi Katha Book Mockup"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-4 sm:px-6 pb-16 sm:pb-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group premium-card rounded-2xl overflow-hidden"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg font-display font-bold mb-1 text-foreground">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {product.subtitle}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-primary">
                      {product.price}
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-5 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-full"
                    >
                      Buy Now
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Shop;
