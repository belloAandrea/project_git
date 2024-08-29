import dynamic from 'next/dynamic';
const LazyComponent = dynamic(() => import('./MyComponent'), { ssr: false });

export default function LazyLoadComponent() {
  return <LazyComponent />;
}