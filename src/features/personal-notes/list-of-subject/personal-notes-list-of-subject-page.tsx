import { SubjectMetadata } from "@/src/utils/node.types";
import {
  AppMainFrame,
  AppMainFrameBadge,
  AppMainFrameContent,
  AppMainFrameDescription,
  AppMainFrameTitle,
} from "../../../components/components/AppMainContentFrame";

import PSSubjectList from "./components/SubjectList";
import { GetListOfPersonalNotesSubjectRoot } from "./personal-notes-list-of-subject-hook";




export default function PersonalNotesListOfSubjectPage() {
  const listOfSubjects: SubjectMetadata[] = GetListOfPersonalNotesSubjectRoot();

  return (

      <AppMainFrame>
        <AppMainFrameBadge>SWE</AppMainFrameBadge>
        <AppMainFrameTitle>Personal Notes Subjects</AppMainFrameTitle>
        <AppMainFrameDescription>
          List All Subject that I capable of.
        </AppMainFrameDescription>
        <AppMainFrameContent>
          <PSSubjectList subjectList={listOfSubjects}></PSSubjectList>
        </AppMainFrameContent>
      </AppMainFrame>

  )
}

