import React from "react";
import { Coffee, CheckCircle } from "lucide-react";

const ICONS = {
  java: <Coffee className="text-purple-600 dark:text-purple-300" size={24} />,
  check: <CheckCircle className="text-green-500 mt-1" size={20} />,
};

const objectClassData = {
  header: {
    title: "Object Class",
    subtitle: "",
  },
  sections: [
    {
      id: 1,
      icon: ICONS.java,
      title: "Object Class Overview",
      description:
        "In Java, Object is the superclass of all classes. It is part of java.lang package and provides a foundation for every class. Every class in Java implicitly inherits from Object if no other superclass is specified.",
      keyPoints: [
        "Object class is the parent of all classes in Java.",
        "Part of java.lang package - automatically imported.",
        "Provides basic methods like toString(), equals(), hashCode(), etc.",
        "These methods can be overridden to provide custom behavior.",
        "Forms the root of the Java class hierarchy.",
      ],
    },
    {
      id: 2,
      icon: ICONS.java,
      title: "Common Methods of Object Class",
      description:
        "The Object class provides several fundamental methods that are inherited by all Java classes. These methods can be overridden to provide class-specific behavior.",
      keyPoints: [
        {
          category: "toString() Method",
          details: [
            { type: "syntax", code: "public String toString()" },
            "It is required to return content of the object and not address of  the object.(String,Wrapper and All collections implemented classes etc.)",
            "Returns a string representation of the object.",
            "Default implementation returns className@hashCode.",
            "Should be overridden to provide meaningful string representation.",
            "Automatically called when object is printed or concatenated with string.",
            {
              type: "example",
              code: `class Student {
    int id = 101;
    String name = "John";
    
    @Override
    public String toString() {
        return id + " - " + name;
    }
}

Student s = new Student();
System.out.println(s); // Output: 101 - John`,
            },
          ],
        },
        {
          category: "equals(Object obj) Method",
          details: [
            { type: "syntax", code: "public boolean equals(Object obj)" },
            "It is a method which will perform comparison in between two objects for equality.",
            "This method will compare both address as well as content of an object.",
            "It will compare content when it has been overridden in the class where object are being compared ",
            "Default implementation uses == operator (reference comparison).",
            "Should be overridden to compare object contents rather than references.",
            "Must satisfy reflexive, symmetric, transitive, and consistent properties.",
            "If equals() is overridden, hashCode() should also be overridden.",
            {
              type: "example",
              code: `@Override
public boolean equals(Object obj) {
    if (this == obj) return true;
    if (obj == null || getClass() != obj.getClass()) return false;
    Student student = (Student) obj;
    return id == student.id && 
           Objects.equals(name, student.name);
}`,
            },
          ],
        },
        {
          category: "hashCode() Method",
          details: [
            { type: "syntax", code: "public int hashCode()" },
            "Returns a hash code value for the object.",
            "Used by hash-based collections like HashMap, HashSet.",
            "Objects that are equal must have the same hash code.",
            "Should be overridden when equals() is overridden.",
            "Should be consistent - multiple calls should return same value.",
            {
              type: "example",
              code: `@Override
public int hashCode() {
    return Objects.hash(id, name);
}`,
            },
          ],
        },
        {
          category: "getClass() Method",
          details: [
            { type: "syntax", code: "public final Class<?> getClass()" },
            "Returns the runtime class of the object.",
            "Cannot be overridden (final method).",
            "Returns a Class object representing the object's class.",
            "Useful for reflection and runtime type checking.",
            {
              type: "example",
              code: `Student s = new Student();
Class<?> clazz = s.getClass();
System.out.println(clazz.getName()); // Output: Student`,
            },
          ],
        },
        {
          category: "clone() Method",
          details: [
            { type: "syntax", code: "protected Object clone() throws CloneNotSupportedException" },
            "Creates and returns a copy of the object.",
            "Class must implement Cloneable interface to use this method.",
            "Performs shallow copy by default.",
            "Should be overridden for deep copying if needed.",
            "Throws CloneNotSupportedException if Cloneable is not implemented.",
            {
              type: "example",
              code: `class Student implements Cloneable {
    // fields and methods...
    
    @Override
    public Object clone() throws CloneNotSupportedException {
        return super.clone();
    }
}`,
            },
          ],
        },
        {
          category: "finalize() Method",
          details: [
            { type: "syntax", code: "protected void finalize() throws Throwable" },
            "Called by the garbage collector before object is removed from memory.",
            "Deprecated since Java 9 - not recommended for use.",
            "No guarantee when or if it will be called.",
            "Used for cleanup operations (better alternatives: try-with-resources, AutoCloseable).",
            "Should call super.finalize() if overridden.",
          ],
        },
      ],
    },
    {
      id: 3,
      icon: ICONS.java,
      title: "Complete Example",
      description:
        "Here's a comprehensive example showing how to properly override Object class methods in a custom class.",
      keyPoints: [
        {
          category: "Student Class Implementation",
          details: [
            {
              type: "example",
              code: `import java.util.Objects;

class Student implements Cloneable {
    private int id;
    private String name;
    private int age;
    
    // Constructor
    public Student(int id, String name, int age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    
    // Override toString()
    @Override
    public String toString() {
        return "Student{id=" + id + ", name='" + name + "', age=" + age + "}";
    }
    
    // Override equals()
    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        Student student = (Student) obj;
        return id == student.id && 
               age == student.age && 
               Objects.equals(name, student.name);
    }
    
    // Override hashCode()
    @Override
    public int hashCode() {
        return Objects.hash(id, name, age);
    }
    
    // Override clone()
    @Override
    public Object clone() throws CloneNotSupportedException {
        return super.clone(); // Shallow copy
    }
    
    public static void main(String[] args) throws CloneNotSupportedException {
        Student s1 = new Student(101, "John", 20);
        Student s2 = new Student(101, "John", 20);
        Student s3 = (Student) s1.clone();
        
        System.out.println(s1); // toString() called
        System.out.println("s1.equals(s2): " + s1.equals(s2)); // true
        System.out.println("s1 == s2: " + (s1 == s2)); // false
        System.out.println("s1.hashCode(): " + s1.hashCode());
        System.out.println("s2.hashCode(): " + s2.hashCode());
        System.out.println("Class: " + s1.getClass().getSimpleName());
    }
}`,
            },
            {
              type: "example",
              code: `// Output:
// Student{id=101, name='John', age=20}
// s1.equals(s2): true
// s1 == s2: false
// s1.hashCode(): 65208047
// s2.hashCode(): 65208047
// Class: Student`,
            },
          ],
        },
      ],
    },
  ],
};

// Components (same as String class component)
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

const ObjectClass = () => {
  const { header, sections } = objectClassData;

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

export default ObjectClass;