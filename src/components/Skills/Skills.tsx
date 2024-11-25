import SectionTitle from "../SectionTitle";

const Skills = () => {
  return (
    <div>
      <div>
        <SectionTitle>Skills</SectionTitle>
        <div className="flex flex-col gap-24">
          <div className="flex flex-col gap-20">
            <div className="flex flex-col gap-2">
              <h4>JavaScript 💙💙💙🤍🤍</h4>
              <span className="whitespace-pre-wrap">
                - ES6+ 를 이해하고 이를 활용하여 소규모 프로젝트 진행가능
              </span>
              <span className="whitespace-pre-wrap">- JS기반 프레임워크와 라이브러리 사용가능</span>
            </div>
            <div className="flex flex-col gap-2">
              <h4>React 💙💙💙💙🤍</h4>
              <span className="whitespace-pre-wrap">
                - Life Cycle을 이해하고, 상태관리 툴을 활용하여 소규모 프로젝트 진행 가능
              </span>
              <span className="whitespace-pre-wrap">
                - 컴포넌트 개념을 이해하고, 재사용을 위한 개발 가능
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <h4>Python 💙💙💙🤍🤍</h4>
              <span className="whitespace-pre-wrap">- Django를 활용한 백엔드 서버 개발 가능</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
