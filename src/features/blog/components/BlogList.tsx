import {
  SubjectCard,
  SubjectCardDate,
  SubjectCardDescription,
  SubjectCardLink,
  SubjectCardTitle,
} from "@/src/components/components/SubjectCard";
import { Material } from "@/src/utils/node";
import { BlogPost } from "../blog-page.types";

export default function BlogList({ blogList }: { blogList: BlogPost[] }) {
  return (
    <>
      {blogList.map((blogList, index) => {
        return (
          <SubjectCard key={index}>
            <SubjectCardDate>{blogList.date ?? ""}</SubjectCardDate>
            <SubjectCardTitle>{blogList.title}</SubjectCardTitle>
            <SubjectCardDescription>{blogList.desc}</SubjectCardDescription>
            <SubjectCardLink href={blogList.materialLink}>
              READ MORE
            </SubjectCardLink>
          </SubjectCard>
        );
      })}
    </>
  );
}
