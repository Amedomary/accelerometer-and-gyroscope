import React, { useState } from 'react';
import './App.css';


// eslint-disable-next-line no-undef
let acl = new Accelerometer({frequency: 60});
acl.addEventListener('reading', () => {
  console.log("Acceleration along the X-axis " + acl.x);
  console.log("Acceleration along the Y-axis " + acl.y);
  console.log("Acceleration along the Z-axis " + acl.z);
});

acl.start();

alert(JSON.stringify(acl.activated))



function App() {
  const [text, setText] = useState('no');
  const [gyro, setGyro] = useState('no 2');


  alert(acl.x)


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
    <div className='App'>
      <header className='App-header'>
        <p>
          {text}
        </p>
        <p>
          {gyro}
        </p>
      </header>
    </div>
  );
}

export default App;
