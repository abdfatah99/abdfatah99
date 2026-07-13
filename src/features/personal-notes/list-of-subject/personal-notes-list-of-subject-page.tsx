import {
  PSMainFrame,
  PSMainFrameBadge,
  PSMainFrameContent,
  PSMainFrameDescription,
  PSMainFrameTitle,
} from "../components/PersonalNotesMainContentFrame";
import ListCard from "./components/ListCard";

export default function PersonalNotesListOfSubjectPage() {
  return (
    <PSMainFrame>
      <PSMainFrameBadge>SWE</PSMainFrameBadge>
      <PSMainFrameTitle>Personal Notes Subjects</PSMainFrameTitle>
      <PSMainFrameDescription>
        List All Subject that I capable of.
      </PSMainFrameDescription>
      <PSMainFrameContent>{<ListCard></ListCard>}</PSMainFrameContent>
    </PSMainFrame>
  );
}
