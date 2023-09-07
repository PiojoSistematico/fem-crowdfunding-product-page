import iconClose from "../assets/images/icon-close-modal.svg";
import iconCheck from "../assets/images/icon-check.svg";
import { useState } from "react";

type ModalProps = {
  isOpen: boolean;
  handleModal: () => void;
};

const Modal: React.FunctionComponent<ModalProps> = ({
  isOpen,
  handleModal,
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

            <button className="btn-menu mobile" onClick={handleModal}>
              <img className="icon-close" src={iconClose} alt="Close Menu" />
            </button>
          </div>

          <p>
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out
            in the world?
          </p>

          <article className="card-regular">
            <div className="flex-col">
              <div className="flex-row">
                <div className="circle"></div>
                <div>
                  <h4>Pledge with no reward</h4>
                  <span className="pledge"></span>
                </div>
              </div>
              <p>
                Choose to support us without a reward if you simply believe in
                our project. As a backer, you will be signed up to receive
                product updates via email.
              </p>
              <div className="flex-row">
                <span className="big-numbers"> 0 </span>
                <span>left</span>
              </div>
            </div>
            <div className="flex-col-center border-top">
              <p>Enter your pledge</p>
              <div className="flex-row">
                <div className="input-box flex-row-between">
                  <span>$</span>
                  <input type="text" placeholder="25" />
                </div>

                <button className="btn-pledge">Continue</button>
              </div>
            </div>
          </article>

          <article className="card-regular">
            <div className="flex-col">
              <div className="flex-row">
                <div className="circle"></div>
                <div>
                  <h4>Bamboo Stand</h4>
                  <span className="pledge">Pledge $25 or more</span>
                </div>
              </div>
              <p>
                You get an ergonomic stand made of natural bamboo. You've helped
                us launch our promotional campaign, and you’ll be added to a
                special Backer member list.
              </p>
              <div className="flex-row">
                <span className="big-numbers"> 101 </span>
                <span>left</span>
              </div>
              <div className="flex-col-center border-top">
                <p>Enter your pledge</p>
                <div className="flex-row">
                  <div className="input-box flex-row-between">
                    <span>$</span>
                    <input type="text" placeholder="25" />
                  </div>

                  <button className="btn-pledge">Continue</button>
                </div>
              </div>
            </div>
          </article>
          <article className="card-regular">
            <div className="flex-col">
              <div className="flex-row">
                <div className="circle"></div>
                <div>
                  <h4>Black Edition Stand</h4>
                  <span className="pledge">Pledge $75 or more</span>
                </div>
              </div>
              <p>
                You get a Black Special Edition computer stand and a personal
                thank you. You’ll be added to our Backer member list. Shipping
                is included.
              </p>
              <div className="flex-row">
                <span className="big-numbers"> 64 </span>
                <span>left</span>
              </div>
            </div>

            <div className="flex-col-center border-top">
              <p>Enter your pledge</p>
              <div className="flex-row">
                <div className="input-box flex-row-between">
                  <span>$</span>
                  <input type="text" placeholder="25" />
                </div>

                <button className="btn-pledge">Continue</button>
              </div>
            </div>
          </article>
          <article className="card-regular out-of-stock">
            <div className="flex-col">
              <div className="flex-row">
                <div className="circle"></div>
                <div>
                  <h4>Mahogany Special Edition</h4>
                  <span className="pledge">Pledge $200 or more</span>
                </div>
              </div>
              <p>
                You get two Special Edition Mahogany stands, a Backer T-Shirt,
                and a personal thank you. You’ll be added to our Backer member
                list. Shipping is included.
              </p>
              <div className="flex-row">
                <span className="big-numbers"> 0 </span>
                <span>left</span>
              </div>
            </div>

            <div className="flex-col-center border-top">
              <p>Enter your pledge</p>
              <div className="flex-row">
                <div className="input-box flex-row-between">
                  <span>$</span>
                  <input type="text" placeholder="25" />
                </div>

                <button className="btn-pledge">Continue</button>
              </div>
            </div>
          </article>
        </section>
      )}
    </section>
  );
};

export default Modal;
