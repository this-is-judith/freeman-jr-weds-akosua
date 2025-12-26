export default function ProgramOutline() {
  return (
    <div className="w-full bg-off-white">
      {/* Mobile version - cropped images */}
      <div className="md:hidden">
        <img
          src="/wedding-brochure-1-cropped-right.png"
          alt="Wedding Program Outline - Page 1 Right"
          className="w-full h-auto block"
        />
        <img
          src="/wedding-brochure-2-cropped-left.png"
          alt="Wedding Program Outline - Page 2 Left"
          className="w-full h-auto block"
        />
        <img
          src="/wedding-brochure-2-cropped-middle.png"
          alt="Wedding Program Outline - Page 2 Middle"
          className="w-full h-auto block"
        />
        <img
          src="/wedding-brochure-1-cropped-left.png"
          alt="Wedding Program Outline - Page 1 Left"
          className="w-full h-auto block"
        />
        <img
          src="/wedding-brochure-2-cropped-right.png"
          alt="Wedding Program Outline - Page 2 Right"
          className="w-full h-auto block"
        />
        <img
          src="/wedding-brochure-1-cropped-middle.png"
          alt="Wedding Program Outline - Page 1 Middle"
          className="w-full h-auto block"
        />
      </div>

      {/* Desktop version - full images */}
      <img
        src="/wedding-brochure-1.png"
        alt="Wedding Program Outline - Page 1"
        className="w-full h-auto hidden md:block"
      />
      <img
        src="/wedding-brochure-2.png"
        alt="Wedding Program Outline - Page 2"
        className="w-full h-auto hidden md:block"
      />
    </div>
  );
}
