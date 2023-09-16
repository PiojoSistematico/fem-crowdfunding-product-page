import iconClose from "../assets/images/icon-close-modal.svg";
import iconCheck from "../assets/images/icon-check.svg";
import { useState } from "react";
import ModalCard from "./ModalCard";

type optionsProps = {
  reward: string;
  pledge: number;
  description: string;
  left: number;
};

type ModalProps = {
  isOpen: boolean;
  handleModal: (index: number) => void;
  options: optionsProps[];
  selection: number;
  setSelection: React.Dispatch<React.SetStateAction<number>>;
};

const Modal: React.FunctionComponent<ModalProps> = ({
  isOpen,
  handleModal,
  options,
  selection,
  setSelection,
}) => {
  const [isSuccessful, setIsSuccessful] = useState(false);

  function handleClick(): void {
    setIsSuccessful(!isSuccessful);
  }

  return (
    <section
      className={
        isOpen ? "overlay modal-wrapper show" : " modal-wrapper no-show"
      }
    >
      {isSuccessful ? (
        <section className="modal">
          <picture>
            <img src={iconCheck} alt="" />
          </picture>
          <h3>Thanks for your support!</h3>
          <p>
            Your pledge brings us one step closer to sharing Mastercraft Bamboo
            Monitor Riser worldwide. You will get an email once our campaign is
            completed.
          </p>
          <button onClick={handleClick}>Got it!</button>
        </section>
      ) : (
        <section className="modal">
          <div className="flex-row-between">
            <h3>Back this project</h3>

            <button className="btn-menu mobile" onClick={() => handleModal(-1)}>
              <img className="icon-close" src={iconClose} alt="Close Menu" />
            </button>
          </div>

          <p>
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out
            in the world?
          </p>

          {options.map((elem, index) => (
            <ModalCard
              key={index}
              index={index}
              regular={false}
              isSelected={false}
              info={elem}
              selection={selection}
              setSelection={setSelection}
              handleModal={handleModal}
            ></ModalCard>
          ))}
        </section>
      )}
    </section>
  );
};

export default Modal;
