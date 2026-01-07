import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { Check } from "lucide-react";

const About = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: "15+", label: t.about.stat1 },
    { value: "200+", label: t.about.stat2 },
    { value: "98%", label: t.about.stat3 },
  ];

  return (
    <section id="chi-siamo" className="py-24 bg-muted">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">{t.about.label}</span>
          <h2 className="font-serif text-3xl md:text-5xl mt-4">
            {t.about.title1}
            <br />
            <span className="text-primary">{t.about.title2}</span>
          </h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-foreground/80">{t.about.p1}</p>
            <p className="text-lg text-foreground/80">{t.about.p2}</p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 py-8">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
                  className="text-center"
                >
                  <div className="font-serif text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            {t.about.features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.6, delay: 0.4 + idx * 0.1 }}
                className="flex gap-4 p-4 rounded-xl bg-background/50 border border-border hover:border-primary/30 transition"
              >
                <div className="flex-shrink-0">
                  <Check className="h-6 w-6 text-primary mt-1" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-foreground/70">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
