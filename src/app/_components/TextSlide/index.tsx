import { ParallaxSlider } from "@/app/_components";

type text = {
  text: string;
};
export function TextSlide({ text }: any) {
  return (
    <>
      <div className="select-none mt-5">
        <div className="w-full border-b-2 border-t-2 border-black">
          <h1 className="text-[max(2em,5vw)]">
            <ParallaxSlider repeat={4} baseVelocity={1}>
              <span className="px-12">{text}</span>
              <span className="spacer">—</span>
            </ParallaxSlider>
          </h1>
        </div>
      </div>
    </>
  );
}
