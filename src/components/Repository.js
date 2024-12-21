import React from 'react';
import { RefreshCw, Plus, Search } from 'lucide-react';

const RepositoryContainer = () => {
  // Sample repository data
  const repositories = [
    { name: 'design-system', type: 'Public', language: 'React', size: '7320 KB', updatedAt: '1 day ago' },
    { name: 'codeant-ci-app', type: 'Private', language: 'Javascript', size: '5871 KB', updatedAt: '2 days ago' },
    { name: 'analytics-dashboard', type: 'Private', language: 'Python', size: '4521 KB', updatedAt: '5 days ago' },
    { name: 'mobile-app', type: 'Public', language: 'Swift', size: '3096 KB', updatedAt: '3 days ago' },
    { name: 'e-commerce-platform', type: 'Private', language: 'Java', size: '6210 KB', updatedAt: '6 days ago' },
    { name: 'blog-website', type: 'Public', language: 'HTML/CSS', size: '1876 KB', updatedAt: '4 days ago' },
    { name: 'social-network', type: 'Private', language: 'PHP', size: '5432 KB', updatedAt: '7 days ago' },
  ];

  return (
    <div className="h-screen overflow-y-auto bg-gray-50">
      <div className="max-w-5xl mx-auto p-4">
        <div className="bg-white rounded-lg shadow-sm">
          {/* Header */}
          <div className="p-4 border-b border-gray-100">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-semibold mb-1">Repositories</h1>
                <p className="text-gray-600 text-sm">{repositories.length} total repositories</p>
              </div>
              <div className="flex gap-2">
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50">
                  <RefreshCw size={18} />
                  <span>Refresh All</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
                  <Plus size={18} />
                  <span>Add Repository</span>
                </button>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="p-4 border-b border-gray-100 -my-5">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search Repositories"
                className="pl-8 pr-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Repository List */}
          <div className="p-4">
            <div className="space-y-3">
              {repositories.map((repo, index) => (
                <div 
                  key={index} 
                  className="border border-gray-100 rounded-lg p-3 hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-center justify-between mb-0">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-medium">{repo.name}</h3>
                      <span 
                        className={'px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800'}
                      >
                        {repo.type}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <span>{repo.language}</span>
                      <div 
                        className={'w-2 h-2 rounded-full bg-blue-500'}
                      ></div>
                    </div>
                    <span>{repo.size}</span>
                    <span>Updated {repo.updatedAt}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepositoryContainer;
