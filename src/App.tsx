import bookmark from "./assets/images/icon-bookmark.svg";
import Menu from "./components/Menu";
import logoMastercraft from "./assets/images/logo-mastercraft.svg";
import Modal from "./components/Modal";
import ModalCard from "./components/ModalCard";
import { useEffect, useState } from "react";

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

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState<dataProps>({
    current: 1,
    goal: 2,
    backers: 1,
    daysLeft: 1,
    options: [
      { reward: "a", pledge: 1, description: "b", left: 2 },
      { reward: "a", pledge: 1, description: "b", left: 2 },
    ],
  });

  const [selection, setSelection] = useState(-1);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((info) => setData(info));
  }, []);

  function handleModal(index: number): void {
    setIsModalOpen(!isModalOpen);
    setSelection(index);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  console.log(data);
  console.log(selection);

  return (
    <>
      <Menu></Menu>
      <Modal
        isOpen={isModalOpen}
        handleModal={handleModal}
        options={data.options}
        selection={selection}
        setSelection={setSelection}
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
              <button onClick={() => handleModal(-1)} className="btn">
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
            {data.options.map((elem, index) => (
              <ModalCard
                key={index}
                index={index}
                regular={true}
                isSelected={false}
                info={elem}
                selection={selection}
                setSelection={setSelection}
                handleModal={handleModal}
              ></ModalCard>
            ))}
          </section>
        </section>
      </main>
    </>
  );
}

export default App;
