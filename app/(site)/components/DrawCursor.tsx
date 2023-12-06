'use client'

import { useEffect, useState } from 'react';
import styles from '../css/Cursor.module.css';

export default function DrawCursor() {
    const [cursorPosition, setCursorPosition] = useState({ x: -500, y: -500 });
    const [isCursorVisible, setIsCursorVisible] = useState(true);

    useEffect(() => {
        // Function to update the cursor position
        const updateCursorPosition = (e: MouseEvent) => {
            setCursorPosition({ x: e.clientX, y: e.clientY });
        };

        // Set initial cursor position to the center of the window
        const setInitialCursorPosition = () => {
            setCursorPosition({
                x: window.innerWidth / 2,
                y: window.innerHeight / 2
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
        window.addEventListener('mousemove', updateCursorPosition);
        window.addEventListener('load', setInitialCursorPosition);  // Set initial position on window load

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
            window.removeEventListener('mousemove', updateCursorPosition);
            window.removeEventListener('load', setInitialCursorPosition);

            if (cursorElem) {
                cursorElem.removeEventListener('mousedown', clearCursorText);
            }

            hideCursorElems.forEach(elem => {
                elem.removeEventListener('mouseenter', hideCursor);
                elem.removeEventListener('mouseleave', showCursor);
            });
        };
    }, []);

    const cursorStyle = {
        left: cursorPosition.x + 'px',
        top: cursorPosition.y + 'px',
        display: isCursorVisible ? 'block' : 'none',
    };

    return (
        <div id="cursor" className={`${styles.cursor} cursor`} style={cursorStyle}><span>Draw</span></div>
    );
}
