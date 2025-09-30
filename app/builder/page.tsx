'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function BuilderPage() {
  const [selectedTab, setSelectedTab] = useState('dashboard');

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'projects', label: 'Projects', icon: '📁' },
    { id: 'analytics', label: 'Analytics', icon: '📈' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
  ];

  const dashboardCards = [
    { title: 'Total Users', value: '12,543', change: '+12.5%', color: 'from-blue-500 to-blue-600' },
    { title: 'Revenue', value: '$45,231', change: '+8.2%', color: 'from-green-500 to-green-600' },
    { title: 'Active Projects', value: '28', change: '+3', color: 'from-purple-500 to-purple-600' },
    { title: 'Completion Rate', value: '94%', change: '+2.1%', color: 'from-pink-500 to-pink-600' },
  ];

  const projectsData = [
    { name: 'E-Commerce Platform', status: 'In Progress', progress: 75, team: 5 },
    { name: 'Mobile App Development', status: 'In Progress', progress: 60, team: 4 },
    { name: 'Website Redesign', status: 'Completed', progress: 100, team: 3 },
    { name: 'API Integration', status: 'Planning', progress: 20, team: 2 },
    { name: 'Cloud Migration', status: 'In Progress', progress: 45, team: 6 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Project Builder
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Manage and track your projects with our comprehensive builder tool
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg mb-8">
          <div className="flex flex-wrap border-b border-gray-200 dark:border-gray-700">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-4 font-medium transition-colors ${
                  selectedTab === tab.id
                    ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600'
                    : 'text-gray-600 dark:text-gray-400 hover:text-blue-500'
                }`}
              >
                <span className="text-xl">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {selectedTab === 'dashboard' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Overview
                </h2>
                
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  {dashboardCards.map((card, index) => (
                    <motion.div
                      key={card.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`bg-gradient-to-br ${card.color} p-6 rounded-xl text-white shadow-lg`}
                    >
                      <div className="text-sm opacity-90 mb-1">{card.title}</div>
                      <div className="text-3xl font-bold mb-2">{card.value}</div>
                      <div className="text-sm">
                        <span className="bg-white/20 px-2 py-1 rounded">{card.change}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Recent Activity */}
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Recent Activity
                  </h3>
                  <div className="space-y-3">
                    {[1, 2, 3, 4].map((item) => (
                      <div key={item} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <div className="flex-1">Activity item placeholder {item}</div>
                        <div className="text-sm text-gray-500">2h ago</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {selectedTab === 'projects' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Projects
                  </h2>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    + New Project
                  </button>
                </div>

                {/* Projects Table */}
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-100 dark:bg-gray-700">
                      <tr>
                        <th className="text-left p-4 text-gray-700 dark:text-gray-300 font-semibold">Project Name</th>
                        <th className="text-left p-4 text-gray-700 dark:text-gray-300 font-semibold">Status</th>
                        <th className="text-left p-4 text-gray-700 dark:text-gray-300 font-semibold">Progress</th>
                        <th className="text-left p-4 text-gray-700 dark:text-gray-300 font-semibold">Team Size</th>
                      </tr>
                    </thead>
                    <tbody>
                      {projectsData.map((project, index) => (
                        <tr key={index} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                          <td className="p-4 text-gray-900 dark:text-white font-medium">{project.name}</td>
                          <td className="p-4">
                            <span className={`px-3 py-1 rounded-full text-sm ${
                              project.status === 'Completed' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                              project.status === 'In Progress' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                              'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                            }`}>
                              {project.status}
                            </span>
                          </td>
                          <td className="p-4">
                            <div className="flex items-center gap-2">
                              <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                <div 
                                  className="bg-blue-600 h-2 rounded-full" 
                                  style={{ width: `${project.progress}%` }}
                                ></div>
                              </div>
                              <span className="text-sm text-gray-600 dark:text-gray-400">{project.progress}%</span>
                            </div>
                          </td>
                          <td className="p-4 text-gray-700 dark:text-gray-300">{project.team} members</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}

            {selectedTab === 'analytics' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Analytics Dashboard
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg h-64 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">📊</div>
                      <p className="text-gray-600 dark:text-gray-400">Chart Placeholder</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg h-64 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">📈</div>
                      <p className="text-gray-600 dark:text-gray-400">Graph Placeholder</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {selectedTab === 'settings' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Settings
                </h2>
                <div className="space-y-6">
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      General Settings
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-gray-700 dark:text-gray-300 mb-2">Project Name</label>
                        <input 
                          type="text" 
                          placeholder="Enter project name" 
                          className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 dark:text-gray-300 mb-2">Description</label>
                        <textarea 
                          placeholder="Enter project description" 
                          rows={4}
                          className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                        ></textarea>
                      </div>
                      <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
