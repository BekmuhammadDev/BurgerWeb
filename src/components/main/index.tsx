"ue client"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';

const index = ({children}:{children:React.JSX.Element | any}) => {
    return (
        <main className='min-h-screen'>
            {children}
        </main>
    );
};

export default index;