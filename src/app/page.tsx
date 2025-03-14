import { CallMeBanner } from '@/components/CallMeBanner/CallMeBanner';
import { Courses } from '@/components/Courses/Courses';
import FloatingActionButton from '@/components/FloatingAction/FloatingAction';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Headert';
import { Impression } from '@/components/Impression/Impression';
import { PostickWall } from '@/components/PosticksWall/PosticksWall';
import { ReviewsDashboard } from '@/components/ReviewsDashboard/ReviewDashboard';

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="w-full pt-[--sidebar-height]">
        <Impression />
        <Courses />
        <ReviewsDashboard />
        <PostickWall />
        <CallMeBanner />
      </main>
      <Footer />
      <FloatingActionButton />
    </div>
  );
}
