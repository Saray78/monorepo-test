// pnpm-monorepo/packages/main/App.tsx
// @ts-ignore
import { sayHi } from "@pnpm-monorepo/shared";

const App = () => {
  sayHi("Vedansh");
  // @ts-ignore
  return <h1>Main app</h1>;
};
export default App;
