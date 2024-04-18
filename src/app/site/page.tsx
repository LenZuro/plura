import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="h-full w-full md:pt-44 mt-[-70px] relative flex items-center justify-center flex-col">
        <div className="absolute bottom-0 left-0 right-0 top-0 inset-0 -z-10 h-full w-full dark:bg-[radial-gradient(#161616_1px,transparent_1px)] [background-size:16px_16px]" />
        <p className="text-center"> Run your Agency, in one place</p>
        <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
          <h1 className="text-9xl font-bold text-center md:text-[300px]">
            Plura.
          </h1>
        </div>
        <div className="flex justify-center items-center relative md:mt-[-35px]">
          <Image
            src={"/assets/preview.png"}
            alt="banner image"
            height={1200}
            width={1200}
            className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted"
          />
          <div className="bottom-0 top-[50%] bg-gradient-to-t dark:from-background left-0 right-0 absolute z-10"></div>
        </div>
      </section>
    </>
  );
}
