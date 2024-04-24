import React from "react";
import Nav, {Card, Divider} from "../utils";
import {
    HiArrowCircleLeft,
    HiArrowCircleRight,
    HiCheck, HiOutlineChevronLeft,
    HiPlusCircle
} from "react-icons/hi";
import TextareaAutosize from 'react-textarea-autosize'
import FloatingLines from "../utils/background";

export default function SetPage() {
    return (
        <div className="main">
            <FloatingLines/>
            <Nav />
            <div className="divBackground flex column alignCenter width80">
                <a className="cleanLink flex gap10 alignCenter"
                   href="/user">
                    <HiOutlineChevronLeft/> Return
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
                            <HiArrowCircleLeft className="circleButton"/>
                        </button>

                        <p>
                            3/17
                        </p>

                        <button>
                            <HiArrowCircleRight className="circleButton"/>
                        </button>
                    </div>
                </div>

                <div className="width50">
                    <h3 className="textCenter">All cards</h3>
                    <CardsPreview/>
                </div>
            </div>
        </div>
    );
}

function CardsPreview() {
    function SingleCardPreview() {
        const [term, setTerm] = React.useState("");
        const [definition, setDefinition] = React.useState("");

        function handleTermChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
            setTerm(e.target.value);
        }

        function handleDefinitionChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
            setDefinition(e.target.value);
        }
        function handleSubmit() {
            console.log(term, definition);
        }

        return (
            <div className="card previewCard flex column">
                <div className="flex width100 alignCenter">
                    <TextareaAutosize className="width50 height100"
                                      id="term"
                                      placeholder="Term"
                                      onChange={handleTermChange}/>

                    <Divider/>

                    <TextareaAutosize className="width50"
                                      id="definition"
                                      placeholder="Definition"
                                      onChange={handleDefinitionChange}/>
                </div>

                <button className="smallButton borderButton textDark flex alignCenter"
                        onClick={handleSubmit}>
                    Submit <HiCheck/>
                </button>
            </div>
        )
    }

    return (
        <div className="flex column alignCenter gap10">
            <SingleCardPreview/>

            <button>
                <HiPlusCircle className="circleButton"/>
            </button>
        </div>
    );
}
