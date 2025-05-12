import useSWR from "swr";

import { getComments } from "@/service/sanity-queries";
import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { IBM_Plex_Sans } from 'next/font/google';
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],          // Or 'latin-ext' if needed
  weight: ['400', '500', '700'], // Optional: choose weights you use
  display: 'swap',             // Optional: improves text rendering
});

const useGetComments = ({ slug }: { slug: string }) => {
  const fetcher = () => {
    return getComments({ slug });
  };
  const { data, isLoading, error, mutate } = useSWR(`comment-${slug}`, fetcher);
  return { data, isLoading, error, mutate };
};

export function SkeletonCommentCard() {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}

const Comments = ({ slug }: { slug: string }) => {
  const { data, isLoading } = useGetComments({ slug });

  return isLoading ? (
    <section className={`${ibmPlexSans.className} grid grid-cols-1 lg:grid-cols-2 gap-[60px]`}>
      {Array(2)
        .fill(0)
        .map((_, index) => {
          return <SkeletonCommentCard key={index} />;
        })}
    </section>
  ) : (
    <section className="overflow-y-auto">
      {(data || []).map(({ author, email, text }, index) => {
        const initials = () => {
          const nameArray = author.split(" ");
          return `${nameArray[0]?.[0] || ""}${nameArray[1]?.[0] || ""}`;
        };
        return (
          <div
            key={`${author}-${index}`}
            className="space-y-4 py-4 border-b-[1px]"
          >
            <div className="flex space-x-3 items-center">
              <Avatar className="h-12 w-12">
                <AvatarFallback className=" bg-gray-200 text-black  text-xl">
                  {initials()}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col justify-center">
                <p className=" font-medium ">{author}</p>
                <small className="">{email}</small>
              </div>
            </div>
            <p className=" text-sm">{text}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Comments;
