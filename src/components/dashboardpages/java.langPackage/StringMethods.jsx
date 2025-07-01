import React from "react";
import { Code, ListChecks } from "lucide-react";
import img from "../../../assets/String/method1.jpg";
// Icons
const ICONS = {
  method: <Code className="text-purple-600 dark:text-purple-300" size={24} />,
  constructor: (
    <ListChecks className="text-purple-600 dark:text-purple-300" size={24} />
  ),
};

// String methods data
const stringMethods = [
  {
    id: 1,
    name: "concat(String s)",
    usage: 's1.concat("Bindu")',
    description: "Merges two strings.",
  },
  {
    id: 2,
    name: "charAt(int index)",
    usage: "s.charAt(2)",
    description: "Returns char at specified index.",
  },
  {
    id: 3,
    name: "length()",
    usage: "s.length()",
    description: "Returns string length.",
  },
  {
    id: 4,
    name: "toLowerCase()",
    usage: "s.toLowerCase()",
    description: "Converts string to lowercase.",
  },
  {
    id: 5,
    name: "toUpperCase()",
    usage: "s.toUpperCase()",
    description: "Converts string to uppercase.",
  },
  {
    id: 6,
    name: "equals(Object o)",
    usage: "s1.equals(s2)",
    description: "Checks value equality.",
  },
  {
    id: 7,
    name: "equalsIgnoreCase(Object o)",
    usage: "s1.equalsIgnoreCase(s2)",
    description: "Ignores case when comparing.",
  },
  {
    id: 8,
    name: "indexOf(char c)",
    usage: "s.indexOf('a')",
    description: "Returns first index of character.",
  },
  {
    id: 9,
    name: "lastIndexOf(char c)",
    usage: "s.lastIndexOf('a')",
    description: "Returns last index of character.",
  },
  {
    id: 10,
    name: "replace(char old, char new)",
    usage: "s.replace('a', 'b')",
    description: "Replaces characters.",
  },
  {
    id: 11,
    name: "substring(int begin)",
    usage: "s.substring(3)",
    description: "Substring from index to end.",
  },
  {
    id: 12,
    name: "substring(int begin, int end)",
    usage: "s.substring(1, 4)",
    description: "Substring from begin to end-1.",
  },
  {
    id: 13,
    name: "trim()",
    usage: "s.trim()",
    description: "Removes leading/trailing spaces.",
  },
];

// Constructors
const constructors = [
  { type: "Empty String", example: "String s = new String();" },
  { type: "Using String Literal", example: 'String s = new String("Java");' },
  {
    type: "Using StringBuffer",
    example: 'String s = new String(new StringBuffer("Hi"));',
  },
];

// Section header
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

// Card wrapper
const ContentCard = ({ icon, title, children }) => (
  <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md border-l-8 border-indigo-600 hover:shadow-lg transition-transform hover:-translate-y-1">
    <div className="flex items-center gap-3 mb-4">
      {icon}
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
        {title}
      </h2>
    </div>
    <div>{children}</div>
  </div>
);

const StringMethods = () => {
  return (
    <div className="w-[95%] max-w-7xl mx-auto py-10">
      <SectionHeader title="String Class Methods" />

      <div className="flex flex-col gap-10">
        <div className="flex justify-center">
          <img
            src={img}
            alt="String Methods in Java"
            className="rounded-xl shadow-md w-full max-w-2xl h-auto object-contain"
          />
        </div>

        <ContentCard icon={ICONS.method} title="String Methods">
          <div className="overflow-x-auto">
            <table className="w-full text-left border border-purple-300">
              <thead className="bg-purple-300 dark:bg-purple-900 text-indigo-900 dark:text-white">
                <tr>
                  <th className="p-3"></th>
                  <th className="p-3">Method</th>
                  <th className="p-3">Example</th>
                  <th className="p-3">Description</th>
                </tr>
              </thead>
              <tbody>
                {stringMethods.map((method) => (
                  <tr key={method.id} className="border-t">
                    <td className="p-2">{method.id}</td>
                    <td className="p-2 font-medium">{method.name}</td>
                    <td className="p-2 font-mono text-green-700 dark:text-green-400">
                      {method.usage}
                    </td>
                    <td className="p-2">{method.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ContentCard>

        <ContentCard
          icon={ICONS.constructor}
          title="Constructors of String Class"
        >
          <ul className="list-disc pl-6 space-y-3 text-gray-800 dark:text-gray-200">
            {constructors.map((ctor, index) => (
              <li key={index}>
                <strong>{ctor.type}: </strong>
                <code className="bg-black text-green-400 p-1 rounded">
                  {ctor.example}
                </code>
              </li>
            ))}
          </ul>
        </ContentCard>
      </div>
    </div>
  );
};

export default StringMethods;
