export const fadeUp = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: [0.17, 0.67, 0.83, 0.67],
    },
  }),
};
