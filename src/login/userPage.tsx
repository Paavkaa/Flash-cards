import React, {useState} from "react";
import Nav, {CardPreview} from "../utils";

export default function UserPage() {
    const fav = Array.from({ length: 14 }, (_, i) => <CardPreview key={i} />);
    const all = Array.from({ length: 28 }, (_, i) => <CardPreview key={i} />);
    return (
        <div className="main">
            <Nav/>
            <h1>Welcome "user"</h1>

            <GridDisplaying headerText={'Favourite'} numToDisplay={3} allSets={fav} styles={"divBackground width100 marginBottom20"}/>
            <GridDisplaying headerText={'All sets'} numToDisplay={12} allSets={all} styles={"divBackground width100"} />
        </div>
    );
}

interface DisplayedSetsProps {
    numToDisplay: number;
    allSets: JSX.Element[];
}

function DisplayedSets({ numToDisplay, allSets }: DisplayedSetsProps) {
    const [displayedSets, setDisplayedSets] = useState(allSets.slice(0, numToDisplay));
    const [showMore, setShowMore] = useState(allSets.length > numToDisplay);

    const handleShowMore = () => {
        setDisplayedSets(allSets);
        setShowMore(false);
    };

    return (
        <>
            {displayedSets}
            {showMore && (
                <button onClick={handleShowMore}>Show More</button>
            )}
        </>
    );
}

interface GridDisplayingProps {
    headerText: string;
    numToDisplay: number;
    allSets: JSX.Element[];
    styles?: string;
}

function GridDisplaying({ headerText, numToDisplay, allSets, styles}: GridDisplayingProps) {
    return (
        <div className={styles}>
            <h2>{headerText}</h2>
            <div className="cardGrid">
                <DisplayedSets numToDisplay={numToDisplay} allSets={allSets} />
            </div>
        </div>
    );
}