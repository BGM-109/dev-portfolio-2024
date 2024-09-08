import Image from "next/image";
import Link from "next/link";
import AvatarImage from "../../public/avatar.png";
import { buttonVariants } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

type Post = {
  title: string;
  description: string;
  link: string;
  createdAt: Date;
};

const works: Post[] = [];
const job = "Frontend Developer";
const description =
  "I'm Myoung seon,\nI write code, and I love Athletic(Crossfit, Bodybuilding)";
const posts = [
  {
    title: "Who am I?",
    description:
      "I'm Myoung seon, I write code, and I love Athletic(Crossfit, Bodybuilding)",
    link: "/about",
    createdAt: new Date("2024-09-08"),
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-y-10">
      <section className="flex flex-col items-start justify-center p-10 gap-y-4">
        <Image
          src={AvatarImage}
          alt="avatar"
          width={64}
          height={64}
          className="rounded-full"
        />
        <h1 className="text-4xl font-bold">{job}</h1>

        <p className="text-base text-muted-foreground whitespace-pre">
          {description}
        </p>

        <div>
          <Link
            className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
            href={"https://github.com/BGM-109"}
            target="_blank"
          >
            <GitHubLogoIcon className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <section>
        <div className="text-center">
          <h2 className="text-2xl font-bold">This is My work</h2>
          <p className="text-muted-foreground">Try Link to see more</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          {works.length === 0 && (
            <div className="min-h-[250px] flex items-center justify-center">
              Not yet....
            </div>
          )}
        </div>
      </section>

      <section className="flex flex-col py-5">
        {posts.map((post, index) => (
          <Link
            href={post.link}
            key={index}
            className="px-4 py-6 hover:bg-secondary border-none gap-y-2 flex flex-col hover:cursor-pointer w-fit rounded-lg"
          >
            <div className="flex items-center">
              <div className="w-1 h-4 bg-secondary mr-2" />
              <p className="text-muted-foreground text-xs">
                {new Date(post.createdAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
            </div>
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p className="text-muted-foreground">{post.description}</p>
            <p className="text-primary font-bold text-sm">Read Post →</p>
          </Link>
        ))}
      </section>
    </div>
  );
}
