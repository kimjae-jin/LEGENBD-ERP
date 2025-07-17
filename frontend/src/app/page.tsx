// src/app/page.tsx
'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign, Users, Package, TrendingUp, ClipboardList } from 'lucide-react'; // ClipboardList 임포트 추가

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">통합 현황</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {/* 총 프로젝트 카드 */}
        <Card className="bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-700 dark:text-gray-300">총 프로젝트</CardTitle>
            <ClipboardList className="h-4 w-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">12</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">+20.1% from last month</p>
          </CardContent>
        </Card>

        {/* 총 계약 금액 카드 */}
        <Card className="bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-700 dark:text-gray-300">총 계약 금액</CardTitle>
            <DollarSign className="h-4 w-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">₩ 82,500,000</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">+15.3% from last month</p>
          </CardContent>
        </Card>

        {/* 활성 고객 수 카드 */}
        <Card className="bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-700 dark:text-gray-300">활성 고객 수</CardTitle>
            <Users className="h-4 w-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">3</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">총 45명</p>
          </CardContent>
        </Card>

        {/* 완료된 프로젝트 카드 */}
        <Card className="bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-700 dark:text-gray-300">완료된 프로젝트</CardTitle>
            <Package className="h-4 w-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">8</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">총 12개 프로젝트</p>
          </CardContent>
        </Card>
      </div>

      {/* 기타 대시보드 콘텐츠 (예시) */}
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <Card className="col-span-2 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-gray-100">최근 활동</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="text-gray-700 dark:text-gray-300">
              <li>프로젝트 '제주 스마트시티 구축' 계약 변경 (금액, 기간 조정)</li>
              <li>새로운 거래처 '한라개발' 등록</li>
              <li>'해안도로 정비사업' 착수계 제출 완료</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}