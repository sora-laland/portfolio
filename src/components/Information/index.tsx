import Image from "next/image";

import ContactItem from "../ContactItem";
import Introduce from "./Introduce";

import { DataProps } from "@/types";
import profileImg from "@/assets/images/profile_img.jpg";

const Information = ({ information }: Pick<DataProps, "information">) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="relative flex shrink gap-8 items-start">
        <div className="hidden md:block relative w-40 shrink-0 h-40">
          <Image
            src={profileImg}
            alt="프로필사진"
            className="relative object-cover rounded-full border-[1px] border-GRAY_LIGHT border-solid w-40 h-40 z-20"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="leading-[1.15]">
            {/* 포지션에 맞게 문구를 수정해주세요. 혹은, 본인이 원하는 대로 문구를 바꿔주세요. */}
            안녕하세요,
            <br /> 프론트엔드 개발자{" "}
            <span className="text-PRIMARY font-semibold">{information.name}</span>
            입니다.
          </h1>
          <div className="flex gap-1">
            {information.contact.map((contact) => (
              <ContactItem
                key={contact.id}
                className="text-BLACK hover:text-PRIMARY_HEAVY dark:hover:text-PRIMARY_HEAVY"
                {...contact}
              >
                {contact.name}
              </ContactItem>
            ))}
          </div>
        </div>
      </div>
      <Introduce markdown={information.markdown} />
    </div>
  );
};

export default Information;
