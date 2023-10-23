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
  info: { reward: string; pledge: number; description: string; left: number };
  selection: number;
  setSelection: React.Dispatch<React.SetStateAction<number>>;
  setData: React.Dispatch<React.SetStateAction<dataProps>>;
  setIsSuccessful?: React.Dispatch<React.SetStateAction<boolean>>;
  handleModal: (index: number) => void;
  isModalOpen: boolean;
};

const ModalCard: React.FunctionComponent<ModalCardProps> = ({
  index,
  regular,
  info,
  selection,
  setSelection,
  setData,
  setIsSuccessful,
  handleModal,
  isModalOpen,
}) => {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();

    const form = e.currentTarget;
    const inputElement = form.elements[0] as HTMLInputElement;
    const pledgeAmount = inputElement.value;
    const index = Number(inputElement.getAttribute("name"));

    setData((prev) => {
      let updatedOptions = [...prev.options];
      updatedOptions[index] = {
        ...updatedOptions[index],
        left: Number(prev.options[index].left) - 1,
      };
      return {
        ...prev,
        current: Number(prev.current) + Number(pledgeAmount),
        backers: Number(prev.backers) + 1,
        options: updatedOptions,
      };
    });
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
          ? "card-regular selected"
          : info.left == 0
          ? "card-regular out-of-stock"
          : "card-regular"
      }
    >
      <div onClick={() => setSelection(index)} className="flex-col">
        <div className="flex-row">
          {!regular && (
            <div className="circle">
              <div
                className={index == selection ? "circle-selected" : "no-show"}
              ></div>
            </div>
          )}
          <div className="title">
            <h4>{info.reward}</h4>
            <span className="pledge">Pledge ${info.pledge} or more</span>
          </div>
        </div>
        <p>{info.description}</p>
        <div className="reward-div">
          {info.left >= 0 && (
            <div className="flex-row absolute">
              <span className="big-numbers"> {info.left} </span>
              <span>left</span>
            </div>
          )}

          {regular && (
            <button
              onClick={() => handleModal(index)}
              className="btn-pledge"
              disabled={info.left == 0}
            >
              Select Reward
            </button>
          )}
        </div>
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
