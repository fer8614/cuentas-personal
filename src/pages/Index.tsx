import { motion } from "framer-motion";
import { Shield, Check, Star, Gift, ChevronDown, Heart, Sparkles, Award } from "lucide-react";
import CTAButton from "@/components/CTAButton";

import heroImg from "@/assets/hero-creator.jpg";
import bolso1 from "@/assets/bolso-1.jpg";
import bolso2 from "@/assets/bolso-2.jpg";
import bolso3 from "@/assets/bolso-3.jpg";
import bolso4 from "@/assets/bolso-4.jpg";
import bolso5 from "@/assets/bolso-5.jpg";
import bolsoCloseup from "@/assets/bolso-closeup.jpg";
import creatorImg from "@/assets/creator-isabella.jpg";
import courseMockup from "@/assets/course-mockup.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

/* ─── 1. HERO ─── */
const Hero = () => (
  <section className="section-padding bg-secondary">
    <div className="container-narrow text-center">
      <motion.p
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
        className="text-sm uppercase tracking-widest text-muted-foreground mb-4 font-body"
      >
        Para mujeres que quieren crear algo propio desde casa
      </motion.p>

      <motion.h1
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
        className="text-3xl md:text-5xl font-bold leading-tight mb-6 font-heading"
      >
        Aprende a crear bolsos de cuentas hermosos desde cero… y conviértelos en una fuente de ingresos desde casa
      </motion.h1>

      <motion.p
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
        className="text-lg text-muted-foreground mb-8 font-body"
      >
        Curso online con +23 módulos donde aprenderás paso a paso (aunque empieces desde cero)
      </motion.p>

      <motion.ul
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
        className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8 text-foreground font-body"
      >
        {["Sin experiencia previa", "Diseños modernos que sí se venden", "Aprende a tu ritmo", "Incluye guía para vender"].map((t) => (
          <motion.li key={t} variants={fadeUp} className="flex items-center gap-2">
            <Check className="w-5 h-5 text-verde-dark" /> {t}
          </motion.li>
        ))}
      </motion.ul>

      <CTAButton />

      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
        className="mt-10"
      >
        <img src={heroImg} alt="Isabella Toscano sosteniendo un bolso de cuentas artesanal" width={800} height={1024} className="rounded-2xl mx-auto shadow-lg max-w-md w-full" />
      </motion.div>
    </div>
  </section>
);

/* ─── 2. PROBLEMA ─── */
const Problema = () => (
  <section className="section-padding">
    <div className="container-narrow">
      <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="section-headline text-center">
        Sabes que podrías hacer algo bonito con tus manos… pero no sabes por dónde empezar
      </motion.h2>
      <motion.ul initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-4 max-w-md mx-auto">
        {[
          "Te confunden los materiales",
          "No sabes qué técnica usar",
          "Tienes miedo de que no te quede bien",
          "No sabes cómo vender",
        ].map((t) => (
          <motion.li key={t} variants={fadeUp} className="flex items-start gap-3 text-muted-foreground text-lg font-body">
            <span className="text-rosa-dark mt-1">✕</span> {t}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  </section>
);

/* ─── 3. DESEO ─── */
const Deseo = () => (
  <section className="section-padding bg-secondary">
    <div className="container-narrow text-center">
      <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="section-headline">
        Imagina crear bolsos hermosos… y sentirte orgullosa de cada uno
      </motion.h2>
      <motion.ul initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-4 max-w-md mx-auto text-left">
        {[
          "Crear piezas únicas con tus manos",
          "Recibir cumplidos por tus creaciones",
          "Generar ingresos desde casa",
          "Tener algo propio y sentirte realizada",
        ].map((t) => (
          <motion.li key={t} variants={fadeUp} className="flex items-center gap-3 text-lg font-body">
            <Heart className="w-5 h-5 text-rosa-dark flex-shrink-0" /> {t}
          </motion.li>
        ))}
      </motion.ul>
      <div className="mt-10">
        <CTAButton />
      </div>
    </div>
  </section>
);

/* ─── 4. MECANISMO ─── */
const Mecanismo = () => (
  <section className="section-padding">
    <div className="container-narrow text-center">
      <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="section-headline">
        No necesitas talento… necesitas una guía paso a paso
      </motion.h2>
      <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-lg text-muted-foreground max-w-xl mx-auto font-body">
        Este curso te lleva desde lo básico hasta diseños listos para vender, sin confusión. Cada módulo está pensado para que avances con confianza.
      </motion.p>
    </div>
  </section>
);

/* ─── 5. PRODUCTO ─── */
const Producto = () => (
  <section className="section-padding bg-secondary">
    <div className="container-narrow">
      <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="section-headline text-center">
        Bolsos de Cuentas: Crea Bolsos de Alta Calidad desde Cero
      </motion.h2>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="my-10">
        <img src={courseMockup} alt="Vista previa del curso online" loading="lazy" width={1200} height={800} className="rounded-2xl shadow-lg mx-auto w-full max-w-2xl" />
      </motion.div>

      <motion.ul initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 gap-4 max-w-xl mx-auto">
        {[
          "Técnicas paso a paso",
          "Diseños completos",
          "Instalación de cierres, asas y accesorios",
          "Acabados profesionales",
          "Mantenimiento y reparación",
        ].map((t) => (
          <motion.li key={t} variants={fadeUp} className="flex items-center gap-3 font-body">
            <Sparkles className="w-5 h-5 text-gold flex-shrink-0" /> {t}
          </motion.li>
        ))}
      </motion.ul>

      <div className="mt-10">
        <CTAButton />
      </div>
    </div>
  </section>
);

/* ─── 6. PRUEBA VISUAL ─── */
const galeria = [
  { img: bolso1, copy: "Bolso elegante y llamativo, perfecto para comenzar y lograr un acabado que parece profesional desde el primer intento." },
  { img: bolso2, copy: "Diseño moderno que puedes usar o vender… ideal para destacar y recibir cumplidos desde el primer día." },
  { img: bolso3, copy: "Un modelo versátil que demuestra cómo puedes crear bolsos resistentes, bonitos y funcionales sin experiencia previa." },
  { img: bolso4, copy: "Diseño creativo que te permite diferenciarte y ofrecer algo único que muchas personas estarían dispuestas a comprar." },
  { img: bolso5, copy: "Acabados cuidados y detalles que hacen que tus bolsos se vean de alta calidad… incluso si estás empezando." },
];

const PruebaVisual = () => (
  <section className="section-padding">
    <div className="container-narrow text-center">
      <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="section-headline">
        Esto es lo que puedes crear con este curso
      </motion.h2>
      <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-muted-foreground mb-10 font-body">
        Estos diseños fueron creados con el mismo método que aprenderás.
      </motion.p>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {galeria.map((item, i) => (
          <motion.div key={i} variants={fadeUp} className={`card-elegant ${i === 4 ? "sm:col-span-2 sm:max-w-sm sm:mx-auto" : ""}`}>
            <img src={item.img} alt={`Bolso de cuentas diseño ${i + 1}`} loading="lazy" width={800} height={800} className="rounded-xl w-full aspect-square object-cover mb-4" />
            <p className="text-muted-foreground text-sm leading-relaxed font-body">{item.copy}</p>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-10">
        <CTAButton />
      </div>
    </div>
  </section>
);

/* ─── 7. BONOS ─── */
const bonos = [
  "Plantillas y diagramas descargables",
  "Guía de mantenimiento",
  "Guía de reparación",
  "Guía Canva para crear tu marca",
  "Guía de fotografía de producto",
  "Guía de redes sociales",
  "Guía de empaque profesional",
];

const Bonos = () => (
  <section className="section-padding bg-secondary">
    <div className="container-narrow">
      <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="section-headline text-center">
        Recibes estos bonos incluidos
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.ul initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-4">
          {bonos.map((b) => (
            <motion.li key={b} variants={fadeUp} className="flex items-center gap-3 font-body">
              <Gift className="w-5 h-5 text-gold flex-shrink-0" /> {b}
            </motion.li>
          ))}
        </motion.ul>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <img src={bolsoCloseup} alt="Detalle de bolso artesanal" loading="lazy" width={800} height={800} className="rounded-2xl shadow-lg w-full" />
        </motion.div>
      </div>
    </div>
  </section>
);

/* ─── 8. BENEFICIOS ─── */
const Beneficios = () => (
  <section className="section-padding">
    <div className="container-narrow text-center">
      <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="section-headline">
        Lo que vas a lograr
      </motion.h2>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 gap-6 max-w-lg mx-auto">
        {[
          { icon: Star, text: "Crear bolsos desde cero" },
          { icon: Award, text: "Tener diseños vendibles" },
          { icon: Sparkles, text: "Desarrollar una habilidad rentable" },
          { icon: Heart, text: "Sentirte segura creando" },
        ].map(({ icon: Icon, text }) => (
          <motion.div key={text} variants={fadeUp} className="card-elegant text-center">
            <Icon className="w-8 h-8 text-gold mx-auto mb-3" />
            <p className="font-semibold font-body">{text}</p>
          </motion.div>
        ))}
      </motion.div>
      <div className="mt-10">
        <CTAButton />
      </div>
    </div>
  </section>
);

/* ─── 9. CREADORA ─── */
const Creadora = () => (
  <section className="section-padding bg-secondary">
    <div className="container-narrow">
      <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="section-headline text-center">
        Conoce a Isabella Toscano
      </motion.h2>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex-shrink-0">
          <img src={creatorImg} alt="Isabella Toscano, creadora del curso" loading="lazy" width={800} height={800} className="rounded-2xl w-64 h-64 object-cover shadow-lg" />
        </motion.div>
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-lg text-muted-foreground font-body leading-relaxed">
          Tengo 5 años creando bolsos con cuentas y he reunido todo en un método simple para que tú también puedas lograrlo. He enseñado a cientos de mujeres a crear bolsos hermosos y a convertir esta habilidad en una fuente de ingresos.
        </motion.p>
      </div>
    </div>
  </section>
);

/* ─── 10. OFERTA ─── */
const Oferta = () => (
  <section id="oferta" className="section-padding">
    <div className="container-narrow text-center">
      <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="section-headline">
        Empieza hoy
      </motion.h2>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="card-elegant max-w-md mx-auto border-2 border-gold/30">
        <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2 font-body">Acceso completo</p>
        <p className="text-5xl font-bold text-gold mb-6 font-heading">$XX USD</p>
        <CTAButton text="👉 QUIERO ACCESO AHORA" microcopy="Pago seguro + acceso inmediato" />
      </motion.div>
    </div>
  </section>
);

/* ─── 11. GARANTÍA ─── */
const Garantia = () => (
  <section className="section-padding bg-verde/20">
    <div className="container-narrow text-center">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        <Shield className="w-12 h-12 text-verde-dark mx-auto mb-4" />
        <h2 className="section-headline">Pruébalo sin riesgo</h2>
        <p className="text-lg text-muted-foreground font-body">
          Tienes 7 días para probarlo. Si no es para ti, te devolvemos tu dinero sin preguntas.
        </p>
      </motion.div>
    </div>
  </section>
);

/* ─── 12. PARA QUIÉN ─── */
const ParaQuien = () => (
  <section className="section-padding">
    <div className="container-narrow text-center">
      <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="section-headline">
        ¿Es para ti?
      </motion.h2>
      <motion.ul initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-3 max-w-md mx-auto text-left">
        {[
          "Mujeres que quieren aprender desde cero",
          "Interesadas en manualidades y artesanías",
          "Quieren generar ingresos desde casa",
        ].map((t) => (
          <motion.li key={t} variants={fadeUp} className="flex items-center gap-3 text-lg font-body">
            <Check className="w-5 h-5 text-verde-dark flex-shrink-0" /> {t}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  </section>
);

/* ─── 13. FAQ ─── */
const faqs = [
  { q: "¿Necesito experiencia?", a: "No, el curso está diseñado para principiantes completas." },
  { q: "¿Cuándo recibo acceso?", a: "Inmediatamente después de tu compra." },
  { q: "¿Los materiales son accesibles?", a: "Sí, son materiales fáciles de conseguir y económicos." },
];

const FAQ = () => (
  <section className="section-padding bg-secondary">
    <div className="container-narrow">
      <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="section-headline text-center">
        Preguntas frecuentes
      </motion.h2>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-4 max-w-xl mx-auto">
        {faqs.map(({ q, a }) => (
          <motion.details key={q} variants={fadeUp} className="card-elegant group cursor-pointer">
            <summary className="flex items-center justify-between font-semibold font-body list-none">
              {q}
              <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180 text-gold" />
            </summary>
            <p className="mt-3 text-muted-foreground font-body">{a}</p>
          </motion.details>
        ))}
      </motion.div>
    </div>
  </section>
);

/* ─── 14. CTA FINAL ─── */
const CTAFinal = () => (
  <section className="section-padding bg-gold/10">
    <div className="container-narrow text-center">
      <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="section-headline">
        Tu primer bolso puede ser el inicio de algo más grande
      </motion.h2>
      <CTAButton text="👉 EMPEZAR AHORA" microcopy="Acceso inmediato + garantía incluida" />
    </div>
  </section>
);

/* ─── PAGE ─── */
const Index = () => (
  <main className="overflow-hidden">
    <Hero />
    <Problema />
    <Deseo />
    <Mecanismo />
    <Producto />
    <PruebaVisual />
    <Bonos />
    <Beneficios />
    <Creadora />
    <Oferta />
    <Garantia />
    <ParaQuien />
    <FAQ />
    <CTAFinal />
  </main>
);

export default Index;
