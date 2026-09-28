const { useState } = React;

function App() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    return (
        <div className="container">

            <h1>Controlled React Form</h1>

            <form>

                <label>Name:</label>

                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                />

                <label>Email:</label>

                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                />

            </form>

            <div className="output">

                <h2>Entered Data</h2>

                <p>
                    <strong>Name:</strong> {name}
                </p>

                <p>
                    <strong>Email:</strong> {email}
                </p>

            </div>

        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);