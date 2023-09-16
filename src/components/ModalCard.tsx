import React from "react";

type ModalCardProps = {
  index: number;
  regular: boolean;
  isSelected: boolean;
  info: { reward: string; pledge: number; description: string; left: number };
  selection: number;
  setSelection: React.Dispatch<React.SetStateAction<number>>;
  handleModal: (index: number) => void;
};

const ModalCard: React.FunctionComponent<ModalCardProps> = ({
  index,
  regular,
  isSelected,
  info,
  selection,
  setSelection,
  handleModal,
}) => {
  return (
    <article
      className={index == selection ? "card-regular  selected" : "card-regular"}
    >
      <div onClick={() => setSelection(index)} className="flex-col">
        <div className="flex-row">
          {!regular && <div className="circle"></div>}
          <div>
            <h4>{info.reward}</h4>
            <span className="pledge">Pledge ${info.pledge} or more</span>
          </div>
        </div>
        <p>{info.description}</p>
        <div className="flex-row">
          <span className="big-numbers"> {info.left} </span>
          <span>left</span>
        </div>
        {regular && (
          <button onClick={() => handleModal(index)} className="btn-pledge">
            Select Reward
          </button>
        )}
      </div>

      {index == selection ? (
        <div className="flex-col-center border-top">
          <p>Enter your pledge</p>
          <div className="flex-row">
            <div className="input-box flex-row-between">
              <span>$</span>
              <input type="number" placeholder={`${info.pledge}`} />
            </div>

            <button className="btn-pledge">Continue</button>
          </div>
        </div>
      ) : null}
    </article>
  );
};

export default ModalCard;
