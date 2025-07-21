// 파일 경로: frontend/src/app/projects/page.tsx

import { getProjects } from '@/lib/api-client';
import { Project } from '@/types';
import { Briefcase, PlusCircle } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

// 이 페이지는 서버에서 데이터를 미리 불러와 렌더링됩니다 (Server Component).
export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div>
      {/* 페이지 헤더 */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 flex items-center">
            <Briefcase className="mr-3 h-8 w-8 text-blue-500" />
            프로젝트 관리
          </h1>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            모든 프로젝트의 현황을 확인하고 관리합니다.
          </p>
        </div>
        <Link href="/projects/new">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            새 프로젝트 등록
          </Button>
        </Link>
      </div>

      {/* 프로젝트 목록 테이블 */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>프로젝트명</TableHead>
              <TableHead>카테고리</TableHead>
              <TableHead>과업 위치</TableHead>
              <TableHead>상태</TableHead>
              <TableHead>생성일</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects.length > 0 ? (
              projects.map((project: Project) => (
                <TableRow key={project.projectId}>
                  <TableCell className="font-medium">{project.projectName}</TableCell>
                  <TableCell>{project.projectCategory}</TableCell>
                  <TableCell>{project.projectLocation}</TableCell>
                  <TableCell>{project.status}</TableCell>
                  <TableCell>{new Date(project.createdAt).toLocaleDateString()}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="text-center">
                  표시할 프로젝트가 없습니다.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}