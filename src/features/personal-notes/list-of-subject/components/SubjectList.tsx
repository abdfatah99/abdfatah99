import {
  SubjectCardDate,
  SubjectCardDescription,
  SubjectCard,
  SubjectCardLink,
  SubjectCardTitle,
} from "@/src/components/components/SubjectCard";

/**
 *
 * List of data to feed in into this component
 * complete structure of the PersonalNotesMainFrame
 *
 * @returns
 */
export default function PSSubjectList() {
  return (
    <>
      {
        <SubjectCard>
          <SubjectCardDate>06, 2026</SubjectCardDate>
          <SubjectCardTitle>Database</SubjectCardTitle>
          <SubjectCardDescription>
            Intelligence Storage Management
          </SubjectCardDescription>
          <SubjectCardLink href={"/personal-notes/database"}>
            read more
          </SubjectCardLink>
        </SubjectCard>
      }
    </>
  );
}
