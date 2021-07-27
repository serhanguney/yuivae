import styles from "../../styles/Yuipoll.module.scss";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Form from "../../components/Form/Form";
import Progress from "../../components/Progress/Progress";
import { vote } from "../../services/firebase";
import Button from "../../components/Button/Button";
import { firebase } from "../../lib/firebase";
import Layout from "../../components/Layout/Layout";
import Navbar from "../../components/Navbar/Navbar";

type Poll = {
  answers: { [number: string]: { answer: string; vote: number } };
  question: string;
};
export default function poll() {
  const router = useRouter();
  //initial state is null to ensure there is no paint before we receive data
  const [poll, setPoll] = useState<Poll | null>(null);
  const [isVoted, setIsVoted] = useState(false);

  //this useEffect is used to fetch data based on router params - triggercount is 2
  useEffect(() => {
    console.log(localStorage.getItem("voted"));
    let unsubscribe;
    setIsVoted(localStorage.getItem(`voted-${router.query.id}`) ? true : false);
    if (router.isReady) {
      console.log("id useEffect", router.query.id);
      unsubscribe = firebase
        .firestore()
        .collection("polls")
        .doc(router.query.id as string)
        .onSnapshot((doc) => setPoll(doc.data() as Poll));
    }
    return unsubscribe;
  }, [router]);

  //this function is used for conditional rendering of the polls
  function displayPoll() {
    const { answers, question } = poll;
    console.log(poll);
    //calculate the total votes
    const answersArray = Object.values(answers);
    let totalVotes = 0;
    answersArray.forEach((item) => (totalVotes += item.vote));

    return (
      <div className={styles.pollContainer}>
        <div className={`${styles.progressBars} center`}>
          {answersArray.map((item, index) => (
            <Progress
              key={item.answer}
              stats={{ vote: item.vote, total: totalVotes }}
              index={index}
            />
          ))}
        </div>
        <p className={styles.totalVotes}>Total Votes: {totalVotes}</p>
        <p className={styles.question}>{question}</p>
        {
          <>
            {isVoted && (
              <div className={styles.thankYou}>
                <p>
                  You voted for:{" "}
                  <span>
                    {localStorage.getItem(`voted-${router.query.id}`)}
                  </span>
                </p>
              </div>
            )}
            {Object.values(answers).map((item, index) => (
              <div key={index} className={styles.answers}>
                <h3 className={styles.number}>{index + 1}</h3>
                <Button
                  type={{ fourth: true }}
                  text={item.answer}
                  onClick={(e) => {
                    e.preventDefault();
                    handleVote(index + 1);
                  }}
                  disabled={isVoted}
                />
              </div>
            ))}
          </>
        }
      </div>
    );
  }

  async function handleVote(optionNumber: number) {
    try {
      await vote(router.query.id, optionNumber);
      localStorage.setItem(`voted-${router.query.id}`, optionNumber.toString());
      setIsVoted(true);
    } catch (error) {
      console.log("post unsuccessful", error);
    }
  }
  return (
    <Layout>
      <Navbar />
      {poll && (
        <Form middle={true}>
          <h1 className={styles.pollTitle}>YuiPoll</h1>
          {displayPoll()}
        </Form>
      )}
    </Layout>
  );
}
