import React from 'react';
import quote from '../../../../images/others/quote.svg'

const Reviews = () => {
    return (
        <div className="grid justify-items-center py-5 bg-gray-200">
            <div className="md:w-3/5 sm:w-full">
                <h2 className="text-2xl font-bold">Our patients come first</h2>
                <h2 className="text-lg font-bold">Trusted by You since 2019</h2>
                <div className="grid justify-items-center py-5"><img className="text-center" src={quote} alt="" /></div>
                <p className="p-2"> usually don't write review for anything but here goes, I honestly was scared asf before taking this test. Months ago I use to be well a hoe I'm telling u I never thought about the dangers I was getting myself into especially when having sex raw as a gay man. Until I got an actual boyfriend and got serious I didn't want my past</p>
                <p className="py-5 text-xl font-bold">Saif Siddique</p>
                <p>October 2021</p>

            </div>
        </div>
    );
};

export default Reviews;