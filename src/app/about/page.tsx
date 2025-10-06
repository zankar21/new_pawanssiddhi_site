"use client";
import { motion } from "framer-motion";

const directors = [
  {
    name: "Pawan Saraf",
    title: "Director",
    photo: "/team/directors/pawan-saraf.jpg",
    description: "Director of the company and also Director in M/s Shah Sonraj Tikamchand Saraf & Kuwar Tikamchand Jewellers Pvt Ltd. With respective turnovers of 25 crore & 75 crore respectively. He is also director in New Era B2B Trading Pvt Ltd, developing software for government entities. Known for continuous growth and leadership."
  },
  {
    name: "Tapasya Saraf",
    title: "Director",
    photo: "/team/directors/tapasya-saraf.jpg",
    description: "Director of the company and equal partner in all business ventures. A dynamic lady with ambitious attitude and a target-oriented approach, shouldering equal responsibility in the growth journey."
  },
  {
    name: "Dr. Ashish Varma",
    title: "Director",
    photo: "/team/directors/ashish-varma.jpg",
    description: "A doctor by profession with skills adaptable to business decisions. His immediate attention-paying approach helps a lot in decision making, especially in logical and immediate problem solving."
  }
];

const teamMembers = [
  {
    name: "Mr. Navalkishor Sharma",
    title: "Senior Project Manager",
    photo: "/team/team/navalkishor-sharma.jpg",
    description: "Ex-veteran with 35+ years of experience in CSTPS in various departments. Rich professional experience in power industries maintenance & projects. A visionary leader who has navigated the company by transforming every possible idea into opportunities."
  },
  {
    name: "Mr. Dinesh Saraf",
    title: "Business Development Manager",
    photo: "/team/team/dinesh-saraf.jpg",
    description: "Business development manager with ex-management team experience in Raisoni group of education. Rich professional excellence in management field, clearly communicating the vision to inspire staff, investors & customers."
  },
  {
    name: "Mr. Prasad Jorgewar",
    title: "Business Executive",
    photo: "/team/team/prasad-jorgewar.jpg",
    description: "A dynamic young resource keenly interested in doing business. Graduate in commerce, efficiently handling core daily affairs of cement bag manufacturing unit. Also actively involved in Real Estate business."
  },
  {
    name: "Mr. Sagar Sharma",
    title: "Technical Manager (Mechanical & Civil)",
    photo: "/team/team/sagar-sharma.jpg",
    description: "Electrical Engineer with 10 years experience in power plant maintenance work. Runs proprietory firm M/s Babu Enterprises with approx. 10 crore turnover. Currently executing AMC projects in various MAHAGENCO plants satisfactorily."
  },
  {
    name: "Mr. Ravi Sharma",
    title: "Technical Manager (Electrical)",
    photo: "/team/team/ravi-sharma.jpg",
    description: "Electrical Engineer with 3 years experience in power plant electrical maintenance work. Runs proprietory firm M/s Asmi Engineer, bringing new lines of business including Authorized Service Centre of renowned pumping brands in Chandrapur District."
  }
];

// Updated variants for strict TypeScript compatibility:
const bounceVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 30 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring' as const, bounce: 0.55, duration: 0.7 }
  }
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } }
};

export default function AboutPage() {
  return (
    <section className="max-w-6xl mx-auto py-16 px-4">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-xl shadow p-8 mb-12"
      >
        <h1 className="text-3xl md:text-4xl font-heading font-extrabold text-primary mb-4 text-center">
          About PSSPL
        </h1>
        <p className="text-lg md:text-xl font-body text-steel mb-8 text-center">
          Founded in 2020, Pawanssiddhi Supplier Pvt Ltd partners with industry leaders to deliver specialized power-plant supplies, civil & electrical projects, and maintenance services. Our commitment to <span className="text-accent font-semibold">innovation</span> and <span className="text-accent font-semibold">quality</span> drives success for manufacturing plants—thermal, cement, and beyond.
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
              To deliver socially responsible engineering solutions with exceptional client satisfaction.
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
              To become a global leader in industrial supply through ethics, innovation, and relentless service.
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
          <h2 className="text-lg font-heading text-primary font-bold mb-4 text-center">Our Journey</h2>
          <ul className="font-body text-steel max-w-lg mx-auto space-y-2 list-disc pl-5">
            <li><span className="font-semibold">2020:</span> Company founded</li>
            <li><span className="font-semibold">2021:</span> Partnered with major thermal power plants</li>
            <li><span className="font-semibold">2022:</span> Expanded into cement plant solutions</li>
            <li><span className="font-semibold">2025:</span> Initiated global vendor partnerships</li>
          </ul>
        </motion.div>
      </motion.div>

      {/* Directors Section */}
      <div className="mb-12">
        <motion.h2
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
          {directors.map((director, i) => (
            <motion.div
              key={i}
              variants={bounceVariants}
              whileHover={{ scale: 1.07, boxShadow: "0 6px 32px #00808055", rotate: 2 }}
              transition={{ type: 'spring' as const, bounce: 0.44, duration: 0.42 }}
              className="bg-white rounded-xl shadow-lg p-6 text-center"
            >
              <motion.div
                whileHover={{ scale: 1.13, boxShadow: "0 2px 24px #FF8800" }}
                transition={{ type: 'spring' as const, bounce: 0.33 }}
                className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-offwhite border-4 border-primary"
              >
                <img
                  src={director.photo}
                  alt={director.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = `https://ui-avatars.com/api/?name=${director.name}&background=008080&color=fff&size=96`;
                  }}
                />
              </motion.div>
              <h3 className="font-heading text-lg font-bold text-primary mb-1">{director.name}</h3>
              <p className="text-sm text-accent font-semibold mb-3">{director.title}</p>
              <p className="font-body text-steel text-sm leading-relaxed">{director.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Team Section */}
      <div>
        <motion.h2
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
          {teamMembers.map((member, i) => (
            <motion.div
              key={i}
              variants={bounceVariants}
              whileHover={{ scale: 1.06, boxShadow: "0 3px 28px #FF880099" }}
              transition={{ type: 'spring' as const, bounce: 0.15, duration: 0.38 }}
              className="bg-offwhite rounded-xl shadow-lg p-6"
            >
              <div className="flex items-start gap-4">
                <motion.div
                  whileHover={{ scale: 1.09, boxShadow: "0 4px 20px #00808040" }}
                  transition={{ type: 'spring' as const, bounce: 0.23, duration: 0.32 }}
                  className="w-16 h-16 rounded-full overflow-hidden bg-white border-2 border-primary flex-shrink-0"
                >
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = `https://ui-avatars.com/api/?name=${member.name}&background=FF8800&color=fff&size=64`;
                    }}
                  />
                </motion.div>
                <div className="flex-1">
                  <h3 className="font-heading text-lg font-bold text-primary mb-1">{member.name}</h3>
                  <p className="text-sm text-accent font-semibold mb-2">{member.title}</p>
                  <p className="font-body text-steel text-sm leading-relaxed">{member.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
