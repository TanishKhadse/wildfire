import Image from 'next/image'
import TierList from './components/tier-list'
import InputTitle from './components/input-title';

export default function Home() {
  return (
    <div>
      <InputTitle/>
      <TierList/>
    </div>
  );
}
