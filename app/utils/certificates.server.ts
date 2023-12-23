import advancedReactHooks from "../assets/certificates/Advanced React Hooks.png"
import cssForJsDev from "../assets/certificates/CSS for JS Devs.png"
import dataModelling from "../assets/certificates/Data Modelling.png"
import fullStackFoundations from "../assets/certificates/Fullstack Foundations.png"
import professionalForms from "../assets/certificates/Professionals Forms.png"
import reactFundamentals from "../assets/certificates/React Fundamentals.png"
import reactHooks from "../assets/certificates/React Hooks.png"
import typescript from "../assets/certificates/Typescript.png"

export const certificates = [
  {
    cert: cssForJsDev,
    label: "CSS for Javascript Devs",
    skills: ["Rendering Logic", "Flexbox", "Grid",
      "Responsive and Behavioural CSS", "Typography and Images"]
  },
  {
    cert: typescript,
    label: "TypeScript",
    skills: ["Typescript basics", "Interfaces", "Combining Types", "Generics", "Advanced Typescript functions"]
  },
  {
    cert: reactFundamentals,
    label: "React Fundamentals",
    skills: ["Raw React APIs", "JSX", "Custom Components", "Styling", "Rendering Arrays"]
  },
  {
    cert: reactHooks,
    label: "React Hooks",
    skills: ["useState", "useEffect", "useRef", "Lifting State Up", "Hooks Flow"]
  },
  {
    cert: advancedReactHooks,
    label: "Advanced React Hooks",
    skills: ["useReducer", "useCallback", "useContext", "useLayoutEffect", "useImperativeHandle"]
  },
  {
    cert: fullStackFoundations,
    label: "Fullstack Foundations",
    skills: ["Remix Styling", "Remix Routing", "Remix Data Loading",
      "Remix Mutations", "Remix Error Handling"]
  },
  {
    cert: professionalForms,
    label: "Professional Web Forms",
    skills: ["Form Validation", "Accessibility", "Schema Based validation using Zod",
      "Remix File Upload API", "Spam Prevention using Honeypots", "CSRF Protection",
      "Rate Limiting"]
  },
  {
    cert: dataModelling,
    label: "Data Modelling",
    skills: ["Data Modeling", "Primsa", "Database Relationships", "Database migrations",
      "Seeding the Database", "SQL", "Query optimization"]
  }
]