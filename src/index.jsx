import { createRoot } from 'react-dom/client';
import { MainView } from './componets/main-view/main-view.jsx';

import "bootstrap/dist/css/bootstrap.min.css";

// Import statement to indicate that you need to bundle `./index.scss`
import "./index.scss";
import { Container } from "react-bootstrap";

// Main component 
const App = () => {
    return (
        <Container>
            <MainView />
        </Container>
        )
};

// Finds the root of your app
const container = document.querySelector("#root");
const root = createRoot(container);

// Tells React to render your app in the root DOM element
root.render(<App />);
