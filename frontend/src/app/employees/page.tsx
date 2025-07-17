// 파일 경로: frontend/src/app/employees/page.tsx

import { Users } from 'lucide-react';

export default function EmployeesPage() {
  return (
    <div>
      {/* 페이지 헤더 */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 flex items-center">
          <Users className="mr-3 h-8 w-8 text-blue-500" />
          기술인 관리
        </h1>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          회사의 모든 기술 인력 정보를 관리하고 자격 및 경력을 추적합니다.
        </p>
      </div>

      {/* 실제 콘텐츠가 들어갈 영역 (지금은 비어 있음) */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <p>여기에 기술인 목록을 보여주는 표(Table)가 들어올 예정입니다.</p>
        {/* 예: <EmployeeDataTable /> */}
      </div>
    </div>
  );
}