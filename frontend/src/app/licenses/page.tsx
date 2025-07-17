// 파일 경로: frontend/src/app/licenses/page.tsx

import { ShieldCheck } from 'lucide-react';

export default function LicensesPage() {
  return (
    <div>
      {/* 페이지 헤더 */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 flex items-center">
          <ShieldCheck className="mr-3 h-8 w-8 text-green-500" />
          면허 / 장비 관리
        </h1>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          회사가 보유한 각종 업무 면허와 관련 장비의 현황 및 이력을 관리합니다.
        </p>
      </div>

      {/* 실제 콘텐츠가 들어갈 영역 */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <p>여기에 면허 목록과 각 면허에 종속된 장비 목록이 표시될 예정입니다.</p>
        {/* 예: <LicenseDataTable /> */}
      </div>
    </div>
  );
}