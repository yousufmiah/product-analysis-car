import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className=" container text-justify blog-padding">
      <h2 className="text-center my-5">Blog page</h2>
      <p>
        <strong>Context API: </strong> Context API is a most import part for
        Reactjs. we can use it against of props drilling in application of all
        levels. share data, multiple components, function, without having to
        pass data through props manually, Context provides a way to pass data
        through the component tree without having to pass props down manually at
        every level.
      </p>
      <br />
      <hr />
      <p>
        <strong>Semantic Elements in HTML : </strong>
        These are semantic elements what are we use for html layout design,
        which is most important part of the web site and software layout design.
        What does semantic mean in HTML? Semantic HTML or semantic markup is
        HTML that introduces meaning to the web page rather than just
        presentation. For example, a tag indicates that the enclosed text is a
        paragraph. This is both semantic and presentational because people know
        what paragraphs are, and browsers know how to display them.
        <strong>
          article, aside, details, figcaption, figure, footer, header, main,
          mark, nv, section. summary, time
        </strong>
      </p>
      <br></br>
      <hr></hr>
      <p>
        <strong>inline element : </strong>
        An inline element does not start on a new line. An inline element only
        takes up as much width as necessary.
      </p>

      <br></br>
      <hr></hr>
      <p>
        <strong>block element : </strong>A block-level element always starts on
        a new line, and the browsers automatically add some space (a margin)
        before and after the element. A block-level element always takes up the
        full width available (stretches out to the left and right as far as it
        can).
      </p>

      <br></br>
      <hr></hr>
      <p>
        <strong>inline-block element : </strong>
        Compared to display: inline, the major difference is that display:
        inline-block allows to set a width and height on the element. Also, with
        display: inline-block, the top and bottom margins/paddings are
        respected, but with display: inline they are not. Compared to display:
        block, the major difference is that display: inline-block does not add a
        line-break after the element, so the element can sit next to other
        elements.
      </p>
    </div>
  );
};

export default Blogs;
