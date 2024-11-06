import { motion } from 'framer-motion';
import { useState } from 'react';
import { StatCard } from './StatCard';
import { ParticipantsGraph } from './ParticipantsGraph';
import { QuizSelector } from './QuizSelector';
import { Sidebar } from './Sidebar';
import { ProfileModal } from './Profile/ProfileModal';
import { useAuth } from '../context/AuthContext';

export default function Dashboard() {
  const { user, logout, updateProfile } = useAuth();
  const [selectedQuiz, setSelectedQuiz] = useState('Basics of IT');
  const [startDate, setStartDate] = useState('2024-01-20');
  const [endDate, setEndDate] = useState('2024-01-27');
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  const stats = {
    attemptsToday: 4567,
    participantsToday: 4567,
    totalParticipants: 4567,
    numberParticipants: 1234,
    averageScore: 1234,
    averageTime: '2m 33s',
    quizName: 'Basics of IT'
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          <header className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-semibold text-gray-800">Dynamic Campaign</h1>
              <span className="text-gray-500">›</span>
              <h2 className="text-2xl font-semibold text-gray-800">Quiz</h2>
            </div>
            <div className="flex items-center gap-4">
              <div 
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => setIsProfileModalOpen(true)}
              >
                <img
                  src={user?.avatar}
                  alt="User avatar"
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-gray-700">{user?.name}</span>
              </div>
              <button 
                onClick={logout}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
              >
                Logout
              </button>
            </div>
          </header>

          <div className="grid grid-cols-3 gap-6 mb-8">
            <StatCard
              title="Quiz Attempts Today"
              value={stats.attemptsToday}
              date="Sep 16, 2019"
              bgColor="bg-red-400"
            />
            <StatCard
              title="New Participants Today"
              value={stats.participantsToday}
              date="Sep 16, 2019"
              bgColor="bg-blue-400"
            />
            <StatCard
              title="Total Participants"
              value={stats.totalParticipants}
              date="Sep 16, 2019"
              bgColor="bg-orange-400"
            />
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-gray-800">Quiz Starts</h3>
              <QuizSelector value={selectedQuiz} onChange={setSelectedQuiz} />
            </div>

            <div className="grid grid-cols-4 gap-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Number Of Participants</p>
                  <p className="text-xl font-semibold">{stats.numberParticipants}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Average Score</p>
                  <p className="text-xl font-semibold">{stats.averageScore}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Average Time</p>
                  <p className="text-xl font-semibold">{stats.averageTime}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Quiz Name</p>
                  <p className="text-xl font-semibold">{stats.quizName}</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Unique Participants</h3>
                <p className="text-sm text-gray-500">Number of Participants over time</p>
              </div>

              <div className="flex gap-4 mb-6">
                <div>
                  <label className="block text-sm text-gray-500 mb-1">Start Date</label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="border rounded-md px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-500 mb-1">End Date</label>
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="border rounded-md px-3 py-2"
                  />
                </div>
                <button className="mt-6 px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors">
                  Load Data
                </button>
              </div>

              <ParticipantsGraph startDate={startDate} endDate={endDate} />
            </div>
          </div>
        </div>
      </div>

      {user && (
        <ProfileModal
          isOpen={isProfileModalOpen}
          onClose={() => setIsProfileModalOpen(false)}
          userData={{
            name: user.name,
            email: user.email,
            avatar: user.avatar
          }}
          onUpdate={updateProfile}
        />
      )}
    </div>
  );
}