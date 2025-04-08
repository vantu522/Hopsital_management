// src/pages/admin/SettingsPage.tsx
import React, { useState } from 'react';

const SettingsPage: React.FC = () => {
  const [settings, setSettings] = useState({
    systemName: 'Hệ thống quản trị',
    require2FA: false,
    maintenanceMode: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Settings saved:', settings);
    // Gửi dữ liệu lên server ở đây
  };

  return (
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Cài đặt hệ thống</h1>
        
        <form onSubmit={handleSubmit} className="bg-white shadow rounded-lg p-6">
          <div className="space-y-6">
            {/* Phần cài đặt chung */}
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-3">Cài đặt chung</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label htmlFor="systemName" className="block text-sm font-medium text-gray-700">
                    Tên hệ thống
                  </label>
                  <input
                    id="systemName"
                    name="systemName"
                    type="text"
                    value={settings.systemName}
                    onChange={handleChange}
                    className="mt-1 block w-64 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
              </div>
            </div>
            
            {/* Phần bảo mật */}
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-3">Bảo mật</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label htmlFor="require2FA" className="block text-sm font-medium text-gray-700">
                    Yêu cầu xác thực 2 lớp
                  </label>
                  <input
                    id="require2FA"
                    name="require2FA"
                    type="checkbox"
                    checked={settings.require2FA}
                    onChange={handleChange}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <label htmlFor="maintenanceMode" className="block text-sm font-medium text-gray-700">
                    Chế độ bảo trì
                  </label>
                  <input
                    id="maintenanceMode"
                    name="maintenanceMode"
                    type="checkbox"
                    checked={settings.maintenanceMode}
                    onChange={handleChange}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                </div>
              </div>
            </div>
            
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Lưu thay đổi
              </button>
            </div>
          </div>
        </form>
      </div>
  );
};

export default SettingsPage;