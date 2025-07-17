// 파일 경로: src/components/theme-provider.tsx

"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

// ThemeProviderProps 타입을 직접 가져오는 대신, NextThemesProvider의 props 타입을 사용합니다.
// 이렇게 하면 라이브러리 내부 구조 변경에 영향을 받지 않습니다.
type ThemeProviderProps = React.ComponentProps<typeof NextThemesProvider>;

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}