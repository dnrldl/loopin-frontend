import { useEffect } from 'react';
import { AppProviders } from '@/app/providers';
import AppRouter from '@/app/router/AppRouter';
import { useThemeStore } from '@/shared/stores/themeStore';

function App() {
  const applyTheme = useThemeStore((s) => s.applyTheme);

  useEffect(() => {
    applyTheme();
  }, [applyTheme]);

  return (
    <AppProviders>
      <AppRouter />
    </AppProviders>
  );
}

export default App;
