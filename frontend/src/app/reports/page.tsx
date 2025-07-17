// 파일 경로: frontend/src/app/reports/page.tsx

import { CalendarCheck2 } from 'lucide-react';

export default function ReportsPage() {
  return (
    <div>
      {/* 페이지 헤더 */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 flex items-center">
          <CalendarCheck2 className="mr-3 h-8 w-8 text-purple-500" />
          주간회의 / 보고
        </h1>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          주간 회의 자료를 생성하고, 프로젝트별 주요 보고 사항을 확인합니다.
        </p>
      </div>

      {/* 실제 콘텐츠가 들어갈 영역 */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <p>여기에 주간 보고서 생성 기능 및 과거 보고서 목록이 표시될 예정입니다.</p>
        {/* 예: <WeeklyReportGenerator /> */}
      </div>
    </div>
  );
}