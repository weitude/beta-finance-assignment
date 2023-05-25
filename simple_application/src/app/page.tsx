import Title from "@/app/components/Title";
import YourVoting from "@/app/components/YourVoting";
import VotingResults from "@/app/components/VotingResults";
import Paragraph from "@/app/components/Paragraph";

const Home = () => {
  return (
    <div className="relative bg-ghostwhite w-full h-[1181px] text-left text-xs text-gray font-plus-jakarta-sans">
      <Title />
      <YourVoting />
      <VotingResults />
      <Paragraph />
    </div>
  );
};

export default Home;
