import "./index.css";
import EmotionCard from "../EmotionCard";

import { useEffect, useRef } from "react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

const selfImprovementsList = [
  {
    id: "1",
    title: "It's not an easy as 1-2-3",
    description:
      "The journey of change may be long, but our sessions are quick. we get to the point and tell you what you want to know(and nothing else)",
  },
  {
    id: "2",
    title: "Old habits are hard to break.",
    description:
      "And bad behaviour die hard. Fortunately, we give you great, science-backed techniques to use.",
  },
  {
    id: "3",
    title: "You and your motivation don't have a long-term relationship.",
    description:
      "Luckily, we can proactively prepare you for the marathon, not just the race. Effective, memorable exercisesWill help you stick to your goals.",
  },
  {
    id: "4",
    title: "Books just don't offer practical.",
    description:
      "Remember when you learned to ride a bike just by reading? Yeah. we don't either. We help you take concreate steps towards your goals. Learning just a bit, then immediately springing into action.",
  },
  {
    id: "5",
    title: "Inspiration is great, but then what.",
    description:
      "We make sure your energy from all the content you consume does not fizzle out.",
  },
];

const emotionsCardsList = [
  {
    id: "ANGRY",
    imageUrl:
      "https://t3.ftcdn.net/jpg/05/13/10/72/240_F_513107205_l8D8VdOmX22Sr0C4zatNMPay3h5TjNJk.jpg",
    title: "You argue with a colleague",
    description:
      "You get angry and defensive, instead of staying open and working towards common ground",
    cardColor: "#cde4f7",
  },
  {
    id: "WONDER",
    imageUrl:
      "https://t3.ftcdn.net/jpg/05/13/10/72/240_F_513107205_l8D8VdOmX22Sr0C4zatNMPay3h5TjNJk.jpg",
    title: "You argue with a colleague",
    description:
      "You get angry and defensive, instead of staying open and working towards common ground",
    cardColor: "#eedefc",
  },
  {
    id: "DOUBT",
    imageUrl:
      "https://t3.ftcdn.net/jpg/05/13/10/72/240_F_513107205_l8D8VdOmX22Sr0C4zatNMPay3h5TjNJk.jpg",
    title: "You argue with a colleague",
    description:
      "You get angry and defensive, instead of staying open and working towards common ground",
    cardColor: "#5f1ef7",
  },
  {
    id: "DISAPPOINT",
    imageUrl:
      "https://t3.ftcdn.net/jpg/05/13/10/72/240_F_513107205_l8D8VdOmX22Sr0C4zatNMPay3h5TjNJk.jpg",
    title: "You argue with a colleague",
    description:
      "You get angry and defensive, instead of staying open and working towards common ground",
    cardColor: "#fccfb1",
  },
  {
    id: "NERVOUS",
    imageUrl:
      "https://t3.ftcdn.net/jpg/05/13/10/72/240_F_513107205_l8D8VdOmX22Sr0C4zatNMPay3h5TjNJk.jpg",
    title: "You argue with a colleague",
    description:
      "You get angry and defensive, instead of staying open and working towards common ground",
    cardColor: "#fcf9c5",
  },
];

const MainContent = () => (
  <div className="main-container">
    {/* ahead-section container */}

    <div className="ahead-app-container">
      <div className="master-heading-container">
        <div className="ahead-title-content">
          <p className="ahead-app-text"> Ahead app </p>
          <h1 className="ahead-title">
            {" "}
            Master your life by mastering emotions{" "}
          </h1>
          <div className="app-and-rating">
            <img
              src="https://brandeps.com/logo-download/D/Download-on-the-App-Store-logo-vector-01.svg"
              className="app-store-image"
              alt="app store"
            />
            <div className="rating-container">
              <img
                src="https://res.cloudinary.com/dvmkmx7o3/image/upload/v1708139650/five-stars-rating-icon-png_ozae6o.webp"
                className="five-star-image"
                alt="five star"
              />
              <p className="rating">100+ AppStore reviews</p>
            </div>
          </div>
        </div>
        <img
          src="https://self-awareness.ahead-app.com/static/media/home_owel.e23a16a0.svg"
          className="home-image"
          alt="home"
        />
      </div>
    </div>

    {/* EQ beats IQ container */}

    <div className="eq-beats-iq-container">
      <h1 className="eq-iq-heading"> EQ beats IQ </h1>
      <p className="eq-description">
        {" "}
        People with high emotional intelligence(EQ) live more fulfilled lives.
        They tend to be happier and have healthier relationships.{" "}
      </p>
      <p className="eq-description">
        {" "}
        They are more successful in their pursuits and make for inspiring
        leaders. According to science, they earn $29k a year.{" "}
      </p>
    </div>

    {/* Does this sound familiar container */}

    <div className="familiar-container">
      <h1 className="familiar-text"> Does this sound familiar... </h1>
      <ul className="emojis-familiar-card">
        {emotionsCardsList.map((emotion) => (
          <EmotionCard
            key={emotion.id}
            emotionDetails={emotion}
            isHighlighted={emotion.id === "DOUBT"}
          />
        ))}
      </ul>
    </div>

    {/* Built out of frustration container */}

    <div className="meet-ahead-container">
      <div className="meet-familiar-in-container">
        <div className="meet-description-container">
          <img
            src="https://self-awareness.ahead-app.com/static/media/home_owel.e23a16a0.svg"
            className="meet-ahead-image"
            alt="meet ahead"
          />
          <p className="meet-title">Built out of frustration </p>
          <h1 className="meet-description"> Meet the ahead app </h1>
        </div>
        <p className="meet-content">
          A personalized pocket couch that provides bite-sized, science-driven
          tools to boost emotional intelligence. <br />
          Think of it as a pocket cheer leader towards a better, more
          fulfilling.
        </p>
      </div>
    </div>

    {/* Self Improvement container */}

    <div className="self-improvement-timeline-container">
      <p className="self-improvement-title">
        {" "}
        Wrong with self-improvement & how we are fixing it.{" "}
      </p>
      <h1 className="self-improvement-heading"> Self-improvement. Ugh. </h1>
      <div>
        <div className="self-improvement-timeline">
          {selfImprovementsList.map((item) => (
            <div className="timeline-container" key={item.id}>
              <div className="time-line-dot"></div>
              <div className="timeline-details">
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Be the best you you with EQ container */}

    <div className="eq-beats-iq-container">
      <h1 className="eq-iq-heading"> Be the best you with EQ </h1>
      <p className="eq-description">
        {" "}
        Not having your emotions under control might be holding you back.
      </p>
      <p className="eq-description">
        {" "}
        Additionally, not understanding those of others stops you from being
        parent, friend you can be.
      </p>
    </div>

    {/* Ever Wondered container */}

    <div className="Ever-wondered-container">
      <div className="ever-wonder-description">
        <p className="wondered-title">
          {" "}
          Let your friends, family, and co-workers (anonymously) rate your
          social skills.{" "}
        </p>
        <h1 className="wondered-sub-title">
          {" "}
          Ever wondered what others think of you?{" "}
        </h1>
        <div className="flow-wondered-questions">
          <p className="questions"> Answer question on your social skills </p>
          <p className="questions">
            Let others anonymously answer the same questions about you{" "}
          </p>
          <p className="questions">
            {" "}
            Find out where you and others see things the same way - and where
            not!{" "}
          </p>
        </div>
        <div className="rating-skills-white-card">
          <div className="rating-skills-timeline-containers">
            <div className="rating-time-line-dot you-dot"></div>
            <div className="rating-skills-timeline-items you-box">
              <p>You</p>
            </div>
          </div>
          <div className="rating-skills-timeline-containers">
            <div className="rating-time-line-dot one-dot"></div>
            <div className="rating-skills-timeline-items anonymous-bottom anonymous1">
              <p>Anonymous 1</p>
            </div>
          </div>
          <div className="rating-skills-timeline-containers">
            <div className="rating-time-line-dot two-dot"></div>
            <div className="rating-skills-timeline-items anonymous2">
              <p>Anonymous 2</p>
            </div>
          </div>
          <div className="rating-skills-timeline-container-last">
            <div className="rating-time-line-dot three-dot"></div>
            <div className="rating-skills-timeline-items anonymous-bottom anonymous3">
              <p>Anonymous 3</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* We take privacy seriously container */}

    <div className="before-start-test-container">
      <div className="test-description-container">
        <p className="privacy-text"> We take privacy seriously </p>
        <h1 className="started-text"> Before you get Started </h1>
        <p className="test-description">
          {" "}
          We won't share your answers with anyone (and won't ever tell you which
          friends said what about you <br />
          <span className="with-love-text"> with love,</span>
        </p>
        <button className="start-test-button">Start a test</button>
        <p className="min-test"> Take only 5 minutes </p>
      </div>
    </div>

    {/* Work with us container */}

    <div className="work-with-us-container">
      <div className="work-with-us-description-container">
        <div className="about-product-container">
          <h1 className="work-with-us-title"> Work with us </h1>
          <div className="about-product-description">
            <div className="about-container">
              <img
                src="https://self-awareness.ahead-app.com/static/media/home_owel.e23a16a0.svg"
                className="meet-ahead-image"
                alt="meet ahead"
              />
              <h1 className="about-title"> About </h1>
              <p className="about-content">
                {" "}
                At ahead our goal is to make self-improvement fun and lasting.
                We know there's a way how to make it work. And that's what aHead
                is all about!{" "}
              </p>
            </div>
            <div className="product-container">
              <h1 className="about-title"> Product </h1>
              <p className="about-content">
                {" "}
                Sure, you could spend ages reading books or sitting in seminars
                on how to become a better spouse, parent, or manager - like we
                did...
              </p>
            </div>
          </div>
        </div>

        <div className="cards-products-container">
          <h1 className="ahead-product-heading "> ahead </h1>
          <div className="ahead-card-containers">
            <h1 className="ahead-titled">
              {" "}
              Power through, even when the going sets tough{" "}
            </h1>
            <p className="ahead-content-con">
              {" "}
              We help you spot and work around stands in a way, be it bad
              habits, fears, etc.{" "}
            </p>
          </div>
          <div className="ahead-card-containers">
            <h1 className="ahead-titled">
              {" "}
              Power through, even when the going sets tough{" "}
            </h1>
            <p className="ahead-content-con">
              {" "}
              We help you spot and work around stands in a way, be it bad
              habits, fears, etc.{" "}
            </p>
          </div>
          <div className="ahead-card-containers">
            <h1 className="ahead-titled">
              {" "}
              Power through, even when the going sets tough{" "}
            </h1>
            <p className="ahead-content-con">
              {" "}
              We help you spot and work around stands in a way, be it bad
              habits, fears, etc.{" "}
            </p>
          </div>
          <div className="ahead-card-containers">
            <h1 className="ahead-titled">
              {" "}
              Power through, even when the going sets tough{" "}
            </h1>
            <p className="ahead-content-con">
              {" "}
              We help you spot and work around stands in a way, be it bad
              habits, fears, etc.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Open vacancies container */}

    <div className="open-vacancies-container">
      <div className="open-vacancies-description">
        <h1 className="open-vacancies-title"> Open Vacancies </h1>
        <div className="open-roles-container">
          <div className="vacancy-card">
            <h1 className="role"> Senior Full-Stack Engineer </h1>
            <ul>
              <li className="role-part"> Full-time position </li>
              <li className="role-part"> Berlin or remote </li>
              <li className="role-part">
                {" "}
                $65-85k, 0.5-1.50% equity share options{" "}
              </li>
            </ul>
          </div>
          <div className="vacancy-card">
            <h1 className="role"> Senior Designer </h1>
            <ul>
              <li className="role-part"> Full-time position </li>
              <li className="role-part"> Berlin or remote </li>
              <li className="role-part">
                {" "}
                $40-55k, 0.25-0.50% equity share options{" "}
              </li>
            </ul>
          </div>
          <div className="vacancy-card">
            <h1 className="role"> Superstar intern </h1>
            <ul>
              <li className="role-part"> Full-time position </li>
              <li className="role-part"> Berlin or remote </li>
              <li className="role-part">
                {" "}
                $20-24k, 0.5-1.50% equity share options{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <hr className="hr-line" />
  </div>
);

export default MainContent;
