import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const headings = [
  { id: 'early-morning', text: 'Early Morning: Arriving at the Family Home' },
  { id: 'morning-assessment', text: 'Morning Assessment: Mom and Baby' },
  { id: 'midday', text: 'Midday: Education, Feeding Support, and Rest' },
  { id: 'afternoon', text: 'Afternoon: Second Client or Administrative Work' },
  { id: 'on-call', text: 'On-Call and After-Hours Realities' },
  { id: 'emotional-labor', text: 'The Emotional Labor of Postpartum Care' },
  { id: 'faq', text: 'Frequently Asked Questions' },
];

const relatedResources = [
  {
    title: 'A Day in the Life of a Geriatric Concierge Nurse',
    description: 'See how concierge nurses serving elderly clients structure their days.',
    link: '/resources/day-in-the-life/geriatric-concierge-nurse',
    category: 'Day in the Life',
  },
  {
    title: 'Best Medical Bags and Supplies for Mobile Concierge Nurses',
    description: 'Essential supplies for home visits across all concierge nursing niches.',
    link: '/resources/best/medical-bags-supplies-concierge-nurses',
    category: 'Best Of',
  },
  {
    title: 'How to Price Concierge Nursing Services',
    description: 'Set rates that reflect your expertise and attract the right clients.',
    link: '/resources/how-to-price-concierge-nursing-services',
    category: 'Financial',
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does a postpartum concierge nurse do on a typical day?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A postpartum concierge nurse provides in-home skilled nursing care to new mothers and their babies. A typical day includes physical assessments for both mom and baby, breastfeeding support, newborn care education, emotional wellness checks, and coordination with the family's OB or pediatrician."
      }
    },
    {
      "@type": "Question",
      "name": "Is postpartum concierge nursing the same as being a doula?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. A postpartum concierge nurse is a licensed RN or LPN who provides clinical care — physical assessments, wound care (for C-section recovery), medication management, and medical monitoring. A postpartum doula provides non-clinical emotional and practical support. Some nurses hold both credentials."
      }
    },
    {
      "@type": "Question",
      "name": "Do you need OB experience to become a postpartum concierge nurse?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "OB, labor and delivery, or NICU experience is highly beneficial but not always required. Nurses with strong med-surg or pediatric backgrounds can transition into this niche with additional training in postpartum assessment, breastfeeding support, and newborn care."
      }
    },
    {
      "@type": "Question",
      "name": "How many families does a postpartum concierge nurse work with at once?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most postpartum concierge nurses work with one to three families at a time, depending on the service model. Some offer intensive packages with daily visits for the first two weeks, while others provide weekly check-in visits over a longer period."
      }
    },
    {
      "@type": "Question",
      "name": "What is the most rewarding part of postpartum concierge nursing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Many postpartum concierge nurses say the most rewarding part is empowering new parents with confidence. Watching a first-time mother go from overwhelmed to capable, and knowing your clinical guidance made that transition smoother, is deeply fulfilling work."
      }
    }
  ]
};

export default function PostpartumNurseDayInLife() {
  return (
    <ResourceLayout
      title="A Day in the Life of a Postpartum Concierge Nurse"
      description="Walk through a real day as a postpartum concierge nurse — from early morning family visits to after-hours lactation calls — and discover what this deeply rewarding niche looks like in practice."
      canonical="/resources/day-in-the-life/postpartum-concierge-nurse"
      category="Day in the Life"
      categorySlug="/resources/day-in-the-life"
      headings={headings}
      relatedResources={relatedResources}
      faqSchema={faqSchema}
    >
      <QuickAnswer>
        <p>
          A postpartum concierge nurse provides private, in-home nursing care to new mothers and their babies during the critical first weeks after birth. A typical day centers on maternal and newborn assessments, breastfeeding support, education for new parents, and emotional wellness monitoring — all delivered with the personalized attention that only one-on-one care allows.
        </p>
      </QuickAnswer>

      <h2 id="early-morning">Early Morning: Arriving at the Family Home</h2>
      {/* TRACY TO FILL: What does your morning look like before arriving at a postpartum client's home? What time do you typically arrive? How do you prepare the night before? What's in your bag specifically for postpartum visits? */}
      <p>
        Postpartum visits often start early. New parents are exhausted, and the morning is when accumulated overnight concerns surface — questions about feeding patterns, worry about the baby's temperature, uncertainty about their own recovery. Arriving early means you catch the family when they need you most.
      </p>
      {/* TRACY TO FILL: Describe the feeling of walking into a new parent's home in the first week. What do you notice first? How do you read the environment? What signals tell you how the family is doing before you even start your assessment? */}
      <p>
        Before ringing the doorbell, you mentally prepare. Every family is different — a first-time mother recovering from a C-section has very different needs from an experienced parent navigating a challenging breastfeeding experience with a new baby. You review your notes from the last visit and any messages the family sent overnight.
      </p>
      {/* TRACY TO FILL: Do you communicate with families before morning visits? Do they text you overnight questions? How do you manage that boundary? */}

      <h2 id="morning-assessment">Morning Assessment: Mom and Baby</h2>
      {/* TRACY TO FILL: Walk through your actual assessment process. What do you assess on the mother first? What does your newborn assessment include? How do you document findings? How long does a full assessment take? */}
      <p>
        The assessment is the clinical backbone of the visit. For the mother, this includes checking vital signs, assessing the uterine fundus, evaluating lochia, inspecting any incisions (for C-section clients), checking for signs of infection, assessing for breast engorgement or mastitis, and screening for postpartum mood concerns.
      </p>
      <p>
        For the newborn, you monitor weight (if you carry a portable scale), assess jaundice, check the umbilical cord site, evaluate feeding effectiveness (latch, duration, frequency), monitor wet and dirty diapers, and assess overall tone and alertness.
      </p>
      {/* TRACY TO FILL: What specific tools do you bring for assessments? Do you carry a baby scale? Bilirubin meter? What documentation forms do you use? What findings prompt you to call the OB or pediatrician? Give real examples. */}
      <p>
        Breastfeeding support is often the most time-intensive part of the visit. You may spend 30 minutes or more working with a mother on positioning, latch techniques, and troubleshooting feeding challenges. This is where your clinical knowledge intersects with patience and compassion — breastfeeding difficulties can feel overwhelming to a sleep-deprived new parent.
      </p>
      {/* TRACY TO FILL: Describe a real breastfeeding support session (anonymized). What are the most common challenges you see? How do you approach a mother who is struggling? What resources do you recommend when a lactation consultant referral is needed? */}

      <h2 id="midday">Midday: Education, Feeding Support, and Rest</h2>
      {/* TRACY TO FILL: What does the midday portion of a postpartum visit look like? Do you encourage the mother to rest while you monitor the baby? What educational topics do you cover? How do you involve partners and family members? */}
      <p>
        By midday, the focus shifts from assessment to education and support. You teach new parents about infant cues, safe sleep practices, bathing techniques, and what warning signs to watch for between visits. If the mother is recovering from a C-section, you review activity restrictions and wound care.
      </p>
      <p>
        Many postpartum concierge nurses encourage the mother to nap during this portion of the visit while they monitor the baby. This protected rest time is one of the most valued aspects of the service — sleep deprivation compounds every other postpartum challenge, and knowing a nurse is watching the baby allows mothers to genuinely rest.
      </p>
      {/* TRACY TO FILL: Do you actually watch the baby while mom sleeps? How long? Is this part of your standard package? How do families react to this offer? */}

      <h2 id="afternoon">Afternoon: Second Client or Administrative Work</h2>
      {/* TRACY TO FILL: How do you spend your afternoons? Do you see a second family? Work on business admin? Take prenatal consultations? What does your typical afternoon schedule look like? */}
      <p>
        Depending on your practice model, the afternoon may involve a second family visit or administrative work. If you offer intensive packages (daily visits for the first one to two weeks postpartum), you may have a full schedule. If your model is less intensive, afternoon time goes to documentation, prenatal consultations with expecting families, and practice management tasks.
      </p>
      {/* TRACY TO FILL: How do you balance clinical work with business work? How much time per week goes to admin versus client visits? What administrative tasks take the most time? */}
      <p>
        Prenatal consultations are valuable for both client relationships and your business. Meeting families before the baby arrives lets you build rapport, assess the home environment, create a customized care plan, and set expectations for the postpartum period. Families who meet you before birth feel more comfortable with your presence during the vulnerable postpartum days.
      </p>

      <h2 id="on-call">On-Call and After-Hours Realities</h2>
      {/* TRACY TO FILL: Describe the on-call reality. How often do clients contact you after hours? What are the most common after-hours questions? How do you handle true concerns versus anxiety-driven calls? What boundaries have you set? */}
      <p>
        Babies do not operate on business hours, and neither do the concerns of new parents. Many postpartum concierge nurses offer some form of after-hours availability — whether that is a dedicated on-call window, a text message option, or emergency phone access during specific hours.
      </p>
      {/* TRACY TO FILL: What is your actual after-hours policy? Do you charge extra for after-hours support? How do you prevent burnout? Share a real example of an after-hours call that made a difference. */}
      <p>
        Setting clear boundaries is essential for sustainability. Your service agreement should specify what constitutes an after-hours concern, how families should contact you, and what your response time will be. Most families respect these boundaries when they are clearly communicated — and they appreciate knowing exactly what to expect.
      </p>

      <h2 id="emotional-labor">The Emotional Labor of Postpartum Care</h2>
      {/* TRACY TO FILL: This is important. Share your honest perspective on the emotional weight of this work. How do you handle seeing families struggle? What do you do when you suspect postpartum depression? How do you take care of your own emotional health? */}
      <p>
        Postpartum nursing carries a unique emotional weight. You are entering homes during one of the most transformative and vulnerable periods of a family's life. Some visits are joyful — everything is going well, the baby is thriving, the parents are bonding. Others are harder — a mother struggling with breastfeeding and questioning her ability to care for her child, or a family dealing with unexpected complications.
      </p>
      <p>
        Screening for postpartum mood disorders is a critical part of your role. Using validated screening tools and maintaining open, nonjudgmental conversations about mental health can help identify families who need additional support. When you suspect postpartum depression or anxiety, connecting the family with appropriate mental health resources is one of the most impactful things you can do.
      </p>
      {/* TRACY TO FILL: What screening tools do you use? How do you bring up mental health with new mothers? What resources do you keep on hand for referrals? Have you had situations where your screening caught something important? */}
      <p>
        Your own emotional health matters too. The intensity of postpartum work — combined with the isolation of solo practice — means you need your own support system. Whether that is a <Link to="/community" className="text-gold hover:text-gold/80 underline">professional community</Link>, a mentor, or regular self-care practices, protecting your wellbeing is not optional.
      </p>
      <p>
        If this niche resonates with you, our <Link to="/accelerator" className="text-gold hover:text-gold/80 underline">Accelerator program</Link> provides the framework and mentorship to launch your practice with confidence. You can also explore <Link to="/resources/best/scheduling-software-concierge-nurses" className="text-gold hover:text-gold/80 underline">scheduling tools</Link> to help manage family visits efficiently.
      </p>

      {/* FAQ */}
      <section className="bg-cream border border-cream-dark p-8 mt-12">
        <h2 id="faq" className="font-heading text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">What does a postpartum concierge nurse do on a typical day?</h3>
            <p>A postpartum concierge nurse provides in-home skilled nursing care to new mothers and their babies. A typical day includes physical assessments for both mom and baby, breastfeeding support, newborn care education, emotional wellness checks, and coordination with the family's OB or pediatrician.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Is postpartum concierge nursing the same as being a doula?</h3>
            <p>No. A postpartum concierge nurse is a licensed RN or LPN who provides clinical care — physical assessments, wound care (for C-section recovery), medication management, and medical monitoring. A postpartum doula provides non-clinical emotional and practical support. Some nurses hold both credentials.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Do you need OB experience to become a postpartum concierge nurse?</h3>
            <p>OB, labor and delivery, or NICU experience is highly beneficial but not always required. Nurses with strong med-surg or pediatric backgrounds can transition into this niche with additional training in postpartum assessment, breastfeeding support, and newborn care.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">How many families does a postpartum concierge nurse work with at once?</h3>
            <p>Most postpartum concierge nurses work with one to three families at a time, depending on the service model. Some offer intensive packages with daily visits for the first two weeks, while others provide weekly check-in visits over a longer period.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">What is the most rewarding part of postpartum concierge nursing?</h3>
            <p>Many postpartum concierge nurses say the most rewarding part is empowering new parents with confidence. Watching a first-time mother go from overwhelmed to capable, and knowing your clinical guidance made that transition smoother, is deeply fulfilling work.</p>
          </div>
        </div>
      </section>
    </ResourceLayout>
  );
}
