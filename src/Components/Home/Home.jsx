import { container } from "./Home.module.css";
import FormData from "../FormData/FormData";

export default function Home() {
  return (
    <div className={container}>
      <FormData />
    </div>
  );
}
