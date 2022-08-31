import React from 'react'
import {Dna} from 'react-loader-spinner'

export const Loading = () => (
    <div className='flex justify-center items-center'>
        <Dna
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
        />
    </div>
)
