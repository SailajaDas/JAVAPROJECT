import React from "react";
import { Landmark } from "lucide-react";
import { FaJava } from "react-icons/fa6";
import { TiInputChecked } from "react-icons/ti";



const introCards = [
  {
    id: 1,
    icon: "Java",
    title: "What is Java?",
    description:
      "Java is a class-based, object-oriented programming language designed to have minimal implementation dependencies. It’s widely used across enterprise, mobile, and web platforms.",
    points: [
      "Platform independent via JVM.",
      "Object-Oriented and secure.",
      "Multithreading and garbage collection support.",
      "Popular in enterprise, Android, and web development.",
    ],
  },
  {
    id: 2,
    icon: "Landmark",
    title: "JDK vs JRE vs JVM",
   
    points: [
      "JDK: The Java Development Kit (JDK) is a software development kit that provides a set of tools and libraries for developing Java applications. It includes the Java Runtime Environment (JRE), which is necessary for running Java programs, as well as development tools such as compilers and debuggers. The JDK is essential for developers who want to write, compile, and run Java code.",
      "JRE:The Java Runtime Environment (JRE) is a package that provides the libraries and JVM required to run Java applications. It does not include development tools, making it suitable for users who only need to run Java programs without developing them. The JRE is a subset of the JDK and is included in the JDK installation.",
      "JVM: The Java Virtual Machine (JVM) is a crucial component of the JRE that provides the runtime environment for Java programs. It is responsible for executing Java bytecode on any platform that supports JVM, making Java a “write once, run anywhere” language. The JVM is included in the JRE and is not installed separately.",
    ],
  },
];

// Icon Map
const iconMap = {
  Java: <FaJava className="text-purple-600 dark:text-purple-300" size={24} />,
  Landmark: <Landmark className="text-purple-600 dark:text-purple-300" size={24} />,
};

const Introduction = () => {
  return (
    <div className="min-h-screen w-full py-18 px-4">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-700 dark:text-purple-300">
          Introduction to Java
        </h1>
      </div>

      {/* Cards Section */}
      <div className="flex flex-col gap-8">
        {introCards.map((card) => (
          <div
            key={card.id}
            className="w-full bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border-l-8 border-purple-600 hover:shadow-xl transition duration-300"
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              {iconMap[card.icon]}
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {card.title}
              </h2>
            </div>

            {/* Description */}
            <p className="text-gray-700 dark:text-gray-300 mb-5 text-base leading-relaxed">
              {card.description}
            </p>

            {/* Points */}
            <ul className="space-y-3">
              {card.points.map((point, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-800 dark:text-gray-200"
                >
                  <TiInputChecked className="text-green-500 mt-1" size={20} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Introduction;
