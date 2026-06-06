import React, { forwardRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export const FadeUp = forwardRef(function FadeUp({
  children,
  className,
  delay = 0,
  offset = -24,
  amount = 0.22,
  transition,
  viewport,
  ...props
}, ref) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, y: offset }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount, ...viewport }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay,
        ...transition,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
});
