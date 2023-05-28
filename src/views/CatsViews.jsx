import React, { useEffect, useState } from 'react'
import Cats from '../components/Cats';

const CatsViews = () => {


    return (
        <>
            <Cats>
                <Cats.Viewer/>
                <Cats.FavoriteCarousel/>
            </Cats>
        </>
    )
}

export default CatsViews