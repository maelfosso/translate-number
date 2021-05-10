import React from 'react';
import PropTypes from "prop-types";

type TranslatorProps = {
  number: number;
}

const Translator = ({ number }: TranslatorProps) => {
  return (
    <div>
      <div>Number to translate : { number }</div>
      <div>
        <div>Translation</div>
        <div>

        </div>
      </div>
    </div>
  )
}

Translator.propTypes = {
  number: PropTypes.number.isRequired,
}

export default Translator;
