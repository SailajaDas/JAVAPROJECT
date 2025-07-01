import React from "react";
import { Coffee, CheckCircle } from "lucide-react";
import img from "../../../assets/Collection/img1.jpg";

const ICONS = {
  java: <Coffee className="text-purple-600 dark:text-purple-300" size={24} />,
  check: <CheckCircle className="text-green-500 mt-1" size={20} />,
};

const collectionFrameworkData = {
  header: {
    title: "Collection Framework",
  },
  sections: [
    {
      id: 1,
      icon: ICONS.java,
      title: "What is Collection Framework?",
      description:
        "The Java Collection Framework is the combination of several predefined interfaces, their child interfaces and their implemented classes.",
      keyPoints: [
        "Supports both legacy and modern classes (like Vector, ArrayList).",
        "Enables developers to work with different data structures in a consistent way.",
        "Offers interfaces like List, Set, Queue, and Map along with their implementations.",
        "Enhances code reusability and readability by providing a set of generic interfaces and classes for various data structures.",
        {
          type: "example",
          code: `List<String> names = new ArrayList<>();
names.add("Alice");
names.add("Bob");`,
        },
      ],
    },
    {
      id: 2,
      icon: ICONS.java,
      title: "Why was Collection Framework introduced?",
      description:
        "Before Java 1.2, arrays were the primary way to store groups of objects, but they had fixed sizes, lacked flexibility, and didn't support built-in methods for common operations. The Collection Framework overcame these limitations by offering dynamic and consistent data structures.",
      keyPoints: [
        "To eliminate the limitations of arrays (fixed size, type restriction).",
        "To unify legacy classes (like Vector, Stack, Hashtable) under common interfaces.",
        "To reduce boilerplate code when performing common data operations (add, remove, sort, etc.).",
        "To provide algorithms like sorting and searching built into utility classes (Collections, Arrays).",
        "To offer generic and type-safe collections using Java Generics (since Java 5).",
        {
          type: "example",
          code: `Map<Integer, String> studentMap = new HashMap<>();
studentMap.put(1, "Amit");
studentMap.put(2, "Riya");`,
        },
      ],
    },
    {
      id: 3,
      icon: ICONS.java,
      title: "Difference between Array and Collection",
      description:
        "Arrays and Collections serve similar purposes but have fundamental differences in terms of size, type safety, functionality, and performance characteristics.",
      keyPoints: [
        {
          type: "table",
          data: [
            {
              aspect: "Size",
              array: "Fixed size (defined at creation time)",
              collection: "Dynamic size (can grow/shrink at runtime)",
            },
            {
              aspect: "Type Storage",
              array: "Can store both primitives and objects",
              collection: "Can only store objects (primitives are auto-boxed)",
            },
            {
              aspect: "Type Safety",
              array: "Homogeneous (same type elements)",
              collection:
                "Can be heterogeneous, but generics provide type safety",
            },
            {
              aspect: "Memory",
              array: "Stored in contiguous memory locations",
              collection:
                "Uses underlying data structures (linked lists, trees, etc.)",
            },
            {
              aspect: "Performance",
              array: "Faster access O(1) for index-based operations",
              collection:
                "Varies by implementation (ArrayList O(1), LinkedList O(n))",
            },
            {
              aspect: "Built-in Methods",
              array: "Limited built-in methods (length property)",
              collection: "Rich API (add, remove, contains, size, etc.)",
            },
            {
              aspect: "Indexing",
              array: "Direct index access: arr[0]",
              collection: "Method-based access: list.get(0)",
            },
            {
              aspect: "Null Values",
              array: "Can store null values",
              collection: "Can store null values (except some implementations)",
            },
          ],
        },
        {
          type: "example",
          code: `// Array - Fixed size, primitive support
int[] numbers = new int[5];
numbers[0] = 10;
System.out.println(numbers.length); // 5

// Collection - Dynamic size, object storage
List<Integer> numberList = new ArrayList<>();
numberList.add(10);
numberList.add(20);
System.out.println(numberList.size()); // 2`,
        },
      ],
    },
    {
      id: 4,
      icon: ICONS.java,
      title: "Collection Framework Hierarchy",
      description:
        "The Collection Framework is structured into a hierarchy of interfaces and classes, allowing consistent architecture for various data structures. Below is a visual representation of its hierarchy.",
      keyPoints: [
        {
          type: "image",
          src: img,
          alt: "Java Collection Framework Hierarchy",
        },
      ],
    },
    {
      id: 5,
      icon: ICONS.java,
      title: "What is Collection Interface?",
      description:
        "Whenever we want to represent a group of individual object as a single entity,then we will go for collection interface.",
      keyPoints: [
        "Part of `java.util` package and the root of the Collection hierarchy.",
        "Extended by interfaces like List, Set, and Queue.",
        "Provides core methods like `add()`, `remove()`, `contains()`, `isEmpty()`, and `size()`.",
        "Cannot be instantiated directly, but its subinterfaces can be implemented.",
        "Represents a group of objects known as elements.",
        {
          type: "example",
          code: `Collection<String> items = new ArrayList<>();
items.add("Pen");
items.add("Notebook");
System.out.println(items.contains("Pen")); // true`,
        },
      ],
    },
    {
      id: 6,
      icon: ICONS.java,
      title: "Collection Interface Methods",
      description:
        "The Collection interface provides several essential methods for manipulating collections. These methods form the foundation for all collection operations and are inherited by all collection types.",
      keyPoints: [
        {
          type: "table",
          data: [
            {
              aspect: "boolean add(Object o)",
              array: "Adds the specified element to the collection",
              collection: "list.add(\"Java\"); // Returns true if added successfully",
            },
            {
              aspect: "boolean addAll(Collection c)",
              array: "Adds all elements from specified collection",
              collection: "list1.addAll(list2); // Adds all elements of list2 to list1",
            },
            {
              aspect: "boolean remove(Object o)",
              array: "Removes the specified element from collection",
              collection: "list.remove(\"Java\"); // Returns true if element was removed",
            },
            {
              aspect: "boolean removeAll(Collection c)",
              array: "Removes all elements that are contained in specified collection",
              collection: "list1.removeAll(list2); // Removes common elements",
            },
            {
              aspect: "boolean retainAll(Collection c)",
              array: "Retains only elements that are contained in specified collection",
              collection: "list1.retainAll(list2); // Keeps only common elements",
            },
            {
              aspect: "void clear()",
              array: "Removes all elements from the collection",
              collection: "list.clear(); // Makes collection empty",
            },
            {
              aspect: "boolean contains(Object o)",
              array: "Returns true if collection contains specified element",
              collection: "boolean found = list.contains(\"Java\");",
            },
            {
              aspect: "boolean containsAll(Collection c)",
              array: "Returns true if collection contains all elements of specified collection",
              collection: "boolean hasAll = list1.containsAll(list2);",
            },
            {
              aspect: "boolean isEmpty()",
              array: "Returns true if collection contains no elements",
              collection: "if(list.isEmpty()) { System.out.println(\"Empty\"); }",
            },
            {
              aspect: "int size()",
              array: "Returns the number of elements in collection",
              collection: "int count = list.size(); // Gets element count",
            },
            {
              aspect: "Iterator iterator()",
              array: "Returns an iterator over elements in collection",
              collection: "Iterator it = list.iterator(); // For traversing",
            },
            {
              aspect: "Object[] toArray()",
              array: "Converts collection to array",
              collection: "Object[] arr = list.toArray(); // Collection to array",
            },
          ],
        },
        {
          type: "example",
          code: `// Comprehensive example of Collection methods
Collection<String> languages = new ArrayList<>();

// Adding elements
languages.add("Java");
languages.add("Python");
languages.add("JavaScript");

// Checking size and contents
System.out.println("Size: " + languages.size()); // 3
System.out.println("Contains Java: " + languages.contains("Java")); // true
System.out.println("Is Empty: " + languages.isEmpty()); // false

// Adding another collection
Collection<String> moreLanguages = Arrays.asList("C++", "Go");
languages.addAll(moreLanguages);

// Iterating through collection
Iterator<String> it = languages.iterator();
while(it.hasNext()) {
    System.out.println(it.next());
}

// Converting to array
Object[] langArray = languages.toArray();

// Removing elements
languages.remove("Go");
languages.clear(); // Remove all elements`,
        },
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
  if (typeof point === "object" && point.type === "table") {
    return (
      <li className="flex flex-col gap-4">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 dark:border-gray-600 rounded-lg">
            <thead>
              <tr className="bg-purple-100 dark:bg-purple-900">
                <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-semibold text-gray-800 dark:text-gray-200">
                  Aspect
                </th>
                <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-semibold text-gray-800 dark:text-gray-200">
                  Description
                </th>
                <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-semibold text-gray-800 dark:text-gray-200">
                  Collection
                </th>
              </tr>
            </thead>
            <tbody>
              {point.data.map((row, index) => (
                <tr
                  key={index}
                  className={
                    index % 2 === 0
                      ? "bg-gray-50 dark:bg-gray-800"
                      : "bg-white dark:bg-gray-900"
                  }
                >
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium text-gray-800 dark:text-gray-200">
                    {row.aspect}
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">
                    {row.array}
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">
                    {row.collection}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </li>
    );
  }

  if (typeof point === "object" && point.type === "image") {
    return (
      <li className="flex flex-col items-center gap-4">
        <img
          src={point.src}
          alt={point.alt || "Diagram"}
          className="rounded-xl border border-gray-300 dark:border-gray-700 shadow-lg max-w-full h-auto"
        />
        <p className="text-sm text-gray-600 dark:text-gray-400">{point.alt}</p>
      </li>
    );
  }

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
  <div className="w-full bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border-l-8 border-violet-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
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

const CollectionFramework = () => {
  const { header, sections } = collectionFrameworkData;

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

export default CollectionFramework;