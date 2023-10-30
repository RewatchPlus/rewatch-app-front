import Placeholder from '@components/Carrossel/PLaceholder';
import Leaderboard from '@components/FollowUps/LeaderBoard';
import Friendsboard from '@components/FollowUps/FriendsBoard';

export default function Home() {
   return (
      <main className="flex flex-row flex-wrap my-16 ml-14 items-start justify-start h-full gap-1 md:gap-40">
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

         <section className="flex flex-col w-full h-[300px]">
            <h1 className="text-4xl text-purple uppercase font-bold duration-500 mb-6">
               Leaderboard
            </h1>
            <Leaderboard />
         </section>

         <section className="flex flex-col w-full h-[300px]">
            <h1 className="text-4xl text-purple uppercase font-bold duration-500 mb-6">
               Friends Recommendantions
            </h1>
            <Friendsboard />
         </section>
      </main>
   );
}
