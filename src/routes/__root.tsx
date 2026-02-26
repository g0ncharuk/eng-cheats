import { createRootRoute, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: () => (
    <div className="min-h-screen bg-slate-900 text-slate-200 p-6 leading-relaxed font-sans">
      <Outlet />
    </div>
  ),
})
