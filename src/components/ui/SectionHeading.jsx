import { motion } from "framer-motion";

const SectionHeading = ({
  badge,
  title,
  description,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-16 text-center"
    >
      <span className="font-semibold uppercase tracking-[4px] text-cyan-400">
        {badge}
      </span>

      <h2 className="mt-4 text-4xl font-bold text-white lg:text-5xl">
        {title}
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-slate-400">
        {description}
      </p>
    </motion.div>
  );
};

export default SectionHeading;