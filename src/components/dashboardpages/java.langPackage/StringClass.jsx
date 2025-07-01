import React from "react";
import { Coffee, CheckCircle } from "lucide-react";


const ICONS = {
  java: <Coffee className="text-purple-600 dark:text-purple-300" size={24} />,
  check: <CheckCircle className="text-green-500 mt-1" size={20} />,
};

const stringClassData = {
  header: {
    title: " String Class",
    subtitle: "",
  },
  sections: [
    {
      id: 1,
      icon: ICONS.java,
      title: "String Class Overview",
      description:
        "The String class in Java is a predefined class in the java.lang package that represents a sequence of characters. It is immutable, meaning once a String object is created, its content cannot be changed.",
      keyPoints: [
        "Immutable: Cannot be changed once created.",
        "Stored in the String Pool to save memory.",
        "Rich set of built-in methods like length(), substring(), etc.",
        "Overloaded '+' operator for concatenation.",
        "Implements Serializable, Comparable, and CharSequence interfaces.",
      ],
    },
    {
      id: 2,
      icon: ICONS.java,
      title: "String Object Creation Methods",
      description:
        "There are multiple ways to create a String object in Java. Each method has different memory behaviors and use cases.",
      keyPoints: [
        {
          category: "By String Literal",
          details: [
            { type: "syntax", code: 'String str = "abc";' },
            "String literals are stored in a special memory area called the String Constant Pool (SCP).",
            "When a string literal is created, JVM first checks if that literal already exists in the SCP.",
            " If it exists, the existing reference is reused (no new object is created).",
            " If it does not exist, a new String object is created in the SCP, and its reference is returned.",
            "This mechanism improves memory efficiency by avoiding duplicate String objects.",
            "String literals are implicitly final and can be shared across multiple parts of the application.",
            "Comparison using `==` works for string literals because they refer to the same object in the SCP.",
            {
              type: "example",
              code: `String s1 = "hello";
String s2 = "hello";

System.out.println(s1 == s2); // true`,
            },
          ],
        },
        {
          category: "By new Keyword",
          details: [
            { type: "syntax", code: 'String str = new String("abc");' },
            "This approach always creates a new String object in the heap memory, regardless of SCP contents.",
            "Even if the same value exists in the String Constant Pool (SCP), a new object is created in the heap.",
            'The string literal ("abc") is still stored in SCP if not already present — used as a constructor argument.',
            "So effectively, two objects may be created: one in SCP and one in the heap.",
            "This method breaks reference equality (`==`) even if the content is the same.",
            "Used rarely unless object uniqueness is necessary (e.g., testing memory behavior).",
            "Comparison using `.equals()` returns `true` because it compares values, but `==` returns `false`.",
            {
              type: "example",
              code: `String s1 = "hello";
String s2 = new String("hello");

System.out.println(s1 == s2);       // false
System.out.println(s1.equals(s2));  // true`,
            },
          ],
        },
      ],
    },
  ],
};

// Components
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

const PointItem = ({ point }) => {
  if (typeof point === "object" && point.code) {
    const label =
      point.type === "syntax"
        ? "Syntax:"
        : point.type === "example"
        ? "Example:"
        : "Code:";
    return (
      <li className="flex flex-col gap-2">
        <div className="flex items-start gap-3">
          {ICONS.check}
          <span className="text-gray-800 dark:text-gray-200 font-medium">
            {label}
          </span>
        </div>
        <div className="ml-8">
          <pre className="bg-black text-green-400 p-3 rounded-lg text-sm font-mono overflow-x-auto whitespace-pre-wrap">
            <code>{point.code}</code>
          </pre>
        </div>
      </li>
    );
  }

  return (
    <li className="flex items-start gap-3 text-gray-800 dark:text-gray-200 leading-relaxed">
      {ICONS.check}
      <span dangerouslySetInnerHTML={{ __html: point }} />
    </li>
  );
};

const CategorySection = ({ category, details }) => (
  <div className="mb-6">
    <h4 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-3">
      🔹 {category}
    </h4>
    <ul className="space-y-3 ml-4">
      {details.map((detail, index) => (
        <PointItem key={index} point={detail} />
      ))}
    </ul>
  </div>
);

const SimplePointsList = ({ points }) => (
  <ul className="space-y-3">
    {points.map((point, index) => (
      <PointItem key={index} point={point} />
    ))}
  </ul>
);

const CategorizedPointsList = ({ points }) => (
  <div className="space-y-6">
    {points.map((group, index) => (
      <CategorySection
        key={index}
        category={group.category}
        details={group.details}
      />
    ))}
  </div>
);

const ContentCard = ({ section }) => {
  const isSimplePoints = typeof section.keyPoints[0] === "string";

  return (
    <div className="w-full bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border-l-8 border-indigo-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-center gap-3 mb-4">
        {section.icon}
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          {section.title}
        </h2>
      </div>

      <p className="text-gray-700 dark:text-gray-300 mb-6 text-base leading-relaxed">
        {section.description}
      </p>

      {isSimplePoints ? (
        <SimplePointsList points={section.keyPoints} />
      ) : (
        <CategorizedPointsList points={section.keyPoints} />
      )}
    </div>
  );
};

const StringClass = () => {
  const { header, sections } = stringClassData;

  return (
    <div className="w-[95%] max-w-7xl mx-auto py-10">
      <SectionHeader title={header.title} subtitle={header.subtitle} />
      <div className="flex flex-col gap-10">
        {sections.map((section) => (
          <ContentCard key={section.id} section={section} />
        ))}
      </div>
    </div>
  );
};

export default StringClass;
