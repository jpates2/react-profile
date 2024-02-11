import bootcamp from "../images/certs/le_wagon.jpg";
import javascript from "../images/certs/javascript.jpeg";
import typescript from "../images/certs/typescript.jpeg";
import tailwind from "../images/certs/tailwind.jpeg";
import css from "../images/certs/css.jpeg";
import react from "../images/certs/react.jpeg";
import sql from "../images/certs/sql.jpeg";

export const CertificatesInfo = [
  {
    id: "c1",
    name: "web development bootcamp",
    provider: "Le Wagon",
    date: "Dec 22",
    certificate: bootcamp,
    link: "https://www.lewagon.com/web-development-course/",
    details: [
      "Ruby: Conditionals, arrays, hashes, iterators.",
      "OOP: Classes, instances, inheritance, self",
      "SQL: Schema design, active record, associations and validations.",
      "Frontend: HTML, CSS, Bootstrap.",
      "JavaScript: DOM, events, AJAX, Stimulus.",
      "Ruby on Rails: Hosting, image upload, authentication, authorization, geocoding."]
  },
  {
    id: "c2",
    name: "the complete javascript course",
    provider: "Udemy",
    date: "Aug 23",
    certificate: javascript,
    link: "https://www.udemy.com/course/the-complete-javascript-course/",
    details: [
      "Fundamentals: Variables, operators, conditionals, functions, arrays, objects, loops.",
      "DOM: Selecting, manipulating, events, event propagation, traversing.",
      "Data Structures: Destructuring, spread operators, short circuiting, sets, maps",
      "Functions: Call, apply, bind, IIFE, closures.",
      "Async: AJAX, fetch, promises, try/catch.",
      "OOP: Constructors, prototypes, getters, setters."]
  },
  {
    id: "c3",
    name: "mastering typescript",
    provider: "Udemy",
    date: "May 23",
    certificate: typescript,
    link: "https://www.udemy.com/course/learn-typescript/",
    details: [
      "Annotation: Objects, arrays, any, union, literal, tuples, enums.",
      "Functions: Default parameters, void, never.",
      "Interfaces: Methods, reopening, extending.",
      "Compiler: Watch, include, exclude, target, strict.",
      "Classes: Public, private, getters, setters, protected.",
      "Narrowing: Typeof, truthiness, equality, instanceof.",
    ]
  },
  {
    id: "c4",
    name: "css - the complete guide",
    provider: "Udemy",
    date: "Aug 23",
    certificate: css,
    link: "https://www.udemy.com/course/css-the-complete-guide-incl-flexbox-grid-sass/",
    details: [
      "Basics: Selectors, combinators, inheritance, pseudo classes, positioning.",
      "Box Model: Padding, margin, sizing",
      "Responsive Design: Viewport, media queries, logical operators.",
      "Display: Flexbox, grid, block, inline.",
      "Animations: Transitions, transforming, timing functions."
    ]
  },
  {
    id: "c5",
    name: "tailwind from scratch",
    provider: "Udemy",
    date: "Sep 23",
    certificate: tailwind,
    link: "https://www.udemy.com/course/tailwind-from-scratch/",
    details: [
      "Basics: Layout, positions, colours, spacing.",
      "Layouts: Grid, flexbox.",
      "Responsive Design: Interactivity, break classes, media queries",
      "Animations: Transition, transform, animations.",
    ]
  },
  {
    id: "c6",
    name: "react - the complete guide",
    provider: "Udemy",
    date: "Nov 23",
    certificate: react,
    link: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
    details: [
      "Essentials: Components, JSX, props, state, rendering.",
      "State Management: Context API, Redux.",
      "Routing: React Router, dynamic route, Links, loaders, actions.",
      "Hooks: useState, useEffect, useContext, useReducer, useRef, useMemo, useCallback, custom hooks.",
      "Async: fetch, promises, async/await, thunks.",
      "Animation: Framer Motion.",
    ]
  },
  {
    id: "c7",
    name: "sql",
    provider: "Udemy",
    date: "Dec 23",
    certificate: sql,
    link: "https://www.udemy.com/course/the-ultimate-mysql-bootcamp-go-from-sql-beginner-to-expert/",
    details: [
      "Basics: Databases, tables, data types.",
      "Querying: Select, where, order by, logical operators.",
      "Modification: Insert, update, delete.",
      "Aggregating: Joins, group by, subqueries.",
      "Constraints: Primary key, foreign key, unique, not null.",
      "Views & Modes: Having, rollup.",
      "Window Functions: Over, partition, rank, lead, lag.",
    ]
  },
  {
    id: "c8",
    name: "python",
    provider: "Udemy",
    date: "TBC",
    certificate: "",
    link: "https://www.udemy.com/course/the-modern-python3-bootcamp/",
    details: []
  },
]
