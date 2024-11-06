import { motion } from 'framer-motion';

interface StatCardProps {
  title: string;
  value: number;
  date: string;
  bgColor: string;
}

export function StatCard({ title, value, date, bgColor }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`${bgColor} rounded-lg p-6 text-white`}
    >
      <p className="text-sm opacity-90 mb-1">{date}</p>
      <h3 className="text-3xl font-bold mb-2">{value}</h3>
      <p className="text-sm opacity-90">{title}</p>
    </motion.div>
  );
}