import React from "react";

type dataProps = {
  current: number;
  goal: number;
  backers: number;
  daysLeft: number;
  options: Options[];
};

type Options = {
  reward: string;
  pledge: number;
  description: string;
  left: number;
};

type ModalCardProps = {
  index: number;
  regular: boolean;
  isSelected: boolean;
  info: { reward: string; pledge: number; description: string; left: number };
  selection: number;
  setSelection: React.Dispatch<React.SetStateAction<number>>;
  setData: React.Dispatch<React.SetStateAction<dataProps>>;
  setIsSuccessful?: React.Dispatch<React.SetStateAction<boolean>>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleModal: (index: number) => void;
  isModalOpen: boolean;
};

const ModalCard: React.FunctionComponent<ModalCardProps> = ({
  index,
  regular,
  isSelected,
  info,
  selection,
  setSelection,
  setData,
  setIsSuccessful,
  setIsModalOpen,
  handleModal,
  isModalOpen,
}) => {
  function handleSubmit(e): void {
    e.preventDefault();
    console.log(e.target[0].value, e.target[0].name);
    setData((prev) => ({
      ...prev,
      current: Number(prev.current) + Number(e.target[0].value),
      backers: Number(prev.backers) + 1,
    }));
    if (setIsSuccessful) setIsSuccessful(true);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <article
      className={
        index == selection && isModalOpen
          ? "card-regular  selected"
          : "card-regular"
      }
    >
      <div onClick={() => setSelection(index)} className="flex-col">
        <div className="flex-row">
          {!regular && (
            <div
              className={index == selection ? "circle-selected" : "circle"}
            ></div>
          )}
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

      {index == selection && isModalOpen ? (
        <form onSubmit={handleSubmit} className="flex-col-center border-top">
          <p>Enter your pledge</p>
          <div className="flex-row">
            <div className="input-box flex-row-between">
              <span>$</span>
              <input
                name={`${index}`}
                type="number"
                min={info.pledge}
                placeholder={`${info.pledge}`}
              />
            </div>

            <button className="btn-pledge" type="submit">
              Continue
            </button>
          </div>
        </form>
      ) : null}
    </article>
  );
};

export default ModalCard;
