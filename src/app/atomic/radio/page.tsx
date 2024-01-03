'use client';
import Renderer from '@/app/components/renderer';
import { usePathname } from 'next/navigation';

export default function Page() {
  const path = usePathname();

  return (
    <Renderer title="라디오" path={path} />
  );
}
