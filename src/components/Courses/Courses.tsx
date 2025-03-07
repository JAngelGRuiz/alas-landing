import { CoursesGrid } from '../CoursesGrid/CoursesGrid';
import { Title } from '../Title/Title';

export function Courses() {
  return (
    <article
      className="w-full px-2 flex flex-col items-center gap-y-9 mt-16 sm:px-10"
      id="courses"
    >
      <Title>Esto hacemos</Title>
      <CoursesGrid />
    </article>
  );
}
