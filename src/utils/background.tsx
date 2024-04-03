import React from 'react';
import { animated, useSprings } from 'react-spring';

// Array of randomly generated lines
const lines = Array.from({ length: 50 }, () => {
    const width = Math.random() * 50;
    const height = width * 0.1;
    const top = Math.random() * 100;
    return { width, height, top };
});

// Component to render the lines
const FloatingLines = () => {
    // useSprings to animate the lines from left to right
    const springs = useSprings(
        lines.length,
        lines.map((line, index) => ({
            from: { left: `-${line.width}%` },
            to: { left: `100%` },
            config: {
                duration: Math.random() * 8000 + 15000,
                precision: 0,
            },
            loop: true,
            delay: index === 0 ? 0 : index * Math.random() * 5000 + 20000,
        }))
    );

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                pointerEvents: 'none',
                overflow: 'hidden',

                height: '100vh',
                width: '100vw',

                zIndex: -1,
            }}
        >
            {springs.map((props, index) => (
                <animated.div
                    key={index}
                    style={{
                        position: 'absolute',
                        width: `${lines[index].width}%`,
                        height: `${lines[index].height}%`,
                        top: `${lines[index].top}%`,
                        background: `#47198B`,
                        opacity: 1,
                        borderRadius: 100,
                        zIndex: -1,
                        ...props,
                    }}
                />
            ))}
        </div>
    );
};

export default FloatingLines;