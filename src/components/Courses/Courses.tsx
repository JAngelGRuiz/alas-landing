import { CoursesGrid } from '../CoursesGrid/CoursesGrid';

export function Courses() {
  return (
    <article className="w-full px-2 pt-[80px] flex flex-col items-center gap-y-11 mt-16 sm:px-10 inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(99,102,241,0.2),rgba(255,255,255,0))] rounded-[100px]">
      <h2 className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-3xl font-bold tracking-tighter text-transparent sm:text-5xl">
        Nuestros cursos
      </h2>
      <CoursesGrid />
    </article>
  );
}
