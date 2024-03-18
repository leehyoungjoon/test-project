export const menuList = [
  { title: "진로학업설계", link: "/base/careerAptitudeTest" },
  { title: "학업관리", link: "/base/mySubject" },
  { title: "진로정보", link: "/base/jobInformation" },
  { title: "상담", link: "/base/counseling" },
  // { title: "마이커디", link: "/base/messageManagement" },
]

export const SIDEBAR_MENUS = [
  {
    id: 1,
    title: "진로학업설계",
    subMenu: [
      { path: "/base/careerAptitudeTest", label: "진로심리검사" },
      { path: "/base/careerPlan", label: "진로설계" },

      { path: "/base/creditPlan", label: "학업설계" },
      // { path: "/base/demandSurvey", label: "수요조사" },
      // { path: "/base/coupon", label: "TEST" },
    ],
  },
  {
    id: 2,
    title: "학업관리",
    subMenu: [
      // { path: "/base/mySubject", label: "내 과목" },
      // { path: "/base/mySubject", label: "내 시간표" },
      // { path: "/base/mySubject", label: "진로활동 매니저" },

      // { path: "/base/careerActivityManager", label: "교과활동 매니저" },
      { path: "/base/specialtiesManager", label: "세특지원 매니저" }, // subjectActivityManager
    ],
  },
  {
    id: 3,
    title: "진로정보",
    subMenu: [
      { path: "/base/informationJob", label: "직업정보" },
      { path: "/base/informationMajor", label: "학과정보" },
      { path: "/", label: "직업-학과 매트릭스" },
      { path: "/base/informationSubject", label: "과목정보" },
      { path: "/base/informationCardnews", label: "카드뉴스" },
    ],
  },
  {
    id: 4,
    title: "상담",
    subMenu: [
      { path: "/base/counseling", label: "상담신청" },
      { path: "/base/counseling/list", label: "상담내역" },
      // { path: "/base/counseling/listTeacher", label: "상담관리" },
      // { path: "/base/counseling/statistics", label: "상담통계" },
    ],
  },
  // {
  //   id: 5,
  //   title: "마이커디",
  //   subMenu: [
  //     { path: "/base/careerPlan", label: "메시지 관리" },
  //     { path: "/base/careerPlan", label: "내 자료 관리" },
  //     { path: "/base/careerPlan", label: "프로필 확인·수정" },
  //     { path: "/base/careerPlan", label: "개인정보 설정" },
  //     { path: "/base/careerPlan", label: "LMS 관리" },
  //     { path: "/base/careerPlan", label: "학교별 설정" },
  //   ],
  // },
]

export const SIDEBAR_MENUS_TEACHER = [
  {
    id: 1,
    title: "진로학업설계",
    subMenu: [
      { path: "/base/careerAptitudeTest", label: "진로심리검사" },
      { path: "/base/careerPlan", label: "진로설계" },

      { path: "/base/creditPlan", label: "학업설계" },
      // { path: "/base/demandSurvey", label: "수요조사" },
      // { path: "/base/coupon", label: "TEST" },
    ],
  },
  {
    id: 2,
    title: "학업관리",
    subMenu: [
      // { path: "/base/mySubject", label: "내 과목" },
      // { path: "/base/mySubject", label: "내 시간표" },
      // { path: "/base/mySubject", label: "진로활동 매니저" },

      // { path: "/base/careerActivityManager", label: "교과활동 매니저" },
      { path: "/base/specialtiesManager", label: "세특지원 매니저" }, // subjectActivityManager
    ],
  },
  {
    id: 3,
    title: "진로정보",
    subMenu: [
      { path: "/base/informationJob", label: "직업정보" },
      { path: "/base/informationMajor", label: "학과정보" },
      { path: "/", label: "직업-학과 매트릭스" },
      { path: "/base/informationSubject", label: "과목정보" },
      { path: "/base/informationCardnews", label: "카드뉴스" },
    ],
  },
  {
    id: 4,
    title: "상담",
    subMenu: [
      // { path: "/base/counseling", label: "상담신청" },
      // { path: "/base/counseling/list", label: "상담내역" },
      { path: "/base/counseling/listTeacher", label: "상담관리" },
      { path: "/base/counseling/statistics", label: "상담통계" },
    ],
  },
  // {
  //   id: 5,
  //   title: "마이커디",
  //   subMenu: [
  //     { path: "/base/careerPlan", label: "메시지 관리" },
  //     { path: "/base/careerPlan", label: "내 자료 관리" },
  //     { path: "/base/careerPlan", label: "프로필 확인·수정" },
  //     { path: "/base/careerPlan", label: "개인정보 설정" },
  //     { path: "/base/careerPlan", label: "LMS 관리" },
  //     { path: "/base/careerPlan", label: "학교별 설정" },
  //   ],
  // },
]
