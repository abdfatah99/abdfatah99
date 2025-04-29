import chalk from "chalk";
import path from "path";
import { Dirent } from "fs";
import util from "util";

export class Logger {
  private sourceFile: string;

  constructor(sourceFile: string) {
    // [2] because i wanto make the source file as file-link so then when the log
    //     displayed the message, I can click the link to the file.
    //     to achieve that, I need to convert the path to absolute path
    // this.sourceFile = path.resolve(sourceFile);

    this.sourceFile = sourceFile;
  }

  // [1]
  private clickableSource(): string {
    // Encode spaces and other special characters in the file path
    // const encodedPath = this.sourceFile.replace(/ /g, "%20");
    const encodedPath = this.sourceFile;
    return `./${encodedPath}`;
  }

  // logContext(context: string, data: Record<string, unknown> = {}){
  logContext(context: string, data: Record<string, unknown>) {
    console.log(
      chalk.blue(
        [
          `[LOG] Source: ${this.clickableSource()}`,
          `[LOG] Context: ${context}`,
          `[LOG] Data: ${JSON.stringify(data)}`,
          `[LOG] Timestamp: ${new Date().toISOString()}`,
        ].join("\n"),
      ),
    );
  }

  /**
   * Catch or inspect data flow from a process or source
   *
   * @param step {string}
   * @param data {Record<string, unknown>}
   */
  // logFlow(step: string, data: Record<string, unknown> | string[] | Dirent[]) {
  logFlow(step: string, data: unknown) {
    console.log(typeof data);
    console.log(
      chalk.blue(
        [
          `[FLOW] Source: ${this.clickableSource()}`,
          `[FLOW] Step: ${step}`,
          // `[FLOW] Data: ${JSON.stringify(data, null, 2)}`,
          `[FLOW] Data: ${util.inspect(data, { depth: null, colors: false })}`,
          `[FLOW] Timestamp: ${new Date().toISOString()}`,
        ].join("\n"),
      ),
    );
  }

  error(context: string, error: unknown) {
    console.log(chalk.red(`\n[ERROR] Source: ${this.sourceFile}`));
    console.log(chalk.red(`\n[ERROR] Context: ${context}`));
    console.log(
      chalk.red(
        `\n[ERROR] Message:`,
        error instanceof Error ? error.message : error,
      ),
    );
    console.log(
      chalk.red(
        `\n[ERROR] Stack:`,
        error instanceof Error ? error.stack : "N/A",
      ),
    );
    console.log(
      chalk.red(`\n[ERROR] TimeStamp: ${new Date().toISOString()} \n`),
    );
  }
}
