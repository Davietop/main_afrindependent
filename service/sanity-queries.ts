import { sanityClient } from "./sanity";
import {
  SanityPropType,
  FacultyMembersDto,
  TeamDto,
  PublicationsDto,
  PublicationDto,
  CategoriesDto,
  CompanyDto,
  PostComment,
  CommentDto,
} from "@/lib/types";

const queries = {
  // Fetches all faculty members
  faculty: `*[_type == "facultyMembers"] {
  name,
    "desc": desc,
    "image": image.asset->url,
    "slug": slug.current
}`,

  // Fetches a specific faculty member
  facultyMember: ({
    slug,
  }: SanityPropType) => `*[_type == "facultyMembers" && slug.current == "${slug}"] {
  name,
    desc,
    "image": image.asset->url,
    "slug": slug.current,
    about,
    body,
    social

}[0]`,

  // Fetches the team members
  team: `*[_type == "team"] {
  name,
    "desc": position,
    "image": image.asset->url,
    "id": slug.current
}`,

  // Fetches all publications
  publications: ({
    category,
  }: {
    category?: string;
  }) => `*[_type == "publications" ${
    category ? `&& category->slug.current == "${category}"` : ""
  }] | order(publishedAt desc) {
  title,
  intro,
  "category": category->slug.current,
  "image": mainImage.asset->url,
  "slug": slug.current,
  publishedAt,
  "author": author.name,
}`,

  // Fetches publications by author
  publicationsByAuthor: ({
    slug,
  }: SanityPropType) => `*[_type == "publications" && author.slug == "${slug}"] {
  title,
    "category": category->slug.current,
    "image": mainImage.asset->url,
    "slug": slug.current
}`,

  // Fetches for a specific publication
  singlePublication: ({
    slug,
  }: SanityPropType) => `*[_type == "publications" && slug.current == "${slug}"] {
    intro,
  title,
  "image": mainImage.asset->url,
  "category": category->slug.current,
  "categoryName": category->title,
  publishedAt,
  "author": author -> {
    name,
    desc,
    about,
    "slug": slug.current,
    "image": image.asset->url
  },
  "file": file.asset->url,
  abstract,
}[0]`,

  // Fetchers for all categories
  categories: `*[_type == "category"] {
  "slug": slug.current,
    title
}`,

  // Fetchers for all categories
  company: `*[_type == "company"] {
  email,
  phoneNumber,
  title,
  location,
  instagram,
  Twitter,
  linkedin,
  tiktok
}[0]`,

  // Fetches publications by author
  commentsBySlug: ({
    slug,
  }: SanityPropType) => `*[_type == "comment" && postSlug == "${slug}"] | order(timestamp desc) {
  author,
    email,
    text,
}`,
};

export const getFacultyMembers = async () => {
  const data: FacultyMembersDto[] = await sanityClient.fetch(queries.faculty);
  return data.sort((a, b) => {
    if (a.slug === "manuel-tacanho") {
      return -1;
    }
    if (b.slug === "manuel-tacanho") {
      return 1;
    }
    return 0;
  });
};

export const getFacultyMember = async ({ slug }: SanityPropType) => {
  const data: FacultyMembersDto = await sanityClient.fetch(
    queries.facultyMember({ slug })
  );
  return data;
};

export const getTeam = async () => {
  const data: TeamDto[] = await sanityClient.fetch(queries.team);
  return data.sort((a, b) => {
    if (a.id === "manuel-tacanho") {
      return -1;
    }
    if (b.id === "manuel-tacanho") {
      return 1;
    }
    return 0;
  });
};

export const getPublications = async ({ category }: { category?: string }) => {
  const data: PublicationsDto[] = await sanityClient.fetch(
    queries.publications({ category })
  );
  return data;
};

export const getPublicationsByAuthor = async ({ slug }: SanityPropType) => {
  const data = await sanityClient.fetch(queries.publicationsByAuthor({ slug }));
  return data;
};

export const getSinglePublication = async ({ slug }: SanityPropType) => {
  const data: PublicationDto = await sanityClient.fetch(
    queries.singlePublication({ slug })
  );
  return data;
};

export const getCategories = async () => {
  const data: CategoriesDto[] = await sanityClient.fetch(queries.categories);
  return data;
};

export const getCompany = async () => {
  const data: CompanyDto = await sanityClient.fetch(queries.company);
  return data;
};

export const createComment = async ({
  author,
  text,
  postId,
  email,
}: PostComment) => {
  const newComment = await sanityClient.create({
    _type: "comment",
    author,
    text,
    email,
    postSlug: postId,
    timestamp: new Date().toISOString(),
  });
  return newComment;
};

export const getComments = async ({ slug }: SanityPropType) => {
  const data: CommentDto[] = await sanityClient.fetch(
    queries.commentsBySlug({ slug })
  );
  return data;
};

