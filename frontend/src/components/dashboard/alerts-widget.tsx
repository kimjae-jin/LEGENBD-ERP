/**
 * @fileoverview A widget to display important system alerts.
 * Placeholder for now, to be implemented with real-time data later.
 */

import { AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export function AlertsWidget() {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center gap-3">
          <AlertTriangle className="h-6 w-6 text-yellow-500" />
          <CardTitle>System Alerts</CardTitle>
        </div>
        <CardDescription>
          Notifications requiring your attention.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-center text-sm text-muted-foreground py-8">
          <p>No active alerts.</p>
          <p className="mt-1">*License and qualification expiry warnings will appear here.*</p>
        </div>
      </CardContent>
    </Card>
  );
}
