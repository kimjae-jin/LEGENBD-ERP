/**
 * @fileoverview A component to generate and download the weekly meeting report.
 */
'use client'; // This component requires client-side interactivity (state, event handlers)

import { useState } from 'react';
import { Download, Loader2, FileText, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { automationService } from '@/services/automation.service';

export function WeeklyReportGenerator() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /**
   * Handles the report generation and download process.
   */
  const handleGenerateReport = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const reportData = await automationService.generateWeeklyReport();
      
      // Convert the JSON object to a string
      const jsonString = JSON.stringify(reportData, null, 2);
      
      // Create a Blob from the JSON string
      const blob = new Blob([jsonString], { type: 'application/json' });
      
      // Create a URL for the Blob
      const url = window.URL.createObjectURL(blob);
      
      // Create a temporary anchor element to trigger the download
      const a = document.createElement('a');
      a.href = url;
      const today = new Date().toISOString().split('T')[0]; // Format: YYYY-MM-DD
      a.download = `legend-erp-weekly-report-${today}.json`;
      document.body.appendChild(a);
      a.click();
      
      // Clean up by removing the anchor and revoking the URL
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);

    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center gap-3">
          <FileText className="h-6 w-6 text-primary" />
          <CardTitle>주간 보고서</CardTitle> {/* 'Weekly Report' -> '주간 보고서' */}
        </div>
        <CardDescription>
          주간 회의를 위한 최근 프로젝트 노트 요약을 생성합니다. {/* 'Generate a summary of recent project notes for the weekly meeting.' -> '주간 회의를 위한 최근 프로젝트 노트 요약을 생성합니다.' */}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center gap-4 pt-4">
        <Button 
          onClick={handleGenerateReport} 
          disabled={isLoading}
          className="w-full sm:w-auto"
        >
          {isLoading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Download className="mr-2 h-4 w-4" />
          )}
          {isLoading ? '생성 중...' : '보고서 생성 및 다운로드'} {/* 'Generating...' / 'Generate & Download Report' -> '생성 중...' / '보고서 생성 및 다운로드' */}
        </Button>
        {error && (
          <div className="text-sm text-red-500 dark:text-red-400 flex items-center gap-2 mt-2">
            <AlertCircle className="h-4 w-4" />
            <p>오류: {error}</p> {/* 'Error: ' -> '오류: ' */}
          </div>
        )}
      </CardContent>
    </Card>
  );
}