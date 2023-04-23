<template>
  <div id="faq">
    <div
      v-for="(section, sectionIndex) in faqSections"
      :key="'section-' + sectionIndex"
      class="faq-container"
    >
      <div class="header">
        <h2>{{ section.title }}</h2>
      </div>
      <div class="faq-item" v-for="(item, index) in section.items" :key="section.keyPrefix + index">
        <div class="question" @click="toggleAnswer(sectionIndex, index)">
          <span>{{ item.question }}</span>
          <i class="arrow" :class="{ down: item.showAnswer, right: !item.showAnswer }"></i>
        </div>
        <div
          class="answer"
          v-show="item.showAnswer"
          v-html="item.answer"
          @click="handleClick($event)"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FAQ',
  data() {
    return {
      faqSections: [
        {
          title: 'General Information',
          keyPrefix: 'general-',
          toggleMethod: this.toggleGeneralInformation,
          items: [
            {
              question: 'What does Sole-Blast stand for?',
              answer:
                "In Sole-Blast, we believe that shoes offer a unique opportunity to unleash your inner creativity, elevate your style and make a lasting impression. That's why we're dedicated to transforming each customer's distinct vision into an awesome one-of-a-kind shoe design. <a class='test' href='/yourdesign'>Order yours now!</a>",
              showAnswer: false
            },
            {
              question: 'What do we offer?',
              answer:
                "\tOur workshop excels in creating custom painted shoes tailored to your individual style. We provide a range of options, including unique designs inspired by your ideas and an exclusive selection of <a href='/shop'>Sole-Blast originals</a> to choose from. \n\n\tIn addition to shoes, our expertise extends to customizing a diverse array of items such as bags, wallets, skateboards, snowboards, and more. If you're seeking a special customization, simply fill out <a href='/yourdesign'>Your Design form</a>, and let us bring your vision to life!",
              showAnswer: false
            }
          ]
        },
        {
          title: 'Ordering Process',
          keyPrefix: 'order-',
          toggleMethod: this.toggleOrderingProcess,
          items: [
            {
              question: 'How can I order a custom pair of shoes?',
              answer:
                "<div>To order a custom pair of shoes, follow the instructions listed in <a href='/yourdesign'>Your Design page</a>. You can also <a href='/shop'>browse our store</a> and select one of our suggested captivating designs. \n\nGet ready to pursue new adventures wearing a head-turning unique pair of shoes!</div>",
              showAnswer: false
            },
            {
              question: 'How long will it take to prepare a custom pair?',
              answer:
                'We strive to complete your order as quickly as possible: \n\
                  • It takes approximately 3 days to get the shoes delivered to our workshop. \n\
                  • Customization and painting takes between 3-7 days, depending on the complexity of the design. \n\
                  • Shipping takes around 6 days for Europe and 7-15 days for other countries.',
              showAnswer: false
            },
            {
              question: 'Can I send you a pair of shoes?',
              answer:
                'While we typically handle the purchase of shoes in your preferred size, if you have a special pair of shoes for customization, you can send them to us.',
              showAnswer: false
            },
            {
              question: 'What payment methods do you accept?',
              answer:
                'We accept various payment methods, including credit cards, PayPal, and bank transfers.',
              showAnswer: false
            },
            {
              question: 'Can I request a rush order for a specific event or occasion?',
              answer:
                'Yes, we will do our best to prioritize your order and use the quickest delivery service for your country (additional charges apply). Just include a note with your request when submitting the order.',
              showAnswer: false
            }
          ]
        },
        {
          title: 'Pricing',
          keyPrefix: 'pricing-',
          toggleMethod: this.togglePricing,
          items: [
            {
              question: 'What is the cost for a custom pair?',
              answer:
                "The total cost depends on the chosen base shoe and the complexity of your design. For example, a pair of Nike Air Force 1's costs around 140€, and a simple artwork would cost around 90€, totaling 230€.",
              showAnswer: false
            },
            {
              question:
                'Are there any special offers or discounts for bulk orders or group purchases?',
              answer:
                "Please contact us in <a href = 'mailto: soleblastofficial@gmail.com'>soleblastofficial@gmail.com</a> to discuss bulk orders or group purchase discounts.",
              showAnswer: false
            }
          ]
        },
        {
          title: 'Product Related Questions',
          keyPrefix: 'product-',
          toggleMethod: this.toggleProductRelatedQuestions,
          items: [
            {
              question: 'Can I select a design that has been painted before?',
              answer:
                "Yes, you can choose any design from <a href='/shop'>our store</a> but please note that each pair is 100% hand-painted and unique, so we cannot guarantee an exact replica. We'll always aim to make the new pair even better!",
              showAnswer: false
            },
            {
              question: 'What sizes are available?',
              answer:
                'We can customize any size available on the market. Sizes for kids are also available!',
              showAnswer: false
            },
            {
              question: 'What shoe brands and models can I choose from?',
              answer:
                "Popular options include Nike Air Force 1's and Vans slip-on's due to their large painting surface.\nOther choices include Vans Classic, Vans Old Skool, Dr. Martens, Nike Air Max, Nike Dunk and Air Jordan 1.\nYou can also send us your own pair of shoes.",
              showAnswer: false
            },
            {
              question: 'How durable is the artwork?',
              answer:
                'Our artwork is crafted using high-quality materials and best practices to ensure its durability. We guarantee that the artwork is 100% permanent and will not fade over time. Feel free to wear your shoes in any condition!',
              showAnswer: false
            },
            {
              question: 'Can I wash the shoes?',
              answer: 'Absolutely! You can wash your custom shoes without any issues.',
              showAnswer: false
            }
          ]
        },
        {
          title: 'Shipping and Returns',
          keyPrefix: 'shipping-',
          toggleMethod: this.toggleShippingAndReturns,
          items: [
            {
              question: 'Do you ship to my country?',
              answer:
                'Yes, we ship worldwide using only tracked shipping options to ensure your order arrives safely.',
              showAnswer: false
            },
            {
              question: 'What shipping services do you use and what is the cost?',
              answer:
                'We use a variety of reliable shipping services, such as DHL, UPS, and FedEx, to ensure the safe and timely delivery of your order. Shipping costs vary depending on the destination country and the selected shipping service. We will provide you with the exact shipping cost during the checkout process.',
              showAnswer: false
            },
            {
              question: 'How do I track my order?',
              answer:
                "We'll keep you informed via email about your order's progress. Once we ship the finished product, we'll provide you with the tracking number.",
              showAnswer: false
            },
            {
              question: 'Where do you ship from?',
              answer: 'We ship from Athens, Greece.',
              showAnswer: false
            },
            {
              question: 'Will there be any import fees?',
              answer:
                "We ship from Europe, so there are no import fees for European Union countries. For the rest of the world, it's the buyer's responsibility to check if import duties apply in their country and pay any import taxes and fees that may be charged upon arrival. Please be aware of your country's shipping fees before purchasing.",
              showAnswer: false
            },
            {
              question: 'What is the return policy?',
              answer:
                "Since each item is custom painted, we cannot accept returns or provide refunds. However, we value customer feedback and will address any issues you may have. Please report any faults or complaints within 3 days of receiving your order. We'll do our best to keep you satisfied.",
              showAnswer: false
            }
          ]
        }
      ]
    }
  },
  methods: {
    toggleAnswer(sectionIndex, index) {
      this.faqSections[sectionIndex].items[index].showAnswer =
        !this.faqSections[sectionIndex].items[index].showAnswer
    },
    handleClick(event) {
      if (event.target.tagName === 'A') {
        event.preventDefault() // Prevent the default navigation behavior
        const path = event.target.getAttribute('href')
        this.$router.push(path)
      }
    }
  }
}
</script>

<style scoped>
#faq {
  padding-bottom: var(--space-xl);
}
.header {
  font-size: var(--step-2);
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
  font-size: var(--step-1);
  font-weight: 600;
  color: var(--secondary);
}
.faq-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: var(--space-3xs) var(--space-s);
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
  font-size: var(--step-0);
  font-weight: 400;
  color: var(--secondary);
  white-space: pre-wrap;
}
</style>
