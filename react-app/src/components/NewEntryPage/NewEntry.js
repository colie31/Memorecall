import React from "react";

import TopPage from "../EntryPage/PageComponents/TopPage"
import LayoutOne from "../EntryPage/Children/LayoutOne"
import LayoutTwo from "../EntryPage/Children/LayoutTwo"


const NewEntry = ({
    pageLayout,
    setPageLayout,
    editable,
    body,
    imageOne,
    setImageOne,
    categories,
    category,
    setCategory
}) => {


    let page;
    if (pageLayout === 1) {
      page = <LayoutOne editable={editable} body={body} />;
    } else if (pageLayout === 2) {
      body.current = body;
      page = (
        <LayoutTwo
          editable={editable}
          body={body}
          imageOne={imageOne}
          setImageOne={setImageOne}
        />
      );
    }

    return (
      <div className="entry-body__page">
          <>
            <TopPage
              editable={editable}
              categories={categories}
              category={category}
              setCategory={setCategory}
            />
            {page}
          </>
      </div>
    );
}

export default NewEntry;