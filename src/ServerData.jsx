import { useState } from "react"

export default function ServerData() {
    return <>
        <EndpointData route="notsecret" />
        <EndpointData route="secret" />
    </>
}

function EndpointData({ route }) {
    const [data, setData] = useState(null);

    async function handleFetchRequest() {
        const res = await fetch(`http://localhost:5000/${route}`);
        const result = await res.json();
        setData(result);
    }

    return <>
        <button onClick={handleFetchRequest}>
            {route}
        </button>
        <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
}