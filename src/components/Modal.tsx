import iconClose from "../assets/images/icon-close-modal.svg";
import iconCheck from "../assets/images/icon-check.svg";
import { useState } from "react";
import ModalCard from "./ModalCard";

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
  setData: React.Dispatch<React.SetStateAction<dataProps>>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal: React.FunctionComponent<ModalProps> = ({
  isOpen,
  handleModal,
  options,
  selection,
  setSelection,
  setIsModalOpen,
  setData,
}) => {
  const [isSuccessful, setIsSuccessful] = useState(false);

  function handleClick(): void {
    setIsSuccessful(!isSuccessful);
    setIsModalOpen(false);
    setSelection(-1);
  }

  return (
    <section
      className={
        isOpen ? "overlay modal-wrapper show" : " modal-wrapper no-show"
      }
    >
      {isSuccessful ? (
        <section className="modal success">
          <picture>
            <img src={iconCheck} alt="" />
          </picture>
          <h3>Thanks for your support!</h3>
          <p>
            Your pledge brings us one step closer to sharing Mastercraft Bamboo
            Monitor Riser worldwide. You will get an email once our campaign is
            completed.
          </p>
          <button className="btn" onClick={handleClick}>
            Got it!
          </button>
        </section>
      ) : (
        <section className="modal">
          <div className="flex-row-between">
            <h3>Back this project</h3>

            <button className="btn-menu" onClick={() => handleModal(-1)}>
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
              info={elem}
              selection={selection}
              setSelection={setSelection}
              setData={setData}
              handleModal={handleModal}
              setIsSuccessful={setIsSuccessful}
              isModalOpen={isOpen}
            ></ModalCard>
          ))}
        </section>
      )}
    </section>
  );
};

export default Modal;
