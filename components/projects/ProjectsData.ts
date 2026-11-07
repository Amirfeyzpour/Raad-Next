export type ProjectCategory =
  | "all"
  | "عملیات آتشباری"
  | "معادن سیمانی"
  | "عملیات حفاری"
  | "عملیات استخراج"
  | "ساخت انبارک‌های مواد ناریه"
  | "عملیات لرزه‌نگاری"
  | "ساختمان‌سازی و شهرک‌سازی"
  | "اجرای تونل و عملیات تحکیم"
  | "صادرات و واردات کالا";

export interface Project {
  id: number;
  title: string;
  description: string;
  location: string;
  year: number | null;
  image: string;
  category: ProjectCategory;
  status?: "ongoing" | "completed";
}

export interface ProjectCategoryItem {
  id: ProjectCategory;
  label: string;
}

export const projectCategories: ProjectCategoryItem[] = [
  { id: "all", label: "همه پروژه‌ها" },
  { id: "عملیات آتشباری", label: "عملیات آتشباری" },
  { id: "معادن سیمانی", label: "معادن سیمانی" },
  { id: "عملیات حفاری", label: "عملیات حفاری" },
  { id: "عملیات استخراج", label: "عملیات استخراج" },
  {
    id: "ساخت انبارک‌های مواد ناریه",
    label: "ساخت انبارک‌های مواد ناریه",
  },
  { id: "عملیات لرزه‌نگاری", label: "عملیات لرزه‌نگاری" },
  {
    id: "اجرای تونل و عملیات تحکیم",
    label: "اجرای تونل و عملیات تحکیم",
  },
  {
    id: "ساختمان‌سازی و شهرک‌سازی",
    label: "ساختمان‌سازی و شهرک‌سازی",
  },
  { id: "صادرات و واردات کالا", label: "صادرات و واردات کالا" },
];

export const projectsData: Project[] = [
  {
    id: 1,
    title: "عملیات معدن سیمان آبیک",
    description:
      "انجام عملیات آتشباری و فعالیت‌های معدنی مرتبط با معدن سیمان آبیک.",
    location: "البرز",
    year: null,
    image: "/Images/project/ابیک.webP",
    category: "معادن سیمانی",
  },
  {
    id: 2,
    title: "عملیات معدن سیمان نائین",
    description: "فعالیت‌های معدنی و عملیات مرتبط با معدن سیمان نائین.",
    location: "اصفهان",
    year: null,
    image: "/Images/project/نایین.webP",
    category: "معادن سیمانی",
  },
  {
    id: 3,
    title: "معدن سیمان سبزوار",
    description: "عملیات معدنی مرتبط با مجموعه سیمان سبزوار.",
    location: "خراسان رضوی",
    year: null,
    image: "/Images/project/سیمان سبزوار.webp",
    category: "معادن سیمانی",
  },
  {
    id: 4,
    title: "استخراج معدن سنگ‌آهن گوی‌داش",
    description:
      "پروژه استخراج سنگ‌آهن با ظرفیت اعلام‌شده سه میلیون تن در سال.",
    location: "آذربایجان شرقی",
    year: null,
    image: "/Images/project/گوی داش.webP",
    category: "معادن سیمانی",
  },
  {
    id: 7,
    title: "معدن تیتانیوم کهنوج",
    description: "پروژه معدنی مرتبط با محدوده تیتانیوم کهنوج.",
    location: "کرمان",
    year: null,
    image: "/Images/project/تیتانیوم کهنوج.webP",
    category: "عملیات استخراج",
  },
  {
    id: 8,
    title: "معدن طلای زرترشت",
    description: "فعالیت‌های معدنی مرتبط با پروژه معدن طلا.",
    location: "ایران",
    year: null,
    image: "/Images/project/طلای زرترشت.webP",
    category: "عملیات استخراج",
  },
  {
    id: 10,
    title: "کنارگذر اتوبان اراک",
    description:
      "اجرای عملیات حفاری و آتشباری مرتبط با مسیر کنارگذر اتوبان اراک.",
    location: "اراک",
    year: null,
    image: "/Images/project/کنار گذر اراک.webP",
    category: "عملیات آتشباری",
  },
  {
    id: 15,
    title: "حوضچه سد گتوند",
    description: "عملیات مرتبط با حوضچه سد گتوند.",
    location: "خوزستان",
    year: null,
    image: "/Images/project/سد گتوند.webP",
    category: "عملیات حفاری",
  },
  {
    id: 18,
    title: "سد بالارود",
    description: "عملیات مرتبط با پروژه سد بالارود.",
    location: "ایران",
    year: null,
    image: "/Images/project/سد بالارود.webP",
    category: "عملیات حفاری",
  },
  {
    id: 19,
    title: "سد زیویه کامیاران",
    description: "فعالیت‌های مرتبط با پروژه سد زیویه.",
    location: "کامیاران",
    year: null,
    image: "/images/projects/project-19.webP",
    category: "عملیات حفاری",
  },
  {
    id: 21,
    title: "سد کارون ۴",
    description: "فعالیت‌های مرتبط با پروژه سد کارون ۴.",
    location: "خوزستان",
    year: null,
    image: "/Images/project/سد کارون 4.webP",
    category: "عملیات حفاری",
  },
  {
    id: 23,
    title: "انتقال آب از مخزن به بهاران",
    description: "پروژه انتقال لوله آب از مخزن به منطقه بهاران.",
    location: "کردستان",
    year: null,
    image: "/Images/project/انتقال آب از مخزن به بهاران.webP",
    category: "عملیات حفاری",
  },
  {
    id: 25,
    title: "لرزه‌نگاری دوبعدی اهواز",
    description: "اجرای پروژه لرزه‌نگاری دوبعدی در منطقه اهواز.",
    location: "خوزستان",
    year: null,
    image: "/Images/project/لرزه نگاری.webP",
    category: "عملیات لرزه‌نگاری",
  },
  {
    id: 31,
    title: "پروژه لرزه‌نگاری بینالود",
    description: "انجام عملیات لرزه‌نگاری در منطقه بینالود.",
    location: "ایران",
    year: null,
    image: "/Images/project/پروژه لرزه‌نگاری بینالود.webP",
    category: "عملیات لرزه‌نگاری",
  },
  {
    id: 32,
    title: "خط لوله گاز دامغان–کیاسر",
    description: "پروژه لرزه‌نگاری مرتبط با مسیر خط لوله گاز دامغان–کیاسر.",
    location: "دامغان به کیاسر",
    year: null,
    image: "/Images/project/خط لوله گاز دامغان–کیاسر.webP",
    category: "عملیات لرزه‌نگاری",
  },
  {
    id: 33,
    title: "خط لوله گاز G6 کرمانشاه",
    description: "پروژه لرزه‌نگاری مرتبط با خط لوله گاز G6.",
    location: "کرمانشاه",
    year: null,
    image: "/Images/project/خط لوله گاز G6 کرمانشاه.webP",
    category: "عملیات لرزه‌نگاری",
  },
  {
    id: 35,
    title: "ویلای دوبلکس جنگلی متل‌قو",
    description: "ساخت ویلای دوبلکس جنگلی با زیربنای اعلام‌شده ۵۰۰ مترمربع.",
    location: "متل‌قو، مازندران",
    year: null,
    image: "/Images/project/ساختمان سازی شمال.webP",
    category: "ساختمان‌سازی و شهرک‌سازی",
  },
  {
    id: 36,
    title: "صادرات محصولات صنعتی به عراق",
    description:
      "صادرات سوخت، سیمان و انواع محصولات فولادی به اقلیم کردستان عراق.",
    location: "عراق",
    year: null,
    image: "/images/projects/project-36.webP",
    category: "صادرات و واردات کالا",
  },
  {
    id: 37,
    title: "معدن سیمان چابهار",
    description: "عملیات معدنی مرتبط با مجموعه سیمان چابهار.",
    location: "چابهار، سیستان و بلوچستان",
    year: null,
    image: "/Images/project/سیمان چابهار.webp",
    category: "معادن سیمانی",
  },
  {
    id: 38,
    title: "معدن سیمان داراب",
    description: "عملیات معدنی مرتبط با مجموعه سیمان داراب.",
    location: "داراب، فارس",
    year: null,
    image: "/Images/project/سیمان داراب.webp",
    category: "معادن سیمانی",
    status: "ongoing",
  },
  {
    id: 39,
    title: "معدن سیمان دشتستان",
    description: "عملیات معدنی مرتبط با مجموعه سیمان دشتستان.",
    location: "دشتستان، بوشهر",
    year: null,
    image: "/Images/project/سیمان دشتسان.webp",
    category: "معادن سیمانی",
    status: "ongoing",
  },
  {
    id: 40,
    title: "معدن سیمان شمال",
    description: "عملیات معدنی مرتبط با مجموعه سیمان شمال.",
    location: "استان تهران",
    year: null,
    image: "/Images/project/سیمان شمال.webp",
    category: "معادن سیمانی",
  },
  {
    id: 41,
    title: "معدن سیمان غرب",
    description: "عملیات معدنی مرتبط با مجموعه سیمان غرب.",
    location: "کرمانشاه",
    year: null,
    image: "/Images/project/سیمان غرب.webp",
    category: "معادن سیمانی",
    status: "ongoing",
  },
  {
    id: 42,
    title: "معدن سیمان صوفیان",
    description: "عملیات معدنی مرتبط با مجموعه سیمان صوفیان.",
    location: "صوفیان، آذربایجان شرقی",
    year: null,
    image: "/Images/project/سیمان صوفیان.webp",
    category: "معادن سیمانی",
    status: "ongoing",
  },
  {
    id: 43,
    title: "معدن سیمان فارس نو",
    description: "عملیات معدنی مرتبط با مجموعه سیمان فارس نو.",
    location: "استان فارس",
    year: null,
    image: "/Images/project/سیمان فارس نو.webp",
    category: "معادن سیمانی",
  },
  {
    id: 44,
    title: "معدن سیمان فیروزکوه",
    description: "عملیات معدنی مرتبط با مجموعه سیمان فیروزکوه.",
    location: "فیروزکوه، تهران",
    year: null,
    image: "/Images/project/سیمان فیروز کوه.webp",
    category: "معادن سیمانی",
    status: "ongoing",
  },
  {
    id: 45,
    title: "معدن سیمان کردستان",
    description: "عملیات معدنی مرتبط با مجموعه سیمان کردستان.",
    location: "استان کردستان",
    year: null,
    image: "/Images/project/سیمان کردستان.webp",
    category: "معادن سیمانی",
    status: "ongoing",
  },
  {
    id: 46,
    title: "معدن سیمان لامرد",
    description: "عملیات معدنی مرتبط با مجموعه سیمان لامرد.",
    location: "لامرد، فارس",
    year: null,
    image: "/Images/project/سیمان لامرد.webp",
    category: "معادن سیمانی",
    status: "ongoing",
  },
  {
    id: 47,
    title: "معدن سیمان مارگون",
    description: "عملیات معدنی مرتبط با مجموعه سیمان مارگون.",
    location: "کهگیلویه و بویراحمد",
    year: null,
    image: "/Images/project/سیمان مارگون.webp",
    category: "معادن سیمانی",
  },
  {
    id: 48,
    title: "معدن سیمان منددشتی",
    description: "عملیات معدنی مرتبط با مجموعه سیمان منددشتی.",
    location: "استان بوشهر",
    year: null,
    image: "/Images/project/سیمان منددشتی.webp",
    category: "معادن سیمانی",
    status: "ongoing",
  },
  {
    id: 49,
    title: "معدن سیمان دورود",
    description: "عملیات معدنی مرتبط با مجموعه سیمان دورود.",
    location: "دورود، لرستان",
    year: null,
    image: "/Images/project/سیمان دورود.webp",
    category: "معادن سیمانی",
  },
  {
    id: 50,
    title: "معدن سیمان نهاوند",
    description: "عملیات معدنی مرتبط با مجموعه سیمان نهاوند.",
    location: "نهاوند، همدان",
    year: null,
    image: "/Images/project/سیمان نهاوند.webp",
    category: "معادن سیمانی",
  },
];

export default projectsData;
