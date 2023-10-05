import Placeholder from "@/src/components/Carrossel/PLaceholder";

export default function Home() {
  return (
    <main className="flex flex-row flex-wrap my-16 ml-14 items-start justify-start h-full gap-60 md:gap-40">
      <section className="flex flex-col w-full h-[300px]">
        <h1 className="text-4xl text-purple uppercase font-bold duration-500 mb-6">
          Week Top 10
        </h1>
        <Placeholder />
      </section>

      <section className="flex flex-col w-full h-[300px]">
        <h1 className="text-4xl text-purple uppercase font-bold duration-500 mb-6">
          In Cinema
        </h1>
        <Placeholder />
      </section>
    </main>
  );
}
