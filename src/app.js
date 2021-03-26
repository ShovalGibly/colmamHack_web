
import AwardsSection from "./components/AwardsSection.component";
import ChallengesSection from "./components/ChallengesSection.component";
import Header from "./components/Header.component";
import InfoSection from "./components/InfoSection.component";
import SponserSection from "./components/SponserSection.component";
import TopBar from "./components/TopBar.component";

function App() {
    return (
        <>
            <TopBar />
            <Header />
            <InfoSection />
            <ChallengesSection />
            <AwardsSection />
            <SponserSection />
        </>
    );
}

export default App;