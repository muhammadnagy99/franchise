'use client'

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";
import { motion } from "framer-motion";

// Type definitions
interface KPI {
  label: string;
  value: string;
}

interface RefundData {
  branch: string;
  refund: number;
}

interface ProfitData {
  branch: string;
  profit: number;
}

interface RevenueData {
  branch: string;
  revenue: number;
}

interface RevenueAllocationData {
  branch: string;
  company1: number;
  company2: number;
}

interface PrepTimeData {
  name: string;
  DineIn: number;
  Delivery: number;
  Pickup: number;
}

interface ComplianceScore {
  label: string;
  value: number;
}

interface BranchOverview {
  name: string;
  sales: string;
  rating: number;
  compliance: string;
  tag: string;
}

const Dashboard: React.FC = () => {
  const overviewKPIs: KPI[] = [
    { label: "Sales MTD", value: "SAR 94,235" },
    { label: "Sales YTD", value: "SAR 1,002,113" },
    { label: "Avg Recipe Compliance", value: "91.6%" },
    { label: "Avg Prep Time", value: "11:42 mins" },
    { label: "Royalty Collection", value: "SAR 14,020" },
    { label: "Refund Rate", value: "1.2%" },
    { label: "Net Profit Margin", value: "18.6%" },
    { label: "Operating Expenses", value: "SAR 152,000" },
    { label: "Average Order Value", value: "SAR 54.30" },
  ];

  const refundByBranch: RefundData[] = [
    { branch: "Al Malaz", refund: 1.1 },
    { branch: "Olaya", refund: 1.3 },
    { branch: "Al Nakheel", refund: 1.2 },
  ];

  const netProfitByBranch: ProfitData[] = [
    { branch: "Al Malaz", profit: 19.0 },
    { branch: "Olaya", profit: 17.8 },
    { branch: "Al Nakheel", profit: 20.2 },
  ];

  const revenueByBranch: RevenueData[] = [
    { branch: "Al Malaz", revenue: 300000 },
    { branch: "Olaya", revenue: 225000 },
    { branch: "Al Nakheel", revenue: 275000 },
  ];

  const revenueAllocation: RevenueAllocationData[] = [
    { branch: "Al Malaz", company1: 240000, company2: 60000 },
    { branch: "Olaya", company1: 180000, company2: 45000 },
    { branch: "Al Nakheel", company1: 220000, company2: 55000 },
  ];

  const inventoryKPIs: KPI[] = [
    { label: "Waste %", value: "2.4%" },
    { label: "Expired Inventory Loss", value: "SAR 3,240" },
    { label: "Recipe Compliance per Branch", value: "88% - 93%" },
    { label: "Stock Turnover Rate", value: "4.3" },
    { label: "Low Stock Alerts", value: "12 items" },
    { label: "Out-of-Stock Items", value: "4 items" },
    { label: "Ingredient Variance", value: "5 flagged" },
  ];

  const avgPrepTimeByBranch: PrepTimeData[] = [
    { name: "Al Malaz", DineIn: 12, Delivery: 14, Pickup: 10 },
    { name: "Olaya", DineIn: 11, Delivery: 13, Pickup: 9 },
    { name: "Al Nakheel", DineIn: 10, Delivery: 12, Pickup: 8 },
  ];

  const operationalKPIs: KPI[] = [
    { label: "Order Accuracy Rate", value: "96.3%" },
    { label: "Delayed Orders", value: "12" },
    { label: "Table Turnover Rate", value: "4.6" },
  ];

  const complianceScores: ComplianceScore[] = [
    { label: "Food Quality", value: 82 },
    { label: "Kitchen Performance", value: 89 },
    { label: "Operational Compliance", value: 86 },
    { label: "Loyalty Program", value: 73 },
    { label: "Google Maps Reviews", value: 91 },
  ];

  const branchesOverview: BranchOverview[] = [
    { name: "Al Malaz", sales: "SAR 25,020", rating: 4.3, compliance: "92%", tag: "High Performer" },
    { name: "Olaya", sales: "SAR 18,340", rating: 4.6, compliance: "88%", tag: "Stable" },
    { name: "Al Nakheel", sales: "SAR 32,710", rating: 4.5, compliance: "91%", tag: "Focus Area" },
  ];

  const getStatusLabel = (score: number): string => {
    if (score < 75) return "Not compliant";
    if (score >= 75 && score < 85) return "Partially compliant";
    return "Compliant";
  };

  const getStatusColor = (score: number): string => {
    if (score < 75) return "bg-red-500";
    if (score >= 75 && score < 85) return "bg-yellow-500";
    return "bg-green-500";
  };

  return (
    <div className="grid gap-10 p-4 md:p-8 w-full">
      {/* Overview Section */}
      <section className="grid gap-4">
        <motion.h2 className="text-xl font-semibold">📊 Overview & KPIs</motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {overviewKPIs.map((kpi: KPI, idx: number) => (
            <Card key={idx} className="shadow-md">
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground mb-1">{kpi.label}</p>
                <p className="text-xl font-bold">{kpi.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Operational Health */}
      <section className="grid gap-4">
        <motion.h2 className="text-xl font-semibold">⚙️ Operational Health</motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {operationalKPIs.map((item: KPI, idx: number) => (
            <Card key={idx} className="shadow">
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                <p className="text-xl font-bold">{item.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <Card className="shadow">
          <CardContent className="p-4">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={avgPrepTimeByBranch}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="DineIn" stackId="a" fill="#23314c" name="Dine-in" />
                <Bar dataKey="Delivery" stackId="a" fill="#6e62a3" name="Delivery" />
                <Bar dataKey="Pickup" stackId="a" fill="#999" name="Pickup" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </section>

      {/* Financial Performance */}
      <section className="grid gap-4">
        <motion.h2 className="text-xl font-semibold">💰 Financial Performance</motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Card className="shadow">
            <CardContent className="p-4">
              <p className="text-sm font-medium mb-2">Revenue by Branch (SAR)</p>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={revenueByBranch}>
                  <XAxis dataKey="branch" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="revenue" fill="#23314c" name="Total Revenue" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="shadow">
            <CardContent className="p-4">
              <p className="text-sm font-medium mb-2">Revenue Allocation</p>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={revenueAllocation}>
                  <XAxis dataKey="branch" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="company1" stackId="a" fill="#23314c" name="Company 1" />
                  <Bar dataKey="company2" stackId="a" fill="#6e62a3" name="Company 2" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Card className="shadow">
            <CardContent className="p-4">
              <p className="text-sm font-medium mb-2">Refund Rate by Branch</p>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={refundByBranch}>
                  <XAxis dataKey="branch" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="refund" fill="#f59e0b" name="Refund Rate (%)" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="shadow">
            <CardContent className="p-4">
              <p className="text-sm font-medium mb-2">Net Profit Margin by Branch</p>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={netProfitByBranch}>
                  <XAxis dataKey="branch" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="profit" fill="#10b981" name="Net Profit (%)" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Inventory & Recipe Control */}
      <section className="grid gap-4">
        <motion.h2 className="text-xl font-semibold">📦 Inventory & Recipe Control</motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {inventoryKPIs.map((item: KPI, idx: number) => (
            <Card key={idx} className="shadow">
              <CardContent className="p-4">
                <p className="text-muted-foreground text-sm mb-1">{item.label}</p>
                <p className="text-xl font-bold">{item.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Compliance & Scores */}
      <section className="grid gap-4">
        <motion.h2 className="text-xl font-semibold">✅ Compliance & Scores</motion.h2>
        <Card className="shadow">
          <CardContent className="p-4">
            <div className="space-y-3">
              {complianceScores.map((score: ComplianceScore, idx: number) => (
                <div key={idx} className="flex items-center justify-between">
                  <p className="text-sm w-40">{score.label}</p>
                  <div className="w-full h-2 bg-muted rounded-full mx-4 relative">
                    <div className={`h-2 ${getStatusColor(score.value)} rounded-full`} style={{ width: `${score.value}%` }} />
                    <span className="absolute -top-5 right-0 text-xs text-muted-foreground">
                      {getStatusLabel(score.value)}
                    </span>
                  </div>
                  <span className="text-sm font-medium w-8 text-right">{score.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Branches Overview */}
      <section className="grid gap-4">
        <motion.h2 className="text-xl font-semibold">🏪 Branches Overview</motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {branchesOverview.map((branch: BranchOverview, idx: number) => (
            <Card key={idx} className="border border-muted shadow-sm hover:shadow-md transition">
              <CardContent className="p-4 space-y-1">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">{branch.name}</h3>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                    {branch.tag}
                  </span>
                </div>
                <p className="text-sm">Sales: {branch.sales}</p>
                <p className="text-sm">Rating: {branch.rating} ⭐</p>
                <p className="text-sm">Compliance: {branch.compliance}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;