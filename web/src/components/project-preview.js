import { Link } from "gatsby";
import React from "react";
import { cn, buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import BlockText from "./block-text";

function ProjectPreview(props) {
  return (
    <Link to={`/project/${props.slug.current}`}>
      <div>
        {props.image && props.image.asset && (
          <img
            src={imageUrlFor(buildImageObj(props.image))
              .width(600)
              .height(Math.floor((9 / 16) * 600))
              .url()}
            alt={props.image.alt}
          />
        )}
      </div>
      <h3>{props.title}</h3>
      {props._rawExcerpt && (
        <div>
          <BlockText blocks={props._rawExcerpt} />
        </div>
      )}
    </Link>
  );
}

export default ProjectPreview;
