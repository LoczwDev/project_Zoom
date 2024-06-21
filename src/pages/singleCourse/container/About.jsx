import React, { useState } from "react";
import { Element } from "react-scroll";
import { H2MainTitle } from "../../../components/H2MainTitle";

export const About = () => {
  const [checkMore, setcheckMore] = useState(false);
  return (
    <Element name="about" className="py-10">
      <div>
        <H2MainTitle title={"About the tutor"} />
        {/* About */}
        <div
          className={`transition-all duration-0 ease-in-out h-full overflow-hidden ${
            checkMore ? "max-h-max" : "max-h-[200px]"
          }`}
        >
          <p className="leading-[20px] text-[16px]">
            Hi there, my name is Catherine and I have a background in Marketing
            and Communications. I have a corporate background but left this
            industry as I wanted to chase my own personal goals. I have
            experience teaching and consulting lawyers, executives and high
            level professionals. I also have great knowledge about the interview
            process, having recruited employees, and conducted performance
            reviews. PLEASE NOTE: I have been receiving a lot of enquiries about
            children, I do not teach children under 15, and they must have an
            intermediate level of English. Thank you. I can help you with
            pronunciation, improving your vocabulary, increasing your level of
            fluency, or preparing you for a job interview. We can work together
            to achieve your English speaking goals, and prepare you for the next
            stage of your life, whether that be professional or personal! If you
            need assistance with emails, reviewing presentations or papers,
            proofreading translated texts and documents, practicing speeches,
            want to prepare for an interview setting, or just want to discuss
            topics that put your English skills to the test, and expand your
            vocabulary, I am excited to help you! My lessons are informative,
            interesting and fun but also professional and tailored to your
            specific goals. I am passionate about the environment, I love to
            stay fit and healthy, I enjoy meeting new people, and I love to make
            the most of everyday. I have taught English in person and online to
            over 800 students, from over 30 different countries, and am patient
            and kind. I know learning a language is tough, and having confidence
            is the hardest part, but with continued practice you can improve,
            and you will quickly pick up new vocabulary and phrases. My
            classroom is a safe space for anyone from any political or social
            belief, and I am accepting of all students regardless of gender,
            sexuality or cultural belief. I am looking forward to hearing from,
            and chatting with you! I have taught English in person and online to
            over 800 students, from over 30 different countries, and am patient
            and kind. I have taught online for the last two years but prior to
            this all of my experience was in person, and typically with adult
            groups, I have also worked in an English International School with
            children ages 1 - 11, but I know myself, and working with adults is
            what I enjoy the most. I am TEFL Certified and have experience
            preparing young adults for the IELTs exam, and UK university
            entrance exams. I know learning a language is tough, and having
            confidence is the hardest part, so all of my lessons are based on
            making you feel comfortable and giving you a safe space to practice.
            I have a background in Marketing and worked in an international
            company where not everyone had English as their first language, not
            only does this make me very patient, but I am also very familiar
            with the language needed in a business environment or in a more
            professional situation. I have some excellent reviews from my
            students and can adapt the lessons to your specific goals and
            targets. I would love for you to book a trial lesson with me so we
            can discuss your goals and targets, within the trial lesson we will
            typically spend half the lesson getting to know each other, I will
            assess your language skills and you can share with me all your goals
            and targets. From here we can create a plan together to increase
            your language skills, work towards your targets, and improve your
            confidence. Please do not hesitate to contact me with any questions,
            I should be able to answer most of them! I look forward to meeting
            you soon!
          </p>
        </div>
        <button
          className="underline font-[700]"
          onClick={() => setcheckMore(!checkMore)}
        >
          {checkMore ? "Hide" : "Show more"}
        </button>
      </div>
    </Element>
  );
};
