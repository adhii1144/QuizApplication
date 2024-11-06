import { motion } from 'framer-motion';
import { forwardRef } from 'react';

interface DataPointProps {
  id: string;
  value: number;
  timestamp: string;
}

export const DataPoint = forwardRef<HTMLDivElement, DataPointProps>(
  ({ value, timestamp }, ref) => {
    return (
      <motion.div
        ref={ref}
        layout
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        className="bg-gray-50 rounded-lg p-4 shadow-sm border border-gray-100"
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center"
            >
              <span className="text-blue-600 font-semibold">{value}</span>
            </motion.div>
            <div className="flex flex-col">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-sm text-gray-600"
              >
                {new Date(timestamp).toLocaleTimeString()}
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-xs text-gray-400"
              >
                Value: {value}
              </motion.span>
            </div>
          </div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className={`w-3 h-3 rounded-full ${
              value > 50 ? 'bg-green-500' : 'bg-yellow-500'
            }`}
          />
        </div>
      </motion.div>
    );
  }
);