import ThePageWrapper from "@/widgets/ThePageWrapper";
import Greetings from "@/widgets/Greetings";
import Community from "@/widgets/Community";
import FindYourWay from "@/widgets/FindYourWay";
import MadeByMembers from "@/widgets/MadeByMembers";
import Hierarchy from "@/widgets/Hierarchy";
import Quote from "@/widgets/Quote";
import JoinUs from "@/widgets/JoinUs";

export default function Home() {
  return (
    <ThePageWrapper>
      <Greetings/>

      <Community/>

      <FindYourWay/>

      <MadeByMembers/>

      <Hierarchy/>

      <Quote/>  

      <JoinUs/>
    </ThePageWrapper>
  );
}
