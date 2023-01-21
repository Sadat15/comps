import Button from "../components/button";
import { GoBell } from "react-icons/go";

function ButtonPage() {
  const handleClick = () => {
    console.log("click!");
  };

  return (
    <div>
      <div>
        <Button danger>Click me!</Button>
      </div>
      <div>
        <Button warning>Buy now</Button>
      </div>
      <div>
        <Button sucess>Add to cart</Button>
      </div>
      <div>
        <Button secondary>
          <GoBell />
          test
        </Button>
      </div>
      <div>
        <Button primary outline onClick={handleClick}>
          test
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
