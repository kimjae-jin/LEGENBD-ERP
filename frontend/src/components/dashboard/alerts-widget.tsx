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
          <CardTitle>시스템 알림</CardTitle> {/* 'System Alerts' -> '시스템 알림' */}
        </div>
        <CardDescription>
          주목해야 할 알림들을 표시합니다. {/* 'Notifications requiring your attention.' -> '주목해야 할 알림들을 표시합니다.' */}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-center text-sm text-muted-foreground py-8">
          <p>현재 활성 알림이 없습니다.</p> {/* 'No active alerts.' -> '현재 활성 알림이 없습니다.' */}
          <p className="mt-1">*라이선스 및 자격 만료 경고가 여기에 표시됩니다.*</p> {/* '*License and qualification expiry warnings will appear here.*' -> '*라이선스 및 자격 만료 경고가 여기에 표시됩니다.*' */}
        </div>
      </CardContent>
    </Card>
  );
}