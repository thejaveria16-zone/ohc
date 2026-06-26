import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: '#1A0F08',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        gap: '2rem',
      }}
    >
      <motion.img
        src="/logo.png"
        alt="OHC"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        style={{ height: '80px' }}
      />
      <motion.div
        style={{
          width: '200px', height: '1px',
          background: 'rgba(200,148,58,0.2)',
          position: 'relative', overflow: 'hidden',
        }}
      >
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(90deg, transparent, #C8943A, transparent)',
          }}
        />
      </motion.div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        style={{
          fontFamily: "'Jost', sans-serif",
          fontSize: '0.65rem', letterSpacing: '0.35em',
          textTransform: 'uppercase', color: 'rgba(200,148,58,0.6)',
        }}
      >One Hand Control</motion.span>
    </motion.div>
  );
}
