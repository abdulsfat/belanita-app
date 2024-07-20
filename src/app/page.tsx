import { MainLayout } from "./_layout";
import { VisionSection, TextSlide, HeroSection } from "./_components";

export default function Home() {
  return (
    <main className=" ">
      <MainLayout>
        <HeroSection />
        <TextSlide />
        <VisionSection />
      </MainLayout>
    </main>
  );
}
