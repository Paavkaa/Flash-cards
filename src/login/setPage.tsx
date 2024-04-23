import React from "react";
import Nav, {Card, Divider} from "../utils";
import {HiArrowCircleLeft, HiArrowCircleRight, HiPlusCircle} from "react-icons/hi";
import TextareaAutosize from 'react-textarea-autosize'

export default function SetPage() {
    return (
        <div className="main">
            <Nav />
            <div className="divBackground flex column alignCenter width80">
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
                    <div className="flex column alignCenter gap10">
                        <CardPreview />

                        <button>
                            <HiPlusCircle className="circleButton"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function CardPreview() {
    return (
        <div className="card previewCard flex justifySpaceEvenly">
            <TextareaAutosize/>

            <Divider/>

            <TextareaAutosize/>
        </div>
    );
}
