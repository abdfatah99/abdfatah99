/**
 * 1. page get link
 * 2. page preparee the link
 * 3. acceskls directory content from one single gate -> function to get content
 * 4. function return list of data from the directory
 * 5. process the data then display it to FE (page)
 *
 * 1. hook -> get data
 * 2. page UI -> display data
 */

import config from "@/src/utils/config";
import { Directory } from "@/src/utils/node";
import { SubjectMetadata } from "@/src/utils/node.types";
import path from "path";

export function GetListOfPersonalNotesSubjectRoot() {
  // const personalNotesRootPath = path.join(config.personalNotesBase)

  // instanciate directory class for general notes
  const rootPersonalNotesDirectory = new Directory(config.personalNotesBase);

  const listOfSubjects: Directory[] =
    rootPersonalNotesDirectory.getChildrenDirectory();

  const subjectMetadata: SubjectMetadata[] = listOfSubjects.map(
    (subject): SubjectMetadata => {
      return {
        title: subject.getDirectoryName(),
        description: subject.getDescription(),
        url: subject.getDirNodeURLPath(),
        date: subject.getDirectoryDate()
      };
    },
  );

  return subjectMetadata;
}

