/* eslint-disable no-undef */
import React, { useState } from 'react';
import './App.css';

const canvas = document.getElementById('amedomary');
const ctx = canvas.getContext('2d');

const canvas2 = document.getElementById('amedomary2');
const ctx2 = canvas2.getContext('2d');



const root = document.getElementById('main');

function log(text) {
    const prev = root.innerHTML;
    root.innerHTML = `<p> ${JSON.stringify(text)} </p>` + prev;
}

let accelerometer = null;
function reloadOnShake(params) {
    // log('accelerometer ' + params.x + ' | ' + params.y + ' | ' + params.z);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(5, 200, 300, 1);

    ctx.fillRect(10, 200, 50, params.x * 20);
    ctx.fillRect(70, 200, 50, params.y * 20);
    ctx.fillRect(130, 200, 50, params.z * 20);
}

try {
    accelerometer = new Accelerometer({ referenceFrame: 'device', frequency: 30 });
    accelerometer.addEventListener('error', event => {
        // Handle runtime errors.
        if (event.error.name === 'NotAllowedError') {
            // Branch to code for requesting permission.
        } else if (event.error.name === 'NotReadableError') {
            log('Cannot connect to the sensor.');
        }
    });
    accelerometer.addEventListener('reading', () => reloadOnShake(accelerometer));
    accelerometer.start();
} catch (error) {
    // Handle construction errors.
    if (error.name === 'SecurityError') {
        // See the note above about feature policy.
        log('Sensor construction was blocked by a feature policy.');
    } else if (error.name === 'ReferenceError') {
        log('Sensor is not supported by the User Agent.');
    } else {
        throw error;
    }
}

let gyroscope = null;
function reloadOnMove(params) {
    // log('gyroscope ' + params.x + ' | ' + params.y + ' | ' + params.z);

    ctx2.clearRect(0, 0, canvas.width, canvas.height);
    ctx2.fillRect(5, 200, 300, 1);

    ctx2.fillRect(10, 200, 50, params.x * 50);
    ctx2.fillRect(70, 200, 50, params.y * 50);
    ctx2.fillRect(130, 200, 50, params.z * 50);
}

try {
    gyroscope = new Gyroscope({ frequency: 30 });
    gyroscope.addEventListener('error', event => {
        // Handle runtime errors.
        if (event.error.name === 'NotAllowedError') {
            // Branch to code for requesting permission.
        } else if (event.error.name === 'NotReadableError') {
            log('Cannot connect to the sensor.');
        }
    });
    gyroscope.addEventListener('reading', () => reloadOnMove(gyroscope));
    gyroscope.start();
} catch (error) {
    // Handle construction errors.
    if (error.name === 'SecurityError') {
        // See the note above about feature policy.
        log('Sensor construction was blocked by a feature policy.');
    } else if (error.name === 'ReferenceError') {
        log('Sensor is not supported by the User Agent.');
    } else {
        throw error;
    }
}


// function drawPreImg() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     // renderLoop();
//     ctx.fillRect(100,100,100,100)

//     requestAnimationFrame(drawPreImg);
// }

// drawPreImg();

function App() {
    const [text, setText] = useState('no');
    const [gyro, setGyro] = useState('no 2');

    return (
        <></>
    );
}

export default App;
