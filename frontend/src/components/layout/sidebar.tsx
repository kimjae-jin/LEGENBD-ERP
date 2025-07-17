// 파일 경로: frontend/src/components/layout/sidebar.tsx

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,  // 대시보드
  Briefcase,        // 프로젝트
  FileText,         // 계약/견적
  Building2,        // 거래처
  Users,            // 직원(기술인)
  ShieldCheck,      // 면허/자격
  CalendarCheck2,   // 주간회의
  UserCircle,       // 프로필 아이콘
  Menu,             // 모바일 메뉴
} from 'lucide-react';
import ThemeToggle from '@/components/common/ThemeToggle'; // 다크/라이트 모드 토글
import { Button } from '@/components/ui/button'; // shadcn/ui 버튼

// 기획서 기반으로 재구성된 네비게이션 링크
const navLinks = [
  { href: '/dashboard', label: '대시보드', icon: LayoutDashboard },
  { href: '/projects', label: '프로젝트 관리', icon: Briefcase },
  { href: '/contracts', label: '계약/청구', icon: FileText },
  { href: '/clients', label: '거래처 관리', icon: Building2 },
  { href: '/employees', label: '기술인 관리', icon: Users },
  { href: '/licenses', label: '면허/장비', icon: ShieldCheck },
  { href: '/reports', label: '주간회의/보고', icon: CalendarCheck2 },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 flex-shrink-0 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col">
      {/* 로고 영역 */}
      <div className="h-16 flex items-center justify-center border-b border-gray-200 dark:border-gray-700">
        <Link href="/dashboard" className="text-xl font-bold text-gray-800 dark:text-gray-100">
          LEGEND ERP
        </Link>
      </div>

      {/* 메뉴 리스트 */}
      <nav className="flex-grow p-4">
        <ul>
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <li key={link.href} className="mb-2">
                <Link
                  href={link.href}
                  className={`flex items-center p-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
  isActive
    ? 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 font-semibold shadow-inner'
    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
}`}
                >
                  <link.icon className="h-5 w-5 mr-3 flex-shrink-0" />
                  <span>{link.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* 하단 사용자 프로필 및 테마 토글 */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center">
            <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center">
                    <UserCircle className="h-6 w-6 text-gray-500 dark:text-gray-300" />
                </div>
                <div className="ml-3">
                    <p className="text-sm font-semibold text-gray-800 dark:text-gray-100 whitespace-nowrap">김재진 님</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">관리자</p>
                </div>
            </div>
            <ThemeToggle />
        </div>
      </div>
    </aside>
  );
}