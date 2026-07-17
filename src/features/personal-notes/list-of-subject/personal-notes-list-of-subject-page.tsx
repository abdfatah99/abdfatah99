import {
  AppMainFrame,
  AppMainFrameBadge,
  AppMainFrameContent,
  AppMainFrameDescription,
  AppMainFrameTitle,
} from "../../../components/components/AppMainContentFrame";
import PSSubjectList from "./components/SubjectList";

export default function PersonalNotesListOfSubjectPage() {
  return (
    <AppMainFrame>
      <AppMainFrameBadge>SWE</AppMainFrameBadge>
      <AppMainFrameTitle>Personal Notes Subjects</AppMainFrameTitle>
      <AppMainFrameDescription>
        List All Subject that I capable of.
      </AppMainFrameDescription>
      <AppMainFrameContent>
        <PSSubjectList></PSSubjectList>
      </AppMainFrameContent>
    </AppMainFrame>
  );
}
