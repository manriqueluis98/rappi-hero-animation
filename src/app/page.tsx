import HeroImages from "@/components/features/HeroImages";
import ContainerFluid from "@/components/ui/ContainerFluid";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center my-4">
      <div className="hero flex gap-14 mt-20 mb-20">
        <HeroImages></HeroImages>
        <div className="titles space-y-2 max-w-[400px]">
          <h1 className="text-5xl font-bold">
            ¡Hasta 15 días de entregas gratis!
          </h1>
          <p>Para tus primeros pedidos en Restaurantes pagando con tarjeta.</p>
          <Button>Pide ahora</Button>
        </div>
      </div>
      <ContainerFluid>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
          temporibus dignissimos perspiciatis fugit unde porro in repudiandae
          tenetur? Id incidunt rerum voluptates sunt, architecto adipisci
          maiores recusandae et veritatis quibusdam corporis iusto eveniet
          facere culpa voluptate. Assumenda distinctio accusantium et inventore
          quis tempora! Deserunt, accusantium. Quas pariatur incidunt laborum
          provident consectetur eaque dolorem quod, doloremque ducimus
          blanditiis excepturi quibusdam enim quaerat maiores vel debitis autem
          vero nobis ipsum beatae est nostrum voluptatibus corporis deleniti.
          Commodi consequuntur aliquid cumque asperiores mollitia voluptatum
          amet veritatis temporibus architecto voluptate quod nesciunt quibusdam
          debitis repudiandae voluptas rem ipsum illo, hic pariatur labore
          deserunt eligendi necessitatibus fugiat dolorum? Qui reprehenderit
          aliquam nostrum sunt error reiciendis adipisci, dolor cum labore id.
          Ullam quo consequatur beatae vero illum culpa, suscipit cumque earum
          architecto sapiente unde animi. Deserunt eligendi tenetur accusamus
          soluta sunt quos nam cumque nihil impedit.
        </p>
      </ContainerFluid>
    </main>
  );
}
