"use client";

import { ShowMoreProps } from '@/types';
import { useRouter } from 'next/navigation';
import { CustomButton } from '.';
import { updatedSearchParams } from '@/utils';
import { useState } from 'react';

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
    const router = useRouter();
    const [loading, setLoading] = useState(false)

    const handleNavigation = () => {
        const newLimit = (pageNumber + 1) * 10;
        const newPathName = updatedSearchParams("limit", `${ newLimit }`)

        router.push(newPathName, {
            scroll: false
        });
    }

    return (
        <>
            {loading ? (
                <p>Э, ебать, падажди</p>
            ) : (<div className='w-full flex-center gap-5 mt-10'>
                {!isNext && (
                    <CustomButton
                        title='Show more'
                        btnType='button'
                        containerStyles='bg-primary-blue rounded-full text-white'
                        handleClick={handleNavigation}
                    />
                )}
            </div>)}
        </>
    )
}

export default ShowMore