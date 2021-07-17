/* eslint-disable no-undef */
import React, { useState } from 'react';
import './App.css';


const root = document.getElementById('main');

function log(text) {
  const prev = root.innerHTML;
  root.innerHTML = `<p> ${JSON.stringify(text)} </p>`  + prev;
}

let accelerometer = null;
function reloadOnShake(params) {
  log('accelerometer ' + params.x + ' | ' + params.y + ' | ' + params.z);
}

try {
    accelerometer = new Accelerometer({ referenceFrame: 'device', frequency: 1 });
    accelerometer.addEventListener('error', event => {
        // Handle runtime errors.
        if (event.error.name === 'NotAllowedError') {
            // Branch to code for requesting permission.
        } else if (event.error.name === 'NotReadableError' ) {
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
  log('gyroscope ' + params.x + ' | ' + params.y + ' | ' + params.z);
}

try {
    gyroscope = new Gyroscope({ frequency: 1 });
    gyroscope.addEventListener('error', event => {
        // Handle runtime errors.
        if (event.error.name === 'NotAllowedError') {
            // Branch to code for requesting permission.
        } else if (event.error.name === 'NotReadableError' ) {
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



function App() {
  const [text, setText] = useState('no');
  const [gyro, setGyro] = useState('no 2');


  // navigator.permissions.query({ name: 'gyroscope' }).then(function (result) {
  //   console.log(result);
  //   if (result.state === 'granted') {
  //     // eslint-disable-next-line no-undef
  //     let gyroscope = new Gyroscope({frequency: 10});
  //     // alert(gyroscope.x);
  //     alert(`granted =  ${JSON.stringify(result)}`);

  //     gyroscope.addEventListener('reading', e => {
  //       console.log("Angular velocity along the X-axis " + gyroscope.x);
  //       console.log("Angular velocity along the Y-axis " + gyroscope.y);
  //       console.log("Angular velocity along the Z-axis " + gyroscope.z);
  //     });

  //     gyroscope.start();

  //   } else if (result.state === 'prompt') {
  //     // showButtonToEnableLocalNews();
  //     alert(`prompt = ${JSON.stringify(result)}`);
  //   }
  //   // Don't do anything if the permission was denied.
  // });



  // geo
  // var options = {
  //   enableHighAccuracy: true,
  //   timeout: 5000,
  //   maximumAge: 0
  // };

  // function success(pos) {
  //   console.log('pos', pos);

  //   var crd = pos.coords;

  //   console.log('Your current position is:');
  //   console.log(`Latitude : ${crd.latitude}`);
  //   console.log(`Longitude: ${crd.longitude}`);
  //   console.log(`More or less ${crd.accuracy} meters.`);
  // }

  // function error(err) {
  //   console.warn(`ERROR(${err.code}): ${err.message}`);
  // }

  // navigator.permissions.query({ name: 'geolocation' }).then(function (result) {
  //   console.log(result);
  //   if (result.state === 'granted') {
  //     // showLocalNewsWithGeolocation();
  //     setText(JSON.stringify(result));
  //     console.log('navigator.geolocation', navigator.geolocation);

  //     navigator.geolocation.watchPosition(success, error, options)

  //   } else if (result.state === 'prompt') {
  //     // showButtonToEnableLocalNews();
  //     setText(`2 = ${JSON.stringify(result)}`);
  //   }
  //   // Don't do anything if the permission was denied.
  // });
  // geo end



  // navigator.permissions.query({ name: 'geolocation' }).then(function (result) {
  //   console.log(result);
  //   if (result.state === 'granted') {
  //     // showLocalNewsWithGeolocation();
  //     setText(JSON.stringify(result));
  //     console.log('navigator.geolocation', navigator.geolocation);

  //     navigator.geolocation.watchPosition(success, error, options)

  //   } else if (result.state === 'prompt') {
  //     // showButtonToEnableLocalNews();
  //     setText(`2 = ${JSON.stringify(result)}`);
  //   }
  //   // Don't do anything if the permission was denied.
  // });




  return (
    <>
      {/* <header className='App-header'>
        <p>
          {text}
        </p>
        <p>
          {gyro}
        </p>
      </header> */}
    </>
  );
}

export default App;
