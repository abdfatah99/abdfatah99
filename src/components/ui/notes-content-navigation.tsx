import React from "react";

// the content navigation is the consumer of the context
// - access the context
// - use the context

interface IContentNavigation {
  nav: string[];
  //  The list of navigation provided by the page component.
}

function ContentNavigation(props: IContentNavigation) {
  return <p>{props.nav.map((item) => item + " ")}</p>;
}

export default ContentNavigation;
