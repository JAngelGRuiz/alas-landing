import { CallMeBanner } from '@/components/CallMeBanner/CallMeBanner';
import { Courses } from '@/components/Courses/Courses';
import { Header } from '@/components/Header/Headert';
import { Impression } from '@/components/Impression/Impression';
import { PostickWall } from '@/components/PosticksWall/PosticksWall';

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main className="w-full">
        <Header />
        <div className="py-6 px-3 sm:px-10 rounded-bl-[60px] rounded-br-[60px]">
          <Impression />
        </div>
        <Courses />
        <CallMeBanner />
        <PostickWall />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <h3>Im footer</h3>
      </footer>
    </div>
  );
}
