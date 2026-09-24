import React from 'react'
import ICard from './ICard'
import gibli from "../assets/gibli.png";

function ICardGallery() {

    const students = [
        {
            pic: gibli,
            name: "Chandra Shekhar",
            roll: "9005",
            branch: "CSE",
            college: "ABES"
        },
        {
            pic: gibli,
            name: "Rahul",
            roll: "7878",
            branch: "CSE",
            college: "ABES"
        },
        {
            pic: gibli,
            name: "Rajan",
            roll: "7854",
            branch: "CSE",
            college: "ABES"
        },
        {
            pic: gibli,
            name: "Ramesh",
            roll: "7846",
            branch: "CSE",
            college: "ABES"
        }
    ]

    return (
        <div  style={{
    display: 'flex',
    gap: '30px',
    flexWrap: 'wrap'
}}>
            {students.map((student, index) => (
                <ICard key={index} data={student} />
            ))}
        </div>
    )
}

export default ICardGallery