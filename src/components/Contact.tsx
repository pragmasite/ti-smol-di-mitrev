import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: Phone,
      label: t.contact.phone,
      value: "+41 76 801 01 14",
      href: "tel:+41768010114",
    },
    {
      icon: Mail,
      label: t.contact.email,
      value: "lakimitrev@gmail.com",
      href: "mailto:lakimitrev@gmail.com",
    },
    {
      icon: MapPin,
      label: t.contact.address,
      value: "Via Vallemaggia 9, 6600 Locarno, CH",
      href: "https://maps.google.com/?q=Via+Vallemaggia+9,+6600+Locarno",
    },
  ];

  return (
    <section id="contatti" className="py-24 bg-muted" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">{t.contact.label}</span>
          <h2 className="font-serif text-3xl md:text-5xl mt-4">
            {t.contact.title1}
            <br />
            <span className="text-primary">{t.contact.title2}</span>
          </h2>
          <p className="text-lg text-foreground/70 mt-4 max-w-2xl mx-auto">
            {t.contact.description}
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={idx}
                  href={info.href}
                  target={info.label === t.contact.address ? "_blank" : undefined}
                  rel={info.label === t.contact.address ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
                  className="flex gap-4 p-6 rounded-xl border border-border bg-background hover:border-primary/50 hover:shadow-medium transition"
                >
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">{info.label}</p>
                    <p className="text-lg font-semibold text-foreground">{info.value}</p>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-2xl overflow-hidden border border-border shadow-medium h-96"
          >
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              title="Business Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2766.896947888892!2d8.78875!3d46.169543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478967c4e8f7cf4d%3A0x123456789!2sVia%20Vallemaggia%209%2C%206600%20Locarno!5e0!3m2!1sen!2sch!4v1234567890"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <a href="tel:+41768010114">
              <Phone className="mr-2 h-5 w-5" />
              {t.contact.cta}
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
