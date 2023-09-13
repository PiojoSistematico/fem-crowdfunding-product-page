import React from "react";

type ModalCardProps = {
  isSelected: boolean;
  info: { reward: string; pledge: number; description: string; left: number };
};

const ModalCard: React.FunctionComponent<ModalCardProps> = ({
  isSelected,
  info,
}) => {
  return (
    <article className={isSelected ? "card-regular" : "card-regular selected"}>
      <div className="flex-col">
        <div className="flex-row">
          <div className="circle"></div>
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
      </div>

      {isSelected ? (
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
