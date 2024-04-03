import React from "react";

const Main: React.CSSProperties = {
    zIndex: 1,

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    marginTop: '20vh',
}

const Title: React.CSSProperties = {
    fontSize: '3em',
    color: '#F2BAC9',
    textAlign: 'center',
}

const Subtitle: React.CSSProperties = {
    fontSize: '1.5em',
    color: '#EBf5EE',
    textAlign: 'center',

    marginBottom: '5vh',
}

export { Main, Title, Subtitle };