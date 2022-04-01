import { ReactNode } from "react";
import { motion } from "framer-motion";

const variants = {
  initial: {
    opacity: 0,
    y: 8,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
};

export default function PageTransition({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return (
    <motion.div initial="initial" animate="enter" variants={variants}>
      {children}
    </motion.div>
  );
}
