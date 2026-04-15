import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Eye } from "lucide-react";

const names = [
  "María G.", "Lucía R.", "Valentina M.", "Camila P.", "Sofía L.",
  "Isabella T.", "Daniela C.", "Gabriela S.", "Alejandra V.", "Carolina F.",
  "Andrea B.", "Paula H.", "Laura D.", "Natalia Q.", "Fernanda A.",
];

const cities = [
  "Bogotá", "CDMX", "Lima", "Buenos Aires", "Santiago",
  "Medellín", "Quito", "Caracas", "Guadalajara", "Monterrey",
];

const actions = [
  { type: "buy" as const, text: "acaba de comprar el curso" },
  { type: "view" as const, text: "está viendo el curso ahora" },
  { type: "buy" as const, text: "se inscribió al curso" },
  { type: "view" as const, text: "está explorando los módulos" },
];

const random = <T,>(arr: T[]) => arr[Math.floor(Math.random() * arr.length)];

const SocialProofPopup = () => {
  const [notification, setNotification] = useState<{
    name: string; city: string; action: typeof actions[0]; id: number;
  } | null>(null);

  useEffect(() => {
    const show = () => {
      setNotification({
        name: random(names),
        city: random(cities),
        action: random(actions),
        id: Date.now(),
      });
      setTimeout(() => setNotification(null), 4000);
    };

    const initialDelay = setTimeout(show, 5000);
    const interval = setInterval(show, 12000 + Math.random() * 8000);

    return () => { clearTimeout(initialDelay); clearInterval(interval); };
  }, []);

  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-xs">
      <AnimatePresence>
        {notification && (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, x: -100, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ type: "spring", damping: 20 }}
            className="bg-background border border-border rounded-xl p-3 shadow-xl flex items-start gap-3"
          >
            <div className={`rounded-full p-2 flex-shrink-0 ${
              notification.action.type === "buy" ? "bg-verde/20" : "bg-rosa/30"
            }`}>
              {notification.action.type === "buy" 
                ? <ShoppingBag className="w-4 h-4 text-verde-dark" />
                : <Eye className="w-4 h-4 text-rosa-dark" />
              }
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold font-body text-foreground leading-tight">
                {notification.name} de {notification.city}
              </p>
              <p className="text-xs text-muted-foreground font-body mt-0.5">
                {notification.action.text} 🎉
              </p>
              <p className="text-[10px] text-muted-foreground/60 mt-1">Hace unos momentos</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SocialProofPopup;
