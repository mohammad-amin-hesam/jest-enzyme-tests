import React from "react";
import { connect } from "react-redux";
import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords";
import { getSecretWord } from "./actions";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Jotto App</h1>
      <Congrats success={true} />
      <GuessedWords
        guessedWords={[
          {
            guessedWord: "train",
            letterMatchCount: 3,
          },
        ]}
      />
    </div>
  );
}

const mstp = (state) => {
  const { success, guessedWords, secretWord } = state;
  return { success, guessedWords, secretWord };
};

export default connect(mstp, { getSecretWord })(App);
