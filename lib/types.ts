export interface SanityPropType {
  slug: any;
}

export interface TeamDto {
  id: string;
  name: string;
  desc: string;
  image: string;
}

export interface FacultyMembersDto {
  slug: string;
  name: string;
  desc: string;
  image: string;
  about: string;
  social: {
    instagram: string;
    linkedin: string;
    email: string;
    twitter: string;
  };
  body: any;
}

export interface PublicationsDto {
  slug: string;
  title: string;
  intro: string;
  category: string;
  image: string;
  publishedAt: string;
  author: string;
}

export interface PublicationDto {
  intro: string;
  title: string;
  category: string;
  categoryName: string;
  image: string;
  publishedAt: string;
  author: {
    desc: string;
    about: string;
    name: string;
    slug: string;
    image: string;
  };
  file: string;
  abstract: any;
}

export interface CategoriesDto {
  slug: string;
  title: string;
}

export interface CompanyDto {
  email: string;
  phoneNumber: string;
  title: string;
  location: string;
  instagram: string;
  Twitter: string;
  linkedin: string;
  tiktok: string;
  youtube: string;
}

export interface PostComment {
  author: string;
  email: string;
  text: string;
  postId: string;
}

export interface CommentDto {
  author: string;
  email: string;
  text: string;
}
