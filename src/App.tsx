import logo from "./assets/images/logo.svg";
import hamburguer from "./assets/images/icon-hamburger.svg";
import bookmark from "./assets/images/icon-bookmark.svg";

function App() {
  return (
    <main>
      <header>
        <picture>
          <img src={logo} alt="" />
        </picture>
        <nav>
          <ul className="desktop">
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Discover</a>
            </li>
            <li>
              <a href="">Get Started</a>
            </li>
          </ul>
          <picture>
            <img src={hamburguer} alt="" className="mobile" />
          </picture>
        </nav>
      </header>
      <section className="main-section">
        <section className="project-section">
          <h1>Mastercraft Bamboo Monitor Riser</h1>
          <p>
            A beautiful & handcrafted monitor stand to reduce neck and eye
            strain.
          </p>
          <div>
            <button>Back this project</button>
            <button>
              <img src={bookmark} alt="" />
            </button>
          </div>
        </section>
        <section className="stats-section">
          <div className="stats">
            <span>$89,914</span>
            <span>of $100,000 backed</span>
          </div>
          <hr className="mobile" />
          <div className="stats">
            <span>5,007</span>
            <span>total backers</span>
          </div>
          <hr className="mobile" />
          <div className="stats">
            <span>56</span>
            <span>days left</span>
          </div>
          <div className="bar">
            <div className="bar-filled"></div>
          </div>
        </section>
      </section>
      <section className="details-section">
        <h2>About this project</h2>
        <p>
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
          that elevates your screen to a more comfortable viewing height.
          Placing your monitor at eye level has the potential to improve your
          posture and make you more comfortable while at work, helping you stay
          focused on the task at hand. <br /> Featuring artisan craftsmanship,
          the simplicity of design creates extra desk space below your computer
          to allow notepads, pens, and USB sticks to be stored under the stand.
        </p>
        <article>
          <h3>Bamboo Stand</h3>
          <span>Pledge $25 or more</span>
          <p>
            You get an ergonomic stand made of natural bamboo. You've helped us
            launch our promotional campaign, and you’ll be added to a special
            Backer member list.
          </p>
          <div>
            <span>101</span>
            <span>left</span>
          </div>
          <button>Select Reward</button>
        </article>
        <article>
          <h3>Black Edition Stand</h3>
          <span>Pledge $75 or more</span>
          <p>
            You get a Black Special Edition computer stand and a personal thank
            you. You’ll be added to our Backer member list. Shipping is
            included.
          </p>
          <div>
            <span>64</span>
            <span>left</span>
          </div>
          <button>Select Reward</button>
        </article>
        <article>
          <h3>Mahogany Special Edition</h3>
          <span>Pledge $200 or more</span>
          <p>
            You get two Special Edition Mahogany stands, a Backer T-Shirt, and a
            personal thank you. You’ll be added to our Backer member list.
            Shipping is included.
          </p>
          <div>
            <span> 0 </span>
            <span>left</span>
          </div>
          <button>Out of Stock</button>
        </article>
      </section>
    </main>
  );
}

export default App;
