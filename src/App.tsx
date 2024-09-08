import { useFlags } from 'launchdarkly-react-client-sdk';

function App() {
  // README: replace yourFlagKey with your own flag key
  const { yourFlagKey: flagKey } = useFlags();

  return (
    <div style={{ backgroundColor: flagKey ? 'green' : 'red' }}>
      The feature flag evaluates to <b>{flagKey ? 'true' : 'false'}</b>
    </div>
  );
} 


export default App;
