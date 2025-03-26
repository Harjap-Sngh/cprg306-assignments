import Link from "next/link";

export default function Home() {
  return (
    <div className="h-[100vh] w-[100%] bg-slate-100 text-black text-center">
      <h1 className="text-5xl font-bold pt-7">
        CPRG 306: Web Development 2 - Assignments
      </h1>
      <div className="flex flex-col space-y-2 mt-4 text-2xl">
        <Link className="underline hover:text-blue-600" href="/week-2">
          Week 2 Assignment
        </Link>
        <Link className="underline hover:text-blue-600" href="/week-3">
          Week 3 Assignment
        </Link>
        <Link className="underline hover:text-blue-600" href="/week-4">
          Week 4 Assignment
        </Link>
        <Link className="underline hover:text-blue-600" href="/week-5">
          Week 5 Assignment
        </Link>
        <Link className="underline hover:text-blue-600" href="/week-6">
          Week 6 Assignment
        </Link>
        <Link className="underline hover:text-blue-600" href="/week-7">
          Week 7 Assignment
        </Link>
        <Link className="underline hover:text-blue-600" href="/week-8">
          Week 8 Assignment
        </Link>
        <Link className="underline hover:text-blue-600" href="/week-9">
          Week 9 Assignment
        </Link>
        <Link className="underline hover:text-blue-600" href="/week-10">
          Week 10 Assignment
        </Link>
      </div>
    </div>
  );
}
