import React from "react";
import PropTypes from "prop-types";

const GuessedWords = (props) => {
  let contents = null;
  if (props.guessedWords.length === 0) {
    contents = (
      <span data-test="guess-instructions">Try to guess the secret word!</span>
    );
  } else {
    const guessedWordsRows = props.guessedWords.map((word, index) => {
      const key = `keywordItemRow${index}`;
      return (
        <tr key={key} data-test="guessed-word">
          <td>{word.guessedWord}</td>
          <td>{word.letterMatchCount}</td>
        </tr>
      );
    });
    contents = (
      <div data-test="guessed-words">
        <h3>GuessedWords</h3>
        <table>
          <thead>
            <tr>
              <th>Guess</th>
              <ht>Matching Letters</ht>
            </tr>
          </thead>
          <tbody>{guessedWordsRows}</tbody>
        </table>
      </div>
    );
  }
  return <div data-test="component-guessed-words">{contents}</div>;
};

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default GuessedWords;
