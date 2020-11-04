import React from 'react'

export const JournalEntry = () => {
    return (
        <div className='journal__entry pointer'>
            <div className='journal__entry-picture' style={{backgroundSize: 'cover', backgroundImage: 'url(https://image.winudf.com/v2/image/Y29tLmdhd2VydW55LmltYWdlbmVzZGV1bml2ZXJzb19zY3JlZW5zaG90c180XzliZGY2YjI3/screen-4.jpg?fakeurl=1&type=.jpg)'}}>

            </div>
            <div className='journal__entry-body'>
                <p className='journal__entry-title'>
                    Un nuevo dia 
                </p>
                <p className='journal__entry-content'>
                    aAAASADASD asaaaaaa sssssss ss ssssss sssssssssssssssssssss  aAAASADASD asaaaaaa sssssss ss ssssss sssssssssssssssssssss aAAASADASD asaaaaaa sssssss ss ssssss sssssssssssssssssssss
                </p>                
            </div>
            <div className='journal__entry-date-box'>
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    )
}
