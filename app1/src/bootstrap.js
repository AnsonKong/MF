import { init } from '@module-federation/runtime';

init({
  name: 'app1',
  remotes: [
    {
      name: "app0",
      entry: 'http://localhost:3002/remoteEntry.js'
    }
  ],
});

setTimeout(() => {
  import("./boot-react");
}, 2000);
