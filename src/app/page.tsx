'use client';

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip,
  ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, LabelList
} from 'recharts';

const COLORS = ['#23314c', '#6e62a3', '#23314c'];

export default function FranchiseDashboard() {
  const complianceScoresData = [
    { name: 'Food Quality', score: 91 },
    { name: 'Kitchen Perf.', score: 89 },
    { name: 'Loyalty Program', score: 75 },
    { name: 'Operational Comp.', score: 93 },
  ];

  const avgPrepTimeByOrderType = [
    { name: 'Dine-in', time: 11 },
    { name: 'Pickup', time: 9 },
    { name: 'Delivery', time: 14 },
  ];

  const orderVolumeTrends = [
    { day: 'Mon', orders: 120 },
    { day: 'Tue', orders: 150 },
    { day: 'Wed', orders: 100 },
  ];

  const revenueByBranch = [
    { name: 'Branch 1', revenue: 300000 },
    { name: 'Branch 2', revenue: 270000 },
    { name: 'Branch 3', revenue: 280000 },
  ];

  const recipeCompliance = [
    { name: 'Branch 1', compliance: 90 },
    { name: 'Branch 2', compliance: 85 },
    { name: 'Branch 3', compliance: 88 },
  ];

  const kpis = [
    { title: "Total Sales (MTD / YTD)", value: "SAR 850,000 / SAR 5.2M" },
    { title: "Avg Recipe Compliance", value: "88%" },
    { title: "Avg Prep Time", value: "12 min" },
    { title: "Royalty Collection", value: "78%" },
  ];

  const operationalHealthMetrics = [
    { label: "Order Accuracy Rate", value: "96%" },
    { label: "Delayed Orders", value: "2.1%" },
    { label: "Table Turnover Rate", value: "4.3/hr" },
  ];

  const inventoryMetrics = [
    { label: "Low Stock Alerts", value: "3 items" },
    { label: "Waste %", value: "4.5%" },
    { label: "Expired Inventory Loss", value: "SAR 1,200" },
  ];

  const branches = [
    {
      name: 'Branch 1',
      revenue: 'SAR 300,000',
      compliance: '90%',
      avgPrepTime: '11 min',
      alerts: '1'
    },
    {
      name: 'Branch 2',
      revenue: 'SAR 270,000',
      compliance: '85%',
      avgPrepTime: '13 min',
      alerts: '0'
    },
    {
      name: 'Branch 3',
      revenue: 'SAR 280,000',
      compliance: '88%',
      avgPrepTime: '12 min',
      alerts: '2'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6 space-y-10">
      <h1 className="text-3xl font-semibold mb-6">Franchise Dashboard</h1>

      {/* A. Overview & KPIs Section */}
      <section>
        <h2 className="text-xl font-bold mb-4">Overview & KPIs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {kpis.map((kpi) => (
            <Card key={kpi.title} className="shadow-md">
              <CardContent className="p-4">
                <h3 className="text-sm text-gray-500">{kpi.title}</h3>
                <p className="text-xl font-semibold">{kpi.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* B. Operational Health Section */}
      <section>
        <h2 className="text-xl font-bold mb-4">Operational Health</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {operationalHealthMetrics.map(metric => (
            <Card key={metric.label} className="shadow-md">
              <CardContent>{metric.label}: {metric.value}</CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="shadow-md">
            <CardContent>
              <h3 className="font-medium mb-2">Avg Prep Time by Order Type</h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={avgPrepTimeByOrderType}>
                  <XAxis dataKey="name" /><YAxis /><Tooltip />
                  <Bar dataKey="time" fill={COLORS[0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          <Card className="shadow-md">
            <CardContent>
              <h3 className="font-medium mb-2">Order Volume Trends</h3>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={orderVolumeTrends}>
                  <XAxis dataKey="day" /><YAxis /><Tooltip />
                  <Line type="monotone" dataKey="orders" stroke={COLORS[1]} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* C. Financial Performance Section */}
      <section>
        <h2 className="text-xl font-bold mb-4">Financial Performance</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="shadow-md">
            <CardContent>
              <h3 className="font-medium mb-2">Revenue by Branch</h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={revenueByBranch}>
                  <XAxis dataKey="name" /><YAxis /><Tooltip />
                  <Bar dataKey="revenue" fill={COLORS[2]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          <Card className="shadow-md">
            <CardContent>
              <p>Refund Rate: 1.2%</p>
              <p>Royalty Compliance: 92%</p>
              <p>Net Profit Margin: 18.6%</p>
              <p>Operating Expenses: SAR 152,000</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* D. Inventory & Recipe Control Section */}
      <section>
        <h2 className="text-xl font-bold mb-4">Inventory & Recipe Control</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {inventoryMetrics.map(item => (
            <Card key={item.label} className="shadow-md">
              <CardContent>{item.label}: {item.value}</CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="shadow-md">
            <CardContent>
              <h3 className="font-medium mb-2">Recipe Compliance %</h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={recipeCompliance}>
                  <XAxis dataKey="name" /><YAxis /><Tooltip />
                  <Bar dataKey="compliance" fill={COLORS[1]}>
                    <LabelList dataKey="compliance" position="insideTop" fill="#fff" />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          <Card className="shadow-md">
            <CardContent>Ingredient Variance Report Available</CardContent>
          </Card>
        </div>
      </section>

      {/* E. Compliance Section */}
      <section>
        <h2 className="text-xl font-bold mb-4">Compliance & Scores</h2>
        <Card className="shadow-md">
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={complianceScoresData}>
                <XAxis dataKey="name" />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Bar dataKey="score" fill={COLORS[0]}>
                  <LabelList dataKey="score" position="insideTop" fill="#fff" />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </section>

      {/* F. Branch Overview */}
      <section>
        <h2 className="text-xl font-bold mb-4">Branches Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {branches.map(branch => (
            <Card key={branch.name} className="shadow-md">
              <CardContent className="space-y-2">
                <h3 className="text-lg font-semibold">{branch.name}</h3>
                <p>Revenue: {branch.revenue}</p>
                <p>Recipe Compliance: {branch.compliance}</p>
                <p>Avg Prep Time: {branch.avgPrepTime}</p>
                <p>Open Alerts: {branch.alerts}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
