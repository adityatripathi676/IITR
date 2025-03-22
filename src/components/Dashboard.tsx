import React from 'react';
import { LineChart, BarChart, Activity, Award } from 'lucide-react';

const Dashboard = () => {
  return (
    <section id="dashboard" className="section-padding">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Analytics Dashboard
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Monitor your carbon offset generation and trading activities with our comprehensive dashboard.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Main Chart */}
          <div className="dashboard-card col-span-2 h-[400px] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
            <div className="relative z-10 p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <LineChart className="w-6 h-6 text-primary" />
                Carbon Offset Generation
              </h3>
              <div className="h-[300px] flex items-center justify-center">
                <p className="text-gray-500">Chart visualization will be implemented here</p>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="dashboard-card">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <BarChart className="w-6 h-6 text-primary" />
              Trading Performance
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">Total Credits Traded</p>
                <p className="text-2xl font-bold">1,234 tCO2e</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">Revenue Generated</p>
                <p className="text-2xl font-bold">$45,678</p>
              </div>
            </div>
          </div>

          <div className="dashboard-card">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Activity className="w-6 h-6 text-primary" />
              System Performance
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">Active IoT Devices</p>
                <p className="text-2xl font-bold">24 Devices</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">System Uptime</p>
                <p className="text-2xl font-bold">99.9%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;