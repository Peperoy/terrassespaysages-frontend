import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

export default function LegalSection({ title, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-10"
    >
      <h2 className="text-xl font-display font-bold text-primary mb-4 pb-2 border-b-2 border-warm-200">
        {title}
      </h2>
      <div className="text-sm text-primary/70 font-body space-y-3 leading-relaxed">
        {children}
      </div>
    </motion.div>
  );
}

LegalSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
