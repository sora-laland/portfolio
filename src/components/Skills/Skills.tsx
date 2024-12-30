import SectionTitle from "../SectionTitle";

const skillList = [
  {
    title: "JavaScript",
    descriptions: [
      "ES6+를 이해하고 이를 활용하여 소규모 프로젝트 진행가능",
      "JS기반 프레임워크와 라이브러리 사용가능",
    ],
  },
  {
    title: "TypeScript",
    descriptions: [
      "JavaScript 코드에 TypeScript를 적용하여 정적 타입 검사 및 유지보수성 향상 가능",
      "프로젝트 초기 설정부터 타입 정의 및 타입 추론을 활용한 효율적인 개발 가능",
    ],
  },
  {
    title: "React",
    descriptions: [
      "Life Cycle을 이해하고, 상태관리 툴을 활용하여 소규모 프로젝트 진행 가능",
      "컴포넌트 개념을 이해하고, 재사용을 위한 개발 가능",
    ],
  },
  {
    title: "Python",
    descriptions: ["Django를 활용한 백엔드 서버 개발 가능"],
  },
  {
    title: "Tools",
    descriptions: ["Git / GitHub / GitLab", "Figma", "JIRA"],
  },
];

const Skills = () => {
  return (
    <div>
      <SectionTitle>Skills</SectionTitle>
      <div className="flex flex-col gap-10">
        {skillList.map((skill, index) => (
          <div key={index} className="flex flex-col gap-2">
            <h4>{skill.title}</h4>
            {skill.descriptions.map((description, idx) => (
              <span key={idx} className="whitespace-pre-wrap ml-4">
                - {description}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
