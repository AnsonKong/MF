import React from 'react';

const App2 = () => {

  const printConfig = () => {
    const app1 = window.__FEDERATION__.__INSTANCES__.find(instacne => instacne.name === 'app2')
    if(app1) {
      console.log('app2 remotes', app1.options.remotes)
    }
  }

  return (
    <div
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      }}
    >
      <h2>App 2</h2>

      <button onClick={() => {
        window.__myInit({ 
          name: 'app2',
          remotes: [{ name: 'app3', entry: 'http://localhost:3003/remoteEntry.js', }]
         })
      }}>
        add app3 entry address to app2 by using app1's init
      </button>

      <div style={{ marginTop: 10 }}/>

      <button onClick={() => {
        window.__myInit({ 
          name: 'app2',
          remotes: [{ name: 'app4', entry: 'http://localhost:3004/remoteEntry.js', }]
         })
      }}>
        add app3 entry address to app2 by using app1's init
      </button>

      <div style={{ marginTop: 10 }}/>

      <button onClick={printConfig}>print app2 config</button>
    </div>
  );
};

export default App2;
