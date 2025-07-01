import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// 21st.dev Toolbar integration (development only)
if (import.meta.env.DEV && typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    const toolbarRoot = document.createElement('div');
    toolbarRoot.id = 'stagewise-toolbar-root';
    document.body.appendChild(toolbarRoot);
    import('@21st-extension/toolbar-react').then(({ TwentyFirstToolbar }) => {
      const toolbarConfig = { plugins: [] };
      createRoot(toolbarRoot).render(
        <StrictMode>
          <TwentyFirstToolbar config={toolbarConfig} />
        </StrictMode>
      );
    });
  });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
