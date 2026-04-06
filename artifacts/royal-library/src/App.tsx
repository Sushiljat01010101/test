import React from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Star, CheckCircle2, BookOpen, Wifi, AirVent, Zap, Car, Droplets, Users, Quote } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const WHATSAPP_LINK = "https://wa.me/919783840000?text=Hi%2C%20I%20would%20like%20to%20inquire%20about%20Royal%20Library%2C%20Jaipur.";

const queryClient = new QueryClient();

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

function Home() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-secondary/30">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50 transition-all duration-300">
        <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-primary-foreground">
              <BookOpen size={24} className="text-secondary" />
            </div>
            <span className="font-serif font-bold text-xl md:text-2xl text-primary tracking-tight">Royal Library</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#facilities" className="hover:text-primary transition-colors">Facilities</a>
            <a href="#reviews" className="hover:text-primary transition-colors">Reviews</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
          <div className="flex items-center gap-2">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white hover:bg-[#20bd5a] px-5 py-2.5 rounded-full font-medium transition-colors flex items-center gap-2 text-sm shadow-sm hover:shadow-md" data-testid="nav-whatsapp">
              <SiWhatsapp size={16} />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
            <a href="tel:+919783840000" className="bg-primary text-primary-foreground hover:bg-primary/90 px-5 py-2.5 rounded-full font-medium transition-colors flex items-center gap-2 text-sm shadow-sm hover:shadow-md" data-testid="nav-call">
              <Phone size={16} className="text-secondary" />
              <span className="hidden sm:inline">Call Now</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background z-10" />
          <img 
            src="/images/hero.jpg" 
            alt="Royal Library Interior" 
            className="w-full h-full object-cover object-center opacity-40 grayscale-[20%]"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&q=80&w=2000";
            }}
          />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden"
            animate="show"
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 text-secondary border border-secondary/20 mb-6">
              <Star size={14} className="fill-secondary" />
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">Rated 4.8 - 4.9 by 400+ Students</span>
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-serif font-bold text-primary leading-[1.1] mb-6">
              A Calm Sanctuary for <span className="text-secondary italic">Serious Study.</span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Premium private study space in Pratap Nagar, Jaipur. Clean, quiet, and fully equipped to help you reach your flow state.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:+919783840000" className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2" data-testid="hero-call">
                <Phone size={20} />
                Reserve Your Seat
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 bg-[#25D366] text-white rounded-full font-medium text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2" data-testid="hero-whatsapp">
                <SiWhatsapp size={22} />
                Chat on WhatsApp
              </a>
              <a href="#location" className="w-full sm:w-auto px-8 py-4 bg-white text-primary border border-border rounded-full font-medium text-lg hover:bg-gray-50 transition-all flex items-center justify-center gap-2" data-testid="hero-directions">
                <MapPin size={20} />
                Get Directions
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Highlights / About */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">Built for Focus. Designed for Success.</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Whether you're preparing for UPSC, SSC, Banking, or university exams, your environment dictates your focus. Royal Library is designed to eliminate distractions and provide a premium, respectful space for self-study.
              </p>
              <div className="space-y-4">
                {[
                  "Strictly silent environment",
                  "Ergonomic, individual seating",
                  "Climate-controlled comfort",
                  "Secure and well-maintained"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-secondary flex-shrink-0" size={24} />
                    <span className="text-primary font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative">
                <img 
                  src="/images/about.jpg" 
                  alt="Student studying" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1000";
                  }}
                />
                <div className="absolute inset-0 bg-primary/10"></div>
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl max-w-[240px] border border-border/50">
                <div className="flex gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((_, i) => <Star key={i} size={16} className="fill-secondary text-secondary" />)}
                </div>
                <p className="text-sm font-medium text-primary mb-1">"The best study environment in Jaipur. Totally worth it."</p>
                <p className="text-xs text-muted-foreground">— SSC Aspirant</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section id="facilities" className="py-24 bg-background border-y border-border/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">Premium Amenities</h2>
            <p className="text-lg text-muted-foreground">Everything you need for long, productive study sessions, meticulously maintained.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: <Wifi size={32} />, title: "High-Speed WiFi", desc: "Uninterrupted connectivity" },
              { icon: <AirVent size={32} />, title: "AC Facility", desc: "Comfortable climate control" },
              { icon: <Zap size={32} />, title: "Charging Points", desc: "At every individual desk" },
              { icon: <Droplets size={32} />, title: "RO Water", desc: "Clean drinking water" },
              { icon: <Users size={32} />, title: "Individual Seating", desc: "Spacious, ergonomic desks" },
              { icon: <BookOpen size={32} />, title: "Silent Zone", desc: "Strictly enforced quiet" },
              { icon: <Car size={32} />, title: "Parking", desc: "Safe vehicle parking" },
              { icon: <Clock size={32} />, title: "Long Hours", desc: "7:00 AM to 10:00 PM" }
            ].map((facility, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-6 md:p-8 rounded-2xl border border-border/50 hover:border-secondary/50 hover:shadow-lg transition-all group"
              >
                <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-secondary transition-colors">
                  {facility.icon}
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{facility.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{facility.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">Trusted by Aspirants</h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((_, i) => <Star key={i} size={24} className="fill-secondary text-secondary" />)}
              </div>
              <span className="text-2xl font-bold text-primary">4.8</span>
            </div>
            <p className="text-muted-foreground">Based on 400+ real user reviews on Google</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { text: "Clean and quiet environment. The AC works perfectly and the seats are very comfortable for long hours.", author: "UPSC Aspirant" },
              { text: "WiFi is available and consistently fast. Management is very cooperative. Great place for self-study users.", author: "College Student" },
              { text: "The best library in Pratap Nagar. Silent study environment and clean RO drinking water. Highly recommended.", author: "Banking Exam Student" }
            ].map((review, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-background p-8 rounded-2xl border border-border relative"
              >
                <Quote size={40} className="text-secondary/20 absolute top-6 right-6" />
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((_, i) => <Star key={i} size={16} className="fill-secondary text-secondary" />)}
                </div>
                <p className="text-primary font-medium text-lg mb-6 relative z-10">"{review.text}"</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wide font-semibold">— {review.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Info & CTA */}
      <section id="contact" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Ready to Focus?</h2>
              <p className="text-primary-foreground/80 text-lg mb-10 max-w-md leading-relaxed">
                Join the community of dedicated students at Jaipur's most premium study space. Call us to confirm seat availability.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary flex-shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Timings</h4>
                    <p className="text-primary-foreground/70">Daily, 7:00 AM – 10:00 PM</p>
                    <p className="text-sm text-primary-foreground/50 mt-1">*Contact for 24/7 availability details</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div id="location">
                    <h4 className="text-xl font-bold mb-1">Location</h4>
                    <p className="text-primary-foreground/70 leading-relaxed">
                      175/77, Sector 17, Pratap Nagar,<br/>
                      Jaipur, Rajasthan 302033<br/>
                      <span className="text-secondary/90 text-sm mt-1 block">~2–3 km from city center area</span>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Contact</h4>
                    <a href="tel:+919783840000" className="text-3xl font-serif font-bold text-secondary hover:text-white transition-colors block">
                      +91 97838 40000
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="bg-white rounded-3xl p-8 md:p-12 text-center max-w-md shadow-2xl w-full border-4 border-secondary/20">
                <BookOpen size={48} className="text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-primary mb-4">Book Your Visit</h3>
                <p className="text-muted-foreground mb-8">
                  Seats fill up fast during exam seasons. Call ahead to reserve your spot or schedule a visit.
                </p>
                <a 
                  href="tel:+919783840000" 
                  className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-bold text-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-lg mb-3"
                  data-testid="contact-call"
                >
                  <Phone size={20} className="text-secondary" />
                  Call +91 97838 40000
                </a>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-[#25D366] text-white rounded-xl font-bold text-lg hover:bg-[#20bd5a] transition-all flex items-center justify-center gap-2 shadow-lg"
                  data-testid="contact-whatsapp"
                >
                  <SiWhatsapp size={20} />
                  WhatsApp Us
                </a>
                <p className="text-xs text-muted-foreground mt-4 uppercase tracking-wider font-semibold">No booking fees</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <motion.a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:shadow-green-400/40 transition-shadow"
        data-testid="floating-whatsapp"
        aria-label="Chat on WhatsApp"
      >
        <SiWhatsapp size={32} />
        <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full animate-pulse border-2 border-white"></span>
      </motion.a>

      {/* Footer */}
      <footer className="bg-[#0a1224] py-12 text-center border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-6 opacity-50">
            <BookOpen size={24} />
            <span className="font-serif font-bold text-xl tracking-tight">Royal Library</span>
          </div>
          <p className="text-white/40 text-sm mb-4">
            175/77, Sector 17, Pratap Nagar, Jaipur, Rajasthan 302033
          </p>
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Royal Library Jaipur. All rights reserved.
          </p>
        </div>
      </footer>

    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
