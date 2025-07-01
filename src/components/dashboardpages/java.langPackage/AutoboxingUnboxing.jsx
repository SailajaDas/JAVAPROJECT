import React from "react";
import { CheckCircle, RefreshCw } from "lucide-react";
import img2 from "../../../assets/WrapperClass/img2.png";

const ICONS = {
  check: <CheckCircle className="text-green-500 mt-1" size={20} />,
  convert: (
    <RefreshCw className="text-indigo-600 dark:text-indigo-300" size={24} />
  ),
};

const autoboxingData = {
  header: {
    title: "Autoboxing & Unboxing ",
  },
  sections: [
    {
      id: 1,
      icon: ICONS.convert,
      title: "Overview",
      description:
        "     Before Java 1.4v,we can't provide wrapper object in place of primitive and primitive in the place of wrapper object,All the required conversion should be performed explicitly by the programmer using methods.From Java 1.5v onwards, the compiler handles this automatically.",
         image: img2, 
      keyPoints: [
        "Autoboxing: Converting primitive → wrapper object.",
        "Unboxing: Converting wrapper object → primitive.",
        "Compiler performs these conversions automatically during assignment, method invocation, etc.",
        {
          type: "syntax",
          code: `int x = new Integer(10); // unboxing\nInteger y = 20;           // autoboxing`,
        },
      ],
    },
    {
      id: 2,
      icon: ICONS.convert,
      title: "Autoboxing",
      description:
        "Autoboxing is the automatic conversion of a primitive datatype into its corresponding wrapper object.",
      keyPoints: [
        "Handled by the compiler using `valueOf()` method internally.",
        {
          type: "syntax",
          code: `Integer i = 10; // Internally: Integer.valueOf(10)`,
        },
        {
          type: "example",
          code: `public class App {\n  public static void main(String[] args) {\n    Integer i = 123; // Autoboxing\n    System.out.println(i); // 123\n  }\n}`,
        },
      ],
    },
    {
      id: 3,
      icon: ICONS.convert,
      title: "Unboxing",
      description:
        "Unboxing is the automatic conversion of a wrapper object to its corresponding primitive datatype.",
      keyPoints: [
        "Compiler uses `xxxValue()` methods internally (e.g., `intValue()`, `doubleValue()`).",
        {
          type: "syntax",
          code: `Integer i = new Integer(20);\nint x = i; // Internally: i.intValue();`,
        },
        {
          type: "example",
          code: `public class App {\n  public static void main(String[] args) {\n    Integer i = new Integer(20); // Wrapper object\n    int x = i; // Unboxing\n    System.out.println(i);\n    System.out.println(x);\n  }\n}`,
        },
      ],
    },
  ],
};

const SectionHeader = ({ title, subtitle }) => (
  <div className="text-center mb-12">
    <h1 className="text-4xl md:text-5xl font-bold text-indigo-700 dark:text-indigo-300 mb-2">
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
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Left: Text content */}
      <div className="flex-1">
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

      {/* Right: Optional Image */}
      {section.image && (
        <div className="lg:w-1/3 flex justify-center items-center">
          <img
            src={section.image}
            alt={`${section.title} illustration`}
            className="rounded-xl shadow-md max-w-full h-auto"
          />
        </div>
      )}
    </div>
  </div>
);


const AutoboxingUnboxing = () => {
  const { header, sections } = autoboxingData;

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

export default AutoboxingUnboxing;
