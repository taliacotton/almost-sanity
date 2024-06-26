'use client'

import { useEffect, useState } from 'react';
import styles from '../css/Cursor.module.css';

// Define an interface for the props
interface DrawCursorProps {
    cursorSize: number; // Assuming size is a number
}


export default function DrawCursor({ cursorSize }: DrawCursorProps) {

    const [isCursorVisible, setIsCursorVisible] = useState(true);

    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setCursorPosition({ 
                x: document.documentElement.clientWidth / 2, 
                y: document.documentElement.clientHeight / 2 
            });
        }
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Function to update the cursor position
            const updateCursorPosition = (e: MouseEvent) => {
                setCursorPosition({ x: e.clientX, y: e.clientY });
            };

            // Function to update the cursor position for touch events
            const updateTouchPosition = (e: TouchEvent) => {
                const touch = e.touches[0];
                setCursorPosition({ x: touch.clientX, y: touch.clientY });
            };

            // Set initial cursor position based on window size
            const setInitialCursor = () => {
                setCursorPosition({
                    x: document.documentElement.clientWidth / 2,
                    y: document.documentElement.clientHeight / 2
                });
            };

            // Other event handlers
            const hideCursor = () => setIsCursorVisible(false);
            const showCursor = () => setIsCursorVisible(true);
            const clearCursorText = () => {
                const cursorSpan = document.querySelector('#cursor span');
                if (cursorSpan) cursorSpan.innerHTML = "";
            };

            // Adding event listeners
        
            document.addEventListener('mousemove', updateCursorPosition);
            document.addEventListener('touchmove', updateTouchPosition);
            document.addEventListener('load', setInitialCursor);  // Set initial position on window load

        
            const cursorElem = document.getElementById('cursor');
            if (cursorElem) {
                document.addEventListener('mousedown', clearCursorText);
            }

            const hideCursorElems = document.querySelectorAll('[data-hide-cursor]');
            hideCursorElems.forEach(elem => {
                elem.addEventListener('mouseenter', hideCursor);
                elem.addEventListener('mouseleave', showCursor);
            });


            // Cleanup function
            return () => {
                if (typeof window !== 'undefined') {
                    document.removeEventListener('mousemove', updateCursorPosition);
                    document.removeEventListener('touchmove', updateTouchPosition);
                    document.removeEventListener('load', setInitialCursor);
                }

                if (cursorElem) {
                    cursorElem.removeEventListener('mousedown', clearCursorText);
                }

                hideCursorElems.forEach(elem => {
                    elem.removeEventListener('mouseenter', hideCursor);
                    elem.removeEventListener('mouseleave', showCursor);
                });
            };

        }
    }, [cursorSize]);

    // console.log(defaultSize);

    const cursorStyle = {
        left: `${cursorPosition.x}px`,
        top: `${cursorPosition.y}px`,
        display: isCursorVisible ? 'block' : 'none',
        width: `${cursorSize}px`,  // Use cursorSize state here
        height: `${cursorSize}px`, // Use cursorSize state here
    };


    return (
        <div id="cursor" className={`${styles.cursor} cursor`} style={cursorStyle}>
            <span>Draw</span>
        </div>
    );
}
