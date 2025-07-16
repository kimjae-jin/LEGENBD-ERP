/**
 * @fileoverview The main dashboard page for Legend ERP.
 * Displays key metrics and action widgets.
 */

import { Metadata } from 'next';
import { AlertsWidget } from '@/components/dashboard/alerts-widget';
import { WeeklyReportGenerator } from '@/components/dashboard/weekly-report-generator';

export const metadata: Metadata = {
  title: 'Dashboard | Legend ERP',
  description: 'Overview of your business operations.',
};

export default function DashboardPage() {
  return (
    <div className="flex-1 space-y-4 p-4 sm:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        {/* Placeholder for future global actions, e.g., date range picker */}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        {/* Main content can be added here in a larger card */}
        <div className="lg:col-span-7">
          {/* A welcome card or primary data display can go here */}
        </div>

        {/* Automation and Alert Widgets */}
        <div className="lg:col-span-4">
            <AlertsWidget />
        </div>
        <div className="lg:col-span-3">
            <WeeklyReportGenerator />
        </div>

        {/* Other dashboard cards can be added below */}
        {/* <Card className="lg:col-span-3">...</Card>
        <Card className="lg:col-span-4">...</Card>
        */}
      </div>
    </div>
  );
}