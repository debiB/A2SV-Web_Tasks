import Image from 'next/image'
import NavHeader from '../components/header'
import Feature from '../components/Feature';
import Services from '../components/Services';
import Menu from '../components/Menu';
import Survey from '../components/Survey';
export default function Home() {
  return (
    <>
      <div>
        <NavHeader/>
        <Feature/>
        <Services/>
        <Menu/>
        <Survey/>
      </div>
    </>
  );
}
