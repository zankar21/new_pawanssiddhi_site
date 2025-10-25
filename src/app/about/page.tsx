// src/app/about/page.tsx
"use client";

import { motion, type Variants, cubicBezier } from "framer-motion";

/* =========
   JSON-LD helper (safe in client; injects structured data)
   ========= */
function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/* =========
   Data
   ========= */
const directors = [
  {
    name: "Pawan Saraf",
    title: "Director",
    photo: "/team/directors/pawan-saraf.jpg",
    description:
      "Director of the company; also Director in M/s Shah Sonraj Tikamchand Saraf & Kuwar Tikamchand Jewellers Pvt Ltd with respective turnovers of ₹25 Cr & ₹75 Cr. Director at New Era B2B Trading Pvt Ltd (software for government entities). Known for consistent growth and leadership.",
  },
  {
    name: "Tapasya Saraf",
    title: "Director",
    photo: "/team/directors/tapasya-saraf.jpg",
    description:
      "Director and equal partner across ventures. Dynamic, ambitious, and target-oriented—shouldering equal responsibility in the company’s growth.",
  },
  {
    name: "Dr. Ashish Varma",
    title: "Director",
    photo: "/team/directors/ashish-varma.jpg",
    description:
      "A doctor by profession with strong business acumen. Brings sharp, immediate decision-making—especially in logical and time-sensitive problem solving.",
  },
];

const teamMembers = [
  {
    name: "Mr. Navalkishor Sharma",
    title: "Senior Project Manager",
    photo: "/team/team/navalkishor-sharma.jpg",
    description:
      "Ex-veteran with 35+ years’ experience at CSTPS across departments. Deep expertise in power-industry maintenance & projects; a visionary who converts ideas into opportunities.",
  },
  {
    name: "Mr. Dinesh Saraf",
    title: "Business Development Manager",
    photo: "/team/team/dinesh-saraf.jpg",
    description:
      "Business development professional; ex-management team at Raisoni Group of Education. Excels at communicating vision and inspiring staff, investors, and customers.",
  },
  {
    name: "Mr. Prasad Jorgewar",
    title: "Business Executive",
    photo: "/team/team/prasad-jorgewar.jpg",
    description:
      "Dynamic commerce graduate handling core daily affairs at a cement bag manufacturing unit; actively engaged in the Real Estate business.",
  },
  {
    name: "Mr. Sagar Sharma",
    title: "Technical Manager (Mechanical & Civil)",
    photo: "/team/team/sagar-sharma.jpg",
    description:
      "Electrical Engineer with 10 years’ power-plant maintenance experience. Runs proprietorship firm M/s Babu Enterprises (~₹10 Cr turnover). Executing AMCs across MAHAGENCO plants.",
  },
  {
    name: "Mr. Ravi Sharma",
    title: "Technical Manager (Electrical)",
    photo: "/team/team/ravi-sharma.jpg",
    description:
      "Electrical Engineer with 3 years’ experience in power-plant electrical maintenance. Runs proprietorship firm M/s Asmi Engineer; expanding into Authorized Service Centre operations for renowned pumping brands in Chandrapur District.",
  },
];

/* ---------------------------
   Animation variants (typed)
----------------------------*/
const bounceVariants: Variants = {
  hidden: { opacity: 0, scale: 0.85, y: 30 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring" as const, bounce: 0.55, duration: 0.7 },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: cubicBezier(0.42, 0, 1, 1), // ≈ easeOut
    },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

/* =========
   Page
   ========= */
export default function AboutPage() {
  // AboutPage structured data (works in client too)
  const aboutJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About PSSPL",
    "description":
      "Founded in 2020, Pawanssiddhi Supplier Pvt Ltd delivers specialized power-plant supplies, civil & electrical projects, and maintenance services.",
    "url": "https://pawanssiddhi.in/about",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Pawanssiddhi Supplier Pvt Ltd",
      "url": "https://pawanssiddhi.in/"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Pawanssiddhi Supplier Pvt Ltd",
      "url": "https://pawanssiddhi.in/",
      "logo": { "@type": "ImageObject", "url": "https://pawanssiddhi.in/logo.png" }
    }
  };

  return (
    <section className="max-w-6xl mx-auto py-16 px-4" aria-labelledby="about-heading">
      <JsonLd data={aboutJsonLd} />

      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-xl shadow p-8 mb-12"
      >
        <h1
          id="about-heading"
          className="text-3xl md:text-4xl font-heading font-extrabold text-primary mb-4 text-center"
        >
          About PSSPL
        </h1>

        <p className="text-lg md:text-xl font-body text-steel mb-8 text-center">
          Founded in 2020, Pawanssiddhi Supplier Pvt Ltd partners with industry leaders to deliver
          specialized power-plant supplies, civil & electrical projects, and maintenance services.
          Our commitment to <span className="text-accent font-semibold">innovation</span> and{" "}
          <span className="text-accent font-semibold">quality</span> drives success for
          manufacturing plants—thermal, cement, and beyond.
        </p>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <motion.div
            variants={bounceVariants}
            initial="hidden"
            whileInView="show"
            whileHover={{ scale: 1.05, boxShadow: "0 8px 32px #FF880044" }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-offwhite p-8 rounded-lg shadow flex flex-col items-center"
          >
            <h2 className="text-xl font-heading text-primary font-bold mb-2">Our Mission</h2>
            <p className="text-base text-steel text-center font-body">
              Deliver socially responsible engineering solutions with exceptional client satisfaction.
            </p>
          </motion.div>

          <motion.div
            variants={bounceVariants}
            initial="hidden"
            whileInView="show"
            whileHover={{ scale: 1.05, boxShadow: "0 8px 32px #00808044" }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-offwhite p-8 rounded-lg shadow flex flex-col items-center"
          >
            <h2 className="text-xl font-heading text-primary font-bold mb-2">Our Vision</h2>
            <p className="text-base text-steel text-center font-body">
              Become a global leader in industrial supply through ethics, innovation, and relentless service.
            </p>
          </motion.div>
        </div>

        {/* Journey Section */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-8"
        >
          <h2 className="text-lg font-heading text-primary font-bold mb-4 text-center">
            Our Journey
          </h2>
          <ul className="font-body text-steel max-w-lg mx-auto space-y-2 list-disc pl-5">
            <li>
              <span className="font-semibold">2020:</span> Company founded
            </li>
            <li>
              <span className="font-semibold">2021:</span> Partnered with major thermal power plants
            </li>
            <li>
              <span className="font-semibold">2022:</span> Expanded into cement-plant solutions
            </li>
            <li>
              <span className="font-semibold">2025:</span> Initiated global vendor partnerships
            </li>
          </ul>
        </motion.div>
      </motion.div>

      {/* Directors Section */}
      <div className="mb-12" aria-labelledby="directors-heading">
        <motion.h2
          id="directors-heading"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-2xl font-heading font-extrabold text-primary text-center mb-8"
        >
          Our Directors
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid lg:grid-cols-3 md:grid-cols-2 gap-8"
        >
          {directors.map((director) => (
            <motion.article
              key={director.name}
              variants={bounceVariants}
              whileHover={{ scale: 1.07, boxShadow: "0 6px 32px #00808055", rotate: 2 }}
              transition={{ type: "spring", bounce: 0.44, duration: 0.42 }}
              className="bg-white rounded-xl shadow-lg p-6 text-center"
              aria-label={`${director.name}, ${director.title}`}
            >
              <motion.div
                whileHover={{ scale: 1.13, boxShadow: "0 2px 24px #FF8800" }}
                transition={{ type: "spring", bounce: 0.33 }}
                className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-offwhite border-4 border-primary"
              >
                <img
                  src={director.photo}
                  alt={`${director.name} – ${director.title}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={96}
                  height={96}
                  onError={(e) => {
                    e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                      director.name
                    )}&background=008080&color=fff&size=96`;
                  }}
                />
              </motion.div>

              <h3 className="font-heading text-lg font-bold text-primary mb-1">
                {director.name}
              </h3>
              <p className="text-sm text-accent font-semibold mb-3">{director.title}</p>
              <p className="font-body text-steel text-sm leading-relaxed">
                {director.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>

      {/* Team Section */}
      <div aria-labelledby="team-heading">
        <motion.h2
          id="team-heading"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-2xl font-heading font-extrabold text-primary text-center mb-8"
        >
          Our Team
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid lg:grid-cols-2 gap-8"
        >
          {teamMembers.map((member) => (
            <motion.article
              key={member.name}
              variants={bounceVariants}
              whileHover={{ scale: 1.06, boxShadow: "0 3px 28px #FF880099" }}
              transition={{ type: "spring", bounce: 0.15, duration: 0.38 }}
              className="bg-offwhite rounded-xl shadow-lg p-6"
              aria-label={`${member.name}, ${member.title}`}
            >
              <div className="flex items-start gap-4">
                <motion.div
                  whileHover={{ scale: 1.09, boxShadow: "0 4px 20px #00808040" }}
                  transition={{ type: "spring", bounce: 0.23, duration: 0.32 }}
                  className="w-16 h-16 rounded-full overflow-hidden bg-white border-2 border-primary flex-shrink-0"
                >
                  <img
                    src={member.photo}
                    alt={`${member.name} – ${member.title}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width={64}
                    height={64}
                    onError={(e) => {
                      e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                        member.name
                      )}&background=FF8800&color=fff&size=64`;
                    }}
                  />
                </motion.div>

                <div className="flex-1">
                  <h3 className="font-heading text-lg font-bold text-primary mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-accent font-semibold mb-2">{member.title}</p>
                  <p className="font-body text-steel text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
