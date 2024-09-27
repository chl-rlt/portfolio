import Image from "next/image";
import { useState } from "react";

export function FeaturedImageGallery({
  data,
}: {
  data: { imgelink: string }[];
}) {
  const [active, setActive] = useState(data[0].imgelink);

  return (
    <div className="grid gap-4">
      <div>
        <Image
          className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
          src={active}
          alt=""
          width={1000}
          height={1000}
        />
      </div>
      <div className="grid grid-cols-5 gap-4">
        {data.length > 1 &&
          data.map(({ imgelink }, index) => (
            <div key={index}>
              <Image
                onClick={() => setActive(imgelink)}
                src={imgelink}
                className="h-20 max-w-full cursor-pointer rounded-lg object-cover object-center"
                alt="gallery-image"
                width={130}
                height={20}
              />
            </div>
          ))}
      </div>
    </div>
  );
}
