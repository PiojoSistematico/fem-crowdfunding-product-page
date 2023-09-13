import bookmark from "./assets/images/icon-bookmark.svg";
import Menu from "./components/Menu";
import logoMastercraft from "./assets/images/logo-mastercraft.svg";
import Modal from "./components/Modal";
import { useEffect, useState } from "react";

type dataProps = {
  current: number;
  goal: number;
  backers: number;
  daysLeft: number;
};

type optionsProps = {
  reward: string;
  pledge: number;
  description: string;
  left: number;
};

const dummy = Array.from(Array(2), () => ({
  reward: "Bamboo Stand",
  pledge: 25,
  description:
    "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
  left: 101,
}));

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState<dataProps>({
    current: 1,
    goal: 2,
    backers: 1,
    daysLeft: 1,
  });
  const [options, setOptions] = useState<optionsProps[]>(dummy);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((info) => setData(info));
  }, []);

  useEffect(() => {
    fetch("options.json")
      .then((res) => res.json())
      .then((info) => setOptions(info));
  }, []);

  function handleModal(): void {
    setIsModalOpen(!isModalOpen);
  }

  console.log(data);
  console.log(options);

  return (
    <>
      <Menu></Menu>
      <Modal
        isOpen={isModalOpen}
        handleModal={handleModal}
        options={options}
      ></Modal>
      <main>
        <section className="main-section">
          <section className="project-section section">
            <h1>Mastercraft Bamboo Monitor Riser</h1>
            <p>
              A beautiful & handcrafted monitor stand to reduce neck and eye
              strain.
            </p>
            <div className="flex-row">
              <button onClick={handleModal} className="btn">
                Back this project
              </button>
              <button className="btn-bookmark">
                <img src={bookmark} alt="" />
              </button>
            </div>
            <img
              src={logoMastercraft}
              alt="Logo Mastercraft"
              className="logo-mastercraft"
            />
          </section>
          <section className="stats-section section">
            <div className="stats">
              <span className="big-numbers">
                ${data.current.toLocaleString()}
              </span>
              <span>of ${data.goal.toLocaleString()} backed</span>
            </div>
            <hr className="mobile" />
            <div className="stats">
              <span className="big-numbers">
                {data.backers.toLocaleString()}
              </span>
              <span>total backers</span>
            </div>
            <hr className="mobile" />
            <div className="stats">
              <span className="big-numbers">
                {data.daysLeft.toLocaleString()}
              </span>
              <span>days left</span>
            </div>
            <div className="bar">
              <div
                className="bar-filled"
                style={{ width: (data.current * 100) / data.goal + "%" }}
              ></div>
            </div>
          </section>

          <section className="details-section section">
            <h2>About this project</h2>
            <p>
              The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
              platform that elevates your screen to a more comfortable viewing
              height. Placing your monitor at eye level has the potential to
              improve your posture and make you more comfortable while at work,
              helping you stay focused on the task at hand. <br /> Featuring
              artisan craftsmanship, the simplicity of design creates extra desk
              space below your computer to allow notepads, pens, and USB sticks
              to be stored under the stand.
            </p>
            <article className="card-regular">
              <h3>Bamboo Stand</h3>
              <span className="pledge">Pledge $25 or more</span>
              <p>
                You get an ergonomic stand made of natural bamboo. You've helped
                us launch our promotional campaign, and you’ll be added to a
                special Backer member list.
              </p>
              <div className="flex-row">
                <span className="big-numbers">101</span>
                <span>left</span>
              </div>
              <button className="btn">Select Reward</button>
            </article>
            <article className="card-regular">
              <h3>Black Edition Stand</h3>
              <span className="pledge">Pledge $75 or more</span>
              <p>
                You get a Black Special Edition computer stand and a personal
                thank you. You’ll be added to our Backer member list. Shipping
                is included.
              </p>
              <div className="flex-row">
                <span className="big-numbers">64</span>
                <span>left</span>
              </div>
              <button className="btn">Select Reward</button>
            </article>
            <article className="card-regular out-of-stock">
              <h3>Mahogany Special Edition</h3>
              <span className="pledge">Pledge $200 or more</span>
              <p>
                You get two Special Edition Mahogany stands, a Backer T-Shirt,
                and a personal thank you. You’ll be added to our Backer member
                list. Shipping is included.
              </p>
              <div className="flex-row">
                <span className="big-numbers"> 0 </span>
                <span>left</span>
              </div>
              <button className="btn">Out of Stock</button>
            </article>
          </section>
        </section>
      </main>
    </>
  );
}

export default App;
