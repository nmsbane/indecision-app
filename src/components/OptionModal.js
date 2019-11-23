import React from "react";
import Modal from "react-modal";

const OptionModal = props => {
  return (
    <Modal
      isOpen={!!props.selectedOption}
      contentLabel="selected option"
      onRequestClose={props.clearSelectedOption}
    >
      <h3>Selected option</h3>
      {props.selectedOption && <p>{props.selectedOption}</p>}
      <button onClick={props.clearSelectedOption}>Okay</button>
    </Modal>
  );
};

export default OptionModal;
