import React, { useState } from "react";
import Nav, { CardPreview } from "../utils";

export default function UserPage() {
    const fav = Array.from({ length: 14 }, (_, i) => <CardPreview key={i} />);
    const all = Array.from({ length: 28 }, (_, i) => <CardPreview key={i} />);
    return (
        <div className="main">
            <Nav />
            <h1>Welcome "user"</h1>

            <GridDisplaying headerText={'Favourite'} numToDisplay={3} allSets={fav} styles={"divBackground marginBottom20"} />
            <GridDisplaying headerText={'All sets'} numToDisplay={12} allSets={all} styles={"divBackground"} />
        </div>
    );
}

interface DisplayedSetsProps {
    allSets: JSX.Element[];
}

function DisplayedSets({ allSets }: DisplayedSetsProps) {
    const [currentPage, setCurrentPage] = useState(1);
    const setsPerPage = 12;

    const indexOfLastSet = currentPage * setsPerPage;
    const indexOfFirstSet = indexOfLastSet - setsPerPage;
    const currentSets = allSets.slice(indexOfFirstSet, indexOfLastSet);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(allSets.length / setsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <>
            {currentSets}
            <div>
                <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                {pageNumbers.map(number => (
                    <button
                        key={number}
                        onClick={() => paginate(number)}
                        className={currentPage === number ? 'active' : ''}
                    >
                        {number}
                    </button>
                ))}
                <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === pageNumbers.length}
                >
                    Next
                </button>
            </div>
        </>
    );
}

interface GridDisplayingProps {
    headerText: string;
    numToDisplay: number;
    allSets: JSX.Element[];
    styles?: string;
}

function GridDisplaying({ headerText, numToDisplay, allSets, styles }: GridDisplayingProps) {
    return (
        <div className={styles}>
            <h2>{headerText}</h2>
            <div className="cardGrid">
                <DisplayedSets allSets={allSets} />
            </div>
        </div>
    );
}
