'use client';

import { ThemeProvider } from 'next-themes';

import { NuqsAdapter } from 'nuqs/adapters/next/app';

import { DeleteConfirmationDialog } from '@/components/shared';
import { Toaster } from '@/components/ui/sonner';
import '@/lib/api/interceptors';

import { QueryProvider } from './query-provider';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <QueryProvider>
        <NuqsAdapter>
          {children}
          <DeleteConfirmationDialog />
        </NuqsAdapter>
        <Toaster richColors />
      </QueryProvider>
    </ThemeProvider>
  );
}
