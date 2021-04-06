import AwardsSection from './components/AwardsSection.component';
import ChallengesSection from './components/ChallengesSection.component';
import CreditsSection from './components/CreditsSection.component';
import Footer from './components/Footer.component';
import Header from './components/Header.component';
import Video from './components/Video.component';
import InfoSection from './components/InfoSection.component';
import RegisterButton from './components/RegisterButton.component';
import SponserSection from './components/SponserSection.component';
import TopBar from './components/TopBar.component';

function App() {
  return (
    <>
      <TopBar />
      <Header />
      <Video />
      <InfoSection />
      <ChallengesSection />
      <AwardsSection />
      <SponserSection />
      <CreditsSection />
      <Footer />
      <RegisterButton />
    </>
  );
}

export default App;
