import React from "react";
import { CheckCircle, Wrench } from "lucide-react";

const ICONS = {
  util: <Wrench className="text-purple-600 dark:text-purple-300" size={24} />,
  check: <CheckCircle className="text-green-500 mt-1" size={20} />,
};

const utilityMethodData = {
  header: {
    title: "Utility Methods in Wrapper Classes",
  },
  sections: [
    {
      id: 1,
      icon: ICONS.util,
      title: "Overview",
      description:
        "Utility methods in Java's wrapper classes provide convenient ways to convert between primitives, strings, and wrapper objects. These static methods are alternatives to constructors and help with type conversion.",
      keyPoints: [
        "Common utility methods include valueOf(), xxxValue(), parseXxx(), and toString().",
        "They are usually static and belong to wrapper classes like Integer, Double, etc.",
        "They avoid unnecessary object creation and improve performance.",
      ],
    },
    {
      id: 2,
      icon: ICONS.util,
      title: "valueOf() Method",
      description:
        "The valueOf() method creates a wrapper object from a primitive or a String representation. It is preferred over constructors.",
      keyPoints: [
        {
          type: "syntax",
          code: "Integer i1=new Integer(12);\nInteger i2 = Integer.valueOf(123);\nDouble d = Double.valueOf(11.11);",
        },
        "Creates a wrapper object from primitive or string.",
        "Preferred over 'new' keyword due to internal caching.",
        {
          type: "example",
          code: `public class App {\n  public static void main(String[] args) {\n    Integer i = Integer.valueOf(123);\n    System.out.println(i);//12\n    Double d = Double.valueOf(11.11);\n    System.out.println(d);//11.11\n  }\n}`,
        },
      ],
    },
    {
  id: 3,
  icon: ICONS.util,
  title: "xxxValue() Method",
  description:
    "The xxxValue() methods convert a wrapper object to its corresponding primitive type. These methods are instance methods of wrapper classes like Integer, Float, etc.",
  keyPoints: [
    "Available in all numeric wrapper classes.",
    {
      type: "syntax",
      code: `Integer i = new Integer(123);\nint x = i.intValue();\nbyte a = i.byteValue();\nshort b = i.shortValue();`,
    },
    {
      type: "example",
      code: `public class App {\n  public static void main(String[] args) {\n    Integer i = new Integer(123);\n    int x = i.intValue();\n    byte a = i.byteValue();\n    short b = i.shortValue();\n    System.out.println(x);\n    System.out.println(a);\n    System.out.println(b);\n  }\n}`,
    },
    "For byte and short, if the value exceeds the range, it wraps around (e.g., 130 as byte → -126).",
    "Character and Boolean have one method each: `charValue()` and `booleanValue()`."
  ],
},
{
  id: 4,
  icon: ICONS.util,
  title: "parseXxx() Method",
  description:
    "The parseXxx() methods are used to convert a String to a corresponding primitive value. These are static methods of the wrapper classes.",
  keyPoints: [
    "Present in all wrapper classes except Character.",
    {
      type: "syntax",
      code: `int x = Integer.parseInt("10");\ndouble d = Double.parseDouble("3.14");`,
    },
    {
      type: "example",
      code: `public class App {\n  public static void main(String[] args) {\n    int x = Integer.parseInt("10");\n    System.out.println(x); // 10\n  }\n}`,
    },
    "Useful for converting numeric Strings into primitive data for calculations.",
  ],
},
{
  id: 5,
  icon: ICONS.util,
  title: "toString() Method",
  description:
    "The toString() method converts wrapper objects or primitives into their String representation. Each wrapper class overrides toString().",
  keyPoints: [
    "Returns a String representation of the object or value.",
    {
      type: "syntax",
      code: `Integer i = 10;\nString s1 = i.toString();\nString s2 = Integer.toString(10);`,
    },
    {
      type: "example",
      code: `public class App {\n  public static void main(String[] args) {\n    Integer i = 10;\n    String s1 = i.toString();\n    String s2 = Integer.toString(10);\n    System.out.println(s1);\n    System.out.println(s2);\n  }\n}`,
    },
    "You can convert primitives or wrapper objects to strings easily.",
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

    <p className="text-gray-700 dark:text-gray-300 mb-6 text-base leading-relaxed">
      {section.description}
    </p>

    <SimplePointsList points={section.keyPoints} />
  </div>
);

const WrapperMethods = () => {
  const { header, sections } = utilityMethodData;

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

export default WrapperMethods;
