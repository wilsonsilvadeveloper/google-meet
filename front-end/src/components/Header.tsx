import Image from "next/image";
import Container from "./Container";

export default function Header() {
  return (
    <div className="bg-gray-1000 p-4">
      <Container>
        <div className="flex justify-between">
          <Image alt="talk to me" src="/img/logo.svg" width={110} height={110}/>
          <Image alt="hero" src="/img/herocode.svg" width={60} height={60} />
        </div>
      </Container>
    </div>
  );
}
