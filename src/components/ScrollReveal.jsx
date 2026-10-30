import React from 'react';
import { motion } from 'framer-motion';

/**
 * ScrollReveal / MotionCard Component powered by Framer Motion
 * Configured for visibly slow, cinematic emergence with blur-to-clear and silky easing
 */
export const MotionCard = ({
  children,
  className = '',
  delay = 0.1,
  duration = 1.6,
  y = 45,
  blur = 4,
  amount = 0.35,
  margin = '0px 0px -80px 0px',
  ...props
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: y, filter: `blur(${blur}px)` }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: amount, margin: margin }}
      transition={{
        duration: duration,
        ease: [0.16, 1, 0.3, 1],
        delay: delay,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const ScrollReveal = MotionCard;
export { motion };
