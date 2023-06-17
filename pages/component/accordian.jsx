import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 font-[700] transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>
  );
}

export default function Accordions() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Fragment>
      <Accordion
        open={open === 1}
        icon={<Icon id={1} open={open} />}
        className="w-[90%] lg:w-[60%] mx-auto border-[1px] border-white py-1 px-5 mt-10 rounded-2xl"
      >
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className="font-[700] text-[20px] text-[#2D2D46D9]"
        >
          1. Lorem ipsum dolor sit amet consectetur.
        </AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>

      <Accordion
        open={open === 2}
        icon={<Icon id={2} open={open} />}
        className="w-[90%] lg:w-[60%] mx-auto border-[1px] border-white py-1 px-5 mt-5  rounded-2xl"
      >
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className="font-[700] text-[20px] text-[#2D2D46D9]"
        >
          2. Lorem ipsum dolor sit amet consectetur.
        </AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>

      <Accordion
        open={open === 3}
        icon={<Icon id={3} open={open} />}
        className="w-[90%] lg:w-[60%] mx-auto border-[1px] border-white py-1 px-5 mt-5  rounded-2xl"
      >
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className="font-[700] text-[20px] text-[#2D2D46D9]"
        >
          3. Lorem ipsum dolor sit amet consectetur.
        </AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>

      <Accordion
        open={open === 4}
        icon={<Icon id={4} open={open} />}
        className="w-[90%] lg:w-[60%] mx-auto border-[1px] border-white py-1 px-5 mt-5  rounded-2xl"
      >
        <AccordionHeader
          onClick={() => handleOpen(4)}
          className="font-[700] text-[20px] text-[#2D2D46D9]"
        >
          4. Lorem ipsum dolor sit amet consectetur.
        </AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 5}
        icon={<Icon id={5} open={open} />}
        className="w-[90%] lg:w-[60%] mx-auto border-[1px] border-white py-1 px-5 mt-5  rounded-2xl"
      >
        <AccordionHeader
          onClick={() => handleOpen(5)}
          className="font-[700] text-[20px] text-[#2D2D46D9]"
        >
          5. Lorem ipsum dolor sit amet consectetur.
        </AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
    </Fragment>
  );
}
