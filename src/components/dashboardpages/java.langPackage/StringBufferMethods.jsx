import React from "react";
import { Code, ClipboardList } from "lucide-react";

// Icons
const ICONS = {
  method: <Code className="text-purple-600 dark:text-purple-300" size={24} />,
  header: (
    <ClipboardList className="text-purple-600 dark:text-purple-300" size={24} />
  ),
};

const stringBufferConstructors = [
  {
    id: 1,
    constructor: "StringBuffer()",
    description: "Creates an empty string buffer with default capacity of 16.",
    example: `StringBuffer sb = new StringBuffer();\nsb.capacity(); // 16`,
  },
  {
    id: 2,
    constructor: "StringBuffer(int capacity)",
    description: "Creates a string buffer with the specified capacity.",
    example: `StringBuffer sb = new StringBuffer(10);\nsb.capacity(); // 10`,
  },
  {
    id: 3,
    constructor: "StringBuffer(String str)",
    description: "Creates a string buffer with 16 + length of the provided string.",
    example: `StringBuffer sb = new StringBuffer("Java");\nsb.capacity(); // 20`,
  },
];

const stringBufferMethods = [
  { id: 1, name: "length()", description: "Returns the number of characters.", example: `sb.length(); // returns 13` },
  { id: 2, name: "capacity()", description: "Returns the current capacity.", example: `sb.capacity(); // returns 16 or more` },
  { id: 3, name: "charAt(int index)", description: "Returns char at index.", example: `sb.charAt(4); // returns 'o'` },
  { id: 4, name: "setCharAt(int index, char ch)", description: "Replaces char at given index.", example: `sb.setCharAt(4, 'a');` },
  { id: 5, name: "delete(int begin, int end)", description: "Deletes characters from begin to end.", example: `sb.delete(2, 5);` },
  { id: 6, name: "deleteCharAt(int index)", description: "Deletes char at index.", example: `sb.deleteCharAt(3);` },
  { id: 7, name: "reverse()", description: "Reverses the content.", example: `sb.reverse();` },
  { id: 8, name: "setLength(int length)", description: "Sets new length of buffer.", example: `sb.setLength(5);` },
  { id: 9, name: "trimToSize()", description: "Trims the capacity to the current size.", example: `sb.trimToSize();` },
  { id: 10, name: "ensureCapacity(int capacity)", description: "Ensures minimum capacity.", example: `sb.ensureCapacity(30);` },
  { id: 11, name: "append(String str)", description: "Appends the specified string.", example: `sb.append(" World");` },
];

// Header component
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

// Card layout
const ContentCard = ({ icon, title, children }) => (
  <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md border-l-8 border-indigo-600 hover:shadow-lg transition-transform hover:-translate-y-1 mb-10">
    <div className="flex items-center gap-3 mb-4">
      {icon}
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
        {title}
      </h2>
    </div>
    <div>{children}</div>
  </div>
);

// Main component
const StringBufferMethods = () => {
  return (
    <div className="w-[95%] max-w-7xl mx-auto py-10">
      <SectionHeader title="StringBuffer Class Methods" />

      {/* Constructors */}
      <ContentCard icon={ICONS.header} title="StringBuffer Constructors">
        <div className="overflow-x-auto">
          <table className="w-full text-left border border-purple-300">
            <thead className="bg-purple-300 dark:bg-purple-900 text-indigo-900 dark:text-white">
              <tr>
                <th className="p-3"></th>
                <th className="p-3">Constructor</th>
                <th className="p-3">Description</th>
                <th className="p-3">Example</th>
              </tr>
            </thead>
            <tbody>
              {stringBufferConstructors.map((ctor) => (
                <tr key={ctor.id} className="border-t">
                  <td className="p-2">{ctor.id}</td>
                  <td className="p-2 font-medium">{ctor.constructor}</td>
                  <td className="p-2">{ctor.description}</td>
                  <td className="p-2 font-mono text-sm whitespace-pre-line text-gray-700 dark:text-gray-300">
                    {ctor.example}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ContentCard>

      {/* Methods */}
      <ContentCard icon={ICONS.method} title="StringBuffer Methods">
        <div className="overflow-x-auto">
          <table className="w-full text-left border border-purple-300">
            <thead className="bg-purple-300 dark:bg-purple-900 text-purple-900 dark:text-white">
              <tr>
                <th className="p-3"></th>
                <th className="p-3">Method</th>
                <th className="p-3">Description</th>
                <th className="p-3">Example</th>
              </tr>
            </thead>
            <tbody>
              {stringBufferMethods.map((method) => (
                <tr key={method.id} className="border-t">
                  <td className="p-2">{method.id}</td>
                  <td className="p-2 font-medium">{method.name}</td>
                  <td className="p-2">{method.description}</td>
                  <td className="p-2 font-mono text-sm text-gray-700 dark:text-gray-300">
                    {method.example}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ContentCard>
    </div>
  );
};

export default StringBufferMethods;
