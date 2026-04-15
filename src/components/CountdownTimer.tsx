import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";

const OFFER_HOURS = 2;

const getEndTime = () => {
  const stored = localStorage.getItem("offer-end");
  if (stored) {
    const end = parseInt(stored, 10);
    if (end > Date.now()) return end;
  }
  const end = Date.now() + OFFER_HOURS * 60 * 60 * 1000;
  localStorage.setItem("offer-end", String(end));
  return end;
};

const CountdownTimer = () => {
  const [endTime] = useState(getEndTime);
  const [timeLeft, setTimeLeft] = useState(() => Math.max(0, endTime - Date.now()));

  useEffect(() => {
    const id = setInterval(() => {
      const left = Math.max(0, endTime - Date.now());
      setTimeLeft(left);
      if (left <= 0) clearInterval(id);
    }, 1000);
    return () => clearInterval(id);
  }, [endTime]);

  const hours = Math.floor(timeLeft / 3600000);
  const minutes = Math.floor((timeLeft % 3600000) / 60000);
  const seconds = Math.floor((timeLeft % 60000) / 1000);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-foreground text-background py-3 px-4 text-center sticky top-0 z-50"
    >
      <div className="flex items-center justify-center gap-3 font-body text-sm md:text-base">
        <Clock className="w-4 h-4 text-gold animate-pulse" />
        <span>🔥 Oferta especial termina en:</span>
        <div className="flex gap-1 font-heading font-bold text-gold">
          <span className="bg-background/20 rounded px-2 py-0.5">{pad(hours)}</span>
          <span>:</span>
          <span className="bg-background/20 rounded px-2 py-0.5">{pad(minutes)}</span>
          <span>:</span>
          <span className="bg-background/20 rounded px-2 py-0.5">{pad(seconds)}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default CountdownTimer;
