import React from "react";
import Nav, { Card, Divider, InputWithLabel } from "../utils";
import {
    HiArrowCircleLeft,
    HiArrowCircleRight,
    HiCheck,
    HiOutlineChevronLeft,
    HiPlus,
} from "react-icons/hi";
import TextareaAutosize from "react-textarea-autosize";
import FloatingLines from "../utils/background";

export default function SetPage() {
    const [cards, setCards] = React.useState([
        { term: "Sample Term 1", definition: "Sample Definition 1" },
        { term: "Sample Term 2", definition: "Sample Definition 2" },
        { term: "Sample Term 3", definition: "Sample Definition 3" },
    ]);

    return (
        <div className="main">
            <FloatingLines />
            <Nav />
            <div className="divBackground flex column alignCenter width80 marginBottom20">
                <a className="cleanLink flex gap10 alignCenter" href="/user">
                    <HiOutlineChevronLeft /> Return
                </a>

                <h1>Set name</h1>

                <div>
                    <Card
                        frontSide={
                            <div className="largeCard flex alignCenter justifyCenter textCenter">
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        }
                        backSide={
                            <div className="largeCard flex alignCenter justifyCenter textCenter">
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        }
                    />

                    <div className="flex width100 alignCenter justifySpaceBetween buttonLine">
                        <button>
                            <HiArrowCircleLeft className="circleButton" />
                        </button>

                        <p>3/17</p>

                        <button>
                            <HiArrowCircleRight className="circleButton" />
                        </button>
                    </div>
                </div>

                <div className="width50">
                    <h3 className="textCenter">All cards</h3>
                    <div className="flex column alignCenter gap10 marginTop40 textDark">
                        {cards.map((card, index) => (
                            <DisplayCard key={index} term={card.term} definition={card.definition} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export function NewSet() {
    const [cards, setCards] = React.useState<{ term: string; definition: string }[]>([]);

    function handleSubmit() {
        // Perform any necessary actions with the created cards (e.g., send to backend)
        console.log("Created cards:", cards);
        setCards([]);
    }

    return (
        <div className="main">
            <FloatingLines />
            <Nav />
            <div className="divBackground flex column alignCenter width80 marginBottom20">
                <a className="cleanLink flex gap10 alignCenter" href="/user">
                    <HiOutlineChevronLeft /> Return
                </a>

                <h1>Create new set</h1>

                <div className="width50 flex column alignCenter">
                    <form className="width100" action="">
                        <InputWithLabel
                            id={"setName"}
                            label={"Name"}
                            type={"text"}
                            name={"setName"}
                            className={"largeInput"}
                        />
                    </form>

                    <h3 className="textCenter">All cards</h3>
                    <CardsPreview cards={cards} setCards={setCards} />

                    <button
                        className="largeButton borderButton flex alignCenter justifyCenter gap20 marginTop80 width30"
                        id="submit"
                        onClick={handleSubmit}
                    >
                        Submit <HiCheck />
                    </button>
                </div>
            </div>
        </div>
    );
}

interface CardsPreviewProps {
    cards: { term: string; definition: string }[];
    setCards: React.Dispatch<React.SetStateAction<{ term: string; definition: string }[]>>;
}

function CardsPreview({ cards, setCards }: CardsPreviewProps) {
    function handleAddCard() {
        setCards([...cards, { term: "", definition: "" }]);
    }

    return (
        <div className="flex column alignCenter gap10">
            {cards.map((card, index) => (
                <NewCard
                    key={index}
                    term={card.term}
                    definition={card.definition}
                    onChange={(updatedCard) => {
                        const updatedCards = [...cards];
                        updatedCards[index] = updatedCard;
                        setCards(updatedCards);
                    }}
                />
            ))}

            <button
                className="smallButton borderButton flex alignCenter justifyCenter gap10"
                id="addCard"
                onClick={handleAddCard}
            >
                Add card <HiPlus />
            </button>
        </div>
    );
}

interface NewCardProps {
    term: string;
    definition: string;
    onChange: (updatedCard: { term: string; definition: string }) => void;
}

function NewCard({ term, definition, onChange }: NewCardProps) {
    function handleTermChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        onChange({ term: e.target.value, definition });
    }

    function handleDefinitionChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        onChange({ term, definition: e.target.value });
    }

    return (
        <div className="card previewCard flex column">
            <div className="flex width100">
                <TextareaAutosize
                    className="width50 height100"
                    id="term"
                    placeholder="Term"
                    value={term}
                    onChange={handleTermChange}
                />

                <Divider />

                <TextareaAutosize
                    className="width50"
                    id="definition"
                    placeholder="Definition"
                    value={definition}
                    onChange={handleDefinitionChange}
                />
            </div>
        </div>
    );
}

function DisplayCard({ term, definition }: { term: string; definition: string }) {
    return (
        <div className="card previewCard flex column">
            <div className="flex width100">
                <div className="width50 height100">{term}</div>
                <Divider />
                <div className="width50">{definition}</div>
            </div>
        </div>
    );
}
