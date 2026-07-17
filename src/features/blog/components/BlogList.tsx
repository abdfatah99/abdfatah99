import {
  SubjectCard,
  SubjectCardDate,
  SubjectCardDescription,
  SubjectCardLink,
  SubjectCardTitle,
} from "@/src/components/components/SubjectCard";

export default function BlogList() {
  return (
    <>
      {
        <SubjectCard>
          <SubjectCardDate>17/07/2026</SubjectCardDate>
          <SubjectCardTitle>BlogTitle</SubjectCardTitle>
          <SubjectCardDescription></SubjectCardDescription>
          <SubjectCardLink href="#">Read More</SubjectCardLink>
        </SubjectCard>
      }
    </>
  );
}
