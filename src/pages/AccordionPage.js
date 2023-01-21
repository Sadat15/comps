import Button from "./components/Button";
import { GoBell } from "react-icons/go";
import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: "jklj134",
      label: "Can I use React on a Project?",
      content: "You can use react on any project you like",
    },
    {
      id: "asdsa121",
      label: "Test",
      content: "Expanded",
    },
    {
      id: "dfg234sf",
      label: "Test2",
      content: "Expanded2",
    },
  ];

  return <Accordion items={items} />;
}

export default AccordionPage;
