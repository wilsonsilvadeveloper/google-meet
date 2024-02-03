import Image from "next/image";
import Header from "@/src/components/Header";
import Container from "@/src/components/Container";
import { Input } from "@/src/components/input";
import Button from "@/src/components/button";

export default function Home() {
  return (
    <main className=" min-h-screen flex flex-col">
      <Header/>
        <div className="mx-auto w-full h-full flex flex-1 items-center justify-center">
          <Container>
            <div className="max-x-[580px] bg-secondary p-4 rounded-lg">
              <div>
                <span>Ingressar</span>
                <span>Nova Reunião</span>
              </div>
              <div className="space-y-4">
                <Input placeholder="Digite o codigo da Reunião" type="text"/>
                <Input placeholder="Digite o codigo da Reunião" type="text"/>
                <Button title="Entar" type="submit"/>
              </div>
            </div>
          </Container>
        </div>
    </main>
  );
}
