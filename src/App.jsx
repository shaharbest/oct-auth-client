import { useState } from 'react';
import { auth } from "./firebase";
import {
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  getIdToken
} from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

export default function App() {
  const [user, loading, error] = useAuthState(auth);

  function handleSignin() {
    signInWithPopup(auth, new GoogleAuthProvider());
  }

  return <main>
    <button onClick={handleSignin}>
      signin
    </button>
    <button onClick={() => signOut(auth)}>
      signOut
    </button>
    <pre>{JSON.stringify(user, null, 2)}</pre>
    <EndpointData route="notsecret" user={user} />
    <EndpointData route="secret" user={user} />
  </main>;
}

function EndpointData({ route, user }) {
    const [data, setData] = useState(null);

    async function handleFetchRequest() {
        const token = await getIdToken(user);

        const res = await fetch(`http://localhost:5000/${route}`, {
          headers: { authorization: `Bearer ${token}` }
        });

        if (res.status === 403) {
          setData({ error: 'Unauthorized' });
        }
        else {
          const result = await res.json();
          setData(result);
        }
    }

    return <>
        <button onClick={handleFetchRequest}>
            {route}
        </button>
        <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
}