export interface Blog {
  id: string;
  title: string;
  // date: string;
  // category: BlogCategory;
  image: string;
  intro: string;
  content: string;
  bannerImage?: string;
}

// export type BlogCategory =
//   | "IVF"
//   | "IUI"
//   | "Doctors"
//   | "Women's Health"
//   | "Male Infertility";