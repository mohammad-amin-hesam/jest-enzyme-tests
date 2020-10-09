import React, { useEffect } from "react";
import { connect } from "react-redux";
import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords";
import { getSecretWord } from "./actions";

export function UnconnectedApp(props) {
  useEffect(() => {
    props.getSecretWord();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Jotto UnconnectedApp</h1>
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

export default connect(mstp, { getSecretWord })(UnconnectedApp);
