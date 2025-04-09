import "./header.css";

export interface HeaderProps {
  name: string;
  setName: (name: string) => void;
}

export function Header(props: HeaderProps) {
  return (
    <div>
      <div className="faded">
        {"Based on "}
        <a href="https://www.tumblr.com/mirrorbird/699387005691379712/this-is-genuinely-one-of-the-best-character">
          https://www.tumblr.com/mirrorbird/699387005691379712/this-is-genuinely-one-of-the-best-character
        </a>
      </div>
      <h1 style="align-items: center; display: flex; flex-direction: row;">
        <div style="margin-right: 6px;">OMG it's</div>
        <div
          className="header-blorbo-name"
          contentEditable="true"
          onBlur={(e) => props.setName((e.target as any).textContent)}
          dangerouslySetInnerHTML={{__html: props.name}}
        >
        </div>
      </h1>
    </div>
  );
}
