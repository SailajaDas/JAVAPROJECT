import React from "react";
import { ListChecks, Code, AlertTriangle, CheckCircle } from "lucide-react";

const ICONS = {
  compare: (
    <ListChecks className="text-purple-600 dark:text-purple-300" size={24} />
  ),
  code: <Code className="text-blue-600 dark:text-blue-300" size={20} />,
  error: <AlertTriangle className="text-red-600 dark:text-red-300" size={20} />,
  success: (
    <CheckCircle className="text-green-600 dark:text-green-300" size={20} />
  ),
};

const wrapperConstructorData = {
  Integer: {
    note: "The Integer class provides two constructors: one that accepts a primitive int and another that accepts a String as an argument.",
    examples: [
      {
        feature: "Constructor with Primitive Type",
        example: "Integer I = new Integer(10);",
        comment: "// Primitive int",
        status: "valid",
        icon: ICONS.success,
      },
      {
        feature: "Constructor with String Type",
        example: 'Integer I = new Integer("10");',
        comment: "// String representation",
        status: "valid",
        icon: ICONS.success,
      },
      {
        feature: "Invalid Argument (Character)",
        example: 'Integer I = new Integer("a");',
        comment: "// Error: NumberFormatException",
        status: "error",
        icon: ICONS.error,
      },
      {
        feature: "Invalid Argument (String)",
        example: 'Integer I = new Integer("ten");',
        comment: "// Error: NumberFormatException",
        status: "error",
        icon: ICONS.error,
      },
      {
        feature: "No-Argument Constructor",
        example: "Integer I = new Integer();",
        comment: "// Error: No default constructor",
        status: "error",
        icon: ICONS.error,
      },
    ],
  },
  Double: {
    note: "The Double class provides two constructors: one that accepts a primitive double and another that accepts a String as an argument.",
    examples: [
      {
        feature: "Constructor with Primitive Type",
        example: "Double d = new Double(10.5);",
        comment: "// Primitive double",
        status: "valid",
        icon: ICONS.success,
      },
      {
        feature: "Constructor with Float Literal",
        example: "Double d = new Double(10.5f);",
        comment: "// float widening to double",
        status: "valid",
        icon: ICONS.success,
      },
      {
        feature: "Constructor with String Type",
        example: 'Double d = new Double("10.5");',
        comment: "// String representation",
        status: "valid",
        icon: ICONS.success,
      },
      {
        feature: "Invalid Argument (Character)",
        example: 'Double d = new Double("abc");',
        comment: "// Error: NumberFormatException",
        status: "error",
        icon: ICONS.error,
      },
      {
        feature: "No-Argument Constructor",
        example: "Double d = new Double();",
        comment: "// Error: No default constructor",
        status: "error",
        icon: ICONS.error,
      },
    ],
  },
  Float: {
    note: "The Float class provides constructors that accept a primitive float, a String, or a double (via widening) as arguments.",
    examples: [
      {
        feature: "Constructor with Primitive Type",
        example: "Float f = new Float(10.5f);",
        comment: "// Primitive float",
        status: "valid",
        icon: ICONS.success,
      },
      {
        feature: "Constructor with String Type",
        example: 'Float f = new Float("10.5");',
        comment: "// String representation",
        status: "valid",
        icon: ICONS.success,
      },
      {
        feature: "Invalid Argument",
        example: 'Float f = new Float("invalid");',
        comment: "// Error: NumberFormatException",
        status: "error",
        icon: ICONS.error,
      },
    ],
  },
  Character: {
    note: "Character class contains only one constructor with primitive type as an argument.",
    examples: [
      {
        feature: "Constructor with Primitive Type",
        example: "Character c = new Character('A');",
        comment: "// Primitive char",
        status: "valid",
        icon: ICONS.success,
      },
      {
        feature: "No String Constructor",
        example: 'Character c = new Character("A");',
        comment: "// Error: No such constructor",
        status: "error",
        icon: ICONS.error,
      },
    ],
  },
  Boolean: {
    note: "If we are passing a primitive type as an argument to the Boolean class constructor, the only allowed values are true and false (case-sensitive). For String arguments, it is case-insensitive and parses 'true' (ignoring case) as true; all other values result in false.",
    examples: [
      {
        group: "Primitive Argument",
        items: [
          {
            feature: "Valid Primitive Value",
            example: "Boolean b = new Boolean(true);",
            comment: "// Primitive boolean",
            status: "valid",
            icon: ICONS.success,
          },
          {
            feature: "Invalid Identifier",
            example: "Boolean b = new Boolean(True);",
            comment: "// Error: 'True' is undefined (Java is case-sensitive)",
            status: "error",
            icon: ICONS.error,
          },
          {
            feature: "Valid Primitive Value",
            example: "Boolean b = new Boolean(false);",
            comment: "// Primitive boolean",
            status: "valid",
            icon: ICONS.success,
          },
          {
            feature: "Invalid Identifier",
            example: "Boolean b = new Boolean(False);",
            comment: "// Error: 'False' is undefined (Java is case-sensitive)",
            status: "error",
            icon: ICONS.error,
          },
          {
            feature: "No-Argument Constructor",
            example: "Boolean b = new Boolean();",
            comment: "// Error: No constructor with 0 args in current versions",
            status: "error",
            icon: ICONS.error,
          },
        ],
      },
      {
        group: "String Argument",
        items: [
          {
            feature: "Lowercase 'true'",
            example: 'Boolean b = new Boolean("true");',
            comment: "// Evaluates to true",
            status: "valid",
            icon: ICONS.success,
          },
          {
            feature: "Uppercase 'TRUE'",
            example: 'Boolean b = new Boolean("TRUE");',
            comment: "// Evaluates to true (case-insensitive)",
            status: "valid",
            icon: ICONS.success,
          },
          {
            feature: "Lowercase 'false'",
            example: 'Boolean b = new Boolean("false");',
            comment: "// Evaluates to false",
            status: "valid",
            icon: ICONS.success,
          },
          {
            feature: "Random String",
            example: 'Boolean b = new Boolean("yes");',
            comment: "// Evaluates to false (not equal to 'true')",
            status: "valid",
            icon: ICONS.success,
          },
        ],
      },
    ],
  },
  Byte: {
    note: "The Byte class provides two constructors: one that accepts a primitive byte and another that accepts a String as an argument.",
    examples: [
      {
        feature: "Constructor with Primitive Type",
        example: "Byte b = new Byte((byte)10);",
        comment: "// Primitive byte",
        status: "valid",
        icon: ICONS.success,
      },
      {
        feature: "Constructor with String Type",
        example: 'Byte b = new Byte("10");',
        comment: "// String representation",
        status: "valid",
        icon: ICONS.success,
      },
      {
        feature: "Out of Range",
        example: 'Byte b = new Byte("128");',
        comment: "// Error: NumberFormatException",
        status: "error",
        icon: ICONS.error,
      },
    ],
  },
  Short: {
    note: "The Short class provides two constructors: one that accepts a primitive short and another that accepts a String as an argument.",
    examples: [
      {
        feature: "Constructor with Primitive Type",
        example: "Short s = new Short((short)10);",
        comment: "// Primitive short",
        status: "valid",
        icon: ICONS.success,
      },
      {
        feature: "Constructor with String Type",
        example: 'Short s = new Short("10");',
        comment: "// String representation",
        status: "valid",
        icon: ICONS.success,
      },
      {
        feature: "Out of Range",
        example: 'Short s = new Short("40000");',
        comment: "// Error: NumberFormatException",
        status: "error",
        icon: ICONS.error,
      },
    ],
  },
  Long: {
    note: "The Long class provides two constructors: one that accepts a primitive long and another that accepts a String as an argument.",
    examples: [
      {
        feature: "Constructor with Primitive Type",
        example: "Long l = new Long(100L);",
        comment: "// Primitive long",
        status: "valid",
        icon: ICONS.success,
      },
      {
        feature: "Constructor with String Type",
        example: 'Long l = new Long("100");',
        comment: "// String representation",
        status: "valid",
        icon: ICONS.success,
      },
      {
        feature: "Invalid Argument",
        example: 'Long l = new Long("invalid");',
        comment: "// Error: NumberFormatException",
        status: "error",
        icon: ICONS.error,
      },
    ],
  },
};
const wrapperTypeTableData = [
  {
    primitive: "boolean",
    wrapper: "Boolean",
    constructorArgs: "boolean or String",
  },
  {
    primitive: "byte",
    wrapper: "Byte",
    constructorArgs: "byte or String",
  },
  {
    primitive: "char",
    wrapper: "Character",
    constructorArgs: "char",
  },
  {
    primitive: "int",
    wrapper: "Integer",
    constructorArgs: "int or String",
  },
  {
    primitive: "float",
    wrapper: "Float",
    constructorArgs: "float, double or String",
  },
  {
    primitive: "double",
    wrapper: "Double",
    constructorArgs: "double or String",
  },
  {
    primitive: "long",
    wrapper: "Long",
    constructorArgs: "long or String",
  },
  {
    primitive: "short",
    wrapper: "Short",
    constructorArgs: "short or String",
  },
];

// Section header
const SectionHeader = ({ title }) => (
  <div className="text-center mb-12">
    <h1 className="text-4xl md:text-5xl font-bold text-indigo-700 dark:text-purple-300 mb-2">
      {title}
    </h1>
  </div>
);

// Card wrapper
const ContentCard = ({ icon, title, children, className = "" }) => (
  <div
    className={`bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md border-l-8 border-purple-600 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${className}`}
  >
    <div className="flex items-center gap-3 mb-4">
      {icon}
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
        {title}
      </h2>
    </div>
    <div>{children}</div>
  </div>
);

// Wrapper class card
const WrapperClassCard = ({ wrapperType, data }) => (
  <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md border-l-8 border-blue-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
    <div className="flex items-center gap-3 mb-4">
      <Code className="text-blue-600 dark:text-blue-300" size={24} />
      <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300">
        {wrapperType} Wrapper
      </h3>
    </div>

    {data.note && (
      <p className="text-sm italic text-gray-600 dark:text-gray-400 mb-4 bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
        {data.note}
      </p>
    )}

    <div className="grid gap-4">
      {data.examples.map((item, index) =>
        item.items ? (
          // Handle grouped items (like Boolean)
          <div key={index}>
            <h4 className="text-md font-semibold text-blue-600 dark:text-blue-300 mb-3 border-b border-blue-200 dark:border-blue-700 pb-1">
              {item.group}
            </h4>
            <div className="space-y-3">
              {item.items.map((subItem, subIndex) => (
                <div key={subIndex} className="space-y-2">
                  <h5 className="font-semibold text-sm text-gray-900 dark:text-white">
                    {subItem.feature}
                  </h5>
                  <CodeBlock
                    code={subItem.example}
                    comment={subItem.comment}
                    status={subItem.status}
                    icon={subItem.icon}
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          // Handle flat items
          <div key={index} className="space-y-2">
            <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
              {item.feature}
            </h4>
            <CodeBlock
              code={item.example}
              comment={item.comment}
              status={item.status}
              icon={item.icon}
            />
          </div>
        )
      )}
    </div>
  </div>
);

// Code block component
const CodeBlock = ({ code, comment, status, icon }) => (
  <div
    className={`flex items-center gap-3 p-3 rounded-lg font-mono text-sm ${
      status === "error"
        ? "bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800"
        : "bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800"
    }`}
  >
    {icon}
    <div className="flex-1">
      <code className="text-gray-800 dark:text-gray-200">{code}</code>
      <span
        className={`ml-2 ${
          status === "error"
            ? "text-red-600 dark:text-red-400"
            : "text-green-600 dark:text-green-400"
        }`}
      >
        {comment}
      </span>
    </div>
  </div>
);

const WrapperConstructors = () => {
  return (
    <div className="w-[95%] max-w-7xl mx-auto">
      <SectionHeader title="Wrapper Constructors" />

      <div className="space-y-8">
        {/* Introduction Card */}
        <ContentCard
          icon={ICONS.compare}
          title="What is a Wrapper Constructor?"
        >
          <div className="space-y-4">
            <p className="text-gray-800 dark:text-gray-300 leading-relaxed">
              A wrapper class in Java is used to wrap primitive data types (like
              int, float, etc.) into objects. The constructor of a wrapper class
              can take either a{" "}
              <span className="font-semibold text-purple-600 dark:text-purple-300">
                primitive type
              </span>{" "}
              or a{" "}
              <span className="font-semibold text-purple-600 dark:text-purple-300">
                string
              </span>{" "}
              as an argument.
            </p>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
              <p className="text-yellow-800 dark:text-yellow-200 text-sm">
                <strong>Note:</strong> Wrapper constructors are deprecated since
                Java 9. Use valueOf() methods instead.
              </p>
            </div>
          </div>
        </ContentCard>

        {/* Individual Wrapper Class Cards */}
        <div className="grid gap-8">
          {Object.entries(wrapperConstructorData).map(([wrapperType, data]) => (
            <WrapperClassCard
              key={wrapperType}
              wrapperType={wrapperType}
              data={data}
            />
          ))}
        </div>

        {/* Modern Alternatives Card */}
        <ContentCard
          icon={ICONS.success}
          title="Modern Alternatives (Recommended)"
          className="border-l-green-500"
        >
          <div className="space-y-4">
            <p className="text-gray-800 dark:text-gray-300 mb-4">
              Since wrapper constructors are deprecated, use these modern
              alternatives:
            </p>
            <div className="grid gap-3">
              <CodeBlock
                code="Integer.valueOf(10)"
                comment="// Instead of new Integer(10)"
                status="valid"
                icon={ICONS.success}
              />
              <CodeBlock
                code="Double.valueOf(10.5)"
                comment="// Instead of new Double(10.5)"
                status="valid"
                icon={ICONS.success}
              />
              <CodeBlock
                code="Boolean.valueOf(true)"
                comment="// Instead of new Boolean(true)"
                status="valid"
                icon={ICONS.success}
              />
              <CodeBlock
                code="Character.valueOf('A')"
                comment="// Instead of new Character('A')"
                status="valid"
                icon={ICONS.success}
              />
              <CodeBlock
                code="Byte.valueOf((byte)10)"
                comment="// Instead of new Byte((byte)10)"
                status="valid"
                icon={ICONS.success}
              />
              <CodeBlock
                code="Short.valueOf((short)10)"
                comment="// Instead of new Short((short)10)"
                status="valid"
                icon={ICONS.success}
              />
              <CodeBlock
                code="Long.valueOf(100L)"
                comment="// Instead of new Long(100L)"
                status="valid"
                icon={ICONS.success}
              />
              <CodeBlock
                code="Float.valueOf(10.5f)"
                comment="// Instead of new Float(10.5f)"
                status="valid"
                icon={ICONS.success}
              />
            </div>
          </div>
        </ContentCard>
        <ContentCard
          icon={ICONS.code}
          title="Primitive Types vs Wrapper Classes"
        >
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse border border-purple-300 dark:border-purple-700 text-sm">
              <thead className="bg-purple-100 dark:bg-purple-900">
                <tr>
                  <th className="border border-purple-300 dark:border-purple-700 px-4 py-2 text-center align-middle">
                    Primitive Data Type
                  </th>
                  <th className="border border-purple-300 dark:border-purple-700 px-4 py-2 text-center align-middle">
                    Wrapper Class
                  </th>
                  <th className="border border-purple-300 dark:border-purple-700 px-4 py-2 text-center align-middle">
                    Constructor Argument
                  </th>
                </tr>
              </thead>
              <tbody>
                {wrapperTypeTableData.map((row, idx) => (
                  <tr
                    key={idx}
                    className="odd:bg-white even:bg-purple-50 dark:odd:bg-gray-900 dark:even:bg-gray-800"
                  >
                    <td className="border border-purple-300 dark:border-purple-700 px-4 py-2 font-mono text-center align-middle">
                      {row.primitive}
                    </td>
                    <td className="border border-purple-300 dark:border-purple-700 px-4 py-2 font-mono text-center align-middle">
                      {row.wrapper}
                    </td>
                    <td className="border border-purple-300 dark:border-purple-700 px-4 py-2 text-center align-middle">
                      {row.constructorArgs}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ContentCard>
      </div>
    </div>
  );
};

export default WrapperConstructors;
