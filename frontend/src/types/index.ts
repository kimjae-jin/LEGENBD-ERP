// 파일 경로: frontend/src/types/index.ts

// Prisma 스키마를 기반으로 한 프로젝트 데이터 타입
export interface Project {
  projectId: string;
  projectName: string;
  projectCategory: string;
  projectLocation: string;
  status: string;
  createdAt: string; // 날짜는 문자열로 넘어옵니다.
}