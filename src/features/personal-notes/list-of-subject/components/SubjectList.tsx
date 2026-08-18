import {
  SubjectCardDate,
  SubjectCardDescription,
  SubjectCard,
  SubjectCardLink,
  SubjectCardTitle,
} from "@/src/components/components/SubjectCard";
import { SubjectMetadata } from "@/src/utils/node.types";

/**
 *
 * List of data to feed in into this component
 * complete structure of the PersonalNotesMainFrame
 *
 * @returns
 */
export default function PSSubjectList({
  subjectList,
}: {
  subjectList: SubjectMetadata[];
}) {
  return (
    <>
      {subjectList.map((subject, index) => {
        return (
          <SubjectCard key={index}>
            <SubjectCardDate>{subject.date ?? ""}</SubjectCardDate>
            <SubjectCardTitle>{subject.title}</SubjectCardTitle>
            <SubjectCardDescription>
              {subject.description}
            </SubjectCardDescription>
            <SubjectCardLink href={subject.url}>read more</SubjectCardLink>
          </SubjectCard>
        );
      })}
    </>
  );
}
{
  /*
   */
}
