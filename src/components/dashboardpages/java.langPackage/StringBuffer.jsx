import React from "react";
import { Coffee, CheckCircle } from "lucide-react";

// Icons
const ICONS = {
  java: <Coffee className="text-purple-600 dark:text-purple-300" size={24} />,
  check: <CheckCircle className="text-green-500 mt-1" size={20} />,
};

// Section data
const bufferData = {
  title: " StringBuffer Class",
  sections: [
    {
      id: 1,
      icon: ICONS.java,
      title: "Overview of StringBuffer",
      description:
        "StringBuffer is a predefined class in Java (inside java.lang package) introduced to overcome the limitations of the String class.",
      keyPoints: [
        "It is used to create mutable string objects.",
        "It was introduced to resolve issues related to immutability in the String class.",
        "String class creates a new object even for small changes, leading to poor memory management.",
        "StringBuffer allows modifications without creating a new object, improving performance.",
      ],
    },
    {
      id: 2,
      icon: ICONS.java,
      title: "Why StringBuffer was Introduced",
      description:
        "StringBuffer helps solve performance and memory issues that arise when using immutable String objects.",
      keyPoints: [
        "While performing operations on String objects, JVM creates a new object for every small change.",
        "This leads to poor memory usage and performance overhead.",
        "To fix this, StringBuffer allows changes within the same object (mutable).",
        "Useful in scenarios where content changes frequently (e.g., loops, real-time logs, editors).",
      ],
    },
    {
      id: 3,
      icon: ICONS.java,
      title: "Example of StringBuffer",
      description: "Here's a basic example showing how StringBuffer works in Java:",
      keyPoints: [
        {
          type: "example",
          code: `StringBuffer sb = new StringBuffer("Hello");
sb.append(" Java");
System.out.println(sb); // Output: Hello Java`,
        },
      ],
    },
    {
      id: 4,
      icon: ICONS.java,
      title: "Difference Between String and StringBuffer",
      description:
        "Here is a comparison between String and StringBuffer based on various factors:",
      type: "table",
      table: {
        headers: ["String", "StringBuffer"],
        rows: [
          ["String is immutable.", "StringBuffer is mutable."],
          [
            "When we concatenate too many strings, it takes longer and uses more memory because it creates a new instance each time.",
            "When concatenating two strings, StringBuffer is faster and uses less memory.",
          ],
          [
            "When executing a concatenation operation, the String class is slower.",
            "When performing concatenation operations, the StringBuffer class is faster.",
          ],
          [
            "The equals() method of the Object class is overridden by the String class. As a result, the equals() method can be used to compare the contents of two strings.",
            "The equals() function of the Object class is not overridden by the StringBuffer class.",
          ],
          [
            "It overrides the object class's equal() and hashcode() methods.",
            "It cannot override the object class's equal() and hashcode() methods.",
          ],
          [
            "String constant pool is used by the String class.",
            "Heap memory is used by StringBuffer.",
          ],
        ],
      },
    },
  ],
};

// Header
const SectionHeader = ({ title }) => (
  <div className="text-center mb-12">
    <h1 className="text-4xl md:text-5xl font-bold text-indigo-700 dark:text-purple-300 mb-2">
      {title}
    </h1>
  </div>
);

// Bullet point or code block
const PointItem = ({ point }) => {
  if (typeof point === "object" && point.code) {
    return (
      <div className="ml-4 mb-4">
        <div className="flex items-center gap-2 mb-1">
          {ICONS.check}
          <span className="font-medium">Example:</span>
        </div>
        <pre className="bg-black text-green-400 p-3 rounded-lg text-sm font-mono overflow-x-auto whitespace-pre-wrap">
          <code>{point.code}</code>
        </pre>
      </div>
    );
  }

  return (
    <li className="flex items-start gap-3 text-gray-800 dark:text-gray-200 leading-relaxed">
      {ICONS.check}
      <span>{point}</span>
    </li>
  );
};

// Single card
const ContentCard = ({ section }) => (
  <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border-l-8 border-indigo-600 hover:shadow-xl transition-transform hover:-translate-y-1">
    <div className="flex items-center gap-3 mb-4">
      {section.icon}
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
        {section.title}
      </h2>
    </div>
    <p className="text-gray-700 dark:text-gray-300 mb-6">{section.description}</p>

    {section.type === "table" ? (
      <div className="overflow-x-auto rounded-xl shadow-lg">
        <table className="w-full border-collapse bg-white dark:bg-gray-800 rounded-xl overflow-hidden table-fixed">
          <thead>
            <tr className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
              {section.table.headers.map((header, idx) => (
                <th
                  key={idx}
                  className="w-1/2 px-6 py-4 text-center font-bold text-lg tracking-wide"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {section.table.rows.map((row, rowIdx) => (
              <tr
                key={rowIdx}
                className={`
                  transition-colors duration-150 hover:bg-purple-50 dark:hover:bg-gray-700
                  ${rowIdx % 2 === 0
                    ? "bg-gray-50 dark:bg-gray-800"
                    : "bg-white dark:bg-gray-750"
                  }
                `}
              >
                {row.map((cell, cellIdx) => (
                  <td
                    key={cellIdx}
                    className="w-1/2 px-6 py-4 text-gray-700 dark:text-gray-200 border-b border-gray-200 dark:border-gray-600 align-top leading-relaxed text-center"
                  >
                    <div className="text-sm lg:text-base">
                      {cell}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ) : (
      <ul className="space-y-3 ml-2">
        {section.keyPoints?.map((point, index) => (
          <PointItem key={index} point={point} />
        ))}
      </ul>
    )}
  </div>
);

// Main component
const StringBuffer = () => {
  return (
  
      <div className="w-[95%] max-w-7xl mx-auto py-10">
        <SectionHeader title={bufferData.title} />
        <div className="flex flex-col gap-10">
          {bufferData.sections.map((section) => (
            <ContentCard key={section.id} section={section} />
          ))}
        </div>
      </div>
  
  );
};

export default StringBuffer;