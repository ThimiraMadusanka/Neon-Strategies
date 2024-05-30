import React from 'react'
import WhatWeDoItem from './shared/WhatWeDoItem'
import { WhatWeDoList } from '../data/WhatWeDoList'

const WhatWeDo = () => {
  return (
    <div className="mx-auto max-w-7xl pt-8 px-6 lg:py-10 lg:px-8 text-left mb-0 lg:mb-10 mt-10">
        {/* Title Section */}
        <div className="grid lg:grid-cols-3 py-5">
            <p className="uppercase font-bold text-sm lg:text-base col-span-1">What We Do</p>
            <div className="col-span-2 lg:w-11/12">
                <p className="text-xl lg:text-4xl">
                    A comprehensive range of marketing services designed to elevate your brand and drive success.
                </p>
            </div>
        </div>
        {/* What we do Item Section */}
        {WhatWeDoList.map((item, i) => {
            return (
                <WhatWeDoItem 
                    key={i} 
                    idName={item.idName}
                    title={item.title} 
                    description={item.description} 
                    labels={item.labels} 
                    images={item.images} 
                />
            );
        })}
    </div>
  )
}

export default WhatWeDo
