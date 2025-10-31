import { useEffect } from 'react';
import { ENV } from '@/app/config/env';

/**
 * 페이지 타이틀을 동적으로 변경하는 커스텀 훅
 * @param title 변경할 제목 문자열
 * @param options.prefix prefix 붙이기 여부 (기본값 true)
 */
export function useTitle(title: string, options?: { prefix?: boolean }) {
  useEffect(() => {
    const prefix = options?.prefix !== false; // true일 때 접두사 붙임
    const appTitle = ENV.APP_TITLE || 'React App';
    const newTitle = prefix ? `${title} | ${appTitle}` : title;

    const prevTitle = document.title;
    document.title = newTitle;

    return () => {
      document.title = prevTitle;
    };
  }, [title, options?.prefix]);
}
