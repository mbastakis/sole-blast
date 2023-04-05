<template>
  <div id="faq">
    <navbar></navbar>
    <div class="faq-container">
      <div class="header">
        <h2>Ordering Process</h2>
      </div>
      <div
        class="faq-item"
        v-for="(item, index) in orderingProcess"
        :key="index"
      >
        <div class="question" @click="toggleOrderingProcess(index)">
          <span>{{ item.question }}</span>
          <i
            class="arrow"
            :class="{ down: item.showAnswer, right: !item.showAnswer }"
          ></i>
        </div>
        <div class="answer" v-show="item.showAnswer" v-html="item.answer"></div>
      </div>

      <div class="header">
        <h2>Pricing</h2>
      </div>
      <div class="faq-item" v-for="(item, index) in pricing" :key="index">
        <div class="question" @click="togglePricing(index)">
          <span>{{ item.question }}</span>
          <i
            class="arrow"
            :class="{ down: item.showAnswer, right: !item.showAnswer }"
          ></i>
        </div>
        <div class="answer" v-show="item.showAnswer" v-html="item.answer"></div>
      </div>

      <div class="header">
        <h2>Product Related Questions</h2>
      </div>
      <div
        class="faq-item"
        v-for="(item, index) in productRelatedQuestions"
        :key="index"
      >
        <div class="question" @click="toggleProductRelatedQuestions(index)">
          <span>{{ item.question }}</span>
          <i
            class="arrow"
            :class="{ down: item.showAnswer, right: !item.showAnswer }"
          ></i>
        </div>
        <div class="answer" v-show="item.showAnswer" v-html="item.answer"></div>
      </div>

      <div class="header">
        <h2>Shipping & Returns</h2>
      </div>
      <div
        class="faq-item"
        v-for="(item, index) in shippingAndReturns"
        :key="index"
      >
        <div class="question" @click="toggleShippingAndReturns(index)">
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
      orderingProcess: [
        {
          question: "How can I order a custom pair of shoes?",
          answer:
            "<div>To order a custom pair of shoes, follow the instructions listed in <a href='/yoursole'>Your Design page</a>. \n\nGet ready to pursue new adventures wearing a head-turning unique pair of shoes!</div>",
          showAnswer: false,
        },
        {
          question: "How long will it take to prepare a custom pair?",
          answer:
            "We strive to complete your order as quickly as possible: \n\
            • It takes approximately 3 days to get the shoes delivered to our workshop. \n\
            • Customization and painting takes between 3-7 days, depending on the complexity of the design. \n\
            • Shipping takes around 6 days for Europe and 7-15 days for other countries.",
          showAnswer: false,
        },
        {
          question: "Can I send you a pair of shoes?",
          answer:
            "While we typically handle the purchase of shoes in your preferred size, if you have a special pair of shoes for customization, you can send them to us.",
          showAnswer: false,
        },
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept various payment methods, including credit cards, PayPal, and bank transfers.",
          showAnswer: false,
        },
        {
          question:
            "Can I request a rush order for a specific event or occasion?",
          answer:
            "Yes, we will do our best to prioritize your order and use the quickest delivery service for your country (additional charges apply). Just include a note with your request when submitting the order.",
          showAnswer: false,
        },
      ],
      pricing: [
        {
          question: "What is the cost for a custom pair?",
          answer:
            "The total cost depends on the chosen base shoe and the complexity of your design. For example, a pair of Nike Air Force 1's costs around 140€, and a simple artwork would cost around 90€, totaling 230€.",
          showAnswer: false,
        },
        {
          question:
            "Are there any special offers or discounts for bulk orders or group purchases?",
          answer:
            "Please contact us in <a href = 'mailto: soleblastofficial@gmail.com'>soleblastofficial@gmail.com</a> to discuss bulk orders or group purchase discounts.",
          showAnswer: false,
        },
      ],
      productRelatedQuestions: [
        {
          question: "Can I select a design that has been painted before?",
          answer:
            "Yes, you can choose any design from <a href='/gallery'>our store</a> but please note that each pair is 100% hand-painted and unique, so we cannot guarantee an exact replica. We'll always aim to make the new pair even better!",
          showAnswer: false,
        },
        {
          question: "What sizes are available?",
          answer: "We can customize any size available on the market. Sizes for kids are also available!",
          showAnswer: false,
        },
        {
          question: "What shoe brands and models can I choose from?",
          answer:
            "Popular options include Nike Air Force 1's and Vans slip-on's due to their large painting surface.\nOther choices include Vans Classic, Vans Old Skool, Dr. Martens, Nike Air Max, Nike Dunk and Air Jordan 1.\nYou can also send us your own pair of shoes.",
          showAnswer: false,
        },
        {
          question: "How durable is the artwork?",
          answer:
            "Our artwork is crafted using high-quality materials and best practices to ensure its durability. We guarantee that the artwork is 100% permanent and will not fade over time. Feel free to wear your shoes in any condition!",
          showAnswer: false,
        },
        {
          question: "Can I wash the shoes?",
          answer:
            "Absolutely! You can wash your custom shoes without any issues.",
          showAnswer: false,
        },
      ],
      shippingAndReturns: [
        {
          question: "Do you ship to my country?",
          answer:
            "Yes, we ship worldwide using only tracked shipping options to ensure your order arrives safely.",
          showAnswer: false,
        },
        {
          question: "What shipping services do you use and what is the cost?",
          answer:
            "We use a variety of reliable shipping services, such as DHL, UPS, and FedEx, to ensure the safe and timely delivery of your order. Shipping costs vary depending on the destination country and the selected shipping service. We will provide you with the exact shipping cost during the checkout process.",
          showAnswer: false,
        },
        {
          question: "How do I track my order?",
          answer:
            "We'll keep you informed via email about your order's progress. Once we ship the finished product, we'll provide you with the tracking number.",
          showAnswer: false,
        },
        {
          question: "Where do you ship from?",
          answer: "We ship from Athens, Greece.",
          showAnswer: false,
        },
        {
          question: "Will there be any import fees?",
          answer:
            "We ship from Europe, so there are no import fees for European Union countries. For the rest of the world, it's the buyer's responsibility to check if import duties apply in their country and pay any import taxes and fees that may be charged upon arrival. Please be aware of your country's shipping fees before purchasing.",
          showAnswer: false,
        },
        {
          question: "What is the return policy?",
          answer:
            "Since each item is custom painted, we cannot accept returns or provide refunds. However, we value customer feedback and will address any issues you may have. Please report any faults or complaints within 3 days of receiving your order. We'll do our best to keep you satisfied.",
          showAnswer: false,
        },
      ],
    };
  },
  methods: {
    toggleOrderingProcess(index) {
      this.orderingProcess[index].showAnswer =
        !this.orderingProcess[index].showAnswer;
    },
    togglePricing(index) {
      this.pricing[index].showAnswer = !this.pricing[index].showAnswer;
    },
    toggleProductRelatedQuestions(index) {
      this.productRelatedQuestions[index].showAnswer =
        !this.productRelatedQuestions[index].showAnswer;
    },
    toggleShippingAndReturns(index) {
      this.shippingAndReturns[index].showAnswer =
        !this.shippingAndReturns[index].showAnswer;
    },
  },
  components: {
    navbar,
  },
};
</script>

<style scoped>
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

#faq {
  height: 100%;
  overflow: auto;
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
  margin-top: var(--space-xl);
  width: 100%;
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
  white-space: pre-wrap;
}
</style>
