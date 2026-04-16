import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import CTAButton from "./CTAButton";

import sp1 from "@/assets/social-proof-1.webp";
import sp2 from "@/assets/social-proof-2.webp";
import sp3 from "@/assets/social-proof-3.webp";
import sp4 from "@/assets/social-proof-4.webp";
import sp5 from "@/assets/social-proof-5.webp";
import sp6 from "@/assets/social-proof-6.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const testimonials = [
  { img: sp1, name: "Alumna del grupo" },
  { img: sp2, name: "Alumna del grupo" },
  { img: sp3, name: "Alumna del grupo" },
  { img: sp4, name: "Alumna del grupo" },
  { img: sp5, name: "Alumna del grupo" },
  { img: sp6, name: "Alumna del grupo" },
];

const SocialProofSection = () => (
  <section className="section-padding bg-secondary">
    <div className="container-narrow text-center">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex items-center justify-center gap-2 mb-4">
        <MessageCircle className="w-6 h-6 text-verde-dark" />
        <span className="text-sm uppercase tracking-widest text-muted-foreground font-body">Resultados reales de alumnas</span>
      </motion.div>

      <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="section-headline">
        Mira lo que nuestras alumnas están creando 💬
      </motion.h2>
      <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-muted-foreground mb-10 font-body">
        Capturas reales del grupo de alumnas donde comparten sus creaciones y avances
      </motion.p>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((item, i) => (
          <motion.div key={i} variants={fadeUp} className="card-elegant overflow-hidden">
            <img src={item.img} alt={`Testimonio de alumna ${i + 1}`} loading="lazy" className="rounded-xl w-full object-cover" />
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-10">
        <CTAButton />
      </div>
    </div>
  </section>
);

export default SocialProofSection;
