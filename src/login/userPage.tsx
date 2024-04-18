import React, { useState } from "react";
import Nav, {Card, CardPreview} from "../utils";
import {HiArrowRight, HiArrowLeft} from "react-icons/hi";

export default function UserPage() {
    const fav = Array.from({ length: 14 }, (_, i) => <CardPreview key={i} />);
    const all = Array.from({ length: 28 }, (_, i) => <CardPreview key={i} />);
    return (
        <div className="main">
            <Nav />
            <h1>Welcome "user"</h1>

            <GridDisplaying headerText={'Favourite'} numToDisplay={8} allSets={fav} styles={"divBackground marginBottom20"} />
            <GridDisplaying headerText={'All sets'} numToDisplay={12} allSets={all} styles={"divBackground"} />
        </div>
    );
}

interface DisplayedSetsProps {
    allSets: JSX.Element[];
    currentPage: number;
    setsPerPage: number;
}

function DisplayedSets({ allSets, currentPage, setsPerPage }: DisplayedSetsProps) {
    const indexOfLastSet = currentPage * setsPerPage;
    const indexOfFirstSet = indexOfLastSet - setsPerPage;
    const currentSets = allSets.slice(indexOfFirstSet, indexOfLastSet);

    return <>{currentSets}</>;
}

interface GridDisplayingProps {
    headerText: string;
    numToDisplay: number;
    allSets: JSX.Element[];
    styles?: string;
}

function GridDisplaying({ headerText, numToDisplay, allSets, styles }: GridDisplayingProps) {
    const [currentPage, setCurrentPage] = useState(1);
    const setsPerPage = numToDisplay;

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(allSets.length / setsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className={styles}>
            <h2>{headerText}</h2>
            <div className="cardGrid">
                <DisplayedSets allSets={allSets} currentPage={currentPage} setsPerPage={setsPerPage} />
            </div>
            <div className="flex justifyCenter pagination">
                <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="flex alignCenter"
                >
                    <HiArrowLeft/>
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
                    className="flex alignCenter"
                >
                    <HiArrowRight/>
                </button>
            </div>
        </div>
    );
}