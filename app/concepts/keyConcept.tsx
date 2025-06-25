"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react"; // for back to top button
import { IBM_Plex_Sans } from "next/font/google";
import { BookOpen, MailCheck, HeartHandshake } from "lucide-react";
import Link from "next/link";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const clusters = [
  {
    id: "foundational-philosophy",
    title: "1. Foundational Philosophy and Worldview",
    intro:
      "The moral, philosophical, and civilizational roots of Africonomics. ",
    subText:
      "This cluster introduces the foundational thought underpinning Africonomics, beginning with its core principles and extending to philosophical and civilizational frameworks that distinguish Africonimics from Western philosophical and economic models. These foundations form the intellectual and moral backbone of the Afrindependent Institute.",
    text: "This cluster introduces the foundational thought underpinning Africonomics, beginning with its core principles and extending to philosophical and civilizational frameworks that distinguish Africonomics from Western philosophical and economic models. These foundations form the intellectual and moral backbone of the Afrindependent Institute.",
    concepts: [
      {
        id: "africonomics",
        title: "Africonomics",
        intro:
          "An African school of philosophical, economic, and civilizational thought grounded in natural-moral law, truth, liberty, and justice.",
        description:
          " Africonomics offers a principled and transformative alternative to Western economic orthodoxy—rejecting statism, fiat money, coercive governance, and technocratic social engineering in favor of upholding natural rights, voluntary cooperation, sound money systems, and structurally just social order grounded in natural-moral law jurisprudence.\n\nAfriconomics challenges established philosophical and economic models and advances a principled and more constructive approach to economics and other social sciences.",
      },
      {
        id: "natural-moral-law",
        title: "Natural-Moral Law",
        intro:
          "The universal moral standard for human decisions, actions, relations, and institutions. ",
        description:
          "Africonomics affirms the existence of objective, universal moral principles—truth, justice, and nonaggression—as the foundation for all legitimate social and economic systems. It offers a natural-moral law framework that reorients socioeconomic systems toward liberty, dignity, and structural justice.\n\nThis framework asserts objective ethical standards that exist to guide human relations and social, legal, and economic systems—forming a universal standard for justice.",
      },
      {
        id: "african-worldview",
        title: "The African Worldview",
        intro:
          "A distinctly human and principled conception of human nature, relations, and interdependence.",
        description:
          "Unlike the prevailing Western Darwinian worldview, which is animalistic, racial, rivalrous, and aggressive, the African worldview is theist, principled, and nonrivalrous. It emphasizes humankind’s oneness, dignity, moral agency, and peaceful collaboration and coexistence, not aggression and domination. The African worldview underpins Africonomics’ rejection of Western fundamentally animalistic assumptions of human nature and relations.",
      },
      {
        id: "civilization-redefined",
        title: "Human Civilization Redefined",
        intro: "True civilization is moral, not merely material.",
        description:
          "This framework challenges the dominant Western definition and conception of human civilization and the West’s claim to civilizational superiority. It redefines human civilization beyond material progress as the development of just, peaceful, and humane systems—not domination through technology, force, or empire.\n\nAs social philosopher and economist Manuel Tacanho writes, “A system built on force and fraud cannot be civilized.",
      },
      {
        id: "decolonizing-knowledge",
        title: "Decolonizing Knowledge",
        intro:
          "Liberating African thought from Western dominance and deception.",
        description:
          " Africonomics calls for a principled reexamination of mainstream economics, political theory, and social science—restoring truth and intellectual sovereignty to African nations.",
      },
      {
        id: "natural-social-order",
        title: "The Natural Social Order",
        intro:
          "A peaceful order built on natural-moral law and individual rights",
        description:
          "A socioeconomic system is most peaceful, civilized, and beneficial to the extent that it aligns with the universal moral principles of truth, justice, and nonaggression. This concept articulates a vision for structuring social life ethically—without centralized and technocratic statist systems of coercion, repression, and dispossession.",
      },
    ],
  },
  {
    id: "core-principles-justice-liberty",
    title: "2. Core Principles of Justice and Liberty",
    intro:
      "What a free, fundamentally ethical, and structurally just society requires.",
    subText:
      "This cluster outlines the foundational frameworks that make a society morally legitimate, structurally just, and economically prosperous. At the heart of Africonomics is the conviction that liberty and justice are not optional ideals—they are essential and civilizational imperatives rooted in natural-moral law. These principles define what it means to build a just, free, dignified, and civilized society.",
    text: "This cluster outlines the foundational frameworks that make a society morally legitimate, structurally just, and economically prosperous. At the heart of Africonomics is the conviction that liberty and justice are not optional ideals—they are essential and civilizational imperatives rooted in natural-moral law. These principles define what it means to build a just, free, dignified, and civilized society.",
    concepts: [
      {
        id: "natural-individual-rights",
        title: "Natural Individual Rights",
        intro:
          "Life, liberty, and ownership—endowed by the Creator, not granted by the state.",
        description:
          "Africonomics affirms that every human being possesses inherent rights by virtue of their humanity. The fundamental human rights are life, liberty, and the ownership of self and property. Any system that violates these rights is oppressive, unjust, and morally illegitimate—no matter how legal or democratic it may appear.",
      },
      {
        id: "structural-justice",
        title: "Structural Justice",
        intro: "Justice is not a slogan. It is the moral structure of society.",
        description:
          "Africonomics defines justice not primarily as fairness or equality but as a society structured in alignment with natural rights, truth, and nonaggression. Structural justice requires legal, political, and economic systems that consistently uphold liberty, sound money, voluntary exchange, and ethical governance.",
      },
      {
        id: "rule-of-just-law",
        title: "The Rule of Just Law",
        intro: "Law must protect rights—not impose domination.",
        description:
          "Africonomics questions the rule of law and rejects arbitrary rule by law, a hallmark of past and present statist systems. Instead, it upholds and calls for the rule of just law: legal frameworks grounded in natural-moral law that protect individual rights, prohibit force and fraud, minimize injustice, foster structural justice, and ensure that governments remain servants—not tyrannical masters—of the people.",
      },
    ],
  },
  {
    id: "money-banking-economic-clarity",
    title: "3. Money, Banking, and Economic Clarity",
    intro: "Unpacking monetary truth and exposing economic injustice.",
    subText:
      "This cluster addresses the source of the chronic economic instability afflicting modern economies: the global fiat money regime, the fiat dollar standard. Africonomics offers a principled monetary framework, revealing why the definition of inflation was intentionally distorted, exposing fiat fraud and economic dispossession, and laying the ethical foundation for sound money and banking. In Africonomics, money is not a tool of state coercion and confiscation but a moral instrument of voluntary exchange and civilizational integrity.",
    text: "This cluster addresses the source of the chronic economic instability afflicting modern economies: the global fiat money regime, the fiat dollar standard. Africonomics offers a principled monetary framework, revealing why the definition of inflation was intentionally distorted, exposing fiat fraud and economic dispossession, and laying the ethical foundation for sound money and banking.\n\nIn Africonomics, money is not a tool of state coercion and confiscation but a moral instrument of voluntary exchange and civilizational integrity.",
    concepts: [
      {
        id: "sound-money-banking",
        title: "Sound Money and Banking",
        intro: "The foundation of economic justice, stability, and liberty.",
        description:
          "Africonomics defines sound money as money that arises naturally in the marketplace, retains its purchasing power over time, and is free from manipulation by states or central banks. Combined with free-market banking principles, it provides a structurally just monetary order.\n\nFor Africa, Africonomics offers the Nilar, a gold-based currency system designed to restore monetary justice, sovereignty, and economic stability.",
      },
      {
        id: "redefinition-of-inflation",
        title: "The Redefinition of Inflation",
        intro: "Inflation is not rising prices—it is currency debasement.",
        description:
          "Contrary to mainstream distortions, Africonomics restores the original definition of inflation: the artificial expansion of the currency and credit supply. This view exposes the deception behind inflation targeting and reveals monetary inflation (artificial currency and credit creation) as a form of hidden taxation and a confiscatory structural injustice in statist systems.\n\nAfriconomics has revealed why the definition of inflation has been intentionally distorted to signify a general rise in prices across the economy, diverging from its original meaning. This distortion is not trivial; it has destructive consequences and has been done to facilitate monetary inflation: fiat fraud. ",
      },
      {
        id: "economic-dispossession",
        title: "Economic Dispossession",
        intro:
          "How fiat monetary systems rob people of purchasing power, well-being, and dignity.",
        description:
          "Economic dispossession is the systemic theft that occurs under fiat monetary regimes. Through monetary inflation, confiscation, and manipulation, individuals are systematically stripped of their purchasing power, property, and economic sovereignty—typically without realizing it.\n\nEconomic dispossession occurs in statist systems in other forms, such as confiscatory taxation, trade barriers, and restrictive regulations.",
      },
      {
        id: "money-minerals-economic-wealth",
        title: "Money, Minerals, and Economic Wealth",
        intro:
          "Real wealth is not what’s underground—it’s what people produce and exchange.",
        description:
          "Africonomics challenges the mineral fetishism imposed on Africa by colonial and statist development models. It distinguishes between money, natural resources, and true economic wealth—revealing how obsession with extraction distracts from free enterprise, innovation, and value creation.\n\nEconomic wealth is the overall stock—the abundance or scarcity—of goods and services available within a society to meet its needs and fulfill its wants. It encompasses the material capacity for nourishment, development, and well-being. Socioeconomic wealth, more significantly, is the presence of structural justice, social peace, and a stable, free economy that upholds human dignity and enables long-term prosperity.",
      },
      {
        id: "origin-of-money-credit",
        title: "The Africonomics Theory of the Origin of Money and Credit",
        intro: "Money emerges naturally—not by decree or state design.",
        description:
          "This theory explains how money and credit arise organically through voluntary human exchange, not through bureaucratic design, state legislation, or coercive authority. It refutes statist and chartalist myths, grounding the origin of money in natural-moral law and market cooperation.\n\nThe Africonomics Theory of the Origin of Money and Credit affirms that the institutions of money and credit are not state inventions. Money and credit are products of human action but not products of human design, much less products of intentional state design.",
      },
      {
        id: "monetary-justice",
        title: "The Africonomics Theory of Monetary Justice",
        intro: "Fiat is fraud. Sound money is justice.",
        description:
          "Africonomics builds a compelling moral case for monetary justice, arguing that currency systems must respect natural rights, prevent coercion and confiscation, and preserve the integrity of value. This theory is central to restoring economic justice, stability, and liberty in Africa and other economies.\n\nThe Africonomics Theory of Monetary Justice emerges from a synthesis of three groundbreaking papers:\n\n1. Fractional Reserve Banking Is Fraudulent and Ruinous,\n\n2. The Fraudulent and Ruinous Nature of Fiat Monetary Systems\n\n3. The Fiat Dollar Standard: Its Uncivilized and Destructive Nature.",
      },
    ],
  },
  {
    id: "socioeconomic-systems-institutions",
    title: "4. Socioeconomic Systems and Institutions",
    intro:
      "A principled refutation of statism—and a vision for a just and more humane economy.",
    subText:
      "This cluster analyzes the dominant economic and institutional models shaping contemporary African and global systems. It critiques technocracy, central planning, and statist ideology while offering the Africonomics alternative: an economy built on natural rights, voluntary cooperation, and structural justice. These entries clarify what has gone wrong—and how a refined, ethical approach can help rebuild.",
    text: "This cluster analyzes dominant economic and institutional models shaping African and global systems. It critiques technocracy, central planning, and statist ideology while offering the Africonomics alternative: an economy built on natural rights, voluntary cooperation, and structural justice.",
    concepts: [
      {
        id: "free-trade-civilizational-prosperity",
        title: "Free Trade and Civilizational Prosperity",
        intro: "Free trade is not just economic—it’s moral and civilizational.",
        description:
          "Africonomics affirms that voluntary exchange across borders fosters peace, prosperity, and social harmony. It distinguishes true free trade from state-managed trade and calls on Africa to restore its historic tradition of free enterprise and free trade grounded in justice and mutual respect.\n\nWhile the West has failed to foster a global order based on free enterprise, free trade, and sound money—primarily due to its racial, rivalrous, and aggressive Darwinian worldview—Africa must move in the opposite direction and adopt Africonomics to rise and lead by example.",
      },
      {
        id: "technocracy-vs-human-economy",
        title: "Technocracy vs the Human Economy",
        intro:
          "When technocratic experts replace ethics, the economy falters, and society suffers.",
        description:
          "This entry critiques the rise of technocracy: the rule of social engineers and mathematical economists detached from ethical and civilizational principles. Africonomics offers a human-centered alternative—an economy aligned with human nature, agency, natural rights, and reality rather than mechanical models and abstract metrics.\n\nThe economy is not a separate, mechanical system—it is society itself, composed of human lives, pursuits, and relations. Attempts to manage it technocratically are inherently unjust and ruinous.",
      },
      {
        id: "economics-refined",
        title: "Economics Refined",
        intro:
          "Restoring truth, ethics, and clarity to the leading social science.",
        description:
          "Africonomics refines economics by returning it to its rightful foundation: the ethical study of human choices, actions, relations, and institutions. It rejects utilitarianism, positivism, and materialism in favor of a natural-moral framework that recognizes the existence of objective, universal moral principles and prioritizes justice, liberty, and voluntary cooperation.\n\nA New and Constructive Definition of Economics:\n\nEconomics is a social science whose fundamental purpose is to study and understand socioeconomic phenomena to foster justice, prosperity, and peaceful human relations within and among societies.",
      },
      {
        id: "scale-of-statism",
        title: "The Scale of Statism",
        intro:
          "A framework for understanding and ranking socioeconomic systems.",
        description:
          "This concept introduces a principled and constructive framework for evaluating socioeconomic systems—not by ideological label, but by their nature: the degree of state control, coercion, centralization, technocratic management, and redistribution they impose. Africonomics classifies systems by their structural integrity, not their slogans—from the freest to the most oppressive.",

        stages: [
          { intro: "The Six Stages of Statism " },
          {
            stage: "Stage 1 – Free-Market Capitalism  (or Free-Market Economy)",
            description:
              "A just, peaceful, and civilized system rooted in voluntary exchange, individual rights, sound money, and minimal state interference.",
          },
          {
            stage: "Stage 2 – Crony Capitalism",
            description:
              "Markets still exist, but political favoritism and corporate-government collusion distort competition, create winners and losers, and undermine free enterprise and justice. This is where statism and systemic corruption begin.",
          },
          {
            stage: "Stage 3 – Mixed Economy  (Social Market Economy)",
            description:
              "The state plays a substantial role in guiding and managing economic life through regulation, taxation, and government spending.",
          },
          {
            stage: "Stage 4 – Economic Fascism",
            description:
              "Authoritarian control intensifies. The state heavily directs economic activity, though nominal private ownership remains. This system is more noticeably centralized, confiscatory, and repressive.",
          },
          {
            stage: "Stage 5 – Democratic Socialism",
            description:
              "Extensive state ownership and redistribution under a democratic façade. High taxes, large welfare states, central planning, and openly authoritarian governance prevail.",
          },
          {
            stage: "Stage 6 – Marxist Socialism (Totalitarianism)",
            description:
              "The most centralized, oppressive, and violent system. Individual rights and private property are abolished as the state controls nearly all economic and personal life, often with a cult of personality surrounding its leaders.",
          },
        ],
        closing:
          "The Scale of Statism has dispelled a central global myth by demonstrating that contrary to the established belief, the United States, other Western nations, and the current global order are not free-market capitalist systems. In reality, they are heavily statist systems—closer to socialism than to free-market capitalism.",
      },
    ],
  },
  {
    id: "advanced-africonomics-theory",
    title: "5. Advanced Africonomics Theories",
    intro:
      "Applying the Africonomics framework to cycles, praxeology, and global order.",
    subText:
      "This cluster features advanced theories developed within the Africonomics school of thought that explain real-world dynamics—offering a moral, African alternative to prevailing theories of economics, international relations, and human nature. They provide crucial insights for strategic reform, principled scholarship, and postcolonial reconstruction—beyond the destructive assumptions of Western utilitarian, positivist, and materialist Darwinian models.",
    text: "This cluster features advanced theories within Africonomics that explain real-world dynamics—offering a moral, African alternative to prevailing theories of economics, international relations, and human nature.",
    concepts: [
      {
        id: "praxeology-framework",
        title: "The Africonomics Framework of Praxeology",
        intro:
          "Human action is intentional, moral, and intelligible—not random behavior to be manipulated.",
        description:
          "Africonomics reframes and elevates praxeology by grounding it in a correct conception of human nature and natural-moral law. Principled praxeology is the most appropriate methodological approach for the human sciences—a method for studying and understanding human activities based on deductive, logical reasoning.\n\nThis methodology allows for a more accurate and constructive analysis of the nature and consequences of human choices, actions, relations, and institutions. It is consistent with the reality that humans act thoughtfully, intentionally, and, often, ethically.\n\nWestern economics—including the Austrian School—rests on a fundamentally flawed conception of human nature, shaped by utilitarian, materialist, and Darwinian philosophies. These frameworks reduce human beings to animalistic, instinct-driven entities, resulting in distorted, incomplete, and destructive assumptions about human decision-making, action, and interaction.\n\nAfriconomics, by contrast, offers a more coherent and constructive understanding of human nature—one that recognizes individuals as moral agents endowed with reason, moral responsibility, and the capacity for ethical discernment. This distinctly human and principled framework forms the foundation for a structurally just, peaceful, and civilized social order.",
      },
      {
        id: "economic-cycles-theory",
        title: "The Africonomics Theory of Economic Cycles",
        intro:
          "Booms and busts are not natural—they’re caused by fiat manipulation.",
        description:
          "This theory explains economic cycles as consequences of unsound money, central banking, and misallocated investment. It offers a morally coherent and empirically grounded alternative to Keynesian and monetarist models.\n\nThe Africonomics Theory of Economic Cycles defines boom and bust cycles as a structural form of economic instability characterized by extended, cyclical economic fluctuations that comprise periods of artificial expansion, peak, contraction (recessions or depressions), and recovery. It clarifies that only fiat monetary practices, specifically artificial credit creation, cause recurrent boom and bust cycles.",
      },
      {
        id: "international-relations-theory",
        title: "The Africonomics Theory of International Relations",
        intro:
          "Truth, justice, and peace—not rivalry and domination—should govern global affairs.",
        description:
          "This theory redefines and reframes international relations through natural-moral law, rejecting the Darwinian, statist, and militarist foundations of Western IR theory. It presents a peaceful, principled framework grounded in African values and economic sovereignty.\n\nRooted in the African worldview, Africonomics offers a framework for understanding and ordering international human relations not through coercion, rivalry, or power politics but through the natural-moral law principles of truth, justice, and nonaggression.",
      },
    ],
  },
];

export default function AfriconomicsPage() {
  const [activeId, setActiveId] = useState(clusters[0].id);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedClusterId, setSelectedClusterId] = useState(clusters[0].id);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleNavClick = (id: string) => {
    setSelectedClusterId(id);
    setActiveId(id);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const allConcepts = useMemo(() => {
    return clusters.flatMap((cluster) =>
      cluster.concepts.map((concept) => ({
        ...concept,
        clusterId: cluster.id,
        clusterTitle: cluster.title,
      }))
    );
  }, []);

  const filteredConcepts = useMemo(() => {
    if (!searchTerm) return [];
    return allConcepts.filter(
      (concept) =>
        concept.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        concept.intro.toLowerCase().includes(searchTerm.toLowerCase()) ||
        concept.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, allConcepts]);

  return (
    <div className={`mb-10 ${ibmPlexSans.className}`}>
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="px-2 lg:px-6 py-12 bg-white text-center space-y-6"
      >
        <h1 className="text-4xl  mx-auto md:text-3xl font-bold text-deepForest">
          The Intellectual Architecture of Africonomics
        </h1>
        <p className="max-w-5xl mx-auto text-gray-700 text-base md:text-lg leading-relaxed">
          The Afrindependent Institute advances a principled and transformative
          body of knowledge based on Africonomics— an African school of
          philosophical, economic, and civilizational thought grounded in
          natural-moral law, justice, and liberty that advances sound economic
          systems.
        </p>
        <p className="max-w-5xl mx-auto text-gray-700 text-base md:text-lg leading-relaxed">
          This section presents the key concepts, frameworks, and theories that
          define our work—from foundational ideas like natural-moral law and the
          African worldview to deep critiques of fiat money, statism, and
          technocracy, to fully developed Africonomics theories of money,
          economic cycles, and international relations.
        </p>
        <p className="max-w-5xl mx-auto text-gray-700 text-base md:text-lg leading-relaxed">
          Each concept is a building block in a larger civilizational vision: a
          free, sovereign, prosperous Africa—and a more human and peaceful
          global order.
        </p>
        <p className="max-w-5xl mx-auto text-deepForest text-base md:text-lg leading-relaxed font-bold">
          Browse the categories below to explore core frameworks of
          Africonomics.
        </p>
      </motion.section>
      <div className={`${ibmPlexSans.className} flex flex-col md:flex-row`}>
        {/* Sidebar Navigation for Desktop */}
        <div className="hidden md:block w-4/12 lg:w-3/12 sticky top-0 h-screen overflow-y-auto bg-white border-r p-6">
          <nav className="flex flex-col space-y-4">
            {clusters.map((cluster) => (
              <button
                key={cluster.id}
                onClick={() => handleNavClick(cluster.id)}
                className={`text-left p-2 rounded-lg transition ${
                  activeId === cluster.id
                    ? "bg-deepForest text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                {cluster.title}
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 relative">
          {/* Mobile Navigation */}
          <div className="block md:hidden sticky top-0 bg-white py-2 z-20 border-b shadow-sm">
            <div className="flex overflow-x-auto no-scrollbar px-4 space-x-2">
              {clusters.map((c) => (
                <button
                  key={c.id}
                  onClick={() => handleNavClick(c.id)}
                  className={`flex-shrink-0 px-5 py-2 text-sm font-medium rounded-xl whitespace-nowrap transition ${
                    activeId === c.id
                      ? "bg-deepForest text-white shadow"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {c.title}
                </button>
              ))}
            </div>
          </div>

          {/* Sticky Search Bar */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="sticky top-11 md:top-0  z-30 bg-white px-6 pt-4 pb-2 "
          >
            <input
              type="text"
              placeholder="Search concepts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-800"
            />
          </motion.div>

          {/* Search Results */}
          {searchTerm && (
            <div className="p-6 space-y-6">
              <h2 className="text-xl font-bold text-deepForest">
                Search Results:
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {filteredConcepts.length > 0 ? (
                  filteredConcepts.map((concept) => (
                    <motion.div
                      key={concept.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="cursor-pointer p-4 border  rounded-2xl shadow-sm hover:shadow-md transition"
                      onClick={() => {
                        setSelectedClusterId(concept.clusterId);
                        setActiveId(concept.clusterId);
                        setTimeout(() => {
                          const el = document.getElementById(concept.id);
                          if (el)
                            el.scrollIntoView({
                              behavior: "smooth",
                              block: "start",
                            });
                        }, 100);
                        setSearchTerm("");
                      }}
                    >
                      <h3 className="text-xl font-semibold mb-2">
                        {concept.title}
                      </h3>
                      <p className="text-gray-600 mb-2 italic ">
                        {concept.intro}
                      </p>
                      <p className="text-gray-600">
                        {concept.description.slice(0, 150)}...
                      </p>
                    </motion.div>
                  ))
                ) : (
                  <p className="text-gray-600">No matching concepts found.</p>
                )}
              </div>
            </div>
          )}

          {/* Cluster Sections */}
          {!searchTerm && (
            <div className="p-6">
              <AnimatePresence mode="wait">
                {clusters
                  .filter((c) => c.id === selectedClusterId)
                  .map((cluster) => (
                    <motion.section
                      key={cluster.id}
                      id={cluster.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -30 }}
                      transition={{ duration: 0.5 }}
                      className="space-y-16"
                    >
                      <div className="mb-6">
                        <h2 className="text-3xl font-bold text-deepForest">
                          {cluster.title}
                        </h2>
                        <p className="text-[#8B4513] italic text-lg mt-2">
                          {cluster.intro}
                        </p>
                        <p className="text-gray-700 mt-2">{cluster.subText}</p>
                      </div>

                      {/* Other Concepts */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12 items-start">
                        {cluster.concepts.map((concept) => (
                          <motion.div
                            key={concept.id}
                            id={concept.id}
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.98 }}
                            className="p-4 border rounded-2xl shadow-sm hover:shadow-md transition bg-green-50 self-start"
                          >
                            <h3 className="text-xl font-semibold mb-2">
                              {concept.title}
                            </h3>
                            <p className="text-gray-600 mb-4 italic">
                              {concept.intro}
                            </p>
                            <div className="text-gray-600 mb-4 space-y-4">
                              {concept?.description
                                ?.split("\n\n")
                                .map((paragraph, idx) => (
                                  <p key={idx}>{paragraph}</p>
                                ))}
                            </div>
                            {concept?.stages?.map((stage, index) => (
                              <div key={index} className="mb-2">
                                <p className="font-semibold">{stage.intro}</p>
                                <p className="font-semibold">{stage.stage}</p>
                                <p>{stage.description}</p>
                              </div>
                            ))}
                            <p className="mt-8">{concept?.closing}</p>
                          </motion.div>
                        ))}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full max-w-md mx-auto ">
                        {/* Explore */}

                        <Link
                          href="/concepts"
                          className="flex items-center justify-center gap-3 border-2 bg-deepForest border-[#00210d] dark:border-yellow-400 text-[#ffd700] dark:text-yellow-300  dark:hover:bg-yellow-400 hover:text-deepForest hover:bg-white dark:hover:text-black font-semibold py-3 px-6 rounded-xl shadow-md transition duration-300"
                        >
                          <BookOpen className="w-5 h-5" />
                          Explore
                        </Link>

                        {/* Subscribe */}
                        <Link
                          href="/#subscribe"
                          className="flex items-center justify-center gap-3 border-2 bg-deepForest border-[#00210d] dark:border-yellow-400 text-[#ffd700] dark:text-yellow-300  dark:hover:bg-yellow-400 hover:text-deepForest hover:bg-white dark:hover:text-black font-semibold py-3 px-6 rounded-xl shadow-md transition duration-300"
                        >
                          <MailCheck className="w-5 h-5" />
                          Subscribe
                        </Link>

                        {/* Donate */}
                        <Link
                          href="/donate"
                          className="flex items-center justify-center gap-3 border-2 bg-deepForest border-[#00210d] dark:border-yellow-400 text-[#ffd700] dark:text-yellow-300  dark:hover:bg-yellow-400 hover:text-deepForest hover:bg-white dark:hover:text-black font-semibold py-3 px-6 rounded-xl shadow-md transition duration-300"
                        >
                          <HeartHandshake className="w-5 h-5" />
                          Donate
                        </Link>
                      </div>
                    </motion.section>
                  ))}
              </AnimatePresence>
            </div>
          )}

          {/* Scroll to Top Button */}
          {showScrollTop && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleScrollTop}
              className="fixed bottom-6 right-6 bg-deepForest text-white p-4 rounded-full shadow-lg hover:bg-deepForest z-50 transition"
            >
              <ArrowUp />
            </motion.button>
          )}
        </div>
      </div>
    </div>
  );
}
