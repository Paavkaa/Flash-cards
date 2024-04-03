import React from "react";

const Main: React.CSSProperties = {
    zIndex: 1,

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    marginTop: '20vh',
}

const Title: React.CSSProperties = {
    fontSize: '6rem',
    color: '#F2BAC9',
    textAlign: 'center',
}

const Subtitle: React.CSSProperties = {
    fontSize: '1.5rem',
    color: '#EBf5EE',
    textAlign: 'center',

    marginBottom: '5vh',
}

export { Main, Title, Subtitle };
