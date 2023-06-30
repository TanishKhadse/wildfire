'use client'

import TierList from './tier-list'

export default function CreatePage() {
    return (
        <div className='mt-10'>
            <TierList edit={true}/>
        </div>
    );
}
