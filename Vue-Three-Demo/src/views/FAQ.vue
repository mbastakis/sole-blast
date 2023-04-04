<template>
  <div id="faq">
    <navbar></navbar>
    <div class="header">
      <h2>Frequently Asked Questions</h2>
    </div>
    <div class="faq-container">
      <div class="faq-item" v-for="(item, index) in faqItems" :key="index">
        <div class="question" @click="toggleAnswer(index)">
          <span>{{ item.question }}</span>
          <i
            class="arrow"
            :class="{ down: item.showAnswer, right: !item.showAnswer }"
          ></i>
        </div>
        <div class="answer" v-show="item.showAnswer">{{ item.answer }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "@/components/Navbar.vue";
export default {
  name: "FAQ",
  data() {
    return {
      faqItems: [
        {
          question: "What is Lorem Ipsum?",
          answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          showAnswer: false,
        },
        {
          question: "Why do we use it?",
          answer:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
          showAnswer: false,
        },
        {
          question: "Where does it come from?",
          answer:
            "Contrary to popular belief, Lorem Ipsum is not simply random text.",
          showAnswer: false,
        },
        {
          question: "How can I get more information?",
          answer:
            "Please contact our customer support team at support@example.com.",
          showAnswer: false,
        },
        {
          question: "How can I get more information?",
          answer:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
          showAnswer: false,
        },
        {
          question: "How can I get more information?",
          answer:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
          showAnswer: false,
        },
        {
          question: "How can I get more information?",
          answer:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
          showAnswer: false,
        },
        {
          question: "How can I get more information?",
          answer:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
          showAnswer: false,
        },
      ],
    };
  },
  methods: {
    toggleAnswer(index) {
      this.faqItems[index].showAnswer = !this.faqItems[index].showAnswer;
    },
  },
  components: {
    navbar,
  },
};
</script>

<style>
:root {
  --primary: white;
  --secondary: #282e5c;

  --step--2: clamp(0.78rem, calc(0.72rem + 0.31vw), 0.96rem);
  --step--1: clamp(0.94rem, calc(0.85rem + 0.46vw), 1.2rem);
  --step-0: clamp(1.13rem, calc(0.99rem + 0.65vw), 1.5rem);
  --step-1: clamp(1.35rem, calc(1.17rem + 0.91vw), 1.88rem);
  --step-2: clamp(1.62rem, calc(1.37rem + 1.26vw), 2.34rem);
  --step-3: clamp(1.94rem, calc(1.6rem + 1.72vw), 2.93rem);
  --step-4: clamp(2.33rem, calc(1.87rem + 2.31vw), 3.66rem);
  --step-5: clamp(2.8rem, calc(2.18rem + 3.09vw), 4.58rem);

  --space-3xs: clamp(0.31rem, calc(0.29rem + 0.11vw), 0.38rem);
  --space-2xs: clamp(0.56rem, calc(0.5rem + 0.33vw), 0.75rem);
  --space-xs: clamp(0.88rem, calc(0.79rem + 0.43vw), 1.13rem);
  --space-s: clamp(1.13rem, calc(0.99rem + 0.65vw), 1.5rem);
  --space-m: clamp(1.69rem, calc(1.49rem + 0.98vw), 2.25rem);
  --space-l: clamp(2.25rem, calc(1.99rem + 1.3vw), 3rem);
  --space-xl: clamp(3.38rem, calc(2.98rem + 1.96vw), 4.5rem);
  --space-2xl: clamp(4.5rem, calc(3.98rem + 2.61vw), 6rem);
  --space-3xl: clamp(6.75rem, calc(5.97rem + 3.91vw), 9rem);
}

html,
body {
  width: 100%;
  height: 100%;
  margin: 0px;
  font-family: "Source Sans Pro", sans-serif;
}

#faq {
  height: 100%;
  overflow: scroll;
  background: #dabed3;
  background: -moz-linear-gradient(
    -45deg,
    #dabed3 1%,
    #a9b1e0 33%,
    #a9b1e0 53%,
    #898acb 100%
  );
  background: -webkit-linear-gradient(
    -45deg,
    #dabed3 1%,
    #a9b1e0 33%,
    #a9b1e0 53%,
    #898acb 100%
  );
  background: linear-gradient(
    135deg,
    #dabed3 1%,
    #a9b1e0 33%,
    #a9b1e0 53%,
    #898acb 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#dabed3', endColorstr='#898acb',GradientType=1 );
}
.header {
  font-size: var(--step-1);
  font-weight: 800;
  color: var(--secondary);
  text-align: center;
  padding: var(--space-m);
  margin-top: var(--space-m);
}
.question {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: var(--space-3xs);
  font-size: var(--step-0);
  font-weight: 600;
  color: var(--secondary);
}
.faq-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: var(--space-m);
  gap: var(--space-m);
}
.faq-item {
  width: 100%;
  background: white;
  border-radius: 1.5rem;
  padding: var(--space-m);
  box-shadow: 0rem 1rem 10px 0px rgba(0, 0, 0, 0.2);
  max-width: 60rem;
}

.answer {
  padding-top: var(--space-s);
  display: block;
  font-size: var(--step--1);
  font-weight: 400;
  color: var(--secondary);
}
</style>
