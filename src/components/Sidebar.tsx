import { motion } from 'framer-motion';

export function Sidebar() {
  const menuItems = [
    { icon: '📚', label: 'Course Content' },
    { icon: '🎓', label: 'Academic' },
    { icon: '💡', label: 'Skill Development' },
    { icon: '📝', label: 'Admission' },
    { icon: '📊', label: 'Dynamic Campaign', active: true, subItems: ['Quiz'] },
    { icon: '🎧', label: 'Audio Book' },
    { icon: '📓', label: 'Student Note' },
    { icon: '📱', label: 'Media' },
    { icon: '👥', label: 'Team Page' },
  ];

  return (
    <div className="w-64 bg-gray-900 text-white p-6">
      <div className="mb-8">
        <img src="/logo.png" alt="10 Minute School" className="h-8" />
      </div>

      <nav>
        <ul className="space-y-4">
          {menuItems.map((item) => (
            <li key={item.label}>
              <motion.div
                whileHover={{ x: 4 }}
                className={`flex items-center gap-3 p-2 rounded-lg ${
                  item.active ? 'bg-gray-800' : 'hover:bg-gray-800'
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </motion.div>
              {item.active && item.subItems && (
                <ul className="ml-8 mt-2 space-y-2">
                  {item.subItems.map((subItem) => (
                    <li key={subItem}>
                      <motion.div
                        whileHover={{ x: 4 }}
                        className="flex items-center gap-3 p-2 rounded-lg bg-gray-800"
                      >
                        <span>{subItem}</span>
                      </motion.div>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}