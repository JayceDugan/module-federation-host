// host/src/App.js
import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import { transform } from 'Remote/Sample'

const RemoteApp = React.lazy(() => import("Remote/App"));
const RemoteButton = React.lazy(() => import("Remote/Button"));

const RemoteWrapper = ({ children }) => (
    <div
        style={{
          border: "1px solid red",
          background: "white",
        }}
    >
      <ErrorBoundary>{children}</ErrorBoundary>
    </div>
);

export const App = () => {
    return (
        <div style={{ background: "rgba(43, 192, 219, 0.3)" }}>
            <h1>This is the Host!</h1>
            <h3>Remote app transform function (output should be 2): { transform(1) }</h3>
            <RemoteWrapper>
                <RemoteApp />
            </RemoteWrapper>
            <h2>Remote Button:</h2>
            <RemoteWrapper>
                <RemoteButton />
            </RemoteWrapper>
            <br />
            <a href="http://localhost:4000">Link to Remote App</a>
        </div>
    )
};
export default App;