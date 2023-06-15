<template>
    <div class="policies">
        <div class="policies-container">
            <div class="header">{{ policies.title }}</div>
            <BaseFAQContainer :faqData="policies.items" />
        </div>
    </div>
</template>

<script>
import BaseFAQContainer from '../components/BaseFAQContainer.vue'

export default {
    components: { BaseFAQContainer },
    mounted() {
    const navbar = document.getElementById('navbar')
    const navbarHeight = navbar.offsetHeight

    const footer = document.getElementById('footer-section')
    const footerHeight = footer.offsetHeight

    const notFound = document.getElementsByClassName('policies')[0]
    const windowHeight = window.innerHeight

    let notFoundHeight = 0
    if (navbarHeight + footerHeight + 200 < windowHeight) {
      notFoundHeight = windowHeight - navbarHeight - footerHeight
    } else {
      notFoundHeight = windowHeight - navbarHeight
    }

    notFound.style.minHeight = `${notFoundHeight}px`
  },
    data() {
    return {
      policies: {
          title: 'Terms & Conditions',
          items: [
            {
              question: 'Shipping',
              answer:
                "All sneakers are 100% hand-painted and we also need some time to get the shoes delivered to our workshop. Please allow up to 12 business days for processing before shipping. If you need your order urgently, please let us know.</br></br> We utilize a variety of reliable shipping services, such as DHL, UPS, FedEx, and more, to ensure the safe and timely delivery of your order.</br></br>Shipping costs depend on the destination country and the selected shipping service. We will provide the exact shipping cost during the checkout process.",
              
            },
            {
              question: 'Return & Exchange',
              answer:
                "All our products are custom made and hand painted. That's why we can not offer refunds, returns, or exchanges on orders. All designs are created upon request, so please ensure you have chosen the correct size, base shoe, and design when ordering. For any questions or for further details/changes on orders, please contact us.",
              
            },
            {
                question: 'Privacy',
                answer:
                "This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from <a href='/'>www.sole-blast.com</a>.</br></br>When you visit the site, we automatically collect certain information about your device, including information about your web browser, IP address, and time zone. Additionally, as you browse the site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the site, and how you interact with the site. We refer to this automatically-collected information as “Device Information”. We respect your privacy and do not collect cookies.\
                </br></br>\
                <h4>We collect device information using the following technologies:</h4>\
                “Log files” track actions occurring on the Site and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.</br></br>When you make a purchase or attempt to make a purchase through the site, we collect certain information from you, including your name, billing address, shipping address, econtact details, and payment information. We refer to this information as “Order Information”.</br></br>When we refer to “Personal Information” in this Privacy Policy, we are discussing both Device Information and Order Information.</br></br>\
                <h4>How do we use your personal information:</h4>\
                We use the Order Information that we collect to fulfill orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations). In addition, we use this Order Information to:</br></br>\
                <ul style='margin-left: 2em;'>\
                <li> Communicate with you;</li>\
                <li>Screen our orders for potential risk or fraud; and</li>\
                <li>When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.</li>\
                </ul>\
                </br></br>We use the Device Information we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Site (for example, by generating analytics about how our customers browse and interact with the Site, and to assess the success of our marketing and advertising campaigns).\
                </br></br>\
                <h4>Sharing your personal information:</h4>\
                We may share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to protect our rights.\
                </br></br>\
                <h4>Behavioural advertising:</h4>\
                As described above, we use your Personal Information to provide you with targeted advertisements or marketing communications we believe may be of interest to you. For more information about how targeted advertising works, you can visit the Network Advertising Initiative’s (“NAI”) educational page at \
                <a href='http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work'>www.networkadvertising.org/how-does-it-work</a>.\
                </br></br>\
                You can opt out of targeted advertising by using the links below:\</br></br>\
                <ul style='margin-left: 2em;'>\
                <li> Facebook: <a href='https://www.facebook.com/settings/?tab=ads'>https://www.facebook.com</a></li>\
                <li> Google: <a href='https://www.google.com/settings/ads/anonymous'>https://www.google.com</a></li>\
                </ul>\
                </br></br>\
                Additionally, you can opt out of some of these services by visiting the Digital Advertising Alliance’s opt-out portal at: <a href='http://optout.aboutads.info/'>http://optout.aboutads.info/</a>.\
                </br></br>\
                <h4>Do not track:</h4>\
                Please note that we do not alter our Site’s data collection and use practices when we see a Do Not Track signal from your browser.\
                </br></br>\
                <h4>Your rights:</h4>\
                If you are a European resident, you have the right to access the personal information we hold about you and to request that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us.\
                </br></br>\
                Additionally, if you are a European resident, we note that we are processing your information in order to fulfill contracts we might have with you (for example, if you make an order through the Site), or otherwise to pursue our legitimate business interests listed above.\
                </br></br>\
                <h4>Data retention:</h4>\
                When you place an order through the Site, we will maintain your Order Information for our records unless and until you ask us to delete this information.\
                </br></br>\
                <h4>Various:</h4>\
                We are not affiliated with the respective brands you may see on our website. We buy the shoes and add our own custom designs on them and pass them on to our valued customers.\
                </br></br>\
                <h4>Changes:</h4>\
                We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.\
                </br></br>\
                <h4>Contact us:</h4>\
                For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at soleblastofficial@gmail.com\
                "
            }
          ]
        }
    }
  },
}
</script>

<style scoped>
    .policies {
        display: grid;
        place-items: center;
        width: 100%;;
        padding: var(--space-xl) var(--space-xs) var(--space-xl) var(--space-xs);
    }
    .policies-container {
        padding: var(--space-m) var(--space-l);
        background-color: var(--primary);
        border-radius: 1.5rem;
        max-width: 1400px;
    }
    .header {
        font-size: var(--step-2);
        font-weight: 800;
        color: var(--secondary);
        text-align: center;
        margin: var(--space-xs) 0 var(--space-m) 0;
        width: 100%;
      }
</style>