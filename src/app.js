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
import { useEffect, useState } from 'react';
import Table from './components/Table.component';

function App() {
  const [displayTable, setDisplayTable] = useState(false);

  useEffect(() => {
    const url = window.location.href.split('/').filter(item => item !== '');
    if(url.length >= 4 && url[3] === 'table') setDisplayTable(true);
    else setDisplayTable(false);
  },[])

  if(displayTable) 
    return (<Table />);

  return (
    <div>
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
    </div>
  );
}

export default App;
