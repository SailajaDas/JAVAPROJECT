import React from "react";
import { Coffee, CheckCircle } from "lucide-react";

import hierarchyImage from "../../../assets/WrapperClass/WrapperClass1.jpg";

const ICONS = {
  java: <Coffee className="text-purple-600 dark:text-purple-300" size={24} />,
  check: <CheckCircle className="text-green-500 mt-1" size={20} />,
};

const wrapperClassData = {
  header: {
    title: "Wrapper Classes ",
  },
  sections: [
    {
      id: 1,
      icon: ICONS.java,
      title: "Wrapper Class Overview",
      description:
        "A Wrapper class in Java is a type of class that provides a mechanism to convert primitive data types into objects and vice versa. Java is not a purely object-oriented programming language, because it works with primitive data types. These eight primitive data types (int, short, byte, long, float, double, char, and boolean) are not objects.",
      keyPoints: [
        "Java uses Wrapper Classes to wrap primitive data types into objects.",
        "Wrapper classes make Java code fully object-oriented by allowing primitives to be used as objects.",
        "They enable primitives to be added to collections like ArrayList, HashSet, and HashMap.",
        "Wrapper classes provide utility methods for conversion between primitive types and strings, as well as for manipulating binary, octal, and hexadecimal representations.",
        "Unlike primitive types, Wrapper classes can be null, making them useful in cases where a null value is required for a primitive type.",
      ],
    },
    {
      id: 2,
      icon: ICONS.java,
      title: "Need for Wrapper Classes in Java",
      description:
        "Wrapper classes are essential in Java to make primitive types act like objects. They also offer several utility methods to manipulate data effectively.",
      keyPoints: [
        "Wrapper classes allow primitive types to participate in object-oriented behavior.",
        "They make it possible to store primitive types in collections, where only objects can be stored.",
        "Wrapper classes provide methods for converting primitive types to String objects and vice-versa.",
        "They enable conversion to various bases like binary, octal, or hexadecimal.",
        "Null values can be assigned to wrapper classes, unlike primitive types, which cannot be null.",
      ],
    },
    {
      id: 3,
      icon: ICONS.java,
      title: "Wrapper Class Hierarchy",
      description:
        "The hierarchy of wrapper classes in Java shows how the different wrapper classes for primitive types inherit from the `Object` class and how the `Number` class is the parent of numerical wrappers.",
      image: hierarchyImage,
      keyPoints: [
        "The hierarchy starts from `Object`, the root class of all classes in Java.",
        "The `Number` class is a subclass of `Object` and serves as the parent for numerical wrapper classes.",
        "Boolean and Character are independent and do not inherit from `Number`.",
        "The numerical classes include `Byte`, `Short`, `Integer`, `Long`, `Float`, and `Double`.",
      ],
    },
  ],
};

const SectionHeader = ({ title, subtitle }) => (
  <div className="text-center mb-12">
    <h1 className="text-4xl md:text-5xl font-bold text-indigo-700 dark:text-purple-300 mb-2">
      {title}
    </h1>
    {subtitle && (
      <p className="text-lg text-gray-600 dark:text-gray-400">{subtitle}</p>
    )}
  </div>
);

const PointItem = ({ point }) => (
  <li className="flex items-start gap-3 text-gray-800 dark:text-gray-200 leading-relaxed">
    {ICONS.check}
    <span>{point}</span> {/* Changed from dangerouslySetInnerHTML */}
  </li>
);

const SimplePointsList = ({ points }) => (
  <ul className="space-y-3">
    {points.map((point, index) => (
      <PointItem key={index} point={point} />
    ))}
  </ul>
);

const ContentCard = ({ section }) => (
  <div className="w-full bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border-l-8 border-indigo-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
    <div className="flex items-center gap-3 mb-4">
      {section.icon}
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
        {section.title}
      </h2>
    </div>

    {/* Image rendering */}
    {section.image && (
      <div className="mb-6">
        <img
          src={section.image}
          alt={section.title}
          className="w-[50%] h-auto mx-auto rounded-lg shadow-md"
        />
      </div>
    )}

    <p className="text-gray-700 dark:text-gray-300 mb-6 text-base leading-relaxed">
      {section.description}
    </p>

    <SimplePointsList points={section.keyPoints} />
  </div>
);

const WrapperClass = () => {
  const { header, sections } = wrapperClassData;

  return (
    <div className="w-[95%] max-w-7xl mx-auto py-10">
      <SectionHeader title={header.title} />
      <div className="flex flex-col gap-10">
        {sections.map((section) => (
          <ContentCard key={section.id} section={section} />
        ))}
      </div>
    </div>
  );
};

export default WrapperClass;
