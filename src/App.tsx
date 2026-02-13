import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Liam Stapley Task 1 - UD CISC275 with React Hooks and TypeScript
            </header>
            <h2>Hello World</h2>
            <p style={{ background: "red" }}>How are you?</p>
            <p>
                This is <span style={{ color: "red" }}>colored text</span>.
            </p>
            <p>
                <Button
                    onClick={() => {
                        console.log("Hello World!");
                    }}
                >
                    Log Hello World
                </Button>
            </p>
            <Container>
                <Row>
                    <Col>
                        <img
                            style={{ border: "1px solid blue", padding: "4px" }}
                            src="../assets/images/minecraft.jpg"
                            alt="My favorite video game"
                        />
                    </Col>
                    <Col>
                        <ol>
                            <li>First thing</li>
                            <li>Another thing</li>
                            <li>A third item</li>
                        </ol>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
