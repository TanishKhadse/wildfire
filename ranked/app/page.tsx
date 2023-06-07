import Image from 'next/image'
import TierList from './components/tier-list'
import InputTitle from './components/input-title';

// all elements for home page should go here

export default function Home() {
  return (

    <div>
      <InputTitle/>
      <TierList/>
    </div>

  );
}
