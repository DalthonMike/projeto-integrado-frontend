
import Header from '../components/header';
import Footer from '../components/footer';
import CardGame from '../components/CardGame';
import Bodyhome from './bodyhome/bodyhome';
export default function Home() {
  return (
    <div>
      <Header/>
      <Bodyhome/>
      <Footer/>
      {/* <CardGame/> */}
    </div>
  );
}
